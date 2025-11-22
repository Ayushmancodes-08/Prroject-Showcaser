import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, PlayCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id.toString() === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        <header className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">{project.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">{project.description}</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-8">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group">
              <Image
                src={project.videoThumbnail.imageUrl}
                alt={`${project.title} video thumbnail`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={project.videoThumbnail.imageHint}
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                 <Link href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                    <PlayCircle className="h-20 w-20 text-white/80 hover:text-white transition-colors" />
                 </Link>
              </div>
            </div>
             <Button asChild size="lg" className="w-full">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                View Live App
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-xl border-border/20 bg-card/80 backdrop-blur-sm shadow-lg">
                <h2 className="font-headline text-2xl font-bold mb-4">Problem Statement</h2>
                <p className="text-muted-foreground leading-relaxed">{project.problemStatement}</p>
            </div>
             <div className="p-6 rounded-xl border-border/20 bg-card/80 backdrop-blur-sm shadow-lg">
                <h2 className="font-headline text-2xl font-bold mb-4">Solution</h2>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>
             <div className="p-6 rounded-xl border-border/20 bg-card/80 backdrop-blur-sm shadow-lg">
                <h2 className="font-headline text-2xl font-bold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                        <Badge key={tech} variant="secondary" className="text-md">{tech}</Badge>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
