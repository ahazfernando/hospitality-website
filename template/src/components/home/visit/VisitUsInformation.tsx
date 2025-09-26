import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Car } from "lucide-react";

export const VisitUsInformation = () => (
    <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-slate-900 mb-4">
                    Plan Your Visit
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                    Everything you need to know for your dining experience with us, from directions to dining hours.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <Card className="bg-white shadow-md hover:shadow-xl transition-all duration-300 group border-0 text-center">
                    <CardContent className="p-8">
                        <MapPin className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Address</h3>
                        <p className="text-slate-600 leading-relaxed">123 Middle Swan, WA 6056</p>
                    </CardContent>
                </Card>
                <Card className="bg-white shadow-md hover:shadow-xl transition-all duration-300 group border-0 text-center">
                    <CardContent className="p-8">
                        <Clock className="h-10 w-10 text-amber-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Hours</h3>
                        <p className="text-slate-600 leading-relaxed">Mon - Sun: 6PM - 11PM</p>
                    </CardContent>
                </Card>
                <Card className="bg-white shadow-md hover:shadow-xl transition-all duration-300 group border-0 text-center">
                    <CardContent className="p-8">
                        <Phone className="h-10 w-10 text-slate-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Contact</h3>
                        <p className="text-slate-600 leading-relaxed">(08) 9123 4567</p>
                    </CardContent>
                </Card>
                <Card className="bg-white shadow-md hover:shadow-xl transition-all duration-300 group border-0 text-center">
                    <CardContent className="p-8">
                        <Car className="h-10 w-10 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Parking</h3>
                        <p className="text-slate-600 leading-relaxed">Valet &amp; Street Parking</p>
                    </CardContent>
                </Card>
            </div>

            <Card className="bg-white shadow-2xl border-0 overflow-hidden">
                <CardHeader>
                    <CardTitle className="text-2xl">Our Location</CardTitle>
                </CardHeader>
                <div className="h-[500px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5434405111843!2d-0.12874688423059654!3d51.50735397963379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slondon%20eye!5e0!3m2!1sen!2suk!4v1633024800000!5m2!1sen!2suk"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </Card>
        </div>
    </section>
);
