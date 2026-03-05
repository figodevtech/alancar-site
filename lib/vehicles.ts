export interface Vehicle {
  id: string
  brand: string
  model: string
  version: string
  year: number
  yearModel: number
  price: number
  mileage: number
  fuel: string
  transmission: string
  color: string
  doors: number
  bodyType: string
  image: string
  images: string[]
  city: string
  state: string
  seller: string
  sellerType: "concessionaria" | "loja" | "particular"
  features: string[]
  description: string
  engineSize: string
  horsepower: number
  isNew: boolean
}

export const vehicles: Vehicle[] = [
  {
    id: "1",
    brand: "Toyota",
    model: "Corolla",
    version: "XEi 2.0 Flex 16V Aut.",
    year: 2024,
    yearModel: 2025,
    price: 159990,
    mileage: 12000,
    fuel: "Flex",
    transmission: "Automatico",
    color: "Branco Perola",
    doors: 4,
    bodyType: "Sedan",
    image: "/images/vehicles/corolla-white.jpg",
    images: [
      "/images/vehicles/corolla-white.jpg",
      "/images/vehicles/corolla-white.jpg",
      "/images/vehicles/corolla-white.jpg",
    ],
    city: "Sao Paulo",
    state: "SP",
    seller: "Toyota Tsusho",
    sellerType: "concessionaria",
    features: [
      "Ar condicionado digital",
      "Direcao eletrica",
      "Vidros eletricos",
      "Travas eletricas",
      "Airbag duplo",
      "Freios ABS",
      "Camera de re",
      "Sensor de estacionamento",
      "Multimidia com tela 9 pol",
      "Bancos em couro",
      "Piloto automatico",
      "Controle de estabilidade",
    ],
    description:
      "Toyota Corolla XEi 2.0 Flex em excelente estado de conservacao. Unico dono, todas as revisoes feitas na concessionaria. IPVA 2025 pago. Pneus novos.",
    engineSize: "2.0",
    horsepower: 177,
    isNew: false,
  },
  {
    id: "2",
    brand: "Honda",
    model: "Civic",
    version: "Touring 1.5 Turbo CVT",
    year: 2024,
    yearModel: 2024,
    price: 189900,
    mileage: 8500,
    fuel: "Flex",
    transmission: "Automatico",
    color: "Prata",
    doors: 4,
    bodyType: "Sedan",
    image: "/images/vehicles/civic-silver.jpg",
    images: [
      "/images/vehicles/civic-silver.jpg",
      "/images/vehicles/civic-silver.jpg",
      "/images/vehicles/civic-silver.jpg",
    ],
    city: "Rio de Janeiro",
    state: "RJ",
    seller: "Honda Dreams",
    sellerType: "concessionaria",
    features: [
      "Ar condicionado digital dual zone",
      "Direcao eletrica",
      "Teto solar",
      "Bancos em couro",
      "Honda Sensing",
      "Camera de re",
      "Farois LED",
      "Carregador wireless",
      "Apple CarPlay / Android Auto",
      "Piloto automatico adaptativo",
    ],
    description:
      "Honda Civic Touring top de linha, com pacote Honda Sensing completo. Baixa quilometragem e em perfeito estado.",
    engineSize: "1.5T",
    horsepower: 173,
    isNew: false,
  },
  {
    id: "3",
    brand: "Hyundai",
    model: "HB20",
    version: "Platinum 1.0 TGDI Flex Aut.",
    year: 2024,
    yearModel: 2025,
    price: 99990,
    mileage: 5200,
    fuel: "Flex",
    transmission: "Automatico",
    color: "Preto",
    doors: 4,
    bodyType: "Hatch",
    image: "/images/vehicles/hb20-black.jpg",
    images: [
      "/images/vehicles/hb20-black.jpg",
      "/images/vehicles/hb20-black.jpg",
      "/images/vehicles/hb20-black.jpg",
    ],
    city: "Belo Horizonte",
    state: "MG",
    seller: "Hyundai Caoa",
    sellerType: "concessionaria",
    features: [
      "Ar condicionado",
      "Direcao eletrica",
      "Vidros eletricos",
      "Travas eletricas",
      "Airbag duplo",
      "Freios ABS",
      "Central multimidia",
      "Camera de re",
    ],
    description:
      "HB20 Platinum turbo com baixissima quilometragem. Carro muito economico e completo.",
    engineSize: "1.0T",
    horsepower: 120,
    isNew: false,
  },
  {
    id: "4",
    brand: "Toyota",
    model: "Hilux",
    version: "SRX 2.8 Diesel 4x4 Aut.",
    year: 2023,
    yearModel: 2024,
    price: 289900,
    mileage: 32000,
    fuel: "Diesel",
    transmission: "Automatico",
    color: "Cinza Grafite",
    doors: 4,
    bodyType: "Picape",
    image: "/images/vehicles/hilux-gray.jpg",
    images: [
      "/images/vehicles/hilux-gray.jpg",
      "/images/vehicles/hilux-gray.jpg",
      "/images/vehicles/hilux-gray.jpg",
    ],
    city: "Goiania",
    state: "GO",
    seller: "Rede Toyota GO",
    sellerType: "concessionaria",
    features: [
      "Ar condicionado digital",
      "Tracao 4x4",
      "Bancos em couro",
      "Camera 360 graus",
      "Piloto automatico",
      "Controle de tracao",
      "Assistente de partida em rampa",
      "Multimidia 8 pol",
      "Bluetooth",
      "Rodas de liga leve 18 pol",
    ],
    description:
      "Toyota Hilux SRX Diesel 4x4 completa. Ideal para trabalho e lazer. Revisoes em dia na concessionaria.",
    engineSize: "2.8D",
    horsepower: 204,
    isNew: false,
  },
  {
    id: "5",
    brand: "Chevrolet",
    model: "Onix",
    version: "Premier 1.0 Turbo Flex Aut.",
    year: 2024,
    yearModel: 2025,
    price: 94990,
    mileage: 3800,
    fuel: "Flex",
    transmission: "Automatico",
    color: "Vermelho Carmim",
    doors: 4,
    bodyType: "Hatch",
    image: "/images/vehicles/onix-red.jpg",
    images: [
      "/images/vehicles/onix-red.jpg",
      "/images/vehicles/onix-red.jpg",
      "/images/vehicles/onix-red.jpg",
    ],
    city: "Curitiba",
    state: "PR",
    seller: "Chevrolet Metrosul",
    sellerType: "concessionaria",
    features: [
      "Ar condicionado",
      "Direcao eletrica",
      "Vidros eletricos",
      "Airbag 6",
      "Freios ABS",
      "MyLink com tela 8 pol",
      "Wi-Fi nativo",
      "OnStar",
      "Alerta de colisao",
      "Camera de re",
    ],
    description:
      "Onix Premier turbo semi-novo, praticamente zero km. Garantia de fabrica ate 2027.",
    engineSize: "1.0T",
    horsepower: 116,
    isNew: false,
  },
  {
    id: "6",
    brand: "Volkswagen",
    model: "T-Cross",
    version: "Highline 1.4 TSI Flex Aut.",
    year: 2024,
    yearModel: 2024,
    price: 149900,
    mileage: 15600,
    fuel: "Flex",
    transmission: "Automatico",
    color: "Azul Biscay",
    doors: 4,
    bodyType: "SUV",
    image: "/images/vehicles/tcross-blue.jpg",
    images: [
      "/images/vehicles/tcross-blue.jpg",
      "/images/vehicles/tcross-blue.jpg",
      "/images/vehicles/tcross-blue.jpg",
    ],
    city: "Porto Alegre",
    state: "RS",
    seller: "VW Sul",
    sellerType: "loja",
    features: [
      "Ar condicionado digital",
      "Direcao eletrica",
      "Teto solar panoramico",
      "Bancos em couro",
      "VW Play",
      "Camera de re",
      "Farois LED",
      "Park Pilot",
      "Controle de estabilidade",
      "Rodas de liga leve 18 pol",
    ],
    description:
      "T-Cross Highline completo com teto solar panoramico. Excelente estado, pneus novos.",
    engineSize: "1.4T",
    horsepower: 150,
    isNew: false,
  },
  {
    id: "7",
    brand: "Chevrolet",
    model: "Tracker",
    version: "Premier 1.2 Turbo Flex Aut.",
    year: 2024,
    yearModel: 2025,
    price: 139900,
    mileage: 9800,
    fuel: "Flex",
    transmission: "Automatico",
    color: "Branco Summit",
    doors: 4,
    bodyType: "SUV",
    image: "/images/vehicles/tracker-white.jpg",
    images: [
      "/images/vehicles/tracker-white.jpg",
      "/images/vehicles/tracker-white.jpg",
      "/images/vehicles/tracker-white.jpg",
    ],
    city: "Brasilia",
    state: "DF",
    seller: "Auto Premium",
    sellerType: "loja",
    features: [
      "Ar condicionado digital",
      "Direcao eletrica",
      "Vidros eletricos",
      "Airbag 6",
      "MyLink com tela 8 pol",
      "Wi-Fi nativo",
      "Camera de re",
      "Sensor de estacionamento",
      "OnStar",
      "Controle de estabilidade",
    ],
    description:
      "Tracker Premier turbo com todos os opcionais. Baixa quilometragem e revisoes em dia.",
    engineSize: "1.2T",
    horsepower: 133,
    isNew: false,
  },
  {
    id: "8",
    brand: "Toyota",
    model: "Corolla Cross",
    version: "XRX Hybrid 1.8 CVT",
    year: 2024,
    yearModel: 2025,
    price: 199900,
    mileage: 6200,
    fuel: "Hibrido",
    transmission: "Automatico",
    color: "Cinza Celestial",
    doors: 4,
    bodyType: "SUV",
    image: "/images/vehicles/corolla-cross-gray.jpg",
    images: [
      "/images/vehicles/corolla-cross-gray.jpg",
      "/images/vehicles/corolla-cross-gray.jpg",
      "/images/vehicles/corolla-cross-gray.jpg",
    ],
    city: "Campinas",
    state: "SP",
    seller: "Toyota Campinas",
    sellerType: "concessionaria",
    features: [
      "Motor hibrido",
      "Ar condicionado digital dual zone",
      "Bancos em couro",
      "Teto solar",
      "Toyota Safety Sense",
      "Camera 360 graus",
      "Farois LED",
      "Carregador wireless",
      "Apple CarPlay / Android Auto",
      "Head-up display",
    ],
    description:
      "Corolla Cross XRX Hybrid top de linha. Economia de combustivel excepcional com tecnologia hibrida Toyota.",
    engineSize: "1.8H",
    horsepower: 122,
    isNew: false,
  },
]

export const brands = [...new Set(vehicles.map((v) => v.brand))].sort()
export const bodyTypes = [...new Set(vehicles.map((v) => v.bodyType))].sort()
export const fuelTypes = [...new Set(vehicles.map((v) => v.fuel))].sort()

export function getVehicleById(id: string): Vehicle | undefined {
  return vehicles.find((v) => v.id === id)
}

export function formatPrice(price: number): string {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}

export function formatMileage(mileage: number): string {
  return mileage.toLocaleString("pt-BR") + " km"
}
