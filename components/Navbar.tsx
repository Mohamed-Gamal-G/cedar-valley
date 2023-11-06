/* created by https://mohamed--gamal.vercel.app/ */
import Menu from './Menu'
import Link from 'next/link'
const Navbar = () => {
    const user = false
    return (
        <div className='h-24 text-white-500 p-4 flex items-center justify-center xl:h-24 Nav'>
            <Link className='link logo logomd xl:hidden' href="/">CEDAR 
                <br/>
                VALLEY
                </Link>
            <div className='hidden xl:flex Links mb-8 items-center'>
                <Link className='link' href="/Shop">Shop Now</Link>
                <Link className='link' href="/FindUs">Where To Buy</Link>
                <Link className='link logo' href="/">CEDAR 
                <br/>
                VALLEY
                </Link>
                <Link className='link' href="/OurStory">Our story</Link>
                <Link className='link' href="/ContactUs">Contact us</Link>
            </div>
            {/* Mobile Menu */}
            <div className='xl:hidden'>
                <Menu />
            </div>
        </div>
    )
}
export default Navbar