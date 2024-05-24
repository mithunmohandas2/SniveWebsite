import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fullLogo from "/images/snive_logo_full.png"

const Navbar = () => {
    const [selected, setSelected] = useState("Home")
    const navElements = ["Home", "Work", "Services", "About", "Contact"]
    const Navigate = useNavigate()

    useEffect(() => {
        const path = location.pathname
        if (!path?.length) return
        const route = path.slice(path.indexOf('/') + 1, path.length)   //extracting route
        setSelected(route?.length? route : "Home");
        window.scrollTo(0, 0);
      })
    //   mx-8 sm:mx-20
    return (   
        <>
            <nav className="py-6 sm:py-12  mx-8 sm:mx-20 flex items-center justify-between">
                {/* Logo and company name on the left */}
                <div className="flex items-center cursor-pointer" onClick={() => { setSelected("Home"); Navigate('/') }}>
                    <img src={fullLogo} alt="Logo" className="w-32 px-4 sm:w-60 mr-2" />
                </div>


                {/* Button on the right */}
                <button className="sm:px-10 px-4 py-2 sm:py-3 text-violetTxt border border-violetBg rounded-3xl text-sm xl:border-[2px] 2xl:border-[2.5px]"
                    onClick={() => { setSelected(""); Navigate('/BookDemo') }} >Book a Demo</button>
            </nav>


            {/* Nav elements in the web version */}
            <div className="text-sm hidden lg:relative -mt-28 pt-2 lg:flex lg:justify-center lg:mb-20">
                <ul className="flex items-center rounded-full bg-white bg-opacity-90 border border-gray-300 cursor-pointer p-2 fixed z-40">

                    {navElements.map((page, index) => (

                        <li key={index} className={index === 0 ? "me-2" : index === navElements?.length - 1 ? "ms-4" : "mx-2"}>
                            <div className={selected === page ? "text-white hover:text-slate-100 bg-violetBg rounded-full px-4 py-2" :
                                index === 0 ? "text-gray-800 hover:text-gray-600 ms-4" :
                                    index === navElements?.length - 1 ? "text-gray-800 hover:text-gray-600 me-4" :
                                        "text-gray-800 hover:text-gray-600 mx-2 py-2"
                            } onClick={() => { setSelected(page); Navigate(`/${page}`) }}>{page}</div>
                        </li>

                    ))}
                </ul>
            </div>

            {/* Nav elements in the mobile version */}
            <div className="text-xs lg:hidden fixed bottom-10 w-full flex justify-center">
                <ul className="flex items-center rounded-full bg-white bg-opacity-90 border border-gray-300 cursor-pointer ps-4 p-1 z-40">
                    {navElements.map((page, index) => (
                        <li key={index} className={index === 0 ? "" : index === navElements?.length - 1 ? "ms-1 pe-1" : "px-1"}>
                            <div className={selected === page ? "text-white hover:text-slate-100 bg-violetBg rounded-full px-4 py-2" :
                                index === 0 ? "text-gray-800 hover:text-gray-600" :
                                    index === navElements?.length - 1 ? "text-gray-800 hover:text-gray-600 me-4" :
                                        "text-gray-800 hover:text-gray-600 px-1 py-2"
                            } onClick={() => { setSelected(page); Navigate(`/${page}`) }}>{page}</div>
                        </li>
                    ))}
                </ul>
            </div>


        </>
    );
};

export default Navbar;
