import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Trophy, Target, ChefHat, MapPin, Calendar } from 'lucide-react';
import { ambianceImages, awards, aboutContent } from './data';

export const metadata: Metadata = {
    title: 'About Us - The Golden Fork',
    description: 'Learn about the story, mission, and team behind The Golden Fork.',
};

export default function AboutMinimal() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-stone-50 to-neutral-50">
            {/* Hero Section */}
            <section className="bg-white/80 backdrop-blur-sm border-b border-stone-200/50">
                <div className="container mx-auto px-6 py-24">
                    <div className="max-w-5xl mx-auto text-center space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 mb-6">
                                <div className="w-12 h-px bg-stone-300"></div>
                                <span className="text-stone-500 text-sm uppercase tracking-[0.15em] font-medium">Est. Melbourne 2024</span>
                                <div className="w-12 h-px bg-stone-300"></div>
                            </div>
                            <h1 className="text-7xl md:text-9xl font-extralight text-slate-900 tracking-tight">
                                The Golden
                                <span className="block text-stone-700 font-light">Fork</span>
                            </h1>
                        </div>
                        <div className="w-32 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto"></div>
                        <p className="text-xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
                            Where Australian culinary excellence meets refined hospitality in Melbourne's dining landscape
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 py-20 space-y-28">
                {/* Story Section */}
                <section className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <MapPin className="w-4 h-4 text-stone-500" />
                                    <span className="text-stone-500 text-xs uppercase tracking-wider font-medium">Melbourne Origins</span>
                                </div>
                                <h2 className="text-4xl font-light text-slate-900 leading-tight">
                                    Our <span className="text-stone-700">Journey</span>
                                </h2>
                                <div className="w-16 h-px bg-stone-400"></div>
                            </div>
                            <p className="text-stone-600 leading-relaxed text-lg font-light">
                                {aboutContent.story}
                            </p>
                            <div className="flex items-center gap-6 pt-2">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-stone-500" />
                                    <span className="text-sm text-stone-500 font-medium">Founded 2024</span>
                                </div>
                                <div className="w-px h-4 bg-stone-300"></div>
                                <span className="text-sm text-stone-500">Melbourne's Laneways</span>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative h-96 rounded-2xl overflow-hidden bg-stone-100 shadow-xl">
                                <Image
                                    src={ambianceImages[0].src}
                                    alt={ambianceImages[0].alt}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/90 backdrop-blur-sm rounded-2xl border border-stone-200/50 shadow-lg flex items-center justify-center">
                                <ChefHat className="w-8 h-8 text-stone-600" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ambiance Gallery */}
                <section className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-block">
                            <Badge variant="outline" className="text-xs uppercase tracking-wider border-stone-200 text-stone-600 mb-4">
                                Experience
                            </Badge>
                        </div>
                        <h2 className="text-4xl font-light text-slate-900">Refined <span className="text-stone-700">Atmosphere</span></h2>
                        <div className="w-20 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto"></div>
                        <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed">
                            Each space thoughtfully designed to enhance your dining journey
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {ambianceImages.slice(1).map((image, index) => (
                            <div key={image.src} className="group">
                                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden bg-white/70 backdrop-blur-sm">
                                    <div className="relative h-72 overflow-hidden bg-stone-100">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
                                        <div className="absolute top-4 right-4">
                                            <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center">
                                                <span className="text-white text-xs font-medium">{String(index + 1).padStart(2, '0')}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="font-medium text-slate-900 text-center group-hover:text-stone-700 transition-colors">
                                            {image.alt}
                                        </h3>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Awards */}
                <section className="max-w-5xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <Badge variant="outline" className="text-xs uppercase tracking-wider border-stone-200 text-stone-600 mb-4">
                            Industry Recognition
                        </Badge>
                        <h2 className="text-4xl font-light text-slate-900">Celebrated <span className="text-stone-700">Excellence</span></h2>
                        <div className="w-20 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto"></div>
                    </div>
                    <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm">
                        <CardContent className="p-12">
                            <div className="grid md:grid-cols-2 gap-10">
                                {awards.map((award, index) => (
                                    <div key={index} className="group flex items-start gap-6 p-6 rounded-xl hover:bg-stone-50/50 transition-all duration-300">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                                            <Trophy className="w-6 h-6 text-stone-600" />
                                        </div>
                                        <div className="space-y-2 flex-1">
                                            <h3 className="font-semibold text-slate-900 text-lg leading-tight group-hover:text-stone-700 transition-colors">
                                                {award.title}
                                            </h3>
                                            <p className="text-stone-600 text-sm leading-relaxed">
                                                {award.organization}
                                            </p>
                                            <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-stone-200">
                                                {award.year}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Mission & Chef */}
                <section className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group">
                            <CardHeader className="pb-6 pt-8 px-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center">
                                        <Target className="w-5 h-5 text-stone-600" />
                                    </div>
                                    <Badge variant="secondary" className="text-xs uppercase tracking-wider bg-stone-100 text-stone-700">
                                        Philosophy
                                    </Badge>
                                </div>
                                <CardTitle className="text-2xl font-light text-slate-900 group-hover:text-stone-700 transition-colors">
                                    Our Mission
                                </CardTitle>
                                <div className="w-12 h-px bg-stone-400"></div>
                            </CardHeader>
                            <CardContent className="px-8 pb-8">
                                <p className="text-stone-600 leading-relaxed text-lg font-light">
                                    {aboutContent.mission}
                                </p>
                                <div className="mt-6 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                                    <span className="text-sm text-stone-500 font-medium">Australian Excellence</span>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group">
                            <CardHeader className="pb-6 pt-8 px-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center">
                                        <ChefHat className="w-5 h-5 text-stone-600" />
                                    </div>
                                    <Badge variant="secondary" className="text-xs uppercase tracking-wider bg-stone-100 text-stone-700">
                                        Leadership
                                    </Badge>
                                </div>
                                <CardTitle className="text-2xl font-light text-slate-900 group-hover:text-stone-700 transition-colors">
                                    Executive Chef
                                </CardTitle>
                                <div className="w-12 h-px bg-stone-400"></div>
                            </CardHeader>
                            <CardContent className="px-8 pb-8">
                                <p className="text-stone-600 leading-relaxed text-lg font-light">
                                    {aboutContent.chef}
                                </p>
                                <div className="mt-6 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                                    <span className="text-sm text-stone-500 font-medium">15+ Years Experience</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    );
}