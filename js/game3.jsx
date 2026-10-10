/* ============================================================
   Game 3 — 반응 속도 측정 (색깔 / 단어 찾기 / 소리)
   ============================================================ */

const N_TRIAL = 5;

function avgOf(arr){ const v=arr.filter(x=>x!=null); return v.length? Math.round(v.reduce((a,b)=>a+b,0)/v.length):null; }
function bestOf(arr){ const v=arr.filter(x=>x!=null); return v.length? Math.min(...v):null; }

function RecordStrip({times, n=N_TRIAL}){
  return (
    <div className="records">
      {Array.from({length:n}).map((_,i)=>(
        <div key={i} className="rec"><span>{i+1}회</span><b>{times[i]!=null?times[i]:"–"}</b></div>
      ))}
    </div>
  );
}

function MiniResult({title, times, note, accent, onRetry, onMenu}){
  const avg=avgOf(times), best=bestOf(times);
  return (
    <div className="card result" style={{padding:"24px 20px"}}>
      <div style={{fontSize:40}}>🏁</div>
      <div className="fun" style={{fontSize:20, color:accent, marginTop:2}}>{title} 완료!</div>
      <div className="records" style={{marginTop:14}}>
        <div className="rec"><span>평균</span><b>{avg!=null?avg:"–"}</b></div>
        <div className="rec"><span>최고</span><b>{best!=null?best:"–"}</b></div>
      </div>
      <div style={{marginTop:12}}><RecordStrip times={times}/></div>
      <div className="notebox" style={{marginTop:14, textAlign:"left", background:"var(--peach-card)", border:"1.5px solid var(--coral-soft)", color:"var(--coral-deep)"}}>💡 {note}</div>
      <div className="row" style={{marginTop:18}}>
        <button className="btn ghost" style={{flex:1}} onClick={onMenu}>← 메뉴</button>
        <button className="btn teal" style={{flex:1}} onClick={onRetry}>🔄 다시하기</button>
      </div>
    </div>
  );
}

/* ---------- A. 색깔 반응 ---------- */
function ColorGame({onDone, onMenu}){
  const [trial, setTrial] = React.useState(0);
  const [status, setStatus] = React.useState("ready"); // ready | go | foul | result
  const [rt, setRt] = React.useState(null);
  const [times, setTimes] = React.useState([]);
  const goAt = React.useRef(0); const to = React.useRef(null);

  React.useEffect(()=>{
    if(trial>=N_TRIAL) return;
    setStatus("ready"); setRt(null);
    to.current = setTimeout(()=>{ setStatus("go"); goAt.current=performance.now(); }, 1300+Math.random()*2600);
    return ()=> clearTimeout(to.current);
  }, [trial]);

  function tap(){
    if(status==="ready"){ clearTimeout(to.current); setStatus("foul"); setTimeout(()=>setTrial(t=>t+1),1400); }
    else if(status==="go"){ const r=Math.round(performance.now()-goAt.current); setRt(r); setTimes(t=>[...t,r]); setStatus("result"); setTimeout(()=>setTrial(t=>t+1),1300); }
  }
  if(trial>=N_TRIAL) return <MiniResult title="색깔 반응" times={times} accent="var(--coral)"
    note="화면 색을 보고 누르는 시각 반응이에요. 눈 → 대뇌 → 손으로 신호가 전해지는 의식적 반응이라 시간이 걸려요."
    onRetry={()=>{setTimes([]);setTrial(0);}} onMenu={()=>onDone("color",times)}/>;

  const cls={ready:"rz-ready",go:"rz-go",foul:"rz-foul",result:"rz-result"}[status];
  return (
    <div className="gamewrap">
      <GameHud left={<div className="stat">🟢 색깔 반응</div>} right={<div className="stat" style={{fontSize:13}}>{Math.min(trial+1,N_TRIAL)}/{N_TRIAL}</div>}/>
      <div className={"reactzone "+cls} onPointerDown={tap}>
        {status==="ready" && <><div className="big">준비…</div><div className="sub">초록색이 되면 바로 탭!</div></>}
        {status==="go" && <div className="big">지금 탭! 👆</div>}
        {status==="result" && <><div className="big">{rt} ms</div><div className="sub">기록됨!</div></>}
        {status==="foul" && <><div className="big">부정 출발! 🚫</div><div className="sub">초록불 전에는 누르면 안 돼요</div></>}
      </div>
      <RecordStrip times={times}/>
      <button className="topbar-back" style={{alignSelf:"center"}} onClick={onMenu}>← 메뉴로</button>
    </div>
  );
}

