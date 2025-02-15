import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image
        src={logo}
        alt="Cruip Logo"
        className="w-32 h-auto lg:w-64" // Responsive width and auto height
        priority // Ensures the logo is prioritized for loading
      />
    </Link>
  );
}
