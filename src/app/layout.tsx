import "@/styles/index.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Michael Wiens Portfolio",
    description: "Portfolio Website"
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>{children}</body>
        </html>
    );
}
