import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat, Heart, Star, Clock, Users, ShoppingCart } from "lucide-react";
import { sampleDishes } from "./data";

export const PopularDishesGlassmorphism = ({ dishes = sampleDishes }) => (
    <section className="relative bg-gradient-to-br from-yellow-50 via-blue-50 to-amber-50 py-24 overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 bg-white/50 backdrop-blur-sm border-yellow-200">
                    <ChefHat className="w-4 h-4 mr-2" />
                    Chef&#39;s Specials
                </Badge>
                <h2 className="text-6xl text-black mb-4">
                    Most Loved Dishes
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Handcrafted with passion, loved by thousands
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {dishes.map((dish, index) => (
                    <Card
                        key={dish.name}
                        className="group relative backdrop-blur-md bg-white/70 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative overflow-hidden rounded-t-lg">
                            <img
                                alt={dish.alt}
                                className="h-56 w-full object-cover transition-all duration-700 group-hover:scale-110"
                                src={dish.imageSrc}
                            />
                            <div className="absolute top-4 right-4">
                                <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm hover:bg-white">
                                    <Heart className="w-4 h-4" />
                                </Button>
                            </div>
                            <div className="absolute bottom-4 left-4">
                                <Badge className="bg-black/70 text-white backdrop-blur-sm">
                                    <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                                    {dish.rating}
                                </Badge>
                            </div>
                        </div>

                        <CardHeader className="pb-2">
                            <div className="flex items-start justify-between">
                                <CardTitle className="text-xl group-hover:text-slate-600 transition-colors">
                                    {dish.name}
                                </CardTitle>
                                <span className="text-2xl font-bold text-slate-900">{dish.price}</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {dish.cookTime}
                                </div>
                                <div className="flex items-center">
                                    <Users className="w-4 h-4 mr-1" />
                                    {dish.orders} orders
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="pb-4">
                            <CardDescription className="text-slate-600 leading-relaxed">
                                {dish.description}
                            </CardDescription>
                            <div className="flex gap-2 mt-3">
                                {dish.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);
