'use client'
import {Input, Button, Textarea, Select, SelectItem, RadioGroup, Radio} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import Footer from "../spa-components/footer";
import { business} from "../lib/data";
import NavbarY from "../components/NavbarY";

export default function Terms(){
    return(
        
        <main className="dark">
        <NavbarY/>
        <div className="flex container py-10 px-6 flex-grow max-w-7xl mx-auto min-h-screen flex-col items-right justify-between pb-10">
            <div  className="flex relative z-20 flex-col gap-6 w-full xl:mt-10">
                <div className="text-center leading-8 md:leading-10 md:text-left">
                    <div className="inline-block">
                        <h1 className="tracking-tight text-white inline font-semibold text-[2.1rem] lg:text-5xl">Terms & Conditions&nbsp;</h1>
                    </div>

                    
                </div>
                <h2 className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-white block max-w-full !w-full text-center md:text-left">
                Last updated: 1st September 2023.</h2>  
                 <Divider className="bg-white" />


                
                {/* Web design section */}
                <div className="text-left leading-8 md:leading-10 md:text-left">
                    <h1 className="text-white font-normal md:w-1/2 inline text-[2rem]">1. Web Design & Development </h1>
                </div>
                <div className="text-left leading-8 md:leading-10 md:text-left">
                    <h2 className="text-white font-semibold md:w-1/2 inline text-[1.5rem]">Payment</h2>
                </div>
                <div >
                    <p className="w-full font-normal text-white block max-w-full">
                        The initial phase involves crafting the landing page(home page) of your website.
                        Following its completion, an initial payment equivalent to 20%
                        of the anticipated total cost is expected. 
                    </p>
                </div>
                <div>
                    <p className="w-full font-normal text-white block max-w-full">
                        The remaining balance (including the website and any additional
                        services used) will be paid based on the progress of the website 
                        development.
                    </p>
                </div>
                <div className="text-left leading-8 md:leading-10 md:text-left">
                    <h2 className="text-white font-semibold md:w-1/2 inline text-[1.5rem]">Cancellation policy</h2>
                </div>
                <div >
                    <p className="w-full font-normal text-white block max-w-full">
                        If you decide to cancel services before the project is completed,
                        you will be charged for the work completed. e.g. If our team have completed
                        the design and development of the homepage, you'll need to pay the corresponding fee.
                    </p>
                </div>
                <div className="text-left leading-8 md:leading-10 md:text-left">
                    <h2 className="text-white font-semibold md:w-1/2 inline text-[1.5rem]">Termination Clause:</h2>
                </div>
                <div >
                    <p className="w-full font-normal text-white block max-w-full">
                        Failure to comply with the stated terms or to pay outstanding fees
                        will result in suspension of the website and related services.
                        We reserve the right to suspend or terminate any service provided
                        without prior notice.
                    </p>
                </div>


                {/* Hosting section */}
                <div className="text-left leading-8 md:leading-10 md:text-left">
                    <h1 className="text-white font-normal md:w-1/2 inline text-[2rem]">2. Hosting </h1>
                </div>
                <div className="text-left leading-8 md:leading-10 md:text-left">
                    <h2 className="text-white font-semibold md:w-1/2 inline text-[1.5rem]">Payment</h2>
                </div>
                <div >
                    <p className="w-full font-normal text-white block max-w-full">
                         Standard hosting fees are £50 per month (actual costs are calculated based on business size). 
                    </p>
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