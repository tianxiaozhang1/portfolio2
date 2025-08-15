import random

def generate_maze():
    width = 42
    height = 21
    
    grid = [[1 for _ in range(width)] for _ in range(height)] # All walls (1)

    start_node = (0, 0)
    end_node = (height - 1, width - 1) # (20, 41)
    
    # Forced path points (row 10 -> index 9, middle 4 columns)
    # Middle 4 columns for width 42 (0-indexed) are 19, 20, 21, 22.
    forced_middle_points = [(9, 19), (9, 20), (9, 21), (9, 22)]

    # Helper function to carve a direct path segment between two points
    def carve_segment(r1, c1, r2, c2):
        curr_r, curr_c = r1, c1
        while True:
            grid[curr_r][curr_c] = 0 # Mark as path (0)
            
            if curr_r == r2 and curr_c == c2:
                break # Segment connected

            moved = False
            # Prefer moving vertically first, then horizontally, for a consistent path shape
            if curr_r != r2:
                next_r = curr_r + (1 if curr_r < r2 else -1)
                if 0 <= next_r < height:
                    curr_r = next_r
                    moved = True
            
            if not moved and curr_c != c2:
                next_c = curr_c + (1 if curr_c < c2 else -1)
                if 0 <= next_c < width:
                    curr_c = next_c
                    moved = True
            
            if not moved: # Should not happen if points are reachable
                break

    # Phase 1: Carve the primary path (forced segments)
    # Segment 1: From start to the first forced point
    carve_segment(start_node[0], start_node[1], forced_middle_points[0][0], forced_middle_points[0][1])

    # Segment 2: Between the forced middle points
    for i in range(len(forced_middle_points) - 1):
        carve_segment(forced_middle_points[i][0], forced_middle_points[i][1],
                      forced_middle_points[i+1][0], forced_middle_points[i+1][1])

    # Segment 3: From the last forced point to the end
    carve_segment(forced_middle_points[-1][0], forced_middle_points[-1][1], end_node[0], end_node[1])

    # Phase 2: Fill the remaining wall areas with dead ends using a modified Recursive Backtracking (DFS)
    # This DFS will only carve into '1' cells (walls) and will not overwrite '0' cells from the main path
    # unless it's to extend a path from an adjacent cell. This prevents creating new full-length paths.
    
    visited_dfs = set()
    dfs_stack = []

    # Add all cells that are already paths (0s) to visited_dfs to prevent carving over them
    # and to act as starting points for secondary paths
    for r in range(height):
        for c in range(width):
            if grid[r][c] == 0:
                visited_dfs.add((r, c))

    # Iterate through all cells to ensure all possible branches are explored
    for r_start in range(height):
        for c_start in range(width):
            if grid[r_start][c_start] == 0 and (r_start, c_start) not in visited_dfs:
                # If we encounter an unvisited path cell, it means it's part of a new segment
                # or a previously untouched area. This usually shouldn't happen if Phase 1
                # correctly initializes. But if it did, ensure it's handled.
                # For a "perfect maze", we want to start DFS from any unvisited cell.
                # However, since we pre-carved, we want to start from *any* path cell and
                # extend outwards into the walls.
                dfs_stack.append((r_start, c_start))
                visited_dfs.add((r_start, c_start)) # Add to visited when starting DFS

            while dfs_stack:
                current_r, current_c = dfs_stack[-1]
                
                # Possible directions for carving (moving 2 steps to carve a wall in between)
                # These are relative coordinates for (next_cell_r, next_cell_c) and (wall_cell_r, wall_cell_c)
                potential_moves = []
                dr_dc_pairs = [(-2, 0), (2, 0), (0, -2), (0, 2)] # Up, Down, Left, Right
                random.shuffle(dr_dc_pairs) # Randomize exploration order

                found_unvisited_neighbor = False
                for dr, dc in dr_dc_pairs:
                    next_r, next_c = current_r + dr, current_c + dc
                    wall_r, wall_c = current_r + dr // 2, current_c + dc // 2

                    if (0 <= next_r < height and 0 <= next_c < width and
                        (next_r, next_c) not in visited_dfs):
                        
                        # Only carve if the target cell is currently a wall (1)
                        # This prevents creating new unintended connections between existing path segments
                        # that would lead to multiple solutions.
                        if grid[next_r][next_c] == 1:
                            grid[wall_r][wall_c] = 0 # Carve the wall
                            grid[next_r][next_c] = 0 # Carve the next cell
                            visited_dfs.add((next_r, next_c))
                            dfs_stack.append((next_r, next_c))
                            found_unvisited_neighbor = True
                            break # Found a path, continue DFS from new cell

                if not found_unvisited_neighbor:
                    dfs_stack.pop() # Backtrack if no unvisited neighbors from current cell

    return grid

# Generate the maze
maze_grid_result = generate_maze(42, 21)

# Print the maze in the specified format
print("grid = [")
for r_idx, row in enumerate(maze_grid_result):
    # Format each row as [0,0,...,0,0]
    row_str = "[" + ",".join(map(str, row)) + "]"
    if r_idx < len(maze_grid_result) - 1:
        print(f"  {row_str},")
    else:
        print(f"  {row_str}")
print("]")