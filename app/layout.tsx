import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { siteInfo } from "@/siteinfo";
import { ThemeProvider } from "@/components/ui/theme-provider";

const Poppin = Poppins({weight:'500', subsets:['latin']});

export const metadata: Metadata = {
  title: siteInfo.siteTitle,
  description: siteInfo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <html lang="en">
        <body className={Poppin.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>  
        </body>
    </html>
  );
}
