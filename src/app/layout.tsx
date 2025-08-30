import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio of Yubesh Bhattarai | CSIT Student from Jhapa, Nepal",
  description:
    "Explore the portfolio of Yubesh Bhattarai, a CSIT student from Jhapa, Nepal. Showcasing skills, projects, and achievements in programming, web development, and IT.",
  keywords: [
    "Yubesh Bhattarai",
    "Portfolio",
    "CSIT student Nepal",
    "CSIT student Jhapa",
    "IT student Nepal",
    "Web development Nepal",
    "Programming student Nepal",
    "BSc CSIT Nepal",
    "Tech portfolio Nepal",
    "Software development Nepal",
    "jhapa, Nepal"
  ], icons: {
  icon: [
    { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    { url: "/favicon.png", type: "image/png", sizes: "16x16" },
  ],
  apple: { url: "/favicon.png", sizes: "180x180" }, // for iOS devices
  shortcut: "/favicon.png", // fallback
},

  authors: [{ name: "Yubesh Bhattarai" }],
  openGraph: {
    title: "Portfolio of Yubesh Bhattarai | CSIT Student from Jhapa, Nepal",
    description:
      "Portfolio of Yubesh Bhattarai, a CSIT student from Jhapa, Nepal. Explore projects, skills, and achievements in IT and programming.",
    url: "https://your-portfolio-link.com", // replace with your deployed URL
    siteName: "Yubesh Bhattarai Portfolio",
    images: [
      {
        url: "./profile.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio of Yubesh Bhattarai - CSIT Student Nepal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          
            <Header/>
            <div className="mt-14">
              
            {children}
            </div>
            <Footer />
       
      </body>
    </html>
  );
}

