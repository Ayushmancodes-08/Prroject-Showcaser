export default function HeroSection() {
  return (
    <section className="relative flex h-[60vh] min-h-[400px] w-full items-center justify-center text-center">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            "Code is like humor. When you have to explain it, it’s bad."
          </h1>
          <p className="mt-6 text-lg text-foreground/80 md:text-xl">
            - Cory House
          </p>
        </div>
      </div>
    </section>
  );
}
