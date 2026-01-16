import { portfolioData } from "@/data/portfolio"

export function SkillsGrid() {
    const { skills } = portfolioData;

    return (
        <section id="skills" className="container py-24 border-t">
            <div className="flex flex-col gap-2 mb-12">
                <h2 className="text-3xl font-bold tracking-tight uppercase">Collections</h2>
                <p className="text-muted-foreground">Curated technical stack and materials.</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {skills.map((category, index) => (
                    <div key={index} className="space-y-4">
                        <h3 className="font-semibold uppercase tracking-wider text-sm">{category.category}</h3>
                        <div className="flex flex-col gap-2">
                            {category.items.map((skill) => (
                                <div key={skill.name} className="flex justify-between text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default">
                                    <span>{skill.name}</span>
                                    <span className="opacity-30">0{skill.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
