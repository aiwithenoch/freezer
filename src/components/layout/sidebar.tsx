"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Users,
    Upload,
    Mail,
    BarChart3,
    Inbox,
    ShieldCheck,
    Settings,
    LogOut
} from "lucide-react";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const NAV_ITEMS = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Leads", href: "/leads", icon: Users },
    { name: "Upload", href: "/upload", icon: Upload },
    { name: "Campaigns", href: "/campaigns", icon: Mail },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Inbox", href: "/inbox", icon: Inbox },
    { name: "Deliverability", href: "/settings/deliverability", icon: ShieldCheck },
    { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            toast.success("Signed out successfully");
            router.push("/signin");
            router.refresh();
        } catch (error: any) {
            toast.error(error.message || "Failed to sign out");
        }
    };

    return (
        <div className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r bg-card/50 backdrop-blur-xl lg:flex">
            <div className="flex h-20 items-center px-6 border-b border-border/50 bg-white/50 backdrop-blur-md">
                <Link href="/" className="flex items-center gap-3 font-black text-heading group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-blue-glow group-hover:scale-105 transition-transform">
                        F
                    </div>
                    <span className="text-xl tracking-tighter uppercase font-black">FREEZER</span>
                </Link>
            </div>

            <nav className="flex-1 space-y-1.5 px-4 py-8">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "group flex items-center justify-between rounded-xl px-4 py-3 text-xs font-black transition-all font-sans uppercase tracking-[0.1em]",
                                isActive
                                    ? "bg-primary/5 text-primary border border-primary/10 shadow-sm"
                                    : "text-muted-foreground hover:bg-muted hover:text-heading"
                            )}
                        >
                            <div className="flex items-center gap-3">
                                <Icon className={cn("h-4 w-4 transition-all", isActive ? "text-primary drop-shadow-[0_0_8px_rgba(37,99,235,0.4)]" : "text-muted-foreground group-hover:text-heading")} />
                                <span>{item.name}</span>
                            </div>
                            {isActive && <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-blue-glow" />}
                        </Link>
                    );
                })}
            </nav>

            <div className="border-t p-4">
                <button
                    onClick={handleSignOut}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-destructive/10 hover:text-destructive"
                >
                    <LogOut className="h-5 w-5" />
                    Sign Out
                </button>
            </div>
        </div>
    );
}
