import { Carousel } from 'react-responsive-carousel';
import {Image} from '@nextui-org/react'
export default function Recent(){
    return(
        <main>
            <div className="flex relative lg:overflow-visible w-full flex-wrap justify-between items-center">
            <div className="flex items-right justify-center mt-10">
                    <Carousel showStatus={false} autoPlay infiniteLoop showThumbs={false} >
                        <div>
                        <Image
                        src="/demo_3.png"
                        height={760}
                        className='hidden md:block'
                        alt="Screenshots of the dashboard project showing desktop version"
                        />
                        </div>
                        <div>
                        <Image
                        src="/demo_2.png"
                        height={760}
                        className='hidden md:block'
                        alt="Screenshots of the dashboard project showing desktop version"
                        />
                        </div>
                    </Carousel>
                </div>
            </div>
        </main>
    )
}