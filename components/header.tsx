"use client"

import Link from "next/link"
import { Car, Menu, X, User, Heart } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Car className="h-7 w-7" />
          <span className="font-mono text-xl font-bold tracking-tight">
            AutoBrasil
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/veiculos"
            className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            Comprar
          </Link>
          <Link
            href="/veiculos"
            className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            Vender
          </Link>
          <Link
            href="/veiculos"
            className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            Financiamento
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Heart className="h-5 w-5" />
            <span className="sr-only">Favoritos</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <User className="h-5 w-5" />
            <span className="sr-only">Minha conta</span>
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="font-semibold"
            asChild
          >
            <Link href="/veiculos">Anunciar</Link>
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-primary-foreground/10 px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            <Link
              href="/veiculos"
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Comprar
            </Link>
            <Link
              href="/veiculos"
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vender
            </Link>
            <Link
              href="/veiculos"
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Financiamento
            </Link>
            <div className="flex items-center gap-3 pt-2">
              <Button
                variant="secondary"
                size="sm"
                className="w-full font-semibold"
                asChild
              >
                <Link href="/veiculos">Anunciar</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
