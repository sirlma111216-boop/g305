/* ============================================================
   Game 2 — 신경계 경로 순서 퍼즐 + 보너스 퀴즈
   ============================================================ */

function StagePuzzle({stage, idx, total, onSolved}){
  const G = window.APP_DATA.game2;
  const [bank, setBank] = React.useState(()=> shuffle(G.pool.map((label,i)=>({id:i,label}))));
  const [slots, setSlots] = React.useState([]);
  const [state, setState] = React.useState("build"); // build | wrong | solved
  const wrongIdx = React.useRef([]);
  const centerWrong = React.useRef(false);

  const need = stage.answer.length; // 6

  function place(p){ if(state==="solved") return; setSlots(s=>[...s,p]); setBank(b=>b.filter(x=>x.id!==p.id)); setState("build"); }
  function remove(p){ if(state==="solved") return; setBank(b=>[...b,p]); setSlots(s=>s.filter(x=>x.id!==p.id)); setState("build"); }
  function check(){
    const ok = slots.length===need && slots.every((s,i)=> s.label===stage.answer[i]);
    if(ok){ setState("solved"); setTimeout(()=>onSolved(), 1900); }
    else {
      wrongIdx.current = slots.map((s,i)=> s.label!==stage.answer[i] ? i : -1).filter(i=>i>=0);
      // center mistake: a center-type tile sits where the center should be (index 3) but is wrong
      const placedCenter = slots[3];
      centerWrong.current = !!placedCenter && G.centers.includes(placedCenter.label) && placedCenter.label!==stage.center;
      setState("wrong");
    }
  }
  function reset(){ setBank(shuffle(G.pool.map((label,i)=>({id:i,label})))); setSlots([]); setState("build"); }

  return (
    <div className="gamewrap">
      <GameHud
        left={<div className="stat">🧩 상황 <span className="v">{idx+1}</span>/{total}</div>}
        right={<div className="dots">{Array.from({length:total}).map((_,i)=>
          <i key={i} className={i<idx?"done":i===idx?"on":""}/>)}</div>}
      />
      <div className="card" style={{padding:16}}>
        <span className="situtag">🎬 상황</span>
        <p style={{fontSize:16, fontWeight:700, marginTop:8, lineHeight:1.5}}>{stage.situation}</p>
      </div>

      {/* slots */}
      <div>
        <p style={{fontSize:13, fontWeight:800, color:"var(--ink-soft)", marginBottom:7}}>① 자극 전달 경로를 순서대로 (조각 탭하면 빼기)</p>
        <div className="g2-slotarea">
          {slots.length===0 && <span className="g2-empty">아래 조각을 순서대로 탭하세요…</span>}
          {slots.map((p,i)=>(
            <React.Fragment key={p.id}>
              {i>0 && <span className="g2-arrow">→</span>}
              <button className="g2-piece placed"
                style={ state==="solved" ? {background:"var(--correct)", borderColor:"var(--correct)"} :
                        (state==="wrong" && wrongIdx.current.includes(i)) ? {background:"var(--wrong)", borderColor:"var(--wrong)"} : null}
                onClick={()=>remove(p)}>
                {p.label} <span className="x">✕</span>
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* bank — fixed pool, includes all 4 centers */}
      <div>
        <p style={{fontSize:13, fontWeight:800, color:"var(--ink-soft)", marginBottom:7}}>② 조각 모음 <span style={{color:"var(--ink-faint)", fontWeight:600}}>· 중추 4개 중 알맞은 하나만 골라요</span></p>
        <div className="g2-bank">
          {bank.map(p=> {
            const isCenter = G.centers.includes(p.label);
            return <button key={p.id} className={"g2-piece"+(isCenter?" center":"")} onClick={()=>place(p)}>{p.label}</button>;
          })}
        </div>
      </div>

      {state==="wrong" && <Feedback ok={false}>
        {centerWrong.current
          ? "중추 타일이 알맞지 않아요! 이 상황의 중추가 무엇일지 다시 생각해 보세요."
          : "빨간 칸의 순서가 틀렸어요. 조각을 빼서 다시 놓아 보세요."}
      </Feedback>}
      {state==="solved" && (
        <div className="stack-12">
          <Feedback ok={true}>경로 완성! 신호가 흐릅니다 ⚡</Feedback>
          <FlowAnim nodes={stage.answer} accent="var(--teal)" auto={true} label="완성된 경로"/>
          <NoteBox label={`🎯 ${stage.type} · 중추 ${stage.center}`} variant="">{stage.explain}</NoteBox>
        </div>
      )}

      {state!=="solved" && (
        <div className="row">
          <button className="btn ghost" style={{flex:"0 0 auto"}} onClick={reset}>↺ 초기화</button>
          <button className="btn teal" style={{flex:1}} disabled={slots.length===0} onClick={check}>경로 확인</button>
        </div>
      )}
    </div>
  );
}

function BonusQuiz({onDone}){
  const [qs] = React.useState(()=> shuffle(window.APP_DATA.game2.bonus));
  const [i, setI] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [picked, setPicked] = React.useState(null);
  const q = qs[i];

  function pick(opt){
    if(picked) return;
    setPicked(opt);
    if(opt===q.a) setScore(s=>s+1);
    setTimeout(()=>{
      if(i+1>=qs.length) onDone(score + (opt===q.a?1:0));
      else { setI(i+1); setPicked(null); }
    }, 1100);
  }

  return (
    <div className="gamewrap">
      <GameHud left={<div className="stat">🎁 보너스 <span className="v">{i+1}</span>/{qs.length}</div>}
        right={<div className="stat" style={{fontSize:13}}>정답 {score}</div>}/>
      <div className="card" style={{padding:20}}>
        <p style={{fontSize:13, fontWeight:800, color:"var(--teal-deep)", marginBottom:6}}>중추 신경계 부위–기능</p>
        <b style={{fontSize:18, lineHeight:1.4}}>{q.q}</b>
      </div>
      <div className="pickgrid">
        {q.opts.map(opt=>{
          let cls="pickbtn";
          if(picked){ if(opt===q.a) cls+=" ok"; else if(opt===picked) cls+=" no"; }
          return <button key={opt} className={cls} disabled={!!picked} onClick={()=>pick(opt)}>
            <span className="pk" style={{background:"var(--teal)"}}></span>{opt}</button>;
        })}
      </div>
    </div>
  );
}

function Game2(){
  const stages = window.APP_DATA.game2.stages;
  const [phase, setPhase] = React.useState("stage"); // stage | bonus | done
  const [si, setSi] = React.useState(0);
  const [solved, setSolved] = React.useState(0);
  const [bonus, setBonus] = React.useState(0);

  function onSolved(){
    setSolved(s=>s+1);
    if(si+1>=stages.length) setPhase("bonus");
    else setSi(si+1);
  }
  function restart(){ setPhase("stage"); setSi(0); setSolved(0); setBonus(0); }

  if(phase==="stage") return <StagePuzzle key={si} stage={stages[si]} idx={si} total={stages.length} onSolved={onSolved}/>;
  if(phase==="bonus") return <BonusQuiz onDone={(b)=>{ setBonus(b); setPhase("done"); }}/>;

  const total = stages.length + window.APP_DATA.game2.bonus.length;
  const got = solved + bonus;
  return (
    <ResultScreen score={got} total={total} unit="개"
      subtitle={`경로 ${solved}/${stages.length} · 보너스 ${bonus}/${window.APP_DATA.game2.bonus.length}`}
      onRestart={restart}>
      <p className="muted" style={{fontSize:14, marginTop:8}}>무조건 반사는 대뇌를 거치지 않아 경로가 더 짧았죠? 그래서 더 빨라요!</p>
    </ResultScreen>
  );
}

Object.assign(window, { Game2 });
