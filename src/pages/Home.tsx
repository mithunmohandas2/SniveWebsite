import videoLink from "/videos/bannerVideo.mp4"
import card from "/images/card2.png"
import icon1 from "/icons/icon1.png"
import icon2 from "/icons/icon2.png"
import icon3 from "/icons/icon3.png"
import icon4 from "/icons/icon4.png"
import Connect from "../components/Connect"
import CountingComponent from "../components/CountingComponent"


function Home() {

    const MetricDetails = [
        { icon: icon1, percent: 77, detail: `Cost Saving` },
        { icon: icon2, percent: 25, detail: `Revenue Maximization` },
        { icon: icon3, percent: 13, detail: `Visibility Enhancement` },
        { icon: icon4, percent: 81, detail: `Performance Boost` },
    ]

    return (
        <div className="mx-8 sm:mx-20">
            {/* Banner Section */}
            <section className="">

                <h1 className="-z-10" data-aos="fade-up">Snive: Where Your Digital Success Begins</h1>

                {/* Banner video */}
                <div className="mx-auto" data-aos="flip-up">
                    <video className="video 3xl:mx-auto" src={videoLink} autoPlay muted loop controls style={{ borderRadius: '10px', width: '100%' }} >
                        *Your browser does not support playing video.
                    </video>
                </div>

                <h5 className="font-medium my-16">Experience Growth and Success with Snive's AI-driven Services.</h5>

            </section>

            {/* cards section */}
            <section className="flex flex-col-reverse justify-center lg:flex-row my-0 sm:my-9 items-center lg:gap-3 mb-12 border bg-white rounded-2xl">


                <div className="lg:w-2/5 sm:p-10 p-3 h-fit m-4">
                    <h4 className="mb-10">
                        Digital Marketing Services
                    </h4>
                    <p className="my-10">
                        At Snive, we specialize in end-to-end AI-powered marketing solutions designed to fuel your business growth. By understanding your business's pain points and conducting thorough market research and competitive analysis, we craft customized strategies aligned with your brand's unique needs.
                    </p>
                    <div className="bg-violetBg text-white py-3 text-center mt-8 rounded-3xl font-semibold">Discover</div>
                </div>

                <img className="m-6 mx-auto rounded-lg w-1/2" src={card} alt="card image" />


            </section>

            {/* Key Metrics Section */}
            <section>
                <h3 className="mt-16 mb-10">
                    Key Metrics Highlights
                </h3>

                <div className="flex">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-24 2xl:gap-48 3xl:mx-auto">

                        {MetricDetails?.length && MetricDetails.map((item, index) => (

                            <div key={index} className="flex text-violet-600">
                                <img src={item?.icon} alt={`Metric logo ${index}`} className="w-[84px] h-[84px]" />
                                <div className="flex flex-col ml-6">
                                    <h5 className="font-bold"><CountingComponent start={0} end={item?.percent} duration={3.5} /></h5>
                                    {item?.detail.split(' ').map((word, index) => (
                                        <p className='font-semibold text-lg text-gray-600'>
                                            <span key={index}>
                                                {word}
                                                {index !== item?.detail.split(' ').length - 1 && <br />} {/* Words to display in each line */}
                                            </span>
                                        </p>
                                    ))}

                                </div>
                            </div>

                        ))}
                    </div>
                </div>

            </section>

            <Connect />


        </div>
    )
}

export default Home