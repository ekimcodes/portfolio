import { portfolioData } from "@/data/portfolio"

export function ExperienceTimeline() {
    const { experience } = portfolioData;

    return (
        <section id="about" className="container py-24 border-t">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight uppercase">Brand History</h2>
                    <p className="text-muted-foreground max-w-sm">
                        Establishing a legacy of high-performance engineering globally since 2023.
                    </p>
                </div>

                <div className="space-y-8">
                    {experience.map((job, index) => (
                        <div key={index} className="group relative border-l pl-8 pb-8 last:pb-0 hover:border-primary transition-colors border-muted">
                            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-background border border-muted-foreground group-hover:border-primary group-hover:bg-primary transition-colors" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="font-semibold text-lg">{job.role} @ {job.company}</h3>
                                <span className="text-sm font-mono text-muted-foreground">{job.year}</span>
                            </div>

                            <ul className="space-y-1">
                                {job.description.map((desc, i) => (
                                    <li key={i} className="text-sm text-muted-foreground">{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
