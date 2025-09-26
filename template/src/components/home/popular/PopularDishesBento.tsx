import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Star, Plus, Clock, Users, ChefHat } from "lucide-react";
import { sampleDishes } from "./data";


export const PopularDishesBento = ({ dishes = sampleDishes }) => (
    <section className="bg-slate-900/90 py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 border-slate-700 text-slate-300 bg-slate-800">
                    <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                    Top Rated
                </Badge>
                <h2 className="text-6xl font-bold text-white mb-4">
                    Culinary <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Excellence</span>
                </h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    Where tradition meets innovation in every bite
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {dishes.map((dish) => (
                    <Card
                        key={dish.name}
                        className="group relative bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition-all duration-500 overflow-hidden hover:-translate-y-2"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative h-48 overflow-hidden">
                            <img
                                alt={dish.alt}
                                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                                src={dish.imageSrc}
                            />

                            <div className="absolute top-4 left-4">
                                <Badge className="bg-amber-500/90 text-slate-900 font-medium">
                                    <Star className="w-3 h-3 mr-1 fill-current" />
                                    {dish.rating}
                                </Badge>
                            </div>

                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Button size="sm" className="bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700">
                                    <Plus className="w-4 h-4" />
                                </Button>
                            </div>

                            <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-xl font-bold text-white mb-1">{dish.name}</h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-amber-400">{dish.price}</span>
                                    <div className="flex items-center text-sm text-slate-300">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {dish.cookTime}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <CardContent className="p-6">
                            <CardDescription className="text-slate-300 mb-4 leading-relaxed">
                                {dish.description}
                            </CardDescription>

                            <div className="flex gap-2 mb-4">
                                {dish.tags.map((tag) => (
                                    <Badge key={tag} variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                                <div className="flex items-center">
                                    <Users className="w-4 h-4 mr-1" />
                                    {dish.orders} orders this week
                                </div>
                                <div className="flex items-center">
                                    <ChefHat className="w-4 h-4 mr-1" />
                                    Chef's Choice
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);
