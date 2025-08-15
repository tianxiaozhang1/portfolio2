"use client"
import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { source_code_pro, inter } from '../../../fonts';
import { Phone, User as UserIcon, Sun as SunIcon, Moon as MoonIcon } from 'lucide-react';
// , AtSign as AtSignIcon, Send as SendIcon , Smartphone as SmartPhoneIcon
import {
    SourceControlIcon,
    SyncIcon,
    ErrorIcon,
    WarningIcon,
    RemoteIcon,
    BellIcon,
    FeedbackIcon,
    // UserCodeIcon,
    // MailCodeIcon,
    // IGCodeIcon,
    // WebsiteCodeIcon,
    // PhoneCodeIcon,
    // GithubCodeIcon,
    IGLucide,
    // GithubLucide,
    GithubTwo,
    TerminalPowershell,
    VSCAdd,
    VSCSplit,
    VSCTrash,
    VSCClose,
    VSCUp,
    VSCDown,
    // VSCRight,
    VSCEllipsis,
    // VSCSearch,
    ReactIcon,
    PythonIcon,
    SquareSpaceIcon,
    CheckMarkIcon,
    BroadcastIcon
} from './ProfileIcons';

// Import the new ProjectDisplay component
import ProjectDisplay from './ProjectDisplay';

// const numberList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