/* ---------- B. 단어 찾기 반응 ---------- */
function WordGame({onDone, onMenu}){
  const WORDS = window.APP_DATA.game3.words;
  const [trial, setTrial] = React.useState(0);
  const [status, setStatus] = React.useState("ready"); // ready | go | result | penalty
  const [round, setRound] = React.useState(null); // {target, opts:[...3], correctIdx}
  const [rt, setRt] = React.useState(null);
  const [times, setTimes] = React.useState([]);
  const goAt = React.useRef(0); const penalty = React.useRef(0); const to = React.useRef(null);

  function makeRound(){
    const pool = shuffle(WORDS);
    const target = pool[0];
    const distract = pool.slice(1,3);
    const opts = shuffle([target, ...distract]);
    return {target, opts, correctIdx: opts.indexOf(target)};
  }
  React.useEffect(()=>{
    if(trial>=N_TRIAL) return;
    setStatus("ready"); setRt(null); penalty.current=0;
    const r=makeRound();
    to.current=setTimeout(()=>{ setRound(r); setStatus("go"); goAt.current=performance.now(); }, 900+Math.random()*1800);
    return ()=> clearTimeout(to.current);
  }, [trial]);

  function pick(i){
    if(status!=="go" && status!=="penalty") return;
    if(i===round.correctIdx){
      const r=Math.round(performance.now()-goAt.current+penalty.current);
      setRt(r); setTimes(t=>[...t,r]); setStatus("result"); setTimeout(()=>setTrial(t=>t+1),1300);
    } else {
      penalty.current += 400; setStatus("penalty"); setTimeout(()=>setStatus("go"),250);
    }
  }
  if(trial>=N_TRIAL) return <MiniResult title="단어 찾기 반응" times={times} accent="var(--violet)"
    note="같은 단어를 '찾는' 판단이 들어가서, 단순한 색깔·소리 반응보다 더 오래 걸려요. 대뇌가 글자를 읽고 비교하기 때문이에요."
    onRetry={()=>{setTimes([]);setTrial(0);}} onMenu={()=>onDone("word",times)}/>;

  return (
    <div className="gamewrap">
      <GameHud left={<div className="stat">🔤 단어 찾기</div>} right={<div className="stat" style={{fontSize:13}}>{Math.min(trial+1,N_TRIAL)}/{N_TRIAL}</div>}/>
      <div className="wordtarget">
        {status==="ready"
          ? <span className="wt-wait">곧 단어가 나타나요…</span>
          : <><span className="wt-lbl">이 단어를 찾으세요</span><b className="wt-word">{round.target}</b></>}
      </div>
      <div className="wordopts">
        {(round? round.opts : ["·","·","·"]).map((w,i)=>(
          <button key={i} className={"wordblock"+(status==="penalty"?" shake":"")}
            disabled={status==="ready"||status==="result"} onClick={()=>pick(i)}>
            {status==="ready"?"?":w}
          </button>
        ))}
      </div>
      {status==="result" && <div className="feedback ok"><span className="em">⭕ {rt} ms</span><span>정답을 찾았어요!</span></div>}
      {status==="penalty" && <div className="feedback no"><span className="em">앗!</span><span>다른 단어예요. +0.4초 페널티</span></div>}
      <RecordStrip times={times}/>
      <button className="topbar-back" style={{alignSelf:"center"}} onClick={onMenu}>← 메뉴로</button>
    </div>
  );
}

