import Link from "next/link";
function Navbar() {
    return(
        <nav className="fixed top-0 w-[1440px] h-[80px] flex items-center py-2 px-8 justify-between z-50 bg-white text-gray-300 mx-auto">
        <Link href= "/" className="h-full flex items-center">
          <img src="/e-commerce-bike.png" alt="E-commerce Bike Logo"  className="h-full"/>
        </Link>
      </nav>
    )
}

export default Navbar;