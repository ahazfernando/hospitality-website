'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const dealsData = [
    {
        alt: 'Pasta Perfection',
        src: 'https://placehold.co/320x224/c7a157/ffffff.png?text=Pasta',
        category: 'Pasta',
        title: 'Pasta Perfection',
        description: 'Indulge in our signature pasta dishes this weekend.',
        price: '$18.99',
    },
    {
        alt: 'Steak Sensation',
        src: 'https://placehold.co/320x224/d94343/ffffff.png?text=Steak',
        category: 'Steak',
        title: 'Steak Sensation',
        description: 'Savor the finest cuts of steak, expertly grilled.',
        price: '$29.99',
    },
    {
        alt: 'Seafood Delight',
        src: 'https://placehold.co/320x224/1a1a1a/ffffff.png?text=Seafood',
        category: 'Seafood',
        title: 'Seafood Delight',
        description: 'Fresh catches of the day, prepared to perfection.',
        price: '$25.99',
    },
    {
        alt: 'Vegan Burger',
        src: 'https://placehold.co/320x224/22c55e/ffffff.png?text=Vegan',
        category: 'Vegan',
        title: 'Vegan Burger',
        description: 'A delicious and hearty plant-based burger.',
        price: '$15.99',
    },
    {
        alt: 'Gourmet Pizza',
        src: 'https://placehold.co/320x224/f59e0b/ffffff.png?text=Pizza',
        category: 'Pizza',
        title: 'Gourmet Pizza',
        description: 'Artisanal pizza with premium toppings.',
        price: '$22.50',
    },
];

const ITEMS_PER_PAGE = 3;

export default function HomePage() {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(dealsData.length / ITEMS_PER_PAGE);
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const visibleDeals = dealsData.slice(startIndex, endIndex);

    return (
        <main className="flex-grow">
            <section
                className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center py-20 text-center text-white"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://placehold.co/1920x1080/1a1a1a/ffffff.png?text=The+Golden+Fork')` }}
            >
                <div className="max-w-3xl px-4">
                    <h1 className="text-5xl font-bold md:text-7xl">The Golden Fork</h1>
                    <p className="mt-4 text-lg md:text-xl">Where Culinary Art Meets Warm Hospitality</p>
                </div>
            </section>

            <section className="bg-[var(--background-white)] py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-[var(--secondary-dark-charcoal)]">Deals</h2>
                    <div className="mt-12">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {visibleDeals.map((deal) => (
                                <Card key={deal.title} className="flex w-full flex-col overflow-hidden">
                                    <Image alt={deal.alt} className="h-56 w-full object-cover" src={deal.src} width={320} height={224} />
                                    <CardHeader>
                                        <p className="text-sm uppercase text-muted-foreground">{deal.category}</p>
                                        <CardTitle>{deal.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex flex-grow flex-col">
                                        <p className="flex-grow text-muted-foreground">{deal.description}</p>
                                        <p className="mt-4 text-2xl font-bold text-[var(--secondary-dark-charcoal)]">{deal.price}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="mt-8 flex justify-center space-x-2">
                            {[...Array(totalPages)].map((_, index) => (
                                <Button
                                    key={index}
                                    onClick={() => setCurrentPage(index)}
                                    variant={currentPage === index ? 'default' : 'outline'}
                                    size="icon"
                                    className="h-2 w-2 rounded-full"
                                    aria-label={`Go to page ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[var(--background-light-gray)] py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-4xl font-bold text-[var(--secondary-dark-charcoal)]">Popular Dishes</h2>
                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="overflow-hidden">
                            <Image alt="Grilled Salmon" className="h-64 w-full object-cover" src="https://placehold.co/400x256/c7a157/ffffff.png?text=Grilled+Salmon" width={400} height={256} />
                            <CardHeader>
                                <CardTitle>Grilled Salmon with Asparagus</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>Freshly grilled salmon served with a side of tender asparagus spears.</CardDescription>
                            </CardContent>
                        </Card>
                        <Card className="overflow-hidden">
                            <Image alt="Margherita Pizza" className="h-64 w-full object-cover" src="https://placehold.co/400x256/d94343/ffffff.png?text=Pizza" width={400} height={256} />
                            <CardHeader>
                                <CardTitle>Classic Margherita Pizza</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>Traditional pizza with fresh mozzarella, basil, and a vibrant tomato sauce.</CardDescription>
                            </CardContent>
                        </Card>
                        <Card className="overflow-hidden">
                            <Image alt="Beef Tenderloin" className="h-64 w-full object-cover" src="https://placehold.co/400x256/1a1a1a/ffffff.png?text=Beef+Tenderloin" width={400} height={256} />
                            <CardHeader>
                                <CardTitle>Beef Tenderloin with Red Wine Sauce</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>Tender beef tenderloin with a rich and savory red wine reduction.</CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="bg-[var(--background-white)] py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-4xl font-bold text-[var(--secondary-dark-charcoal)]">From Our Customers</h2>
                    <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
                        <Card>
                            <CardContent className="p-8">
                                <p className="italic text-muted-foreground">"The Golden Fork is a culinary gem! The food is exquisite, and the service is impeccable. A must-visit for any food lover."</p>
                                <p className="mt-4 font-semibold text-[var(--primary-gold)]">- Sarah L.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-8">
                                <p className="italic text-muted-foreground">"I had the most amazing dining experience at The Golden Fork. The ambiance is perfect, and the staff is incredibly friendly. Highly recommended!"</p>
                                <p className="mt-4 font-semibold text-[var(--primary-gold)]">- Michael B.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-8">
                                <p className="italic text-muted-foreground">"From the appetizers to the desserts, every dish was a masterpiece. The flavors were rich and complex, and the presentation was stunning."</p>
                                <p className="mt-4 font-semibold text-[var(--primary-gold)]">- Emily R.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="bg-[var(--background-light-gray)] py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-4xl font-bold text-[var(--secondary-dark-charcoal)]">Visit Us</h2>
                    <div className="mt-12 grid gap-12 md:grid-cols-2">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold">Opening Hours</h3>
                                <p className="mt-2 text-muted-foreground">Monday - Sunday: 6:00 PM - 11:00 PM</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Address</h3>
                                <p className="mt-2 text-muted-foreground">123 Middle Swan, Western Australia</p>
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-lg">
                            <iframe
                                allowFullScreen
                                className="rounded-lg"
                                height="450"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9917497.847893184!2d113.33895307826236!3d-25.2743980416238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aeaf79cfb5db%3A0x504f0b535df4b40!2sAustralia!5e0!3m2!1sen!2sau!4v1633028302322!5m2!1sen!2sau"
                                style={{ border: 0 }}
                                width="100%"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}