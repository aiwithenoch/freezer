"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/layout/sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 lg:pl-64">
                <main className="container mx-auto p-4 md:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
