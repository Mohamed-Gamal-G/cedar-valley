'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import Link from 'next/link'
export default function Page() {
  return (
    <div className='shop-swiper2'>
      <Swiper
        /* FreeMode={true} */
        grabCursor={true}
        modules={[FreeMode]}
        breakpoints={{
          0:{
            slidesPerView:1,
            spaceBetween:10,
          },
          800:{
            slidesPerView:2,
            spaceBetween:10,
          },
          1168:{
            slidesPerView:3,
            spaceBetween:15,
          },
          
          1268:{
            slidesPerView:4,
            spaceBetween:15,
          },
        }}
      >
        <SwiperSlide className="one swiper">
          <div className="continer flex flex-col">
            <Image src={"/SALT-22-min.jpg"} width={300} height={400} alt='' className='rounded-lg'/>
            <div className="rice">$35.94</div>
            <h3>Sea Salt Pita Chips (Pack of 6)</h3>
            <div className='stars flex'>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            (100)
            </div>
            <Link className='Buy' href={"/thumbnails"}>Buy Now</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="two swiper">
           <div className="continer flex flex-col">
            <Image src={"/CLASSIC-2-min.jpg"} width={300} height={400} alt='' className='rounded-lg'/>
            <div className="rice">$35.94</div>
            <h3>Sea Salt Pita Chips (Pack of 6)</h3>
            <div className='stars flex'>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            (100)
            </div>
            <Link className='Buy' href={"/thumbnails"}>Buy Now</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="three swiper">
           <div className="continer flex flex-col">
            <Image src={"/GARLIC-2-min.jpg"} width={300} height={400} alt='' className='rounded-lg'/>
            <div className="rice">$35.94</div>
            <h3>Garlic Herb Pita Chips (Pack of 6)</h3>
            <div className='stars flex'>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            (100)
            </div>
            <Link className='Buy' href={"/thumbnails"}>Buy Now</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="four swiper">
           <div className="continer flex flex-col">
            <Image src={"/CINNAMON-2-min.jpg"} width={300} height={400} alt='' className='rounded-lg'/>
            <div className="rice">$35.94</div>
            <h3>Cinnamon Sugar Pita Chips (Pack of 6)</h3>
            <div className='stars flex'>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            (100)
            </div>
            <Link className='Buy' href={"/thumbnails"}>Buy Now</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="five swiper">
           <div className="continer flex flex-col">
            <Image src={"/VARIETY-PACK-min.jpeg"} width={300} height={400} alt='' className='rounded-lg'/>
            <div className="rice">$35.94</div>
            <h3>Flavour Fiesta Variety Pack Pita Chips (Pack of 6)</h3>
            <div className='stars flex'>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            <Image src={"/Star 4.png"} width={21.43} height={20} alt=''/>
            (100)
            </div>
            <Link className='Buy' href={"/thumbnails"}>Buy Now</Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
/* created by https://mohamed--gamal.vercel.app/ */