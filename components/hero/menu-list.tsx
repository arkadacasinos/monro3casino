import {
  Boxes,
  ChartColumn,
  ChevronDown,
  Crown,
  Gamepad2,
  Gift,
  LayoutGrid,
  Megaphone,
  Trophy,
  Users,
} from 'lucide-react'

export default function MenuList() {
  return (
    <nav className="q7v3-mlist" aria-label="Разделы Monro Casino">
      <a className="q7v3-ritem on" href="#bonus">
        <Gift size={18} />
        Бонусы
      </a>
      <a className="q7v3-ritem" href="#bonus">
        <Megaphone size={18} />
        Промо
      </a>
      <a className="q7v3-ritem" href="#bonus">
        <Crown size={18} />
        VIP Club
      </a>
      <span className="q7v3-rdiv" aria-hidden="true" />
      <a className="q7v3-ritem" href="#play">
        <Gamepad2 size={18} />
        Слоты
        <ChevronDown size={16} className="q7v3-chev" />
      </a>
      <a className="q7v3-ritem" href="#play">
        <Users size={18} />
        Live-казино
        <ChevronDown size={16} className="q7v3-chev" />
      </a>
      <a className="q7v3-ritem" href="#play">
        <Trophy size={18} />
        Спорт
        <ChevronDown size={16} className="q7v3-chev" />
      </a>
      <a className="q7v3-ritem" href="#play">
        <ChartColumn size={18} />
        Instant Games
      </a>
      <span className="q7v3-rdiv" aria-hidden="true" />
      <a className="q7v3-ritem" href="#play">
        <LayoutGrid size={18} />
        Все игры
      </a>
      <a className="q7v3-ritem" href="#play">
        <Boxes size={18} />
        Все провайдеры
      </a>
    </nav>
  )
}
