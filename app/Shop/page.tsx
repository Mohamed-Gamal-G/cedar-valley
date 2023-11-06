/* created by https://mohamed--gamal.vercel.app/ */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function shop() {
    return (
        <div>
            <section className='shops'>
                <h1 className='text-center'>Shop Now</h1>
                <div className="SortBy">
                Sort By:
                <select className='block' name="Sort" id="Sort">
                    <option value="Best Selling">Best Selling</option>
                    {/* <option value="Best Selling">Best Selling</option>
                    <option value="Best Selling">Best Selling</option> */}
                </select>
                </div>
                <div className="items">
                    <div className="continer flex flex-col">
                        <Image src={"/SALT-22-min.jpg"} width={300} height={400} alt='' />
                        <div className="rice">$35.94</div>
                        <h3>Sea Salt Pita Chips (Pack of 6)</h3>
                        <div className='stars flex'>
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            (100)
                        </div>
                        <Link className='Buy' href={"/thumbnails"}>Buy Now</Link>
                    </div>
                    <div className="continer flex flex-col">
                        <Image src={"/CLASSIC-2-min.jpg"} width={300} height={400} alt='' />
                        <div className="rice">$35.94</div>
                        <h3>Classic Spice Pita Chips (Pack of 6)</h3>
                        <div className='stars flex'>
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            (100)
                        </div>
                        <Link className='Buy' href={"/thumbnails"}>Buy Now</Link>
                    </div>
                    <div className="continer flex flex-col">
                        <Image src={"/CLASSIC-2-min.jpg"} width={300} height={400} alt='' />
                        <div className="rice">$35.94</div>
                        <h3>Garlic Herb Pita Chips (Pack of 6)</h3>
                        <div className='stars flex'>
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            (100)
                        </div>
                        <Link className='Buy' href={"/thumbnails"}>Buy Now</Link>
                    </div>
                    <div className="continer flex flex-col">
                        <Image src={"/GARLIC-2-min.jpg"} width={300} height={400} alt='' />
                        <div className="rice">$35.94</div>
                        <h3>Cinnamon Sugar Pita Chips (Pack of 6)</h3>
                        <div className='stars flex'>
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            (100)
                        </div>
                        <Link className='Buy' href={"/thumbnails"}>Buy Now</Link>
                    </div>
                    <div className="continer flex flex-col">
                        <Image src={"/CINNAMON-2-min.jpg"} width={300} height={400} alt='' />
                        <div className="rice">$35.94</div>
                        <h3>Flavour Fiesta Variety Pack Pita Chips (Pack of 6)</h3>
                        <div className='stars flex'>
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            <Image src={"/Star 4.png"} width={21.43} height={20} alt='' />
                            (100)
                        </div>
                        <Link className='Buy' href={"/thumbnails"}>Buy Now</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default shop