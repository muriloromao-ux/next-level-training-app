import { useState } from 'react'
import { ArrowLeft, Check, MoreHorizontal, Play, Plus, Sparkles } from 'lucide-react'
import { exercises } from '../data'

export function WorkoutScreen({ goHome }: { goHome: () => void }) {
  const [completed, setCompleted] = useState<number[]>([0])
  const toggle = (index: number) => setCompleted((prev) => prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index])
  return (
    <>
      <section className="page-heading page-heading--compact">
        <div><button className="text-back" onClick={goHome}><ArrowLeft size={16} /> Início</button><span className="page-kicker">TREINO A · SEMANA 2</span><h1>Upper Push</h1><p>Peito, ombros e tríceps · aproximadamente 48 minutos</p></div>
        <button className="round-more"><MoreHorizontal size={20} /></button>
      </section>
      <div className="workout-progress-card"><div><strong>{completed.length}/{exercises.length}</strong><span>exercícios concluídos</span></div><div className="mini-progress mini-progress--large"><span style={{ width: `${(completed.length / exercises.length) * 100}%` }} /></div></div>
      <div className="exercise-list">
        {exercises.map((exercise, index) => {
          const isDone = completed.includes(index)
          return <article className={`exercise-card ${isDone ? 'exercise-card--done' : ''}`} key={exercise.name}>
            <button className="exercise-preview" aria-label={`Assistir demonstração de ${exercise.name}`}><div className={`exercise-shape exercise-shape--${(index % 3) + 1}`} /><span><Play size={15} fill="currentColor" /></span></button>
            <div className="exercise-info"><span className="exercise-tag">{exercise.tag}</span><h3>{exercise.name}</h3><div><strong>{exercise.sets}</strong><span>descanso {exercise.rest}</span></div></div>
            <button className={`complete-button ${isDone ? 'complete-button--done' : ''}`} onClick={() => toggle(index)}>{isDone ? <Check size={17} /> : <Plus size={17} />}</button>
          </article>
        })}
      </div>
      <div className="finish-card"><div><Sparkles size={20} /><div><strong>Sem pressa.</strong><span>Qualidade de movimento vem antes da carga.</span></div></div><button>Finalizar treino</button></div>
    </>
  )
}
