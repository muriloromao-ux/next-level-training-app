import { ArrowRight, Check, ChevronRight, Clock3, Dumbbell, Flame, Play, Sparkles, Trophy, Zap } from 'lucide-react'
import { week } from '../data'

export function HomeScreen({ goWorkout, goPlan }: { goWorkout: () => void; goPlan: () => void }) {
  return (
    <>
      <section className="page-heading page-heading--home">
        <div><span className="page-kicker">QUARTA, 9 DE SETEMBRO</span><h1>Boa tarde, Murilo.</h1><p>Seu treino está pronto. Hoje a meta é só aparecer.</p></div>
        <button className="desktop-avatar">MR</button>
      </section>
      <section className="week-strip">{week.map((item, index) => <div key={index} className={`week-day ${item.active ? 'week-day--active' : ''} ${item.done ? 'week-day--done' : ''}`}><span>{item.day}</span><strong>{item.date}</strong>{item.done && <Check size={12} />}</div>)}</section>
      <section className="hero-workout">
        <div className="hero-workout__visual"><div className="mesh mesh-a" /><div className="mesh mesh-b" /><div className="hero-badge"><Zap size={15} /> TREINO DE HOJE</div><div className="workout-number">A</div></div>
        <div className="hero-workout__copy">
          <span className="muted-label">PEITO + OMBROS + TRÍCEPS</span><h2>Upper Push</h2>
          <div className="hero-meta"><span><Dumbbell size={16} /> 5 exercícios</span><span><Clock3 size={16} /> 48 min</span></div>
          <button className="start-workout" onClick={goWorkout}><Play size={17} fill="currentColor" /> Iniciar treino</button>
        </div>
      </section>
      <section className="metric-grid">
        <article className="metric-card"><div className="metric-icon"><Flame size={19} /></div><span>Sequência</span><strong>6 dias</strong><small>Seu melhor mês até agora</small></article>
        <article className="metric-card"><div className="metric-icon"><Trophy size={19} /></div><span>Esta semana</span><strong>2/4</strong><small>50% da meta concluída</small></article>
        <article className="metric-card"><div className="metric-icon"><Clock3 size={19} /></div><span>Tempo ativo</span><strong>1h 32</strong><small>+18 min vs. semana passada</small></article>
      </section>
      <section className="section-block">
        <div className="section-title"><div><span>SEU PROGRAMA</span><h2>Hipertrofia · Intermediário</h2></div><button>Ver programa <ChevronRight size={16} /></button></div>
        <div className="program-card">
          <div className="program-progress"><div><span>Semana 2 de 4</span><strong>46%</strong></div><div className="mini-progress"><span /></div></div>
          <div className="program-days">
            <div className="program-day program-day--done"><span>SEG</span><strong>Upper Push</strong><Check size={16} /></div>
            <div className="program-day program-day--done"><span>TER</span><strong>Lower Body</strong><Check size={16} /></div>
            <div className="program-day program-day--active"><span>QUA</span><strong>Upper Push</strong><Play size={15} /></div>
            <div className="program-day"><span>SEX</span><strong>Lower + Core</strong><span>—</span></div>
          </div>
        </div>
      </section>
      <section className="upgrade-banner">
        <div className="upgrade-icon"><Sparkles size={22} /></div>
        <div><span>QUER MAIS ACOMPANHAMENTO?</span><h3>Tenha um personal online exclusivo.</h3><p>Treino individual, ajustes, chat e videochamada mensal com seu personal.</p></div>
        <div className="upgrade-price"><strong>R$200</strong><span>/mês</span><button onClick={goPlan}>Fazer upgrade <ArrowRight size={16} /></button></div>
      </section>
    </>
  )
}
