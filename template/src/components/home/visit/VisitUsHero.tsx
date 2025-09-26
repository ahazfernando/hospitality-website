import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Navigation, Calendar } from "lucide-react";

export const VisitUsHero = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Map with Enhanced Overlay */}
        <div className="absolute inset-0">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5434405111843!2d-0.12874688423059654!3d51.50735397963379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slondon%20eye!5e0!3m2!1sen!2suk!4v1633024800000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1) brightness(0.8)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-1000/80 via-slate-300/50 to-transparent z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <MapPin className="w-4 h-4 mr-2" />
                Find Us
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Visit Our
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                    Restaurant
                </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Experience exceptional dining in the heart of the city.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
                <Card className="backdrop-blur-md bg-black/10 border-black/20 hover:bg-black/15 transition-all duration-300 group hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-slate-200/60 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                            <Clock className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Opening Hours</h3>
                        <p className="text-slate-300">Mon - Sun: 6:00 PM - 11:00 PM</p>
                    </CardContent>
                </Card>
                <Card className="backdrop-blur-md bg-black/10 border-black/20 hover:bg-black/15 transition-all duration-300 group hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-slate-200/60 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                            <MapPin className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                        <p className="text-slate-300">123 Middle Swan, WA</p>
                    </CardContent>
                </Card>
                <Card className="backdrop-blur-md bg-black/10 border-black/20 hover:bg-black/15 transition-all duration-300 group hover:-translate-y-2 md:col-span-2 lg:col-span-1">
                    <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-slate-200/60 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                            <Phone className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Contact</h3>
                        <p className="text-slate-300">(08) 9123 4567</p>
                    </CardContent>
                </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 max-w-lg mx-auto">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-base flex-1 py-6">
                    <Navigation className="mr-2 h-5 w-5" />
                    Get Directions
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white text-base flex-1 py-6 bg-slate-800">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Table
                </Button>
            </div>
        </div>
    </section>
);
