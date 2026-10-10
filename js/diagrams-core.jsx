/* ============================================================
   Diagram core — DiagramExplorer (tap parts) + FlowAnim (process)
   ============================================================ */
const {useState, useEffect, useRef, useCallback} = React;

/* Tap-a-part explorer: svg with hotspots + chip list + info panel */
function DiagramExplorer({parts, accent="var(--coral)", render, hint="부위를 톡 눌러보세요", footer}){
  const [sel, setSel] = useState(null);
  const cur = parts.find(p=>p.id===sel);
  return (
    <div className="stack-12">
      <div className="diagram-wrap card" style={{padding:"14px 10px 10px"}}>
        {render(sel, setSel)}
      </div>
      <div className="chiprow">
        {parts.map(p=>(
          <button key={p.id}
            className={"partchip"+(p.id===sel?" on":"")}
            style={p.id===sel?{background:accent, borderColor:accent, color:"#fff"}:null}
            onClick={()=>setSel(p.id===sel?null:p.id)}>
            {p.name}
          </button>
        ))}
      </div>
      {cur ? (
        <div className="reveal" key={cur.id}>
          <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:5}}>
            <span className="dotmark" style={{background:accent}}></span>
            <b style={{fontSize:17}}>{cur.name}</b>
          </div>
          <p style={{fontSize:15, color:"var(--ink-soft)", lineHeight:1.55}}>{cur.desc}</p>
        </div>
      ) : (
        <p className="center muted" style={{fontSize:14, padding:"2px 0 4px"}}>👆 {hint}</p>
      )}
      {footer}
    </div>
  );
}

/* Animated process flow: lights nodes one by one */
function FlowAnim({nodes, accent="var(--coral)", auto=true, label="자극이 흐르는 과정"}){
  const [lit, setLit] = useState(-1);
  const timer = useRef(null);
  const run = useCallback(()=>{
    clearInterval(timer.current);
    let i=-1; setLit(-1);
    timer.current = setInterval(()=>{
      i++; setLit(i);
      if(i>=nodes.length){ clearInterval(timer.current); }
    }, 520);
  },[nodes.length]);
  const ref = useRef(null);
  useEffect(()=>{
    if(!auto) return;
    const el = ref.current;
    const io = new IntersectionObserver((es)=>{
      es.forEach(e=>{ if(e.isIntersecting){ run(); io.disconnect(); } });
    }, {threshold:.5});
    if(el) io.observe(el);
    return ()=>{ io.disconnect(); clearInterval(timer.current); };
  },[run, auto]);
  return (
    <div className="card" ref={ref} style={{padding:16}}>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12}}>
        <span style={{fontSize:14, fontWeight:800, color:"var(--ink-soft)"}}>⚡ {label}</span>
        <button className="replay" onClick={run} style={{color:accent}}>▶ 다시 보기</button>
      </div>
      <div className="flow">
        {nodes.map((n,i)=>(
          <React.Fragment key={i}>
            {i>0 && <span className={"arrow"+(lit>=i?" lit":"")} style={lit>=i?{color:accent}:null}>→</span>}
            <span className={"node"+(lit>=i?" lit":"")}
              style={lit>=i?{background:accent, borderColor:accent, color:"#fff"}:null}>{n}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* Image-based explorer: real photo/illustration with positioned hotspots */
function ImageExplorer({img, parts, accent="var(--coral)", hint="부위를 톡 눌러보세요", footer, ratioPad}){
  const [sel, setSel] = useState(null);
  const cur = parts.find(p=>p.id===sel);
  return (
    <div className="stack-12">
      <div className="card imgdiagram" style={{padding:8}}>
        <div className="imgstage">
          <img src={img} alt="" draggable="false"/>
          {parts.map(p=>{
            const on = p.id===sel;
            return (
              <button key={p.id}
                className={"imghot"+(on?" on":"")}
                style={{left:(p.x*100)+"%", top:(p.y*100)+"%",
                  borderColor:accent, color:accent,
                  ...(on?{background:accent, color:"#fff"}:null)}}
                onClick={()=>setSel(on?null:p.id)}>
                <span className="imghot-ring" style={{borderColor:accent}}></span>
                {on && <span className="imghot-label" style={{background:accent}}>{p.name}</span>}
              </button>
            );
          })}
        </div>
      </div>
      <div className="chiprow">
        {parts.map(p=>(
          <button key={p.id}
            className={"partchip"+(p.id===sel?" on":"")}
            style={p.id===sel?{background:accent, borderColor:accent, color:"#fff"}:null}
            onClick={()=>setSel(p.id===sel?null:p.id)}>
            {p.name}
          </button>
        ))}
      </div>
      {cur ? (
        <div className="reveal" key={cur.id}>
          <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:5}}>
            <span className="dotmark" style={{background:accent}}></span>
            <b style={{fontSize:17}}>{cur.name}</b>
          </div>
          <p style={{fontSize:15, color:"var(--ink-soft)", lineHeight:1.55}}>{cur.desc}</p>
        </div>
      ) : (
        <p className="center muted" style={{fontSize:14, padding:"2px 0 4px"}}>👆 {hint}</p>
      )}
      {footer}
    </div>
  );
}

/* floating SVG label tag */
function SvgTag({x,y,text,accent="var(--coral)",fs=13.5}){
  const w = [...text].length*fs + 22;
  return (
    <g transform={`translate(${x},${y})`} style={{pointerEvents:"none"}} className="svgtag">
      <rect x={-w/2} y={-14} width={w} height={28} rx={14} fill={accent}/>
      <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize={fs} fontWeight="800"
        fontFamily="Pretendard, sans-serif">{text}</text>
    </g>
  );
}
/* pulsing highlight ring + tappable hotspot */
function HiRing({x,y,r=20,accent="var(--coral)"}){
  return <circle cx={x} cy={y} r={r} fill="none" stroke={accent} strokeWidth="3" className="hiring"/>;
}
function Hot({x,y,r=22,onClick}){
  return <circle cx={x} cy={y} r={r} fill="transparent" className="hot"
    style={{pointerEvents:"all"}} onClick={onClick}/>;
}

Object.assign(window, { DiagramExplorer, FlowAnim, ImageExplorer, SvgTag, HiRing, Hot });
