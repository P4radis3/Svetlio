import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
}

export default function TestimonialCard({ quote, author, company }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 transition-all hover:shadow-md">
      <Quote className="h-8 w-8 text-primary/20 mb-4" />
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-500 text-sm">{company}</p>
      </div>
    </div>
  )
}

