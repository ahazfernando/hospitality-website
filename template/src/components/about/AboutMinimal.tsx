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
                <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
                    <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
                        <div className="space-y-4 sm:space-y-6">
                            <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                                <div className="w-8 sm:w-12 h-px bg-stone-300"></div>
                                <span className="text-stone-500 text-xs sm:text-sm uppercase tracking-[0.15em] font-medium">Est. Melbourne 2024</span>
                                <div className="w-8 sm:w-12 h-px bg-stone-300"></div>
                            </div>
                            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extralight text-slate-900 tracking-tight">
                                The Golden
                                <span className="block text-stone-700 font-light">Fork</span>
                            </h1>
                        </div>
                        <div className="w-20 sm:w-32 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto"></div>
                        <p className="text-lg sm:text-xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto px-4">
                            Where Australian culinary excellence meets refined hospitality in Melbourne's dining landscape
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-20 sm:space-y-24 lg:space-y-28">
                {/* Story Section */}
                <section className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
                        <div className="col-span-12 lg:col-span-6 space-y-6 sm:space-y-8">
                            <div className="space-y-3 sm:space-y-4">
                                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                                    <MapPin className="w-4 h-4 text-stone-500" />
                                    <span className="text-stone-500 text-xs uppercase tracking-wider font-medium">Melbourne Origins</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-light text-slate-900 leading-tight">
                                    Our <span className="text-stone-700">Journey</span>
                                </h2>
                                <div className="w-12 sm:w-16 h-px bg-stone-400"></div>
                            </div>
                            <p className="text-stone-600 leading-relaxed text-base sm:text-lg font-light">
                                {aboutContent.story}
                            </p>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-2">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-stone-500" />
                                    <span className="text-sm text-stone-500 font-medium">Founded 2024</span>
                                </div>
                                <div className="hidden sm:block w-px h-4 bg-stone-300"></div>
                                <span className="text-sm text-stone-500">Melbourne's Laneways</span>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6 relative mt-8 lg:mt-0">
                            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-stone-100 shadow-xl">
                                <Image
                                    src={ambianceImages[0].src}
                                    alt={ambianceImages[0].alt}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/90 backdrop-blur-sm rounded-2xl border border-stone-200/50 shadow-lg flex items-center justify-center">
                                <ChefHat className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-stone-600" />
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
                    <div className="grid grid-cols-12 gap-8">
                        {ambianceImages.slice(1).map((image, index) => (
                            <div key={image.src} className="group col-span-12 md:col-span-4">
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
                <section className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-12 mb-12 sm:mb-16">
                        <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center space-y-3 sm:space-y-4">
                        <Badge variant="outline" className="text-xs uppercase tracking-wider border-stone-200 text-stone-600 mb-3 sm:mb-4">
                            Industry Recognition
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl font-light text-slate-900">Celebrated <span className="text-stone-700">Excellence</span></h2>
                        <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-6 sm:gap-8">
                        <div className="col-span-12 lg:col-span-7">
                            <div className="grid grid-cols-2 grid-rows-3 gap-3 sm:gap-4 h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[40rem]">
                                <div className="col-span-1 row-span-2 relative overflow-hidden rounded-xl sm:rounded-2xl group shadow-xl">
                                    <Image
                                        src="/industryrecognition/industrygrid1.jpg"
                                        alt="Industry Recognition"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                                </div>
                                <div className="col-span-1 row-span-1 relative overflow-hidden rounded-xl sm:rounded-2xl group shadow-xl">
                                    <Image
                                        src="/industryrecognition/industrygrid2.jpg"
                                        alt="Culinary Excellence"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                                </div>
                                <div className="col-span-1 row-span-1 relative overflow-hidden rounded-xl sm:rounded-2xl group shadow-xl">
                                    <Image
                                        src="/industryrecognition/industrygrid3.jpg"
                                        alt="Award Ceremony"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                                </div>
                                <div className="col-span-2 row-span-1 relative overflow-hidden rounded-xl sm:rounded-2xl group shadow-xl">
                                    <Image
                                        src="/industryrecognition/industrygrid4.jpg"
                                        alt="Restaurant Recognition"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5 mt-8 lg:mt-0">
                            <div className="flex flex-col gap-4 sm:gap-6">
                                {awards.map((award, index) => (
                                    <div key={index} className="group relative overflow-hidden">
                                        <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-500 border border-white/40 hover:border-stone-200/50 hover:shadow-lg hover:-translate-y-1">
                                            <div className="relative flex-shrink-0">
                                                <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-stone-700" />
                                                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                                                    <span className="text-white text-xs">✓</span>
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-1 group-hover:text-stone-700 transition-colors">
                                                    {award.title}
                                                </h3>
                                                <p className="text-stone-600 text-sm mb-2">
                                                    {award.organization}
                                                </p>
                                                <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-700 border-stone-200">
                                                    {award.year}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Mission & Chef - Full Width */}
            <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
                <section>
                    <div className="grid grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
                        <Card className="col-span-12 lg:col-span-6 border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group">
                            <CardHeader className="pb-4 sm:pb-6 pt-6 sm:pt-8 px-6 sm:px-8">
                                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-stone-100 flex items-center justify-center">
                                        <Target className="w-4 h-4 sm:w-5 sm:h-5 text-stone-600" />
                                    </div>
                                    <Badge variant="secondary" className="text-xs uppercase tracking-wider bg-stone-100 text-stone-700">
                                        Philosophy
                                    </Badge>
                                </div>
                                <CardTitle className="text-xl sm:text-2xl font-light text-slate-900 group-hover:text-stone-700 transition-colors">
                                    Our Mission
                                </CardTitle>
                                <div className="w-10 sm:w-12 h-px bg-stone-400"></div>
                            </CardHeader>
                            <CardContent className="px-6 sm:px-8 pb-6 sm:pb-8">
                                <p className="text-stone-600 leading-relaxed text-base sm:text-lg font-light">
                                    {aboutContent.mission}
                                </p>
                                <div className="mt-4 sm:mt-6 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                                    <span className="text-sm text-stone-500 font-medium">Australian Excellence</span>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card className="col-span-12 lg:col-span-6 border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group">
                            <CardHeader className="pb-4 sm:pb-6 pt-6 sm:pt-8 px-6 sm:px-8">
                                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-stone-100 flex items-center justify-center">
                                        <ChefHat className="w-4 h-4 sm:w-5 sm:h-5 text-stone-600" />
                                    </div>
                                    <Badge variant="secondary" className="text-xs uppercase tracking-wider bg-stone-100 text-stone-700">
                                        Leadership
                                    </Badge>
                                </div>
                                <CardTitle className="text-xl sm:text-2xl font-light text-slate-900 group-hover:text-stone-700 transition-colors">
                                    Executive Chef
                                </CardTitle>
                                <div className="w-10 sm:w-12 h-px bg-stone-400"></div>
                            </CardHeader>
                            <CardContent className="px-6 sm:px-8 pb-6 sm:pb-8">
                                <p className="text-stone-600 leading-relaxed text-base sm:text-lg font-light">
                                    {aboutContent.chef}
                                </p>
                                <div className="mt-4 sm:mt-6 flex items-center gap-2">
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