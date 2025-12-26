import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

export function HeroSection() {
  return (
    <AnimatedSection
      as="section"
      className="relative w-full h-[calc(100vh-4rem)] flex items-start justify-center text-center pt-32"
      style={{
        backgroundImage: 'url("/background/eme4.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5" />

      {/* Content */}
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10 ml-12">
        <h1 className="
          text-4xl font-extrabold tracking-tighter
          sm:text-5xl md:text-6xl lg:text-7xl
          font-headline
          bg-clip-text text-transparent
          bg-gradient-to-r
          from-slate-700 via-teal-500 to-teal-400
        ">
          ACY KLYNE B. AGUILAR
        </h1>

        <p className="mt-4 max-w-md mx-auto text-lg text-muted-foreground md:text-xl">
          A passionate developer crafting modern, interactive, and beautiful web experiences.
        </p>

        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
  