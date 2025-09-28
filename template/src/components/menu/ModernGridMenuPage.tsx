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

export default function ModernGridMenuPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
            <div className="container mx-auto px-6 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-6xl font-light tracking-wider text-slate-900 mb-4">Menu</h1>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Carefully crafted dishes using the finest ingredients, presented with modern sophistication.
                    </p>
                </div>

                {/* Chef's Recommendation - Hero Style */}
                <section className="mb-20">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-light text-slate-700 tracking-wide">Chef's Recommendation</h2>
                        <Separator className="w-24 mx-auto mt-2 bg-slate-300" />
                    </div>
                    
                    <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
                            <div className="relative h-80 w-full">
                                <Image
                                    src={chefRecommendation.image}
                                    alt={chefRecommendation.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 z-20 flex items-center">
                                <div className="p-12 text-white max-w-lg">
                                    <div className="flex items-center gap-3 mb-4">
                                        <h3 className="text-4xl font-light tracking-wide">{chefRecommendation.name}</h3>
                                        <div className="flex gap-2">
                                            {chefRecommendation.tags?.map(tag => (
                                                <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-white/30">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-200 mb-6 leading-relaxed">{chefRecommendation.description}</p>
                                    <p className="text-3xl font-light text-white">{chefRecommendation.price}</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Menu Categories */}
                {Object.entries(menuData).map(([category, items]) => (
                    <section key={category} className="mb-16">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-light text-slate-800 tracking-wide mb-2">{category}</h2>
                            <Separator className="w-16 mx-auto bg-slate-300" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {items.map((item) => (
                                <Card key={item.name} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                    </div>
                                    
                                    <CardHeader className="space-y-3">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <CardTitle className="text-xl font-light text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                                                    {item.name}
                                                </CardTitle>
                                                <div className="flex gap-2">
                                                    {item.tags?.map(tag => (
                                                        <Badge key={tag} variant="outline" className="text-xs border-slate-300 text-slate-600">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-xl font-light text-slate-800 flex-shrink-0 ml-4">{item.price}</p>
                                        </div>
                                    </CardHeader>
                                    
                                    <CardContent className="pt-0">
                                        <CardDescription className="text-slate-600 leading-relaxed">
                                            {item.description}
                                        </CardDescription>
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