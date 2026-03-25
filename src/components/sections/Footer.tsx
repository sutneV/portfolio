export default function Footer() {
  return (
    <footer id="contact" className="py-20 md:py-24 px-6 md:px-16 bg-background text-foreground border-t dark:border-neutral-900 border-neutral-200 z-20 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 md:mb-8">LET'S<br /><span className="text-neutral-600">CONNECT.</span></h2>
          <a href="mailto:hello@example.com" className="text-lg md:text-2xl hover:text-neutral-400 border-b dark:border-white/20 border-black/20 hover:border-neutral-400 dark:hover:border-neutral-400 transition-colors pb-1">
            limwg021018@gmail.com
          </a>
        </div>

        <div className="flex flex-col justify-between md:justify-end gap-16 md:items-end mt-8 md:mt-0">
          <div className="flex flex-col gap-4 text-xs md:text-base font-medium tracking-wide">
            <a href="#" className="hover:opacity-70 transition-opacity block py-1 border-b border-white/5 md:border-none">TWITTER // X</a>
            <a href="#" className="hover:opacity-70 transition-opacity block py-1 border-b border-white/5 md:border-none">GITHUB</a>
            <a href="#" className="hover:opacity-70 transition-opacity block py-1 border-b border-white/5 md:border-none">LINKEDIN</a>
            <a href="#" className="hover:opacity-70 transition-opacity block py-1">CODEPEN</a>
          </div>

          <p className="text-[10px] md:text-xs text-neutral-600 font-mono tracking-widest uppercase">
            © {new Date().getFullYear()} — Engineered with Precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
