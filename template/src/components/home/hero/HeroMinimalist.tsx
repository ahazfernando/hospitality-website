import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const HeroMinimalist = () => (
    <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-6 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[90vh] items-center gap-12">
                <div className="lg:col-span-6 z-10 space-y-8">
                    <div className="space-y-6">
                        <Badge variant="outline" className="border-slate-300 text-slate-700 px-4 py-2 font-medium">
                            Est. 2018 • Fine Dining
                        </Badge>

                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tight">
                            The Golden
                            <span className="block text-slate-600 font-light italic">Fork</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-lg font-light">
                            Minimalist elegance meets culinary excellence. A sanctuary for food lovers seeking authentic experiences.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <Button size="lg" className="px-8 py-6 text-lg font-semibold bg-slate-900 hover:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                            Discover Our Cuisine
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>

                        <div className="grid grid-cols-3 gap-6 pt-4 pr-10">
                            <Card className="border-0 shadow-sm bg-white/50">
                                <CardContent className="p-4 text-center">
                                    <div className="text-2xl font-bold text-slate-900">15+</div>
                                    <div className="text-sm text-slate-600">Signature Dishes</div>
                                </CardContent>
                            </Card>
                            <Card className="border-0 shadow-sm bg-white/50">
                                <CardContent className="p-4 text-center">
                                    <div className="text-2xl font-bold text-slate-900">98%</div>
                                    <div className="text-sm text-slate-600">Customer Rating</div>
                                </CardContent>
                            </Card>
                            <Card className="border-0 shadow-sm bg-white/50">
                                <CardContent className="p-4 text-center">
                                    <div className="text-2xl font-bold text-slate-900">24/7</div>
                                    <div className="text-sm text-slate-600">Reservation</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-6">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-3xl blur-2xl" />
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                                alt="A stylish table setting at The Golden Fork"
                                className="w-full h-[70vh] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
