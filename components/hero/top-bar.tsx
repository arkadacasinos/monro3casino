import { Menu, Search } from 'lucide-react'
import MenuList from './menu-list'

export default function TopBar() {
  return (
    <header className="q7v3-top">
      <details className="q7v3-menu">
        <summary className="q7v3-burger" aria-label="Меню Monro Casino">
          <Menu size={20} />
        </summary>
        <div className="q7v3-drop">
          <MenuList />
        </div>
      </details>
      <a href="#official" className="q7v3-logo">
        <img src="/img/logo.jpg" alt="Monro Casino" width={34} height={34} />
        MONRO
      </a>
      <a href="#register" className="q7v3-login">
        ВХОД
      </a>
      <a href="#register" className="q7v3-reg">
        РЕГИСТРАЦИЯ
      </a>
      <form className="q7v3-search" role="search" action="#play">
        <Search size={16} />
        <input
          type="search"
          name="q"
          placeholder="НАЗВАНИЕ ИГРЫ ИЛИ ПРОВАЙДЕРА"
          aria-label="Поиск игры или провайдера в Monro Casino"
        />
      </form>
    </header>
  )
}
