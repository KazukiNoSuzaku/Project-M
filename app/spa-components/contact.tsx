import { Textarea, Button, Input, Image, Spinner } from "@nextui-org/react"
import { sendEmail } from "../lib/sendEmail";
import { Parallax, useParallax } from "react-scroll-parallax";
import Letter from "../ui/letter";
import { useState } from "react";
import toast from "react-hot-toast";


export default function Contact(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const [loading, setLoading] = useState(false);

    const notify = () => {
        if (name && email && message) {
          // Show loading for 3 seconds
          setLoading(true);
      
          setTimeout(() => {
            setLoading(false); // Set loading to false after 3 seconds
            toast("Message sent successfully!");
          }, 2000); // 3000 milliseconds = 3 seconds
        } else {
          toast("Please provide valid information");
        }
      };

    return(
    <main>
        <div className="flex light relative lg:overflow-visible w-full flex-wrap justify-between items-center bg-gradient-to-r from-cyan-800 to-indigo-700">
        
            <div className="container mx-auto max-w-7xl px-6 flex-grow">
                <div  className="flex pt-20 pb-20 relative z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-10">
                    <div className="text-center leading-8 md:leading-10 md:text-left">
                        <div className="inline-block">
                        <h1 className="tracking-tight text-white inline font-semibold text-[2.1rem] lg:text-5xl">Get in&nbsp;</h1>
                        
                        </div>
                        <div className="inline-block">
                        <h1 className="tracking-tight inline font-semibold from-lime-300 to-sky-500 text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">Touch&nbsp;</h1>
                        </div>

                        
                    </div>
                    <h2 className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-white block max-w-full !w-full text-center md:text-left">
                        Feel free to contact us, we'd like to hear your ideas and answer your questions.</h2>  
                    <form action={async (FormData) => {
                        await sendEmail(FormData)
                    }}>
                        <div className="flex w-full flex-wrap gap-4 mb-3">
                            <Input 
                            name="name" 
                            value={name}
                            onValueChange={setName}
                            type="text" 
                            label="Name" 
                            isRequired  variant="flat" className="text-white"/>
                        </div>

                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-3">
                            <Input 
                            name="email"
                            value={email}
                            onValueChange={setEmail} 
                            type="email" 
                            label="Email" 
                            isRequired  variant="flat" className="text-white" />
                        </div>

                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-3">
                            <Textarea
                                name="message"
                                value={message}
                                onValueChange={setMessage}
                                label="Message"
                                className="flex w-full text-white"
                                variant="flat"
                                isRequired 
                                />
                        </div>
                    
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-3">
                            <Button onClick={notify} type="submit" className={loading?"hidden":"w-full md:w-1/2"}>
                                Send
                            </Button>
                            <Spinner className={loading?"mx-auto":"hidden"} color="default"/>
                        </div>  
                    </form>
                    
                </div>

                <h3 className="text-large text-white text-center">Powered and supported by</h3>
                <div className="w-full pb-20 flex flex-wrap gap-x-5 gap-y-3 justify-center items-center">
            
                    <Image
                        src="/nextjs_logo.png"
                        height={10}
                        width={100}
                        alt="next" />
                    <Image
                        src="/react_logo.png"
                        height={10}
                        width={100}
                        alt="react" />
                    <Image
                        src="/motion_logo.PNG"
                        height={10}
                        width={100}
                        alt="motion" />
                    <Image
                        src="/aws_logo.png"
                        height={10}
                        width={100}
                        alt="aws" />
            
                </div>
 

 
            {/* <div className="flex items-right justify-center md:w-3/5 h-1/3  md:px-15 hidden md:block">
                <div className="flex items-right justify-center w-full md:px-15 ">
                <Letter/>
                </div>    
            </div> */}
            </div>
            
 

        </div>

    </main>
    )
}