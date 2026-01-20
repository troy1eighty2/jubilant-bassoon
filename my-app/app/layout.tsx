"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import hero from "@/public/github.png";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
});

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${roboto.className} antialiased flex flex-col min-h-screen bg-background`}
      >
        <div className="flex min-h-[100%] h-auto border justify-center p-5">
          <Image src={hero} height={100} alt="logo" />
        </div>
        <div className="flex min-h-[100%] h-auto border p-5 justify-center z-20 relative ">
          <NavigationMenu>
            <NavigationMenuList className="flex-wrap ">
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/" className="">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent className="flex gap-2 ">
                  <NavigationMenuLink className="min-w-40 grow" asChild>
                    <Link href="#services">
                      <p className="font-bold">Sample Item</p>
                      <p className="">short description of the service</p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className="min-w-40 grow" asChild>
                    <Link href="#services">
                      <p className="font-bold">Sample Item</p>
                      <p className="">short description of the service</p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className="min-w-40 grow" asChild>
                    <Link href="#services">
                      <p className="font-bold">Sample Item</p>
                      <p className="">short description of the service</p>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="#about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="#contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {children}
      </body>
    </html>
  );
}
