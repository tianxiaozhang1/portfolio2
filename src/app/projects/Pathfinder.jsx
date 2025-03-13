import React from 'react'
import Link from 'next/link'

// let initialGrid = [
//     [1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1],
//     [1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1],
//     [1,0,1,0,1,0,1,'bg-colourPath42','bg-colourPath41','bg-colourPath40',1,0,1,0,1,0,1,'bg-colourPath12','bg-colourPath11','bg-colourPath10','bg-colourPath9','bg-colourPath8','bg-colourPath7',1],
//     [1,1,1,1,1,0,1,'bg-colourPath43',1,'bg-colourPath39',1,0,1,1,1,0,1,'bg-colourPath13',1,1,1,1,'bg-colourPath6',1],
//     [0,0,0,0,1,0,1,'bg-colourPath44',1,'bg-colourPath38',1,0,0,0,0,0,1,'bg-colourPath14',1,0,0,1,'bg-colourPath5',1],
//     [1,1,1,0,1,0,1,'bg-colourPath45',1,'bg-colourPath37',1,0,1,1,1,1,1,'bg-colourPath15',1,1,1,1,"bg-colourPath4",1],
//     [1,0,0,0,1,0,1,'bg-colourPath46',1,'bg-colourPath36',1,'bg-colourPath22','bg-colourPath21','bg-colourPath20','bg-colourPath19','bg-colourPath18','bg-colourPath17','bg-colourPath16',1,0,0,'bg-colourPath2',"bg-colourPath3",1],
//     [1,0,8,'bg-colourPath57',1,0,1,'bg-colourPath47',1,'bg-colourPath35',1,'bg-colourPath23',1,1,1,1,1,1,1,0,0,9,0,0],
//     [1,0,0,'bg-colourPath56',1,0,1,'bg-colourPath48',1,'bg-colourPath34',1,'bg-colourPath24',0,0,0,0,0,0,1,1,1,1,1,1],
//     [1,1,1,'bg-colourPath55',1,1,1,'bg-colourPath49',1,'bg-colourPath33',1,'bg-colourPath25',1,1,1,1,1,0,0,0,1,0,1,0],
//     [0,0,1,'bg-colourPath54','bg-colourPath53','bg-colourPath52','bg-colourPath51','bg-colourPath50',1,'bg-colourPath36',1,'bg-colourPath26',1,0,1,0,1,1,1,0,1,0,1,0],
//     [1,0,1,0,1,1,1,0,1,'bg-colourPath31',1,'bg-colourPath27',1,0,1,0,0,0,1,0,1,0,1,0],
//     [1,1,1,0,1,0,1,0,1,'bg-colourPath30','bg-colourPath29','bg-colourPath28',1,0,1,1,1,0,1,0,0,0,1,0],
//     [0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0],
//     [0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0]
// ]

// const Pathfinder = () => {
//     function showOneSquare(singleBlock) {
//         if (singleBlock === 1) {
//             return <div className='bg-sudokuBoard4' style={{height: 25, width: 25}}></div>
//         }
//         else if (singleBlock === 0) {
//             return <div className='bg-sudokuBoard2' style={{height: 25, width: 25}}></div>
//         }
//         else if (singleBlock === 8) {
//             return  <div className='bg-colourPath58 flex justify-center items-center' style={{height: 25, width: 25}}>
//                         <div className='bg-slate-50' style={{height: 10, width: 10}}></div>
//                     </div>
//         }
//         else if (singleBlock === 9) {
//             return  <div className='bg-colourPath1 flex justify-center items-center' style={{height: 25, width: 25}}>
//                         <div className='bg-slate-50' style={{height: 10, width: 10}}></div>
//                     </div>
//         }

//         else {
//             return <div className={`${singleBlock}`} style={{height: 25, width: 25}}></div>
//         }
//     }

//     return (
//         <div className='bg-white mx-2 rounded-3xl flex justify-center items-center border-sudokuBoard4 border-4' style={{height: 408, width: 640, overflow: 'hidden'}}>

//             <div style={{zIndex: 1, marginLeft: -82}}>
//                 <div className='bg-white pt-2' style={{height: 364, width: 650, marginTop: -58, marginLeft: -12}}>
//                     {initialGrid.map(singleRow => {
//                         return (
//                             <div className='ml-2 flex'>
//                                 {singleRow.map((singleBlock, i) => {
//                                     return <div className='ml-0.5 mt-0.5 cursor-pointer' key={i}>
//                                             {showOneSquare(singleBlock)}
//                                             </div>
//                                 })}
//                             </div> 
//                         )
//                     })}         
//                 </div>

                
//             </div>

