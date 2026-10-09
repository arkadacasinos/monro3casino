import { Landmark } from 'lucide-react'

export default function PayStrip() {
  return (
    <section className="q7v3-pays" aria-label="Платёжные методы Monro Casino">
      <span className="q7v3-pay">
        <Landmark size={14} />
        СБП
      </span>
      <span className="q7v3-pay">Apple Pay</span>
      <span className="q7v3-pay">VISA</span>
      <span className="q7v3-pay">
        <span className="q7v3-mc" aria-hidden="true">
          <i />
          <i />
        </span>
        Mastercard
      </span>
      <span className="q7v3-pay">G Pay</span>
      <span className="q7v3-pay">Flexenin</span>
    </section>
  )
}
