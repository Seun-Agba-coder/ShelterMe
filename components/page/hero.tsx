'use client'

import { useEffect, useState} from "react";
import { useRef } from "react";

let letterIndex = 0

export function Hero() {
  const Letters = "Student Home"
  const [showLetters, setShowLetters] = useState<string>("");

  const showLetterRef = useRef<boolean>(false);
  
  useEffect(() => {
      const interval = setInterval(() => {
        if (letterIndex < Letters.length -1){
          setShowLetters((prev) => {
            const newWord = prev + Letters[letterIndex]
            return newWord
          })
          letterIndex++
        } else {
          clearInterval(interval)
        }
       

      }, 100)

      return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 from-primary/5 to-transparent pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">Your student home awaits</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
            Find Your{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Perfect <div className="text-primary">{showLetters}</div>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Discover verified student accommodations with secure payments and hassle-free booking. Your peace of mind is
            our priority.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
              Find Accommodation
            </button>
            <button className="w-full sm:w-auto px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-all">
              List Your Property
            </button>
          </div>

          {/* Social proof */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Trusted by 10,000+ students and landlords</p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-linear-to-br from-primary/20 to-primary/40 border-2 border-background flex items-center justify-center text-xs font-semibold text-primary"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">4.9★ (2,340 reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
