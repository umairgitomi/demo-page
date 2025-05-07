// app/layout.tsx
import "@/styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Reternity Demo",
  description: "Pixel-perfect replica of product page",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
