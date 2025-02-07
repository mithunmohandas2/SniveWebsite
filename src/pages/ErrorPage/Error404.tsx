import "./errorPage.css"

function Error404() {
    return (
        <>
            <div className="c-container">
                <h1 className="status-header text-violet-500">404 Error</h1>
                <p className="status-message">The page you requested is missing...!</p>

                <picture className="background">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-triangle" width="100" height="100">
                        <path d="M 95,50 5,95 5,5 z"></path>
                    </svg>
                </picture>

                <picture className="plane">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32.001 32.001"  xmlSpace="preserve">
                        <g>
                            <path id="paperplane" d="M31.544,0.16C31.378,0.053,31.189,0,31.001,0c-0.193,0-0.387,0.055-0.555,0.168
		l-30,20c-0.309,0.205-0.479,0.566-0.439,0.936c0.038,0.369,0.278,0.688,0.623,0.824l7.824,3.131l3.679,6.438
		c0.176,0.309,0.503,0.5,0.857,0.504c0.004,0,0.007,0,0.011,0c0.351,0,0.677-0.186,0.857-0.486l2.077-3.463l9.695,3.877
		C25.749,31.977,25.874,32,26.001,32c0.17,0,0.338-0.043,0.49-0.129c0.264-0.148,0.445-0.408,0.496-0.707l5-30
		C32.052,0.771,31.878,0.377,31.544,0.16z M3.137,20.777L26.312,5.326L9.462,23.363c-0.089-0.053-0.168-0.123-0.266-0.162
		L3.137,20.777z M10.19,24.066c-0.002-0.004-0.005-0.006-0.007-0.01L29.126,3.781L12.977,28.943L10.19,24.066z M25.218,29.609
		l-8.541-3.416c-0.203-0.08-0.414-0.107-0.623-0.119L29.206,5.686L25.218,29.609z"/>
                        </g>
                    </svg>
                </picture>

                <button className="return btn bg-violetBg">Go Back</button>
            </div>
        </>
    );
}

export default Error404;
