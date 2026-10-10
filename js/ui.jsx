/* ============================================================
   Shared UI atoms
   ============================================================ */

function Remember({ children, title = "이것만 기억하자!" }) {
  return (
    <div className="remember">
      <span className="spark">★</span>
      <h4>💡 {title}</h4>
      <p dangerouslySetInnerHTML={{ __html: children }} />
    </div>);

}

function DefLine({ children, icon = "📖" }) {
  return <div className="defline"><span className="di">{icon}</span><span dangerouslySetInnerHTML={{ __html: children }} /></div>;
}

function SubHead({ n, children }) {
  return <div className="subhead"><span className="n">{n}</span><h3>{children}</h3></div>;
}

function StimPill({ children }) {
  return <span className="stimpill">⚡ 자극 · {children}</span>;
}

function NoteBox({ label, children, variant = "" }) {
  return (
    <div className={"notebox " + variant}>
      {label && <div className="lbl">{label}</div>}
      <span dangerouslySetInnerHTML={{ __html: children }} />
    </div>);

}

function Eyebrow({ children, bg = "var(--teal-bg)", color = "var(--teal-deep)" }) {
  return <span className="eyebrow" style={{ background: bg, color }}>{children}</span>;
}

Object.assign(window, { Remember, DefLine, SubHead, StimPill, NoteBox, Eyebrow });