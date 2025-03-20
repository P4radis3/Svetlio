import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  title: string
  description: string
  price: string
  image: string
}

export default function ProductCard({ title, description, price, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">{price}</span>
          <Button size="sm">
            <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

