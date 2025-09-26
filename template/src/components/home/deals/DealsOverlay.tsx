import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Flame, Clock, Star, ArrowRight } from "lucide-react";
import { dealsData } from "./data";

export const DealsOverlay = ({ deals = dealsData, totalPages = 3, currentPage = 0, setCurrentPage = (index: number) => {} }) => (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative">
            <div className="text-center space-y-6 mb-16">
                <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 text-white border-0 px-6 py-3 text-sm font-semibold tracking-wider shadow-lg">
                    <Flame className="w-4 h-4 mr-2" />
                    UNMISSABLE OFFERS
                </Badge>
                <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
                    Limited Time
                    <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Exclusives
          </span>
                </h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
                    Premium experiences available for a limited time only
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
                {deals.map((deal, index) => (
                    <Card
                        key={deal.title}
                        className="group relative flex h-[500px] flex-col justify-end overflow-hidden border-0 text-white shadow-2xl transition-all duration-500 hover:scale-105"
                    >
                        <img
                            alt={deal.alt}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src={deal.src}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95" />

                        <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                            <Badge className="bg-red-500/90 text-white border-0 px-4 py-2 font-bold shadow-lg backdrop-blur">
                                <Flame className="w-4 h-4 mr-2" />
                                {deal.discount}
                            </Badge>
                            <Badge className="bg-white/20 text-white border-white/30 px-3 py-2 backdrop-blur">
                                <Clock className="w-3 h-3 mr-2" />
                                {deal.timeLeft}
                            </Badge>
                        </div>

                        <div className="relative z-10 p-8 space-y-4">
                            <div className="space-y-2">
                                <Badge className="bg-amber-500/80 text-white border-0 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
                                    {deal.category}
                                </Badge>
                                <div className="flex items-center gap-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`h-4 w-4 ${i < Math.floor(deal.rating) ? 'fill-amber-400 text-amber-400' : 'text-white/50'}`} />
                                        ))}
                                    </div>
                                    <span className="text-sm text-white/80 font-medium">{deal.rating}</span>
                                </div>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-black leading-tight">
                                {deal.title}
                            </h3>

                            <div className="transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                <p className="text-slate-200 leading-relaxed mb-4">
                                    {deal.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <div className="space-y-1">
                                    <p className="text-3xl md:text-4xl font-black">{deal.price}</p>
                                    <p className="text-sm text-white/60 line-through">{deal.originalPrice}</p>
                                </div>
                                <Button className="bg-white/20 hover:bg-white/30 border border-white/30 text-white backdrop-blur shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                    Book Now
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="flex justify-center items-center space-x-4">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index)}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${
                            currentPage === index
                                ? 'bg-gradient-to-r from-amber-400 to-amber-500 scale-125 shadow-lg shadow-amber-500/50'
                                : 'bg-white/30 hover:bg-white/50 hover:scale-110'
                        }`}
                        aria-label={`Go to page ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    </section>);