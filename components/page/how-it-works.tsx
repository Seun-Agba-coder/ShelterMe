export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Browse",
      description: "Explore thousands of verified student accommodations filtered by location, price, and amenities.",
      icon: "🔍",
    },
    {
      number: 2,
      title: "Book",
      description: "Submit your application, schedule a virtual tour, and secure your booking with a safe payment.",
      icon: "📋",
    },
    {
      number: 3,
      title: "Move In",
      description: "Get keys, meet your landlord, and move into your perfect student home with complete peace of mind.",
      icon: "🔑",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to find and book your perfect student accommodation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute left-[calc(50%+48px)] top-24 w-[calc(100%-96px)] h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
              )}

              <div className="relative">
                {/* Step circle */}
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/70 flex flex-col items-center justify-center text-white shadow-lg">
                    <div className="text-3xl mb-1">{step.icon}</div>
                    <div className="text-sm font-bold">Step {step.number}</div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
