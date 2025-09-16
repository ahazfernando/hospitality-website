import type { Metadata } from 'next';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const ambianceImages = [
    { src: 'https://placehold.co/600x400/f7f7f7/1a1a1a.png?text=Dining+Area', alt: 'Cozy interior dining area' },
    { src: 'https://placehold.co/600x400/1a1a1a/ffffff.png?text=Exterior', alt: 'Restaurant exterior at night' },
    { src: 'https://placehold.co/600x400/c7a157/ffffff.png?text=The+Bar', alt: 'A view of the bar' },
    { src: 'https://placehold.co/600x400/f7f7f7/1a1a1a.png?text=Patio', alt: 'Outdoor patio seating' },
];

export const metadata: Metadata = {
    title: 'About Us - The Golden Fork',
    description: 'Learn about the story, mission, and team behind The Golden Fork.',
};

export default function AboutPage() {
    return (
        <div className="container mx-auto p-6 my-12">
            <h1 className="text-5xl font-bold text-center mb-10">About The Golden Fork</h1>

            <section className="mb-16 bg-yellow-50 p-8 rounded-lg shadow-md text-center">
                <h2 className="text-3xl font-semibold mb-4 text-yellow-800">Our Story</h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Founded in 2024 in one of Melbourne's vibrant laneways, The Golden Fork began as a humble dream to blend Victoria's world-class produce with classic international dishes. We wanted to create a warm, inviting space where every meal tells a story and brings people together.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold text-center border-b-2 border-yellow-500 pb-2 mb-8">Our Ambiance</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {ambianceImages.map((image) => (
                        <Card key={image.src} className="overflow-hidden">
                            <div className="relative h-64 w-full">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transform hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold text-center border-b-2 border-yellow-500 pb-2 mb-8">Our Awards</h2>
                <Card>
                    <CardContent className="p-6 md:p-8">
                        <ul className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-6">
                            <li className="flex items-start gap-4">
                                <span className="text-2xl text-yellow-500 mt-1">🏆</span>
                                <div>
                                    <h4 className="font-bold text-lg">Best Fine Dining in Colombo</h4>
                                    <p className="text-muted-foreground">Colombo Foodie Awards, 2024</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-2xl text-yellow-500 mt-1">🏆</span>
                                <div>
                                    <h4 className="font-bold text-lg">TripAdvisor Traveler's Choice</h4>
                                    <p className="text-muted-foreground">TripAdvisor, 2025</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-2xl text-yellow-500 mt-1">🏆</span>
                                <div>
                                    <h4 className="font-bold text-lg">Excellence in Fusion Cuisine</h4>
                                    <p className="text-muted-foreground">Sri Lanka Culinary Guild, 2023</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-2xl text-yellow-500 mt-1">🏆</span>
                                <div>
                                    <h4 className="font-bold text-lg">Outstanding Service Award</h4>
                                    <p className="text-muted-foreground">National Restaurant Association, 2024</p>
                                </div>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </section>

            <div className="flex flex-col gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            To provide an unforgettable dining experience by combining creative cuisine with exceptional, warm hospitality. We are committed to using fresh, locally-sourced ingredients from right here in Sri Lanka.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Meet the Chef</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            With over 15 years of experience, Chef Alex Chen brings a unique blend of classic techniques and modern innovation to The Golden Fork, letting the quality of local ingredients shine.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}