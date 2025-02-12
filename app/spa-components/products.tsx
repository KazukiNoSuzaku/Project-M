import { Parallax, useParallax } from "react-scroll-parallax";
import { Carousel } from 'react-responsive-carousel';
import { Card, CardHeader, Image, CardFooter, Button, Link } from "@nextui-org/react"
import { useState } from "react";
import { motion } from "framer-motion";
export default function Products(){

    let numPages = "1";
    let businessType = "individual";
    let projectType = "web";
    let logoRequired = "false";
    let hostingRequired = "false";
    const p = {
        numPages,
        businessType,
        projectType,
        logoRequired,
        hostingRequired
    }
    projectType =  "portfolio"
    const p_2 = {
        numPages,
        businessType,
        projectType,
        logoRequired,
        hostingRequired
    }
    projectType = "maintenance"
    const p_3 = {
        numPages,
        businessType,
        projectType,
        logoRequired,
        hostingRequired
    }
    const redirectUrl_standard = `/pricing?data=${JSON.stringify(p)}`;
    const redirectUrl_portfolio = `/pricing?data=${JSON.stringify(p_2)}`;
    const redirectUrl_maintenance = `/pricing?data=${JSON.stringify(p_3)}`;

    return(
        
        <main >
            <div className="flex relative lg:overflow-visible w-full flex-wrap justify-between items-center bg-[url('/silk_mobile.PNG')]  md:bg-[url('/silk.png')] md:bg-cover bg-fixed">
                <div className="container mx-auto max-w-7xl px-6 flex-grow">
                    <div className="flex relative pt-20 lg:pt-5 z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-20 block">
                        <div className="text-center leading-8 md:leading-10 md:text-left">
                            <div className="inline-block">
                                <h1 className="tracking-tight text-white inline font-semibold text-[2.1rem] lg:text-5xl">Build your application&nbsp;</h1>
                            </div>
                            <div className="inline-block">
                                <h1 className="tracking-tight inline font-semibold from-[#4949f8] to-[#49f8ef] text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">Today&nbsp;</h1>
                            </div>
                            
                        </div>

                        <h2 className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-white block max-w-full !w-full text-center md:text-left">
                            Fast, clean and modern Web Application.</h2>    
                    </div>
                        
                    <div className="flex w-full pb-20 p-3 flex-auto place-content-inherit align-items-inherit h-auto break-words text-left subpixel-antialiased relative flex-col md:flex-row md:items-center gap-4 md:gap-9"> 
                      
                        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                <h4 className="text-white/90 font-medium text-xl">Advanced AI Integration</h4>
                            </CardHeader>
                            <Image
                                alt="AI integration"
                                className="z-0 w-full h-full object-cover"
                                src="/AI_service.webp"
                            />
                            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                                <div className="flex flex-grow gap-2 items-center">
                                <div className="flex flex-col">
                                    <p className="text-tiny text-white/60">Powerful AI tools for your web app.</p>
                                </div>
                                </div>
                                <Button radius="full" size="sm" color="default" disabled>Available soon</Button>
                            </CardFooter>
                        </Card>

                        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <h4 className="text-white/90 font-medium text-xl">Standard Web Commerce</h4>
                        </CardHeader>
                        <Image
                            alt="Web commerce service"
                            className="z-0 w-full h-full object-cover"
                            src="/web_service.webp"
                        />
                        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                            <div className="flex flex-grow gap-2 items-center">
                            <div className="flex flex-col">
                                <p className="text-tiny text-white/60">Professional web design&development.</p>
                            </div>
                            </div>
                            <Button as={Link} href={redirectUrl_standard} radius="full" size="sm" color="primary">From £ 199</Button>
                        </CardFooter>
                        </Card>

                        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <h4 className="text-white/90 font-medium text-xl">Portfolio</h4>
                        </CardHeader>
                        <Image
                            alt="Portfolio Web"
                            className="z-0 w-full h-full object-cover"
                            src="/portfolio.webp"
                        />
                        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                            <div className="flex flex-grow gap-2 items-center">
                            <div className="flex flex-col">
                                <p className="text-tiny text-white/60">Improve your online presence with a beautiful website.</p>
                            </div>
                            </div>
                            <Button as={Link} href={redirectUrl_portfolio} radius="full" size="sm" color="primary">From £ 99</Button>
                        </CardFooter>
                        </Card>

                        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                <h4 className="text-white/90 font-medium text-xl">Maintenance</h4>
                            </CardHeader>
                            <Image
                                alt="Maintenance Web"
                                className="z-0 w-full h-full object-cover"
                                src="/maintenance.webp"
                            />
                            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                                <div className="flex flex-grow gap-2 items-center">

                                <div className="flex flex-col">
                                    <p className="text-tiny text-white/60">Maintain and upgrade your website.</p>
                                </div>
                                </div>
                                <Button as={Link} href={redirectUrl_maintenance} radius="full" size="sm" color="primary">From £ 12</Button>
                            </CardFooter>
                        </Card>    
                    </div>

                    <div className="pb-20 hidden md:block">
                        <p className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-semibold text-white block max-w-full !w-full text-center md:text-left">View our recent works</p>
                        <Carousel showStatus={false} autoPlay infiniteLoop showThumbs={false} >
                            <Link href="https://yupangpang.co.uk">
                            <Image
                            src="/demo_3.png"
                            
                            height={760}
                            className='hidden md:block'
                            alt="Frost Forge Web Demo"
                            />
                            </Link>
                            <Link href="https://ecocraftstudio.com">
                            <Image
                            src="/demo_1.webp"
                            height={760}
                            className='hidden md:block'
                            alt="Frost Forge Web Demo"
                            />
                            </Link>
                        </Carousel>
                    </div>
                </div>
            </div>
        </main>
    )
}