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
import { Separator } from "@/components/ui/separator";
import { chefRecommendation, menuData } from "@/components/menu/data";

export const metadata: Metadata = {
    title: 'Menu - The Golden Fork',
    description: 'Explore our delicious menu offerings.',
};

export default function DarkElegantMenuPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
            <div className="container mx-auto px-6 py-16">
                <div className="text-center mb-20">
                    <h1 className="text-7xl font-thin tracking-[0.3em] text-white mb-6">MENU</h1>
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
                        <div className="w-2 h-2 bg-gray-400 rotate-45"></div>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
                    </div>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
                        An exquisite culinary journey through carefully selected dishes, crafted with passion and precision.
                    </p>
                </div>

                {/* Chef's Recommendation - Dark Luxury */}
                <section className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-sm tracking-[0.4em] text-gray-400 uppercase mb-4">Chef's Selection</h2>
                        <Separator className="w-16 mx-auto bg-gray-600" />
                    </div>
                    
                    <Card className="bg-gradient-to-r from-gray-800/50 to-slate-800/50 border-gray-700 backdrop-blur-sm overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="relative h-80 md:h-auto">
                                <Image
                                    src={chefRecommendation.image}
                                    alt={chefRecommendation.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            
                            <div className="p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-6">
                                    <h3 className="text-4xl font-light text-white tracking-wide">{chefRecommendation.name}</h3>
                                    <div className="flex gap-2">
                                        {chefRecommendation.tags?.map(tag => (
                                            <Badge key={tag} variant="outline" className="border-gray-500 text-gray-300 bg-transparent">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                                    {chefRecommendation.description}
                                </p>
                                <p className="text-4xl font-thin text-white tracking-wide">{chefRecommendation.price}</p>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Menu Categories - Dark Cards */}
                {Object.entries(menuData).map(([category, items]) => (
                    <section key={category} className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-light tracking-[0.2em] text-white uppercase mb-4">{category}</h2>
                            <div className="flex items-center justify-center gap-4">
                                <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-500"></div>
                                <div className="w-1 h-1 bg-gray-500"></div>
                                <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-500"></div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {items.map((item) => (
                                <Card key={item.name} className="bg-gray-800/40 border-gray-700 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-500 overflow-hidden group">
                                    <div className="flex h-full">
                                        <div className="relative w-32 flex-shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                                        </div>
                                        
                                        <div className="flex-1 p-6">
                                            <CardHeader className="p-0 mb-3">
                                                <div className="flex justify-between items-start mb-2">
                                                    <CardTitle className="text-xl font-light text-white tracking-wide group-hover:text-gray-200 transition-colors">
                                                        {item.name}
                                                    </CardTitle>
                                                    <p className="text-xl font-light text-gray-300 ml-4 flex-shrink-0">{item.price}</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    {item.tags?.map(tag => (
                                                        <Badge key={tag} variant="outline" className="border-gray-600 text-gray-400 bg-transparent text-xs">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardHeader>
                                            
                                            <CardContent className="p-0">
                                                <CardDescription className="text-gray-400 leading-relaxed text-sm">
                                                    {item.description}
                                                </CardDescription>
                                            </CardContent>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}