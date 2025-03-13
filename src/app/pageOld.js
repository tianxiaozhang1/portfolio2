import Image from "next/image";

import GitHubLogo from './components/logos/github'
import WebsiteLogo from './components/logos/website'
import InstagramLogo from './components/logos/instagram'
import LinkedinLogo from './components/logos/linkedin'

import profile from '../images/desert.jpg'
import x1 from '../images/x1.jpg'

export default function Home() {
    return (
        <div className="">
          <div className="bg-sky-700 flex justify-center mx-auto">
              <div className="max-w-7xl w-full bg-slate-50 mt-20 lg:mt-16 mb-16 lg:flex ">
                  <div className="lg:w-3/4 bg-slate-50 p-12 z-10 ">
                      <div className="z-12 lg:hidden -mt-1 flex justify-center">
                        <Image
                          src={profile}
                          className="w-1/3 rounded-full -mt-20"
                        />
                      </div>
                      <div className="text-4xl lg:text-7xl font-bold text-center lg:text-start">Tianxiao Zhang</div>
                      <div className="text-3xl font-bold text-center lg:text-start text-slate-400">@tianxiaozhang</div>
                      <div className="font-semibold text-center lg:text-start">Full Stack Developer</div>
                      <div className="flex justify-between lg:w-3/5 mt-2 px-6 lg:px-0 mb-6">

                          <div className='flex justify-center bg-slate-50' style={{marginTop: 0, height: 0}}>
                              <a href="https://github.com/tianxiaozhang1" target="_blank"><GitHubLogo bgColour={"bg-white"}  darkColour={"bg-sky-700"} lightColour={"bg-slate-50"} sizeFactor={2} /></a>
                          </div>

                          <div className='flex justify-center bg-slate-50' style={{marginTop: 0, height: 0}}>
                              <a href="https://github.com/tianxiaozhang1" target="_blank"><WebsiteLogo bgColour={"bg-white"}  darkColour={"bg-sky-700"} lightColour={"bg-slate-50"} sizeFactor={2} /></a>
                          </div>

                          <div className='flex justify-center bg-slate-50' style={{marginTop: 0, height: 0}}>
                              <a href="https://github.com/tianxiaozhang1" target="_blank"></a>
                          </div>

                          <div className='flex justify-center bg-slate-50 ' style={{marginTop: 0, height: 0}}>
                              <a href="https://github.com/tianxiaozhang1" target="_blank"><LinkedinLogo bgColour={"bg-white"}  darkColour={"bg-sky-700"} lightColour={"bg-slate-50"} sizeFactor={2} /></a>
                          </div>
                      </div>
                  </div>
                  <div className="hidden lg:flex lg:w-1/4 bg-sky-700 ">
                    <Image
                      src={profile}
                      // className="rounded-r-lg"
                    />
                  </div>
              </div>

          </div>

          <div className="bg-slate-700 flex justify-center mx-auto">
              <div className="w-full max-w-7xl px-2 lg:px-0">
                  <div className="text-slate-200 max-w-7xl my-8 text-4xl font-bold text-center lg:text-start">Projects</div>

                  <div className="lg:flex pb-4">
                      <div className="w-full lg:w-1/2 bg-slate-50 rounded-lg lg:mx-0 lg:mr-2">
                        <Image
                          src={x1}
                          className=""
                        />
                      </div>
                      <div className="w-full lg:w-1/2 bg-slate-50 rounded-lg h-72 lg:ml-2">y</div>
                  </div>

                  <div className="lg:flex pb-4">
                      <div className="w-full lg:w-1/2 bg-slate-50 rounded-lg h-72 lg:mx-0 lg:mr-2">x</div>
                      <div className="w-full lg:w-1/2 bg-slate-50 rounded-lg h-72 lg:ml-2">y</div>
                  </div>

                  <div className="lg:flex pb-4">
                      <div className="w-full lg:w-1/2 bg-slate-50 rounded-lg h-72 lg:mx-0 lg:mr-2">x</div>
                      <div className="w-full lg:w-1/2 bg-slate-50 rounded-lg h-72 lg:ml-2">y</div>
                  </div>

                  <div className="lg:flex pb-4">
                      <div className="w-full lg:w-1/2 bg-slate-50 rounded-lg h-72 lg:mx-0 lg:mr-2">x</div>
                      <div className="w-full lg:w-1/2 bg-slate-50 rounded-lg h-72 lg:ml-2">y</div>
                  </div>
              </div>
          </div>

          <div className="bg-sky-700 flex justify-center mx-auto">
              <div className="w-full max-w-7xl px-2 lg:px-0">
                  <div className="text-slate-200 max-w-7xl my-8 text-4xl font-bold">Photography</div>
              </div>
          </div>
        </div>
    );
}
