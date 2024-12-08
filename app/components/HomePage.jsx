
"use client";
import Image from "next/image";


const HomePage = () => {
    return (
        <div className="min-h-screen home-bg ">
            {/* Hero Section */}
            <section className=" gap-0 flex flex-col md:flex-row justify-center items-center px-4 md:px-24 py-12 md:-mt-[100px]">
                
  <div className="w-full md:w-1/2 hero-m1"> 
    <h1 className="rocket font-bold text-dark-900">Rocket single seater</h1>
    <div class="text-left">
  <a
    href="#"
    class="shop-btn mt-4 px-6 py-2 text-black hover:text-gray-900 inline-block relative"
  >
    Shop Now
    {/* <!-- Underline --> */}
    <div
      class="absolute left-[24px] bottom-[-2px] h-[2px] w-[124px] bg-black "
    ></div>
  </a>
</div>

    
  </div>
  <div className="w-full md:w-1/2 flex items-center hero-m2">
  <div className="background-image">
    {/* <Image
      src={WhiteSofa}
      alt="White Sofa"
      width={853}
      height={1000}
      className="transform scale-x-[-1] background-image"
      
    /> */}
    </div>
  </div>
</section>

            


        </div>
    );
};

export default HomePage;

