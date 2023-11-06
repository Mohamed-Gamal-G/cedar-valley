'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { images } from '@/lib/images'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import Link from 'next/link'
import { useMemo } from "react";
import Related_Swiper from "../../components/Related_Swiper"

export default function Page() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [counter, setCounter] = useState(1);
  const decrement = () => {
    if (counter === 1) return;
    setCounter(prevCounter => prevCounter - 1);
  }
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1);
  }
  const result = useMemo(() => {
    return (
      <div>{counter}</div>
    );
  }, [counter]);
  return (
    <div>
      <section className='shop flex p-5'>
        <section className='left_side min-h-screen py-12'>
          <p>
            Home / Pita Chips / Classic Spice Pita Chips
          </p>
          <div className='container'>
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className='h-96 w-full rounded-lg sweper'
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className='flex h-full w-full items-center justify-center'>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className='block h-full w-full object-cover'
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Thumbnail */}
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={12}
              slidesPerView={5}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className='thumbs mt-3 h-32 w-full rounded-lg'
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <button className='flex h-full w-full items-center justify-center'>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className='block h-full w-full object-cover'
                    />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <section className='right_side mt-32'>
          <h1>
            Classic Spice Pita Chips
            <br />
            (Pack of 6)
          </h1>
          <span className='Price'>$35.94</span>
          <div className='flex flex-col'>
            <div className='starts flex mb-5 items-center'>
              <Image src={"/shop icons/Star 1.png"} width={30} height={30} alt='start' className='mr-1' />
              <Image src={"/shop icons/Star 1.png"} width={30} height={30} alt='start' className='mr-1' />
              <Image src={"/shop icons/Star 1.png"} width={30} height={30} alt='start' className='mr-1' />
              <Image src={"/shop icons/Star 1.png"} width={30} height={30} alt='start' className='mr-1' />
              <Image src={"/shop icons/Star 1.png"} width={30} height={30} alt='start' className='mr-1' />
              (100)
            </div>
            <div className='botons'>
              <Link href={"/"}>Description</Link>
              <Link href={"/"}>Nutrition Facts</Link>
            </div>
            <p>
              Our OG flavour! With our classic home-blend of warm, vibrant spices, you’ll crave more with every bite. A
              beautifully balanced flavour with a slight pinch of smoky heat that’s suitable for all to enjoy, our classic
              spice gives you an irresistibly delicious, mouth- watering experience that’ll have you reimagine what a pita
              chip should be!
            </p>
            <small className='Key-Features'>Key Features</small>
            <div className="Contents">
              <div className='Content flex items-center'>
                <Image src={"/shop icons/71mjlfCSIgS-removebg-preview 2.png"} width={40} height={40} className='mr-2' alt='' />100% Coconut Oil
              </div>
              <div className='Content flex items-center'>
                <Image src={"/shop icons/71mjlfCSIgS-removebg-preview 3.png"} width={40} height={40} className='mr-2' alt='' />100% Coconut Oil
              </div>
              <div className='Content flex items-center'>
                <Image src={"/shop icons/71mjlfCSIgS-removebg-preview 4.png"} width={40} height={40} className='mr-2' alt='' />100% Coconut Oil
              </div>
              <div className='Content flex items-center'>
                <Image src={"/shop icons/71mjlfCSIgS-removebg-preview 5.png"} width={40} height={40} className='mr-2' alt='' />100% Coconut Oil
              </div>
            </div>
          </div>
          <div className='continerlastContiner flex items-center justify-around mt-12'>
            <div className="lastContiner">
              <section className='num flex items-center'>
                <button onClick={decrement}>-</button>
                <h2>{result}</h2>
                <button onClick={increment}>+</button>
              </section>
            </div>
            <Link className='Add_Cart' href={"/thumbnails"}>Add To Cart</Link>
          </div>
        </section>
      </section>
      <section className='Related-Products'>
        <h2>Related Products</h2>
        <Related_Swiper />
      </section>
      <div className="Reviews flex">
        <div className="left_side">
          <div className="continer">
            <h3 className='mb-5'>Costumer Reviews</h3>
            <div className='flex flex-col justify-center'>
              <div className="flex">
                <span>5.0 </span>
                <div className="flex ml-3 mb-1">
                  <Image src={"/shop icons/Star 1.png"} width={30} height={30} alt='' />
                  <Image src={"/shop icons/Star 1.png"} width={30} height={30} alt='' />
                  <Image src={"/shop icons/Star 1.png"} width={30} height={30} alt='' />
                  <Image src={"/shop icons/Star 1.png"} width={30} height={30} alt='' />
                  <Image src={"/shop icons/Star 1.png"} width={30} height={30} alt='' />
                </div>
              </div>
              <span>100 Global Ratings</span>
              <div className="rates mt-5">
                <div className="rate flex items-center">
                  <span>5 Star</span>
                  <div className="progress w-40 ml-5">
                    <div className="content prog">
                      <div className=""></div>
                    </div>
                  </div>
                </div>
                <div className="rate flex items-center">
                  <span>4 Star</span>
                  <div className="progress w-40 ml-5">
                    <div className="content prog2 w-5">
                      <div className=""></div>
                    </div>
                  </div>
                </div>
                <div className="rate flex items-center">
                  <span>3 Star</span>
                  <div className="progress w-40 ml-5">
                    <div className="content w-0">
                      <div className=""></div>
                    </div>
                  </div>
                </div>
                <div className="rate flex items-center">
                  <span>2 Star</span>
                  <div className="progress w-40 ml-5">
                    <div className="content w-0">
                      <div className=""></div>
                    </div>
                  </div>
                </div>
                <div className="rate flex items-center">
                  <span>1 Star</span>
                  <div className="progress w-40 ml-5">
                    <div className="content w-0">
                      <div className=""></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="line"></div>
              <div className="ReviewProduct">
                <h4>Review This Product</h4>
                <p className='mb-5'>Share your thoughts with other costumers</p>
                <Link className='' href={"/"}>Write a Costumer Review</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="right_side ml-40">
          <div className="detals flex flex-col justify-center">
            <div className="stars flex ">
              <Image src={"/shop icons/Star 1.png"} width={30} height={30} alt='' />
              <Image src={"/shop icons/Star 1.png"} width={30} height={30} alt='' />
              <Image src={"/shop icons/Star 1.png"} width={30} height={30} alt='' />
              <Image src={"/shop icons/Star 1.png"} width={30} height={30} alt='' />
              <Image src={"/shop icons/Star 1.png"} width={30} height={30} alt='' />
            </div>
            <div className="date mb-4">11 May 2023</div>
            <h5 className='text-xl leading-6 tracking-normal text-left'>Amazing Product!!!!</h5>
            <p className='text-xl font-normal leading-6 tracking-normal text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
          <div className="detals flex flex-col justify-center mt-12">
            <div className="stars flex ">
              <Image src={"/shop icons/Star 1.png"} width={30} height={30} alt='' />
              <Image src={"/shop icons/Star 1.png"} width={30} height={30} alt='' />
              <Image src={"/shop icons/Star 1.png"} width={30} height={30} alt='' />
              <Image src={"/shop icons/Star 1.png"} width={30} height={30} alt='' />
              <Image src={"/shop icons/Star 5.png"} width={30} height={30} alt='' />
            </div>
            <div className="date mb-4">11 May 2023</div>
            <h5 className='text-xl leading-6 tracking-normal text-left'>So GOOD</h5>
            <p className='text-xl font-normal leading-6 tracking-normal text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
/* created by https://mohamed--gamal.vercel.app/ */