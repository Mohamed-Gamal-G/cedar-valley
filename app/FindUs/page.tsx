/* created by https://mohamed--gamal.vercel.app/ */
import Image from 'next/image'
import React from 'react'
function FindUs() {
  return (
    <div>
        <section className='FindUs flex flex-col items-center justify-center'>
            <h1>Find Us</h1>
            <p>Available now in Canada and the United States</p>
          {/*  <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d230888.9762609392!2d-73.78211698272845!3d40.7195054034218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCostco%20Wholesale!5e0!3m2!1sar!2seg!4v1699024364926!5m2!1sar!2seg" ></iframe> */}
          <iframe src="https://www.google.com/maps/d/embed?mid=1cUA2ybm5xhhs6m2wOossOC7SQpP5Yb0&ehbc=2E312F" width="640" height="480"></iframe>
        <div className="following-stores">
          <h2>Available in the following stores</h2>
          <div className="hwrap">
          <div className="hmove">
            <div className="hitem">
              <Image src={"/Rectangle 86.png"} width={1252} height={175} alt="" />
            </div>
          </div>
        </div>
        </div>
        </section>
    </div>
  )
}
export default FindUs