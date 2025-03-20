import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import Breadcrumb from "@/components/breadcrumb"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-12 text-white">
          <div className="container">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Contact", href: "/contact", active: true },
              ]}
            />
            <h1 className="text-3xl md:text-4xl font-bold mt-4">Contact Us</h1>
            <p className="text-white/90 mt-2 max-w-2xl">
              Have questions or need assistance? We're here to help. Reach out to us using any of the methods below.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                  <p className="text-gray-600 max-w-md">
                    Have questions about our products or services? Contact us today and our team will be happy to assist
                    you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-lg font-medium">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">+1 (555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-lg font-medium">Email</h3>
                      <p className="text-gray-600">info@cleanteh.com</p>
                      <p className="text-gray-600">support@cleanteh.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-lg font-medium">Address</h3>
                      <p className="text-gray-600">
                        123 Cleaning Avenue, Suite 100
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-lg font-medium">Business Hours</h3>
                      <div className="space-y-1 text-gray-600">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
         <section className="py-8">
          <div className="container">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-96 w-full">
              {/* Replace with actual map implementation */}
              <div className="h-full w-full flex items-center justify-center bg-gray-300">
                <p className="text-gray-600">Interactive Map Would Be Displayed Here</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our products and services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">What areas do you serve?</h3>
                <p className="text-gray-600">
                  We currently serve the greater New York metropolitan area, including all five boroughs and surrounding
                  counties.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Do you offer equipment rentals?</h3>
                <p className="text-gray-600">
                  Yes, we offer daily, weekly, and monthly rental options for most of our cleaning equipment. Contact us
                  for details and pricing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit cards, checks, and bank transfers. For larger orders, we also offer
                  financing options.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Do you provide emergency services?</h3>
                <p className="text-gray-600">
                  Yes, we offer emergency cleaning services and equipment repairs. Contact our 24/7 support line for
                  immediate assistance.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button variant="outline">View All FAQs</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

