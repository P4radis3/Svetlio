import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Breadcrumb from "@/components/breadcrumb"

export default function FAQPage() {
  // Sample FAQ categories and questions
  const faqCategories = [
    {
      category: "Products",
      questions: [
        {
          question: "What types of cleaning equipment do you offer?",
          answer:
            "We offer a wide range of cleaning equipment including pressure washers, vacuum cleaners, steam cleaners, floor scrubbers, carpet cleaners, and various accessories and parts.",
        },
        {
          question: "Do your products come with a warranty?",
          answer:
            "Yes, all our products come with a manufacturer's warranty. The warranty period varies by product, but most of our equipment comes with a 1-2 year warranty. Extended warranty options are also available for purchase.",
        },
        {
          question: "Can I try out equipment before purchasing?",
          answer:
            "Yes, we offer equipment demonstrations at our showroom. You can schedule a demo by contacting our customer service team.",
        },
        {
          question: "Do you sell replacement parts for your equipment?",
          answer:
            "Yes, we stock a comprehensive range of replacement parts for all the equipment we sell. You can purchase parts online or at our physical store.",
        },
      ],
    },
    {
      category: "Services",
      questions: [
        {
          question: "What cleaning services do you provide?",
          answer:
            "We provide a range of cleaning services including commercial cleaning, residential cleaning, specialized cleaning (like carpet, upholstery, and window cleaning), and post-construction cleaning.",
        },
        {
          question: "How do you price your cleaning services?",
          answer:
            "Our pricing is based on several factors including the size of the area to be cleaned, the type of cleaning required, the frequency of service, and any special requirements. We provide free quotes after assessing your specific needs.",
        },
        {
          question: "Are your cleaning staff trained and insured?",
          answer:
            "Yes, all our cleaning staff undergo comprehensive training and are fully insured. We also conduct background checks on all employees for your peace of mind.",
        },
        {
          question: "Do you provide emergency cleaning services?",
          answer:
            "Yes, we offer emergency cleaning services for situations that require immediate attention. Contact our 24/7 hotline for emergency service requests.",
        },
      ],
    },
    {
      category: "Rentals",
      questions: [
        {
          question: "What equipment is available for rent?",
          answer:
            "We offer rentals for most of our cleaning equipment including pressure washers, carpet cleaners, floor scrubbers, and more. Contact us for a complete list of rental equipment.",
        },
        {
          question: "What are your rental terms?",
          answer:
            "We offer flexible rental terms including daily, weekend, weekly, and monthly options. A security deposit is required, and rental fees vary based on the equipment and rental duration.",
        },
        {
          question: "Do you provide delivery for rental equipment?",
          answer:
            "Yes, we offer delivery and pickup services for rental equipment for an additional fee. The fee depends on your location and the size of the equipment.",
        },
        {
          question: "What happens if the rental equipment breaks down?",
          answer:
            "If the equipment breaks down due to normal use, we will replace it at no additional cost. However, damage due to misuse or negligence may result in additional charges.",
        },
      ],
    },
    {
      category: "Maintenance & Repairs",
      questions: [
        {
          question: "Do you offer maintenance services for cleaning equipment?",
          answer:
            "Yes, we provide maintenance services for all types of cleaning equipment, whether purchased from us or elsewhere. We offer both one-time maintenance and maintenance contracts.",
        },
        {
          question: "How long does a typical repair take?",
          answer:
            "The repair time depends on the nature of the problem and the availability of parts. Minor repairs can often be completed within 1-2 business days, while more complex repairs may take longer.",
        },
        {
          question: "Do you provide on-site repairs?",
          answer:
            "Yes, for certain types of equipment and issues, we can provide on-site repairs. There may be an additional fee for this service depending on your location.",
        },
        {
          question: "What is your repair warranty policy?",
          answer:
            "All our repairs come with a 30-day warranty. If the same issue recurs within this period, we will fix it at no additional cost.",
        },
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
                { label: "FAQ", href: "/faq", active: true },
              ]}
            />
            <h1 className="text-3xl md:text-4xl font-bold mt-4">Frequently Asked Questions</h1>
            <p className="text-white/90 mt-2 max-w-2xl">
              Find answers to common questions about our products, services, and policies.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for answers..."
                  className="w-full border border-gray-300 rounded-md px-4 py-3 pl-12"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">Search</Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {faqCategories.map((category, index) => (
                <a
                  key={index}
                  href={`#${category.category.toLowerCase()}`}
                  className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <ChevronDown className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.category}</h3>
                  <p className="text-gray-600 mt-2">{category.questions.length} questions</p>
                </a>
              ))}
            </div>

            {/* FAQ Accordion */}
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} id={category.category.toLowerCase()} className="mb-12">
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border rounded-lg p-2"
                    >
                      <AccordionTrigger className="text-left font-medium px-4">{faq.question}</AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 pt-2 text-gray-600">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              If you couldn't find the answer to your question, our customer support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Contact Us</Button>
              <Button size="lg" variant="outline">
                Live Chat
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

