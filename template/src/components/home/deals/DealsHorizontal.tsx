import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Flame, Clock, Star, Tag, ArrowRight } from "lucide-react";
import { dealsData } from "./data";
import Image from "next/image";

export const DealsHorizontal = ({ deals = dealsData, totalPages = 3, currentPage = 0, setCurrentPage = (index: number) => {} }) => (
    <section className="bg-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/50 to-transparent" />

        <div className="container mx-auto px-6 relative">
            <div className="text-center space-y-6 mb-16">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-6 py-3 text-sm font-semibold tracking-wider">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    MONTH&#39;S HIGHLIGHTS
                </Badge>
                <h2 className="text-8xl md:text-8xl font-black text-slate-900 leading-tight tracking-tight">
                    Premium
                    <span className="block text-slate-600 font-light italic text-6xl">Selections</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
                    Discover today&#39;s most sought-after dining experiences
                </p>
            </div>

            <div className="space-y-8 mb-12">
                {deals.map((deal) => (
                    <Card
                        key={deal.title}
                        className="group overflow-hidden border-0 bg-gradient-to-r from-white to-slate-50/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 "
                    >
                        <div className="flex flex-col md:flex-row h-100">
                            <div className="md:w-2/5 relative overflow-hidden">
                                <Image
                                    fill
                                    alt={deal.alt}
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    src={deal.src}
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge className="bg-red-500 text-white border-0 px-4 py-2 font-bold shadow-lg">
                                        <Flame className="w-4 h-4 mr-2" />
                                        {deal.discount}
                                    </Badge>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="flex flex-col justify-between p-8 md:p-12 md:w-3/5 space-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2 font-semibold uppercase tracking-wider text-sm">
                                            <Tag className="w-3 h-3 mr-2" />
                                            {deal.category}
                                        </Badge>
                                        <div className="flex items-center gap-2">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`h-4 w-4 ${i < Math.floor(deal.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                                                ))}
                                            </div>
                                            <span className="text-sm text-slate-600 font-medium">({deal.rating})</span>
                                        </div>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                                        {deal.title}
                                    </h3>

                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        {deal.description}
                                    </p>
                                </div>

                                <div className="flex items-end justify-between">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-4">
                                            <p className="text-4xl font-black text-slate-900">{deal.price}</p>
                                            <p className="text-lg text-slate-500 line-through">{deal.originalPrice}</p>
                                        </div>
                                        <p className="text-sm text-slate-500 flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            Limited time: {deal.timeLeft} left
                                        </p>
                                    </div>

                                    <Button size="lg" className="px-8 py-6 text-lg font-semibold bg-slate-900 hover:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 group">
                                        Reserve Now
                                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="flex justify-center items-center space-x-4">
                {[...Array(totalPages)].map((_, index) => (
                    <Button
                        key={index}
                        onClick={() => setCurrentPage(index)}
                        variant={currentPage === index ? 'default' : 'outline'}
                        size="sm"
                        className={`h-4 w-4 rounded-full p-0 transition-all duration-300 ${
                            currentPage === index
                                ? 'bg-slate-900 hover:bg-slate-800 scale-125'
                                : 'border-slate-300 hover:border-slate-500 hover:scale-110'
                        }`}
                        aria-label={`Go to page ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    </section>
);
