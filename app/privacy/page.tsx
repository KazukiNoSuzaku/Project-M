'use client'
import {Input, Button, Textarea, Select, SelectItem, RadioGroup, Radio} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import Footer from "../spa-components/footer";
import { business} from "../lib/data";
import NavbarY from "../components/NavbarY";
export default function Terms(){
    return(
        
        <main className="dark" >
        <NavbarY/>
        <div className="flex container py-10 px-6 flex-grow max-w-7xl mx-auto min-h-screen flex-col items-right justify-between pb-10">
            <div  className="flex relative z-20 flex-col gap-6 w-full xl:mt-10">
                <div className="text-center leading-8 md:leading-10 md:text-left">
                    <div className="inline-block">
                        <h1 className="tracking-tight text-white inline font-semibold text-[2.1rem] lg:text-5xl">Privacy Policy&nbsp;</h1>
                    </div>

                    
                </div>
                <h2 className="w-full my-2 lg:text-xl font-normal text-white block max-w-full text-lef">
                Welcome to Frost Forge Studio. This privacy policy outlines how we handle and protect the information you provide when using our services.</h2> 
                <h2 className="w-full my-2 lg:text-xl font-normal text-white block max-w-full text-left">
                Compliance with the EU's General Data Protection Regulations (GDPR) is integral to our operations. This policy is crafted to transparently communicate our data collection and processing practices, avoiding convoluted legal jargon for your ease of understanding. Our intention is not to manipulate you into agreeing to terms you may regret later.</h2>
                <h2 className="w-full my-2 lg:text-xl font-normal text-white block max-w-full text-left">
                your privacy is our utmost priority. We collect only essential information, stored securely and used solely for its intended purpose. Rest assured, we won't disclose it unless legally compelled. Your trust is invaluable to us.</h2>  
                 <Divider className="bg-white" />


                
                {/* detail */}
                <div className="text-left leading-8 md:leading-10 md:text-left">
                    <h2 className="text-white font-semibold md:w-1/2 inline text-[1.5rem]">Who are we</h2>
                </div>
                <div >
                    <p className="w-full font-normal text-white block max-w-full">
                        Our website address is: https://frostforge.co.uk.
                    </p>
                </div>
                <div>
                    <p className="w-full font-normal text-white block max-w-full">
                     You can contact us via the email address team@frostforge.co.uk.
                    </p>
                </div>
                <div className="text-left leading-8 md:leading-10 md:text-left">
                    <h2 className="text-white font-semibold md:w-1/2 inline text-[1.5rem]">Collected Information</h2>
                </div>
                <div >
                    <p className="w-full font-normal text-white block max-w-full">
                    As we operate and manage our website, certain data is automatically collected and processed:
                    </p>
                </div>
                <div >
                    <p className="font-normal text-white block max-w-full">
                        1. Analytics Data: Details of your visits, encompassing pages viewed and accessed resources. Information includes traffic data, location data, and other communication details.
                    </p>
                </div>
                <div >
                    <p className="font-normal text-white block max-w-full">
                        2. Enquiry Data: When you submit an inquiry, we collect contact information, such as your name, email address, and phone number, to respond promptly.
                    </p>
                </div>
                <div >
                    <p className="font-normal text-white block max-w-full">
                        3. Account Data: If you make a purchase or hire our services, we request your account and contact details.
                    </p>
                </div>
                <div className="text-left leading-8 md:leading-10 md:text-left">
                    <h2 className="text-white font-semibold md:w-1/2 inline text-[1.5rem]">Information Security</h2>
                </div>
                <div >
                    <p className="w-full font-normal text-white block max-w-full">
                        Our dedication to your data security is unwavering. To thwart 
                        unauthorized access or disclosure, we employ robust physical, 
                        electronic, and managerial protocols. These measures are meticulously 
                        designed to fortify and protect the information collected through our online channels.
                    </p>
                </div>
                <div className="text-left leading-8 md:leading-10 md:text-left">
                    <h2 className="text-white font-semibold md:w-1/2 inline text-[1.5rem]">Cookie Usage</h2>
                </div>
                <div >
                    <p className="w-full font-normal text-white block max-w-full">
                        When you make an inquiry on our site, you have the option to save your
                        name, email address, and website details in cookies. This feature
                        enhances convenience, eliminating the need to re-enter your information
                        for subsequent inquiries. These cookies have a one-year duration.
                    </p>
                </div>
                <div className="text-left leading-8 md:leading-10 md:text-left">
                    <h2 className="text-white font-semibold md:w-1/2 inline text-[1.5rem]">Data Retention Duration</h2>
                </div>
                <div >
                    <p className="w-full font-normal text-white block max-w-full">
                        When you make an inquiry, both the inquiry and its accompanying
                        metadata are retained indefinitely. This facilitates the automatic
                        recognition and approval of subsequent inquiries, eliminating the
                        need to hold them in a moderation queue.
                    </p>
                </div>
                <div className="text-left leading-8 md:leading-10 md:text-left">
                    <h2 className="text-white font-semibold md:w-1/2 inline text-[1.5rem]">External Website Links</h2>
                </div>
                <div >
                    <p className="w-full font-normal text-white block max-w-full">
                        While navigating our website, you may encounter links to other sites.
                        It's important to recognize that once you exit our site using these
                        links, we relinquish control over the destination website.
                    </p>
                </div>
                <div >
                    <p className="w-full font-normal text-white block max-w-full">
                        Consequently, we cannot assume responsibility for the safeguarding
                        and privacy of any information you furnish during your visit to such
                        external sites. Their privacy practices are distinct and not governed
                        by our privacy statement. Exercise caution and review the applicable
                        privacy statement of the linked website.
                    </p>
                </div>
                <div className="text-left leading-8 md:leading-10 md:text-left">
                    <h2 className="text-white font-semibold md:w-1/2 inline text-[1.5rem]">Policy Amendments</h2>
                </div>
                <div >
                    <p className="w-full font-normal text-white block max-w-full">
                        In the event of modifications to this policy, the changes
                        will take effect immediately upon publication on our website.
                    </p>
                </div>
            </div> 
        </div>
        <Footer/>
    </main>
    )
}