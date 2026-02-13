import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const crimsonPro = Crimson_Pro({
    subsets: ["latin"],
    variable: "--font-serif",
});

export const metadata: Metadata = {
    title: "FREEZER | Powerful Cold Email Automation",
    description: "Automate your cold email outreach with high-precision data tools.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${crimsonPro.variable} min-h-screen bg-background font-serif`}>
                <Navbar />
                <div className="flex">
                    {/* Sidebar is hidden via CSS in its component if on landing/auth pages */}
                    <main className="flex-1 overflow-x-hidden">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
