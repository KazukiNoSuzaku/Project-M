import { Parallax, useParallax } from "react-scroll-parallax";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { motion } from "framer-motion";


export default function Features() {
  // const animationLtoR = useParallax({
  //   startScroll: 0,
  //   endScroll: 600,
  //   translateY: [100, 0, 'easeInOut'],
  // }).ref;

  // const animationRtoL = useParallax({
  //   startScroll: 0,
  //   endScroll: 600,
  //   translateY: [100, 0, 'easeInOut']
  // }).ref;

  //  ref={animationLtoR as React.RefObject<HTMLDivElement>}

  return(
  // <main>
 
  //   <div
    
  //    className="flex relative lg:overflow-visible w-full flex-wrap justify-between items-center h-[calc(100vh_-_64px)]">

  //   <div className="flex relative z-20 flex-col gap-6 w-full xl:mt-10 block">
  //         <div className="text-center mt-20 leading-8 md:leading-10 md:text-left">
  //           <div className="inline-block">
  //             <h1 className="tracking-tight text-white inline font-semibold text-[2.1rem] lg:text-5xl">What can we&nbsp;</h1>
              
  //           </div>
  //           <div className="inline-block">
  //             <h1 className="tracking-tight inline font-semibold from-[#4949f8] to-[#49f8ef] text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">Offer&nbsp;</h1>
  //           </div>

  //         </div>
  //         <h2 className="w-full md:w-1/2 text-lg lg:text-xl font-normal text-white block max-w-full !w-full text-center md:text-left">
  //             Brings your idea into reality with</h2>
              
  //             <div className="w-full  font-normal text-white block max-w-full !w-full text-center md:text-left">
  //               <div className="inline-block">
  //                 <h2 className="tracking-tight inline font-semibold from-[#f7e572] to-[#a46ff2] text-[1.5rem] bg-clip-text text-transparent bg-gradient-to-b"> A Dedicated heart&nbsp;</h2>
  //               </div>
  //             </div>

  //             <div className="grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full block">

  //                 <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]" isBlurred>
  //                   <CardHeader className="flex gap-3">
  //                     <Image
  //                       alt="affrodable Web"
  //                       height={40}
  //                       radius="sm"
  //                       src="https://frostforgestudio.s3.eu-west-2.amazonaws.com/affordable_icon.PNG"
  //                       width={40}
  //                     />
  //                     <div className="flex flex-col">
  //                       <p className="text-md font-semibold">Affordable</p>
  //                     </div>
  //                   </CardHeader>
  //                   <CardBody>
  //                     <p className="text-sm">Delivering high-quality web design solutions at budget-friendly prices, ensuring accessibility for businesses of all sizes.</p>
  //                   </CardBody>
  //                 </Card>

  //                 <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]" isBlurred>
  //                 <CardHeader className="flex gap-3">
  //                 <Image
  //                   alt="Reliable Web"
  //                   height={40}
  //                   radius="sm"
  //                   src="https://frostforgestudio.s3.eu-west-2.amazonaws.com/reliable_icon.PNG"
  //                   width={40}
  //                 />
  //                 <div className="flex flex-col">
  //                   <p className="text-md font-semibold">Reliable</p>
  //                 </div>
  //                 </CardHeader>
  //                 <CardBody>
  //                 <p className="text-sm">Trust in our consistent and dependable web design services, providing a reliable foundation for your online presence.</p>
  //                 </CardBody>
  //                 </Card>



  //                 <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]" isBlurred>
  //                 <CardHeader className="flex gap-3">
  //                 <Image
  //                   alt="Fast Web"
  //                   height={40}
  //                   radius="sm"
  //                   src="https://frostforgestudio.s3.eu-west-2.amazonaws.com/fast_icon.PNG"
  //                   width={40}
  //                 />
  //                 <div className="flex flex-col">
  //                   <p className="text-md font-semibold">Fast</p>
  //                 </div>
  //                 </CardHeader>
  //                 <CardBody>
  //                 <p className="text-sm">Experience swift and efficient web design turnaround times, ensuring your project is delivered promptly without compromising quality.</p>
  //                 </CardBody>
  //                 </Card>


                  // <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] " isBlurred>
                  // <CardHeader className="flex gap-3">
                  // <Image
                  //   alt="Clean"
                  //   height={40}
                  //   radius="sm"
                  //   src="https://frostforgestudio.s3.eu-west-2.amazonaws.com/clean_icon.PNG"
                  //   width={40}
                  // />
                  // <div className="flex flex-col">
                  //   <p className="text-md font-semibold">Clean</p>
                  // </div>
                  // </CardHeader>
                  // <CardBody>
                  // <p className="text-sm">Crafting visually appealing and streamlined websites with a focus on clean design, creating a polished and user-friendly online experience.</p>
                  // </CardBody>
                  // </Card>


  //             </div>
         
  //   </div>
        

    
 
  //   </div>
 

    

    
  //   </main>
    <main >
            <div className="flex relative lg:overflow-visible w-full flex-wrap justify-between bg-gradient-to-r from-cyan-800 to-teal-500 items-center ">
            
              <div className="container mx-auto max-w-7xl px-6 flex-grow">
                  
                  <div className="flex pt-20 md:pt-10 relative z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-20 block">
                      <div className="text-center leading-8 md:leading-10 md:text-left">
                          <div className="inline-block">
                              <h1 className="tracking-tight text-white inline font-semibold text-[2.1rem] lg:text-5xl">What can we&nbsp;</h1>
                          </div>
                          <div className="inline-block">
                              <h1 className="tracking-tight inline font-semibold to-red-400 from-yellow-200 text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">Offer&nbsp;</h1>
                          </div>
                          
                      </div>

                      <h2 className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-white block max-w-full !w-full text-center md:text-left">
                        Turn your ideas into reality with</h2>
                      <div className="w-full font-normal text-white block max-w-full !w-full text-center md:text-left">
                        <motion.div
                         animate={{scale:[1,1.1,1]}}
                         transition={{
                           duration: 2,
                           ease: "easeInOut",
                           repeat: Infinity,
                           
                         }}
                         className="inline-block">
                          <h2 
                          className="tracking-tight inline font-semibold from-[#f7e572] to-[#a46ff2] text-[1.5rem] bg-clip-text text-transparent bg-gradient-to-b"> A Dedicated heart&nbsp;</h2>
                        </motion.div>
                      </div>    
                  </div>
                      
                  
                   <motion.div 
                   className="grid pt-10 pb-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
                   initial={{ scale: 0 }}
                   whileInView={{ scale:1}}
                   transition={{
                    duration: 0.8,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}>
                    <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]" isBlurred>
                      <CardHeader className="flex gap-3">
                        <Image
                          alt="affrodable Web"
                          height={40}
                          radius="sm"
                          src="https://frostforgestudio.s3.eu-west-2.amazonaws.com/affordable_icon.PNG"
                          width={40}
                        />
                        <div className="flex flex-col">
                          <p className="text-md font-semibold">Affordable</p>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <p className="text-sm">Delivering high-quality web design solutions at budget-friendly prices, ensuring accessibility for businesses of all sizes.</p>
                      </CardBody>
                    </Card>
                    <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]" isBlurred>
                      <CardHeader className="flex gap-3">
                        <Image
                          alt="Reliable Web"
                          height={40}
                          radius="sm"
                          src="https://frostforgestudio.s3.eu-west-2.amazonaws.com/reliable_icon.PNG"
                          width={40}
                        />
                        <div className="flex flex-col">
                          <p className="text-md font-semibold">Reliable</p>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <p className="text-sm">Trust in our consistent and dependable web design services, providing a reliable foundation for your online presence.</p>
                      </CardBody>
                    </Card>

                    <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]" isBlurred>
                      <CardHeader className="flex gap-3">
                        <Image
                          alt="Fast Web"
                          height={40}
                          radius="sm"
                          src="https://frostforgestudio.s3.eu-west-2.amazonaws.com/fast_icon.PNG"
                          width={40}
                        />
                        <div className="flex flex-col">
                          <p className="text-md font-semibold">Fast</p>
                        </div>
                      </CardHeader>
                    <CardBody>
                      <p className="text-sm">Experience swift and efficient web design turnaround times, ensuring your project is delivered promptly without compromising quality.</p>
                    </CardBody>
                    </Card>

                    <Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] " isBlurred>
                      <CardHeader className="flex gap-3">
                        <Image
                          alt="Clean"
                          height={40}
                          radius="sm"
                          src="https://frostforgestudio.s3.eu-west-2.amazonaws.com/clean_icon.PNG"
                          width={40}
                        />
                        <div className="flex flex-col">
                          <p className="text-md font-semibold">Clean</p>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <p className="text-sm">Crafting visually appealing and streamlined websites with a focus on clean design, creating a polished and user-friendly online experience.</p>
                      </CardBody>
                    </Card>

                   </motion.div>
                    

                    
                  

                  <motion.div 
                   initial={{opacity:0}}
                   whileInView={{opacity:1}}
                   transition={{
                    duration:2
                   }}
                  className="mx-auto w-full pb-20 hidden md:block">
                    <Table removeWrapper color="primary" className="text-white text-center" aria-label="Example static collection table">
                      <TableHeader>
                      <TableColumn className="text-center text-white bg-zinc-700">Features</TableColumn>
                        <TableColumn className="text-center text-white bg-gray-700">FrostForge Studio</TableColumn>
                        <TableColumn className="text-center text-gray-300 bg-gray-500">General Web design&development</TableColumn>
                        
                        {/* <TableColumn>SKILL</TableColumn> */}
                      </TableHeader>
                      <TableBody>
                        <TableRow key="1">
                          <TableCell className="bg-zinc-700">Price</TableCell>
                          <TableCell className="text-white bg-gray-700">From £ 99</TableCell>
                          <TableCell className="bg-gray-500 text-gray-300">£ 2000 + VAT</TableCell>
                          {/* <TableCell>-</TableCell> */}
                        </TableRow>
                        <TableRow key="2">
                          <TableCell className="bg-zinc-700">Tech</TableCell>
                          <TableCell className="text-white bg-gray-700">State-to-art web framework with powerful AI integration</TableCell>
                          <TableCell className="bg-gray-500 text-gray-300">Wordpress</TableCell>
                          {/* <TableCell>5+ years experience on Full-Stack Web Development</TableCell> */}
                        </TableRow>
                        <TableRow key="3">
                          <TableCell className="bg-zinc-700">Styles</TableCell>
                          <TableCell className="text-white bg-gray-700">Highly customised with complex functionality</TableCell>
                          <TableCell className="bg-gray-500 text-gray-300">Style-restricted templates</TableCell>
                          {/* <TableCell>5+ years experience of Java Development</TableCell> */}
                        </TableRow>
                        <TableRow key="4">
                          <TableCell className="bg-zinc-700">Hosting</TableCell>
                          <TableCell className="text-white bg-gray-700">1 month free hosting</TableCell>
                          <TableCell className="bg-gray-500 text-gray-300">£ 50 per month</TableCell>
                          {/* <TableCell>8+ years experience in Web Design&Development</TableCell> */}
                        </TableRow>
                        <TableRow key="5">
                          <TableCell className="bg-zinc-700">Speed</TableCell>
                          <TableCell className="text-white bg-gray-700">Develop as Design</TableCell>
                          <TableCell className="bg-gray-500 text-gray-300">Develop after Design</TableCell>
                          {/* <TableCell>5+ years experience of Java Development</TableCell> */}
                        </TableRow>
                      </TableBody>
                    </Table>
                  </motion.div>
              </div>
                  
                

                
        
            </div>
        </main>
  )
  }