//             <div className='bg-yellow-300 border-sudokuBoard4 border-4 flex justify-center items-center' style={{height: 79, width: 187, marginTop: 214, marginLeft: -262, zIndex: 12}}>
//                 <div className='text-colourPath1' style={{font: "bold 22px Aldrich, sans-serif"}}>
//                 PATHFINDER
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Pathfinder

// let initialGrid = [
//     // [0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1],
//     [0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1],
//     [0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1],
//     [0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,'bg-colourPath42','bg-colourPath41','bg-colourPath40',1,0,1,0,1,0,1,'bg-colourPath12','bg-colourPath11','bg-colourPath10','bg-colourPath9','bg-colourPath8','bg-colourPath7',1,0,0,1,1,1,1,1,1],
//     [0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,'bg-colourPath43',1,'bg-colourPath39',1,0,1,1,1,0,1,'bg-colourPath13',1,1,1,1,'bg-colourPath6',1,0,0,1,1,1,1,1,1],
//     [0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,'bg-colourPath44',1,'bg-colourPath38',1,0,0,0,0,0,1,'bg-colourPath14',1,0,0,1,'bg-colourPath5',1,0,0,1,1,1,1,1,1],
//     [0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,'bg-colourPath45',1,'bg-colourPath37',1,0,1,1,1,1,1,'bg-colourPath15',1,1,1,1,"bg-colourPath4",1,0,0,1,1,1,1,1,1],
//     [0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,'bg-colourPath46',1,'bg-colourPath36',1,'bg-colourPath22','bg-colourPath21','bg-colourPath20','bg-colourPath19','bg-colourPath18','bg-colourPath17','bg-colourPath16',1,0,0,'bg-colourPath2',"bg-colourPath3",1,0,0,1,1,1,1,1,1],
//     [0,0,1,1,1,1,1,1,1,0,8,'bg-colourPath57',1,0,1,'bg-colourPath47',1,'bg-colourPath35',1,'bg-colourPath23',1,1,1,1,1,1,1,0,0,9,0,0,0,0,1,1,1,1,1,1],
//     [0,0,1,1,1,1,1,1,1,0,0,'bg-colourPath56',1,0,1,'bg-colourPath48',1,'bg-colourPath34',1,'bg-colourPath24',0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1],
//     [0,0,1,1,1,1,1,1,1,1,1,'bg-colourPath55',1,1,1,'bg-colourPath49',1,'bg-colourPath33',1,'bg-colourPath25',1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1],
//     [0,0,1,1,1,1,1,1,0,0,1,'bg-colourPath54','bg-colourPath53','bg-colourPath52','bg-colourPath51','bg-colourPath50',1,'bg-colourPath36',1,'bg-colourPath26',1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1],
//     [0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,'bg-colourPath31',1,'bg-colourPath27',1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1],
//     [0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,'bg-colourPath30','bg-colourPath29','bg-colourPath28',1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1],
//     [0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1],
//     // [0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1],
//     [0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1]
// ]

let newGrid = [
    [1,"bg-colourPath1",1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,"bg-colourPath3",1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,"bg-colourPath5",1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,"bg-colourPath7",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,"bg-colourPath9","bg-colourPath11","bg-colourPath13","bg-colourPath15","bg-colourPath17","bg-colourPath19","bg-colourPath21","bg-colourPath23","P", "A", "T", "H","bg-colourPath33","bg-colourPath35","bg-colourPath37","bg-colourPath39",1,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,"F","I","N","D",1,1,1,"bg-colourPath41",1,1,1,1,0],
    [0,0,0,0,0,0,0,0,1,"E","R",1,1,1,0,1,"bg-colourPath43",1,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,"bg-colourPath45",1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,"bg-colourPath47","bg-colourPath49","bg-colourPath51","bg-colourPath53","bg-colourPath55","bg-colourPath57"],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
]

