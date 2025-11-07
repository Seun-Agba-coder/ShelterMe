export function TrustIndicators() {
  return (
    <section id="trust" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Your Safety is Our Priority
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Built with industry-leading security and verification standards
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Trust features */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-xl">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Verified Properties</h4>
                  <p className="text-sm text-muted-foreground">Every listing is manually verified by our team</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-xl">
                  🛡️
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Secure Escrow</h4>
                  <p className="text-sm text-muted-foreground">Deposits held securely until move-in confirmed</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-xl">
                  🔐
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Data Protection</h4>
                  <p className="text-sm text-muted-foreground">Bank-level encryption for all personal data</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20">
              <div className="space-y-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10,000+</div>
                  <p className="text-muted-foreground">Active student renters</p>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500M+</div>
                  <p className="text-muted-foreground">Value protected in escrow</p>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9★</div>
                  <p className="text-muted-foreground">From 2,340+ verified reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
