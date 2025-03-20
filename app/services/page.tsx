import Image from "next/image"
import { CheckCircle, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import Breadcrumb from "@/components/breadcrumb"

export default function ServicesPage() {
  // Sample services data
  const services = [
    {
      id: 1,
      title: "Commercial Cleaning",
      description: "Comprehensive cleaning solutions for offices, retail spaces, and industrial facilities.",
      icon: "Building",
      features: [
        "Regular scheduled cleaning",
        "Deep cleaning services",
        "Window and facade cleaning",
        "Floor maintenance",
        "Waste management",
      ],
    },
    {
      id: 2,
      title: "Residential Cleaning",
      description: "Professional home cleaning services tailored to your specific needs.",
      icon: "Home",
      features: [
        "One-time deep cleaning",
        "Regular maintenance cleaning",
        "Move-in/move-out cleaning",
        "Carpet and upholstery cleaning",
        "Window cleaning",
      ],
    },
    {
      id: 3,
      title: "Equipment Rental",
      description: "Rent our professional cleaning equipment for your DIY projects.",
      icon: "Truck",
      features: [
        "Daily, weekly, and monthly rentals",
        "Delivery and pickup options",
        "Equipment training",
        "Maintenance included",
        "Accessories and supplies available",
      ],
    },
    {
      id: 4,
      title: "Maintenance & Repair",
      description: "Expert maintenance and repair services for all cleaning equipment.",
      icon: "Wrench",
      features: [
        "Preventive maintenance",
        "Emergency repairs",
        "Parts replacement",
        "Performance optimization",
        "Warranty service",
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-12 text-white">
          <div className="container">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services", active: true },
              ]}
            />
            <h1 className="text-3xl md:text-4xl font-bold mt-4">Our Services</h1>
            <p className="text-white/90 mt-2 max-w-2xl">
              We offer a wide range of professional cleaning services for both residential and commercial properties.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Professional Cleaning Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From regular maintenance to specialized cleaning solutions, we have the expertise and equipment to meet
                all your cleaning needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon as any}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Service */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Commercial Cleaning"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Commercial Cleaning</h2>
                <p className="text-gray-600">
                  Our commercial cleaning services are designed to keep your business premises clean, hygienic, and
                  presentable. We understand that a clean environment is essential for productivity and making a good
                  impression on clients and employees.
                </p>
                <ul className="space-y-3">
                  {services[0].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg">
                  Request a Quote <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We follow a structured approach to ensure high-quality cleaning services that meet your specific
                requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Consultation</h3>
                <p className="text-gray-600">We discuss your cleaning needs and requirements.</p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Assessment</h3>
                <p className="text-gray-600">We assess the space and determine the best cleaning approach.</p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Execution</h3>
                <p className="text-gray-600">Our professional team performs the cleaning service.</p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Follow-up</h3>
                <p className="text-gray-600">We ensure your satisfaction and address any concerns.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Contact us today to discuss your cleaning needs and get a customized quote for our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

