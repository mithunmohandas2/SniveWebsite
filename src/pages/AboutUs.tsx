import Connect from "../components/Connect"
import illustration from "/images/illustration.png"
import aboutImage from "/images/aboutImage.png"
import team from "/images/team.png"
import arrow from '/icons/white-arrow.png'
import { useState } from "react"
import "../assets/animateStyle.css"

function AboutUs() {
    const images = [aboutImage, aboutImage, aboutImage, aboutImage, aboutImage, aboutImage, aboutImage, aboutImage]
    const feedbacks = [
        {
            name: 'Harsh Pareek',
            company: 'SP FreightSystems',
            review: `Snive transformed our digital presence! They handle our social media, website, and even building a game-changing logistics platform. Innovative, perfect for branding - highly recommend!`,
        },
        {
            name: 'Jon Doe',
            company: 'Company Inc.',
            review: `Lorem ipsum dolor sit amet consectetur. Malesuada at nisi consectetur orci nunc amet quisque eu pellentesque. Dui pulvinar enim tempus libero id faucibus commodo et. Mus sit`,
        },
        {
            name: 'Jim Corbet',
            company: 'Company M',
            review: `Lorem ipsum dolor sit amet consectetur. Malesuada at nisi consectetur orci nunc amet quisque eu pellentesque. onsectetur. Malesuada at nisi consectetur orci nunc amet quisque eu pellentesq. onsectetur.`,
        },
    ]
    const [feedbackIndex, setFeedbackIndex] = useState(0)
    const [selectedFeedback, setSelectedFeedback] = useState(feedbacks[feedbackIndex])
    const [shake, setShake] = useState(false);
    const [shakeDirection, setShakeDirection] = useState("fly-right");

    
    // 

    function toggleFeedback(arg: number): void {
        setShake(true); //shake effect when loaded
        setTimeout(() => setShake(false), 500); //reset shake
        setFeedbackIndex(arg);
        setSelectedFeedback(feedbacks[arg]);
    }

    return (
        <>
            <div className="mx-8 sm:mx-20">

                <h1>
                    <span className="text-violetTxt"> S</span>trategy that
                    <span className="text-violetTxt"> N</span>avigates to
                    <span className="text-violetTxt"> I</span>nnovation with
                    <span className="text-violetTxt"> V</span>alue-Driven
                    <span className="text-violetTxt"> E</span>xecution
                </h1>
                <img className="mx-auto rounded-2xl w-full" data-aos="zoom-in" src={illustration} alt="card image" />

                <section className="my-20">
                    <h3 className="my-10">Discover Our Story</h3>
                    <p className="text-md sm:text-md lg:text-xl xl:text-2xl">
                        Welcome to Snive, where innovation meets expertise. Founded with a vision to revolutionize the digital marketing landscape, our journey began with a passion for empowering businesses to thrive in the online world. At Snive, we believe in the power of creativity, data-driven insights, and unwavering dedication to our clients' success.
                        <br /> <br />
                        Our Team is united by a shared commitment to surpass expectations, we're dedicated to delivering exceptional results that elevate your brand. With a client-centric approach at the heart of everything we do, we strive to build lasting relationships based on trust, transparency, and integrity.
                        <br /> <br />
                        Driven by a relentless pursuit of excellence, we stay ahead of the curve by embracing emerging technologies, trends, and best practices in the ever-evolving digital landscape. Every project we undertake is a testament to our commitment to innovation, quality, and measurable outcomes.
                        <br /> <br />
                        <span className="font-semibold">
                            Join us on this exciting journey, and let's create remarkable success stories together.
                        </span>
                    </p>

                </section>

            </div>

            <div className="flex overflow-hidden space-x-3 sm:space-x-5 flex-row scrollable-images" style={{ width: `${images.length * 25}%` }}>
                {images.map((image, index) => (
                    <img key={index} className="w-1/4 py-4 zoomEffect" src={image} alt="about image" />
                ))}
            </div>



            <div className="mx-8 sm:mx-20">
                    <div className="bg-violetBg my-20 rounded-xl p-8 lg:p-14 text-white">
                <div className={shake ? shakeDirection : ""}>
                        <h6 className="text-base mb-8 font-medium h-56 lg:h-24">"{selectedFeedback?.review}"</h6>
                        <h6 className="text-base font-semibold">{selectedFeedback?.name}</h6>
                        <h6 className="text-base font-normal">{selectedFeedback?.company}</h6>
                    </div>
                        <div className="flex justify-end relative -mt-5">
                            <img className='px-2 rotate-180 cursor-pointer' src={arrow} alt="back arrow" onClick={() => {setShakeDirection("fly-left");toggleFeedback(feedbackIndex === 0 ? feedbacks.length - 1 : feedbackIndex - 1)}} />
                            <img className='px-2 cursor-pointer' src={arrow} alt="forward arrow" onClick={() => {setShakeDirection("fly-right");toggleFeedback(feedbackIndex === feedbacks.length - 1 ? 0 : feedbackIndex + 1)}} />
                        </div>
                </div>

                <h3>Our dynamic team</h3>
            </div>

            <img className="mx-auto w-full mt-10" src={team} alt="card image" />

            <div className="mx-8 sm:mx-20">
                <Connect />
            </div>

        </>
    )
}

export default AboutUs