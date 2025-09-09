import Link from 'next/link';
import Image from 'next/image';
import localFont from 'next/font/local'
import { pixelify_sans, inter, vt323 } from '../../../fonts'; 
const selawkReg = localFont({ src: '../../fonts/selawk.ttf' })
const futura = localFont({ src: '../../fonts/FuturaCyrillicBook.ttf' })
const futuraLight = localFont({ src: '../../fonts/FuturaCyrillicLight.ttf' })

export default function CustomBox({
    theme,
    boxContent,
    fullBoxContent,
    boxFont,
    otherClassNames,
    boxBgColor,
    boxTextColor,
    boxFontSize,
    boxTextTransform,
    boxTextLeading,
    headingOne,
    headingTwo,
    linkText,
    linkHref,
    featuresTitle,
    features,
    dependenciesTitle,
    dependencies,
}) {
  const solidBox = `capitalize py-1 px-3 text-sm ${theme === 'dark' ? 'bg-zinc-700 text-gray-50 hover:bg-zinc-600' : 'bg-zinc-300 text-gray-700 hover:bg-zinc-200'}`;
  const borderBox = `border py-1 px-3 text-sm ${theme === 'dark' ? 'border-zinc-700 text-gray-50 hover:border-zinc-600' : 'border-zinc-300 text-gray-700 hover:border-zinc-400'}`;

  const squareClasses = `w-32 h-32 ${otherClassNames} ${futura.className} ${boxBgColor} ${boxTextColor} ${boxTextTransform} ${boxFontSize} ${boxTextLeading}`;
 
  return (
    <div className="text-start pr-4 pt-2">
      <div className="flex text-white">
        <div >
          {fullBoxContent ? (
            <>
              {fullBoxContent}
            </>
          ) : (
            <div className={squareClasses}>{boxContent}</div>  
          )}
        </div>
        <div className={`ml-4 ${selawkReg.className} items-center flex`}>
          <div>
            <div className={`text-2xl font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>{headingOne}</div>
            <div className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>{headingTwo} {otherClassNames}</div>
            <div className="flex space-x-2 font-medium pt-2 text-sm">
              <Link target="_blank" href={linkHref} className="hover:cursor-pointer">
                <div className={`rounded-sm text-stone-50 bg-[#27639b] text-start px-4 py-1 w-fit`}>{linkText}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`${inter.className} text-base uppercase text-gray-400 w-full border-b border-b-zinc-600 pt-4 pb-1 mb-3`}>
        {featuresTitle}
      </div>

      <div className={`grid grid-cols-3 gap-2 ${selawkReg.className}`}>
        {features.map((feature, index) => (
          <div key={index} className={solidBox}>{feature}</div>
        ))}
      </div>

      <div className={`${inter.className} text-base uppercase text-gray-400 w-full border-b border-b-zinc-600 pt-4 pb-1 mb-3`}>
        {dependenciesTitle}
      </div>

      <div className={`grid grid-cols-3 gap-2 ${selawkReg.className}`}>
        {dependencies.map((dependency, index) => (
          <div key={index} className={borderBox}>{dependency}</div>
        ))}
      </div>
    </div>
  );
}