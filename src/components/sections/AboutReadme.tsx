import { portfolioData } from "@/data/portfolio"
import { ArrowDown } from "lucide-react"

export function AboutReadme() {
    const { about } = portfolioData;

    return (
        <section className="container flex min-h-[90vh] flex-col justify-center py-24 relative">
            <div className="flex max-w-4xl flex-col gap-8">
                <div className="animate-fade-in-up">
                    <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                        Spring 2026
                    </span>
                    <h1 className="mt-4 text-5xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-[0.9]">
                        {about.firstName} <br /> {about.lastName}
                    </h1>
                </div>

                <div className="max-w-xl space-y-8 animate-fade-in-up-delay-1">
                    <p className="text-xl leading-relaxed text-muted-foreground">
                        {about.description.replace(/\*\*/g, '')}
                    </p>

                    <div className="flex gap-4">
                        <a href="#projects" className="inline-flex h-12 items-center justify-center bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                            View Collection
                        </a>
                        <a href="#about" className="inline-flex h-12 items-center justify-center border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                            Read Story
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce animate-fade-in-up-delay-2">
                <ArrowDown className="text-muted-foreground h-6 w-6" />
            </div>
        </section>
    )
}
