import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import TopBar from "@/components/shared/topbar";
import LeftSidebar from "@/components/shared/left-sidebar";
import RightSidebar from "@/components/shared/right-sidebar";
import Bottombar from "@/components/shared/bottombar";

import "../globals.css";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HiThere",
  description: "A Next.js 13 Meta Threads application",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <TopBar />
          <main className='flex flex-row'>
            <LeftSidebar />
              <section className="main-container">
                <div className="w-full max-w-4xl">
                  {children}
                </div>
              </section>
            <RightSidebar />
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
