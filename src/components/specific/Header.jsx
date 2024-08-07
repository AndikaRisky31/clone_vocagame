import React from "react";
import SearchBar from "../common/SearchBar";

const Header = () =>{
    return(
        <>
        <SearchBar/>
            <div className="pt-2">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="hidden items-center justify-between pb-4 lg:flex">
                        <div className="grid grid-flow-col gap-4 ">
                            <a className="flex items-center whitespace-nowrap px-1 pt-1 text-sm font-normal text-gray-500 hover:text-gray-700" href="/">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l-2 0l9 -9l9 9l-2 0"></path><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path></svg>Beranda</a>
                            <a className="flex items-center whitespace-nowrap px-1 pt-1 text-sm font-normal text-gray-500 hover:text-gray-700" href="/all">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z"></path><path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232"></path><path d="M8 9v2"></path><path d="M7 10h2"></path><path d="M14 10h2"></path></svg>Semua Game</a>
                            <a className="flex items-center whitespace-nowrap px-1 pt-1 text-sm font-normal text-gray-500 hover:text-gray-700" href="/history">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg>Lacak Pesanan</a>
                            <a className="flex items-center whitespace-nowrap px-1 pt-1 text-sm font-normal text-gray-500 hover:text-gray-700" href="/contact">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path><path d="M15 7a2 2 0 0 1 2 2"></path><path d="M15 3a6 6 0 0 1 6 6"></path></svg>Hubungi Kami</a>
                            <a className="flex items-center whitespace-nowrap px-1 pt-1 text-sm font-normal text-gray-500 hover:text-gray-700" href="/about">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path></svg>Tentang Kami</a>
                            <a className="flex items-center whitespace-nowrap px-1 pt-1 text-sm font-normal text-gray-500 hover:text-gray-700" href="https://bisnis.vocagame.com">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path><path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"></path><path d="M12 17v1m0 -8v1"></path></svg>Join Reseller</a>
                            <a className="flex items-center whitespace-nowrap px-1 pt-1 text-sm font-normal text-gray-500 hover:text-gray-700" href="/tournament">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path><path d="M15 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path><path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1"></path><path d="M12 9l0 3"></path></svg>Turnamen</a>
                            <a className="flex items-center whitespace-nowrap px-1 pt-1 text-sm font-normal text-gray-500 hover:text-gray-700" href="/esportstudent">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"></path><path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889"></path><path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889"></path></svg>E-sport Student</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;