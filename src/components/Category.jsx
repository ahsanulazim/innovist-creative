import { useEffect, useState } from 'react';
import Card from './Card';
import './category.css'

const Category = () => {

    const [data, setData] = useState({ categories: {} });
    const [selectedCategory, setSelectedCategory] = useState('Visual Identity');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}categories.json`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                return response.json();
            })
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const categories = Object.keys(data.categories);
    const items = selectedCategory === 'All'
        ? categories.flatMap(category => data.categories[category]?.map(item => ({ ...item, category })) || [])
        : data.categories[selectedCategory]?.map(item => ({ ...item, category: selectedCategory })) || [];

    if (loading) {
        return <div className="text-center py-10">Looking for projects...</div>;
    }

    if (error) {
        return <div className="text-center py-10 text-red-500">Nothing Found on Server!</div>;
    }

    if (categories.length === 0) {
        return <div className="text-center py-10">No categories found.</div>;
    }
    return (
        <div className="px-4 py-10 max-w-[1600px] mx-auto">
            <h1 className='text-4xl text-center font-bold mb-10'>Studio Projects</h1>
            <div className="flex gap-4 mb-10 justify-start sm:justify-center overflow-x-scroll scrollbar">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`btn btn-outline rounded-full ${selectedCategory === category ? 'bg-main border-0 text-black' : ''}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>


        </div>
    );
}

export default Category;