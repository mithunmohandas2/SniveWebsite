import card from "/images/card2.png"
import service1 from "/images/service1.png"
import service2 from "/images/service2.png"
import service3 from "/images/service3.png"
import service4 from "/images/service4.png"

function Services() {
    const serviceList = [
        { title: "Marketing", image: service1, service: ["SEO (Search Engine Optimization)", "Content Marketing", "Performance Marketing", "Influencer Marketing", "Brand Consultancy"] },
        { title: "Design and Development", image: service2, service: ["Web Design and Development", "App Design and Development", "Product Design", "Branding", "Video Production"] },
        { title: "E-commerce Services", image: service3, service: ["E-commerce Listing", "Shopify (E-commerce platform)"] },
        { title: "Photography Services", image: service4, service: ["Product Shoot", "Model Shoot"] }
    ]


    return (
        <div className="mx-8 sm:mx-20 pt-20">

            <img className="mx-auto rounded-2xl w-full" src={card} alt="banner" />


            <h1 className="mt-10 text-3xl sm:text-4xl lg:text-6xl">Digital Marketing Services</h1>
            <p>
                At Snive, we specialize in end-to-end AI-powered marketing solutions designed to fuel your business growth. By understanding your business's pain points and conducting thorough market research and competitive analysis, we craft customized strategies aligned with your brand's unique needs.
                <br /> <br />
                With a focus on innovation and measurable results, we're committed to propelling your business towards unprecedented success.
            </p>

            {/* services we offer sections */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl">Services We Offer</h1>

            <section>
                {/* for mobile screens */}
                {serviceList.map((item, index) => (

                    <div key={index} className="border border-gray-300 p-8 sm:p-10 flex flex-col-reverse lg:hidden shadow-lg mb-10 sm:mb-14 card">

                        <div>
                            <h4 className="my-4 text-2xl sm:text-4xl">{index + 1}. {item?.title}</h4>

                            <div className="my-6"
                                style={{ width: '100%', height: '3px', backgroundImage: 'linear-gradient(to right, rgb(185, 166, 229,1) 0%, rgb(131, 91, 220,0) 100%)' }}></div>

                            {item?.service?.length && item.service.length > 0 ?
                                item.service.map((points, index) => (
                                    <p key={index} className="mb-1"> <span className="mx-2">●</span> {points}</p>
                                ))
                                : null}
                        </div>

                        <div className="mx-auto">
                            <img src={item?.image} alt="service card" />
                        </div>
                    </div>

                ))}

                {/* for web screens */}
                {serviceList.map((item, index) => (

                    <div key={index} className="p-8 hidden lg:block mb-20">

                        <div className="flex flex-row">

                            {index % 2 !== 0 ? <div className="mx-auto">
                                <img src={item?.image} data-aos="fade-right" alt="service card" />
                            </div> : null}

                            <div className="card border border-gray-300 shadow-lg p-10 w-1/2 zoomEffect">
                                <h4 className="my-4 text-2xl sm:text-4xl">{index + 1}. {item?.title}</h4>

                                <div className="my-6"
                                    style={{ width: '100%', height: '3px', backgroundImage: 'linear-gradient(to right, rgb(185, 166, 229,1) 0%, rgb(131, 91, 220,0) 100%)' }}></div>

                                {item?.service?.length && item.service.length > 0 ?
                                    item.service.map((points, index) => (
                                        <p key={index} className="mb-1"> <span className="mx-2">●</span> {points}</p>
                                    ))
                                    : null}
                            </div>
                            {index % 2 === 0 ? <div className="mx-auto">
                                <img src={item?.image} data-aos="fade-left" alt="service card" />
                            </div> : null}
                        </div>


                    </div>

                ))}


            </section>








        </div>
    )
}

export default Services