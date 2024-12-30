import { Link, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">LSE</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="transition-colors hover:text-foreground/80">Home</Link>
            <Link to="/about" className="transition-colors hover:text-foreground/80">About</Link>
            <Link to="/episodes" className="transition-colors hover:text-foreground/80">Episodes</Link>
            <Link to="/blog" className="transition-colors hover:text-foreground/80">Blog</Link>
            <Link to="/contact" className="transition-colors hover:text-foreground/80">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="container py-6">
        <Outlet />
      </main>
      <footer className="border-t">
        <div className="container py-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} LSE. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default RootLayout 