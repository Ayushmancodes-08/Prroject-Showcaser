import Image from 'next/image';
import { mentor } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function MentorSpotlight() {
  return (
    <div>
      <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
        Mentor Spotlight
      </h2>
      <Card className="overflow-hidden shadow-lg rounded-lg">
        <div className="md:flex">
          <div className="md:w-1/3 relative min-h-64 md:min-h-0">
            <Image
              src={mentor.image.imageUrl}
              alt={mentor.name}
              fill
              className="object-cover"
              data-ai-hint={mentor.image.imageHint}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="md:w-2/3 flex flex-col justify-center">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{mentor.name}</CardTitle>
              <CardDescription>{mentor.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{mentor.description}</p>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}
