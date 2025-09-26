'use client';

import { DealsHorizontal } from "@/components/home/deals/DealsHorizontal";
import { DealsMinimalist } from "@/components/home/deals/DealsMinimalist";
import { DealsOverlay } from "@/components/home/deals/DealsOverlay";
import { HeroMinimalist } from "@/components/home/hero/HeroMinimalist";
import { HeroSplitScreen } from "@/components/home/hero/HeroSplitScreen";
import { HeroVideo } from "@/components/home/hero/HeroVideo";
import { PopularDishesBento } from "@/components/home/popular/PopularDishesBento";
import { PopularDishesGlassmorphism } from "@/components/home/popular/PopularDishesGlassmorphism";
import { PopularDishesMinimal } from "@/components/home/popular/PopularDishesMinimal";
import { TestimonialsCarousel } from "@/components/home/testimonials/TestimonialsCarousel";
import { TestimonialsFloating } from "@/components/home/testimonials/TestimonialsFloating";
import { TestimonialsMinimal } from "@/components/home/testimonials/TestimonialsMinimal";
import { VisitUsHero } from "@/components/home/visit/VisitUsHero";
import { VisitUsInformation } from "@/components/home/visit/VisitUsInformation";
import { VisitUsSideBySide } from "@/components/home/visit/VisitUsSideBySide";

export default function HomePage() {

    return (
        <main className="flex-grow">
            <VisitUsSideBySide/> 
        </main>
    );
}