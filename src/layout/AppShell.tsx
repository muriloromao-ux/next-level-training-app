import type { ReactNode } from 'react'
import { BarChart3, ChevronRight, Dumbbell, Home, Sparkles, Star, UserRound } from 'lucide-react'
import { Logo } from '../components/Logo'
import type { Screen } from '../types'

export function AppShell({ screen, setScreen, children }: { screen: Screen; setScreen: (screen: Screen) => void; children: ReactNode }) {
  const items = [
    { id: 'home' as Screen, label: 'Início', icon: Home },
    { id: 'workout' as Screen, label: 'Treino', icon: Dumbbell },
    { id: 'progress' as Screen, label: 'Progresso', icon: BarChart3 },
    { id: 'plan' as Screen, label: 'Plano', icon: Star },
    { id: 'profile' as Screen, label: 'Perfil', icon: UserRound },
  ]

  return (
    <div className="app-shell">
      <aside className="desktop-sidebar">
        <Logo />
        <nav>{items.map(({ id, label, icon: Icon }) => <button key={id} className={screen === id ? 'active' : ''} onClick={() => setScreen(id)}><Icon size={19} /> {label}</button>)}</nav>
        <div className="sidebar-upgrade">
          <Sparkles size={18} /><strong>Personal online</strong><span>Acompanhamento individual por R$200/mês.</span>
          <button onClick={() => setScreen('plan')}>Conhecer <ChevronRight size={16} /></button>
        </div>
      </aside>
      <div className="app-stage">
        <header className="mobile-topbar"><Logo compact /><button className="avatar-button" onClick={() => setScreen('profile')}>MR</button></header>
        <div className="app-content">{children}</div>
        <nav className="bottom-nav">
          {items.slice(0, 4).map(({ id, label, icon: Icon }) => <button key={id} className={screen === id ? 'active' : ''} onClick={() => setScreen(id)}><Icon size={20} /><span>{label}</span></button>)}
        </nav>
      </div>
    </div>
  )
}
