import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'icon';
}

const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-light active:bg-primary-dark shadow-subtle",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-primary/10",
    outline: "border border-border bg-background hover:bg-muted hover:text-foreground",
    ghost: "hover:bg-muted hover:text-foreground",
};

const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 py-2",
    lg: "h-12 px-8 text-lg",
    icon: "h-10 w-10",
};

export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        />
    );
}
