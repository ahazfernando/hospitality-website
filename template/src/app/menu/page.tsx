import type { Metadata } from 'next';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface MenuItem {
    name: string;
    description: string;
    price: string;
    image: string;
    tags?: string[];
}

interface MenuCategory {
    [key:string]: MenuItem[];
}

const chefRecommendation: MenuItem = {
    name: 'Truffle Risotto',
    description: 'Creamy Arborio rice with black truffle, Parmesan cheese, and a hint of wild mushroom. A true delicacy.',
    price: '$32',
    image: 'https://placehold.co/400x256/c7a157/ffffff.png?text=Truffle+Risotto',
    tags: ['🌱', 'GF'],
};

const menuData: MenuCategory = {
    "Starters": [
        { name: 'Bruschetta', description: 'Grilled bread with tomatoes, garlic, basil, and olive oil.', price: '$12', image: 'https://placehold.co/400x192/e57373/ffffff.png?text=Bruschetta', tags: ['🌱', 'V'] },
        { name: 'Calamari Fritti', description: 'Lightly battered and fried squid, served with marinara sauce.', price: '$15', image: 'https://placehold.co/400x192/fff176/000000.png?text=Calamari+Fritti' },
    ],
    "Main Courses": [
        { name: 'Spaghetti Carbonara', description: 'Pasta with pancetta, eggs, pecorino cheese, and black pepper.', price: '$22', image: 'https://placehold.co/400x192/ffd54f/ffffff.png?text=Carbonara' },
        { name: 'Margherita Pizza', description: 'Classic pizza with tomato, mozzarella, and fresh basil.', price: '$18', image: 'https://placehold.co/400x192/a1887f/ffffff.png?text=Pizza', tags: ['🌱'] },
        { name: 'Grilled Salmon', description: 'Salmon fillet with roasted vegetables and lemon-dill sauce.', price: '$28', image: 'https://placehold.co/400x192/ff8a65/ffffff.png?text=Salmon', tags: ['GF'] },
    ],
    "Desserts": [
        { name: 'Tiramisu', description: 'Coffee-flavored Italian dessert.', price: '$10', image: 'https://placehold.co/400x192/795548/ffffff.png?text=Tiramisu' },
        { name: 'Panna Cotta', description: 'Sweetened cream thickened with gelatin and molded.', price: '$9', image: 'https://placehold.co/400x192/f06292/ffffff.png?text=Panna+Cotta', tags: ['GF'] },
    ],
    "Drinks": [
        { name: 'House Red Wine', description: 'A glass of our finest selection.', price: '$8', image: 'https://placehold.co/400x192/b71c1c/ffffff.png?text=Wine' },
        { name: 'Sparkling Water', description: 'Imported from the Italian Alps.', price: '$4', image: 'https://placehold.co/400x192/4fc3f7/ffffff.png?text=Water' },
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

            <section className="mb-16">
                <h2 className="text-3xl font-semibold text-center mb-6 text-yellow-800">Chef's Recommendation</h2>
                <Card className="bg-yellow-50 border-yellow-200">
                    <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-8">
                        <div className="relative w-full md:w-1/3 h-64 rounded-lg overflow-hidden">
                            <Image
                                src={chefRecommendation.image}
                                alt={chefRecommendation.name}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="md:w-2/3">
                            <div className="flex items-center gap-2">
                                <h3 className="text-2xl font-bold text-black">{chefRecommendation.name}</h3>
                                {chefRecommendation.tags?.map(tag => (
                                    <Badge key={tag} variant="outline">{tag}</Badge>
                                ))}
                            </div>
                            <p className="text-muted-foreground mt-2 mb-4">{chefRecommendation.description}</p>
                            <p className="text-2xl font-semibold text-yellow-600">{chefRecommendation.price}</p>
                        </div>
                    </div>
                </Card>
            </section>

            {Object.entries(menuData).map(([category, items]) => (
                <div key={category} className="mb-12">
                    <h2 className="text-3xl font-semibold border-b-2 border-yellow-500 pb-2 mb-6">{category}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {items.map((item) => (
                            <Card key={item.name}>
                                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="flex flex-col gap-2">
                                            {item.name}
                                            <div className="flex gap-2">
                                                {item.tags?.map(tag => (
                                                    <Badge key={tag} variant="secondary">{tag}</Badge>
                                                ))}
                                            </div>
                                        </CardTitle>
                                        <p className="text-lg font-semibold text-yellow-600 flex-shrink-0">{item.price}</p>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{item.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}