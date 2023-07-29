import * as React from "react";
import Image from "next/image";
import Landing from "@/assets/home/Landing.jpg";
import LandingMobile from "@/assets/home/LandingMobile.jpg";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import shop4me from "@/assets/shop4me.jpg";
import appStore from "@/assets/appStore.svg";
import playStore from "@/assets/playStore.svg";
export interface ISectionOneProps {}

export function SectionOne(props: ISectionOneProps) {
  return (
    <section>
      <div>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          exit={{ x: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="h-screen w-screen"
        >
          <Image
            src={LandingMobile}
            alt="image"
            className="tablet:hidden aspect-auto h-full brightness-75  "
          />
          <Image
            src={Landing}
            alt="image"
            className="hidden tablet:block aspect-auto h-full brightness-75  "
          />
        </motion.div>
        <nav className=" h-[3.5rem] absolute top-0 left-0 w-full z-20 flex p-2 tablet:p-4 desktop:p-8 justify-between">
          <div className="flex items-center  h-full  rounded-md ">
            <Image
              src={shop4me}
              alt=""
              className="h-[1.5rem] w-[7.5rem] tablet:h-[1.8rem] tablet:w-[8.5rem] desktop:h-[2rem] desktop:w-[10rem] my-auto"
            />
          </div>
          <h1 className="text-xxs tablet:text-sm desktop:text-md font-manrope text-white my-auto">
            Hotline:+234 (0)8102964254
          </h1>
        </nav>
        <div className="text-white absolute top-0 left-0 w-full h-full backdrop-brightness-50 back flex justify-center items-center flex-col font-manrope">
          {/* <h1 className="text-2xl text-center font-bold">WELCOME TO SHOP4ME</h1> */}

          <h1 className="text-xl text-center tablet:text-2xl font-bold bg-transparent  ">
            <Typewriter
              onInit={(typewriter: any) => {
                typewriter
                  .typeString("WELCOME TO SHOP4ME")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("WELCOME TO SHOP4ME")
                  .start();
              }}
            />
          </h1>
          <p className="w-[75vw] text-center text-sm tablet:text-md font-semibold">
            Get free delivery anywhere when you shop men&apos;s wear with us.
          </p>
          <div className="flex justify-center gap-x-4 mt-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.blackjoe.shop4me&pli=1"
              className="borderr w-[8rem] tablet:w-[11rem] desktop:w-[15rem] relative rounded-lg hover:animate-bounce"
            >
              <Image src={playStore} alt="" className="" fill />
            </a>
            <a
              href="https://apps.apple.com/app/id6449968422"
              className="borderr w-[8rem] tablet:w-[11rem] desktop:w-[15rem] relative rounded-lg hover:animate-bounce"
            >
              <Image src={appStore} alt="" className="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
