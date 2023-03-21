import type { ReactNode } from "react";
import "tailwindcss/tailwind.css";
import { ScrollArea } from "~/ui/scroll-area";

import Footer from "~/app/components/sections/footer";
import Navbar from "~/app/components/sections/navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-screen h-full min-h-screen w-full overflow-hidden bg-sand-1">
        <ScrollArea className="relative h-screen">
          <div className="relative mx-auto mb-12 w-full bg-sand-1 2xl:max-w-7xl">
            <Navbar />
          </div>
          {children}
          <Footer />
        </ScrollArea>
      </body>
    </html>
  );
}
