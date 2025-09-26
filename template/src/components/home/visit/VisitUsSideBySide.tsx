'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Car, Train, Calendar, Navigation } from "lucide-react";

export const VisitUsSideBySide = () => {
    const [activeTab, setActiveTab] = useState('location');

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-5xl font-bold text-slate-900 mb-4">Find Us</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Located in the heart of Middle Swan, our restaurant offers an intimate dining experience
                                with easy access and ample amenities.
                            </p>
                        </div>

                        <div>
                            <div className="flex gap-2 border-b border-slate-200">
                                <Button variant="ghost" onClick={() => setActiveTab('location')}
                                        className={`rounded-b-none transition-colors ${activeTab === 'location' ? 'border-b-2 border-blue-700 text-blue-700' : 'text-slate-600'}`}>Location</Button>
                                <Button variant="ghost" onClick={() => setActiveTab('hours')}
                                        className={`rounded-b-none transition-colors ${activeTab === 'hours' ? 'border-b-2 border-blue-700 text-blue-700' : 'text-slate-600'}`}>Hours</Button>
                                <Button variant="ghost" onClick={() => setActiveTab('transport')}
                                        className={`rounded-b-none transition-colors ${activeTab === 'transport' ? 'border-b-2 border-blue-700 text-blue-700' : 'text-slate-600'}`}>Getting
                                    Here</Button>
                            </div>

                            <div className="py-8 min-h-[220px]">
                                {activeTab === 'location' && (
                                    <div className="space-y-6 animate-in fade-in duration-300">
                                        <div className="flex items-start gap-4"><MapPin
                                            className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0"/><p
                                            className="text-slate-600 leading-relaxed">123 Middle Swan<br/>Western
                                            Australia 6056</p></div>
                                        <div className="flex items-start gap-4"><Phone
                                            className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0"/><p
                                            className="text-slate-600">Phone: (08) 9123 4567</p></div>
                                    </div>
                                )}
                                {activeTab === 'hours' && (
                                    <div className="space-y-4 animate-in fade-in duration-300">
                                        <div className="flex justify-between items-center py-2"><span
                                            className="text-slate-600">Monday - Thursday</span><span
                                            className="font-medium text-slate-900">6:00 PM - 10:00 PM</span></div>
                                        <div className="flex justify-between items-center py-2"><span
                                            className="text-slate-600">Friday - Sunday</span><span
                                            className="font-medium text-slate-900">6:00 PM - 11:00 PM</span></div>
                                    </div>
                                )}
                                {activeTab === 'transport' && (
                                    <div className="space-y-4 animate-in fade-in duration-300">
                                        <div className="flex items-start gap-4"><Car
                                            className="h-6 w-6 text-slate-600 mt-1 flex-shrink-0"/><p
                                            className="text-slate-600">Complimentary valet and street parking
                                            available.</p></div>
                                        <div className="flex items-start gap-4"><Train
                                            className="h-6 w-6 text-slate-600 mt-1 flex-shrink-0"/><p
                                            className="text-slate-600">Accessible via bus routes 950, 951. Middle Swan
                                            train station is 10 minutes walk.</p></div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white flex-1 py-6"><Calendar
                                className="mr-2 h-5 w-5"/>Make Reservation</Button>
                            <Button variant="outline" size="lg"
                                    className="border-slate-300 text-slate-700 hover:bg-slate-100 flex-1 py-6"><Navigation
                                className="mr-2 h-5 w-5"/>Get Directions</Button>
                        </div>
                    </div>

                    <div className="lg:sticky lg:top-8">
                        <Card className="overflow-hidden shadow-2xl border-0 h-[600px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5434405111843!2d-0.12874688423059654!3d51.50735397963379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slondon%20eye!5e0!3m2!1sen!2suk!4v1633024800000!5m2!1sen!2suk"
                                width="100%" 
                                height="100%" 
                                style={{border: 0}} 
                                allowFullScreen loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"/>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};
