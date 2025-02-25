import { Parallax, useParallax } from "react-scroll-parallax";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { motion } from "framer-motion";


export default function Team() {

  return(

    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#42423E] to-olive-500">
      <div className="flex w-full flex-wrap justify-center items-center">

        <div className="container mx-auto max-w-7xl px-6 flex-grow">

          <div className="flex pt-20 md:pt-10 relative z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-20 block">
            
            <motion.div
              className="text-center leading-8 md:leading-10 md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              <h1 className="tracking-tight text-[#D5ECE1] inline font-semibold text-[2.1rem] lg:text-5xl">About&nbsp;</h1>
              <h1 className="tracking-tight inline font-semibold from-[#5BF0A6] to-[#204634] text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">Us&nbsp;</h1>
            </motion.div>

            <motion.h2
              className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-[#D5ECE1] text-center md:text-left whitespace-nowrap"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              Meet the team behind the mission
            </motion.h2>  
          </div>

          <motion.div 
            className="grid pt-10 pb-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: [0.25, 0.8, 0.25, 1],
            }}
          >
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.25, 0.8, 0.25, 1] }}
            >
              <Card className="border-none bg-background/60 dark:bg-default-100/50 mx-auto max-w-[350px] min-h-[400px]">
                <CardBody className="flex flex-col justify-between h-full px-4 py-6">
                  <div className="flex justify-center mb-4">
                    <Image 
                      alt="Jair Ortega"
                      className="object-cover"
                      height={250}
                      width={250}
                      src="Jair.jpg"
                    />
                  </div>
                  <div className="mt-auto text-center">
                    <p className="text-lg font-semibold text-[#D5ECE1]">Jair Ortega</p>
                    <p className="text-md text-[#A0B9AF]">CEO</p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.25, 0.8, 0.25, 1] }}
            >
              <Card className="border-none bg-background/60 dark:bg-default-100/50 mx-auto max-w-[350px] min-h-[400px]">
                <CardBody className="flex flex-col justify-between h-full px-4 py-6">
                  <div className="flex justify-center mb-4">
                    <Image 
                      alt="Samir Aqlan"
                      className="object-cover"
                      height={250}
                      width={250}
                      src="i8.jpg"
                    />
                  </div>
                  <div className="mt-auto text-center">
                    <p className="text-lg font-semibold text-[#D5ECE1]">Samir Aqlan</p>
                    <p className="text-md text-[#A0B9AF]">COO</p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.25, 0.8, 0.25, 1] }}
            >
              <Card className="border-none bg-background/60 dark:bg-default-100/50 mx-auto max-w-[350px] min-h-[400px]">
                <CardBody className="flex flex-col justify-between h-full px-4 py-6">
                  <div className="flex justify-center mb-4">
                    <Image 
                      alt="Kaustav Ghosh"
                      className="object-cover"
                      height={250}
                      width={250}
                      src="i7.jpg"
                    />
                  </div>
                  <div className="mt-auto text-center">
                    <p className="text-lg font-semibold text-[#D5ECE1]">Kaustav Ghosh</p>
                    <p className="text-md text-[#A0B9AF]">CTO</p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
            
          </motion.div>

        </div>

      </div>
    </main>

    // <main >
    //         <div className="flex relative lg:overflow-visible w-full flex-wrap justify-between bg-gradient-to-r from-[#42423E] to-olive-500 items-center ">
            
    //           <div className="container mx-auto max-w-7xl px-6 flex-grow">
                  
    //               <div className="flex pt-20 md:pt-10 relative z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-20 block">
    //                   <div className="text-center leading-8 md:leading-10 md:text-left">
    //                       <div className="inline-block">
    //                           <h1 className="tracking-tight text-[#D5ECE1] inline font-semibold text-[2.1rem] lg:text-5xl">About&nbsp;</h1>
    //                       </div>
    //                       <div className="inline-block">
    //                             <h1 className="tracking-tight inline font-semibold from-[#5BF0A6] to-[#204634] text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">Us&nbsp;</h1>
    //                         </div>
                          
    //                   </div>

    //                   <h2 className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-[#D5ECE1] block max-w-full !w-full text-center md:text-left">
    //                     Meet the team behind the mission</h2>  
    //               </div>
                      
                  
    //                <motion.div 
    //                className="grid pt-10 pb-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    //                initial={{ scale: 0 }}
    //                whileInView={{ scale:1}}
    //                transition={{
    //                 duration: 0.8,
    //                 ease: [0, 0.71, 0.2, 1.01],
    //               }}>
    //                 <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]" isBlurred>
    //                   <CardHeader className="flex gap-3">
    //                     <div className="flex flex-col">
    //                       <p className="text-md font-semibold text-[#D5ECE1]" >Jair Ortega - CEO</p>
    //                     </div>
    //                   </CardHeader>
    //                   <CardBody>
    //                   <Image 
    //                       alt="Reliable Web"
    //                       height={250}
    //                       radius="sm"
    //                       src="Jair.jpg"
    //                       width={250}
    //                     />
    //                   </CardBody>
    //                 </Card>
    //                 <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]" isBlurred>
    //                   <CardHeader className="flex gap-3">
    //                     <div className="flex flex-col">
    //                       <p className="text-md font-semibold">Samir Aqlan - COO</p>
    //                     </div>
    //                   </CardHeader>
    //                   <CardBody>
    //                   <Image 
    //                       alt="Reliable Web"
    //                       height={250}
    //                       radius="sm"
    //                       src="i8.jpg"
    //                       width={250}
    //                     />
    //                   </CardBody>
    //                 </Card>

    //                 <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]" isBlurred>
    //                   <CardHeader className="flex gap-3">
    //                     <div className="flex flex-col">
    //                       <p className="text-md font-semibold">Kaustav Ghosh - CTO</p>
    //                     </div>
    //                   </CardHeader>
    //                 <CardBody>
    //                 <Image 
    //                       alt="Reliable Web"
    //                       height={250}
    //                       radius="sm"
    //                       src="i7.jpg"
    //                       width={250}
    //                     />

    //                 </CardBody>
    //                 </Card>
    //                </motion.div>
    //           </div>
                  
                

                
        
    //         </div>
    //     </main>
  )
  }