import { useEffect, useState } from 'react';
import workBanner from '/images/work-banner.png';
import feedback1 from '/images/feedback1.png'
import arrow from '/icons/right-arrow.png'
import Connect from '../components/Connect';

function WorkPage() {
    const [productList, setProductList] = useState<string[]>([])
    const projectImagesLink = '/projects/'
    const totalImages = 16;

    const feedbacks = [
        { title: "Organic Marketing Essential ", image: feedback1 },
        { title: "Lorem ipsum dolor sit amet consectetur.", image: feedback1 },
        { title: "Lorem ipsum dolor sit amet consectetur.", image: feedback1 },
        { title: "Lorem ipsum dolor sit amet consectetur.", image: feedback1 },
        { title: "Lorem ipsum dolor sit amet consectetur.", image: feedback1 },
        { title: "Lorem ipsum dolor sit amet consectetur.", image: feedback1 }
    ]

    useEffect(() => {
        const projectImages: string[] = [];
        for (let i = 0; i < totalImages; ++i) {
            let imgPath = `${projectImagesLink}${i + 1}.png`;
            projectImages.push(imgPath);
        }
        setProductList(projectImages);

    }, [])

    return (

        <div className="mx-8 pt-20 sm:mx-20">

            <img className="mx-auto rounded-2xl w-full" src={workBanner} alt="banner" />
            <h1 className='relative z-10 -mt-40 px-10 text-white text-2xl sm:text-4xl lg:text-6xl'>From Ideation to Execution</h1>

            <h1 className="text-2xl sm:text-4xl lg:text-6xl" data-aos="zoom-in">Explore Our Dynamic Projects</h1>

            <div className="flex flex-wrap justify-center">
                {/* Loop through the images array and create a div for each image */}
                {productList?.length && productList.map((image, index) => (
                    <div className="m-4">
                        <img key={index} data-aos="fade-left" data-aos-delay={300 + (index * 200)} src={image} className='max-h-[235px] sm:max-h-[369px]' alt="product image" />
                    </div>
                ))}

            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-6xl" id="trigger-right">Our Clients' Success Stories</h1>

            <div className="flex overflow-auto space-x-8 flex-row">
                {feedbacks.map((feedback, index) => (
                    <div key={index} className="w-[296px]" data-aos="fade-left" data-aos-delay={300 + (index * 300)} data-aos-anchor="#trigger-right" data-aos-anchor-placement="top-center" >
                        <div className="card border border-gray-300 shadow-lg w-auto">
                            <img src={feedback?.image} alt="service card" />

                            <h6 className="my-4 text-lg px-4 pt-2">{feedback?.title}</h6>
                            {/* <h6 className='mx-28'>.</h6> */}

                            <div className="mx-4" style={{ width: '100%', height: '3px', backgroundImage: 'linear-gradient(to right, rgb(185, 166, 229,1) 0%, rgb(131, 91, 220,0) 100%)' }}></div>

                            <div className="flex justify-end p-4">
                                <img className='ms-56' src={arrow} alt="arrow" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Connect />
        </div>
    )
}

export default WorkPage