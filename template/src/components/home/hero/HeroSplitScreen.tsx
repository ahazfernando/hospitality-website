import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Award } from "lucide-react";
import Image from "next/image";

export const HeroSplitScreen = () => (
    <section className="relative bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] items-center gap-8">
                <div className="flex flex-col justify-center text-left p-8 md:p-12 space-y-8">
                    <div className="space-y-6">
                        <Badge variant="secondary" className="w-fit bg-amber-100 text-amber-800 px-4 py-2 text-sm font-medium">
                            Award-Winning Cuisine
                        </Badge>
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tight">
                            The Golden
                            <span className="block bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
                Fork
              </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-xl font-light">
                            Where culinary artistry meets unparalleled hospitality. Every dish tells a story, every meal creates memories.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="px-8 py-6 text-lg font-semibold bg-slate-900 hover:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            Reserve Your Table
                        </Button>
                        <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-semibold border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-50 transition-all duration-300 group">
                            Explore Menu
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>

                    <div className="flex items-center gap-8 pt-4">
                        <div className="flex items-center gap-2">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <span className="text-sm text-slate-600 font-medium">4.9 (2.1k reviews)</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                            <Award className="h-4 w-4" />
                            <span className="text-sm font-medium">Michelin Guide</span>
                        </div>
                    </div>
                </div>

                <div className="relative group">
                    <div className="relative min-h-[60vh] lg:min-h-[80vh] rounded-2xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
                            alt="Interior of The Golden Fork restaurant"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <Card className="absolute bottom-6 left-6 right-6 z-20 overflow-hidden rounded-lg shadow-lg border-0">
                            {/* Background Image */}
                            <Image
                                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Truffle Risotto with wild mushrooms"
                                fill
                                className="object-cover"
                            />

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                            {/* Content layered on top */}
                            <div className="relative z-10 flex h-full flex-col justify-end p-6">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <h3 className="font-semibold text-white text-2xl">Today&#39;s Special</h3>
                                        <p className="text-sm text-slate-200">Chicken Wings with BBQ Sauce</p>
                                    </div>
                                    <Badge variant="outline" className="border-amber-300/50 bg-amber-400/20 text-amber-200">
                                        Till 24/09/2025
                                    </Badge>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
