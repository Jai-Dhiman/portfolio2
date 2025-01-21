// components/layout/Navbar.tsx
// import ThemeToggle from '../shared/ThemeToggle'
// import SocialLinks from '../shared/SocialLinks'
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="h-8">
          <img 
            src="/portfolioIcon.png" 
            alt="Jai Dhiman" 
            className="h-full w-auto object-contain"
          />
        </div>
        <div className="flex items-center gap-4">
          {/* <SocialLinks />
          <ThemeToggle /> */}
        </div>
      </div>
    </nav>
  );
}