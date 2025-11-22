import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex h-[70vh] min-h-[500px] w-full items-center justify-center text-center">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="space-y-3">
             <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                "Code is like humor. When you have to explain it, it’s bad."
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              - Cory House
            </p>
          </div>
           <Button asChild size="lg">
                <Link href="#projects">Explore Projects</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
