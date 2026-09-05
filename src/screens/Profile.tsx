import { CalendarDays, ChevronRight, CircleUserRound, HeartPulse, MessageCircle, RotateCcw, Settings } from 'lucide-react'

export function ProfileScreen({ reset }: { reset: () => void }) {
  return (
    <>
      <section className="page-heading"><div><span className="page-kicker">SUA CONTA</span><h1>Perfil</h1><p>Preferências, rotina e acompanhamento em um só lugar.</p></div></section>
      <section className="profile-card"><div className="profile-avatar">MR</div><div><h2>Murilo Romão</h2><span>Plano Essencial · ativo</span></div><button><Settings size={18} /></button></section>
      <section className="profile-section"><h3>Meu treino</h3>
        <button><span><RotateCcw size={18} /> Refazer questionário</span><ChevronRight size={18} /></button>
        <button><span><CalendarDays size={18} /> Rotina de treino</span><small>4x por semana</small><ChevronRight size={18} /></button>
        <button><span><HeartPulse size={18} /> Restrições e observações</span><ChevronRight size={18} /></button>
      </section>
      <section className="profile-section"><h3>Suporte</h3>
        <button><span><MessageCircle size={18} /> Falar com a Next Level</span><ChevronRight size={18} /></button>
        <button><span><CircleUserRound size={18} /> Dados da conta</span><ChevronRight size={18} /></button>
      </section>
      <button className="prototype-reset" onClick={reset}>Reiniciar protótipo</button>
    </>
  )
}
