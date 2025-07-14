"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const Letters = ({ letter, color }) => {
    // Determine the default color for each letter if no 'color' prop is provided
    const getDefaultColor = (char) => {
        switch (char) {
            case "S": return '#B6D432';
            case "O": return '#9FC333';
            case "R": return '#89B335';
            case "T": return '#73A337';
            case "I": return '#5D9339';
            case "N": return '#47833B';
            case "G": return '#2A6E3E';
            case "E": return '#5D9339'; // Assuming same default as G or similar
            case "D": return '#2A6E3E'; // Assuming same default as G or similar
            default: return 'transparent';
        }
    };

    const appliedColor = color !== undefined ? color : getDefaultColor(letter);

    // --- DEBUG LOG ---
    console.log(`[Letters Component] Letter: ${letter}, Received color prop: ${color}, Applied color: ${appliedColor}`);
    // ---------------

    if (letter === "S") {
        return (
            <div className='bg-neutral-100 flex' style={{width: 32, height: 56}}>
                <div style={{backgroundColor: appliedColor, width: 30, height: 37, marginLeft: 1, marginTop: 9}}>
                    <div className='bg-neutral-100' style={{width: 8, height: 8, marginLeft: 0, marginTop: 0}}></div>
                    <div className='bg-neutral-100' style={{width: 8, height: 8, marginLeft: 22, marginTop: 21}}></div>
                </div>
                <div className='bg-neutral-100' style={{width: 22, height: 6, marginLeft: -22, marginTop: 17}}></div>
                <div className='bg-neutral-100' style={{width: 22, height: 7, marginLeft: -30, marginTop: 31}}></div>
            </div>
        )
    }
    else if (letter === "O") {
        return (
            <div className='bg-neutral-100 flex' style={{width: 32, height: 56}}>
                <div style={{backgroundColor: appliedColor, width: 30, height: 37, marginLeft: 1, marginTop: 9}}>
                    <div className='flex' style={{width: 30, height: 8}}>
                        <div className='bg-neutral-100' style={{width: 8, height: 8}}></div>
                        <div className='bg-neutral-100' style={{width: 8, height: 8, marginLeft: 14}}></div>
                    </div>
                    <div className='flex justify-center' style={{width: 30, height: 21}}>
                        <div className='bg-neutral-100' style={{width: 12, height: 21}}></div>
                    </div>
                    <div className='flex' style={{width: 30, height: 8}}>
                        <div className='bg-neutral-100' style={{width: 8, height: 8}}></div>
                        <div className='bg-neutral-100' style={{width: 8, height: 8, marginLeft: 14}}></div>
                    </div>
                </div>
            </div>
        )
    }
    else if (letter === "R") {
        return (
            <div className='bg-neutral-100 flex' style={{width: 32, height: 56}}>
                <div style={{backgroundColor: appliedColor, width: 30, height: 37, marginLeft: 1, marginTop: 9}}>
                    <div className='bg-neutral-100' style={{width: 8, height: 7, marginLeft: 22, marginTop: 0}}></div>
                    <div className='bg-neutral-100' style={{width: 8, height: 7, marginLeft: 22, marginTop: 8}}></div>
                </div>
                <div className='bg-neutral-100' style={{width: 14, height: 6, marginLeft: -22, marginTop: 17}}></div>
                <div className='bg-neutral-100' style={{width: 14, height: 15, marginLeft: -14, marginTop: 31}}></div>
            </div>
        )
    }
    else if (letter === "T") {
        return (
            <div className='bg-neutral-100 ' style={{width: 32, height: 56}}>
                <div style={{backgroundColor: appliedColor, width: 30, height: 8, marginLeft: 1, marginTop: 9}}></div>
                <div style={{backgroundColor: appliedColor, width: 8, height: 29, marginLeft: 12, marginTop: 0}}></div>
            </div>
        )
    }
    else if (letter === "I") {
        return (
            <div className='bg-neutral-100 flex' style={{width: 12, height: 56}}>
                <div style={{backgroundColor: appliedColor, width: 8, height: 37, marginLeft: 2, marginTop: 9}}></div>
            </div>
        )
    }
    else if (letter === "N") {
        return (
            <div className='bg-neutral-100 flex' style={{width: 32, height: 56}}>
                <div style={{backgroundColor: appliedColor, width: 8, height: 37, marginLeft: 1, marginTop: 9}}></div>
                <div style={{backgroundColor: appliedColor, width: 7, height: 8, marginLeft: 0, marginTop: 18}}></div>
                <div style={{backgroundColor: appliedColor, width: 7, height: 8, marginLeft: 0, marginTop: 23}}></div>
                <div style={{backgroundColor: appliedColor, width: 8, height: 37, marginLeft: 0, marginTop: 9}}></div>
            </div>
        )
    }
    else if (letter === "G") {
        return (
            <div className='bg-neutral-100 flex justify-center items-center' style={{width: 32, height: 56}}>
                <div style={{backgroundColor: appliedColor, width: 30, height: 37}}>
                    <div className='bg-neutral-100' style={{width: 22, height: 6, marginLeft: 8, marginTop: 8}}></div>
                    <div className='bg-neutral-100' style={{width: 8, height: 8, marginLeft: 8}}></div>
                    <div className='bg-neutral-100' style={{width: 14, height: 7, marginLeft: 8}}></div>
                </div>
            </div>
        )
    }
    else if (letter === "E") {
        return (
            <div className='bg-neutral-100 flex' style={{width: 32, height: 56}}>
                <div style={{backgroundColor: appliedColor, width: 30, height: 37, marginLeft: 1, marginTop: 9}}>
                    <div className='bg-neutral-100' style={{width: 22, height: 6, marginLeft: 8, marginTop: 8}}></div>
                    <div className='bg-neutral-100' style={{width: 8, height: 8, marginLeft: 22, marginTop: 0}}></div>
                    <div className='bg-neutral-100' style={{width: 22, height: 7, marginLeft: 8, marginTop: 0}}></div>
                </div>
            </div>
        )
    }
    else if (letter === "D") {
        return (
            <div className='bg-neutral-100 flex' style={{width: 32, height: 56}}>
                <div style={{backgroundColor: appliedColor, width: 30, height: 37, marginLeft: 1, marginTop: 9}}>
                    <div className='bg-neutral-100' style={{width: 8, height: 8, marginLeft: 22, marginTop: 0}}></div>
                    <div className='bg-neutral-100' style={{width: 14, height: 21, marginLeft: 8, marginTop: 0}}></div>
                    <div className='bg-neutral-100' style={{width: 8, height: 8, marginLeft: 22, marginTop: 0}}></div>
                </div>
            </div>
        )
    }
    else if (letter === "DOT") {
        return (
            <div className='bg-neutral-100 flex' style={{width: 12, height: 56}}>
                <div style={{backgroundColor: appliedColor, width: 8, height: 8, marginLeft: 2, marginTop: 38}}></div>
            </div>
        )
    }
    return null;
}

