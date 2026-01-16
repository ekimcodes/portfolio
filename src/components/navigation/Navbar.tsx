import Link from "next/link"
import { ShoppingBag, Search, Menu } from "lucide-react"

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold tracking-tighter uppercase">Edwin Kim</span>
                    </Link>
                    <nav className="hidden gap-6 md:flex">
                        <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
                            Shop
                        </Link>
                        <Link href="#skills" className="text-sm font-medium transition-colors hover:text-primary">
                            Collections
                        </Link>
                        <Link href="#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                            Story
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                     <Link 
                        href="https://drive.google.com/file/d/1gT2ejQkEj4k9EaeUe4fqbriD097mDNDR/view?usp=sharing" 
                        target="_blank"
                        className="hidden text-sm font-medium transition-colors hover:text-primary md:block"
                     >
                        Lookbook
                     </Link>
                     <button className="relative transition-colors hover:text-primary">
                        <ShoppingBag className="h-5 w-5" />
                        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--shop-gold)] text-[10px] text-white">
                            3
                        </span>
                        <span className="sr-only">Cart</span>
                     </button>
                </div>
            </div>
        </nav>
    )
}
