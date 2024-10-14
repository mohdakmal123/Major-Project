"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Moon, Star, Check } from "lucide-react"
import { useTheme } from "next-themes"

export default function TemplateDetails() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <a className="flex items-center space-x-2" href="/">
            <span className="font-bold text-xl">Template Details</span>
          </a>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-[1.5rem] w-[1.3rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.5rem] w-[1.3rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary-foreground">
                  Awesome Template
                </h1>
                <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl dark:text-primary-foreground/90">
                  A versatile and responsive template for your next project.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">Get Started</Button>
                <Button variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Responsive Design",
                "Dark/Light Mode",
                "Customizable Components",
                "SEO Optimized",
                "Fast Performance",
                "Regular Updates",
              ].map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Preview Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
  <div className="container px-4 md:px-6">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
      Template Preview
    </h2>
    <div className="flex justify-center">
    <img
  src="https://xnbbqnlqbpjlzlvvvjhk.supabase.co/storage/v1/object/public/images/template-details/dashboard-layout.jpg"
  alt="Modern dashboard layout with charts, statistics, and user interface elements"
  className="rounded-lg shadow-xl"
  width={800}
  height={400}
/>
    </div>
  </div>
</section>

        {/* Pricing Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Basic", price: "$49", features: ["5 pages", "Basic support", "1 month updates"] },
                { name: "Pro", price: "$99", features: ["15 pages", "Priority support", "6 months updates"] },
                { name: "Enterprise", price: "$199", features: ["Unlimited pages", "24/7 support", "Lifetime updates"] },
              ].map((plan, index) => (
                <Card key={index} className={index === 1 ? "no-border" : ""}>
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>
                      <span className="text-3xl font-bold">{plan.price}</span> / one-time
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4" variant={index === 3 ? "default" : "outline"}>
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Alex Johnson", role: "Frontend Developer", content: "This template saved me weeks of work!" },
                { name: "Sarah Lee", role: "UX Designer", content: "The design is sleek and highly customizable." },
                { name: "Mike Brown", role: "Project Manager", content: "Our team's productivity skyrocketed!" },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{testimonial.content}</p>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl dark:text-primary-foreground/90">
                  Get your copy of the Awesome Template today and transform your workflow.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Buy Now
                </Button>
                <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">© 2024 Awesome Template. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:underline">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:underline">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:underline">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}