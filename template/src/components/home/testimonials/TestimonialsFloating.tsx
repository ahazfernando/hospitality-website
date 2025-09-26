import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Quote, Star, Award, Heart } from "lucide-react";
import { sampleTestimonials } from "./data";

export const TestimonialsFloating = ({ testimonials = sampleTestimonials }) => (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-amber-50/20 py-24 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                <Badge variant="outline" className="mb-6 bg-white/60 backdrop-blur-sm border-slate-300">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Customer Stories
                </Badge>
                <h2 className="text-5xl font-bold mb-4">
                    <span className="text-slate-800">What Our </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-amber-600">
            Guests Say
          </span>
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    Real experiences from our valued diners who&#39;ve made memories at our table
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                    <Card
                        key={index}
                        className="group relative backdrop-blur-md bg-white/80 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden"
                        style={{ animationDelay: `${index * 150}ms` }}
                    >
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <CardContent className="relative p-8 flex flex-col h-full">
                            {/* Quote icon with gradient background */}
                            <div className="relative mb-6">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-800/10 to-amber-400/10 rounded-full blur-xl"></div>
                                <div className="relative w-16 h-16 bg-gradient-to-br from-blue-800 to-amber-600 rounded-full flex items-center justify-center">
                                    <Quote className="w-8 h-8 text-white" strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Star rating */}
                            <div className="flex items-center mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 text-amber-400 fill-amber-400 mr-1"
                                    />
                                ))}
                                {testimonial.verified && (
                                    <Badge variant="secondary" className="ml-auto bg-green-100 text-green-700 text-xs">
                                        <Award className="w-3 h-3 mr-1" />
                                        Verified
                                    </Badge>
                                )}
                            </div>

                            <blockquote className="text-slate-700 leading-relaxed flex-grow mb-6 group-hover:text-slate-800 transition-colors">
                                "{testimonial.quote}"
                            </blockquote>

                            <div className="flex items-center justify-between pt-6 border-t border-slate-200/60">
                                <div className="flex items-center">
                                    <Avatar className="w-12 h-12 ring-2 ring-white shadow-md">
                                        <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} />
                                        <AvatarFallback className="bg-gradient-to-br from-blue-800 to-amber-600 text-white font-semibold">
                                            {testimonial.avatarFallback}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="ml-4">
                                        <p className="font-semibold text-slate-900">{testimonial.name}</p>
                                        <p className="text-sm text-slate-600">{testimonial.title}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-slate-500">{testimonial.date}</p>
                                    <Button variant="ghost" size="sm" className="mt-1 text-slate-600 hover:text-blue-800">
                                        <Heart className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);
