import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Link from "next/link";

import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import { icons } from "lucide-react";



const inter = Inter({ subsets: ["latin"] });




export const metadata = {
  title: "MasterClass in Blender | Advanced 3D Tutorials",
  description:
    "Elevate your Blender skills with our advanced, high-quality masterclasses designed for aspiring 3D artists and professionals. Dive deep into expert techniques for modeling, texturing, lighting, rendering, and animation.",
  icons: {
    icon: "/favicon.ico", // Icon for all devices
    apple: "/apple-touch-icon.png", // Apple-specific icon
    manifest: "/site.webmanifest", // PWA manifest file
  },
};



export default function RootLayout({ children }) {
  return (
    <ClerkProvider >
      <html lang="en">
        <head>
          <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </head>
        {/* pt-36 */}
        <body className={` ${inter.className}`}>
          
          <main className="w-[100%] flex flex-col justify-center items-center overflow-x-hidden">
           
            <Navbar />
            {children}
            <Footer/>
          </main>
          
        </body>
      </html>
    </ClerkProvider>
  );
}
