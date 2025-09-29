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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { chefRecommendation, menuData } from "@/components/menu/data";

export const metadata: Metadata = {
    title: 'Menu - The Golden Fork',
    description: 'Explore our delicious menu offerings.',
};

export default function ModernGridMenuPage() {
    const chefRecommendations = [chefRecommendation];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
            <div className="container mx-auto px-6 py-16">
                {/* Header - Full 12 columns */}
                <div className="grid grid-cols-12 gap-6 mb-16">
                    <div className="col-span-12 text-center">
                        <div className="inline-flex items-center gap-4 mb-8">
                            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-stone-400"></div>
                            <span className="text-stone-600 font-medium text-sm uppercase tracking-[0.2em]">Exotic Taste</span>
                            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-stone-400"></div>
                        </div>
                        <h1 className="text-6xl font-light tracking-wider text-slate-900 mb-4">Menu</h1>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Carefully crafted dishes using the finest ingredients, presented with modern sophistication.
                        </p>
                    </div>
                </div>

                {/* Chef's Recommendation - Carousel Style */}
                <section className="mb-20">
                    <div className="grid grid-cols-12 gap-6 mb-8">
                        <div className="col-span-12 text-center">
                            <h2 className="text-2xl font-light text-slate-700 tracking-wide">Chef's Recommendation</h2>
                            <Separator className="w-24 mx-auto mt-2 bg-slate-300" />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12">
                            <Carousel className="w-full">
                                <CarouselContent>
                                    {chefRecommendations.map((item, index) => (
                                        <CarouselItem key={index}>
                                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
                                                <div className="relative h-96 w-full">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                {/* Badges - Top Left */}
                                                <div className="absolute top-0 left-0 z-20 p-8">
                                                    <div className="flex gap-2">
                                                        {item.tags?.map(tag => (
                                                            <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                                {/* Text Content - Bottom Left */}
                                                <div className="absolute bottom-0 left-0 z-20 p-12 text-white max-w-lg">
                                                    <h3 className="text-4xl font-light tracking-wide mb-3">{item.name}</h3>
                                                    <p className="text-gray-200 mb-4 leading-relaxed">{item.description}</p>
                                                    <p className="text-3xl font-light text-white font-bold">{item.price}</p>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                        
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="left-4 bg-white/80 backdrop-blur-sm border-white/60 hover:bg-white" />
                                <CarouselNext className="right-4 bg-white/80 backdrop-blur-sm border-white/60 hover:bg-white" />
                            </Carousel>
                        </div>
                    </div>
                </section>

                {/* Menu Categories */}
                {Object.entries(menuData).map(([category, items]) => (
                    <section key={category} className="mb-16">
                        <div className="grid grid-cols-12 gap-6 mb-10">
                            <div className="col-span-12 text-center">
                                <h2 className="text-3xl font-light text-slate-800 tracking-wide mb-2">{category}</h2>
                                <Separator className="w-16 mx-auto bg-slate-300" />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-12 gap-8">
                            {items.map((item) => (
                                <div key={item.name} className="col-span-12 sm:col-span-6 lg:col-span-3">
                                    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm h-full flex flex-col p-0">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                            
                                            {/* Badges - Top Left */}
                                            <div className="absolute top-0 left-0 z-10 p-4">
                                                <div className="flex gap-2 flex-wrap">
                                                    {item.tags?.map(tag => (
                                                        <Badge key={tag} variant="secondary" className="bg-white/90 text-slate-700 border-white/60 backdrop-blur-sm text-xs">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <CardHeader className="space-y-1 pb-3">
                                            <div className="flex justify-between items-start gap-2">
                                                <CardTitle className="text-xl font-light text-slate-900 group-hover:text-slate-700 transition-colors leading-tight">
                                                    {item.name}
                                                </CardTitle>
                                                <p className="text-xl font-light text-slate-800 flex-shrink-0 whitespace-nowrap">{item.price}</p>
                                            </div>
                                        </CardHeader>
                                        
                                        <CardContent className="pt-0 pb-6">
                                            <CardDescription className="text-slate-600 leading-relaxed text-sm">
                                                {item.description}
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}