import type { Metadata } from 'next';
import Image from 'next/image';

interface MenuItem {
    name: string;
    description: string;
    price: string;
    tags?: string[];
}

interface MenuCategory {
    [key:string]: MenuItem[];
}

// Chef's special dish
const chefRecommendation: MenuItem = {
    name: 'Truffle Risotto',
    description: 'Creamy Arborio rice with black truffle, Parmesan cheese, and a hint of wild mushroom. A true delicacy.',
    price: '$32',
};

// data
const menuData: MenuCategory = {
    "Starters": [
        { name: 'Bruschetta', description: 'Grilled bread with tomatoes, garlic, basil, and olive oil.', price: '$12', tags: ['🌱', 'V'] },
        { name: 'Calamari Fritti', description: 'Lightly battered and fried squid, served with marinara sauce.', price: '$15' },
    ],
    "Main Courses": [
        { name: 'Spaghetti Carbonara', description: 'Pasta with pancetta, eggs, pecorino cheese, and black pepper.', price: '$22' },
        { name: 'Margherita Pizza', description: 'Classic pizza with tomato, mozzarella, and fresh basil.', price: '$18', tags: ['🌱'] },
        { name: 'Grilled Salmon', description: 'Salmon fillet with roasted vegetables and lemon-dill sauce.', price: '$28', tags: ['GF'] },
    ],
    "Desserts": [
        { name: 'Tiramisu', description: 'Coffee-flavored Italian dessert.', price: '$10' },
        { name: 'Panna Cotta', description: 'Sweetened cream thickened with gelatin and molded.', price: '$9', tags: ['GF'] },
    ],
    "Drinks": [
        { name: 'House Red Wine', description: 'A glass of our finest selection.', price: '$8' },
        { name: 'Sparkling Water', description: 'Imported from the Italian Alps.', price: '$4' },
    ],
};

export const metadata: Metadata = {
    title: 'Menu - The Golden Fork',
    description: 'Explore our delicious menu offerings.',
};

export default function MenuPage() {
    return (
        <div className="container mx-auto p-6 my-12">
            <h1 className="text-5xl font-bold text-center mb-10">Our Menu</h1>

            {/* Chef's Recommendation */}
            <section className="mb-16 bg-yellow-50 p-8 rounded-lg shadow-md border border-yellow-200">
                <h2 className="text-3xl font-semibold text-center mb-6 text-yellow-800">Chef's Recommendation</h2>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative w-full md:w-1/3 h-64 rounded-lg overflow-hidden">
                        <Image
                            src="https://placehold.co/400x256/c7a157/ffffff.png?text=Truffle+Risotto"
                            alt={chefRecommendation.name}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="md:w-2/3">
                        <div className="flex items-center gap-4 mb-2">
                            <h3 className="text-2xl font-bold text-black">{chefRecommendation.name}</h3>
                            {chefRecommendation.tags?.map(tag => (
                                <span key={tag} className="text-xl">{tag}</span>
                            ))}
                        </div>
                        <p className="text-gray-600 mb-4">{chefRecommendation.description}</p>
                        <p className="text-2xl font-semibold text-yellow-600">{chefRecommendation.price}</p>
                    </div>
                </div>
            </section>

            {/* Full Menu */}
            {Object.entries(menuData).map(([category, items]) => (
                <div key={category} className="mb-12">
                    <h2 className="text-3xl font-semibold border-b-2 border-yellow-500 pb-2 mb-6">{category}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {items.map((item) => (
                            <div key={item.name} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold flex items-center gap-2 text-black">
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-600 mt-2">{item.description}</p>
                                    </div>
                                    <p className="text-lg font-semibold text-yellow-600 flex-shrink-0 ml-4">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}