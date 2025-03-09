import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Sentinel - Secure Your Schedule",
	description: "Sentinel helps you manage schedules efficiently with AI-powered tracking.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="h-full">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}>
				{children}
			</body>
		</html>
	);
}

