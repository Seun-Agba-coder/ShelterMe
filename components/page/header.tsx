export function Header() {
  return (
    <header className="top-10 z-50 w-full sticky  backdrop-blur drop-shadow">
      <div className="container mx-auto w-3/4 flex h-16 items-center justify-around gap-8 bg-background rounded-2xl">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
          <span className="text-xl font-bold text-foreground hidden sm:inline">Shelter Me</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            How it Works
          </a>
          <a href="#trust" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Trust & Safety
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">Sign In</button>
          <button className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
