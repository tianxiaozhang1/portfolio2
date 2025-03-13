// "use client"
// import React, { useEffect, useState } from 'react';

// import Header from '../components/Header'
// import Footer from '../components/Footer'

// import EmailTemplate from '../components/Email-template'

// import { roboto } from '../../fonts'

// function Email() {
//     const [name, setName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const [emailSent, setEmailSent] = useState(false);
//     const [emailSentMsg, setEmailSentMsg] = useState("");

//     const middle = "flex justify-center text-center"
//     const inputLabel = "ml-1 font-semibold text-slate-500 mt-2 text-lg"
//     const inputLine = "bg-white focus:bg-white border border-gray-300 text-textBrown text-2xl rounded-xl font-bold px-3 py-1.5 w-full"

    
//     const sendMail = async (e) => {
//         e.preventDefault();
    
//         const response = await fetch('/api/contact', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 name, phone, email, message
//             })
//         })

//         setEmailSent(true)
//         if (response.status === 200) {
//             setEmailSentMsg("Thank you! Email sent.")
//         } else {
//             console.log("response.status", response.status)
//             setEmailSentMsg("Please try again later.")
//         }
//     }

//   return (
//         <div>
//             <Header/>

//             {/* <EmailTemplate/> */}

//             <div className='max-w-7xl mx-auto'>
//                 <div className='font-semibold text-2xl md:text-3xl xl:text-5xl pl-4 md:pl-20 md:ml-2 lg:pl-48 lg:ml-20 xl:pl-112 xl:ml-0 xl:py-12 bg-white'>
//                     Email
//                 </div>

//                 <form onSubmit={sendMail} className='flex justify-center px-6'>
//                     <div>
//                         {/* <div className={`text-lg md:text-2xl md:mb-1 font-bold mt-8 xl:mt-8 ${middle} ${roboto.className}`}>
//                             How can we help you?
//                         </div> */} 
//                         <div className={`${inputLabel} ${roboto.className} mt-0`}>
//                             Name
//                         </div>
//                         <input
//                             type="text" id="name" name="name" 
//                             value={name}
//                             onChange={(e) => {
//                                 setName(e.target.value)
//                                 setEmailSent(false)
//                             }}
//                             className={`${inputLine}`}
//                         >
//                         </input>

//                         <div className={`${inputLabel} ${roboto.className}`}>
//                             Phone
//                         </div>
//                         <input type="tel" id="phone" name="phone" value={phone}
//                                 onChange={(e) => {
//                                     setPhone(e.target.value)
//                                     setEmailSent(false)
//                                 }}
//                                 className={`${inputLine}`}>
//                         </input>

//                         <div className={`${inputLabel} ${roboto.className}`}>
//                             Email
//                         </div>
//                         <input 
//                                 type="email" id="email" name="email" value={email}
//                                 onChange={(e) => {
//                                     setEmail(e.target.value)
//                                     setEmailSent(false)
//                                 }}
//                                 className={`${inputLine}`}>
//                         </input>

//                         <div className={`${inputLabel} ${roboto.className}`}>
//                             Message
//                         </div>
//                         <textarea type="text" id="message" name="message"
//                                     value={message}
//                                     onChange={(e) => {
//                                         setMessage(e.target.value)
//                                         setEmailSent(false)
//                                     }}
//                                     className={`${inputLine} resize-y w-full h-40`}
//                         >
//                         </textarea>

//                         <button
//                             type="submit"
//                             className={`font-semibold text-xl text-slate-100 bg-stone-600 border-2 border-stone-500
//                                         hover:bg-textBrown focus:text-white px-1 py-2 rounded-xl mt-2 w-full mb-2 
//                                         ${roboto.className}`}>
//                             Send
//                         </button>

//                         <div className="mb-12 flex justify-center font-bold text-stone-500">
//                             {emailSent 
//                                 ? <div>{emailSentMsg}</div>
//                                 : <div className="h-6 w-8"></div>
//                             }
//                         </div>
//                     </div>
//                 </form>
//             </div>

//             <Footer/>
//         </div>
//   )
// }

// export default Email
