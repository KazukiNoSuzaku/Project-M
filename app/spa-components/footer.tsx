import { Link, Image } from "@nextui-org/react"
export default function Footer(){
    return(
    <main className="relative z-10 flex pt-10 pb-10 flex-col gap-2 w-full text-center bg-neutral-800">
        <div className="flex flex-wrap justify-center gap-5 items-center">
            <p className="text-sm text-white md:w-1/2">
                © 2024 Frost Forge Studio - bring web design to next level. All rights Reserved
            </p>

            <Image
            src="/frostforge_logo.png"
            width={36}
            height={36}
            alt="Frostforge"
            />

            <Link href="/terms" role="button" className="text-white">
                Terms & Conditions

            </Link>
            <Link href="/privacy" role="button" className="text-white">
                Privacy Policy

            </Link>
        </div>
        
    </main>
    )
}