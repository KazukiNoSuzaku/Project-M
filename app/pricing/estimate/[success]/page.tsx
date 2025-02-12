'use client'
import {Card, CardBody, CardFooter, Divider, Button, Link} from "@nextui-org/react";
import { redirect } from 'next/navigation';
import Footer from "../../../spa-components/footer";
import { useEffect, useState } from "react";
import NavbarY from '../../../components/NavbarY';
export default function Success(){
    const [refNo,setRefNo] = useState<string | (readonly string[] & string) | undefined>(undefined);
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const jsonData = queryParams.get('data');
        if (jsonData !== null) {
            // Parse the JSON string
            const data = JSON.parse(decodeURIComponent(jsonData));
            
            // Extract the 'numPages' value
            let refNo = data.requestId;
            setRefNo(refNo);
          } else {
            console.error('No data found');
            redirect("/pricing");
          }
    },[]);

    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
        };
        }, []);

    return(
        <main>
            <div className="dark md:bg-[url('/silk.png')] bg-cover bg-fixed">
                <div className="dark">
                    <NavbarY/>
                </div>
                    
                <div className="flex container py-10 px-6 flex-grow max-w-7xl mx-auto min-h-screen flex-col items-center justify-between pb-10">
                    <div  className="flex relative z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-10">
                        <div className="text-center leading-8 md:leading-10 md:text-left">
                            <div className="inline-block">
                            <h1 className="tracking-tight text-white inline font-semibold text-[2.1rem] lg:text-5xl">Request Sent&nbsp;</h1>
                            
                            </div>
                            <div className="inline-block">
                            <h1 className="tracking-tight inline font-semibold from-[#038a46] to-[#8ff7c3] text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">Successfully&nbsp;</h1>
                            </div>

                            
                        </div>
                        <h2 className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-white block max-w-full !w-full text-center md:text-left">
                            Congratulations! You have successfully sent a request to us.</h2>
                            <h2 className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-white block max-w-full !w-full text-center md:text-left">
                            Our team will assess whether your project is viable and get back to you within 24 hours.</h2>  
                        <Divider className="bg-white" />

                        <Card isBlurred className="border-none bg-background/60 dark:bg-default-100/50" >

                            <Divider/>

                            <CardBody>
                                <div className="flex flex-wrap w-full items-center text-black gap-4 mb-3">
                                <div className="mb-3 font-bold text-white text-[1.5rem]"><p>Ref-no:</p></div>
                                <div className="mb-3 font-semibold text-[1.5rem]"><p className="text-stone-400">{refNo}</p></div>
                                    <p className="w-full text-white mb-3 font-bold text-[1rem]">What's next :</p>
        
                                    <p className="text-white">1. We will contact you within 24 hours through the contact information you provided. </p>
                                    <p className="text-white">2. Once your order is confirmed, we will make a feasible plan for your project and will charge 20% of the total cost. </p>
                                    <p className="text-white">3. You can check the development progress of your project through the link we provide you. </p>

                                </div>
                            </CardBody>


                            <Divider/>
                            <CardFooter>
                                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-3">
                                    <Button as={Link} href="/" type="submit" className="w-full light text-black">
                                        Back to Home
                                    </Button>
                                </div>  
                            </CardFooter>
                        </Card>
                    </div> 
                </div>
            </div>
            <Footer/>
        </main>
    )
}