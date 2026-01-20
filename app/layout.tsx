import type { Metadata } from "next";
import { Archivo, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/structured-data";
import { WaitlistProvider } from "@/components/waitlist-modal";

const archivo = Archivo({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const baseUrl = "https://useinsyte.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Insyte – AI-Powered Desktop Analytics for Data Professionals",
    template: "%s | Insyte",
  },
  description:
    "Build Tableau and Power BI-level analytics faster. Insyte is a desktop-native AI analytics tool with natural language queries, modern architecture, and no-friction data visualization. Join the waitlist.",
  keywords: [
    "AI analytics",
    "desktop analytics",
    "data visualization",
    "Power BI alternative",
    "Tableau alternative",
    "local-first analytics",
    "natural language data queries",
  ],
  authors: [{ name: "Insyte" }],
  creator: "Insyte",
  publisher: "Insyte",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Insyte",
    title: "Insyte – AI-Powered Desktop Analytics for Data Professionals",
    description:
      "Build Tableau and Power BI-level analytics faster with AI-assisted natural language queries, modern architecture, and desktop-native performance.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Insyte - AI-Powered Desktop Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insyte – AI-Powered Desktop Analytics",
    description:
      "Build Tableau and Power BI-level analytics faster with AI-assisted queries and desktop-native performance.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${archivo.variable} ${instrumentSerif.variable} antialiased bg-chassis text-primary selection:bg-signal selection:text-white`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-signal focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <WaitlistProvider>
            {children}
          </WaitlistProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
