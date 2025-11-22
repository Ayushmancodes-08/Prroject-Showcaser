import { contributors } from '@/lib/data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ContributorDisplay() {
  return (
    <div>
      <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
        Meet the Team
      </h2>
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {contributors.map((contributor) => (
            <AccordionItem value={`item-${contributor.id}`} key={contributor.id}>
              <AccordionTrigger className="hover:no-underline p-4 rounded-lg hover:bg-muted/50">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={contributor.avatar.imageUrl} alt={contributor.name} data-ai-hint={contributor.avatar.imageHint} />
                    <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-left">{contributor.name}</h3>
                    <p className="text-sm text-muted-foreground text-left">{contributor.role}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="pl-[68px] pr-4 pb-4 text-muted-foreground">{contributor.bio}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
