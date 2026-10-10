/* ============================================================
   감각 기관 Section
   ============================================================ */

const ORGAN_ORDER = ["eye","ear","skin","tongue","nose"];

/* eye 조절 작용 — uses quadrants of img/eye-adjust.png (2x2 composite) */
function EyeCrop({pos, cap, img, size}){
  const src = img || window.__res("eyeAdjust","img/eye-adjust.jpg");
  return (
    <div className="eyecrop">
      <div className="eyecrop-img" style={{backgroundImage:`url(${src})`, backgroundPosition:pos, ...(size?{backgroundSize:size}:{})}}></div>
      <p className="eyecrop-cap">{cap}</p>
    </div>
  );
}
function EyeAdjust(){
  const [light, setLight] = React.useState("bright");
  const [dist, setDist] = React.useState("near");
  return (
    <div className="stack-16">
      {/* light → 홍채·동공 (top row of composite) */}
      <div>
        <div className="compare" style={{marginBottom:10}}>
          <button className={"opt"+(light==="bright"?" on":"")} onClick={()=>setLight("bright")}>☀️ 밝을 때</button>
          <button className={"opt"+(light==="dark"?" on":"")} onClick={()=>setLight("dark")}>🌙 어두울 때</button>
        </div>
        <div className="compare-view">
          <EyeCrop pos={light==="bright"?"0% 0%":"100% 0%"}
            cap={light==="bright"
              ? "홍채가 확장 → 동공이 작아져 빛의 양이 줄어요."
              : "홍채가 수축 → 동공이 커져 빛의 양이 늘어요."}/>
        </div>
      </div>
      {/* distance → 섬모체·수정체 (bottom row of composite) */}
      <div>
        <div className="compare" style={{marginBottom:10}}>
          <button className={"opt"+(dist==="near"?" on":"")} onClick={()=>setDist("near")}>👀 가까운 물체</button>
          <button className={"opt"+(dist==="far"?" on":"")} onClick={()=>setDist("far")}>🏔️ 먼 물체</button>
        </div>
        <div className="compare-view">
          <EyeCrop img={window.__res("eyeDistance","img/eye-distance.jpg")} size="200% 100%" pos={dist==="near"?"0% 0%":"100% 0%"}
            cap={dist==="near"
              ? "섬모체가 수축 → 수정체가 두꺼워져 빛을 많이 굴절시켜요."
              : "섬모체가 이완 → 수정체가 얇아져 빛을 적게 굴절시켜요."}/>
        </div>
      </div>
    </div>
  );
}

/* ear: filter parts by 청각 / 평형감각 / 전체 */
function EarDiagram({D}){
  const [grp, setGrp] = React.useState("all");
  const shown = grp==="all" ? D.parts : D.parts.filter(p=>p.group===grp);
  const tabs=[
    {k:"all", t:"전체 보기", c:"var(--coral)"},
    {k:"hearing", t:"👂 청각 기관", c:"var(--teal)"},
    {k:"balance", t:"🌀 평형감각 기관", c:"var(--violet)"},
  ];
  return (
    <div className="stack-12">
      <div className="compare">
        {tabs.map(tb=>(
          <button key={tb.k} className={"opt"+(grp===tb.k?" on":"")} onClick={()=>setGrp(tb.k)}
            style={grp===tb.k?{background:tb.c, borderColor:tb.c, color:"#fff"}:null}>{tb.t}</button>
        ))}
      </div>
      <ImageExplorer key={grp} img={D.img} parts={shown} accent={grp==="balance"?"var(--violet)":grp==="hearing"?"var(--teal)":"var(--coral)"}
        hint="귀의 부위를 톡 눌러보세요"/>
      {grp==="hearing" && <div className="notebox" style={{background:"var(--teal-bg)", border:"1.5px solid var(--teal-soft)", color:"var(--teal-deep)", fontSize:13.5}}>소리(진동)을 받아들이는 <b>청각 기관</b>이에요: 귓바퀴·외이도·고막·귓속뼈·달팽이관·청각 신경.</div>}
      {grp==="balance" && <div className="notebox" style={{background:"var(--violet-soft)", border:"1.5px solid var(--violet)", color:"#4b3fa0", fontSize:13.5}}>몸의 움직임을 느끼는 <b>평형감각 기관</b>이에요: 회전은 <b>반고리관</b>, 기울어짐·움직임은 <b>전정 기관</b>이 느껴요. 이 자극은 <b>평형감각 신경</b>을 따라 <b>소뇌</b>로 전달돼 몸의 균형을 잡아요.</div>}
      {grp==="all" && <div className="notebox" style={{background:"#FBF3E7", border:"1.5px dashed var(--coral-soft)", color:"var(--ink-soft)", fontSize:13}}>
        ❗ <b>귀인두관</b>은 청각이나 평형감각 어느 쪽에도 속하지 않아요. 소리나 움직임을 감각하는 게 아니라, 고막 안팎의 <b>압력을 조절</b>하는 관이에요.
      </div>}
    </div>
  );
}

function OrganHeader({o}){
  return (
    <div className="sechead" style={{marginTop:6}}>
      <Mascot type={o.mascot} size={56}/>
      <div className="mc-txt">
        <b style={{fontSize:24}}>{o.name} <span style={{fontSize:15, color:"var(--ink-faint)"}}>· {o.sense}</span></b>
        <div style={{marginTop:6}}><StimPill>{o.stimulus}</StimPill></div>
      </div>
    </div>
  );
}

