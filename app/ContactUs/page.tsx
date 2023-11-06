/* created by https://mohamed--gamal.vercel.app/ */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
function ContactUs() {
  return (
    <div>
      <section className='ContactUs flex flex-col items-center m-40'>
        <h1>Contact Us</h1>
        <p>If you have any questions, please don't hesitate to send us a message.</p>
        <div className="continer flex mt-16">
          <div className="left_side">
            <form className='flex flex-col'>
              <div className="name flex">
                <input type='text' placeholder='First Name' className='mr-5 FirstName' />
                <input type='text' placeholder='Last Name' />
              </div>
              <input type='email' placeholder='Email' />
              <input type='text' placeholder='Phone Number' />
              <input type='text' placeholder='Message (Optional)' />
              <Link href={"/ContactUs"}>Send</Link>
            </form>
          </div>
          <div className="right_side ml-32">
            <p>We’re happy to hear from our friends and family across the country. Get in touch with us using the form and we’ll get back to you shortly.</p>
            <div className="Contact mt-12">
              <div className="content flex items-center mb-5">
                <Image className='mr-8' src={"/icons/Rectangle 93.png"} width={50} height={50} alt='' />
                (519) 300-6000
              </div>
              <div className="content flex items-center mb-5">
                <Image className='mr-8' src={"/icons/Rectangle 94.png"} width={50} height={50} alt='' />
                info@cedarvalleyselections.ca
              </div>
              <div className="content flex items-center mb-5">
                <Image className='mr-8' src={"/icons/Rectangle 95.png"} width={50} height={50} alt='' />
                2025 Fasan Dr, Oldcastle, ON N0R 1L0, Canada
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs