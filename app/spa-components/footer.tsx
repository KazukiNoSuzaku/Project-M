import { Link, Image } from "@nextui-org/react"
export default function Footer(){
    return(
    <main className="relative z-10 flex pt-10 pb-10 flex-col gap-2 w-full text-center bg-transaprent">
        <div className="flex flex-wrap justify-center gap-5 items-center">
            <p className="text-sm text-white md:w-1/2">
                Copyright © 2025 Merge2Minds - All rights Reserved
            </p>

            <Image
            src="/M2M_logo.svg"
            width={36}
            height={36}
            alt="Frostforge"
            />
            <Link href="/terms" role="button" className="text-neutral-300">
                Instagram
            </Link>
            <Link href="/privacy" role="button" className="text-neutral-300">
               Youtube
            </Link>
            <Link href="/terms" role="button" className="text-neutral-300">
                TikTok
            </Link>
            <Link href="/privacy" role="button" className="text-neutral-300">
               FAQs
            </Link>    
            <Link href="/terms" role="button" className="text-neutral-300">
                Terms & Conditions

            </Link>
            <Link href="/privacy" role="button" className="text-neutral-300">
                Privacy Policy
            </Link>
            <Link href="/privacy" role="button" className="text-neutral-300">
                GDPR
            </Link>
        </div>
        
    </main>
    )
}