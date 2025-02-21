import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            Handcrafted Styles
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/products" className="hover:text-gray-600">
              Products
            </Link>
            <Link href="/collections" className="hover:text-gray-600">
              Collections
            </Link>
            <Link href="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="hover:text-gray-600">
              Cart (0)
            </Link>
            <Link href="/account" className="hover:text-gray-600">
              Account
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}