const Sorting = () => {
    // Initial letters based on original animation start
    const [currentLetters, setCurrentLetters] = useState(['G', 'N', 'I', 'T', 'R', 'O', 'S']);
    const [letterColors, setLetterColors] = useState({});
    // animationStage will control the phases:
    // 0: Initial "gnitros" to "sorting" permutation
    // 1: "sorting" to "sorted" transformation (GNI removal, ED addition)
    // 2: Color change for "Sorted"
    // 3: Animation complete
    const [animationStage, setAnimationStage] = useState(0);

    const colorStepRef = useRef(0); // For color animation

    // Intersection Observer state
    const containerRef = useRef(null);
    const [isDivVisible, setIsDivVisible] = useState(false);

    // Define all word states for "gnitros" to "sorting" transition
    const sortingWordStates = [
        ['G', 'N', 'I', 'T', 'R', 'O', 'S'], // gnitros
        ['N', 'G', 'I', 'T', 'R', 'S', 'O'], // ngitrso
        ['N', 'I', 'G', 'T', 'S', 'R', 'O'], // nigtsro
        ['N', 'I', 'T', 'G', 'S', 'O', 'R'], // nitgsor
        ['I', 'N', 'T', 'S', 'G', 'O', 'R'], // intsgor
        ['I', 'N', 'S', 'T', 'O', 'G', 'R'], // instogr
        ['I', 'S', 'N', 'T', 'O', 'R', 'G'], // isntorg
        ['S', 'I', 'N', 'T', 'O', 'R', 'G'], // sintorg
        ['S', 'I', 'N', 'O', 'T', 'R', 'G'], // sinotrg
        ['S', 'I', 'O', 'N', 'R', 'T', 'G'], // sionrtg
        ['S', 'O', 'I', 'R', 'N', 'T', 'G'], // soirntg
        ['S', 'O', 'R', 'I', 'T', 'N', 'G'], // soritng
        ['S', 'O', 'R', 'T', 'I', 'N', 'G'], // sorting
        ['S', 'O', 'R', 'T', 'I', 'N', 'G'], // sorting (repeated to hold final state)
    ];

    // Define transformation sequence from "SORTING" to "SORTED"
    const transformationSequence = [
        () => { setCurrentLetters(['S', 'O', 'R', 'T', 'I', 'N']); }, // Remove G
        () => { setCurrentLetters(['S', 'O', 'R', 'T', 'I']); }, // Remove N
        () => { setCurrentLetters(['S', 'O', 'R', 'T']); }, // Remove I
        () => { setCurrentLetters(['S', 'O', 'R', 'T', 'E']); }, // Add E
        () => { setCurrentLetters(['S', 'O', 'R', 'T', 'E', 'D']); },  // Add D
        () => { setCurrentLetters(['S', 'O', 'R', 'T', 'E', 'D', 'DOT']); }  // Add DOT
    ];

    // Final colors for "Sorted"
    const finalSortedColors = {
        0: '#88ACDA', // S
        1: '#6B9EC8', // O
        2: '#4E91B7', // R
        3: '#3283A6', // T
        4: '#157695', // E
        5: '#0B6886', // D
        6: '#0B6886', // DOT
    };

    // Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsDivVisible(entry.isIntersecting);
                if (entry.isIntersecting) {
                    setAnimationStage(0); // Start the first phase (gnitros to sorting)
                } else {
                    // Reset to initial state when not visible
                    setAnimationStage(0);
                    setCurrentLetters(['G', 'N', 'I', 'T', 'R', 'O', 'S']); // Reset to initial 'gnitros'
                    setLetterColors({});
                    colorStepRef.current = 0;
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.9, // From original code
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    // Main animation logic
    useEffect(() => {
        let timeoutId;

        console.log(`[Sorting Component] Current animationStage: ${animationStage}`); // Debug log

        if (isDivVisible && animationStage === 0) {
            // Phase 1: "gnitros" to "sorting" permutations
            let step = 0;
            const animateSorting = () => {
                if (step < sortingWordStates.length) {
                    setCurrentLetters(sortingWordStates[step]);
                    step++;
                    if (step < sortingWordStates.length) {
                        timeoutId = setTimeout(animateSorting, 155); // ~115ms per change from original code
                    } else {
                        // After all permutations, move to the next stage
                        setAnimationStage(1);
                    }
                }
            };
            animateSorting();
        } else if (isDivVisible && animationStage === 1) {
            // Phase 2: "sorting" to "sorted" transformation (GNI removal, ED addition)
            let transformStepIndex = 0;
            const executeTransformStep = () => {
                if (transformStepIndex < transformationSequence.length) {
                    transformationSequence[transformStepIndex]();
                    transformStepIndex++;
                    timeoutId = setTimeout(executeTransformStep, 250); // 200ms per change from original code
                } else {
                    // After all transformations, move to the color change stage
                    setAnimationStage(2);
                    colorStepRef.current = 0; // Ensure color animation starts from 0
                }
            };
            // A small pause before starting the transformation sequence
            timeoutId = setTimeout(executeTransformStep, 150); // 100ms pause from original code
        } else if (isDivVisible && animationStage === 2) {
            // Phase 3: Color change for "Sorted"
            const animateColors = () => {
                if (colorStepRef.current < Object.keys(finalSortedColors).length) {
                    const letterIndex = colorStepRef.current;
                    const colorToApply = finalSortedColors[letterIndex];

                    console.log(`[Sorting Component] Applying color for step ${letterIndex}: ${colorToApply}`); // Debug log
                    setLetterColors(prevColors => {
                        const newColors = {
                            ...prevColors,
                            [letterIndex]: colorToApply
                        };
                        console.log('[Sorting Component] New letterColors state (after update):', newColors); // Debug log
                        return newColors;
                    });
                    colorStepRef.current++;
                    timeoutId = setTimeout(animateColors, 150); // 150ms per letter from original code
                } else {
                    console.log('[Sorting Component] Color animation complete.'); // Debug log
                    setAnimationStage(3); // Animation complete
                }
            };
            animateColors();
        }

        return () => clearTimeout(timeoutId); // Cleanup timeout on unmount or re-render
    }, [isDivVisible, animationStage]); // Dependencies adjusted for new flow

    return (
        <Link target="_blank" href="https://github.com/tianxiaozhang1/sorting" rel="noopener noreferrer">
            <div ref={containerRef}
                className='w-92 h-78 md:w-190 md:h-132 lg:w-252 lg:h-120 xl:w-316 xl:h-152 bg-neutral-100 rounded-3xl border-gray-200 border-4 mx-auto flex justify-center items-center cursor-pointer'>
                <div className='w-2/12 md:w-4/12 xl:-mx-22 flex justify-center text-slate-500 cursor-pointer h-full items-center space-x-1'>
                    <div>
                        <div className='flex space-x-0'>
                            {currentLetters.map((letter, index) => (
                                <Letters key={index} letter={letter} color={letterColors[index]} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Sorting;