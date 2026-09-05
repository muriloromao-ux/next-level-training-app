import { ArrowRight, CalendarDays, Dumbbell, Flame, Star, Trophy } from 'lucide-react'

export function ProgressScreen() {
  const bars = [38, 60, 46, 78, 54, 88, 70]
  return (
    <>
      <section className="page-heading"><div><span className="page-kicker">SUA EVOLUÇÃO</span><h1>Progresso</h1><p>Consistência primeiro. Os números vêm depois.</p></div></section>
      <section className="progress-highlight"><div><span>TREINOS NOS ÚLTIMOS 30 DIAS</span><strong>14</strong><small><ArrowRight size={14} /> +3 em relação ao mês anterior</small></div><div className="ring"><div><strong>78%</strong><span>consistência</span></div></div></section>
      <section className="chart-card"><div className="section-title"><div><span>VOLUME DE TREINO</span><h2>Últimas 7 semanas</h2></div><button>Volume total</button></div><div className="bar-chart">{bars.map((height, index) => <div key={index}><span style={{ height: `${height}%` }} /><small>S{index + 1}</small></div>)}</div></section>
      <section className="metric-grid metric-grid--progress">
        <article className="metric-card"><div className="metric-icon"><Dumbbell size={19} /></div><span>Volume total</span><strong>42,8 t</strong><small>+12% no período</small></article>
        <article className="metric-card"><div className="metric-icon"><CalendarDays size={19} /></div><span>Treinos</span><strong>14</strong><small>3,5 por semana</small></article>
        <article className="metric-card"><div className="metric-icon"><Flame size={19} /></div><span>Maior sequência</span><strong>8 dias</strong><small>Recorde pessoal</small></article>
      </section>
      <section className="section-block"><div className="section-title"><div><span>MARCOS</span><h2>Pequenas vitórias</h2></div></div><div className="achievement-list">
        <article><Trophy size={19} /><div><strong>10 treinos concluídos</strong><span>Você construiu uma rotina real.</span></div><small>2 set</small></article>
        <article><Star size={19} /><div><strong>1 mês de consistência</strong><span>Mais presença, menos perfeição.</span></div><small>28 ago</small></article>
      </div></section>
    </>
  )
}
