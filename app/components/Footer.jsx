import React from 'react'

const Footer = () => {
    return (
        <footer class="text-gray-600 body-font">
            <div class="container px-5 pt-24 pb-0 mx-auto" bis_skin_checked="1">
                <div class="flex flex-wrap md:text-left text-center order-first" bis_skin_checked="1">
                    <div class="flex items-center lg:w-1/3 md:w-1/2 w-full px-9 " bis_skin_checked="1">
                        <nav class="list-none mb-10">
                            <li>
                                <a class="sf-gray ">400 University Drive Suite 200 Coral Gables,
                                </a>
                            </li>
                            <li>
                                <a class="sf-gray ">FL 33134 USA
                                </a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/5 md:w-1/2 w-full px-8" bis_skin_checked="1">
                        <h2 class="leading-[80px] title-font font-semibold sf-gray tracking-widest text-sm mb-3">Links</h2>
                        <nav class="list-none mb-10 ">
                            <li>
                                <a class="leading-[75px] text-black font-semibold hover:text-gray-800 cursor-pointer">Home</a>
                            </li>
                            <li>
                                <a class="leading-[75px] text-black font-semibold hover:text-gray-800 cursor-pointer">Shop</a>
                            </li>
                            <li>
                                <a class="leading-[75px] text-black font-semibold hover:text-gray-800 cursor-pointer">About</a>
                            </li>
                            <li>
                                <a class="leading-[75px] text-black font-semibold hover:text-gray-800 cursor-pointer">Contact</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/5 md:w-1/2 w-full px-4" bis_skin_checked="1">
                        <h2 class="leading-[80px] title-font font-semibold sf-gray tracking-widest text-sm mb-3">Help</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="leading-[75px] text-gray-600 font-semibold hover:text-gray-800 cursor-pointer">Payment Options</a>
                            </li>
                            <li>
                                <a class="leading-[75px] text-gray-600 font-semibold hover:text-gray-800 cursor-pointer">Returns</a>
                            </li>
                            <li>
                                <a class="leading-[75px] text-gray-600 font-semibold hover:text-gray-800 cursor-pointer">Privacy Policies</a>
                            </li>

                        </nav>
                    </div>
                    <div class="lg:w-1/5 ml-6 md:w-1/2 w-full px-0" bis_skin_checked="1">
                        <h2 class="leading-[80px] title-font font-semibold sf-gray tracking-widest text-sm mb-3">Newsletter</h2>
                        <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start" bis_skin_checked="1">
                            <div class="relative inline-flex w-full sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2" bis_skin_checked="1">
                                {/* <label for=" footer-field" class="leading-7 text-sm text-gray-600"></label> */}
                                <input
  type="text"
  id="footer-field"
  placeholder="Enter Your Email"
  name="footer-field"
  class="leading-[75px] w-full underline decoration-skip-ink-none text-[14px] outline-none pb-4 px-0 transition-colors duration-200 ease-in-out sf-gray  underline-offset-[5px]"
/>


                              
                                

                            
                            <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-black ml-2 bg-none border-0 pb-4 px-0 focus:outline-none hover:text-indigo-600 underline decoration-skip-ink-none text-[14px] leading-[75px]  underline-offset-[5px] font-semibold ml-0 cursor-pointer">SUBSCRIBE</button>
                            </div>
                            </div>

                    </div>
                </div>
            </div>
            <hr class='mx-[64px] ' ></hr>
            <div bis_skin_checked="1">
  <div class="mt-0 mb-0 container px-5 py-6 mx-auto flex flex-col sm:flex-row items-center ml:justify-between sm:justify-center" bis_skin_checked="1">
    <div class="flex items-center w-full">
     
      

   
      <a
        class="oc md:ml-4 text-black hover:text-gray-800 text-base font-normal leading-6 sm:text-center ml-[41px]"
      >
        2022 Meubel House. All rights reserved
      </a>

     
    </div>

    {/* <!-- Social Media Icons --> */}

    {/* <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="text-gray-500">
        <svg
          fill="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg
          fill="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path
            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
          ></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg
          fill="currentColor"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0"
          class="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          ></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span> */}
  </div>
</div>

        </footer>
    )
}

export default Footer