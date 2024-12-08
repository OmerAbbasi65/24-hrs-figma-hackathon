import Image from 'next/image';
import asgaardSofa from '../../public/images/Home/sofa-set.png'
const NewArrival = () => {
    return (
        <section className="bg-peach py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
                <div className="md:w-2/3">
                    <Image
                        src={asgaardSofa}
                        alt="Asgaard Sofa"
                        width={800} // Adjust width and height as needed
                        height={600}
                        className="rounded-lg"
                    />
                </div>
                <div className="md:w-1/3 mt-8 md:mt-0 text-center">
                    <h1 className="text-2xl font-semibold mb-4">New Arrivals</h1>
                    <h2 className="text-5xl font-bold mb-6">Asgaard Sofa</h2>
                    <button className="bg-transparent hover:bg-orange-500 text-black border border-black py-4 px-16">
                        Order Now
                    </button>

                </div>
            </div>
        </section>
    );
};

export default NewArrival;