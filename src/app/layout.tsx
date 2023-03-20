import type { ReactNode } from "react";
import "tailwindcss/tailwind.css";
import { ScrollArea } from "~/ui/scroll-area";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-screen h-full min-h-screen w-full overflow-hidden bg-sand-1">
        <ScrollArea className="relative h-screen">{children}</ScrollArea>
      </body>
    </html>
  );
}
