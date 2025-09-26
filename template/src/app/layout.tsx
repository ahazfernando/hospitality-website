import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import './globals.css';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const lora = Lora({
    subsets: ['latin'],
    variable: '--font-lora',
});

export const metadata: Metadata = {
    title: 'The Golden Fork',
    description: 'Where Culinary Art Meets Warm Hospitality',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${inter.variable} ${lora.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}