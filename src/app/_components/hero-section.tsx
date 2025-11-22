import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex h-[80vh] min-h-[600px] w-full items-center justify-center text-center">
      <div className="container px-4 md:px-6 z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <blockquote className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground/90">
              "Code is like humor.
              <br />
              When you have to explain it, it's bad."
            </blockquote>
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