function OrganView({okey}){
  const D = window.APP_DATA.sensory.organs[okey];
  const common = (
    <>
      <OrganHeader o={D}/>
      <DefLine>{D.def}</DefLine>
    </>
  );

  if(okey==="eye") return (
    <div className="stack-22">
      {common}
      <div><SubHead n="1">눈 단면도 — 부위 탐험</SubHead>
        <ImageExplorer img={D.img} parts={D.parts} accent="var(--coral)"/>
      </div>
      <div><SubHead n="2">물체를 보는 과정</SubHead>
        <FlowAnim nodes={D.process} accent="var(--coral)" label="빛이 흐르는 길"/>
      </div>
      <div><SubHead n="3">눈의 조절 작용</SubHead>
        <EyeAdjust/>
      </div>
      <Remember>{D.remember}</Remember>
    </div>
  );

  if(okey==="ear") return (
    <div className="stack-22">
      {common}
      <div><SubHead n="1">귀 단면도 — 청각·평형감각 분리 탐험</SubHead>
        <EarDiagram D={D}/>
      </div>
      <div><SubHead n="2">소리를 듣는 과정</SubHead>
        <FlowAnim nodes={D.process} accent="var(--coral)" label="소리가 흐르는 길"/>
      </div>
      <NoteBox label="🌀 평형감각" variant="">{D.balance}</NoteBox>
      <Remember>{D.remember}</Remember>
    </div>
  );

  if(okey==="skin") return (
    <div className="stack-22">
      {common}
      <div><SubHead n="1">피부의 감각점 5종 — 부위 탐험</SubHead>
        <ImageExplorer img={D.img} parts={D.points} accent="var(--coral)" hint="피부 단면의 감각점을 톡 눌러보세요"/>
      </div>
      <NoteBox label="📊 분포가 많은 순서" variant="coral">{D.order + " <br/><b>통점</b>이 가장 많아 위험을 빨리 알아채요!"}</NoteBox>
      <div><SubHead n="2">자극이 전달되는 과정</SubHead>
        <FlowAnim nodes={D.process} accent="var(--coral)" label="피부 감각이 전달되는 길"/>
      </div>
      <Remember>{D.remember}</Remember>
    </div>
  );

  if(okey==="tongue") return (
    <div className="stack-22">
      {common}
      <div><SubHead n="1">혀·맛봉오리의 구조 — 부위 탐험</SubHead>
        <ImageExplorer img={D.img} parts={D.parts} accent="var(--coral)" hint="혀 표면과 맛봉오리를 톡 눌러보세요"/>
        <div style={{marginTop:14, display:"flex", flexDirection:"column", gap:7}}>
          {D.tastes.map(t=>(
            <div key={t.t} style={{display:"flex", alignItems:"center", gap:10}}>
              <span className="chip" style={{flex:"0 0 auto", minWidth:62, textAlign:"center"}}>{t.t}</span>
              <span style={{color:"var(--ink-faint)", fontWeight:800}}>→</span>
              <span style={{fontSize:14, color:"var(--ink-soft)", fontWeight:600}}>{t.chem}</span>
            </div>
          ))}
        </div>
      </div>
      <div><SubHead n="2">맛을 느끼는 과정</SubHead>
        <FlowAnim nodes={D.process} accent="var(--coral)" label="맛이 전달되는 길"/>
      </div>
      <NoteBox label="❗ 오개념 바로잡기" variant="coral">{D.misconception}</NoteBox>
      <Remember>{D.remember}</Remember>
    </div>
  );

  if(okey==="nose") return (
    <div className="stack-22">
      {common}
      <div><SubHead n="1">후각 상피의 구조 — 부위 탐험</SubHead>
        <ImageExplorer img={D.img} parts={D.parts} accent="var(--coral)" hint="콧속 후각 세포를 톡 눌러보세요"/>
      </div>
      <div><SubHead n="2">냄새를 맡는 과정</SubHead>
        <FlowAnim nodes={D.process} accent="var(--coral)" label="냄새가 전달되는 길"/>
      </div>
      <NoteBox label="👃 후각의 특징">{D.feature}</NoteBox>
      <NoteBox label="🍜 미각 + 후각" variant="">{D.link}</NoteBox>
      <Remember>{D.remember}</Remember>
    </div>
  );
  return null;
}

function SensorySection(){
  const [okey, setOkey] = React.useState("eye");
  const organs = window.APP_DATA.sensory.organs;
  return (
    <div className="page">
      <Eyebrow bg="var(--peach-card)" color="var(--coral-deep)">PART 1 · 정리</Eyebrow>
      <h2 className="h-page" style={{marginTop:10}}>감각 기관</h2>
      <p className="lead" style={{marginTop:8}}>{window.APP_DATA.sensory.intro}</p>

      <div className="organtabs" style={{marginTop:16}}>
        {ORGAN_ORDER.map(k=>{
          const o=organs[k];
          return (
            <button key={k} className={"organtab"+(okey===k?" on":"")} onClick={()=>setOkey(k)}>
              <div className="organtab-m" style={{width:38,height:38}}><Mascot type={o.mascot} size={38}/></div>
              <b style={okey===k?{color:"#fff"}:null}>{o.name}</b>
            </button>
          );
        })}
      </div>

      <div style={{marginTop:14}} key={okey}>
        <OrganView okey={okey}/>
      </div>
    </div>
  );
}

Object.assign(window, { SensorySection });
