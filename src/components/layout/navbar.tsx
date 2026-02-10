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
        <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-primary">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        F
                    </div>
                    <span className="text-xl tracking-tight">FREEZER</span>
                </Link>

                <div className="flex items-center gap-4">
                    <Link href="/signin">
                        <Button variant="ghost">Sign In</Button>
                    </Link>
                    <Link href="/signup">
                        <Button>Get Started</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
