import Image from "next/image";
import Link from "next/link";
import { NavigationItems } from "./NaviagtionItems";
import MobileNav from "@/components/MobileNav/page";
function Navbar() {
  return (
    <nav className="flex items-center justify-center">
      <div className="flex justify-between items-center fixed top-0 z-50 w-full bg-gray-900 text-amber-50 px-10">
        <div className="flex space-x-8 py-4">
          <Link href="/" className="flex items-center" id="logo">
            <p className="font-semibold">NASA INDIA</p>
          </Link>
        </div>

        {/* Only Visible at PC */}
        <div className="hidden md:block">
          <NavigationItems />
        </div>

        <div className="md:hidden flex justify-center items-center">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
