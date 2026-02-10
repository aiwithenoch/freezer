import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
    return (
        <div className={cn("bg-card text-card-foreground rounded-2xl p-6 border border-border shadow-subtle transition-all hover:shadow-md", className)}>
            {children}
        </div>
    );
}

export function StatCard({ title, value, icon: Icon, description, trend }: {
    title: string;
    value: string | number;
    icon: any;
    description?: string;
    trend?: string;
}) {
    return (
        <Card className="flex flex-col gap-2 border-l-4 border-l-primary">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{title}</span>
                <div className="rounded-full bg-primary/5 p-2 text-primary">
                    <Icon className="h-5 w-5" />
                </div>
            </div>
            <div className="flex flex-col">
                <span className="text-3xl font-bold tracking-tight text-heading">{value}</span>
                {(description || trend) && (
                    <div className="flex items-center gap-1 mt-1">
                        {trend && <span className="text-xs font-bold text-success">{trend}</span>}
                        <span className="text-[11px] font-medium text-muted-foreground">{description}</span>
                    </div>
                )}
            </div>
        </Card>
    );
}
