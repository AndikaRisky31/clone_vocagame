import { useState } from "react";

const Banner = () => {
    const [showBanner, setShowBanner] = useState(true);

    // Handler function to hide the banner
    const handleCloseBanner = () => {
        setShowBanner(false);
    };
    const handleDownloadClick = () => {
        window.location.href = "https://play.google.com/store/apps/details?id=com.vocagame.topup&hl=id-ID";
    };

    return (
        showBanner ? (
            <div className=" bg-primary-400">
                <img
                    src="https://vocagame.com/banners/bg-banner-app.png"
                    alt="banner"
                    className="absolute z-0 h-full w-full object-cover lg:h-20"
                />
                <div className="relative cursor-pointer transition-all duration-500 ease-in-out mx-auto flex h-full max-w-7xl justify-between gap-1 text-white md:h-20">
                    <div className="flex w-full flex-row justify-center py-2 pl-4 md:space-y-1 md:py-4 md:pl-6 lg:flex-col lg:space-y-2 lg:py-2 lg:pl-8">
                        <h1 className="text-xs font-bold md:text-sm xl:text-base">
                            Segera download aplikasi VocaGame dan dapatkan promo menarik.
                        </h1>
                        <div className="flex w-3/5 items-center justify-end md:w-full md:justify-start lg:gap-2">
                            <p className="hidden text-xs font-medium lg:block lg:text-sm">
                                Top-up game dalam genggamanmu.
                            </p>
                            <button className="rounded-full bg-white px-2 py-0.5 text-xs font-bold text-primary-400 md:px-3 md:py-1 md:text-sm" onClick={handleDownloadClick}>
                                Download Sekarang
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-end gap-1 justify-self-end pr-1 md:w-full md:pr-8">
                        <img
                            className="hidden h-full w-auto md:block xl:hidden"
                            src="https://vocagame.com/banners/banner-appvoca-mobile.webp"
                            alt="vocagame"
                        />
                        <img
                            className="hidden h-full w-auto xl:block"
                            src="https://vocagame.com/banners/banner-appvoca.webp"
                            alt="vocagame"
                        />
                        <button onClick={handleCloseBanner}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-5 w-5 text-white"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        ) : <></>
    );
};

export default Banner;