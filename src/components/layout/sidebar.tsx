"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Users,
    Upload,
    Mail,
    Settings,
    LogOut,
    ChevronRight
} from "lucide-react";

const NAV_ITEMS = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Leads", href: "/leads", icon: Users },
    { name: "Upload", href: "/upload", icon: Upload },
    { name: "Campaigns", href: "/campaigns", icon: Mail },
    { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r bg-card/50 backdrop-blur-xl lg:flex">
            <div className="flex h-16 items-center border-b px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-primary">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        F
                    </div>
                    <span className="text-xl tracking-tight">FREEZER</span>
                </Link>
            </div>

            <nav className="flex-1 space-y-1 px-3 py-4">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-accent/50",
                                isActive
                                    ? "bg-primary text-primary-foreground hover:bg-primary shadow-md"
                                    : "text-muted-foreground"
                            )}
                        >
                            <div className="flex items-center gap-3">
                                <Icon className={cn("h-5 w-5", isActive ? "text-primary-foreground" : "text-primary")} />
                                {item.name}
                            </div>
                            {isActive && <ChevronRight className="h-4 w-4 opacity-70" />}
                        </Link>
                    );
                })}
            </nav>

            <div className="border-t p-4">
                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-destructive/10 hover:text-destructive">
                    <LogOut className="h-5 w-5" />
                    Sign Out
                </button>
            </div>
        </div>
    );
}
