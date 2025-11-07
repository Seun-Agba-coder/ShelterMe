'use client'
import { motion } from "framer-motion"
export function Features() {
  const features = [
    {
      icon: "✓",
      title: "Verified Listings",
      description:
        "All properties are manually verified and authenticated. Know exactly what you're booking with detailed photos, virtual tours, and honest reviews.",
    },
    {
      icon: "🔒",
      title: "Secure Payments",
      description:
        "Your money is protected. We hold deposits in escrow and only release them after move-in confirmation. Zero middleman fees.",
    },
    {
      icon: "⚡",
      title: "Easy Booking",
      description:
        "Book in minutes, not days. Complete application, get approval, and secure your home – all from your phone in a few clicks.",
    },
  ]

  return (
    <motion.section   initial={{ opacity: 0 }}
      viewport={{ once: true }} 
     whileInView={{ opacity: 1 }}id="features" className="py-20 md:py-32  ">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Why Students Choose Shelter Me
          </h2>
          <p className="text-lg text-muted-foreground">
            We're designed specifically for student housing with features that matter
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
