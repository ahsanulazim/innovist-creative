import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Card = ({ item }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoading(false);
        }, 2000);

        return () => clearInterval(interval); // Clean up interval
    }, []);

    return (
        <>
            {loading ? <div className="skeleton h-[300px] md:h-[450px] max-w-3xl w-full rounded-4xl"></div> : item ? (
                <div className="max-w-3xl rounded-4xl overflow-hidden relative group">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="h-[300px] md:h-[450px] max-w-3xl w-full group-hover:scale-105 group-active:scale-105 transition duration-700 ease-in-out object-cover"
                    />
                    <div className="bg-black h-full opacity-0 group-hover:opacity-50 group-active:opacity-50 absolute inset-0 transition duration-700 ease-in-out"></div>
                    <div className="absolute inset-0 p-15 flex flex-col justify-between opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-700 ease-in-out">
                        <div>
                            <h2 className="text-3xl font-bold">{item.name}</h2>
                            <h4>{item.category}</h4>
                        </div>
                        <a href={item.link || "#"} target="_blank" rel="noopener noreferrer">
                            <button className="flex items-center gap-2">
                                <span className="link">I want to see the complete project</span>
                                <FaArrowRightLong />
                            </button>
                        </a>
                    </div>
                </div>
            ) : (
                <div>No item Prop found</div>
            )}
        </>
    );
};

export default Card;
