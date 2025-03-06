import { FaWhatsapp } from "react-icons/fa";
import people from "/images/people.webp";

const Contact = () => {
    return (
        <div className=" max-w-[1600px] mx-auto my-20 px-5">
            <div className="hero bg-base-200 rounded-2xl py-5 lg:py-20" data-theme="light">
                <div className="hero-content flex-col lg:flex-row gap-10 lg:gap-20">
                    <img
                        src={people}
                        className="max-w-sm" alt="people" draggable="false" />
                    <div className="max-w-xl">
                        <h1 className="text-5xl font-bold">Count on the help of our expert team.</h1>
                        <p className="py-6">
                            We serve companies in 18 countries and this makes us unique in understanding how international projects work.
                        </p>
                        <a href="#"> <button className="btn bg-main text-black rounded-full hover:bg-black hover:text-white">
                            <FaWhatsapp className="size-5" />
                            Our Whatsapp
                        </button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;