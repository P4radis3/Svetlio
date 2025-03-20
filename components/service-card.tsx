import { Building, Home, Truck, Wrench, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  description: string
  icon: "Building" | "Home" | "Truck" | "Wrench"
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const IconMap: Record<string, LucideIcon> = {
    Building,
    Home,
    Truck,
    Wrench,
  }

  const Icon = IconMap[icon]

  return (
    <div className="bg-white rounded-lg shadow-sm p-8 transition-all hover:shadow-md">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button variant="outline">Learn More</Button>
    </div>
  )
}

