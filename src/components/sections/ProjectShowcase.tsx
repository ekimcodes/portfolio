import { Badge } from "@/components/ui/badge"
import { portfolioData } from "@/data/portfolio"
import { ArrowUpRight } from "lucide-react"

export function ProjectShowcase() {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="container py-24">
            <div className="flex flex-col gap-2 mb-12">
                <h2 className="text-3xl font-bold tracking-tight uppercase">New Arrivals</h2>
                <p className="text-muted-foreground">Latest work and experiments from the lab.</p>
            </div>

            <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <a key={index} href={project.githubUrl} target="_blank" className="group block cursor-pointer">
                        {/* Image Placeholder */}
                        <div className="aspect-[4/5] w-full overflow-hidden bg-secondary mb-4 relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted flex items-center justify-center p-6">
                                <span className="text-muted-foreground/30 font-bold text-4xl uppercase tracking-widest text-center break-words w-full">
                                    {project.name}
                                </span>
                            </div>

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                            {/* quick add button style overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                                <div className="bg-white dark:bg-zinc-950 border border-input text-center py-3 text-sm font-medium uppercase tracking-widest shadow-lg transition-transform hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-black">
                                    View Project
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="flex justify-between items-start">
                                <h3 className="font-medium text-lg uppercase tracking-tight">{project.name}</h3>
                                <span className="text-sm text-muted-foreground">$ {project.language}</span>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-1">{project.description}</p>

                            <div className="pt-2 flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] uppercase tracking-wider text-muted-foreground/60">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