const Numbers = (number) => {

    if (number === 0) {
        return (
            <div className='bg-mineSqColour' style={{width: 56, height: 56}}>
            </div>
        )
    }

    if (number === 1) {
        return (
            <div className='bg-mineSqShadow' style={{width: 56, height: 56}}>
            </div>
        )
    }
    
    else if (number === "I") {
        return (
            <div className='bg-huangHeLiuLi flex' style={{width: 56, height: 56}}>
                <div className='bg-white' style={{width: 8, height: 37, marginLeft: 24, marginTop: 9}}></div>
            </div>
        )
    } 

    else if (number === "N") {
        return (
            <div className='bg-huangHeLiuLi flex' style={{width: 56, height: 56}}>
                <div className='bg-white flex' style={{width: 8, height: 37, marginLeft: 13, marginTop: 9}}></div>
                <div className='bg-white flex' style={{width: 7, height: 8, marginLeft: 0, marginTop: 18}}></div>
                <div className='bg-white flex' style={{width: 6, height: 8, marginLeft: 0, marginTop: 23}}></div>
                <div className='bg-white flex' style={{width: 8, height: 37, marginLeft: 0, marginTop: 9}}></div>
            </div>
        )
    }

    else if (number === "E") {
        return (
            <div className='bg-huangHeLiuLi flex' style={{width: 56, height: 56}}>
                <div className='bg-white' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}></div>
                <div className='bg-huangHeLiuLi' style={{width: 22, height: 6, marginLeft: -22, marginTop: 17}}></div>
                <div className='bg-huangHeLiuLi' style={{width: 6, height: 8, marginLeft: -6, marginTop: 23}}></div>
                <div className='bg-huangHeLiuLi' style={{width: 22, height: 7, marginLeft: -22, marginTop: 31}}></div>
            </div>
        )
    }

    else if (number === "P") {
        return (
            <div className='bg-colourPath25 flex' style={{width: 56, height: 56}}>
                <div className='bg-stone-100' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}></div>
                <div className='bg-colourPath25' style={{width: 14, height: 6, marginLeft: -22, marginTop: 17}}></div>
                <div className='bg-colourPath25' style={{width: 22, height: 15, marginLeft: -14, marginTop: 31}}></div>
            </div>
        )
    }

    else if (number === "A") {
        return (
            <div className='bg-colourPath27 flex' style={{width: 56, height: 56}}>
                <div className='bg-stone-100' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}>
                    <div className='flex justify-between'>
                        <div className='bg-colourPath27' style={{width: 8, height: 8, marginLeft: 0, marginTop: 0}}></div>
                        <div className='bg-colourPath27' style={{width: 8, height: 8, marginLeft: 0, marginTop: 0}}></div>
                    </div>
                    <div className='bg-colourPath27' style={{width: 14, height: 6, marginLeft: 8, marginTop: 0}}></div>
                    <div className='bg-colourPath27' style={{width: 14, height: 15, marginLeft: 8, marginTop: 8}}></div>
                </div>
            </div>
        )
    }

    else if (number === "D") {
        return (
            <div className='bg-huangHeLiuLi flex' style={{width: 56, height: 56}}>
                <div className='bg-white' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}>
                    <div className='bg-huangHeLiuLi' style={{width: 8, height: 8, marginLeft: 22, marginTop: 0}}></div>
                    <div className='bg-huangHeLiuLi' style={{width: 14, height: 21, marginLeft: 8, marginTop: 0}}></div>
                    <div className='bg-huangHeLiuLi' style={{width: 8, height: 8, marginLeft: 22, marginTop: 0}}></div>
                </div>
            </div>
        )
    }

    else if (number === "T") {
        return (
            <div className='bg-colourPath29 flex' style={{width: 56, height: 56}}>
                <div className='bg-stone-100' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}>
                    <div className='flex justify-between' style={{marginTop: 8}}>
                        <div className='bg-colourPath29' style={{width: 11, height: 29, marginLeft: 0, marginTop: 0}}></div>
                        <div className='bg-colourPath29' style={{width: 11, height: 29, marginLeft: 0, marginTop: 0}}></div>
                    </div>
                    
                </div>
            </div>
        )
    }

    else if (number === "H") {
        return (
            <div className='bg-colourPath31 flex' style={{width: 56, height: 56}}>
                <div className='bg-stone-100' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}>
                    <div className='bg-colourPath31' style={{width: 14, height: 14, marginLeft: 8, marginTop: 0}}></div>
                    <div className='bg-colourPath31' style={{width: 14, height: 15, marginLeft: 8, marginTop: 8}}></div>
                </div>
            </div>
        )
    }

    else if (number === "F") {
        return (
            <div className='bg-huangHeLiuLi flex' style={{width: 56, height: 56}}>
                <div className='bg-white' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}>
                    <div className='bg-huangHeLiuLi' style={{width: 22, height: 6, marginLeft: 8, marginTop: 8}}></div>
                    <div className='bg-huangHeLiuLi' style={{width: 8, height: 8, marginLeft: 22, marginTop: 0}}></div>
                    <div className='bg-huangHeLiuLi' style={{width: 22, height: 15, marginLeft: 8, marginTop: 0}}></div>
                </div>
            </div>
        )
    }

    else if (number === "R") {
        return (
            <div className='bg-huangHeLiuLi flex' style={{width: 56, height: 56}}>
                <div className='bg-white' style={{width: 30, height: 37, marginLeft: 13, marginTop: 9}}>
                    <div className='bg-huangHeLiuLi' style={{width: 8, height: 7, marginLeft: 22, marginTop: 0}}></div>
                    <div className='bg-huangHeLiuLi' style={{width: 8, height: 7, marginLeft: 22, marginTop: 8}}></div>
                </div>
                
                <div className='bg-huangHeLiuLi' style={{width: 14, height: 6, marginLeft: -22, marginTop: 17}}></div>
                <div className='bg-huangHeLiuLi' style={{width: 14, height: 15, marginLeft: -14, marginTop: 31}}></div>
            </div>
        )
    }

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

}

