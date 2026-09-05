import { ArrowRight, Flame, HeartPulse, LockKeyhole, Sparkles } from 'lucide-react'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'

export function Welcome({ onStart, onEnter }: { onStart: () => void; onEnter: () => void }) {
  return (
    <main className="welcome-shell">
      <section className="welcome-card">
        <div className="welcome-topbar"><Logo /></div>
        <div className="welcome-art" aria-hidden="true">
          <div className="orb orb-a" /><div className="orb orb-b" />
          <div className="motion-line motion-line-a" /><div className="motion-line motion-line-b" />
          <div className="figure-card">
            <div className="figure-head" /><div className="figure-body" />
            <div className="figure-arm figure-arm-a" /><div className="figure-arm figure-arm-b" />
          </div>
          <div className="floating-stat floating-stat--left"><HeartPulse size={17} /><div><strong>68</strong><span>bpm</span></div></div>
          <div className="floating-stat floating-stat--right"><Flame size={17} /><div><strong>3x</strong><span>esta semana</span></div></div>
        </div>
        <div className="welcome-copy">
          <div className="eyebrow"><Sparkles size={14} /> TREINO FEITO PARA A SUA ROTINA</div>
          <h1>Seu próximo nível começa do seu jeito.</h1>
          <p>Programas desenvolvidos por personal trainer e recomendados a partir do seu objetivo, experiência e rotina.</p>
          <div className="welcome-actions">
            <Button onClick={onStart}>Montar meu treino <ArrowRight size={18} /></Button>
            <Button secondary onClick={onEnter}>Já sou aluno</Button>
          </div>
          <div className="welcome-trust"><LockKeyhole size={14} /> Você leva menos de 2 minutos para começar.</div>
        </div>
      </section>
    </main>
  )
}
