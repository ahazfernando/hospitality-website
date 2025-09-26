import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Award } from "lucide-react";

export const HeroVideo = () => (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <video
            src="https://cdn.pixabay.com/video/2023/08/11/174989-853381650_large.mp4"
            className="absolute z-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/40 z-10" />

        <div className="relative z-20 text-center max-w-5xl px-6">
            <div className="space-y-8">
                <Badge className="bg-amber-500/20 text-amber-200 border-amber-500/30 px-6 py-3 text-sm font-semibold tracking-wider backdrop-blur">
                    EXQUISITE DINING EXPERIENCE
                </Badge>

                <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter">
                    The Golden
                    <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Fork
          </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
                    Where culinary artistry meets warm hospitality. Step into a world of exceptional flavors and unforgettable moments.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-10 py-7 text-lg font-bold shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105">
                        Make a Reservation
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-white/30 text-black hover:bg-white/10 px-10 py-7 text-lg font-semibold backdrop-blur transition-all duration-300">
                        View Our Story
                    </Button>
                </div>

                <div className="flex items-center justify-center gap-8 pt-8 text-white/80">
                    <div className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        <span className="text-sm font-medium">500+ Dishes Served Daily</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Award className="h-5 w-5" />
                        <span className="text-sm font-medium">Award-Winning Chef</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
