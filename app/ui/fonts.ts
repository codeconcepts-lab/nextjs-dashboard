// Import the Inter font from the next/font/google module
import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";

// Specify font subset
export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
