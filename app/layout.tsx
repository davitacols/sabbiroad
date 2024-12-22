import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SabiRoad: AI-Powered Location & Building Recognition",
  description: "Discover buildings and locations effortlessly with SabiRoad. Powered by cutting-edge AI and Google Maps integration for seamless navigation and analysis.",
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
        <ThemeProvider
          themes={["light", "dark"]}
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}