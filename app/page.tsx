import { Headphones } from 'lucide-react'
import TopBar from '@/components/hero/top-bar'
import SideRail from '@/components/hero/side-rail'
import HeroBanner from '@/components/hero/hero-banner'
import PayStrip from '@/components/hero/pay-strip'
import WinsTicker from '@/components/hero/wins-ticker'
import SeoArticle from '@/components/seo-article'
import SiteFooter from '@/components/site-footer'

export default function Page() {
  return (
    <div className="q7v3-wrap">
      <TopBar />
      <div className="q7v3-body">
        <SideRail />
        <main className="q7v3-main">
          <h1 className="sr-only">
            Monro Casino — официальный сайт, Монро Казино играть онлайн и рабочее зеркало
          </h1>
          <HeroBanner />
          <PayStrip />
          <WinsTicker />
        </main>
      </div>
      <SeoArticle />
      <SiteFooter />
      <a className="q7v3-fab" href="#faq" aria-label="Поддержка Monro Casino">
        <Headphones size={20} />
      </a>
    </div>
  )
}
