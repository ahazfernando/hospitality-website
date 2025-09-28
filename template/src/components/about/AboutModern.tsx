import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ambianceImages, awards, aboutContent } from './data';
import { Award, AwardIcon, ChefHat, Target } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About Us - The Golden Fork',
    description: 'Learn about the story, mission, and team behind The Golden Fork.',
};

export default function AboutModern() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 to-slate-50">
            <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
            
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-stone-100/20 via-neutral-100/10 to-slate-100/20"></div>
                <div className="container mx-auto px-6 py-20 relative z-10">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-4 mb-8">
                            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-stone-400"></div>
                            <span className="text-stone-600 font-medium text-sm uppercase tracking-[0.2em]">Our Story</span>
                            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-stone-400"></div>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-gradient-to-r from-slate-900 via-stone-800 to-neutral-900 bg-clip-text mb-6">
                            About The
                            <span className="block bg-gradient-to-r from-stone-700 to-slate-600 bg-clip-text">
                                Golden Fork
                            </span>
                        </h1>
                        <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
                            Where Australian culinary excellence meets refined hospitality
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 pb-20 relative z-10">
                {/* Story Section - Enhanced */}
                <div className="mb-24">
                    <Card className="border-0 shadow-2xl bg-white/70 backdrop-blur-xl overflow-hidden group hover:shadow-3xl transition-all duration-700">
                        <CardContent className="p-0">
                            <div className="grid lg:grid-cols-2 min-h-[600px]">
                                <div className="p-12 lg:p-16 flex flex-col justify-center relative">
                                    <div className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-br from-stone-300 to-slate-400 rounded-full opacity-15"></div>
                                    <div className="space-y-8">
                                        <div className="space-y-4">
                                            <Badge variant="secondary" className="text-xs uppercase tracking-widest bg-stone-100 text-stone-700 border-stone-200">
                                                Melbourne Origins
                                            </Badge>
                                            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                                                The Journey <span className="text-stone-700">Begins</span>
                                            </h2>
                                        </div>
                                        <div className="w-20 h-1 bg-gradient-to-r from-stone-500 to-slate-400 rounded-full"></div>
                                        <p className="text-lg text-stone-600 leading-relaxed font-light">
                                            {aboutContent.story}
                                        </p>
                                        <div className="flex items-center gap-6 pt-4">
                                            <div className="flex -space-x-3">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-stone-400 to-slate-500 border-2 border-white shadow-lg"></div>
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-400 to-stone-500 border-2 border-white shadow-lg"></div>
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-400 to-stone-400 border-2 border-white shadow-lg"></div>
                                            </div>
                                            <span className="text-sm text-stone-500 font-medium">Melbourne • Est. 2024</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={ambianceImages[0].src}
                                        alt={ambianceImages[0].alt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-stone-500/10 via-transparent to-slate-900/30"></div>
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <div className="backdrop-blur-sm bg-white/15 rounded-2xl p-6 border border-white/20">
                                            <p className="text-white font-medium text-lg drop-shadow-lg">
                                                "Celebrating Australia's finest produce"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Ambiance Section - Enhanced */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-6 text-xs uppercase tracking-widest border-stone-200 text-stone-700">
                            Experience Our Space
                        </Badge>
                        <h2 className="text-5xl font-bold text-slate-900 mb-4">
                            Refined <span className="text-stone-700">Atmosphere</span>
                        </h2>
                        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                            Every corner reflects Melbourne's sophisticated dining culture
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {ambianceImages.slice(1).map((image, index) => (
                            <Card key={image.src} className="group border-0 shadow-xl hover:shadow-3xl transition-all duration-700 overflow-hidden bg-white/60 backdrop-blur-sm hover:-translate-y-2">
                                <div className="relative h-80 overflow-hidden">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent group-hover:from-slate-900/30 transition-all duration-700"></div>
                                    
                                    {/* Floating badge */}
                                    <div className="absolute top-4 right-4">
                                        <div className="backdrop-blur-md bg-white/15 rounded-full px-3 py-1 border border-white/20">
                                            <span className="text-white text-xs font-medium">
                                                0{index + 1}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Content overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            <h3 className="text-white font-bold text-xl drop-shadow-lg mb-2">
                                                {image.alt}
                                            </h3>
                                            <div className="w-12 h-0.5 bg-stone-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Awards Section - Enhanced */}
                <Card className="mb-24 border-0 shadow-2xl bg-gradient-to-br from-white/70 to-stone-50/30 backdrop-blur-xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-stone-200/20 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
                    <CardHeader className="text-center pb-8 pt-16 relative z-10">
                        <Badge variant="outline" className="mb-6 text-xs uppercase tracking-widest border-stone-200 text-stone-700 mx-auto w-fit">
                            Recognition & Excellence
                        </Badge>
                        <CardTitle className="text-5xl font-bold text-slate-900 mb-4">
                            Industry <span className="text-stone-700">Recognition</span>
                        </CardTitle>
                        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                            Acknowledged by Australia's leading culinary institutions
                        </p>
                    </CardHeader>
                    <CardContent className="px-8 md:px-16 pb-16">
                        <div className="grid md:grid-cols-2 gap-6">
                            {awards.map((award, index) => (
                                <div key={index} className="group relative overflow-hidden">
                                    <div className="flex items-center gap-6 p-8 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-500 border border-white/40 hover:border-stone-200/50 hover:shadow-lg hover:-translate-y-1">
                                        <div className="relative">
                                            <AwardIcon/>
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs">✓</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-stone-700 transition-colors">
                                                {award.title}
                                            </h3>
                                            <p className="text-stone-600 text-sm mb-2">
                                                {award.organization}
                                            </p>
                                            <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700">
                                                {award.year}
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Mission & Chef - Enhanced */}
                <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="group border-0 shadow-xl bg-gradient-to-br from-white/70 to-slate-50/20 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-slate-200/20 to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
                        <CardHeader className="pb-6 relative z-10">
                            <Badge variant="secondary" className="mb-4 text-xs uppercase tracking-widest w-fit bg-slate-100 text-slate-700">
                                Our Purpose
                            </Badge>
                            <CardTitle className="text-3xl font-bold text-slate-900">
                                Our <span className="text-stone-700">Mission</span>
                            </CardTitle>
                            <div className="w-16 h-1 bg-gradient-to-r from-slate-500 to-stone-400 rounded-full"></div>
                        </CardHeader>
                        <CardContent className="px-6 pb-10">
                            <p className="text-stone-600 leading-relaxed text-lg font-light">
                                {aboutContent.mission}
                            </p>
                            <div className="mt-6 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-400 to-stone-500 flex items-center justify-center">
                                    <Target/>
                                </div>
                                <span className="text-sm text-stone-600 font-medium">Australian Excellence</span>
                            </div>
                        </CardContent>
                    </Card>
                    
                    <Card className="group border-0 shadow-xl bg-gradient-to-br from-white/70 to-stone-50/20 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-stone-200/20 to-transparent rounded-full translate-x-16 -translate-y-16"></div>
                        <CardHeader className="pb-6 relative z-10">
                            <Badge variant="secondary" className="mb-4 text-xs uppercase tracking-widest w-fit bg-stone-100 text-stone-700">
                                Executive Leadership
                            </Badge>
                            <CardTitle className="text-3xl font-bold text-slate-900">
                                Meet <span className="text-stone-700">Chef Alex</span>
                            </CardTitle>
                            <div className="w-16 h-1 bg-gradient-to-r from-stone-500 to-slate-400 rounded-full"></div>
                        </CardHeader>
                        <CardContent className="px-6 pb-10">
                            <p className="text-stone-600 leading-relaxed text-lg font-light">
                                {aboutContent.chef}
                            </p>
                            <div className="mt-6 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-stone-400 to-slate-500 flex items-center justify-center">
                                    <ChefHat/>
                                </div>
                                <span className="text-sm text-stone-600 font-medium">15+ Years Experience</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}