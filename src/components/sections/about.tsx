"use client";

import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === "about-me");

  return (
    <AnimatedSection as="section" id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">About Me</h2>
          <p className="mt-4 text-lg text-muted-foreground">A little bit about my journey and skills.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-2">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={500}
                height={500}
                className="rounded-lg shadow-lg aspect-square object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>

          <div className="md:col-span-3">
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate and creative developer with a knack for building beautiful, interactive, and accessible web applications. With a strong foundation in modern frontend technologies, I strive to create seamless user experiences that are both functional and delightful.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              From crafting pixel-perfect UIs to architecting scalable solutions, I love tackling new challenges and continuously learning. When I'm not coding, you can find me exploring new design trends or contributing to open-source projects.
            </p>

            {/* CV Download Button */}
            <Button asChild size="lg">
              <a
                href="/cv/ACY_KLYNE_AGUILAR-CV.pdf"
                download="ACY_KLYNE_AGUILAR-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 font-headline">My Skillset</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {skills.map((skill) => (
              <Link key={skill.name} href={skill.url} target="_blank" rel="noopener noreferrer" className="block">
                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center justify-center gap-2 p-4 border rounded-lg bg-background h-full cursor-pointer"
                >
                  <skill.icon className="h-10 w-10 text-primary" />
                  <p className="text-sm font-medium text-center">{skill.name}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
