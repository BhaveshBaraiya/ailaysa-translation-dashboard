"use client";

import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="min-h-[72px] bg-white border-b px-4 md:px-6 flex flex-wrap lg:flex-nowrap items-center justify-between shrink-0 gap-4 py-4 lg:py-0">
        <div className="flex items-center gap-6 shrink-0 w-full lg:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none"><path d="M19.9776 5.3375C21.7137 6.7262 22.9443 8.27715 23.7528 10.3608C23.8033 10.4888 23.8538 10.6169 23.9058 10.7489C24.7791 13.3715 24.2196 16.2294 23.0253 18.6511C21.6951 20.8873 19.7337 22.364 17.3034 23.2328C17.1716 23.2832 17.0398 23.3336 16.904 23.3855C14.3877 24.2212 11.6639 23.7382 9.33991 22.5951C7.00524 21.2654 5.46481 19.312 4.56182 16.7968C4.51133 16.6653 4.46084 16.5337 4.40882 16.3982C3.57137 13.8872 4.05542 11.169 5.20087 8.84986C6.49379 6.58918 8.42842 5.01899 10.854 4.08169C10.9823 4.0313 11.1107 3.98092 11.2429 3.929C14.0796 2.98833 17.5566 3.6309 19.9776 5.3375Z" fill="#0A0A0A"/><path d="M15.4157 4.86585C15.2186 5.39838 14.9955 5.84165 14.666 6.30379C14.579 6.42671 14.492 6.54964 14.4024 6.6763C14.3085 6.80732 14.2146 6.93835 14.1179 7.07334C13.9172 7.35641 13.7164 7.6395 13.5157 7.92261C13.3617 8.13906 13.3617 8.13906 13.2045 8.35989C12.7325 9.02445 12.2652 9.6923 11.7977 10.36C11.6146 10.6211 11.4315 10.8821 11.2483 11.1431C10.7834 11.8058 10.3188 12.4688 9.85427 13.1318C9.58027 13.5226 9.30583 13.913 9.03135 14.3035C8.66788 14.8208 8.30691 15.3397 7.94743 15.8597C7.7758 16.1065 7.60415 16.3532 7.43251 16.5999C7.31415 16.7726 7.31415 16.7726 7.1934 16.9489C7.00571 17.2176 6.80723 17.4787 6.60666 17.7379C6.50284 17.7379 6.39902 17.7379 6.29206 17.7379C5.29274 15.3756 4.89224 12.9863 5.82015 10.517C6.92611 8.04108 8.56564 6.39447 11.0689 5.33678C12.5076 4.79148 13.897 4.83238 15.4157 4.86585Z" fill="#FBFBFB"/><path d="M16.2324 5.08782C16.4074 5.15055 16.5824 5.21328 16.7627 5.27791C16.9381 5.33821 17.1135 5.39851 17.2942 5.46064C17.6777 5.61215 18.0411 5.77133 18.4046 5.96468C18.2627 6.64593 17.9073 7.13176 17.5099 7.69142C17.4334 7.80075 17.3569 7.91007 17.2781 8.0227C17.1121 8.25973 16.9457 8.49647 16.7788 8.73293C16.5149 9.10708 16.2522 9.48203 15.9897 9.85721C15.5265 10.5191 15.0622 11.1802 14.5976 11.8412C14.2273 12.3682 13.8574 12.8955 13.4876 13.4228C13.3052 13.6828 13.1229 13.9428 12.9405 14.2027C12.4694 14.8741 11.9987 15.5457 11.5287 16.2178C10.582 17.5709 9.63426 18.922 8.65176 20.2496C8.12315 20.0253 7.82163 19.7534 7.45233 19.3175C7.35945 19.2093 7.26658 19.101 7.1709 18.9895C6.60658 18.289 6.60658 18.289 6.60805 17.7907C6.82528 17.0618 7.22996 16.5522 7.68828 15.9523C7.87676 15.6991 8.06498 15.4456 8.25297 15.192C8.39437 15.0023 8.39437 15.0023 8.53863 14.8087C8.92615 14.2824 9.29647 13.7453 9.6644 13.2052C10.3979 12.1329 11.1405 11.0673 11.8887 10.0051C12.3776 9.3108 12.8633 8.61467 13.3438 7.91463C13.4422 7.77212 13.5406 7.62961 13.642 7.48279C13.8301 7.21006 14.0174 6.93671 14.2037 6.66264C15.3713 4.97633 15.3713 4.97633 16.2324 5.08782Z" fill="#070707"/><path d="M18.5617 6.1221C19.0203 6.2907 19.3133 6.40122 19.6628 6.75001C19.6047 7.24299 19.4006 7.57894 19.1203 7.98129C18.9997 8.1558 18.9997 8.1558 18.8767 8.33384C18.7451 8.52114 18.7451 8.52114 18.6109 8.71222C18.5196 8.84366 18.4284 8.9751 18.3343 9.11052C18.0441 9.52789 17.7525 9.94426 17.4606 10.3605C17.2779 10.6219 17.0952 10.8833 16.9125 11.1447C16.4548 11.7989 15.9957 12.4521 15.5362 13.105C15.1676 13.629 14.7997 14.1535 14.4319 14.6781C14.2495 14.9382 14.067 15.1983 13.8844 15.4584C13.4107 16.1332 12.938 16.8086 12.4668 17.4851C12.3696 17.6245 12.2724 17.7638 12.1722 17.9073C11.9884 18.1708 11.8048 18.4344 11.6216 18.6983C11.0256 19.5516 10.4 20.3767 9.75274 21.1919C9.29417 21.0233 9.00112 20.9127 8.65161 20.564C8.70978 20.071 8.91391 19.735 9.19419 19.3327C9.27457 19.2163 9.35496 19.1 9.43778 18.9801C9.52549 18.8553 9.61321 18.7304 9.70358 18.6018C9.79484 18.4703 9.8861 18.3389 9.98013 18.2034C10.2704 17.7861 10.562 17.3697 10.8539 16.9535C11.0366 16.6921 11.2193 16.4307 11.402 16.1692C11.8597 15.5151 12.3188 14.8619 12.7783 14.2089C13.1469 13.6849 13.5148 13.1604 13.8826 12.6359C14.065 12.3757 14.2475 12.1156 14.4301 11.8556C14.9037 11.1808 15.3764 10.5053 15.8476 9.82884C15.9449 9.68952 16.0421 9.5502 16.1423 9.40666C16.3261 9.1432 16.5096 8.87955 16.6928 8.61564C17.2888 7.76242 17.9145 6.93725 18.5617 6.1221Z" fill="#F8F8F8"/><path d="M21.708 9.5752C21.8118 9.5752 21.9156 9.5752 22.0226 9.5752C22.364 10.1856 22.563 10.6015 22.4945 11.3019C22.3342 11.6106 22.3342 11.6106 22.108 11.9084C22.0247 12.0204 21.9414 12.1323 21.8555 12.2477C21.7646 12.3662 21.6738 12.4847 21.5802 12.6068C21.3903 12.8615 21.2006 13.1164 21.0112 13.3715C20.9159 13.4989 20.8207 13.6264 20.7225 13.7577C20.3337 14.2845 19.9627 14.8226 19.5942 15.3637C18.8532 16.447 18.1071 17.5267 17.3454 18.5956C16.8847 19.2436 16.4401 19.8942 16.0236 20.5715C14.8955 22.3656 14.8955 22.3656 14.0923 22.6122C13.6105 22.6139 13.2056 22.5729 12.7417 22.4473C13.4685 21.2499 14.2696 20.119 15.095 18.9883C15.6555 18.2191 16.2056 17.4442 16.7431 16.6588C17.5751 15.4432 18.4186 14.2361 19.2667 13.0317C19.6366 12.5065 20.0038 11.9794 20.3691 11.4509C20.5401 11.2051 20.7111 10.9592 20.8821 10.7133C20.961 10.5982 21.0399 10.483 21.1211 10.3644C21.3089 10.0957 21.5074 9.8345 21.708 9.5752Z" fill="#F7F7F7"/><path d="M22.1796 16.9531C22.2315 17.0567 22.2835 17.1603 22.3369 17.2671C21.7956 18.3077 21.0804 19.2291 20.292 20.0927C20.292 19.5457 20.3915 19.4253 20.7049 18.992C20.7901 18.8731 20.8752 18.7542 20.963 18.6317C21.053 18.5084 21.1431 18.3851 21.2358 18.258C21.3258 18.1328 21.4159 18.0077 21.5086 17.8787C21.7313 17.5695 21.955 17.261 22.1796 16.9531Z" fill="#C2C2C2"/></svg>
            <h1 className="font-inter font-bold text-[21.99px] text-[#000000] leading-none whitespace-nowrap">
              Ailaysa Tiger
            </h1>
          </div>
          <button 
            className="text-gray-800 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          <button className="text-gray-800 hidden md:block">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-6 shrink-0 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
          <span className="font-roboto font-normal text-[18px] text-[#B2B2B2] leading-none whitespace-nowrap">
            Untitled project
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none"><path d="M17.737 6.04C17.114 2.59 14.337 0 11 0 8.351 0 6.05 1.64 4.904 4.04 2.145 4.36 0 6.91 0 10c0 3.31 2.466 6 5.5 6h11.917C19.947 16 22 13.76 22 11c0-2.64-1.879-4.78-4.263-4.96ZM17.417 14H5.5C3.474 14 1.833 12.21 1.833 10c0-2.05 1.403-3.76 3.264-3.97l.981-.11.458-.95C7.407 3.14 9.112 2 11 2c2.402 0 4.473 1.86 4.941 4.43l.275 1.5 1.402.11c1.43.1 2.549 1.41 2.549 2.96 0 1.65-1.238 3-2.75 3Zm-8.25-3.82L7.25 8.09 5.958 9.5 9.167 13l5.509-6.01-1.293-1.41-4.216 4.6Z" fill="#5D5D5D"/></svg>
          <div className="flex items-center gap-2 shrink-0">
            <span className="font-roboto font-medium text-[12px] bg-[#E0F0FF] text-[#0074D3] px-3 py-1.5 rounded">
              English
            </span>
            <span className="text-[#0074D3] text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 10 6" fill="none"><path d="M6.589 2.25H0v1.5h6.589V6L9.582 3 6.589 0v2.25Z" fill="#0078D4"/></svg></span>
            <span className="font-roboto font-medium text-[12px] bg-[#E0F0FF] text-[#0074D3] px-3 py-1.5 rounded">
              Tamil
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 shrink-0 w-full lg:w-auto justify-end">
          <button className="w-10 h-10 flex items-center justify-center border border-[#BCBFC3] rounded-lg">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
          <div className="flex items-center border border-[#D6D6D6] rounded-full p-1 pl-2 pr-1 gap-2">
            <div className="flex -space-x-2">
               <div className="w-8 h-8 rounded-full bg-[#008A5E] text-white flex items-center justify-center text-xs font-bold z-10">
                 4+
               </div>
               <div className="w-8 h-8 rounded-full bg-white border border-dashed border-gray-400 flex items-center justify-center text-gray-500 text-xs">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                 </svg>
               </div>
            </div>
            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b p-4 flex flex-col gap-4">
          <span className="font-roboto font-normal text-[16px] text-[#B2B2B2]">Untitled project</span>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <span className="font-roboto font-medium text-[12px] bg-[#E0F0FF] text-[#0074D3] px-3 py-1.5 rounded whitespace-nowrap">English</span>
            <span className="text-[#0074D3]"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M6.589 2.25H0v1.5h6.589V6L9.582 3 6.589 0v2.25Z" fill="#0078D4"/></svg></span>
            <span className="font-roboto font-medium text-[12px] bg-[#E0F0FF] text-[#0074D3] px-3 py-1.5 rounded whitespace-nowrap">Tamil</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex-1 h-10 flex items-center justify-center border border-[#BCBFC3] rounded-lg">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </button>
            <div className="flex items-center border border-[#D6D6D6] rounded-full p-1 pl-2 pr-1 gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#008A5E] text-white flex items-center justify-center text-xs font-bold z-10">4+</div>
                <div className="w-8 h-8 rounded-full bg-white border border-dashed border-gray-400 flex items-center justify-center text-gray-500 text-xs">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                </div>
              </div>
              <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header