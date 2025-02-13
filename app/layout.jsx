import Navigation from "@/components/Navbar";
import "./globals.css";


export const metadata = {
  title: "For you, My mine",
  description: "I dont know much, but i know I love you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-red-100">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
