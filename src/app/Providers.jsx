'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}

// "use client"
// import React, { useEffect, useState } from 'react';
// import { ThemeProvider } from 'next-themes'

// const Providers = ({children}) => {
//     const [mounted, setMounted] = useState(false);

//     useEffect(() => {
//         setMounted(true)
//     }, [])

//     if (!mounted) {
//         return <>{children}</>
//     }

//     return (
//         <ThemeProvider>
//             {children}
//         </ThemeProvider>
//     );
// }

// export default Providers


