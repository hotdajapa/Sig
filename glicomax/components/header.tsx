import Link from "next/link"
import Image from "next/image"
import { Search, User, ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-blue-500 text-white text-center py-2">
        <p className="font-semibold">FRETE GRÁTIS PARA TODO BRASIL</p>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="w-5 h-5" />
            </Button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg?height=40&width=120&text=Entrega+Rapidinho"
                alt="Entrega Rapidinho"
                width={120}
                height={40}
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/track-order" className="text-gray-700 hover:text-blue-600">
                Rastrear Pedidos
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">
                Sobre Nós
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-blue-600">
                Produtos
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contatos
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
