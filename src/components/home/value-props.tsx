import { ShieldCheck, Zap, Flag } from "lucide-react"

const features = [
    {
        icon: ShieldCheck,
        title: "Premium Fabric",
        description: "High-grade materials tested for maximum durability.",
    },
    {
        icon: Zap,
        title: "Friction-Free Fit",
        description: "Seamless construction for zero distractions.",
    },
    {
        icon: Flag,
        title: "Proudly Indian",
        description: "Forged with local grit for global standards.",
    },
]

export function ValueProps() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center gap-4 group">
                            <div className="p-4 rounded-full bg-secondary/5 text-secondary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <feature.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-secondary">{feature.title}</h3>
                            <p className="text-muted-foreground max-w-xs">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
