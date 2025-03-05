import brand from "../assets/images/brand-design.webp"
import Experience from "./Experience";

const Stat = () => {

    return (
        <div className="hero bg-black">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full max-w-[1600px] lg:gap-32">
                <img
                    src={brand} alt="Brand Design"
                    className="max-w-3xl w-full" draggable="false" />
                <div className="max-w-lg">
                    <h1 className="text-5xl font-bold">We are an international design studio</h1>
                    <p className="py-6 text-xl font-bold">
                        We have extensive experience working with companies from different sectors and markets, which can bring an external and innovative perspective to the creation of our projects.
                    </p>
                    <p className="pb-6 text-xl text-neutral-500">
                        We are known for delivering high-quality, creative solutions that stand out in the market and help build a strong and memorable brand. We have access to global resources, including advanced tools and technologies, which can be applied to the development of our projects. We have connections to global markets, which can be useful for companies looking to expand their presence in other countries.
                    </p>
                    <div className="flex">
                        <Experience number={12} xp={"YEARS OF EXPERIENCE."} />
                        <Experience number={18} xp={"WE ARE PRESENT IN 18 COUNTRIES."} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stat;