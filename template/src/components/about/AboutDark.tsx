import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Trophy, Target, ChefHat, MapPin, Calendar, Award, Star } from 'lucide-react';
import { ambianceImages, awards, aboutContent } from './data';

export const metadata: Metadata = {
    title: 'About Us - The Golden Fork',
    description: 'Learn about the story, mission, and team behind The Golden Fork.',
};

export default function AboutDark() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-stone-950 to-zinc-950 text-zinc-100">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(120,119,198,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.05),transparent_50%)] opacity-40"></div>
            
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/60 to-zinc-950/90"></div>
                <div className="container mx-auto px-6 py-28 relative z-10">
                    <div className="max-w-5xl mx-auto text-center space-y-10">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-4 mb-8">
                                <div className="w-12 h-px bg-gradient-to-r from-transparent to-zinc-600"></div>
                                <div className="flex items-center gap-2 px-4 py-2 border border-zinc-700/50 rounded-full bg-zinc-900/30 backdrop-blur-sm">
                                    <MapPin className="w-3 h-3 text-zinc-400" />
                                    <span className="text-sm text-zinc-400 uppercase tracking-widest font-light">Melbourne • Est. 2024</span>
                                </div>
                                <div className="w-12 h-px bg-gradient-to-l from-transparent to-zinc-600"></div>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-extralight text-zinc-100 tracking-tight leading-none">
                                The Golden
                                <span className="block font-thin italic text-stone-300 mt-2">Fork</span>
                            </h1>
                        </div>
                        <div className="w-32 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent mx-auto"></div>
                        <p className="text-xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed">
                            A sanctuary of Australian culinary excellence nestled in Melbourne's vibrant cultural landscape
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 py-24 relative z-10">
                {/* Story Section */}
                <section className="mb-36">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-5 gap-20 items-start">
                            <div className="lg:col-span-2 space-y-10">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-4 h-4 text-zinc-500" />
                                        <span className="text-sm text-zinc-500 uppercase tracking-[0.15em] font-light">Chapter I</span>
                                    </div>
                                    <h2 className="text-5xl font-extralight text-zinc-200 leading-tight">
                                        Our <span className="text-stone-400">Journey</span>
                                    </h2>
                                    <div className="w-16 h-px bg-zinc-600"></div>
                                </div>
                                <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light">
                                    <p>{aboutContent.story}</p>
                                </div>
                                <div className="flex items-center gap-6 pt-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-stone-500 rounded-full"></div>
                                        <span className="text-sm text-zinc-500 font-light">Melbourne's Laneways</span>
                                    </div>
                                    <div className="w-px h-4 bg-zinc-700"></div>
                                    <div className="flex items-center gap-2">
                                        <Star className="w-3 h-3 text-zinc-500" />
                                        <span className="text-sm text-zinc-500 font-light">Australian Excellence</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-3 relative">
                                <div className="relative h-[500px] rounded-2xl overflow-hidden group">
                                    <Image
                                        src={ambianceImages[0].src}
                                        alt={ambianceImages[0].alt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-transparent to-zinc-900/20"></div>
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <div className="backdrop-blur-md bg-zinc-900/20 rounded-xl p-6 border border-zinc-700/30">
                                            <p className="text-zinc-200 font-light text-lg">
                                                "Where every dish tells Australia's story"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-zinc-900/90 backdrop-blur-sm rounded-2xl border border-zinc-700/50 flex items-center justify-center">
                                    <ChefHat className="w-10 h-10 text-stone-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ambiance Gallery */}
                <section className="mb-36">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20 space-y-6">
                            <Badge variant="outline" className="text-xs uppercase tracking-wider border-zinc-700/50 text-zinc-400 bg-zinc-900/20">
                                Atmosphere
                            </Badge>
                            <h2 className="text-5xl font-extralight text-zinc-200">
                                Our <span className="text-stone-400">Sanctuary</span>
                            </h2>
                            <div className="w-20 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent mx-auto"></div>
                            <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
                                Each space meticulously crafted to create unforgettable moments
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-10">
                            {ambianceImages.slice(1).map((image, index) => (
                                <div key={image.src} className="group">
                                    <Card className="bg-zinc-900/30 border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-900/50 transition-all duration-700 overflow-hidden">
                                        <div className="relative h-80 overflow-hidden">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent"></div>
                                            <div className="absolute top-4 right-4">
                                                <div className="w-8 h-8 bg-zinc-900/60 backdrop-blur-md rounded-full border border-zinc-700/50 flex items-center justify-center">
                                                    <span className="text-zinc-300 text-xs font-light">{String(index + 1).padStart(2, '0')}</span>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                                    <h3 className="text-zinc-200 font-light tracking-wide text-lg">
                                                        {image.alt}
                                                    </h3>
                                                    <div className="w-10 h-px bg-stone-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Awards */}
                <section className="mb-36">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-20 space-y-6">
                            <Badge variant="outline" className="text-xs uppercase tracking-wider border-zinc-700/50 text-zinc-400 bg-zinc-900/20">
                                Industry Recognition
                            </Badge>
                            <h2 className="text-5xl font-extralight text-zinc-200">
                                Celebrated <span className="text-stone-400">Excellence</span>
                            </h2>
                            <div className="w-20 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent mx-auto"></div>
                        </div>
                        <Card className="bg-zinc-900/30 border-zinc-800/50 backdrop-blur-lg">
                            <CardContent className="p-16">
                                <div className="grid md:grid-cols-2 gap-12">
                                    {awards.map((award, index) => (
                                        <div key={index} className="group">
                                            <div className="flex items-start gap-8 p-8 rounded-2xl hover:bg-zinc-900/40 transition-all duration-500">
                                                <div className="w-16 h-16 rounded-xl bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-center group-hover:bg-zinc-700/60 group-hover:border-zinc-600/50 transition-all duration-300">
                                                    <Trophy className="w-7 h-7 text-stone-400 group-hover:text-stone-300 transition-colors" />
                                                </div>
                                                <div className="space-y-3 flex-1">
                                                    <h3 className="text-xl font-light text-zinc-200 group-hover:text-zinc-100 transition-colors leading-tight">
                                                        {award.title}
                                                    </h3>
                                                    <p className="text-zinc-500 text-sm tracking-wide leading-relaxed">
                                                        {award.organization}
                                                    </p>
                                                    <Badge variant="secondary" className="text-xs bg-zinc-800/50 text-zinc-400 border-zinc-700/50">
                                                        {award.year}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Mission & Chef */}
                <section className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Target className="w-4 h-4 text-zinc-500" />
                                    <span className="text-sm text-zinc-500 uppercase tracking-[0.15em] font-light">Philosophy</span>
                                </div>
                                <h2 className="text-4xl font-extralight text-zinc-200">
                                    Our <span className="text-stone-400">Mission</span>
                                </h2>
                                <div className="w-16 h-px bg-zinc-600"></div>
                            </div>
                            <Card className="bg-zinc-900/30 border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-900/50 transition-all duration-500 group">
                                <CardContent className="p-10">
                                    <p className="text-lg text-zinc-400 leading-relaxed font-light">
                                        {aboutContent.mission}
                                    </p>
                                    <div className="mt-8 flex items-center gap-3">
                                        <div className="w-3 h-3 bg-stone-500 rounded-full group-hover:bg-stone-400 transition-colors"></div>
                                        <span className="text-sm text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">Australian Culinary Heritage</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <ChefHat className="w-4 h-4 text-zinc-500" />
                                    <span className="text-sm text-zinc-500 uppercase tracking-[0.15em] font-light">Executive Leadership</span>
                                </div>
                                <h2 className="text-4xl font-extralight text-zinc-200">
                                    Meet the <span className="text-stone-400">Chef</span>
                                </h2>
                                <div className="w-16 h-px bg-zinc-600"></div>
                            </div>
                            <Card className="bg-zinc-900/30 border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-900/50 transition-all duration-500 group">
                                <CardContent className="p-10">
                                    <p className="text-lg text-zinc-400 leading-relaxed font-light">
                                        {aboutContent.chef}
                                    </p>
                                    <div className="mt-8 flex items-center gap-3">
                                        <div className="w-3 h-3 bg-stone-500 rounded-full group-hover:bg-stone-400 transition-colors"></div>
                                        <span className="text-sm text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">15+ Years Culinary Excellence</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}