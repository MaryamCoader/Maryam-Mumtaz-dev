import { cn } from "@/lib/utils";

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
    return (
        <section id={id} className={cn("py-12 md:py-20 relative scroll-mt-16", className)}>
            <div className="container mx-auto px-5">
                {children}
            </div>
        </section>
    );
}
