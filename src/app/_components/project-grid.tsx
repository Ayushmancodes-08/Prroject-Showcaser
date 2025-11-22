'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { projects, contributors, Contributor, Project } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Github, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const getProjectContributors = (contributorIds: number[]): Contributor[] => {
  return contributorIds.map(id => contributors.find(c => c.id === id)).filter((c): c is Contributor => !!c);
};

function ProjectCard({ project }: { project: Project }) {
  const [contributorsVisible, setContributorsVisible] = useState(false);
  const projectContributors = getProjectContributors(project.contributorIds);

  return (
    <div className="p-1">
      <Card className="h-full flex flex-col overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="font-headline">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow p-0">
          <div className="aspect-video relative">
            <Image
              src={project.image.imageUrl}
              alt={project.image.description}
              fill
              className="object-cover"
              data-ai-hint={project.image.imageHint}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <p className="p-6 text-muted-foreground">{project.description}</p>
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${contributorsVisible ? 'max-h-96' : 'max-h-0'}`}>
            <div className="px-6 pb-6">
              <Separator className="mb-4" />
              <h4 className="text-sm font-semibold mb-3 text-foreground/80">Contributors</h4>
              <ul className="space-y-4">
                {projectContributors.map(contributor => (
                  <li key={contributor.id} className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={contributor.avatar.imageUrl} alt={contributor.name} data-ai-hint={contributor.avatar.imageHint}/>
                      <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                      <p className="font-semibold">{contributor.name}</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                         {contributor.skills.map(skill => (
                           <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                         ))}
                      </div>
                    </div>
                     <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" asChild className="h-7 w-7">
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild className="h-7 w-7">
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-end">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {projectContributors.map(contributor => (
                <Avatar key={contributor.id} className="h-8 w-8 border-2 border-background hover:scale-110 transition-transform">
                  <AvatarImage src={contributor.avatar.imageUrl} alt={contributor.name} data-ai-hint={contributor.avatar.imageHint} />
                  <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              ))}
            </div>
             <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setContributorsVisible(!contributorsVisible)}>
              {contributorsVisible ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              <span className="sr-only">Toggle Contributors</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}


export default function ProjectGrid() {
  return (
    <div>
      <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
