import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex h-[80vh] min-h-[600px] w-full items-center justify-center text-center">
      <div className="container px-4 md:px-6 z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Projects Square(CDD)
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl font-light">
              A collaborative space for developers and designers to showcase their work.
            </p>
          </div>
          <Button asChild size="lg" className="rounded-full text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
            <Link href="#projects">
              Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
