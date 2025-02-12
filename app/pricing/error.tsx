'use client'
import { useEffect } from 'react';
import { Divider } from '@nextui-org/react';
import Footer from '../spa-components/footer';
import NavbarY from '../components/NavbarY';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);


  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
    };
  }, []);
 
  return (
    <main>  
            <div className="dark md:bg-[url('/silk.png')] bg-cover bg-fixed">
              <NavbarY/>
              <div className="flex container px-6 flex-grow max-w-7xl mx-auto h-screen flex-col items-center justify-center pb-10">
                  <div  className="flex relative z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-10">
                      <div className="text-center leading-8 md:leading-10 md:text-left">
                          <div className="inline-block">
                          <h1 className="tracking-tight text-white inline font-semibold text-[2.1rem] lg:text-5xl">Something went&nbsp;</h1>
                          
                          </div>
                          <div className="inline-block">
                              <h1 className="tracking-tight inline font-semibold from-[#f777a2] to-[#ff0357] text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">Wrong&nbsp;</h1>
                          </div>

                          
                      </div>
                      <h2 className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-white block max-w-full !w-full text-center md:text-left">
                          (Error)500: Failed to connet server.</h2>
                          <h2 className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-white block max-w-full !w-full text-center md:text-left">
                          If this issue occuers, please contact us with frostforge.labs@gmail.com.</h2>  
                      <Divider className="bg-white" />

                        <button
                          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
                          onClick={
                          // Attempt to recover by trying to re-render the invoices route
                          () => reset()
                          }
                      >
                          Try again
                      </button>
      
                  </div> 
              </div>
            </div>
            <Footer/>
        </main>
  );
}