import Image from 'next/image';
import Link from 'next/link';
import { projects, contributors, Contributor } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const getProjectContributors = (contributorIds: number[]): Contributor[] => {
  return contributorIds.map(id => contributors.find(c => c.id === id)).filter((c): c is Contributor => !!c);
};

export default function ProjectGrid() {
  return (
    <div>
      <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => {
          const projectContributors = getProjectContributors(project.contributorIds);
          return (
            <div key={project.id} className="p-1">
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
                </CardContent>
                <CardFooter className="flex justify-between items-end">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex -space-x-2">
                    {projectContributors.map(contributor => (
                      <DropdownMenu key={contributor.id}>
                        <DropdownMenuTrigger asChild>
                           <button className="focus:outline-none">
                            <Avatar className="h-8 w-8 border-2 border-background hover:scale-110 transition-transform">
                              <AvatarImage src={contributor.avatar.imageUrl} alt={contributor.name} data-ai-hint={contributor.avatar.imageHint} />
                              <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          <div className="p-2">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={contributor.avatar.imageUrl} alt={contributor.name} data-ai-hint={contributor.avatar.imageHint}/>
                                <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-semibold">{contributor.name}</p>
                                <div className="flex items-center gap-2 mt-1">
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
                              </div>
                            </div>
                          </div>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  );
}
