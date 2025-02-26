"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export default function Homepage(){

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // Fade out as the first section leaves the viewport
  });

  // Opacity decreases as user scrolls down
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.5], ["0px", "10px"]);

    return(
        <main>
          <div className="relative w-full">
            <div className="fixed top-0 left-0 w-screen h-screen z-0">
              <video src="leaves.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 flex flex-col items-center w-full">
              <section ref={ref} className="h-screen w-full flex items-center justify-center">
                <motion.div
                  className="text-center leading-8 md:leading-10"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.7,
                      },
                    },
                  }}
                  style={{ opacity, filter: blur }}
                >
                  <motion.h1 className="tracking-tight font-semibold from-[#5BF0A6] to-[#5BF0A6] text-8xl bg-clip-text text-transparent bg-gradient-to-r leading-[1.2] pb-2"
                    variants={{
                      hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
                      visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2 } },
                    }}
                  >Merge2Minds Global
                  </motion.h1>
                  <motion.h2 className="tracking-tight font-semibold text-3xl text-[#D5ECE1] leading-[1.2] pb-2"
                    variants={{
                      hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
                      visible: { opacity: 1, y: 0, filter: "blur(0px)", 
                      transition: { duration: 1.2 } },
                    }}>Elevating Converstions
                  </motion.h2>
                  <motion.h2 className="tracking-tight font-semibold text-3xl text-[#D5ECE1]"
                    variants={{
                      hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
                      visible: { opacity: 1, y: 0, filter: "blur(0px)", 
                      transition: { duration: 1.2 } },
                    }}>Elevating Lives
                  </motion.h2>
                </motion.div>
              </section>

              
              {/* <section className="h-screen w-full flex items-center justify-center bg-gray-900 text-white">
                <h2 className="text-4xl">Next Section Content</h2>
              </section> */}
            </div>
          </div>
        </main>
    )
}