'use client'
import {Input, Button, Textarea, Select, SelectItem, RadioGroup, Radio} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import Footer from "../spa-components/footer";
import { business, project} from "../lib/data";
import NavbarY from "../components/NavbarY";
import {calculatePrice} from '../lib/actions'
import {Spinner} from "@nextui-org/react";
import { useEffect, useState } from "react";


export default function Pricing(){
    const [formData,setFormData] = useState<any | null>("");
    const [loading, setLoading] = useState(false);
    const [businessType,setBusinessType]  = useState<any>(new Set([]));
    const [projectType,setProjectType] = useState<any>(new Set([]));
    const [logoRequired, setLogoRequired] =  useState("true");
    const [hostingRequired, setHostingRequired] = useState("true");
    const [numPages, setNumPages] = useState<any | null>("");

    const isLoading= () => {
        if(businessType && projectType && numPages){
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
            const extraData = {
                numPages,
                businessType,
                projectType,
                logoRequired,
                hostingRequired
            };
            numPages=Number(numPages);
            setFormData(extraData);
            setBusinessType([businessType]);
            setProjectType([projectType]);
            setNumPages(Number(numPages));
            setLogoRequired(logoRequired);
            setHostingRequired(hostingRequired);
          } else {
            console.error('No data found in the URL');
          }
    },[]);


    return(
        <main >

        <div className="dark md:bg-[url('/silk.png')] bg-cover bg-fixed">
            <div className="dark">
                <NavbarY/>
            </div>
            
            <form action={calculatePrice}>
                <div className="flex container py-10 px-6 flex-grow max-w-7xl mx-auto min-h-screen flex-col items-center justify-center pb-20 ">
                    <div  className="flex relative z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-10">
                        <div className="text-center leading-8 md:leading-10 md:text-left">
                            <div className="inline-block">
                            <h1 className="tracking-tight text-white inline font-semibold text-[2.1rem] lg:text-5xl">Get&nbsp;</h1>
                            
                            </div>
                            <div className="inline-block">
                            <h1 className="tracking-tight inline font-semibold from-[#4949f8] to-[#49f8ef] text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">Started&nbsp;</h1>
                            </div>

                            
                        </div>
                        <h2 className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-white block max-w-full !w-full text-center md:text-left">
                            Provide us some basic information of your project, and get an estimated value.</h2>  
                        <Divider className="bg-white" />

                        <Card isBlurred className="border-none bg-background/60 dark:bg-default-100/50" >
                            <CardBody>
                                <div className="flex flex-wrap w-full text-black items-center gap-4 mb-3">
                                    <p className="w-full text-white">Business type :</p>
                                    <Select 
                                        label="Select Type of business" 
                                        className="light max-w-xs w-full text-black"
                                        name="businessType" 
                                        isRequired
                                        selectedKeys={businessType}
                                        onSelectionChange={setBusinessType}
                                    >
                                        {business.map((business) => (
                                        <SelectItem className="text-black" key={business.value} value={business.value}>
                                            {business.label}
                                        </SelectItem>
                                        ))}
                                    </Select>
                                </div>
                            </CardBody>
                            <Divider/>
                            <CardBody>
                                <div className="flex flex-wrap w-full text-black items-center gap-4 mb-3">
                                    <p className="w-full text-white">Project type :</p>
                                    <Select 
                                        label="Select Type of Project" 
                                        className="light max-w-xs w-full text-black" 
                                        name="projectType"
                                        isRequired
                                        selectedKeys={projectType}
                                        onSelectionChange={setProjectType}
                                        
                                    >
                                        {project.map((project) => (
                                        <SelectItem className="text-black" key={project.value} value={project.value}>
                                            {project.label}
                                        </SelectItem>
                                        ))}
                                    </Select>
                                </div>
                            </CardBody>
                            <Divider/>
                            <CardBody>
                                <div className="flex flex-wrap w-full items-center text-black gap-4 mb-3">
                                    <p className="w-full text-white">Number of pages :</p>
                                    <Input name="numPages" type="number" label="Number of pages" isRequired  variant="flat" 
                                    className="light text-black md:w-1/2"
                                    value={numPages}
                                    onValueChange={setNumPages}/>
                                    {/* <p className="text-white">e.g. Home-About-Services-Contact </p> */}
                                </div>
                            </CardBody>
                            <Divider/>
                            <CardBody>
                                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-3 text-black">
                                    <h1 className="text-white">Hosting required : </h1>
                                    <RadioGroup
                                        orientation="horizontal"
                                        color="primary"
                                        isRequired
                                        name="logoRequired"
                                        defaultValue="true"
                                        value={logoRequired}
                                        onValueChange={setLogoRequired}
                                        >
                                        <Radio  color="success" value="true">
                                            <p className="text-white">Yes</p>
                                        </Radio>
                                        <Radio  color="danger" value="false">
                                            <p className="text-white"> No</p>
                                        </Radio>
                                    </RadioGroup>
                                </div>
                            </CardBody>
                            <Divider/>
                            <CardBody>
                                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-3 text-black">
                                        <h1 className="text-white">Logo design required : </h1>
                                        <RadioGroup
                                            orientation="horizontal"
                                            color="primary"
                                            name="hostingRequired"
                                            defaultValue="true"
                                            value={hostingRequired}
                                            onValueChange={setHostingRequired}
                                            >
                                            <Radio color="success" value="true">
                                                <p className="text-white">Yes</p>
                                            </Radio>
                                            <Radio  color="danger" value="false">
                                                <p className="text-white"> No</p>
                                            </Radio>
                                        </RadioGroup>
                                    </div>
                            </CardBody>
                            <Divider/>
                            <CardFooter>
                                <div className="flex light w-full flex-wrap md:flex-nowrap gap-4 mb-3">
                                        <Button type="submit" onClick={isLoading} className={loading?"hidden":"w-full"}>
                                            Next step
                                        </Button>
                                        <Spinner className={loading?"mx-auto":"hidden"} color="default"/>
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