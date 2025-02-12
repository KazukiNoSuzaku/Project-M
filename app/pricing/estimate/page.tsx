
'use client'
import {Input, Button, Textarea, Chip, Spinner} from "@nextui-org/react";
import {Card, CardBody, CardFooter, Divider, Link, Tooltip} from "@nextui-org/react";
import Footer from "../../spa-components/footer";
import NavbarY from "../../components/NavbarY";
import { useEffect, useState } from "react";
import { sendRequest } from "@/app/lib/actions";
import React from "react";
import { redirect } from 'next/navigation';
export default function Pricing(){
    
    const [price,setPrice] = useState<string | (readonly string[] & string) | undefined>(undefined);
    const [extraData,setExtraData] = useState<any | null>("");
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [serializedData, SetSerializedData] = useState("");
    
    const redirectUrl = `/pricing?data=${serializedData}`;

    const isLoading= () => {
        if(name && value && value != "exmaple@frostforge.co.uk"){
            setLoading(true);
        }
    }

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const jsonData = queryParams.get('data');
        if (jsonData !== null) {
            // Parse the JSON string
            const formData = JSON.parse(decodeURIComponent(jsonData));
          
            // Extract the 'numPages' value
            let numPages = formData.numPages;
            let businessType = formData.businessType;
            let projectType = formData.projectType;
            let logoRequired = formData.logoRequired;
            let hostingRequired = formData.hostingRequired;
            let estimatedPrice = formData.estimatedPrice;
            const extraData = {
                numPages,
                businessType,
                projectType,
                logoRequired,
                hostingRequired,
                estimatedPrice,
            };
            const serializedData = encodeURIComponent(JSON.stringify(extraData));
            setPrice(estimatedPrice);
            setExtraData(extraData);
            SetSerializedData(serializedData);
          
            console.log(estimatedPrice);
          } else {
            console.error('No data found in the URL');
            redirect("/pricing");
            // redirect("/pricing");
          }
    },[]);

    // Scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
        };
      }, []);
    
    const [value, setValue] = useState("exmaple@frostforge.co.uk");

    const validateEmail = (value:any) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = React.useMemo(() => {
        if (value === "") return true;

        return validateEmail(value) ? false : true;
    }, [value]);

    
    return(
        // container mx-auto max-w-7xl px-6 flex-grow h-[calc(100vh)]
        <main>
        <div className="dark md:bg-[url('/silk.png')] bg-cover bg-fixed">
            <div className="dark">
                <NavbarY/>
            </div>
            
            <form action={sendRequest}>
                <div className="flex container py-10 px-6 flex-grow max-w-7xl mx-auto  flex-col items-center justify-center pb-10">
                    <div  className="flex relative z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-10">
                        <div className="text-center leading-8 md:leading-10 md:text-left">
                            <div className="inline-block">
                            <h1 className="tracking-tight text-white inline font-semibold text-[2.1rem] lg:text-5xl">Estimated&nbsp;</h1>
                            
                            </div>
                            <div className="inline-block">
                            <h1 className="tracking-tight inline font-semibold from-[#4949f8] to-[#49f8ef] text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">Price&nbsp;</h1>
                            </div>

                            
                        </div>
                        <h2 className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-white block max-w-full !w-full text-center md:text-left">
                            Send us a request, let's value your project with a precise number.</h2>  
                        <Divider className="bg-white" />

                        <Card isBlurred className="border-none bg-background/60 dark:bg-default-100/50" >
                            <CardBody>
                                <div className="flex w-full text-black items-center gap-4 mb-3">
                                    
                                    
                                </div>
                                <div className="flex flex-wrap w-full items-center text-black gap-4 mb-3">
                                    
                                    <p className="text-white">Estimated Price:</p>
                                    <Input size="sm" className="hidden" type="text" name="estimatedPrice" value={extraData.estimatedPrice} readOnly/>
                                        <Chip variant="light" className="text-white" size="lg">£{extraData.estimatedPrice}</Chip>
                                        <Tooltip content="Please note: This is just an estimated price automatically calculated by our system, which may be inaccurate.">
                                        <Chip size="sm" variant="shadow">?</Chip>
                                        </Tooltip>
                                        
                                    
                                    
                                </div>

                                <div className="mb-3 text-white font-bold text-[1.5rem]"><p>Please review your details:</p></div>
                                <div className="flex flex-wrap w-full items-center text-black gap-4 mb-3">
                                    <p className="text-white">Business Type:</p>
                                    <Input size="sm" className="hidden" name="businessType" value={extraData.businessType} readOnly/>
                                    <Chip className="text-stone-400" variant="light" size="lg">
                                        {extraData.businessType=="individual"?"Individual":
                                        extraData.businessType=="company"?"Company":"Agency"}
                                    </Chip>
                                </div>
                                <div className="flex flex-wrap w-full items-center text-black gap-4 mb-3">
                                    <p className="text-white">Project Type:</p>
                                    <Input size="sm" className="hidden" name="projectType" value={extraData.projectType} readOnly/>
                                    <Chip className="text-stone-400" variant="light" size="lg">
                                        {extraData.projectType=="web"?"Standard Web":
                                        extraData.projectType=="portfolio"?"Portfolio":"Maintenance"}
                                    </Chip>
                                </div>
                                <div className="flex flex-wrap w-full items-center text-black gap-4 mb-3">
                                    <p className="text-white">Number of pages:</p>
                                    <Input size="sm" className="hidden" name="numPages" value={extraData.numPages} readOnly/> 
                                    <Chip className="text-stone-400" variant="light" size="lg">{extraData.numPages}</Chip>
                                </div>
                                <div className="flex flex-wrap w-full items-center text-black gap-4 mb-3">
                                    <p className="text-white">Logo design:</p>
                                    <Input size="sm" className="hidden" name="logoRequired" value={extraData.logoRequired} readOnly/>
                                    <Chip
                                    color={extraData.logoRequired==="true"?"success":"danger"}
                                            variant="shadow"
                                            className="font-bold text-size[2rem] text-white">
                                        {extraData.logoRequired==="true"?"✔":"X"}
                                    </Chip>
                                </div>
                                <div className="flex flex-wrap w-full items-center text-black gap-4 mb-3">
                                    <p className="text-white">Hosting:</p>
                                    <Input size="sm" className="hidden" name="hostingRequired" value={extraData.hostingRequired} readOnly />
                                    <Chip 
                                    color={extraData.hostingRequired==="true"?"success":"danger"}
                                            variant="shadow"
                                            className="font-bold text-size[2rem] text-white">
                                        {extraData.hostingRequired==="true"?"✔":"X"}
                                    </Chip>
                                </div>

                            </CardBody>
                            <Divider/>
                            <CardBody>
                                <div className="flex flex-wrap w-full items-center text-black gap-4 mb-3">
                                    <p className="w-full text-white">Name :</p>
                                    <Input value={name} onValueChange={setName} type="text" label="Name" isRequired  variant="flat" 
                                    className="light text-black md:w-1/2"
                                    name="clientName"/>
                                    
                                </div>
                            </CardBody>
                            <Divider/>
                            <CardBody>
                                <div className="flex flex-wrap w-full items-center text-black gap-4 mb-3">
                                    <p className="w-full text-white">Email :</p>
                                    <Input type="text" label="Email" isRequired variant="flat" 
                                    className="text-black light md:w-1/2"
                                    
                                    name="clientEmail"
                                    isInvalid={isInvalid}
                                    color={isInvalid ? "danger" : "default"}
                                    errorMessage={isInvalid && "Please enter a valid email"}
                                    onValueChange={setValue}/>
                                </div>
                            </CardBody>
                            <Divider/>
                            <CardBody>
                                <div className="flex flex-wrap w-full items-center text-black gap-4 mb-3">
                                    <p className="w-full text-white">Phone(optional) :</p>
                                    <Input type="text" label="Phone" variant="flat" 
                                    className="text-black light md:w-1/2"
                                    name="clientPhone"/>
                                </div>
                            </CardBody>
                            <Divider/>
                            <CardBody>
                                <div className="flex flex-wrap w-full items-center text-black gap-4 mb-3">
                                    <p className="w-full text-white">Reference website(optional) :</p>
                                    <Input type="text" label="URL" variant="flat" 
                                        className="text-black light md:w-1/2"
                                        name="refUrl"/>
                                    <p className="text-white">Give us some examples of websites that are similar to what you're looking for.</p>
                                    
                                </div>
                            </CardBody>
                            <Divider/>
                            <CardBody>
                                <div className="flex flex-wrap w-full items-center text-black gap-4 mb-3">
                                    <p className="w-full text-white">Brief :</p>
                                    <Textarea
                                        label="Message"
                                        className="flex w-full black light"
                                        variant="flat"
                                        name="message"
                                        />
                                    <p className="w-full text-white">Tell us more information about your project. For example
                                    what pages are required for your website?</p>
                                </div>
                            </CardBody>
                            <Divider/>
                            <CardFooter>
                                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-3">
                                    
        
                                    <Button as={Link} className="w-full light md:w-1/2" href={redirectUrl}>
                                        Last step
                                    </Button>

                                    <Button type="submit" onClick={isLoading} className={loading?"hidden":"w-full text-white md:w-1/2"}>
                                        Send request
                                    </Button>
                                    <Spinner className={loading?"light mx-auto":"hidden"} color="default"/>
                                </div>  
                            </CardFooter>
                        </Card>
                    </div> 
                </div>
            </form>
        </div>
        
        <Footer/>
    </main>
    )
}