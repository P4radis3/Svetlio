import Image from "next/image"
import { Users, Award, Clock, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import Breadcrumb from "@/components/breadcrumb"

export default function AboutPage() {
  // Sample team members data
  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      bio: "With over 20 years of experience in the cleaning industry, John founded CleanTeh with a vision to provide innovative cleaning solutions.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Johnson",
      position: "Operations Manager",
      bio: "Sarah oversees all operational aspects of CleanTeh, ensuring that our services meet the highest standards of quality and efficiency.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Brown",
      position: "Technical Director",
      bio: "Michael leads our technical team, focusing on equipment maintenance, repairs, and the development of new cleaning solutions.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Davis",
      position: "Customer Relations Manager",
      bio: "Emily ensures that our customers receive exceptional service and that their needs are met with personalized solutions.",
      image: "/placeholder.svg?height=300&width=300",
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
                { label: "About Us", href: "/about", active: true },
              ]}
            />
            <h1 className="text-3xl md:text-4xl font-bold mt-4">About CleanTeh</h1>
            <p className="text-white/90 mt-2 max-w-2xl">
              Learn more about our company, our mission, and the team behind our success.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Story</h2>
                <p className="text-gray-600">
                  Founded in 2008, CleanTeh has grown from a small local business to a leading provider of cleaning
                  equipment and services. Our journey began with a simple mission: to deliver innovative cleaning
                  solutions that help our customers achieve exceptional results while saving time and resources.
                </p>
                <p className="text-gray-600">
                  Over the years, we have expanded our product range and service offerings to meet the evolving needs of
                  our customers. Today, we serve both residential and commercial clients across the country, providing
                  high-quality cleaning equipment, professional cleaning services, and expert maintenance and repair.
                </p>
                <p className="text-gray-600">
                  What sets us apart is our commitment to quality, customer satisfaction, and environmental
                  responsibility. We continuously invest in research and development to bring you the latest cleaning
                  technologies that are both effective and eco-friendly.
                </p>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="About CleanTeh"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                At CleanTeh, we are guided by a clear mission and a set of core values that define who we are and how we
                operate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide innovative, efficient, and sustainable cleaning solutions that enhance the cleanliness,
                  health, and appearance of our customers' environments, while delivering exceptional value and customer
                  service.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading provider of cleaning solutions, recognized for our innovation, quality, and
                  commitment to customer satisfaction and environmental sustainability.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Quality</h3>
                <p className="text-gray-600">
                  We are committed to providing high-quality products and services that meet or exceed our customers'
                  expectations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We continuously seek new and better ways to solve cleaning challenges and improve our offerings.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
                <p className="text-gray-600">
                  We are dedicated to developing and promoting cleaning solutions that minimize environmental impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                <p className="text-gray-600">Satisfied Customers</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-gray-600">Years of Experience</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-gray-600">Customer Support</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Briefcase className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our success is driven by our dedicated team of professionals who are passionate about providing the best
                cleaning solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals to join our team. Check out our current openings and apply
              today.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              View Career Opportunities
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

