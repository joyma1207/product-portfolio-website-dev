import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joy Ma | Product Portfolio",
  description: "Product Manager portfolio — problem, solution, impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased min-h-screen bg-background`}>
        {children}
      </body>
    </html>
  );
}
