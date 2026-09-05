import { ArrowRight, Check, Sparkles, Video } from 'lucide-react'

export function PlanScreen() {
  return (
    <>
      <section className="page-heading"><div><span className="page-kicker">SEU PLANO</span><h1>Escolha o nível de acompanhamento.</h1><p>Comece simples e faça upgrade quando quiser mais proximidade com o personal.</p></div></section>
      <div className="plan-grid">
        <article className="pricing-card pricing-card--current">
          <div className="pricing-top"><span>ESSENCIAL</span><div className="current-pill"><Check size={13} /> Seu plano</div></div><h2>Treino que cabe na sua vida.</h2><div className="price"><strong>R$47</strong><span>/mês</span></div>
          <ul><li><Check size={16} /> Programa recomendado pelo seu perfil</li><li><Check size={16} /> Vídeos de todos os exercícios</li><li><Check size={16} /> Registro de cargas e repetições</li><li><Check size={16} /> Progresso e consistência</li><li><Check size={16} /> Novo ciclo de treino mensal</li></ul>
          <button className="button button--secondary" disabled>Plano atual</button>
        </article>
        <article className="pricing-card pricing-card--premium">
          <div className="premium-glow" /><div className="pricing-top"><span>PERSONAL</span><div className="best-pill"><Sparkles size={13} /> Acompanhamento individual</div></div><h2>Seu personal com você de verdade.</h2><div className="price"><strong>R$200</strong><span>/mês</span></div>
          <ul><li><Check size={16} /> Treino individual criado pelo personal</li><li><Check size={16} /> Ajustes personalizados durante o mês</li><li><Check size={16} /> Chat para dúvidas e acompanhamento</li><li><Check size={16} /> 1 videochamada individual por mês</li><li><Check size={16} /> Avaliação periódica de evolução</li></ul>
          <button className="button">Fazer upgrade <ArrowRight size={17} /></button>
        </article>
      </div>
      <section className="compare-note"><Video size={20} /><div><strong>Você não precisa decidir agora.</strong><span>Seu plano Essencial continua funcionando normalmente. O upgrade pode ser feito a qualquer momento.</span></div></section>
    </>
  )
}