/* ---------- C. 소리 반응 ---------- */
function SoundGame({onDone, onMenu}){
  const [started, setStarted] = React.useState(false);
  const [trial, setTrial] = React.useState(0);
  const [status, setStatus] = React.useState("ready");
  const [rt, setRt] = React.useState(null);
  const [times, setTimes] = React.useState([]);
  const goAt = React.useRef(0); const to = React.useRef(null); const actx = React.useRef(null);

  function beep(){
    try{
      const ctx=actx.current; if(!ctx) return;
      const o=ctx.createOscillator(), g=ctx.createGain();
      o.frequency.value=880; o.type="sine"; o.connect(g); g.connect(ctx.destination);
      g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.35, ctx.currentTime+0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime+0.2);
      o.start(); o.stop(ctx.currentTime+0.22);
    }catch(e){}
  }
  function startGame(){
    try{ actx.current = new (window.AudioContext||window.webkitAudioContext)(); }catch(e){}
    setStarted(true); setTrial(0); setTimes([]);
  }
  React.useEffect(()=>{
    if(!started || trial>=N_TRIAL) return;
    setStatus("ready"); setRt(null);
    to.current=setTimeout(()=>{ setStatus("go"); goAt.current=performance.now(); beep(); }, 1300+Math.random()*2600);
    return ()=> clearTimeout(to.current);
  }, [trial, started]);

  function tap(){
    if(!started) return;
    if(status==="ready"){ clearTimeout(to.current); setStatus("foul"); setTimeout(()=>setTrial(t=>t+1),1400); }
    else if(status==="go"){ const r=Math.round(performance.now()-goAt.current); setRt(r); setTimes(t=>[...t,r]); setStatus("result"); setTimeout(()=>setTrial(t=>t+1),1300); }
  }

  if(!started) return (
    <div className="gamewrap">
      <GameHud left={<div className="stat">🔔 소리 반응</div>} right={<span/>}/>
      <div className="card" style={{padding:22, textAlign:"center"}}>
        <div style={{fontSize:36}}>🔔</div>
        <p style={{fontSize:15, marginTop:8, lineHeight:1.6}}>화면을 보며 기다리다가 <b>"삐" 소리</b>가 나는 순간 최대한 빨리 탭하세요. 소리를 켜려면 아래 버튼을 눌러 시작해요.</p>
      </div>
      <button className="btn lg" onClick={startGame}>🔊 소리 켜고 시작</button>
      <button className="topbar-back" style={{alignSelf:"center"}} onClick={onMenu}>← 메뉴로</button>
    </div>
  );
  if(trial>=N_TRIAL) return <MiniResult title="소리 반응" times={times} accent="var(--teal)"
    note="소리를 듣고 누르는 청각 반응이에요. 귀 → 대뇌 → 손으로 신호가 전해져요. 보통 소리 반응이 색깔(시각) 반응보다 조금 빠른 편이에요."
    onRetry={()=>{setStarted(false);}} onMenu={()=>onDone("sound",times)}/>;

  const cls={ready:"rz-wait",go:"rz-go",foul:"rz-foul",result:"rz-result"}[status];
  return (
    <div className="gamewrap">
      <GameHud left={<div className="stat">🔔 소리 반응</div>} right={<div className="stat" style={{fontSize:13}}>{Math.min(trial+1,N_TRIAL)}/{N_TRIAL}</div>}/>
      <div className={"reactzone "+cls} onPointerDown={tap}>
        {status==="ready" && <><div className="big">🔇 기다려요…</div><div className="sub">"삐" 소리가 나면 바로 탭!</div></>}
        {status==="go" && <><div className="big">🔊 지금 탭!</div></>}
        {status==="result" && <><div className="big">{rt} ms</div><div className="sub">기록됨!</div></>}
        {status==="foul" && <><div className="big">부정 출발! 🚫</div><div className="sub">소리 전에는 누르면 안 돼요</div></>}
      </div>
      <RecordStrip times={times}/>
      <button className="topbar-back" style={{alignSelf:"center"}} onClick={onMenu}>← 메뉴로</button>
    </div>
  );
}

