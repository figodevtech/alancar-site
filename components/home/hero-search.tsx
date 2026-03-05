"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { brands } from "@/lib/vehicles"

export function HeroSearch() {
  const router = useRouter()
  const [brand, setBrand] = useState("")
  const [priceRange, setPriceRange] = useState("")
  const [yearRange, setYearRange] = useState("")

  function handleSearch() {
    const params = new URLSearchParams()
    if (brand) params.set("marca", brand)
    if (priceRange) params.set("preco", priceRange)
    if (yearRange) params.set("ano", yearRange)
    router.push(`/veiculos?${params.toString()}`)
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-car.jpg"
          alt="Veiculo em destaque"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-6 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="mb-4 font-mono text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">
              Encontre seu proximo veiculo
            </span>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-primary-foreground/80">
            Milhares de carros novos e usados esperando por voce.
            Compre com seguranca e facilidade.
          </p>
        </div>

        <div className="rounded-xl bg-card p-4 shadow-2xl md:p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:gap-4">
            <div className="flex-1">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Marca
              </label>
              <Select value={brand} onValueChange={setBrand}>
                <SelectTrigger className="bg-secondary text-secondary-foreground">
                  <SelectValue placeholder="Todas as marcas" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map((b) => (
                    <SelectItem key={b} value={b}>
                      {b}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Faixa de preco
              </label>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="bg-secondary text-secondary-foreground">
                  <SelectValue placeholder="Qualquer preco" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-80000">Ate R$ 80.000</SelectItem>
                  <SelectItem value="80000-120000">R$ 80.000 - R$ 120.000</SelectItem>
                  <SelectItem value="120000-200000">R$ 120.000 - R$ 200.000</SelectItem>
                  <SelectItem value="200000-999999">Acima de R$ 200.000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Ano
              </label>
              <Select value={yearRange} onValueChange={setYearRange}>
                <SelectTrigger className="bg-secondary text-secondary-foreground">
                  <SelectValue placeholder="Qualquer ano" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleSearch}
              className="bg-accent text-accent-foreground hover:bg-accent/90 md:px-8"
              size="lg"
            >
              <Search className="mr-2 h-4 w-4" />
              Buscar
            </Button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-6 text-primary-foreground/70">
          <div className="flex items-center gap-2">
            <span className="font-mono text-2xl font-bold text-primary-foreground">
              8.000+
            </span>
            <span className="text-sm">veiculos disponiveis</span>
          </div>
          <div className="h-6 w-px bg-primary-foreground/20" />
          <div className="flex items-center gap-2">
            <span className="font-mono text-2xl font-bold text-primary-foreground">
              500+
            </span>
            <span className="text-sm">lojas parceiras</span>
          </div>
          <div className="h-6 w-px bg-primary-foreground/20" />
          <div className="flex items-center gap-2">
            <span className="font-mono text-2xl font-bold text-primary-foreground">
              27
            </span>
            <span className="text-sm">estados</span>
          </div>
        </div>
      </div>
    </section>
  )
}
