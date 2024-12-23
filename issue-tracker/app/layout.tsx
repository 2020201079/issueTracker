// "use client";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import { Container, Theme, ThemePanel } from "@radix-ui/themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./NavBar";
import AuthProvider from "./auth/provider";
import QueryClientProvider from "./QueryClientProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme accentColor="iris" grayColor="slate">
          <QueryClientProvider>
            <AuthProvider>
              <NavBar />
              <main className="p-5">
                <Container>{children}</Container>
              </main>
            </AuthProvider>
          </QueryClientProvider>
        </Theme>
      </body>
    </html>
  );
}
