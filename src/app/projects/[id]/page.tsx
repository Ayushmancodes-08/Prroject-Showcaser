
import { projects, contributors, Contributor } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, PlayCircle, ExternalLink, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const getProjectContributors = (contributorIds: number[]): Contributor[] => {
  return contributorIds.map(id => contributors.find(c => c.id === id)).filter((c): c is Contributor => !!c);
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id.toString() === params.id);

  if (!project) {
    notFound();
  }

  const projectContributors = getProjectContributors(project.contributorIds);

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
            <Card className="p-6 rounded-xl border-border/20 bg-card/80 backdrop-blur-sm shadow-lg">
                <h2 className="font-headline text-2xl font-bold mb-4">Problem Statement</h2>
                <p className="text-muted-foreground leading-relaxed">{project.problemStatement}</p>
            </Card>
             <Card className="p-6 rounded-xl border-border/20 bg-card/80 backdrop-blur-sm shadow-lg">
                <h2 className="font-headline text-2xl font-bold mb-4">Solution</h2>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </Card>
             <Card className="p-6 rounded-xl border-border/20 bg-card/80 backdrop-blur-sm shadow-lg">
                <h2 className="font-headline text-2xl font-bold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                        <Badge key={tech} variant="secondary" className="text-md">{tech}</Badge>
                    ))}
                </div>
            </Card>
          </div>
        </div>
        
        <section className="mt-16">
          <h2 className="font-headline text-3xl font-bold text-center mb-8">Contributors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectContributors.map(contributor => (
              <Card key={contributor.id} className="overflow-hidden shadow-lg rounded-xl border-border/20 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-primary/50">
                    <AvatarImage src={contributor.avatar.imageUrl} alt={contributor.name} data-ai-hint={contributor.avatar.imageHint} />
                    <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold font-headline">{contributor.name}</h3>
                  <p className="text-sm text-muted-foreground">{contributor.role}</p>
                  <div className="flex justify-center gap-2 mt-4">
                     <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-foreground">
                      <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-foreground">
                      <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

