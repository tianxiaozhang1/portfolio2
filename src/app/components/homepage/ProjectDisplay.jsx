// components/ProjectDisplay.jsx
import React from 'react';
import Link from 'next/link';
// import { source_code_pro } from '../../../fonts';
// import { CheckMarkIcon } from './ProfileIcons'; // Assuming CheckMarkIcon is also imported or defined in ProfileIcons

// Import project content components
import Contact from '../MainSlides/Contact';
import Tianphoto from '../MainSlides/Tianphoto';
import DefaultContent from '../MainSlides/DefaultContent';
import BurgerShackContent from '../MainSlides/BurgerShackContent';
import NowModelsContent from '../MainSlides/NowModelsContent';
import InstagramContent from '../MainSlides/InstagramContent';
import GithubContent from '../MainSlides/GithubContent';

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
    'nowmodels': {
        type: 'project',
        content: (theme) => <NowModelsContent theme={theme} />, // Using the new component
        showLineNumbers: true, // Explicitly show for code-like project content
    },
    'tianphoto': {
        type: 'project',
        content: (theme) => (
            <div><Tianphoto theme={theme} /></div>
        ),
        showLineNumbers: true, // Show for photography project
    },
    'contact': { // New contact section, now uses ContactContent component
        type: 'icon',
        content: (theme) => <Contact theme={theme} />, 
        showLineNumbers: false, // Explicitly hide line numbers for contact info
    },
    'instagram': { // New contact section, now uses ContactContent component
        type: 'icon',
        content: (theme) => <InstagramContent theme={theme} />, 
        showLineNumbers: false, // Explicitly hide line numbers for contact info
    },
    'github': { // New contact section, now uses ContactContent component
        type: 'icon',
        content: (theme) => <GithubContent theme={theme} />, 
        showLineNumbers: false, // Explicitly hide line numbers for contact info
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
                <div className={`w-8 h-full pl-1 ml-2 pt-1.5 cursor-default flex-shrink-0
                                ${theme === 'dark' ? 'text-stone-500' : 'text-gray-400'}`}>
                    {numberList.map((number, i) => (
                        <div key={i} className='w-full text-right'>{number}</div>
                    ))}
                </div>
            )}
            <div className={`${showLineNumbers === true ? 'ml-4' : 'ml-0 mt-2' } pt-0.5 mt-1  pl-2 cursor-default flex-grow overflow-y-auto max-w-[842px]
                            ${theme === 'dark' ? '' : 'text-gray-800'}`}>
                {/* Use <pre> tag for simple text graphics to preserve whitespace */}
                {contentToDisplay.content(theme)}
            </div>
        </>
    );
};

export default ProjectDisplay;
