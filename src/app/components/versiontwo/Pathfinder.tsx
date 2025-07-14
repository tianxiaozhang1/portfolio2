import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

let newGrid2 = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1],
    [1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1],
    [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
    [1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1],
    [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1],
    [1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,3,3,3,3,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1],
    [1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,2,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1],
    [1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1],
    [1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1],
    [1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,2,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
    [1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,2,1,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,1,1,0,1],
    [1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,0,1],
    [1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,1,1,0,1],
    [1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
    [1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
    [1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0]
];

// Helper function to convert hex to RGB
const hexToRgb = (hex) => {
    let r = 0, g = 0, b = 0;
    // Handle 3-digit hex
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    }
    // Handle 6-digit hex
    else if (hex.length === 7) {
        r = parseInt(hex.substring(1, 3), 16);
        g = parseInt(hex.substring(3, 5), 16);
        b = parseInt(hex.substring(5, 7), 16);
    }
    return { r, g, b };
};

// Helper function to convert RGB to hex
const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const Pathfinder = () => {
    const componentRef = useRef(null);
    const [pathColors, setPathColors] = useState({});
    const [animationStarted, setAnimationStarted] = useState(false);
    const [displayedGrid, setDisplayedGrid] = useState(newGrid2); // State to hold the grid including character changes

    // Define the path coordinates for 2s and 3s in order
    const pathCoordinates = [
        // Row 4 (16 cells)
        { row: 4, col: 4 }, { row: 4, col: 5 }, { row: 4, col: 6 }, { row: 4, col: 7 },
        { row: 4, col: 8 }, { row: 4, col: 9 }, { row: 4, col: 10 }, { row: 4, col: 11 },
        { row: 4, col: 12 }, { row: 4, col: 13 }, { row: 4, col: 14 }, { row: 4, col: 15 },
        { row: 4, col: 16 }, { row: 4, col: 17 }, { row: 4, col: 18 }, { row: 4, col: 19 },
        // Row 5 (1 cell)
        { row: 5, col: 19 },
        // Row 6 (1 cell)
        { row: 6, col: 19 },
        // Row 7 (1 cell)
        { row: 7, col: 19 },
        // Row 8 (1 cell)
        { row: 8, col: 19 },
        // Row 9 (the '3's and a '2') (5 cells)
        { row: 9, col: 19 }, // Becomes "P"
        { row: 9, col: 20 }, // Becomes "A"
        { row: 9, col: 21 }, // Becomes "T"
        { row: 9, col: 22 }, // Becomes "H"
        { row: 9, col: 23 },
        // Row 10 (1 cell)
        { row: 10, col: 23 },
        // Row 11 (1 cell)
        { row: 11, col: 23 },
        // Row 12 (1 cell)
        { row: 12, col: 23 },
        // Row 13 (Right to Left - 5 cells)
        { row: 13, col: 23 }, { row: 13, col: 22 }, { row: 13, col: 21 }, { row: 13, col: 20 }, { row: 13, col: 19 },
        // Row 14 (1 cell)
        { row: 14, col: 19 },
        // Row 15 (1 cell)
        { row: 15, col: 19 },
        // Row 16 (1 cell)
        { row: 16, col: 19 },
        // Row 17 (Left to Right - 11 cells)
        { row: 17, col: 19 }, { row: 17, col: 20 }, { row: 17, col: 21 }, { row: 17, col: 22 },
        { row: 17, col: 23 }, { row: 17, col: 24 }, { row: 17, col: 25 }, { row: 17, col: 26 },
        { row: 17, col: 27 }, { row: 17, col: 28 }, { row: 17, col: 29 },
        // Connecting up and then right from (17,29)
        { row: 16, col: 29 }, // Up one from (17,29)
        { row: 15, col: 29 }, // Up another to (15,29)
        { row: 15, col: 30 }, { row: 15, col: 31 }, { row: 15, col: 32 }, { row: 15, col: 33 },
        { row: 15, col: 34 }, { row: 15, col: 35 }, { row: 15, col: 36 }, // Right 8 squares from (15,29) including (15,29) itself
        { row: 15, col: 37 } // Go right one more square
    ];

    const totalPathLength = pathCoordinates.length;
    const startColor = hexToRgb("#286897"); // #286897
    const endColor = hexToRgb("#c53c24");   // #c53c24
    const animationDuration = 3000; // milliseconds

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animationStarted) {
                    setAnimationStarted(true);
                    animatePath();
                }
            },
            {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.1, // Trigger when 10% of the component is visible
            }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, [animationStarted]); // Re-run effect if animationStarted changes

    const animatePath = () => {
        const newColors = {};
        let step = 0;
        // Create a deep copy of the initial grid to modify during animation
        const currentGridState = JSON.parse(JSON.stringify(newGrid2));

        const intervalId = setInterval(() => {
            if (step < totalPathLength) {
                const { r: startR, g: startG, b: startB } = startColor;
                const { r: endR, g: endG, b: endB } = endColor;

                // Calculate current gradient color
                const ratio = totalPathLength > 1 ? (step / (totalPathLength - 1)) : 0;

                const r = startR + (endR - startR) * ratio;
                const g = startG + (endG - startG) * ratio;
                const b = startB + (endB - startB) * ratio;

                const hexColor = rgbToHex(Math.round(r), Math.round(g), Math.round(b));

                const { row, col } = pathCoordinates[step];
                
                // Set the gradient color for the current path square
                newColors[`${row}-${col}`] = hexColor;

                // Logic for changing numbers to characters based on step
                if (step === 20) currentGridState[9][19] = "P";
                else if (step === 21) currentGridState[9][20] = "A";
                else if (step === 22) currentGridState[9][21] = "T";
                else if (step === 23) currentGridState[9][22] = "H";
                else if (step === 24) currentGridState[10][19] = "F";
                else if (step === 25) currentGridState[10][20] = "I";
                else if (step === 26) currentGridState[10][21] = "N";
                else if (step === 27) currentGridState[10][22] = "D";
                else if (step === 28) currentGridState[11][19] = "E";
                else if (step === 29) currentGridState[11][20] = "R";

                // Update the state for path colors and the displayed grid
                setPathColors((prevColors) => ({ ...prevColors, ...newColors }));
                setDisplayedGrid(JSON.parse(JSON.stringify(currentGridState))); // Deep copy to trigger re-render
                
                step++;
            } else {
                clearInterval(intervalId);
            }
        }, animationDuration / totalPathLength); // Distribute animation time evenly per square
    };

    const Numbers = (number, row, col) => {
        const key = `${row}-${col}`;
        const dynamicBgColor = pathColors[key] || 'transparent'; // Default to transparent or initial background

        if (number === 0) {
            return <div className='bg-mineSqColour' style={{ width: 36, height: 36 }}></div>;
        }
        if (number === 1) {
            return <div className='bg-mineSqShadow' style={{ width: 36, height: 36 }}></div>;
        }
        // Apply dynamic background color only for path numbers (2 or 3 in the original grid)
        // that haven't been replaced by characters yet.
        if (number === 2 || number === 3) {
            return <div style={{ width: 36, height: 36, backgroundColor: dynamicBgColor }}></div>;
        }
        // Render specific characters
        else if (number === "P") {
            return (
                <div className='bg-[#60586e] flex' style={{width: 36, height: 36}}>
                    <div className='bg-stone-100' style={{width: 20, height: 24, marginLeft: 8, marginTop: 6}}>
                        <div className='bg-[#60586e]' style={{width: 10, height: 4, marginLeft: 5, marginTop: 5}}></div>
                        <div className='bg-[#60586e]' style={{width: 15, height: 10, marginLeft: 5, marginTop: 5}}></div>
                    </div>
                </div>
            )
        }
        else if (number === "A") {
            return (
                <div className='bg-[#63586c] flex' style={{width: 36, height: 36}}>
                    <div className='bg-stone-100' style={{width: 20, height: 24, marginLeft: 8, marginTop: 6}}>
                        <div className='flex'>
                            <div className='bg-[#63586c]' style={{width: 5, height: 5, marginLeft: 0, marginTop: 0}}></div>
                            <div className='bg-[#63586c]' style={{width: 5, height: 5, marginLeft: 10, marginTop: 0}}></div>
                        </div>
                        <div className='bg-[#63586c]' style={{width: 10, height: 4, marginLeft: 5, marginTop: 0}}></div>
                        <div className='bg-[#63586c]' style={{width: 10, height: 10, marginLeft: 5, marginTop: 5}}></div>
                    </div>
                </div>
            )
        }
        else if (number === "T") {
            return (
                <div className='bg-[#66576a] flex' style={{width: 36, height: 36}}>
                    <div className='bg-stone-100 flex' style={{width: 20, height: 24, marginLeft: 8, marginTop: 6}}>
                        <div className='bg-[#66576a]' style={{width: 7, height: 19, marginLeft: 0, marginTop: 5}}></div>
                        <div className='bg-[#66576a]' style={{width: 7, height: 19, marginLeft: 6, marginTop: 5}}></div>
                    </div>
                </div>
            )
        }
        else if (number === "H") {
            return (
                <div className='bg-[#695668] flex' style={{width: 36, height: 36}}>
                    <div className='bg-stone-100' style={{width: 20, height: 24, marginLeft: 8, marginTop: 6}}>
                        <div className='bg-colourPath25' style={{width: 10, height: 9, marginLeft: 5, marginTop: 0}}></div>
                        <div className='bg-colourPath25' style={{width: 10, height: 10, marginLeft: 5, marginTop: 5}}></div>
                    </div>
                </div>
            )
        }
        else if (number === "F") {
            return (
                <div className='bg-[#E5A84B] flex' style={{width: 36, height: 36}}>
                    <div className='bg-stone-100' style={{width: 20, height: 24, marginLeft: 8, marginTop: 6}}>
                        <div className='bg-[#E5A84B]' style={{width: 15, height: 4, marginLeft: 5, marginTop: 5}}></div>
                        <div className='bg-[#E5A84B]' style={{width: 15, height: 5, marginLeft: 15, marginTop: 0}}></div>
                        <div className='bg-[#E5A84B]' style={{width: 15, height: 10, marginLeft: 5, marginTop: 0}}></div>
                    </div>
                </div>
            )
        }
        else if (number === "I") {
            return (
                <div className='bg-[#E5A84B] flex' style={{width: 36, height: 36}}>
                    <div className='bg-stone-100' style={{width: 6, height: 24, marginLeft: 15, marginTop: 6}}></div>
                </div>
            )
        }
        else if (number === "N") {
            return (
                <div className='bg-[#E5A84B] flex' style={{width: 36, height: 36}}>
                    <div className='bg-stone-100' style={{width: 20, height: 24, marginLeft: 8, marginTop: 6}}>
                        <div className='flex'>
                            <div className='bg-[#E5A84B]' style={{width: 5, height: 6, marginLeft: 5, marginTop: 0}}></div>
                            <div className='bg-[#E5A84B]' style={{width: 5, height: 9, marginLeft: 0, marginTop: 0}}></div>
                        </div>
                        <div className='flex'>
                            <div className='bg-[#E5A84B]' style={{width: 5, height: 13, marginLeft: 5, marginTop: 2}}></div>
                            <div className='bg-[#E5A84B]' style={{width: 5, height: 10, marginLeft: 0, marginTop: 5}}></div>
                        </div>
                    </div>
                </div>
            )
        }
        else if (number === "D") {
            return (
                <div className='bg-[#E5A84B] flex' style={{width: 36, height: 36}}>
                    <div className='bg-stone-100' style={{width: 20, height: 24, marginLeft: 8, marginTop: 6}}>
                        <div className='bg-[#E5A84B]' style={{width: 5, height: 5, marginLeft: 15, marginTop: 0}}></div>
                        <div className='bg-[#E5A84B]' style={{width: 10, height: 14, marginLeft: 5, marginTop: 0}}></div>
                        <div className='bg-[#E5A84B]' style={{width: 5, height: 5, marginLeft: 15, marginTop: 0}}></div>
                    </div>
                </div>
            )
        }
        else if (number === "E") {
            return (
                <div className='bg-[#E5A84B] flex' style={{width: 36, height: 36}}>
                    <div className='bg-stone-100' style={{width: 20, height: 24, marginLeft: 8, marginTop: 6}}>
                        <div className='bg-[#E5A84B]' style={{width: 15, height: 4, marginLeft: 5, marginTop: 5}}></div>
                        <div className='bg-[#E5A84B]' style={{width: 15, height: 5, marginLeft: 15, marginTop: 0}}></div>
                        <div className='bg-[#E5A84B]' style={{width: 15, height: 5, marginLeft: 5, marginTop: 0}}></div>
                    </div>
                </div>
            )
        }
        else if (number === "R") {
            return (
                <div className='bg-[#E5A84B] flex' style={{width: 36, height: 36}}>
                    <div className='bg-stone-100' style={{width: 20, height: 24, marginLeft: 8, marginTop: 6}}>
                        <div className='bg-[#E5A84B]' style={{width: 5, height: 5, marginLeft: 15, marginTop: 0}}></div>
                        <div className='bg-[#E5A84B]' style={{width: 10, height: 4, marginLeft: 5, marginTop: 0}}></div>
                        <div className='bg-[#E5A84B]' style={{width: 5, height: 5, marginLeft: 15, marginTop: 0}}></div>
                        <div className='bg-[#E5A84B]' style={{width: 10, height: 10, marginLeft: 5, marginTop: 0}}></div>
                    </div>
                </div>
            )
        }
        // else if (number === "F") {
        //     return (
        //         <div className='bg-huangHeLiuLi flex' style={{width: 56, height: 56}}>
        //             <div className='bg-white' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}>
        //                 <div className='bg-huangHeLiuLi' style={{width: 22, height: 6, marginLeft: 8, marginTop: 8}}></div>
        //                 <div className='bg-huangHeLiuLi' style={{width: 8, height: 8, marginLeft: 22, marginTop: 0}}></div>
        //                 <div className='bg-huangHeLiuLi' style={{width: 22, height: 15, marginLeft: 8, marginTop: 0}}></div>
        //             </div>
        //         </div>
        //     )
        // }
        // else if (number === "I") {
        //     return (
        //         <div className='bg-huangHeLiuLi flex' style={{width: 56, height: 56}}>
        //             <div className='bg-white' style={{width: 8, height: 37, marginLeft: 24, marginTop: 9}}></div>
        //         </div>
        //     )
        // } 
        // else if (number === "N") {
        //     return (
        //         <div className='bg-huangHeLiuLi flex' style={{width: 56, height: 56}}>
        //             <div className='bg-white flex' style={{width: 8, height: 37, marginLeft: 13, marginTop: 9}}></div>
        //             <div className='bg-white flex' style={{width: 7, height: 8, marginLeft: 0, marginTop: 18}}></div>
        //             <div className='bg-white flex' style={{width: 6, height: 8, marginLeft: 0, marginTop: 23}}></div>
        //             <div className='bg-white flex' style={{width: 8, height: 37, marginLeft: 0, marginTop: 9}}></div>
        //         </div>
        //     )
        // }
        // else if (number === "D") {
        //     return (
        //         <div className='bg-huangHeLiuLi flex' style={{width: 56, height: 56}}>
        //             <div className='bg-white' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}>
        //                 <div className='bg-huangHeLiuLi' style={{width: 8, height: 8, marginLeft: 22, marginTop: 0}}></div>
        //                 <div className='bg-huangHeLiuLi' style={{width: 14, height: 21, marginLeft: 8, marginTop: 0}}></div>
        //                 <div className='bg-huangHeLiuLi' style={{width: 8, height: 8, marginLeft: 22, marginTop: 0}}></div>
        //             </div>
        //         </div>
        //     )
        // }
        // else if (number === "E") {
        //     return (
        //         <div className='bg-huangHeLiuLi flex' style={{width: 56, height: 56}}>
        //             <div className='bg-white' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}>
        //                 <div className='bg-huangHeLiuLi' style={{width: 22, height: 6, marginLeft: -22, marginTop: 17}}></div>
        //                 <div className='bg-huangHeLiuLi' style={{width: 6, height: 8, marginLeft: -6, marginTop: 23}}></div>
        //                 <div className='bg-huangHeLiuLi' style={{width: 22, height: 7, marginLeft: -22, marginTop: 31}}></div>
        //             </div>
        //         </div>
        //     )
        // }
        // else if (number === "R") {
        //     return (
        //         <div className='bg-huangHeLiuLi flex' style={{width: 56, height: 56}}>
        //             <div className='bg-white' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}>
        //                 <div className='bg-huangHeLiuLi' style={{width: 8, height: 7, marginLeft: 22, marginTop: 0}}></div>
        //                 <div className='bg-huangHeLiuLi' style={{width: 8, height: 7, marginLeft: 22, marginTop: 8}}></div>
        //             </div>
                    
        //             <div className='bg-huangHeLiuLi' style={{width: 14, height: 6, marginLeft: -22, marginTop: 17}}></div>
        //             <div className='bg-huangHeLiuLi' style={{width: 14, height: 15, marginLeft: -14, marginTop: 31}}></div>
        //         </div>
        //     )
        // }
        else if (number === "AR") {
            return (
                <div className='bg-mineSqColour text-mineColour1 flex justify-center items-center' style={{width: 56, height: 56}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-10 -rotate-45">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            )
        }
        else if (number === "F2") {
            // Flagged
            return (
                <div className='bg-mineSqShadow flex' style={{width: 56, height: 56}}>
                    <div className='bg-mineSqColour flex' style={{width: 54, height: 54}}>
                        <div className='bg-mineSqShadow' style={{width: 6, height: 6, marginLeft: 10, marginTop: 15}}></div>
                        <div className='bg-mineSqShadow' style={{width: 6, height: 12, marginLeft: 0, marginTop: 12}}></div>
                        <div className='bg-mineSqShadow' style={{width: 12, height: 22, marginLeft: 0, marginTop: 8}}></div>
                        <div className='bg-mineSqShadow' style={{width: 6, height: 6, marginLeft: -6, marginTop: 30}}></div>
                        <div className='bg-mineSqShadow' style={{width: 20, height: 4, marginLeft: -16, marginTop: 36}}></div>
                        <div className='bg-mineSqShadow' style={{width: 30, height: 8, marginLeft: -25, marginTop: 40}}></div>                        
                    </div>
                </div>
            )
        } 
        else if (number === "1a") {
            return (
                <div className='bg-mineSqColour flex' style={{width: 56, height: 56}}>
                    <div className='bg-mineSqShadow' style={{width: 8, height: 6, marginLeft: 26, marginTop: 9}}></div>
                    <div className='bg-mineSqShadow' style={{width: 17, height: 8, marginLeft: 26-34-9, marginTop: 15}}></div>
                    <div className='bg-mineSqShadow' style={{width: 11, height: 15, marginLeft: 23-34, marginTop: 23}}></div>
                    <div className='bg-mineSqShadow' style={{width: 30, height: 8, marginLeft: 13-26-8, marginTop: 38}}></div>
                </div>
            )
        } 
        else {
            return <div className={`${number}`} style={{height: 56, width: 56}}></div>
        }
    };

    return (
        <Link target="_blank" href="https://github.com/tianxiaozhang1/pathfinder" rel="noopener noreferrer">
            <div ref={componentRef} className='w-92 h-78 md:w-190 md:h-132 lg:w-252 lg:h-120 xl:w-316 xl:h-152 bg-stone-50 rounded-3xl border-stone-300 border-4 mx-auto flex justify-center items-center cursor-pointer overflow-hidden'>
                <div className='flex justify-center'>
                    <div className='bg-mineBoardColor px-0 overflow-hidden'>
                        {displayedGrid.map((singleRow, i) => { // Use displayedGrid here
                            return (
                                <div className='flex' key={i} >
                                    {singleRow.map((singleBlock, j) => {
                                        return (
                                            <div className='ml-0.5 mt-0.5' key={j}>
                                                {Numbers(singleBlock, i, j)} {/* Pass row and column to Numbers */}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Pathfinder;