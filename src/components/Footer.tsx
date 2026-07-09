import logo from '../assets/WhiteBgLogoHighQuality.png'

interface FooterProps {
  onRegister: () => void
}

export default function Footer({ onRegister }: FooterProps) {
  return (
    <footer className="bg-navy text-white pt-12 sm:pt-15 pb-8 mt-5">
      <div className="cp-in">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-8 sm:gap-9 pb-10 border-b border-white/10">
          <div>
            <div className="bg-white rounded-[14px] px-3.5 py-2 inline-block">
              <img src={logo} alt="ClickPrint" className="h-8.5 block" />
            </div>
            <p className="text-white/60 text-[14.5px] leading-[1.65] max-w-75 mt-4.5 mb-5">
              The distributed printing network turning campus print shops into always‑on, pre‑paid businesses.
            </p>
            <div className="flex gap-2.5">
              <a className="w-9.5 h-9.5 cursor-not-allowed rounded-[11px] bg-white/10 flex items-center justify-center text-[15px] font-bold">in</a>
              <a className="w-9.5 h-9.5 cursor-not-allowed rounded-[11px] bg-white/10 flex items-center justify-center text-[15px] font-bold">𝕏</a>
              <a className="w-9.5 h-9.5 cursor-not-allowed rounded-[11px] bg-white/10 flex items-center justify-center text-[15px] font-bold">f</a>
            </div>
          </div>
          <div>
            <div className="font-sora font-bold text-[13px] text-white/50 uppercase tracking-[.5px] mb-4">For shops</div>
            <div className="flex flex-col gap-3 text-[14.5px] text-white/75">
              <a onClick={onRegister} className="cursor-pointer">Register your shop</a>
              <a href="#how">How it works</a>
              <a href="#why">Why partner</a>
              <a href="#download">Get the app</a>
            </div>
          </div>
          <div>
            <div className="font-sora font-bold text-[13px] text-white/50 uppercase tracking-[.5px] mb-4">Company</div>
            <div className="flex flex-col gap-3 text-[14.5px] text-white/75">
              <a href="#">About ClickPrint</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
          <div>
            <div className="font-sora font-bold text-[13px] text-white/50 uppercase tracking-[.5px] mb-4">Get in touch</div>
            <div className="flex flex-col gap-3 text-[14.5px] text-white/75">
              <a href="https://wa.me/923235400291" target='_blank'>WhatsApp: +92 323 5400291</a>
              <a href="mailto:support@wecode.com.pk" target='_blank'>support@wecode.com.pk</a>
              <a href="https://wecode.com.pk/contact" target='_blank'>Contact Us</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center flex-wrap gap-3 pt-6 text-[13px] text-white/50">
          <div>© 2026 ClickPrint. A product of <a href="https://wecode.com.pk/" target="_blank" className="text-white/70 hover:text-white/80 transition-colors duration-200 cursor-pointer">WeCode</a>.</div>
          <div className="flex gap-5.5">
            <a href="https://wecode.com.pk/privacy" target='_blank'>Privacy</a>
            <a href="https://wecode.com.pk/terms" target='_blank'>Terms</a>
            <a href="https://wecode.com.pk/refund" target='_blank'>Refund</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
