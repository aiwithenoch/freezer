import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'cold' | 'active' | 'interested' | 'qualified' | 'dead';
}

const variantStyles = {
    cold: "bg-muted text-muted-foreground border border-border",
    active: "bg-primary/10 text-primary border border-primary/20",
    interested: "bg-success/10 text-success border border-success/20",
    qualified: "bg-cyan/10 text-cyan border border-cyan/20",
    dead: "bg-destructive/10 text-destructive border border-destructive/20",
};

export function Badge({ className, variant = "cold", ...props }: BadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                variantStyles[variant],
                className
            )}
            {...props}
        />
    );
}
