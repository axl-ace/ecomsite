import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import TopBanner from "@/components/topBanner";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React from "react";
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Clothik",
	description: "A modern day clothing brand just for you.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${manrope.className} antialiased`}>
				<div className="">
					<TopBanner />
				</div>
				<div className="sticky top-0 z-30 w-full">
					<Navbar />
				</div>
                {children}
                <div>
                    <Footer />
                </div>
			</body>
		</html>
	);
}