function Profile2() {
    // const leftCol = "border-2 border-[#333333] hover:border-stone-600";

    // const copyNumber = (e) => {
    //     navigator.clipboard.writeText("4167286940");
    // };

    // State for folder/file folding
    const [portfolioOpen, setPortfolioOpen] = useState(true);
    const [websitesOpen, setWebsitesOpen] = useState(true);
    const [gamesOpen, setGamesOpen] = useState(true);
    const [algorithmsOpen, setAlgorithmsOpen] = useState(true);
    const [websiteOpen, setWebsiteOpen] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null); // Keep for explorer selection

    // Ref for detecting clicks outside the explorer for selection clearing
    const explorerContainerRef = useRef(null); 

    // State and refs for resizable width of the Explorer (Projects) pane
    const minExplorerWidth = 200; // Minimum width for Explorer pane
    const maxExplorerWidth = 482; // Maximum width for Explorer pane
    const initialExplorerWidth = minExplorerWidth; // Set initial width to minimum as requested
    const [explorerWidth, setExplorerWidth] = useState(initialExplorerWidth);
    const [isExplorerResizing, setIsExplorerResizing] = useState(false);

    // State for terminal lines animation and active bottom tab
    const [terminalLinesVisible, setTerminalLinesVisible] = useState(0);
    const terminalContent = [
        "PS D: npm run dev",
        "Ready in 200ms",
        "Job search starting...",
        "[SUCCESS] Querying for opportunities..." 
    ];
    const [activeBottomTab, setActiveBottomTab] = useState('TERMINAL'); // Default active tab

    // Terminal vertical resizing states
    const mainContentRef = useRef(null); // Ref to the entire main content area (top code editor + bottom terminal)
    const minTerminalHeight = 82; // Minimum height for terminal pane (updated from 30)
    const maxTerminalHeight = 200; // Sensible max height for the terminal.
    const initialTerminalHeight = 170; // Initial height of the terminal pane (updated from 150)
    const [terminalPaneHeight, setTerminalPaneHeight] = useState(initialTerminalHeight); 
    const [isTerminalResizing, setIsTerminalResizing] = useState(false);
    const startYRef = useRef(0);
    const initialTerminalPaneHeightRef = useRef(initialTerminalHeight);

    // Refs to store mutable values for the drag operation (don't trigger re-renders)
    const startXRef = useRef(0);
    const initialExplorerWidthRef = useRef(initialExplorerWidth); // Stores width at start of drag

    // State for theme: 'dark' or 'light'
    const [theme, setTheme] = useState('dark'); // Initial theme is dark

    // New state to control content in the main code editor area
    const [activeMainContent, setActiveMainContent] = useState('default'); // 'default' for HELLO WORLD, 'burgershack' for its content

    // New state to control selected icon in the left column
    const [selectedIcon, setSelectedIcon] = useState('user'); // Default selected icon is 'user'


    const checkMarkColorClass = theme === 'dark' ? 'text-[#4dd08a]' : 'text-green-600';
    const footerIconClass = `${theme === 'dark' ? 'text-white' : 'text-white'}`

    // Function to toggle theme
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    // Apply theme classes to the root element (e.g., body or main container)
    useEffect(() => {
        const root = document.documentElement; // or document.body
        if (theme === 'dark') {
            root.classList.add('dark');
            root.classList.remove('light');
        } else {
            root.classList.add('light');
            root.classList.remove('dark');
        }
    }, [theme]);

    // Click handlers for folding/selection
    const handleToggle = (e, setter, item) => {
        e.stopPropagation(); // Prevents event from bubbling up to parent container's onClick
        setter(prev => !prev);
        setSelectedItem(item);
        // Do NOT change activeMainContent here, only when a file/project is clicked
    };

    const handleItemClick = (e, item) => {
        e.stopPropagation(); // Prevents event from bubbling up to parent container's onClick
        setSelectedItem(item);
        setActiveMainContent(item); // Set the main content to the clicked project
        setSelectedIcon(item); // Also select the project item in the icon column (if it were an icon)
    };

    // Helper function to generate common list item classes for Explorer (Projects) pane
    const getExplorerListItemClasses = (itemKey, type = 'file') => {
        // Base classes common to all types
        let baseClasses = 'text-start pr-2 flex cursor-pointer border-1'; 
        
        // Type-specific classes for text styling and spacing
        if (type === 'rootFolder') {
            baseClasses += ' text-sm font-bold pt-2 mt-0.5 pb-1'; // Removed fixed color
        } else if (type === 'nestedFolder') {
            baseClasses += ' text-sm2 font-normal pb-0.5 -mt-0.5 pt-0.25'; // Removed fixed color
        } else if (type === 'file') {
            baseClasses += ' text-sm2 font-normal py-0.25 mt-0'; // Removed fixed color
        }

        // Apply dynamic text color based on theme for non-selected items
        // Selected items have their own strong contrast.
        if (selectedItem !== itemKey) {
            baseClasses += theme === 'dark' ? ' text-[#cccccc]' : ' text-[#626262]';
        }

        // Selected state classes for background and border color
        const selectedClass = selectedItem === itemKey
            ? (theme === "dark" ? 'bg-[#13395e] border-[#2f7ed3] text-white' : 'bg-[#bf9c46] border-[#d5b45c] text-white') 
            : 'border-transparent'; 

        // Hover class: Apply only if NOT resizing AND NOT selected
        const hoverClass = (isExplorerResizing || selectedItem === itemKey) 
            ? '' 
            : (theme==="dark" ? 'hover:bg-[#37373d]' : 'hover:bg-[#e4e4e4]'); 

        return `${baseClasses} ${selectedClass} ${hoverClass}`;
    };

    // Helper function for common icon column classes WITH SELECTION
    const getIconColumnClasses = (iconKey) => {
        const base = 'w-full h-14 flex justify-center items-center cursor-pointer';
        const selected = selectedIcon === iconKey
            ? (theme === 'dark' ? 'bg-[#333333] text-[#cccccc]' : 'bg-[#dedede] text-gray-800') // Updated light mode text color
            : (theme === 'dark' ? 'text-[#838383] hover:text-white' : 'text-gray-400 hover:text-gray-700');
        return `${base} ${selected}`;
    };

    // Helper function for main bottom left navigation items
    const getMainBottomNavLinkClasses = (tabName) => {
        const base = 'w-fit border-b-1 font-normal uppercase text-xs pb-0 cursor-pointer'; 
        const activeClass = theme === 'dark' ? 'border-[#efe7eb] text-[#efe7eb]' : 'border-blue-700 text-blue-700';
        const inactiveClass = theme === 'dark' ? 'border-[#1e1e1e] text-[#9da393] hover:text-[#efe7eb]' : 'border-white text-gray-500 hover:text-blue-700';
        return `${base} ${activeBottomTab === tabName ? activeClass : inactiveClass}`;
    };

    // Helper function for main bottom right action buttons
    const getMainBottomActionButtonClasses = () => {
        return `p-0.5 rounded-md ${theme === 'dark' ? 'hover:bg-[#313232]' : 'text-gray-500 hover:bg-gray-200'}`;
    };

    // Helper function for footer items
    const getFooterItemClasses = () => {
        return `flex h-7 items-center cursor-pointer px-1 ${theme === 'dark' ? 'hover:bg-[#3b8bd1]' : 'hover:bg-[#ab8932]'}`;
    };

    // Effect to handle mousemove and mouseup events for horizontal resizing (Explorer pane)
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isExplorerResizing) return;

            e.preventDefault(); 
            
            const dx = e.clientX - startXRef.current;
            let newWidth = initialExplorerWidthRef.current + dx;

            newWidth = Math.max(minExplorerWidth, Math.min(maxExplorerWidth, newWidth));
            setExplorerWidth(newWidth);
        };

        const handleMouseUp = () => {
            setIsExplorerResizing(false);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.body.style.userSelect = ''; 
            document.body.style.webkitUserSelect = ''; 
        };

        if (isExplorerResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.body.style.userSelect = 'none'; 
            document.body.style.webkitUserSelect = 'none'; 
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.body.style.userSelect = ''; 
            document.body.style.webkitUserSelect = ''; 
        };
    }, [isExplorerResizing]); 

    // This is the handler for mousedown on the explorer resizer bar
    const handleExplorerMouseDown = useCallback((e) => {
        setIsExplorerResizing(true);
        startXRef.current = e.clientX; 
        initialExplorerWidthRef.current = explorerWidth; 
    }, [explorerWidth]); 

    // Effect for handling click outside the explorer to clear selection
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (explorerContainerRef.current && !explorerContainerRef.current.contains(event.target)) {
                setSelectedItem(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []); 

    // Effect for terminal typing animation
    useEffect(() => {
        // Only run terminal animation if TERMINAL tab is active
        if (activeBottomTab === 'TERMINAL' && terminalLinesVisible < terminalContent.length) {
            const timer = setTimeout(() => {
                setTerminalLinesVisible(prev => prev + 1);
            }, 300); 
            return () => clearTimeout(timer); 
        }
    }, [terminalLinesVisible, terminalContent.length, activeBottomTab]);

    // Effect to handle mousemove and mouseup events for vertical resizing (Terminal pane)
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isTerminalResizing) return;

            e.preventDefault(); 
            
            // Calculate new height: moving mouse UP increases height, DOWN decreases height
            const mainContentBottom = mainContentRef.current.getBoundingClientRect().bottom;
            let newHeight = mainContentBottom - e.clientY;

            // Clamp newHeight within defined min/max values
            // Ensure top panel doesn't get too small (min 100px) and terminal doesn't exceed its max
            const minTopPaneHeight = 100; // Keep at least 100px visible for the top code editor
            const maxAllowedTerminalHeightBasedOnTop = mainContentRef.current.clientHeight - minTopPaneHeight;
            
            // Apply all constraints: minTerminalHeight, maxTerminalHeight (absolute),
            // and maxAllowedTerminalHeightBasedOnTop (dynamic based on top pane space)
            newHeight = Math.max(minTerminalHeight, Math.min(maxTerminalHeight, maxAllowedTerminalHeightBasedOnTop, newHeight));
           
            setTerminalPaneHeight(newHeight);
        };

        const handleMouseUp = () => {
            setIsTerminalResizing(false);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.body.style.userSelect = ''; 
            document.body.style.webkitUserSelect = ''; 
        };

        if (isTerminalResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.body.style.userSelect = 'none'; 
            document.body.style.webkitUserSelect = 'none'; 
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.body.style.userSelect = ''; 
            document.body.style.webkitUserSelect = ''; 
        };
    }, [isTerminalResizing, minTerminalHeight, maxTerminalHeight]);

    // This is the handler for mousedown on the terminal resizer bar
    const handleTerminalMouseDown = useCallback((e) => {
        setIsTerminalResizing(true);
        startYRef.current = e.clientY; 
        initialTerminalPaneHeightRef.current = terminalPaneHeight; 
    }, [terminalPaneHeight]);

    // Handle click for left sidebar icons
    const handleLeftIconClick = (iconKey) => {
        setSelectedIcon(iconKey);
        // If the 'user' icon is clicked, revert to default 'HELLO WORLD' content
        if (iconKey === 'user') {
            setActiveMainContent('default');
            setSelectedItem(null); // Clear project selection when user icon is clicked
        } else if (iconKey === 'phone_contact') { // New key for consolidated contact
            setActiveMainContent('contact'); // Set active content to 'contact'
            setSelectedItem(null);
        }
        else {
            // For other icons, if they eventually have content, you'd set activeMainContent here
            // For now, they just change the selected icon state
            setActiveMainContent(iconKey); // If you want them to display some default content based on icon
            setSelectedItem(null); // Clear project selection if an icon is clicked
        }
    };


    return (
        <div className='shadow-[0_10px_10px_rgba(0,0,0,0.15)]'>
            
            {/* DESKTOP HEADER */}
            <div className={`h-11 w-full text-sm cursor-default flex items-center justify-between px-2 
                            ${theme === 'dark' ? 'bg-[#3c3c3c] text-stone-200' : 'bg-[#dddddd] text-gray-800'}`}>
                <div></div>
                <div className={`border-1 px-26 rounded-lg py-1 flex
                                ${theme === 'dark' ? 'bg-[#464646] border-[#616161]' : 'bg-[#d2d2d2] border-[#b2b2b2]'}`}>
                    <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-[#808080]'}`}><UserIcon strokeWidth='2' className='w-5 h-5'  /></div>
                    <div className='ml-1.5'>tianxiao_zhang - full_stack_developer</div>                    
                </div>
                {/* Theme Switcher */}
                <div 
                    className={` right-4 top-2.5 cursor-pointer p-1 rounded-md transition-colors duration-200
                                ${theme === 'dark' ? 'text-gray-100 hover:text-gray-800 hover:bg-[#fac03d]' : 'text-[#4e4e4e]  hover:text-white hover:bg-[#3271ae]'}`}
                    onClick={toggleTheme}
                >
                    {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
                </div>
            </div>

            {/* Main content area (flex container for sidebars and main content) */}
            <div className={`hidden md:flex lg:w-222 lg:h-134 xl:w-280 xl:h-138 overflow-hidden text-center 
                            ${theme === 'dark' ? 'bg-white' : 'bg-gray-100'}`}> {/* Adjusted background for light theme */}
                <div className='w-full h-full flex'>
                    {/* ICONS Column (fixed width) */}
                    <div className={`w-14 flex-shrink-0 h-full ${inter.className} z-20
                                    ${theme === 'dark' ? 'bg-[#333333]' : 'bg-[#dedede]'}`}>
                        <div className={getIconColumnClasses('user')} onClick={() => handleLeftIconClick('user')}><UserIcon className='w-8 h-8' theme={theme}/></div>
                        {/* Consolidated contact icon */}
                        <div className={getIconColumnClasses('phone_contact')} onClick={() => handleLeftIconClick('phone_contact')}><Phone className='w-9 h-9' strokeWidth={1.5}/></div>                        
                        <div className={getIconColumnClasses('instagram')} onClick={() => handleLeftIconClick('instagram')}><IGLucide size="w-10 h-10" /></div>
                        <div className={getIconColumnClasses('github')} onClick={() => handleLeftIconClick('github')}><GithubTwo className='w-12 h-12'/></div>                        
                    </div>
                    
                    {/* PROJECTS Column (resizable width) */}
                    <div
                        ref={explorerContainerRef}
                        style={{ width: `${explorerWidth}px` }}
                        className={`z-10 relative ${inter.className}
                                    ${theme === 'dark' ? 'bg-[#252526]' : 'bg-[#f3f3f3]'}`}
                        onClick={() => setSelectedItem(null)}                        
                    >
                        <div className={`text-start text-sm font-light px-6 pt-2.5 cursor-default
                                        ${theme === 'dark' ? 'text-[#bbbbbb]' : 'text-gray-600'}`}>EXPLORER</div>
                    
                        {/* Portfolio Section */}
                        <div
                            className={getExplorerListItemClasses('portfolio', 'rootFolder')}
                            onClick={(e) => handleToggle(e, setPortfolioOpen, 'portfolio')}
                        >
                            <div className='transform transition-transform duration-200 ml-0.5' style={{ transform: portfolioOpen ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
                            <VSCDown size="w-5 h-5 " />
                            </div>
                            {/* Flex-grow and truncate added here */}
                            <div className='ml-0.5 flex-grow truncate'>PORTFOLIO</div>
                        </div>
                    
                        {portfolioOpen && (
                        <>
                            {/* Websites Section */}
                            <div
                                className={getExplorerListItemClasses('websites', 'nestedFolder')}
                                onClick={(e) => handleToggle(e, setWebsitesOpen, 'websites')}
                            >
                                <div className='transform transition-transform duration-200 ml-5' style={{ transform: websitesOpen ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
                                <VSCDown size="w-5 h-5 mt-0.25" /></div>
                                {/* Flex-grow and truncate added here */}
                                <div className='ml-0.5 flex-grow truncate'>websites</div>
                            </div>
                            
                            {websitesOpen && (
                                <>
                                    <div
                                        className={getExplorerListItemClasses('burgershack', 'file')}
                                        onClick={(e) => handleItemClick(e, 'burgershack')}
                                    >
                                        <div className='flex items-center ml-7'><ReactIcon size="w-3.5 h-3.5" theme={theme} /></div>
                                        {/* Flex-grow and truncate added here */}
                                        <div className='ml-2 flex-grow truncate'>BurgerShack.tsx</div>
                                    </div>
                                    <div
                                        className={getExplorerListItemClasses('citybank', 'file')}
                                        onClick={(e) => handleItemClick(e, 'citybank')}
                                    >
                                        <div className='flex items-center ml-7'><ReactIcon size="w-3.5 h-3.5" theme={theme} /></div>
                                        {/* Flex-grow and truncate added here */}
                                        <div className='ml-2 flex-grow truncate'>CityBank.tsx</div>
                                    </div>
                                    <div
                                        className={getExplorerListItemClasses('momenta', 'file')}
                                        onClick={(e) => handleItemClick(e, 'momenta')}
                                    >
                                        <div className='flex items-center ml-7'><ReactIcon size="w-3.5 h-3.5" theme={theme} /></div>
                                        {/* Flex-grow and truncate added here */}
                                        <div className='ml-2 flex-grow truncate'>Momenta.tsx</div>
                                    </div>
                                    <div
                                        className={getExplorerListItemClasses('venusjewelery', 'file')}
                                        onClick={(e) => handleItemClick(e, 'venusjewelery')}
                                    >
                                        <div className='flex items-center ml-7'><ReactIcon size="w-3.5 h-3.5" theme={theme} /></div>
                                        {/* Flex-grow and truncate added here */}
                                        <div className='ml-2 flex-grow truncate'>VenusJewelery.tsx</div>
                                    </div>
                                    <div
                                        className={getExplorerListItemClasses('nowmodels', 'file')}
                                        onClick={(e) => handleItemClick(e, 'nowmodels')}
                                    >
                                        <div className='flex items-center ml-7'><ReactIcon size="w-3.5 h-3.5" theme={theme} /></div>
                                        {/* Flex-grow and truncate added here */}
                                        <div className='ml-2 flex-grow truncate'>NowModels.tsx</div>
                                    </div>
                                </>
                            )}

                            {/* Games Section */}
                            <div
                                className={getExplorerListItemClasses('games', 'nestedFolder')}
                                onClick={(e) => handleToggle(e, setGamesOpen, 'games')}
                            >
                                <div className='transform transition-transform duration-200 ml-5' style={{ transform: gamesOpen ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
                                <VSCDown size="w-5 h-5 mt-0.25" />
                                </div>
                                {/* Flex-grow and truncate added here */}
                                <div className='ml-0.5 flex-grow truncate'>games</div>
                            </div>
                            
                            {gamesOpen && (
                                <div className='-mt-0.5'>
                                    <div
                                        className={getExplorerListItemClasses('minesweeper', 'file')}
                                        onClick={(e) => handleItemClick(e, 'minesweeper')}
                                    >
                                        <div className='flex items-center ml-7'><ReactIcon size="w-3.5 h-3.5" theme={theme} /></div>
                                        {/* Flex-grow and truncate added here */}
                                        <div className='ml-2 flex-grow truncate'>Minesweeper.tsx</div>
                                    </div>
                                    <div
                                        className={getExplorerListItemClasses('freecell', 'file')}
                                        onClick={(e) => handleItemClick(e, 'freecell')}
                                    >
                                        <div className='flex items-center ml-7 mr-0.25'><PythonIcon size="w-3 h-3" theme={theme} /></div>
                                        {/* Flex-grow and truncate added here */}
                                        <div className='ml-2 flex-grow truncate'>FreeCell.py</div>
                                    </div>
                                    <div
                                        className={getExplorerListItemClasses('sudoku', 'file')}
                                        onClick={(e) => handleItemClick(e, 'sudoku')}
                                    >
                                        <div className='flex items-center ml-7 mr-0.25'><PythonIcon size="w-3 h-3" theme={theme} /></div>
                                        {/* Flex-grow and truncate added here */}
                                        <div className='ml-2 flex-grow truncate'>Sudoku.py</div>
                                    </div>
                                </div>
                            )}

                            {/* Algorithm Section */}
                            <div
                                className={getExplorerListItemClasses('algorithm', 'nestedFolder')}
                                onClick={(e) => handleToggle(e, setAlgorithmsOpen, 'algorithm')}
                            >
                                <div className='transform transition-transform duration-200 ml-5' style={{ transform: algorithmsOpen ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
                                <VSCDown size="w-5 h-5 mt-0.25" />
                                </div>
                                {/* Flex-grow and truncate added here */}
                                <div className='ml-0.5 flex-grow truncate'>algorithm</div>
                            </div>
                            
                            {algorithmsOpen && (
                                <div className='-mt-0.5'>
                                    <div
                                        className={getExplorerListItemClasses('pathfinder', 'file')}
                                        onClick={(e) => handleItemClick(e, 'pathfinder')}
                                    >
                                        <div className='flex items-center ml-7 mr-0.25'><PythonIcon size="w-3 h-3" theme={theme} /></div>
                                        {/* Flex-grow and truncate added here */}
                                        <div className='ml-2 flex-grow truncate'>Pathfinder.py</div>
                                    </div>
                                    <div
                                        className={getExplorerListItemClasses('sorting', 'file')}
                                        onClick={(e) => handleItemClick(e, 'sorting')}
                                    >
                                        <div className='flex items-center ml-7 mr-0.25'><PythonIcon size="w-3 h-3" theme={theme} /></div>
                                        {/* Flex-grow and truncate added here */}
                                        <div className='ml-2 flex-grow truncate'>Sorting.py</div>
                                    </div>
                                </div>
                            )}

                            {/* Photography Section */}
                            <div
                                className={getExplorerListItemClasses('photographySection', 'nestedFolder')}
                                onClick={(e) => handleToggle(e, setWebsiteOpen, 'photographySection')}
                            >
                                <div className='transform transition-transform duration-200 ml-5' style={{ transform: websiteOpen ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
                                <VSCDown size="w-5 h-5 mt-0.25" />
                                </div>
                                {/* Flex-grow and truncate added here */}
                                <div className='ml-0.5 flex-grow truncate'>photography</div>
                            </div>
                            
                            {websiteOpen && (
                                <div className='-mt-0.5'>
                                    <div
                                        className={getExplorerListItemClasses('tianphoto', 'file')}
                                        onClick={(e) => handleItemClick(e, 'tianphoto')}
                                    >
                                        <div className='flex items-center ml-7'><SquareSpaceIcon size="w-3.5 h-3.5" theme={theme} /></div>
                                        {/* Flex-grow and truncate added here */}
                                        <div className='ml-2 flex-grow truncate'>tianphoto.ca</div>
                                    </div>
                                </div>
                            )}
                        </>
                        )}
                    </div>
                    
                    {/* Resizer */}
                    <div
                        onMouseDown={handleExplorerMouseDown}
                        className={`w-1 cursor-ew-resize ${isExplorerResizing ? 'bg-[#2f7fd3]' : (theme === 'dark' ? 'bg-[#1e1e1e]' : 'bg-[#f3f3f3]')}`}
                    ></div>
                    
                    {/* MAIN */}
                    <div ref={mainContentRef} className={`flex-grow flex flex-col ${source_code_pro.className}`}>
                        {/* MAIN TOP - Code Editor Area */}
                        <div className={`flex flex-grow min-h-[100px] w-full text-base pl-2 pr-2 overflow-y-auto
                                        ${theme === 'dark' ? 'bg-[#1e1e1e]' : 'bg-[#fcfcfc]'}`}> {/* Adjusted background */}
                            {/* Render the ProjectDisplay component here */}
                            <ProjectDisplay activeMainContent={activeMainContent} theme={theme} />
                        </div>

                        {/* Terminal Resizer Bar */}
                        <div
                            onMouseDown={handleTerminalMouseDown}
                            className={`h-1 w-full cursor-ns-resize ${isTerminalResizing ? 'bg-[#2f7fd3]' : (theme === 'dark' ? 'bg-[#1e1e1e] border-t-1 border-[#414141]' : 'bg-[#fcfcfc] border-t-1 border-[#a5a5a5]')}`}
                        ></div>
                        
                        {/* MAIN BOTTOM - Terminal Area */}
                        <div 
                            style={{ height: `${terminalPaneHeight}px` }} 
                            className={`w-full flex-shrink-0 text-start font-thin pt-0 text-base leading-5 overflow-hidden
                                        ${theme === 'dark' ? 'bg-[#1e1e1e] text-stone-300' : 'bg-[#fcfcfc] text-gray-800'}`}> {/* Adjusted colors */}
                            <div className='flex justify-between items-center pt-1.5 pb-2 pl-6'>
                                {/* LEFT */}
                                <div className={`pb-0 flex items-end space-x-7 pt-0 ${inter.className}`}>
                                    <div 
                                        className={getMainBottomNavLinkClasses('ABOUT')}
                                        onClick={() => setActiveBottomTab('ABOUT')}
                                    >
                                        ABOUT
                                    </div>
                                    <div 
                                        className={getMainBottomNavLinkClasses('SKILLS')}
                                        onClick={() => setActiveBottomTab('SKILLS')}
                                    >
                                        SKILLS
                                    </div>
                                    <div 
                                        className={getMainBottomNavLinkClasses('TERMINAL')}
                                        onClick={() => setActiveBottomTab('TERMINAL')}
                                    >
                                        TERMINAL
                                    </div>
                                    <div 
                                        className={getMainBottomNavLinkClasses('CONNECT')}
                                        onClick={() => setActiveBottomTab('CONNECT')}
                                    >
                                        CONNECT
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className='pr-3 text-gray-300  '>
                                    <div className='flex space-x-1.5 items-center'>
                                        <div className={`hidden rounded-md overflow-hidden p-0.5 ${theme === 'dark' ? 'hover:bg-[#313232]' : 'hover:bg-gray-200'}`}> {/* Adjusted hover */}
                                            <div><TerminalPowershell/></div>
                                            <div className='text-sm ml-1'>node</div>
                                        </div>
                                        <div className={`flex rounded-md overflow-hidden ${theme === 'dark' ? 'hover:bg-[#313232]' : 'hover:bg-gray-200'}`}> {/* Adjusted hover */}
                                            <div className={`p-0.5 -mr-0.5 rounded-md h-full ${theme === 'dark' ? 'hover:bg-[#3e4040]' : 'hover:bg-gray-300 text-gray-500'}`}> {/* Adjusted hover */}
                                                <VSCAdd/>
                                            </div>
                                            <div className={`py-1 p-0.5 -ml-0.5 rounded-md h-full ${theme === 'dark' ? 'hover:bg-[#3e4040]' : 'hover:bg-gray-300 text-gray-500'}`}> {/* Adjusted hover */}
                                                <VSCDown size="w-4 h-4" />
                                            </div>
                                        </div>
                                        <div className={getMainBottomActionButtonClasses()}><VSCSplit/></div>
                                        <div className={getMainBottomActionButtonClasses()}><VSCTrash/></div>
                                        <div className={getMainBottomActionButtonClasses()}><VSCEllipsis/></div>
                                        <div className={getMainBottomActionButtonClasses()}><VSCUp/></div>
                                        <div className={getMainBottomActionButtonClasses()}><VSCClose /></div>
                                    </div>
                                </div>
                            </div>
                            {/* TAB CONTENT */}
                            <div className='flex h-full'>
                                {/* LEFT - Content based on active tab */}
                                <div className={`flex-grow h-full overflow-y-auto w-0`}> 
                                    <div className={`text-base pl-6 pr-2 ${source_code_pro.className}`}> 
                                        {activeBottomTab === 'ABOUT' && (
                                            <div className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-800'} w-full`}>
                                                <div className='flex'>&#47;&#47;&nbsp;I am a passionate Full Stack Developer with a knack for building robust and scalable web applications.</div>
                                                <div className='flex'>&#47;&#47;&nbsp;My focus is on creating intuitive user experiences and efficient backend systems.</div>
                                                <div className='flex'>&#47;&#47;&nbsp;Always eager to learn new technologies and solve complex problems.</div>
                                                <div className='flex'>&#47;&#47;&nbsp;Seeking opportunities to contribute to innovative projects.</div>
                                            </div>
                                        )}
                                        {activeBottomTab === 'SKILLS' && (
                                            <div className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-800'} w-full`}>
                                                <div className='flex'>&#47;&#47;&nbsp;React: Proficient in building dynamic SPAs with functional components, hooks, and state management (Redux/Context API).</div>
                                                <div className='flex'>&#47;&#47;&nbsp;Python/Django: Strong in backend development, RESTful API design, ORM, and secure server-side logic.</div>
                                                <div className='flex'>&#47;&#47;&nbsp;Cloud/DevOps: Experienced with AWS services (EC2, S3) and containerization (Docker) for robust deployments.</div>
                                                <div className='flex'>&#47;&#47;&nbsp;AI Integration: Capable of leveraging LLM APIs and prompt engineering for intelligent features.</div>
                                            </div>
                                        )}
                                        {activeBottomTab === 'TERMINAL' && (
                                            <div className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-600'} w-full`}>
                                                {terminalContent.slice(0, terminalLinesVisible).map((line, index) => (
                                                    <div key={index} className='flex'>
                                                        {/* {index > 0 && <CheckMarkIcon size="w-3 h-3 mt-0.5 pt-0.25 mr-2" theme={theme}/>} */}
                                                        {index > 0 && <CheckMarkIcon size="w-3 h-3 mt-0.5 pt-0.25 mr-2" className={checkMarkColorClass} />}
                                                        {line}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {activeBottomTab === 'CONNECT' && (
                                            <div className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-800'} w-full`}>
                                                <div className='flex'>&#91;Email&#93;&nbsp;<Link target="_blank" href="mailto:tianxiao.zhang@gmail.com" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-[#2f7ed3]' : 'text-blue-700'} hover:underline`}>tianxiao.zhang@gmail.com</Link></div> {/* Adjusted link color */}
                                                <div className='flex'>&#91;GitHub&#93;&nbsp;<Link target="_blank" href="https://github.com/tianxiaozhang1/" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-[#2f7ed3]' : 'text-blue-700'} hover:underline`}>github.com/tianxiaozhang1</Link></div> {/* Adjusted link color */}
                                                <div className='flex'>&#91;Website&#93;&nbsp;<Link target="_blank" href="https://tianphoto.ca" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-[#2f7ed3]' : 'text-blue-700'} hover:underline`}>tianphoto.ca</Link></div> {/* Adjusted link color */}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className={`w-4 border-l flex-shrink-0
                                                ${theme === 'dark' ? 'border-[#414141] border-t' : 'border-gray-300 border-t'}`}> {/* Adjusted border colors */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FOOTER */}
            <div className={`h-7 w-full flex items-center justify-between
                            ${theme === 'dark' ? 'bg-[#2d7acb]' : 'bg-[#bf9c46]'}`}> {/* Adjusted background */}
                <div className='flex items-center'>
                    <div className={`px-3 h-7 flex items-center cursor-pointer
                                    ${theme === 'dark' ? 'bg-[#2f815c] hover:bg-[#428e8b]' : 'bg-[#aa8534] hover:bg-[#967120]'}`}> {/* Adjusted colors */}
                        <div className='text-white'><RemoteIcon/></div>
                    </div>
                    <div className={`${getFooterItemClasses()} ml-1 mr-1.5`}>
                        <div className='text-white'><SourceControlIcon/></div>
                        <div className={`text-sm2 ml-0.5 ${footerIconClass}`}>main</div>
                    </div>
                    <div className={`mx-0.5 flex justify-center items-center cursor-pointer h-7 w-6
                                    ${theme === 'dark' ? 'hover:bg-[#3b8bd1]' : 'hover:bg-[#ab8932]'}`}> {/* Adjusted hover */}
                        <div className={`${footerIconClass}`}><SyncIcon/></div>
                    </div>

                    <div className={`${getFooterItemClasses()} ml-1 pl-1.5 text-sm space-x-1`}>
                        <div className={`${footerIconClass}`}><ErrorIcon/></div>
                        <div className={`mx-0.5 ml-0.5 ${footerIconClass}`}>0</div>
                        <div className={`${footerIconClass}`}><WarningIcon/></div>
                        <div className={`mx-0.5 ${footerIconClass}`}>0</div>
                    </div>
                </div>

                <div className='pr-1 flex space-x-1'>
                    <div className={getFooterItemClasses()}>
                        <div className={`text-sm ml-0.5 ${footerIconClass}`}>&#123;&nbsp;&#125;&nbsp;Typescript JSX</div>
                    </div>
                    <div className={getFooterItemClasses()}>
                        <div className={`text-sm ml-0.5 ${footerIconClass}`}>Spaces: 4</div> 
                    </div>
                    <div className={`${getFooterItemClasses()}`}> {/* Special case for pr-2 */}
                        <div className={`text-sm ml-0.5 ${footerIconClass}`}>UTF-8</div> 
                    </div>
                    <div className={`${getFooterItemClasses()} text-sm space-x-1`}>
                        <div className={`${footerIconClass}`}><BroadcastIcon/></div>
                        <div className={`mx-0.5 ml-0.5 ${footerIconClass}`}>Go Live</div>
                    </div>
                    <div className={getFooterItemClasses()}>
                        <div className={`${footerIconClass}`}><FeedbackIcon/></div>
                    </div>
                    <div className={getFooterItemClasses()}>
                        <div className={`${footerIconClass}`}><BellIcon/></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile2
