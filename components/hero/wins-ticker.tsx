import { ChevronDown } from 'lucide-react'

export default function WinsTicker() {
  return (
    <section className="q7v3-tick" aria-label="Сейчас выигрывают в Monro Casino">
      <article className="q7v3-win">
        <span className="q7v3-wtile q7v3-wt-a" aria-hidden="true">
          CC
        </span>
        <span className="q7v3-winfo">
          <span className="q7v3-wname">Chili Coins</span>
          <span className="q7v3-wsub">C**x · 23:45</span>
        </span>
        <span className="q7v3-wsum">28 €</span>
        <span className="q7v3-wx">x267</span>
      </article>
      <article className="q7v3-win">
        <span className="q7v3-wtile q7v3-wt-b" aria-hidden="true">
          BB
        </span>
        <span className="q7v3-winfo">
          <span className="q7v3-wname">Big Bass Bonanza</span>
          <span className="q7v3-wsub">Te***ron · 23:45</span>
        </span>
        <span className="q7v3-wsum">45 €</span>
        <span className="q7v3-wx">x85</span>
      </article>
      <article className="q7v3-win">
        <span className="q7v3-wtile q7v3-wt-c" aria-hidden="true">
          4S
        </span>
        <span className="q7v3-winfo">
          <span className="q7v3-wname">4 Super Fruits</span>
          <span className="q7v3-wsub">Mon***lis · 23:45</span>
        </span>
        <span className="q7v3-wsum">80 €</span>
        <span className="q7v3-wx">x50</span>
      </article>
      <span className="q7v3-tlabel">
        СЕЙЧАС ВЫИГРЫВАЮТ
        <ChevronDown size={14} />
      </span>
    </section>
  )
}
