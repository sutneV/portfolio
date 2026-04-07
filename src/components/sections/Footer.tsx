export default function Footer() {
  return (
    <footer id="contact" className="py-20 md:py-24 px-6 md:px-16 bg-background text-foreground border-t dark:border-neutral-900 border-neutral-200 z-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pb-8 border-b dark:border-neutral-900 border-neutral-100">
          <div>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter">LET'S<br /><span className="text-neutral-600">CONNECT.</span></h2>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <div className="flex flex-col gap-4 text-xs md:text-base font-medium tracking-wide">
              <a href="https://github.com/sutneV" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity block py-1 border-b border-white/5 md:border-none">GITHUB</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity block py-1 border-b border-white/5 md:border-none">LINKEDIN</a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 pt-4 text-left md:text-left">
          {/* Left: Email */}
          <div className="md:text-left">
            <a href="mailto:limwg021018@gmail.com" className="text-sm md:text-base hover:text-neutral-400 transition-colors">
              limwg021018@gmail.com
            </a>
          </div>

          {/* Center: Greeting */}
          <div className="md:text-center">
            <p className="text-[10px] md:text-xs text-neutral-600 font-mono tracking-widest uppercase">
              © {new Date().getFullYear()} — Engineered with Precision.
            </p>


          </div>

          {/* Right: Copyright */}
          <div className="md:text-right">
            <p className="text-sm md:text-sm text-neutral-600 dark:text-neutral-400 font-sans">
              Thanks for being here — how are you?
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
