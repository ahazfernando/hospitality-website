import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Flame, Clock, Star } from "lucide-react";
import { dealsData } from "./data";

export const DealsMinimalist = ({ deals = dealsData, totalPages = 3, currentPage = 0, setCurrentPage = (index: number) => {} }) => (
    <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative">
            <div className="text-center space-y-6 mb-16">
                <Badge className="bg-amber-100 text-amber-800 border-amber-200 px-6 py-3 text-sm font-semibold tracking-wider">
                    <Sparkles className="w-4 h-4 mr-2" />
                    EXCLUSIVE OFFERS
                </Badge>
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tight">
                    Curated
                    <span className="block bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
            Experiences
          </span>
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
                    Handpicked dining experiences designed to create unforgettable moments
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
                {deals.map((deal) => (
                    <div key={deal.title} className="group cursor-pointer">
                        <Card className="flex h-full flex-col overflow-hidden border-0 bg-white/80 backdrop-blur shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:bg-white/90">
                            <div className="relative overflow-hidden">
                                <img
                                    alt={deal.alt}
                                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    src={deal.src}
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge className="bg-red-500 text-white border-0 px-3 py-1 font-bold shadow-lg">
                                        <Flame className="w-3 h-3 mr-1" />
                                        {deal.discount}
                                    </Badge>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <Badge variant="outline" className="bg-white/90 border-white/50 backdrop-blur">
                                        <Clock className="w-3 h-3 mr-1" />
                                        {deal.timeLeft}
                                    </Badge>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <CardHeader className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-xl font-bold text-slate-900">
                                        {deal.title}
                                    </CardTitle>
                                    <Badge variant="secondary" className="bg-slate-100 text-slate-700 px-3 py-1">
                                        {deal.category}
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`h-3 w-3 ${i < Math.floor(deal.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                                        ))}
                                    </div>
                                    <span className="text-sm text-slate-600 font-medium">{deal.rating}</span>
                                </div>
                            </CardHeader>

                            <CardContent className="flex flex-grow flex-col space-y-4">
                                <p className="flex-grow text-slate-600 leading-relaxed">
                                    {deal.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <p className="text-3xl font-black text-slate-900">{deal.price}</p>
                                        <p className="text-sm text-slate-500 line-through">{deal.originalPrice}</p>
                                    </div>
                                    <Button className="bg-slate-900 hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                        Book Now
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center space-x-3">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index)}
                        className={`h-3 rounded-full transition-all duration-300 ${
                            currentPage === index
                                ? 'w-12 bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg'
                                : 'w-3 bg-slate-300 hover:bg-slate-400 hover:scale-110'
                        }`}
                        aria-label={`Go to page ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    </section>
);