const Pathfinder = () => {
    // function showOneSquare(singleBlock) {
    //     if (singleBlock === 1) {
    //         return <div className='bg-sudokuBoard4' style={{height: 40, width: 40}}></div>
    //     }
    //     else if (singleBlock === 0) {
    //         return <div className='bg-sudokuBoard2' style={{height: 40, width: 40}}></div>
    //     }
    //     else if (singleBlock === 8) {
    //         return  <div className='bg-colourPath58 flex justify-center items-center' style={{height: 40, width: 40}}>
    //                     <div className='bg-slate-50' style={{height: 10, width: 12}}></div>
    //                 </div>
    //     }
    //     else if (singleBlock === 9) {
    //         return  <div className='bg-colourPath1 flex justify-center items-center' style={{height: 40, width: 40}}>
    //                     <div className='bg-slate-50' style={{height: 10, width: 12}}></div>
    //                 </div>
    //     }

    //     else {
    //         return <div className={`${singleBlock}`} style={{height: 40, width: 40}}></div>
    //     }
    // }

    // function showSmallSquare(singleBlock) {
    //     if (singleBlock === 1) {
    //         return <div className='bg-sudokuBoard4' style={{height: 26, width: 26}}></div>
    //     }
    //     else if (singleBlock === 0) {
    //         return <div className='bg-sudokuBoard2' style={{height: 26, width: 26}}></div>
    //     }
    //     else if (singleBlock === 8) {
    //         return  <div className='bg-colourPath58 flex justify-center items-center' style={{height: 26, width: 26}}>
    //                     <div className='bg-slate-50' style={{height: 10, width: 12}}></div>
    //                 </div>
    //     }
    //     else if (singleBlock === 9) {
    //         return  <div className='bg-colourPath1 flex justify-center items-center' style={{height: 26, width: 26}}>
    //                     <div className='bg-slate-50' style={{height: 10, width: 12}}></div>
    //                 </div>
    //     }

    //     else {
    //         return <div className={`${singleBlock}`} style={{height: 26, width: 26}}></div>
    //     }
    // }

    function showOneLetter(letter) {
        return Numbers(letter)
    }

    return (
        <Link target="_blank" href="https://github.com/tianxiaozhang1/pathfinder" rel="noopener noreferrer">
            <div className='w-92 h-78 md:w-190 md:h-132 lg:w-252 lg:h-120 xl:w-316 xl:h-152 bg-stone-50 rounded-3xl border-stone-300 border-4 mx-auto flex justify-center items-center cursor-pointer overflow-hidden'>
                
                <div className='flex justify-center'>
                    <div className='bg-mineBoardColor px-0 overflow-hidden'>
                        {newGrid.map((singleRow, i) => {
                            return (
                                <div className='flex' key={i} >
                                    {singleRow.map((singleBlock, j) => {
                                        return <div className='ml-0.5 mt-0.5' key={j}>
                                                {showOneLetter(singleBlock)}
                                                </div>
                                    })}
                                </div> 
                            )
                        })}  
                    </div>
                </div>

                {/* <div className='md:hidden  scale-50'>
                    {initialGrid.map((singleRow, i) => {
                        return (
                            <div className='flex'  key={i}>
                                {singleRow.map((singleBlock, j) => {
                                    return <div className='ml-0.5 mt-0.5 cursor-pointer' key={j}>
                                            {showSmallSquare(singleBlock)}
                                            </div>
                                })}
                            </div> 
                        )
                    })}         
                </div>

                <div style={{zIndex: 1}} className="hidden md:flex">
                    <div className='bg-white xl:scale-105 scale-50'>
                        {initialGrid.map((singleRow, i) => {
                            return (
                                <div className='flex'  key={i}>
                                    {singleRow.map((singleBlock, j) => {
                                        return <div className='ml-0.5 mt-0.5 cursor-pointer' key={j}>
                                                {showOneSquare(singleBlock)}
                                                </div>
                                    })}
                                </div> 
                            )
                        })}         
                    </div>
                </div> */}

                {/* <div className='bg-yellow-300 border-sudokuBoard4 border-4 flex justify-center items-center' style={{height: 79, width: 187, marginTop: 214, marginLeft: -262, zIndex: 12}}>
                    <div className='text-colourPath1' style={{font: "bold 22px Aldrich, sans-serif"}}>
                    PATHFINDER
                    </div>
                </div> */}
            </div>
        </Link>
    )
}

export default Pathfinder
