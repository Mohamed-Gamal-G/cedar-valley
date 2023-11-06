/* created by https://mohamed--gamal.vercel.app/ */
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer>
            <div className="continer">
                <div className="content">
                    <Link href="#" className='logoFooter mb-8'>CEDAR
                        <br />
                        VALLEY
                    </Link>
                    <br />
                    <Link href={"#"} className='mt-8 block'>
                        Family-focused foods that
                        <br />
                        taste and feel better.
                    </Link>
                </div>
                <div className="content flex flex-col">
                    <Link href="#">Menu
                    </Link>
                    <Link href={"#"}>Our Story</Link>
                    <Link href={"#"}>Shop</Link>
                    <Link href={"#"}>Store Locator</Link>
                    <Link href={"#"}>Free Recipes</Link>
                    <Link href={"#"}>In The News</Link>
                    <Link href={"#"}>Blog & Newsletters</Link>
                    <Link href={"#"}>Contact</Link>
                </div>
                <div className="content flex flex-col">
                    <Link href="#">Policies
                    </Link>
                    <Link href={"#"}>Policies</Link>
                    <Link href={"#"}>Privacy Policy</Link>
                    <Link href={"#"}>Terms of Service</Link>
                    <Link href={"#"}>Shipping Policy</Link>
                    <Link href={"#"}>Refund Policy</Link>
                </div>
                <div className="content flex flex-col">
                    <Link href={"#"} className='mb-6'>Join our Newsletter</Link>
                    <div className="emailcintiner">
                        <input type='email' placeholder='Your@email.com' className='mr-6' />
                        <Link href={"/"} className='Join'>Join Now</Link>
                    </div>
                </div>
            </div>
            <div className="copyright flex justify-between items-center">
                <div className="left_side ">
                    © Cedar Valley Selections Inc. 2023 – All Rights Reserved
                </div>
                <div className="right_side flex">
                    <Link href={"https://www.instagram.com/cedarvalleyinc/"} target='_blank'>
                        <Image className='mr-5' src={"/icons/Rectangle 12.png"} width={45} height={39} alt='facbook' />
                    </Link>
                    <Link href={""}>
                        <Image className='mr-5' src={"/icons/Rectangle 11.png"} width={45} height={39} alt='facbook' />
                    </Link>
                    <Link href={"https://www.facebook.com/cedarvalleyinc"} target='_blank'>
                        <Image className='' src={"/icons/Rectangle 13.png"} width={45} height={39} alt='facbook' />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
export default Footer