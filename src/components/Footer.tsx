import Snive from "/images/Snive.png"

function Footer() {
    return (
        <div className="footer p-6 sm:p-20 mt-20 text-white">

            <div className="lg:flex mb-20">

                <h2>Let’s make something <span className=" text-violetFooter">epic</span></h2>

                {/* Line design  */}
                <div style={{ position: 'relative', width: '50%', top: '34px', left: '20px' }}>
                    <span style={{ position: 'absolute', top: '-4px', left: '0', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffffff' }}> </span>
                    <div style={{ width: '100%', height: '3px', backgroundImage: 'linear-gradient(to right, rgba(232, 232, 232, 1) 0%, rgba(255, 444, 255, 0) 100%)' }}></div>
                </div>

            </div>

            <h6>Get notified when we launch</h6>
            <div className="flex">
                <input type="text" className=" rounded-lg rounded-r-none p-2 bg-transparent border my-4 w-2/3 sm:w-1/2 lg:w-1/4 " />
                <button className=" rounded-lg rounded-l-none p-2 bg-white text-violetTxt border my-4 px-10" >Subscribe</button>
            </div>

            <div className="my-10 mt-20 flex items-center justify-between">
                <p className="text-white text-xs sm:text-md">©2024 SNIVE <br />
                    Made in Bengaluru</p>
                <h6 className="text-sm sm:block hidden">Privacy Policy | Terms of use</h6>
                <img src={Snive} alt="Snive" />
            </div>

            <h6 className="text-sm text-center mb-10 sm:hidden">Privacy Policy | Terms of use</h6>

            {/* horizonal line */}
            <div className="flex">
                <div className="sm:hidden" style={{ width: '100%', height: '3px', backgroundImage: 'linear-gradient(to left, rgba(232, 232, 232, 1) 0%, rgba(255, 444, 255, 0) 100%)' }}></div>
                <div className="sm:hidden" style={{ width: '100%', height: '3px', backgroundImage: 'linear-gradient(to right, rgba(232, 232, 232, 1) 0%, rgba(255, 444, 255, 0) 100%)' }}></div>
            </div>


            <h6 className="text-center mt-10 hidden lg:block">Facebook   <span className="text-violetFooter px-8">⏺</span> Instagram <span className="text-violetFooter px-8">⏺</span> LinkedIn</h6>
            <p className="text-center mt-10 mb-0 text-white lg:hidden">Facebook   <span className="text-violetFooter px-3">⏺</span> Instagram <span className="text-violetFooter px-3">⏺</span> LinkedIn</p>

        </div>
    )
}

export default Footer