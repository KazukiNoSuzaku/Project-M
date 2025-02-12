import { Image } from "@nextui-org/react"
export default function Sponsor(){
    return(
        <main className="relative z-10 flex flex-col gap-2 w-full text-center h-60" >
        <h3 className="text-large text-white">Powered and supported by</h3>
        <div className="w-full flex flex-wrap gap-x-5 gap-y-3 justify-center items-center">
            
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
    </main>
    )
}