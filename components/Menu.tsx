"use client";
import Image from 'next/image'
import Link from 'next/link'
import react, { useState } from 'react';
const Links = [
    { id: 1, title: "Shop Now", url: "/Shop" },
    { id: 2, title: "Where To Buy", url: "/FindUs" },
    { id: 3, title: "Our story", url: "/OurStory" },
    { id: 4, title: "Contact us", url: "/ContactUs" },
];
const Menu = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            {!open ? (<Image className='cursor-pointer Menuimg' src="/icons8-menu-48.png" alt='' width={40} height={40} onClick={() => setOpen(true)} />
            ) : (
                <Image className='cursor-pointer Menuimg' src="/icons8-x-48.png" alt='' width={40} height={40} onClick={() => setOpen(false)} />
            )}
            {open && (<div className='menu absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
                {Links.map(item => (
                    <Link className='meuuLlink' href={item.url} key={item.id} onClick={() => setOpen(false)}>{item.title}</Link>
                ))}
            </div>)}
        </div>
    )
}
export default Menu