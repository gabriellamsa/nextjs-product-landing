import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ResponsiveNav } from "./components/navbar/ResponsiveNav";
import { Provider } from "./components/hoc/Provider";
import { Footer } from "./components/home/Footer";
import { ScrollToTop } from "./components/helper/ScrollToTop";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Product Landing",
  description: "Responsive page using Next.js 15 and Tailwind v4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <Provider>
          <ResponsiveNav />
          {children}
        </Provider>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
