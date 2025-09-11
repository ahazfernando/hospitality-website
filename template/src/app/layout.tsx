import type { Metadata } from 'next';
// Import the fonts from next/font
import { Inter, Lora } from 'next/font/google';
import './globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Configure the fonts
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter', // Optional: if you want to use it as a CSS variable
});

const lora = Lora({
    subsets: ['latin'],
    variable: '--font-lora', // Optional
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