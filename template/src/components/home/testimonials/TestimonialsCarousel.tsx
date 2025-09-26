'use client';

import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { sampleTestimonials } from "./data";

export const TestimonialsCarousel = ({ testimonials = sampleTestimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="bg-slate-900 py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-800/20 to-transparent rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-6 border-slate-700 text-slate-300 bg-slate-800/50">
                        <Users className="w-4 h-4 mr-2" />
                        Community Reviews
                    </Badge>
                    <h2 className="text-5xl font-bold text-white mb-4">
                        Stories from Our
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400 block">
              Community
            </span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Discover why our restaurant has become a beloved destination
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Main testimonial display */}
                    <div className="relative overflow-hidden rounded-2xl">
                        <Card className="bg-slate-800/60 backdrop-blur-md border-slate-700 shadow-2xl">
                            <CardContent className="p-12 text-center">
                                <div className="mb-8">
                                    <Quote className="w-16 h-16 text-amber-400 mx-auto mb-6 opacity-60" strokeWidth={1} />
                                    <blockquote className="text-2xl text-slate-200 leading-relaxed font-light mb-8">
                                        "{testimonials[currentIndex].quote}"
                                    </blockquote>
                                </div>

                                <div className="flex items-center justify-center mb-6">
                                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-6 h-6 text-amber-400 fill-amber-400 mr-1"
                                        />
                                    ))}
                                </div>

                                <div className="flex items-center justify-center">
                                    <Avatar className="w-16 h-16 ring-4 ring-amber-400/20 shadow-xl">
                                        <AvatarImage src={testimonials[currentIndex].avatarSrc} alt={testimonials[currentIndex].name} />
                                        <AvatarFallback className="bg-gradient-to-br from-blue-800 to-amber-600 text-white text-xl font-semibold">
                                            {testimonials[currentIndex].avatarFallback}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="ml-6 text-left">
                                        <p className="text-xl font-semibold text-white">{testimonials[currentIndex].name}</p>
                                        <p className="text-amber-400 font-medium">{testimonials[currentIndex].title}</p>
                                        <p className="text-sm text-slate-400 mt-1">{testimonials[currentIndex].date}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8">
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={prevSlide}
                            className="border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                        >
                            <ChevronLeft className="w-5 h-5 mr-2" />
                            Previous
                        </Button>

                        <div className="flex space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentIndex
                                            ? 'bg-amber-400 scale-125'
                                            : 'bg-slate-600 hover:bg-slate-500'
                                    }`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="lg"
                            onClick={nextSlide}
                            className="border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                        >
                            Next
                            <ChevronRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
