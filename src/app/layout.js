import { Inter } from "next/font/google";
import "./globals.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen w-screen flex justify-center items-center">
        <Card className="max-h-[500px] w-[800px] bg-red-500 border border-black shadow-2xl grid grid-cols-2">
          <CardContent className="">
            {children}
          </CardContent>
        </Card>
      </body>
    </html>
  );
}
