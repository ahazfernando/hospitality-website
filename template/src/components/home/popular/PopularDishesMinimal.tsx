import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star, Clock } from "lucide-react";
import { sampleDishes } from "./data";

export const PopularDishesMinimal = ({ dishes = sampleDishes }) => (
    <section className="bg-white py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-slate-600">Fresh • Daily</span>
                </div>
                <h2 className="text-6xl font-light text-slate-900 mb-6 tracking-tight">
                    Signature Dishes
                </h2>
                <p className="text-lg text-slate-500 max-w-md mx-auto font-light">
                    Carefully curated dishes that define our culinary identity
                </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                {dishes.map((dish, index) => (
                    <div
                        key={dish.name}
                        className="group cursor-pointer"
                        style={{ animationDelay: `${index * 150}ms` }}
                    >
                        <div className="relative mb-6 overflow-hidden rounded-2xl bg-slate-50">
                            <img
                                alt={dish.alt}
                                className="h-72 w-full object-cover transition-all duration-700 group-hover:scale-105"
                                src={dish.imageSrc}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>

                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div className="flex gap-2">
                                    <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white">
                                        <Heart className="w-4 h-4" />
                                    </Button>
                                    <Button size="sm" className="bg-slate-900/90 text-white backdrop-blur-sm shadow-lg hover:bg-slate-900">
                                        <ShoppingCart className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-start justify-between">
                                <h3 className="text-2xl font-light text-slate-900 group-hover:text-slate-600 transition-colors">
                                    {dish.name}
                                </h3>
                                <div className="text-right">
                                    <p className="text-2xl font-medium text-slate-900">{dish.price}</p>
                                    <div className="flex items-center justify-end mt-1">
                                        <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" />
                                        <span className="text-sm text-slate-500">{dish.rating}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-slate-600 leading-relaxed font-light">
                                {dish.description}
                            </p>

                            <div className="flex items-center justify-between pt-2">
                                <div className="flex gap-2">
                                    {dish.tags.map((tag) => (
                                        <Badge key={tag} variant="outline" className="border-slate-200 text-slate-600 font-normal">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex items-center text-sm text-slate-400 gap-3">
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {dish.cookTime}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
