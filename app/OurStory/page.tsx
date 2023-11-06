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
import { useMemo } from "react";
function OurStory() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    if (counter === 0) return;
    setCounter(prevCounter => prevCounter - 1);
  }

  const increment = () => {
    setCounter(prevCounter => prevCounter + 1);
  }

  const result = useMemo(() => {
    return (
      <div>
        {counter}
      </div>
    );
  }, [counter]);
  return (
    <div>
      <section className='OurStory items-center flex flex-col'>
        <h1 className='mt-12 mb-12'>Our Story</h1>
        <div className="continer">
          {/* I copy this section from home page In order not to waste time, but it is better to make it in Component  */}
          <section className="section5 flex">
            <div className="continer flex">
              <div className="left_side">
                <div className="Ameen">Ameen and Surria Fadel
                  <br />
                  Co-Founders
                </div>
              </div>
              <div className="right_side newbackgroundimage">
                <p className='pt-20' >
                  Cedar Valley began as a high school project with a mission
                  to share our family's infused recipes, inspired by our
                  heritage in the Beqaa Valley of Lebanon.
                  <br />
                  <br />
                  After I received a $3,000 grant from my high school, I
                  partnered with my mom to bring her authentic homemade
                  Pita Chips to Canadian families.
                  <br />
                  <br />
                  From starting in our home kitchen to opening our own
                  12,000 square-foot production facility in Windsor, ON, our
                  line of all-natural Pita Chips can now be found in 1,000
                  grocery stores across Canada.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="Journey flex flex-col items-center w-full">
          <h2 className='mt-12 mb-16'>Our Journey In Motion</h2>
          <div className='container'>
            <div className="line"></div>
            <Swiper
              /* FreeMode={true} */
              grabCursor={true}
              modules={[FreeMode]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                800: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1168: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },

                /*   1268:{
                    slidesPerView:4,
                    spaceBetween:15,
                  }, */
              }}
            >

              <SwiperSlide className="swiper">
                <div className="continer flex flex-col items-center justify-center">
                  <div className="ImgContiner">
                    <Image src={"/Ellipse 18.png"} width={175} height={175} alt='' />
                    <div className="sercl"></div>
                  </div>
                  <h3>Idea is born in the class room</h3>
                  <span className='date'>2015</span>
                  <p>Cedar Valley began as a high school project after Ameen Fadel
                    received a $3,000 grant from his school board in partnership
                    with the Canadian government. Ameen partnered with his
                    mom, Surria, to bring her family’s recipe for Fattoush salad
                    dressing to market after a family friend recommended we
                    bottle and sell it!</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <div className="continer flex flex-col items-center justify-center">
                  <div className="ImgContiner">
                    <Image src={"/Ellipse 18 (1).png"} width={175} height={175} alt='' />
                    <div className="sercl"></div>
                  </div>
                  <h3>First local market</h3>
                  <span className='date'>2017</span>
                  <p>After 2 years of development, testing, and refining the product with feedback from family and friends, Ameen and Surria attended their first farmers market in Windsor, ON. Selling 81 bottles of dressing on our first day, we knew we had something here! We were giving away pita chips as an added “freebie” but customers were asking to buy them as well, so we decided to start officially selling pita chips too! These Pita Chips would later become our entire business!</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <div className="continer flex flex-col items-center justify-center">
                  <div className="ImgContiner">
                    <Image src={"/Ellipse 18 (2).png"} width={175} height={175} alt='' />
                    <div className="sercl"></div>
                  </div>
                  <h3>Our first production facility</h3>
                  <span className='date'>2018</span>
                  <p>After attending local markets through all of 2017 and renting a restaurant to produce our products, we knew we needed our own commercial kitchen to be able to grow! We moved into our very first 1000 sq ft facility so we could start servicing more local stores and the local Windsor community.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <div className="continer flex flex-col items-center justify-center">
                  <div className="ImgContiner">
                    <Image src={"/Ellipse 18 (3).png"} width={175} height={175} alt='' />
                    <div className="sercl"></div>
                  </div>
                  <h3>Sobeys Local Program</h3>
                  <span className='date'>2018</span>
                  <p>In February of 2018, Ameen walked into his local Sobeys and left with an order for 10 cases of Cedar Valley! This was our first BIG retailer and the official partnership with Sobeys. Sobeys helped us expand our flavour offerings and lead
                    us in the right direction to grow!</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <div className="continer flex flex-col items-center justify-center">
                  <div className="ImgContiner">
                    <Image src={"/Ellipse 18 (4).png"} width={175} height={175} alt='' />
                    <div className="sercl"></div>
                  </div>
                  <h3>Whole Food Market Ontario</h3>
                  <span className='date'>2019</span>
                  <p>As we expanded to selling our products at more stores across ontario, Whole Foods Market agreed to test the products in their 7 stores, and we blew it out of the water!! Needed to produce more than we ever could, we began renting a government food manufacturing facility in Colborne, ON to produce 10X the amount we could at our 1000 sq facility.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <div className="continer flex flex-col items-center justify-center">
                  <div className="ImgContiner">
                    <Image src={"/Ellipse 18 (5).png"} width={175} height={175} alt='' />
                    <div className="sercl"></div>
                  </div>
                  <h3>Facility #2</h3>
                  <span className='date'>2020</span>
                  <p>After seeing major potential at retail, we took leap of faith and moved into a 5000 sq ft facility to produce our Pita Chips and build a custom manufacturing line. This would alow us to scale across Canada, shipping from this facility to our 50 Ontario retail locations.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <div className="continer flex flex-col items-center justify-center">
                  <div className="ImgContiner">
                    <Image src={"/Ellipse 18 (6).png"} width={175} height={175} alt='' />
                    <div className="sercl"></div>
                  </div>
                  <h3>Rebranding</h3>
                  <span className='date'>2020</span>
                  <p>Bringing a new look and better product to our fans everywhere!</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <div className="continer flex flex-col items-center justify-center">
                  <div className="ImgContiner">
                    <Image src={"/Ellipse 18 (7).png"} width={175} height={175} alt='' />
                    <div className="sercl"></div>
                  </div>
                  <h3>1300+ Retail Locations, Coast to Coast</h3>
                  <span className='date'>2023</span>
                  <p>With determination and hard work paying off, we partnered with some of Canada’s largest retailers to bring our products to over 1300+ retail locations across the country, available in every province!!</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <div className="continer flex flex-col items-center justify-center">
                  <div className="ImgContiner">
                    <Image src={"/Ellipse 18 (8).png"} width={175} height={175} alt='' />
                    <div className="sercl"></div>
                  </div>
                  <h3>Dragons’ Den Feature</h3>
                  <span className='date'>2023 </span>
                  <p>WE MADE IT INTO THE DEN!! An incredible accomplishment for our family owned business!</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurStory
/* created by https://mohamed--gamal.vercel.app/ */