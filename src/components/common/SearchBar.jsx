import Banner from "./Banner";

const SearchBar = () => {
    return (
        <>
            <div className="sticky top-0 z-50 w-full border-b bg-white">
                <Banner/>
                <div className="mx-auto max-w-7xl px-4 sm:items-center sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between py-1.5 lg:gap-4 lg:py-2">
                    <div className="flex md:static md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                    <div className="flex w-14 shrink-0 cursor-pointer items-center md:w-16">
                        <img
                        src="https://vocagame.com/icon/vocagame.gif"
                        alt="vocagame"
                        className="h-full w-full"
                        />
                    </div>
                    </div>
                    <div className="mx-auto hidden w-full sm:block md:px-8 lg:px-0 xl:col-span-6 xl:w-full">
                    <div className="flex items-center md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                        <form className="w-full">
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path>
                            </svg>
                            </div>
                            <input
                            id="search"
                            name="keyword"
                            className="block w-full rounded-full border-none bg-secondary-50 py-2 pl-12 pr-3 text-xs placeholder:text-gray-500 focus:border-primary-400 focus:text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary-400 focus:placeholder:text-gray-400 sm:py-2 sm:text-sm"
                            placeholder="Cari atau masukan nama game ..."
                            type="search"
                            autoComplete="off"
                            />
                        </div>
                        </form>
                    </div>
                    </div>
                    <div className="flex items-center space-x-5 lg:hidden">
                    <div className="h-6 text-gray-500 sm:hidden">
                        <button>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            className="h-6 w-6"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path>
                        </svg>
                        </button>
                    </div>
                    <button type="button" className="text-gray-500 lg:hidden">
                        <span className="sr-only">Open sidebar</span>
                        <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 rotate-180"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M2 5.99519C2 5.44556 2.44556 5 2.99519 5H11.0048C11.5544 5 12 5.44556 12 5.99519C12 6.54482 11.5544 6.99039 11.0048 6.99039H2.99519C2.44556 6.99039 2 6.54482 2 5.99519Z"
                            fill="currentColor"
                        ></path>
                        <path
                            d="M2 11.9998C2 11.4501 2.44556 11.0046 2.99519 11.0046H21.0048C21.5544 11.0046 22 11.4501 22 11.9998C22 12.5494 21.5544 12.9949 21.0048 12.9949H2.99519C2.44556 12.9949 2 12.5494 2 11.9998Z"
                            fill="currentColor"
                        ></path>
                        <path
                            d="M2.99519 17.0096C2.44556 17.0096 2 17.4552 2 18.0048C2 18.5544 2.44556 19 2.99519 19H15.0048C15.5544 19 16 18.5544 16 18.0048C16 17.4552 15.5544 17.0096 15.0048 17.0096H2.99519Z"
                            fill="currentColor"
                        ></path>
                        </svg>
                    </button>
                    </div>
                    <div className="w-96 hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                    <div className="inline-flex" role="group">
                        <button
                        type="button"
                        className="rounded-l-full border border-transparent bg-primary-50 px-6 py-3 text-sm font-semibold leading-4 text-primary-400 hover:bg-primary-100 focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
                        >
                        Daftar Sekarang
                        </button>
                        <button
                        type="button"
                        className="rounded-r-full border border-transparent bg-primary-50 px-6 py-3 text-sm font-semibold leading-4 text-primary-400 hover:bg-primary-100 focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
                        >
                        Masuk
                        </button>
                    </div>
                    </div>
                </div>
                <div className="hidden sm:block mx-auto w-full md:px-8 lg:px-0 xl:col-span-6 xl:w-full"></div>
                </div>
            </div>
        </>

    );
  };
  
  export default SearchBar;
  