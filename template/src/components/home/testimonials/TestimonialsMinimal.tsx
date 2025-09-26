import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Award } from "lucide-react";
import { sampleTestimonials } from "./data";

export const TestimonialsMinimal = ({ testimonials = sampleTestimonials }) => (
    <section className="bg-white py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 bg-slate-100 px-6 py-3 rounded-full mb-8">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-slate-700">Verified Reviews</span>
                </div>
                <h2 className="text-6xl font-light text-slate-900 mb-6 tracking-tight">
                    Guest
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-amber-600 font-normal">
            Experiences
          </span>
                </h2>
                <p className="text-lg text-slate-600 max-w-md mx-auto font-light">
                    Authentic stories from our valued guests
                </p>
            </div>

            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group flex flex-col"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            {/* Header with avatar and info */}
                            <div className="flex items-center mb-8">
                                <div className="relative">
                                    <Avatar className="w-16 h-16 shadow-lg">
                                        <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} />
                                        <AvatarFallback className="bg-gradient-to-br from-blue-800 to-amber-600 text-white text-lg font-semibold">
                                            {testimonial.avatarFallback}
                                        </AvatarFallback>
                                    </Avatar>
                                    {testimonial.verified && (
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                            <Award className="w-3 h-3 text-white" />
                                        </div>
                                    )}
                                </div>
                                <div className="ml-6 flex-grow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-medium text-slate-900">{testimonial.name}</h3>
                                        <Badge variant="outline" className="text-xs border-slate-200 text-slate-600">
                                            {testimonial.title}
                                        </Badge>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center">
                                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-4 h-4 text-amber-400 fill-amber-400"
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-slate-500">{testimonial.date}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quote */}
                            <div className="relative">
                                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-800 to-amber-600 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                                <blockquote className="text-lg text-slate-700 leading-relaxed font-light pl-8 group-hover:pl-12 transition-all duration-300">
                                    "{testimonial.quote}"
                                </blockquote>
                            </div>

                            {/* Subtle decorative line */}
                            <div className="mt-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
