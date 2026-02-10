import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
    return (
        <div className={cn("glass-card rounded-xl p-6 transition-all hover:shadow-2xl", className)}>
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
        <Card className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">{title}</span>
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    <Icon className="h-5 w-5" />
                </div>
            </div>
            <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight">{value}</span>
                {(description || trend) && (
                    <div className="flex items-center gap-1 mt-1">
                        {trend && <span className="text-xs font-semibold text-green-500">{trend}</span>}
                        <span className="text-[10px] text-muted-foreground">{description}</span>
                    </div>
                )}
            </div>
        </Card>
    );
}
