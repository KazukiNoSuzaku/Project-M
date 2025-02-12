import {Image, Link} from "@nextui-org/react";
import { motion } from "framer-motion"
import { Button } from "@nextui-org/react";


export default function Homepage(){
    return(
        <main>
      
          <div className="flex relative overflow-hidden lg:overflow-visible w-full flex-nowrap justify-between items-center h-[calc(100vh_-_64px)]  ">
            <video src="frostforge.mp4" autoPlay loop muted playsInline
              style={{position:"fixed", height:"100%", width:"100%", objectFit:"cover",top:"0",zIndex:"0", left:"0", minWidth: "100%",
              minHeight: "100%"}}/>

            <div className="container mx-auto max-w-7xl px-6 flex">
            <div className="flex relative z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-10">
              <motion.div
                  className="box"
                  animate={{
                    y: [-100, 0],

                    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut"
                  }}
                >
                <div className="text-center leading-8 md:leading-10 md:text-left">
                  <div className="inline-block">
                    <h1 className="tracking-tight text-white inline font-semibold text-[2.1rem] lg:text-5xl">Welcome to&nbsp;</h1>
                    
                  </div>
                  <div className="inline-block">
                    <h1 className="tracking-tight inline font-semibold from-indigo-400 to-teal-400 text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r">Frost Forge Studio&nbsp;</h1>
                  </div>

                  <div className="inline-block">
                    <h2 className="tracking-tight inline font-semibold text-[1.5rem] lg:text-3xl text-white">
                      Start building your digital business with modern technology
                    </h2>
                  </div>
                  
                </div>
                </motion.div>

                <motion.h2
                animate={{
                  x: [-100, 0],
                  borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut"
                }}
                className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-white block max-w-full !w-full text-center md:text-left">
                    Fast, clean and affordable Web Application.</motion.h2>
                <motion.div
                animate={{
                  x: [100, 0],
                  borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut"
                }}
                className="flex flex-col md:flex-row items-center gap-4">
                    <Button
                        as={Link}
                        href="/#features"
                        color="primary"
                        variant="bordered"
                        className="w-full justify-center item-center flex items-center gap-5 self-start rounded-lg px-6 py-3 text-lg font-medium text-white md:text-base"
                      >
                        Explore ➔
                    </Button>
                
                </motion.div>
              </div>
              
              
              <motion.div 
              animate={{opacity:[0,0.5,1]}}
              transition={{
                duration: 3,
                ease: "easeInOut"
                
              }}
              className="flex items-right justify-center md:w-3/5 md:px-28">
                <motion.div
                  animate={{y: [-10, 10, -10]}}
                  
                  transition={{
                      repeat: Infinity,
                      duration:3
                  }}>
                  <Image
                  src="/laptop-min.webp"
                  width={1000}
                  height={760}
                  className='hidden md:block'
                  alt="Screenshots of the dashboard project showing desktop version"
                  />
                  </motion.div>
                
              </motion.div>
            </div>
            
              

          
          </div>
      
        </main>
    )
}