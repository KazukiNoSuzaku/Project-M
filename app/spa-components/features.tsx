import { Parallax, useParallax } from "react-scroll-parallax";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { motion } from "framer-motion";


export default function Features() {

  return(

    <main >
            <div className="flex relative lg:overflow-visible w-full flex-wrap justify-between bg-gradient-to-r from-[#42423E] to-olive-500 items-center ">
            
              <div className="container mx-auto max-w-7xl px-6 flex-grow">
                  
                  <div className="flex pt-20 md:pt-10 relative z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-20 block">
                      <div className="text-center leading-8 md:leading-10 md:text-left">
                          <div className="inline-block">
                              <h1 className="tracking-tight text-[#D5ECE1] inline font-semibold text-[2.1rem] lg:text-5xl">About&nbsp;</h1>
                          </div>
                          <div className="inline-block">
                                <h1 className="tracking-tight inline font-semibold from-[#5BF0A6] to-[#204634] text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">Us&nbsp;</h1>
                            </div>
                          
                      </div>

                      <h2 className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-[#D5ECE1] block max-w-full !w-full text-center md:text-left">
                        Meet the team behind the mission</h2>  
                  </div>
                      
                  
                   <motion.div 
                   className="grid pt-10 pb-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                   initial={{ scale: 0 }}
                   whileInView={{ scale:1}}
                   transition={{
                    duration: 0.8,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}>
                    <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]" isBlurred>
                      <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                          <p className="text-md font-semibold text-[#D5ECE1]" >Jair Ortega - CEO</p>
                        </div>
                      </CardHeader>
                      <CardBody>
                      <Image 
                          alt="Reliable Web"
                          height={250}
                          radius="sm"
                          src="Jair.jpg"
                          width={250}
                        />
                      </CardBody>
                    </Card>
                    <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]" isBlurred>
                      <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                          <p className="text-md font-semibold">Samir Aqlan - COO</p>
                        </div>
                      </CardHeader>
                      <CardBody>
                      <Image 
                          alt="Reliable Web"
                          height={250}
                          radius="sm"
                          src="i8.jpg"
                          width={250}
                        />
                      </CardBody>
                    </Card>

                    <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]" isBlurred>
                      <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                          <p className="text-md font-semibold">Kaustav Ghosh - CTO</p>
                        </div>
                      </CardHeader>
                    <CardBody>
                    <Image 
                          alt="Reliable Web"
                          height={250}
                          radius="sm"
                          src="i7.jpg"
                          width={250}
                        />

                    </CardBody>
                    </Card>
                   </motion.div>
              </div>
                  
                

                
        
            </div>
        </main>
  )
  }