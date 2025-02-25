'use client'
import {Input, Button, Textarea, Select, SelectItem, RadioGroup, Radio} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import Footer from "../spa-components/footer";
import { business} from "../lib/data";
import NavbarY from "../components/NavbarY";

export default function Terms(){
    return(
        
        <main className="dark bg-[#42423E]">
        <NavbarY/>
        <div className="flex container py-10 px-6 flex-grow max-w-7xl mx-auto min-h-screen flex-col items-right justify-between pb-10">
            
            <div  className="flex relative z-20 flex-col gap-6 w-full xl:mt-10">
                <div className="text-center leading-8 md:leading-10 md:text-left">
                    <div className="inline-block">
                        <h1 className="tracking-tight text-[#D5ECE1] inline font-semibold text-[2.1rem] lg:text-5xl">Terms & Conditions&nbsp;</h1>
                    </div>

                    
                </div>
                <h2 className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-[#D5ECE1] block max-w-full !w-full text-center md:text-left">
                Last updated: 25th February 2025.</h2>  
                 <Divider className="bg-[#D5ECE1]" />


                
                {/* Web design section */}
                <div className="text-left leading-8 md:leading-10 md:text-left">
                    <h1 className="text-[#D5ECE1] font-normal md:w-1/2 inline text-[2rem]">1. Introduction </h1>
                </div>
                <div >
                    <p className="w-full font-normal text-[#D5ECE1] block max-w-full">
                    Welcome to Merge2Minds, an online platform deisgned to connect users(referred to as Empathisee) with listeners or helpers(referred to as Empathisers). 
                    By accessing, registering, installing, or using the Merge2Minds application platform, services, features, software, or website, you agree to be bound by these Terms and Conditions.
                    <br></br><br></br>Please read the agreement carefully.
                    By using our site or our app, you acknowledge that you have read, understood and agreed to be bound by the terms and conditions set forth in the Agreement and the 
                    privacy policy (accessible at http://merge2minds.co/privacy/). If you do not wish to be bound by this Agreement and the privacy policy, you are not authorised to use our site or our app.
                    </p>
                </div>


                {/* Hosting section */}
                <div className="text-left leading-8 md:leading-10 md:text-left">
                    <h1 className="text-[#D5ECE1] font-normal md:w-1/2 inline text-[2rem]">2. Eligibility </h1>
                </div>
                <div className="text-left leading-8 md:leading-10 md:text-left">
                    <h2 className="text-[#D5ECE1] font-semibold md:w-1/2 inline text-[1.5rem]">2.1 Age Requirements</h2>
                </div>
                <div >
                    <p className="w-full font-normal text-[#D5ECE1] block max-w-full">
                    Empathisees of the Merge2Minds platform must confirm that they are at least 18 years old
                    , whereas, Empathisers must confirm that they are at least 21 years old . By using the platform, you represent and warrant that you meet these age requirements.
                    <br></br><br></br>
                    Merge2Minds is not liable for any misuse of the platform by individuals who falsely represent their age. If it is discovered that a user is under 18, their account will be terminated immediately.
                    </p>
                </div>
                <div className="text-left leading-8 md:leading-10 md:text-left">
                    <h2 className="text-[#D5ECE1] font-semibold md:w-1/2 inline text-[1.5rem]">2.2 Account Requirements</h2>
                </div>
                <div>
                    <p className="w-full font-normal text-white block max-w-full">
                        We'll provide one month of free hosting for your project, after which you must pay for your plan
                        in 3, 6, or 12-month increments.
                    </p>
                </div>
                <div>
                    <p className="w-full font-normal text-white block max-w-full">
                        We reserve the right to change the monthly price of the Service at any time,
                        and if the monthly price of your plan increases, you will be required to pay
                        additional fees.
                    </p>
                </div>
                <div>
                    <p className="w-full font-normal text-white block max-w-full">
                        We reserve the right to change the monthly price of the Service at any time,
                        and if the monthly price of your plan increases, you will be required to pay
                        additional fees. If you choose not to accept the price increase,
                        we will refund the remaining prepaid months.
                    </p>
                </div>
                <div className="text-left leading-8 md:leading-10 md:text-left">
                    <h2 className="text-white font-semibold md:w-1/2 inline text-[1.5rem]">Cancellation</h2>
                </div>
                <div>
                    <p className="w-full font-normal text-white block max-w-full">
                        You have the flexibility to terminate your subscription at any time; kindly inform us,
                        and we will promptly process your cancellation request.
                    </p>
                </div>
                <div>
                    <p className="w-full font-normal text-white block max-w-full">
                        If you choose to cancel your plan before the end of your prepaid period,
                        no refunds are provided.
                    </p>
                </div>
                




                {/* Maintenance section */}
                <div className="text-left leading-8 md:leading-10 md:text-left">
                    <h1 className="text-white font-normal md:w-1/2 inline text-[2rem]">3. Maintenance </h1>
                </div>
                <div className="text-left leading-8 md:leading-10 md:text-left">
                    <h2 className="text-white font-semibold md:w-1/2 inline text-[1.5rem]">Payment</h2>
                </div>
                <div >
                    <p className="w-full font-normal text-white block max-w-full">
                        We offer customers three complimentary revision rounds as part of our service.
                        Subsequent revisions beyond this allowance will incur a fee of £12 per page. 
                    </p>
                </div>
                <div className="text-left leading-8 md:leading-10 md:text-left">
                    <h2 className="text-white font-semibold md:w-1/2 inline text-[1.5rem]">Cancellation</h2>
                </div>
                <div>
                    <p className="w-full font-normal text-white block max-w-full">
                        In the event of a subscription cancellation prior to completion, charges will be
                        applied based on the work already accomplished. A full refund of 100% is applicable
                        if the project has not commenced.
                    </p>
                </div>
                 
                

            </div> 
        </div>
        <Footer/>
    </main>
    )
}