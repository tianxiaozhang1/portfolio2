// components/ProjectDisplay.jsx
import React from 'react';
import Link from 'next/link';
// import { source_code_pro } from '../../../fonts';
// import { CheckMarkIcon } from './ProfileIcons'; // Assuming CheckMarkIcon is also imported or defined in ProfileIcons

// Import project content components
import Contact from '../MainSlides/Contact';
import Tianphoto from '../MainSlides/Tianphoto';
import DefaultContent from '../MainSlides/DefaultContent'; // New import
import BurgerShackContent from '../MainSlides/BurgerShackContent'; // New import

// Define project data. You can expand this with more details per project
const projectDetails = {
    'default': {
        type: 'default',
        content: (theme) => <DefaultContent theme={theme} />, // Using the new component
        showLineNumbers: true, // Explicitly show for default content
    },
    'burgershack': {
        type: 'project',
        content: (theme) => <BurgerShackContent theme={theme} />, // Using the new component
        showLineNumbers: true, // Explicitly show for code-like project content
    },
    'tianphoto': {
        type: 'project',
        content: (theme) => (
            <div>
                <Tianphoto theme={theme} />
            </div>
        ),
        showLineNumbers: true, // Show for photography project
    },
    'contact': { // New contact section, now uses ContactContent component
        type: 'icon',
        content: (theme) => <Contact theme={theme} />, 
        showLineNumbers: false, // Explicitly hide line numbers for contact info
    },
    'instagram': { // Placeholder for Instagram content (will remain separate)
        type: 'icon',
        content: (theme) => (
            <div className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-800'} w-full`}>
                <div className='flex'>&#47;&#47;&nbsp;This section could link to your Instagram portfolio.</div>
                <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'}`}>
                    <Link target="_blank" href="https://www.instagram.com/your_instagram_handle/" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-[#2f7ed3]' : 'text-blue-700'} hover:underline`}>
                        &#47;&#47;&nbsp;[Visit Instagram Profile]
                    </Link>
                </div>
            </div>
        ),
        showLineNumbers: true, // Show line numbers for this placeholder, adjust if needed
    },
    'github': { // Placeholder for Github content (will remain separate)
        type: 'icon',
        content: (theme) => (
            <div className={`${theme === 'dark' ? 'text-stone-300' : 'text-gray-800'} w-full`}>
                <div className='flex'>&#47;&#47;&nbsp;This section links to your GitHub profile.</div>
                <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'}`}>
                    <Link target="_blank" href="https://github.com/tianxiaozhang1/" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-[#2f7ed3]' : 'text-blue-700'} hover:underline`}>
                        &#47;&#47;&nbsp;[Visit GitHub Profile]
                    </Link>
                </div>
            </div>
        ),
        showLineNumbers: true, // Show line numbers for this placeholder, adjust if needed
    },
};

const ProjectDisplay = ({ activeMainContent, theme }) => {
    const contentToDisplay = projectDetails[activeMainContent] || projectDetails['default'];

    // Generate line numbers only if showLineNumbers is not explicitly false
    const showLineNumbers = contentToDisplay.showLineNumbers !== false;

    // We only need to count children if line numbers are shown
    let numChildren = 0;
    if (showLineNumbers) {
        // Safely access props.children, or count direct children if it's a Fragment
        const contentElement = contentToDisplay.content(theme);
        numChildren = React.Children.count(contentElement);
    }
    const maxDisplayLines = 14; // Still keep a max for initial display
    const numberList = Array.from({ length: Math.max(numChildren, maxDisplayLines) }, (_, i) => i + 1);

    return (
        <>
            {showLineNumbers && (
                <div className={`w-8 h-full pl-1 pt-1.5 cursor-default flex-shrink-0
                                ${theme === 'dark' ? 'text-stone-500' : 'text-gray-400'}`}>
                    {numberList.map((number, i) => (
                        <div key={i} className='w-full text-right'>{number}</div>
                    ))}
                </div>
            )}
            <div className={`pt-0.5 mt-1 ml-4 pl-2 cursor-default flex-grow overflow-y-auto max-w-[796px]\
                            ${theme === 'dark' ? '' : 'text-gray-800'}`}>
                {/* Use <pre> tag for simple text graphics to preserve whitespace */}
                {contentToDisplay.content(theme)}
            </div>
        </>
    );
};

export default ProjectDisplay;
