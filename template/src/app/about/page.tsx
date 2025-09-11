import type { Metadata } from 'next';
import Image from 'next/image';

// data
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

            {/* Our Story */}
            <section className="mb-16 bg-yellow-50 p-8 rounded-lg shadow-md text-center">
                <h2 className="text-3xl font-semibold mb-4 text-yellow-800">Our Story</h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Founded in 2024 in the heart of Colombo, The Golden Fork began as a humble dream to blend Sri Lanka's rich culinary heritage with classic international dishes. We wanted to create a warm, inviting space where every meal tells a story and brings people together.
                </p>
            </section>

            {/* Our Ambiance */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold text-center border-b-2 border-yellow-500 pb-2 mb-8">Our Ambiance</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {ambianceImages.map((image) => (
                        <div key={image.src} className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="fill"
                                objectFit="cover"
                                className="transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission & Chef */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Mission */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-2 text-black">Our Mission</h3>
                    <p className="text-gray-600 mt-2">
                        To provide an unforgettable dining experience by combining creative cuisine with exceptional, warm hospitality. We are committed to using fresh, locally-sourced ingredients from right here in Sri Lanka.
                    </p>
                </div>
                {/* Chef */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-2 text-black">Meet the Chef</h3>
                    <p className="text-gray-600 mt-2">
                        With over 15 years of experience, Chef Alex Chen brings a unique blend of classic techniques and modern innovation to The Golden Fork, letting the quality of local ingredients shine.
                    </p>
                </div>
            </div>
        </div>
    );
}