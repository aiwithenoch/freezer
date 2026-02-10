import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'cold' | 'active' | 'interested' | 'qualified' | 'dead';
}

const variantStyles = {
    cold: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
    active: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    interested: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    qualified: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
    dead: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
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
