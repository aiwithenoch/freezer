"use client";

export default function Loading() {
    return (
        <div className="flex flex-col gap-8 animate-pulse">
            <div className="flex items-center justify-between">
                <div className="space-y-2">
                    <div className="h-8 w-48 rounded-lg bg-muted" />
                    <div className="h-4 w-64 rounded-lg bg-muted" />
                </div>
                <div className="h-10 w-32 rounded-lg bg-muted" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-32 rounded-2xl border border-border bg-card/50" />
                ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                <div className="col-span-2 h-[400px] rounded-2xl border border-border bg-card/50" />
                <div className="h-[400px] rounded-2xl border border-border bg-card/50" />
            </div>
        </div>
    );
}
