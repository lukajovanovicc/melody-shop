"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Music, Search, ShoppingCart, User, Menu, ChevronDown } from "lucide-react"

const navigationItems = {
  guitars: {
    title: "Guitars",
    items: [
      { name: "Electric Guitars", href: "/guitars/electric" },
      { name: "Acoustic Guitars", href: "/guitars/acoustic" },
      { name: "Bass Guitars", href: "/guitars/bass" },
      { name: "Classical Guitars", href: "/guitars/classical" },
      { name: "Guitar Accessories", href: "/guitars/accessories" },
    ],
  },
  keyboards: {
    title: "Keyboards",
    items: [
      { name: "Digital Pianos", href: "/keyboards/digital-pianos" },
      { name: "Synthesizers", href: "/keyboards/synthesizers" },
      { name: "MIDI Controllers", href: "/keyboards/midi-controllers" },
      { name: "Organs", href: "/keyboards/organs" },
      { name: "Keyboard Stands", href: "/keyboards/stands" },
    ],
  },
  drums: {
    title: "Drums",
    items: [
      { name: "Acoustic Drum Sets", href: "/drums/acoustic" },
      { name: "Electronic Drums", href: "/drums/electronic" },
      { name: "Cymbals", href: "/drums/cymbals" },
      { name: "Drum Hardware", href: "/drums/hardware" },
      { name: "Percussion", href: "/drums/percussion" },
    ],
  },
  audio: {
    title: "Audio",
    items: [
      { name: "Microphones", href: "/audio/microphones" },
      { name: "Headphones", href: "/audio/headphones" },
      { name: "Audio Interfaces", href: "/audio/interfaces" },
      { name: "Studio Monitors", href: "/audio/monitors" },
      { name: "Recording Equipment", href: "/audio/recording" },
    ],
  },
  accessories: {
    title: "Accessories",
    items: [
      { name: "Cables", href: "/accessories/cables" },
      { name: "Cases & Bags", href: "/accessories/cases" },
      { name: "Stands", href: "/accessories/stands" },
      { name: "Picks & Strings", href: "/accessories/picks-strings" },
      { name: "Sheet Music", href: "/accessories/sheet-music" },
    ],
  },
}

export function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 mr-2">
            <Music className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">MelodyMart</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {Object.entries(navigationItems).map(([key, category]) => (
              <DropdownMenu key={key}>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium outline-none hover:text-primary transition-colors">
                  <span>{category.title}</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {category.items.map((item, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <Link href={item.href} className="cursor-pointer">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search instruments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Desktop Auth and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Sign In</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Enter your password" />
                  </div>
                  <Button className="w-full">Sign In</Button>
                  <div className="text-center">
                    <button
                      onClick={() => {
                        setIsLoginOpen(false)
                        setIsRegisterOpen(true)
                      }}
                      className="text-sm text-primary hover:underline"
                    >
                      Don't have an account? Register
                    </button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>

            <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Create Account</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" type="text" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-email">Email</Label>
                    <Input id="reg-email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-password">Password</Label>
                    <Input id="reg-password" type="password" placeholder="Create a password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" placeholder="Confirm your password" />
                  </div>
                  <Button className="w-full">Create Account</Button>
                  <div className="text-center">
                    <button
                      onClick={() => {
                        setIsRegisterOpen(false)
                        setIsLoginOpen(true)
                      }}
                      className="text-sm text-primary hover:underline"
                    >
                      Already have an account? Sign In
                    </button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>

            <Link href="/cart">
              <Button size="sm">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart (0)
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-2">
                    <Music className="h-6 w-6 text-primary" />
                    <span>MelodyMart</span>
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-6 space-y-6 overflow-y-auto h-full px-2 py-8">
                  {/* Mobile Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search instruments..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  {/* Mobile Auth Buttons */}
                  <div className="space-y-3 border-b pb-4">
                    <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full bg-transparent"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <User className="h-4 w-4 mr-2" />
                          Sign In
                        </Button>
                      </DialogTrigger>
                    </Dialog>

                    <Link href="/cart">
                      <Button className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Cart (0)
                      </Button>
                    </Link>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="space-y-4">
                    {Object.entries(navigationItems).map(([key, category]) => (
                      <div key={key} className="space-y-2">
                        <h3 className="font-semibold text-lg">{category.title}</h3>
                        <div className="space-y-1 pl-4">
                          {category.items.map((item, index) => (
                            <Link
                              key={index}
                              href={item.href}
                              className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
