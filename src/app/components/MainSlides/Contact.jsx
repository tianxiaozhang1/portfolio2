import React, { useState } from 'react';

// Make sure you have the correct imports for your fonts and icons
import { AtSign as AtSignIcon, PhoneIcon } from 'lucide-react';
import { source_code_pro, inter } from '../../../fonts';
import localFont from 'next/font/local'
const selawkReg = localFont({ src: '../../fonts/selawk.ttf' })

function Contact({ theme }) {

    const [status, setStatus] = useState('');
    const emailParts = ['tian', 'xiao', 'zhang', '@', 'gmail', '.', 'com'];
    const phoneParts = ['4', '1', '6', '-', '728', '69', '40'];
    const [emailCopyStatus, setEmailCopyStatus] = React.useState('');
    const [phoneCopyStatus, setPhoneCopyStatus] = React.useState('');
    
    const handleEmailCopy = () => {
        copyToClipboard(emailParts.join(''), setEmailCopyStatus);
        setTimeout(() => setEmailCopyStatus(''), 2000); // Clear message after 2 seconds
    };

    const handlePhoneCopy = () => {
        copyToClipboard(phoneParts.join(''), setPhoneCopyStatus);
        setTimeout(() => setPhoneCopyStatus(''), 2000); // Clear message after 2 seconds
    };

    // Helper function for copying text to clipboard
    const copyToClipboard = (text, callback) => {
        // Create a temporary textarea element
        const textarea = document.createElement('textarea');
        textarea.value = text;
        // Make it invisible
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        // Select and copy the text
        textarea.select();
        try {
            document.execCommand('copy');
            if (callback) callback('Copied!');
        } catch (err) {
            if (callback) callback('Failed to copy.');
        }
        // Remove the temporary textarea
        document.body.removeChild(textarea);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const data = new FormData(form);
        const formObject = Object.fromEntries(data.entries());

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObject),
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error', error);
            setStatus('error');
        }
    };
    
    // Define reusable Tailwind styles for consistent form elements
    const inputStyles = `${theme === "dark" ? `bg-[#3c3c3c] text-gray-200` : `bg-gray-200 text-gray-800`} rounded-sm  border border-transparent focus:outline-none focus:border-[#0066a3] px-2 py-1 w-full`;

    // Define the style for the form button
    const buttonStyles = `${theme === 'dark' ? `bg-[#37373d] text-white` : `bg-gray-200 text-gray-800` }   text-sm2 py-1.5 px-3 rounded hover:bg-[#0066a3] hover:text-white transition w-full`
    // bg-[#007acc] BLUE hover:bg-[#4a4a4f] GREY
    const textColorClass = theme === 'dark' ? 'text-stone-200' : 'text-gray-700';
    const linkColorClass = theme === 'dark' ? 'text-[#2f7ed3]' : 'text-blue-700';
    const buttonClass = `ml-2 px-3 pt-1 pb-1.5 mt-0.5 text-sm2 rounded-md cursor-pointer transition-colors duration-200
                            ${theme === 'dark' ? 'bg-[#37373d] hover:bg-[#0066a3] text-white' : 'bg-gray-200 hover:bg-[#0066a3] hover:text-gray-50 text-gray-800'}`;
                            // hover:bg-[#4a4a4f]
    const statusClass = `ml-2 text-xs font-semibold ${theme === 'dark' ? 'text-[#c0d695]' : 'text-[#0066a3]'}`;
    
    return (
        <div className={`text-start ${selawkReg.className} p-2  rounded-lg`}>
            {/* The contact info section */}
            <div className={`${theme === 'dark' ? 'text-[#659849]' : 'text-[#68945c]'} text-start ${source_code_pro.className}`}>
                &#47;&#47;&nbsp;HELLO AGAIN
            </div>
            
            <div className='flex w-full mt-2'>
                <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex items-center my-1 w-1/2`}>
                    <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}><AtSignIcon strokeWidth='1.5' className='w-7 h-7'  /></div>
                    <span className={`ml-2 ${textColorClass}`}>
                        {emailParts.map((part, index) => <span key={index}>{part}</span>)}
                    </span>
                    <button onClick={handleEmailCopy} className={buttonClass}>Copy</button>
                    {emailCopyStatus && <span className={statusClass}>{emailCopyStatus}</span>}
                </div>

                <div className={`${theme === 'dark' ? 'text-sky-200' : 'text-[#3271AE]'} flex items-center ml-2`}>
                    <div className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}><PhoneIcon strokeWidth='1.5' className='w-7 h-7'  /></div> 
                    <span className={`ml-2 ${textColorClass}`}>
                        {phoneParts.map((part, index) => <span key={index}>{part}</span>)}
                    </span>
                    <button onClick={handlePhoneCopy} className={buttonClass}>Copy</button>
                    {phoneCopyStatus && <span className={statusClass}>{phoneCopyStatus}</span>}
                </div>
            </div>

            {/* The new styled form */}
            <form onSubmit={handleSubmit} className='flex flex-col space-y-2 text-gray-200 mt-2'>
                <div className='flex space-x-4 w-full'>
                    <div className='flex flex-col w-1/2'>
                        <input 
                            type="text" id="name" name="name" className={inputStyles} placeholder='Name'
                        />
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <input 
                            type="email" id="email" name="email" className={inputStyles} placeholder='Email' required 
                        />
                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    {/* <label htmlFor="message" className='text-gray-400 text-sm mb-1'>Message:</label> */}
                    <textarea id="message" name="message" className={`${inputStyles} h-38`} placeholder='Your message...' required />
                </div>

                <div className='flex justify-center'>
                    <button type="submit" className={`${buttonStyles}`}>
                        Send
                    </button>
                </div>
                
                {status === 'success' && <p className='text-[#659849] text-center mt-0.5'>Thank you for your message!</p>}
                {status === 'error' && <p className='text-[#b81a35] text-center mt-0.5'>Something went wrong. Please try again.</p>}
            </form>
        </div>
    )
}

export default Contact