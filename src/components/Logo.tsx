export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`brand ${compact ? 'brand--compact' : ''}`}>
      <div className="brand-mark"><span>N</span></div>
      <div className="brand-copy"><strong>Next Level</strong>{!compact && <span>Training</span>}</div>
    </div>
  )
}