/* ---------- menu + summary ---------- */
function Game3(){
  const [phase, setPhase] = React.useState("menu");
  const [res, setRes] = React.useState({color:[], word:[], sound:[]});
  function done(key, times){ setRes(r=>({...r, [key]:times})); setPhase("menu"); }

  const games = [
    {key:"color", title:"색깔 반응", sub:"초록불이 되면 탭 · 시각", emoji:"🟢", color:"var(--coral)"},
    {key:"sound", title:"소리 반응", sub:"삐 소리에 탭 · 청각", emoji:"🔔", color:"var(--teal)"},
    {key:"word",  title:"단어 찾기 반응", sub:"같은 단어 찾기 · 시각+판단", emoji:"🔤", color:"var(--violet)"},
  ];

  if(phase==="color") return <ColorGame onDone={done} onMenu={()=>setPhase("menu")}/>;
  if(phase==="word")  return <WordGame onDone={done} onMenu={()=>setPhase("menu")}/>;
  if(phase==="sound") return <SoundGame onDone={done} onMenu={()=>setPhase("menu")}/>;

  if(phase==="summary"){
    const c=avgOf(res.color), w=avgOf(res.word), s=avgOf(res.sound);
    const max=Math.max(c||0,w||0,s||0)||1;
    const bar=(v,color)=> <div className="cmpbar"><i style={{width:(v?(v/max*100):4)+"%", background:color}}></i><span>{v!=null?v+" ms":"기록 없음"}</span></div>;
    return (
      <div className="gamewrap">
        <div className="card result" style={{padding:"24px 20px"}}>
          <div style={{fontSize:44}}>📊</div>
          <div className="fun" style={{fontSize:22, color:"var(--coral-deep)", marginTop:2}}>반응 속도 비교</div>
          <div className="cmp">
            <div className="cmprow"><span className="cmplbl" style={{color:"var(--coral)"}}>🟢 색깔(시각)</span>{bar(c,"var(--coral)")}</div>
            <div className="cmprow"><span className="cmplbl" style={{color:"var(--teal)"}}>🔔 소리(청각)</span>{bar(s,"var(--teal)")}</div>
            <div className="cmprow"><span className="cmplbl" style={{color:"var(--violet)"}}>🔤 단어 찾기</span>{bar(w,"var(--violet)")}</div>
          </div>
          <div className="notebox" style={{marginTop:16, textAlign:"left"}}>
            <div className="lbl">🧠 왜 단어 찾기가 더 오래 걸릴까?</div>
            단어를 찾는 반응은 대뇌가 글자를 읽고 판단하는 과정이 들어가서 더 오래 걸려요. 이 모든 반응은 대뇌를 거치는 <b>의식적 반응</b>이라 시간이 걸린답니다.
          </div>
          {(c!=null&&s!=null) && <div className="notebox coral" style={{marginTop:10, textAlign:"left"}}>
            👀 색깔(시각) {c} ms vs 🔔 소리(청각) {s} ms — 사람마다 다르지만 보통 소리 반응이 조금 더 빠른 편이에요.
          </div>}
          <button className="btn lg teal" style={{marginTop:18}} onClick={()=>setPhase("menu")}>← 메뉴로</button>
        </div>
      </div>
    );
  }

  // menu
  const anyDone = res.color.length||res.word.length||res.sound.length;
  return (
    <div className="gamewrap">
      <div className="card" style={{padding:18}}>
        <b style={{fontSize:18}}>⚡ 반응 속도 측정</b>
        <p className="muted" style={{fontSize:14.5, marginTop:6, lineHeight:1.55}}>세 가지 방식으로 내 반응 시간을 밀리초(ms)로 재 보세요. 각 게임을 마치면 평균·최고 기록이 남아요.</p>
      </div>
      <div className="stack-12">
        {games.map(g=>{
          const avg=avgOf(res[g.key]);
          return (
            <button key={g.key} className="menucard" onClick={()=>setPhase(g.key)}>
              <div style={{width:52,height:52,borderRadius:16,background:g.color,display:"grid",placeItems:"center",fontSize:26,flex:"0 0 auto"}}>{g.emoji}</div>
              <div className="mc-txt"><b style={{fontSize:17}}>{g.title}</b><span>{g.sub}</span></div>
              {avg!=null
                ? <span className="avgtag" style={{color:g.color}}>평균 {avg}<small>ms</small></span>
                : <span className="mc-go" style={{color:g.color}}>›</span>}
            </button>
          );
        })}
      </div>
      <button className="btn lg" disabled={!anyDone} onClick={()=>setPhase("summary")}>📊 세 게임 결과 비교하기</button>
      {!anyDone && <p className="center muted" style={{fontSize:12.5}}>게임을 하나 이상 완료하면 비교할 수 있어요</p>}
    </div>
  );
}

Object.assign(window, { Game3 });
