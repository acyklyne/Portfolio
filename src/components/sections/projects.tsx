"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedProject !== null) {
      setSelectedProject((selectedProject + 1) % projects.length);
    }
  };

  const handlePrev = () => {
    if (selectedProject !== null) {
      setSelectedProject((selectedProject - 1 + projects.length) % projects.length);
    }
  };

  const currentProject = selectedProject !== null ? projects[selectedProject] : null;
  const currentProjectImage = currentProject ? PlaceHolderImages.find((img) => img.id === currentProject.image) : null;


  return (
    <AnimatedSection as="section" id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">My Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">A selection of my recent work.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => {
            const projectImage = PlaceHolderImages.find((img) => img.id === project.image);
            return (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full"
              >
                <Card className="flex flex-col overflow-hidden h-full transition-shadow duration-300 hover:shadow-xl">
                  {projectImage && (
                    <button 
                      className="aspect-video relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary rounded-t-lg"
                      onClick={() => setSelectedProject(index)}
                    >
                      <Image
                        src={projectImage.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                        data-ai-hint={projectImage.imageHint}
                      />
                    </button>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

       <AnimatePresence>
        {selectedProject !== null && currentProject && currentProjectImage && (
           <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
            <DialogContent className="p-0 max-w-5xl w-full bg-transparent border-0 flex flex-col items-center justify-center">
                <DialogTitle className="sr-only">{currentProject.title}</DialogTitle>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full aspect-video"
                >
                    <Image 
                        src={currentProjectImage.imageUrl} 
                        alt={currentProject.title}
                        fill
                        className="object-contain"
                    />
                </motion.div>
                <div className="absolute top-4 right-4 z-50">
                     <Button variant="ghost" size="icon" onClick={() => setSelectedProject(null)} className="text-white bg-black/50 hover:bg-black/75 hover:text-white">
                        <X className="h-6 w-6" />
                     </Button>
                </div>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 z-50">
                    <Button variant="ghost" size="icon" onClick={handlePrev} className="text-white bg-black/50 hover:bg-black/75 hover:text-white">
                        <ChevronLeft className="h-8 w-8" />
                    </Button>
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 z-50">
                    <Button variant="ghost" size="icon" onClick={handleNext} className="text-white bg-black/50 hover:bg-black/75 hover:text-white">
                        <ChevronRightIcon className="h-8 w-8" />
                    </Button>
                </div>
            </DialogContent>
           </Dialog>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
