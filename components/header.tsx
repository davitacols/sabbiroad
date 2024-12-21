import React from 'react'
import Link from 'next/link'
import { Building, Upload, Camera, Search, Database, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="fixed top-0 w-full border-b border-white/5 bg-black/80 backdrop-blur-lg z-50">
      <div className="container px-4 sm:px-8 flex h-20 items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Building className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            SABIROAD
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-8">
            {[
              ['Upload', '/upload', Upload],
              ['Camera', '/camera', Camera],
              ['Predict', '/predict', Search],
              ['Metadata', '/metadata', Database],
            ].map(([title, url, Icon]) => (
              <li key={url}>
                <Link 
                  href={url}
                  className="flex items-center space-x-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  <span>{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" className="hidden sm:inline-flex text-gray-300 hover:text-white" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button className="hidden sm:inline-flex bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gradient-to-l" asChild>
            <Link href="/signup">Start Free</Link>
          </Button>

          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-black/90 backdrop-blur-lg border-white/5">
              {[
                ['Upload', '/upload'],
                ['Camera', '/camera'],
                ['Predict', '/predict'],
                ['Metadata', '/metadata'],
              ].map(([title, url]) => (
                <DropdownMenuItem key={url} asChild>
                  <Link 
                    href={url}
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    {title}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild className="sm:hidden">
                <Link href="/login" className="text-gray-400 hover:text-white cursor-pointer">
                  Sign In
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="sm:hidden">
                <Link href="/signup" className="text-gray-400 hover:text-white cursor-pointer">
                  Start Free
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Header;