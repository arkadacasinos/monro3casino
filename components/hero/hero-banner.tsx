export default function HeroBanner() {
  return (
    <section className="q7v3-hero" aria-label="Главный баннер Monro Casino: бонус +150% на депозит">
      <img
        src="/img/hero-art.jpg"
        alt="Monro Casino: слоты, маскот клуба и ставки на спорт"
        fetchPriority="high"
      />
      <p className="q7v3-bubble">
        <span>КУДА ТЫ ПРИМЕНИШЬ</span>
        <b>+150%</b>
        <span>НА ДЕПОЗИТ</span>
      </p>
      <div className="q7v3-table">
        <a href="#register" className="q7v3-cta q7v3-cta-red">
          НАЧАТЬ В КАЗИНО
        </a>
        <img className="q7v3-temb" src="/img/logo.jpg" alt="" width={26} height={26} />
        <a href="#play" className="q7v3-cta q7v3-cta-blue">
          НАЧАТЬ В СПОРТЕ
        </a>
      </div>
    </section>
  )
}
