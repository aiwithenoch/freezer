"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function Navbar() {
    const pathname = usePathname();
    const isAuthPage = pathname === "/signin" || pathname === "/signup";
    const isLandingPage = pathname === "/";

    if (!isLandingPage && !isAuthPage) return null;

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
                <Link href="/" className="flex items-center gap-3 font-black text-heading group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-blue-glow group-hover:scale-105 transition-transform">
                        F
                    </div>
                    <span className="text-xl tracking-tighter uppercase font-black">FREEZER</span>
                </Link>

                <div className="flex items-center gap-4">
                    <Link href="/signin">
                        <Button variant="ghost" className="font-bold text-muted-foreground hover:text-heading transition-colors">Sign In</Button>
                    </Link>
                    <Link href="/signup">
                        <Button className="font-bold shadow-blue-glow px-6">Get Started</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
