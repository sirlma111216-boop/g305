/* ============================================================
   신경계 Section
   ============================================================ */

function NervousStructure(){
  return (
    <div className="card" style={{padding:"16px 14px 16px"}}>
      <img src={window.__res("nervousTree","img/nervous-tree.jpg")} alt="신경계 구조 트리: 신경계 → 중추 신경계(뇌·척수) / 말초 신경계(감각 신경·운동 신경)"
        style={{display:"block", width:"100%", height:"auto", borderRadius:"var(--r-sm)"}}/>
      <div className="stack-12" style={{marginTop:14}}>
        <div className="notebox" style={{background:"var(--teal-bg)", border:"1.5px solid var(--teal-soft)", color:"var(--teal-deep)", fontSize:13.5}}>
          <b>감각 신경</b> · 감각 기관 → 중추 신경계로 자극 전달
        </div>
        <div className="notebox" style={{background:"var(--peach-card)", border:"1.5px solid var(--coral-soft)", color:"var(--coral-deep)", fontSize:13.5}}>
          <b>운동 신경</b> · 중추 신경계 → 반응 기관으로 신호 전달
        </div>
      </div>
    </div>
  );
}

/* neuron: persistent labels + electric pulse 가지돌기 → 세포체 → 축삭돌기 */
function NeuronFlowDemo(){
  const N = window.APP_DATA.nervous.neuron;
  const parts = N.parts; // dendrite → body → axon (spatial + signal order)
  const at = [90, 560, 1080];
  const [runId, setRunId] = React.useState(0);
  const [running, setRunning] = React.useState(false);
  const [lit, setLit] = React.useState(-1);
  const timers = React.useRef([]);
  const fire = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setRunning(true);
    setRunId(id => id + 1);
    parts.forEach((p,i)=> timers.current.push(setTimeout(()=>setLit(i), at[i])));
    timers.current.push(setTimeout(()=>{ setRunning(false); setLit(-1); }, 1750));
  };
  React.useEffect(()=>()=>timers.current.forEach(clearTimeout), []);
  return (
    <div className="stack-12">
      <div className="neuroflow nf-stage">
        <img src={N.img} alt="뉴런"/>
        {parts.map((p,i)=>(
          <span key={p.id} className={"nf-tag"+(lit===i?" on":"")}
            style={{left:p.x*100+"%", top:p.y*100+"%", background:p.color}}>{p.name}</span>
        ))}
        {running && [0,1,2].map(i=>(
          <span key={runId+"-"+i} className={"nf-spark run t"+i}></span>
        ))}
      </div>
      <div style={{textAlign:"center"}}>
        <button className="nf-btn" onClick={fire} disabled={running}>
          ⚡ {running ? "전기 신호가 지나가는 중…" : "자극 전달 방향 보기"}
        </button>
      </div>
      <div style={{display:"flex", flexDirection:"column", gap:11, background:"var(--peach-card)", borderRadius:"var(--r-md)", padding:"15px 16px"}}>
        {parts.map((p,i)=>(
          <div key={p.id} style={{display:"flex", gap:11, alignItems:"flex-start", opacity: (lit<0||lit===i)?1:.5, transition:"opacity .2s"}}>
            <span style={{flex:"0 0 auto", width:14, height:14, borderRadius:"50%", background:p.color, marginTop:3, boxShadow:"0 0 0 3px "+p.color+"22"}}></span>
            <div>
              <b style={{color:p.color, fontSize:14.5}}>{p.name}</b>
              <p style={{fontSize:13.5, color:"var(--ink-soft)", margin:"2px 0 0", lineHeight:1.5}}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="notebox" style={{background:"var(--violet-soft)", border:"1.5px solid var(--violet)", color:"#4b3fa0", fontSize:13.5, textAlign:"center"}}>
        {N.direction}
      </div>
    </div>
  );
}

const TYPE_COLORS = {teal:"var(--teal)", violet:"var(--violet)", coral:"var(--coral)"};
const TYPE_BG = {teal:"var(--teal-bg)", violet:"var(--violet-soft)", coral:"var(--peach-card)"};

/* labeled illustration of the 3 neuron types in signal order */
function NeuronTypeFigure(){
  const img = window.APP_DATA.nervous.neuron.typesImg;
  const labels = [
    {t:"자극 · 감각 기관", x:.02, y:.82, c:"#3a6ea5", a:"l"},
    {t:"감각 뉴런", x:.27, y:.30, c:"#2f7dd1"},
    {t:"연합 뉴런", x:.50, y:.235, c:"#3fa64a"},
    {t:"운동 뉴런", x:.685, y:.275, c:"#e2872f"},
    {t:"반응 기관", x:.98, y:.82, c:"#8a63c9", a:"r"},
  ];
  const tf = a => a==="l" ? "translate(0,-50%)" : a==="r" ? "translate(-100%,-50%)" : "translate(-50%,-50%)";
  return (
    <div className="card" style={{padding:12}}>
      <div style={{position:"relative", borderRadius:"var(--r-sm)"}}>
        <img src={img} alt="감각 뉴런 → 연합 뉴런 → 운동 뉴런" style={{display:"block", width:"100%", height:"auto", borderRadius:"var(--r-sm)"}}/>
        {labels.map((l,i)=>(
          <span key={i} style={{
            position:"absolute", left:l.x*100+"%", top:l.y*100+"%", transform:tf(l.a),
            background:"rgba(255,255,255,.92)", color:l.c, border:"2px solid "+l.c,
            fontSize:"clamp(10px,1.7vw,13.5px)", fontWeight:800, padding:"3px 9px",
            borderRadius:"var(--r-pill)", whiteSpace:"nowrap", boxShadow:"var(--shadow-card)"
          }}>{l.t}</span>
        ))}
      </div>
      <p style={{fontSize:13, color:"var(--ink-soft)", textAlign:"center", margin:"10px 4px 2px"}}>
        자극은 <b style={{color:"#2f7dd1"}}>감각 뉴런</b> → <b style={{color:"#3fa64a"}}>연합 뉴런</b> → <b style={{color:"#e2872f"}}>운동 뉴런</b> 순서로 한 방향으로 전달돼요.
      </p>
    </div>
  );
}

function NeuronTypes(){
  const T = window.APP_DATA.nervous.neuron.types;
  return (
    <div className="stack-12">
      {T.map(t=>(
        <div key={t.id} className="typecard" style={{borderLeftColor:TYPE_COLORS[t.color]}}>
          <div style={{display:"flex", alignItems:"center", flexWrap:"wrap"}}>
            <b style={{color:TYPE_COLORS[t.color]}}>{t.name}</b>
            <span className="makes" style={{background:TYPE_BG[t.color], color:TYPE_COLORS[t.color]}}>{t.makes}을 이룸</span>
          </div>
          <p>{t.desc}</p>
        </div>
      ))}
    </div>
  );
}

function NervousSection(){
  const N = window.APP_DATA.nervous;
  return (
    <div className="page">
      <Eyebrow bg="var(--peach-card)" color="var(--coral-deep)">PART 1 · 정리</Eyebrow>
      <h2 className="h-page" style={{marginTop:10}}>신경계</h2>
      <p className="lead" style={{marginTop:8}}>{N.intro}</p>

      <div className="stack-22" style={{marginTop:18}}>
        <div>
          <SubHead n="1">신경계의 구조</SubHead>
          <NervousStructure/>
        </div>

        <div>
          <SubHead n="2">뉴런 — 신경 세포</SubHead>
          <div className="stack-16">
            <NeuronFlowDemo/>
            <div>
              <p style={{fontSize:14, fontWeight:800, color:"var(--ink-soft)", margin:"4px 0 10px"}}>기능에 따른 3종류</p>
              <div className="stack-12">
                <NeuronTypeFigure/>
                <NeuronTypes/>
              </div>
            </div>
            <FlowAnim nodes={N.neuron.flow} accent="var(--violet)" label="뉴런을 통한 전달 흐름"/>
          </div>
          <div style={{marginTop:14}}><Remember>{N.neuron.remember}</Remember></div>
        </div>

        <div>
          <SubHead n="3">중추 신경계의 각 부분</SubHead>
          <p className="lead" style={{margin:"2px 0 10px", fontSize:14}}>뇌·척수 지도에서 부위를 눌러 기능을 확인해요.</p>
          <ImageExplorer img={N.brain.img} parts={N.brain.parts} accent="var(--coral)" hint="뇌·척수의 부위를 톡 눌러보세요"/>
          <div style={{marginTop:14}}><Remember>{N.brain.remember}</Remember></div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { NervousSection });
