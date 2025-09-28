import type { Metadata } from 'next';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { chefRecommendation, menuData } from "@/components/menu/data";

export const metadata: Metadata = {
    title: 'Menu - The Golden Fork',
    description: 'Explore our delicious menu offerings.',
};

export default function MinimalistMenuPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 py-20">
                <div className="text-center mb-20">
                    <h1 className="text-7xl font-extralight tracking-[0.2em] text-gray-900 mb-6">MENU</h1>
                    <div className="w-32 h-px bg-gray-300 mx-auto"></div>
                </div>

                {/* Chef's Recommendation - Minimal Card */}
                <section className="mb-8">
                    <Card className="border-1 border-slate-200 shadow-none bg-gray-50/50">
                        <CardContent className="px-6">
                            <div className="flex flex-col lg:flex-row gap-12 items-center">
                                <div className="relative w-full lg:w-80 h-80 flex-shrink-0">
                                    <Image
                                        src={chefRecommendation.image}
                                        alt={chefRecommendation.name}
                                        fill
                                        className="object-cover rounded-sm"
                                    />
                                </div>
                                
                                <div className="flex-1 text-center lg:text-left">
                                    <p className="text-sm tracking-widest text-gray-500 mb-4 uppercase">Chef's Recommendation</p>
                                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6">
                                        <h3 className="text-4xl font-light text-gray-900 tracking-wide">{chefRecommendation.name}</h3>
                                        <div className="flex gap-2 justify-center lg:justify-start">
                                            {chefRecommendation.tags?.map(tag => (
                                                <Badge key={tag} variant="outline" className="border-gray-400 text-gray-600 rounded-none">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed text-lg mb-8 max-w-md">
                                        {chefRecommendation.description}
                                    </p>
                                    <p className="text-3xl font-light text-gray-900 tracking-wide">{chefRecommendation.price}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Menu Categories - List Style */}
                {Object.entries(menuData).map(([category, items]) => (
                    <section key={category} className="mb-10">
                        <div className="mb-12">
                            <h2 className="text-2xl font-light tracking-[0.15em] text-gray-800 mb-4 uppercase">{category}</h2>
                            <Separator className="bg-gray-200" />
                        </div>
                        
                        <div className="space-y-4">
                            {items.map((item) => (
                                <Card key={item.name} className="border-1 shadow-none hover:bg-gray-50/50 transition-colors duration-300 border-slate-300">
                                    <CardContent className="px-8">
                                        <div className="flex flex-col md:flex-row gap-8">
                                            <div className="relative w-full md:w-32 h-32 flex-shrink-0 mx-auto md:mx-0">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover rounded-sm"
                                                />
                                            </div>
                                            
                                            <div className="flex-1 text-center md:text-left">
                                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                                    <div>
                                                        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                                                            <h3 className="text-2xl font-light text-gray-900 tracking-wide">{item.name}</h3>
                                                            <div className="flex gap-2 justify-center md:justify-start">
                                                                {item.tags?.map(tag => (
                                                                    <Badge key={tag} variant="outline" className="border-gray-300 text-gray-500 text-xs rounded-none">
                                                                        {tag}
                                                                    </Badge>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <p className="text-gray-600 leading-relaxed max-w-lg">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                    <p className="text-2xl font-light text-gray-900 tracking-wide mt-4 md:mt-0 md:ml-8">
                                                        {item.price}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}