/* created by https://mohamed--gamal.vercel.app/ */
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className=" Home flex flex-col items-center justify-between">
      {/* Start section1 */}
      <section className="section1">
        <h1>
          Artisan style Pita Chips made
          <br />
          with 100% Coconut Oil
        </h1>
        <div className="Links">
          <Link href={"/FindUs"}>Find Near Me</Link>
          <Link href={"/thumbnails"}>Shop Online</Link>
        </div>
      </section>
      {/* End section1 */}
      {/* Start section2 */}
      <section className="section2">
        <h2>As Seen On</h2>
        <div className="hwrap">
          <div className="hmove">
            <div className="hitem">
              <Image src={"/Seen on.png"} width={1440} height={210} alt="" />
            </div>
          </div>
        </div>
        <div className="watch flex items-center justify-center">
          <div className="left_side">
            <h3>Watch our
              <br />
              Dragons’ Den episode</h3>
            <Image src={"/Rectangle 44.png"} width={400} height={323} alt="" />
          </div>
          <div className="right_side ml-10">
            {/*  <Image src={"/Rectangle 43.png"} width={892} height={544} alt="" />
            <Link href={"https://www.youtube.com/watch?v=SvNb-i8i1rU"} target="_blank">
              <div className="button-watch"></div>
            </Link> */}
            <video src="/CEDAR VALLEY SQ_NOV 2-4ac62893.mp4" controls></video>
          </div>
        </div>
      </section>
      {/* End section2 */}
      {/* Start section3 */}
      <section className="section3 flex flex-col items-center">
        <h4>Why We Are Different</h4>
        <div className="items">
          <Image src={"/icons/71mjlfCSIgS-removebg-preview 2.png"} width={180} height={193} alt="" />
          <Image src={"/icons/71mjlfCSIgS-removebg-preview 3.png"} width={180} height={193} alt="" />
          <Image src={"/icons/71mjlfCSIgS-removebg-preview 4.png"} width={180} height={193} alt="" />
          <Image src={"/icons/71mjlfCSIgS-removebg-preview 5.png"} width={180} height={193} alt="" />
          <Image src={"/icons/71mjlfCSIgS-removebg-preview 6.png"} width={180} height={193} alt="" />
          <Image src={"/icons/71mjlfCSIgS-removebg-preview 7.png"} width={180} height={193} alt="" />
          <Image src={"/icons/71mjlfCSIgS-removebg-preview 8.png"} width={180} height={193} alt="" />
          <Image src={"/icons/71mjlfCSIgS-removebg-preview 9.png"} width={180} height={193} alt="" />
        </div>
      </section>
      {/* End section3 */}
      {/* Start section4 */}
      <section className="section4 flex flex-col items-center">
        <h5 className="text-6xl tracking-normal text-center mt-8 mb-14">Shop Bestsellers</h5>
        <div className="continer">
          <div className="content relative">
            <div className="top">
              <div className="nam text-3xl font-bold leading-9 tracking-normal text-center absolute -left-10 -top-10">
                6
                <br />
                Pack
              </div>
              <Image src={"/Rectangle 47.png"} width={330} height={428} alt="" />
            </div>
            <div className="bottom mt-6 flex">
              <div className="mr-6">
                <span>Classic Spice Pita Chips</span>
                <div className="price-rate flex items-center">
                  <span>$22.00</span>
                  <Image src={"/image 4.png"} width={149.65} height={50} alt="" className="ml-4" />
                </div>
              </div>
              <div className="cart">
                <Image src={"/1413908 (1) 2.png"} width={35} height={35} alt="" />
              </div>
            </div>
          </div>
          <div className="content relative">
            <div className="top">
              <div className="nam text-3xl font-bold leading-9 tracking-normal text-center absolute -left-10 -top-10">
                6
                <br />
                Pack
              </div>
              <Image src={"/Rectangle 48.png"} width={330} height={428} alt="" />
            </div>
            <div className="bottom mt-6 flex">
              <div className="mr-6">
                <span>Garlic & Herb Pita Chips</span>
                <div className="price-rate flex items-center">
                  <span>$22.00</span>
                  <Image src={"/image 4.png"} width={149.65} height={50} alt="" className="ml-4" />
                </div>
              </div>
              <div className="cart">
                <Image src={"/1413908 (1) 2.png"} width={35} height={35} alt="" />
              </div>
            </div>
          </div>
          <div className="content relative">
            <div className="top">
              <div className="nam text-3xl font-bold leading-9 tracking-normal text-center absolute -left-10 -top-10">
                6
                <br />
                Pack
              </div>
              <Image src={"/Rectangle 19.png"} width={330} height={428} alt="" />
            </div>
            <div className="bottom mt-6 flex">
              <div className="mr-6">
                <span>Cinnamon Sugar Pita Chips</span>
                <div className="price-rate flex items-center">
                  <span>$22.00</span>
                  <Image src={"/image 4.png"} width={149.65} height={50} alt="" className="ml-4" />
                </div>
              </div>
              <div className="cart">
                <Image src={"/1413908 (1) 2.png"} width={35} height={35} alt="" />
              </div>
            </div>
          </div>
        </div>
        <Link className="mt-12" href={"/thumbnails"}>Shop All</Link>
      </section>
      {/* End section4 */}
      {/* Start section5 */}
      <section className="section5 flex">
        <div className="continer flex">
          <div className="left_side">
            <div className="Ameen">Ameen and Surria Fadel
              <br />
              Co-Founders
            </div>
          </div>
          <div className="right_side">
            <h6>Our Family Story</h6>
            <p>
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
            <Link href={"/OurStory"}>Read More</Link>
          </div>
        </div>
      </section>
      {/* End section5 */}
      {/* Start section6 */}
      <section className="section6 flex">
        <div className="left_side flex flex-col justify-center items-center">
          <h6 className="mb-12">Store Locator</h6>
          <p className="text-center">
            Find your nearest store that carries Cedar Valley!
            We often provide in-store tastings, so check our
            social media to keep an eye on where we’ll be
            next for some free goodies!
          </p>
          <Link className="mt-12" href={"/FindUs"}>Find A Store</Link>
        </div>
        <Image src={"/IMAGE-11 2.png"} width={720} height={723} alt="" />
      </section>
      {/* End section6 */}
      <section className="brands">
        <Image src={"/brands/Whole-Foods-Logo-1984 1.png"} width={175} height={100} alt="" />
        <Image src={"/brands/Safeway-Logo 2.png"} width={229} height={75} alt="" />
        <Image src={"/brands/2560px-Sobeys_logo 2.png"} width={196} height={50} alt="" />
        <Image src={"/brands/1200px-Longo's_logo 2.png"} width={229} height={75} alt="" />
        <Image src={"/brands/Natures Fare Logo 2.png"} width={124} height={125} alt="" />
        <Image src={"/brands/Healthy_Planet_Canada_Healthy_Planet_Expands_Retail_Footprint_in 2.png"} width={147} height={125} alt="" />
        <Image src={"/brands/download 2.png"} width={122} height={125} alt="" />
      </section>
    </main>
  )
}