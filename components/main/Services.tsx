
"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

function Services() {
  return (
    <motion.section
      id="services"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden   relative z-[20]"
      style={{ transform: "scale(0.9" }}
      initial="hidden"
      animate="visible"
      variants={slideInFromTop}
    >
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full  ">
    <motion.div className="absolute w-auto h-auto top-0 z-[5]"initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}>
    <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-50 py-20">
        Our Services
      </h1>
      </motion.div>
      <div className="flex flex-col items-stretch ml-5 mr-14 pl-11 max-md:pl-5">
      
      
      <div className="items-stretch flex w-full justify-between gap-5 mt-36 max-md:max-w-full max-md:flex-wrap max-md:">
        <div className="items-stretch flex flex-col max-md:max-w-full">
          
          
        </div>
        
      </div>
      <div className="mt-10 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[59%] max-md:w-full max-md:ml-0">
            <div className="justify-end backdrop-blur-[15px] bg-indigo-600 grow w-full pl-8 pt-10 rounded-3xl max-md:max-w-full max-md:mt-6 max-md:pl-5">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 mb-10">
                <div className="flex flex-col items-stretch w-[45%] max-md:w-full max-md:ml-0">
                  <div className="items-start flex flex-col max-md:mt-10 mb-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdea81680b0d01632b75d35e83d2a4e8817302915c86a58a7deb50eda41f016c?"
                      className="aspect-square object-contain object-center w-[60px] justify-center items-center backdrop-blur-[10px] overflow-hidden max-w-full self-start"
                    />
                    <div className="text-white text-3xl self-stretch whitespace-nowrap mt-6">
                      Web Development
                    </div>
                    <div className="text-white text-base leading-7 self-stretch mt-4">
                    Transforming your digital concepts into dynamic, user-centric websites and applications. We prioritize functionality, aesthetics, and user experience, ensuring that your online presence reflects the essence of your brand. From responsive design to backend development, we handle every aspect of the process with meticulous attention to detail. 
                    </div>
                    <div className="items-stretch self-stretch flex justify-between gap-1 mt-4 pr-7 max-md:pr-5">
                    <a href="https://wa.me/message/JGNQ5LCCMIPCK1" target="_blank" className="text-white text-base leading-7 underline flex items-center gap-1">
    Start with us
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fa894293cc68d4acd5ad235ede07d1c80dbda889b12e91cc050cd20f8b2b9f5?"
      className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full"
    />
  </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[55%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="backdrop-blur-[7.5px] flex w-full grow flex-col items-stretch mx-auto pl-5 pt-3.5 pb-2 rounded-3xl border-[1.5px] border-solid border-white max-md:mt-10">
                    <div className="flex items-center justify-between gap-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8faa2b201515f4a61b8a5634f3d835388f6e292e4cb04d88ecc02cdd0d4c37d2?"
                        className="aspect-[4.17] object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full my-auto"
                      />
                      <div className="backdrop-blur-[7.5px] bg-white bg-opacity-20 self-stretch flex items-stretch justify-between gap-5 px-1.5 py-1.5 rounded-3xl max-md:pr-5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3e43e2097d3ff7d859de95c7b70764789347ba04154cb4d452aaaa7effd7230?"
                          className="aspect-[0.73] object-contain object-center w-2 fill-white overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-white text-center text-xs italic">
                          www.nexzgen.com
                        </div>
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0606c2f1491e503482353170a0f25470bb8007c653ff01fc17ad1a63fac64aa7?"
                      className="aspect-[327] object-contain object-center w-full stroke-[1px] stroke-white stroke-opacity-10 overflow-hidden mt-3"
                    />
                    <div className="backdrop-blur-[7.5px] bg-white bg-opacity-30 flex w-[326px] shrink-0 max-w-full h-[169px] flex-col mt-4 rounded-xl" />
                    <div className="backdrop-blur-[7.5px] bg-white bg-opacity-30 flex w-[326px] shrink-0 max-w-full h-[19px] flex-col mt-3 rounded-[50px]" />
                    <div className="backdrop-blur-[7.5px] bg-white bg-opacity-30 flex w-[326px] shrink-0 max-w-full h-3 flex-col mt-3 rounded-[32px]" />
                    <div className="backdrop-blur-[7.5px] bg-white bg-opacity-30 flex w-[326px] shrink-0 max-w-full h-3 flex-col mt-2 rounded-[32px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
            <div className="backdrop-blur-[15px] bg-neutral-900 grow w-full pl-8 pt-10 rounded-3xl max-md:max-w-full max-md:mt-6 max-md:pl-5">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
                  <div className="items-start flex flex-col max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b35d0d5c333bc404b6181aa1819916c094412ce8376aec3a5a0b4c999838f96?"
                      className="aspect-square object-contain object-center w-[60px] justify-center items-center backdrop-blur-[10px] overflow-hidden max-w-full self-start"
                    />
                    <div className="text-white text-3xl self-stretch whitespace-nowrap mt-6">
                      Game Development
                    </div>
                    <div className="text-white text-base leading-7 self-stretch mt-4">
                    Experience the thrill of interactive gameplay, where we fuse cutting-edge technology with creative ingenuity to deliver captivating digital experiences that redefine entertainment.
                    </div>
                    <div className="items-stretch self-stretch flex justify-between gap-1 mt-4 pr-7 max-md:pr-5">
                    <a href="https://wa.me/message/JGNQ5LCCMIPCK1" target="_blank" className="text-white text-base leading-7 underline flex items-center gap-1">
    Start with us
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fa894293cc68d4acd5ad235ede07d1c80dbda889b12e91cc050cd20f8b2b9f5?"
      className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full"
    />
  </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="backdrop-blur-[7.5px] flex w-full grow flex-col items-stretch mt-2 mx-auto pl-4 pt-4 rounded-3xl border-[1.2px] border-solid border-white max-md:mt-10">
                    <div className="flex items-stretch justify-between gap-2">
                      <div className="flex aspect-[1.2692307692307692] flex-col justify-center items-center pr-2 rounded-[50%]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfba7469206eed616fec6b652383992bae03fe95636f801250081a9c82cdcad5?"
                          className="aspect-square object-contain object-center w-[26px] overflow-hidden"
                        />
                      </div>
                      <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                        <div className="backdrop-blur-[3.0984556674957275px] bg-white bg-opacity-30 flex shrink-0 h-[7px] flex-col rounded-xl" />
                        <div className="backdrop-blur-[3.0984556674957275px] bg-white bg-opacity-30 flex shrink-0 h-1 flex-col mt-1 rounded-xl" />
                      </div>
                    </div>
                    <div className="items-stretch flex gap-1.5 mt-24 px-px max-md:mt-10">
                      <div className="backdrop-blur-[7.5px] bg-white bg-opacity-30 flex w-9 shrink-0 h-3.5 flex-col rounded-xl" />
                      <div className="backdrop-blur-[7.5px] bg-white bg-opacity-30 flex w-9 shrink-0 h-3.5 flex-col rounded-xl" />
                      <div className="backdrop-blur-[7.5px] bg-white bg-opacity-30 flex w-9 shrink-0 h-3.5 flex-col rounded-xl" />
                      <div className="backdrop-blur-[7.5px] bg-white bg-opacity-30 flex w-9 shrink-0 h-3.5 flex-col rounded-xl" />
                    </div>
                    <div className="backdrop-blur-[3.0984556674957275px] bg-white bg-opacity-30 flex shrink-0 h-[7px] flex-col mt-5 rounded-xl" />
                    <div className="backdrop-blur-[3.0984556674957275px] bg-white bg-opacity-30 flex shrink-0 h-1 flex-col mt-1 rounded-xl" />
                    <div className="items-stretch flex justify-between gap-3 mt-2.5">
                      <div className="items-stretch flex grow basis-[0%] flex-col">
                        <div className="backdrop-blur-[7.5px] bg-white bg-opacity-30 flex shrink-0 h-[66px] flex-col rounded-xl" />
                        <div className="backdrop-blur-[3.0984556674957275px] bg-white bg-opacity-30 flex shrink-0 h-[7px] flex-col mt-1 rounded-xl" />
                        <div className="backdrop-blur-[3.0984556674957275px] bg-white bg-opacity-30 flex shrink-0 h-1 flex-col mt-1 rounded-xl" />
                      </div>
                      <div className="items-stretch flex grow basis-[0%] flex-col">
                        <div className="backdrop-blur-[7.5px] bg-white bg-opacity-30 flex shrink-0 h-[66px] flex-col rounded-xl" />
                        <div className="backdrop-blur-[3.0984556674957275px] bg-white bg-opacity-30 flex shrink-0 h-[7px] flex-col mt-1 rounded-xl" />
                        <div className="backdrop-blur-[3.0984556674957275px] bg-white bg-opacity-30 flex shrink-0 h-1 flex-col mt-1 rounded-xl" />
                      </div>
                    </div>
                    <div className="items-stretch flex justify-between gap-3 mt-3">
                      <div className="items-stretch flex grow basis-[0%] flex-col justify-center">
                        <div className="backdrop-blur-[7.5px] bg-white bg-opacity-30 flex shrink-0 h-[13px] flex-col rounded-xl" />
                      </div>
                      <div className="items-stretch flex aspect-[5.615384615384615] flex-col justify-center">
                        <div className="backdrop-blur-[7.5px] bg-white bg-opacity-30 flex shrink-0 h-[13px] flex-col rounded-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[41%] max-md:w-full max-md:ml-0">
            <div className="backdrop-blur-[15px] bg-neutral-900 grow w-full pl-8 pt-10 rounded-3xl max-md:max-w-full max-md:mt-6 max-md:pl-5">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 mb-10">
                <div className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
                  <div className="items-start flex flex-col max-md:mt-10">
                    <img
                      loading="lazy"
                      srcSet="https://i.imgur.com/0nSlkl9.png"
                      className="aspect-square object-contain object-center w-[60px] justify-center items-center backdrop-blur-[10px] overflow-hidden max-w-full self-start"
                    />
                    <div className="text-white text-3xl self-stretch whitespace-nowrap mt-6">
                      Animation
                    </div>
                    <div className="text-white text-base leading-7 self-stretch mt-4">
                    Bringing stories and concepts to life through captivating 2D and 3D animations. combine artistic finesse with technical expertise to create visually stunning and emotionally engaging narratives.
                    </div>
                    <div className="items-stretch self-stretch flex justify-between gap-1 mt-4 pr-7 max-md:pr-5">
                    <a href="https://wa.me/message/JGNQ5LCCMIPCK1" target="_blank" className="text-white text-base leading-7 underline flex items-center gap-1">
    Start with us
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fa894293cc68d4acd5ad235ede07d1c80dbda889b12e91cc050cd20f8b2b9f5?"
      className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full"
    />
  </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="backdrop-blur-[7.5px] flex grow flex-col items-center w-full mt-9   px-2.5 rounded-3xl border-[1.2px] border-solid border-white max-md:mt-10">
                    <img
                      loading="lazy"
                      srcSet="https://i.imgur.com/02nwdPH.png"
                      className="aspect-[1.01] object-contain object-center w-[262px] overflow-hidden mb-10 pl-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[59%] ml-5 max-md:w-full max-md:ml-0">
            <div className="backdrop-blur-[15px] bg-violet-500 grow w-full pl-8 pt-10 rounded-3xl max-md:max-w-full max-md:mt-6 max-md:pl-5">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
                  <div className="flex flex-col items-start max-md:mt-10">
                    <img
                      loading="lazy"
                      srcSet="https://i.imgur.com/ugiPKpb.png"
                      className="aspect-square object-contain object-center w-[60px] justify-center items-center backdrop-blur-[10px] overflow-hidden max-w-full"
                    />
                    <div className="text-white text-3xl self-stretch whitespace-nowrap mt-6">
                      Augmented Reality
                    </div>
                    <div className="text-white text-base leading-7 self-stretch mt-4">
                    Step into the future of immersive experiences with our augmented reality services. We specialize in creating interactive digital overlays that seamlessly blend the physical and digital worlds, transforming ordinary environments into extraordinary adventures. 
                    </div>
                    <div className="items-stretch flex gap-1 mt-4">
                    <a href="https://wa.me/message/JGNQ5LCCMIPCK1" target="_blank" className="text-white text-base leading-7 underline flex items-center gap-1">
    Start with us
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fa894293cc68d4acd5ad235ede07d1c80dbda889b12e91cc050cd20f8b2b9f5?"
      className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full"
    />
  </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="backdrop-blur-[7.5px] flex grow flex-col justify-center items-stretch w-full mt-3  pl-14 pr-11 py-9 rounded-3xl border-[1.2px] border-solid border-white max-md:mt-10 max-md:px-5">
                    <img
                      loading="lazy"
                      srcSet="https://i.imgur.com/jHmsa44.png"
                      className="aspect-square object-contain object-center w-[200px]  overflow-hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </motion.section>
  );
}

export default Services;
