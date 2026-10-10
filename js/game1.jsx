/* ============================================================
   Game 1 — 감각 기관 드래그 분류
   ============================================================ */

function Game1(){
  const G = window.APP_DATA.game1;
  const ROUND = G.cards.length; // 16
  const [deck, setDeck] = React.useState(()=>shuffle(G.cards).slice(0,ROUND));
  const [idx, setIdx] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const [combo, setCombo] = React.useState(0);
  const [bestCombo, setBestCombo] = React.useState(0);
  const [hover, setHover] = React.useState(null);
  const [flash, setFlash] = React.useState(null);
  const [fb, setFb] = React.useState(null);
  const [locked, setLocked] = React.useState(false);
  const [time, setTime] = React.useState(12);

  const cardRef = React.useRef(null);
  const start = React.useRef(null);
  const card = deck[idx];
  const done = idx >= deck.length;

  // per-card timer
  React.useEffect(()=>{
    if(done || locked) return;
    setTime(12);
    const t = setInterval(()=> setTime(v=>{
      if(v<=0.1){ clearInterval(t); resolve(null); return 0; }
      return +(v-0.1).toFixed(1);
    }), 100);
    return ()=> clearInterval(t);
    // eslint-disable-next-line
  }, [idx, done]);

  function resolve(basketKey){
    if(locked) return;
    setLocked(true);
    const ok = basketKey === card.a;
    const ansName = G.baskets.find(b=>b.key===card.a).name;
    const detail = card.note ? card.note
      : `'${card.t}'은(는) ${ansName}이(가) 받아들여요. (${G.hints[card.a]}${card.sub?" · "+card.sub:""})`;
    if(ok){
      const newCombo = combo+1;
      const gain = 10 + (newCombo-1)*3;
      setScore(s=>s+gain); setCorrect(c=>c+1);
      setCombo(newCombo); setBestCombo(b=>Math.max(b,newCombo));
      setFlash({key:card.a, ok:true});
      setFb({ok:true, msg: detail});
    } else {
      setCombo(0);
      setFlash(basketKey?{key:basketKey, ok:false}:null);
      const lead = basketKey
        ? `정답은 ${ansName}이에요. `
        : `시간 초과! 정답은 ${ansName}이에요. `;
      setFb({ok:false, msg: lead + detail});
    }
    // tricky cards get extra reading time
    const dwell = card.tricky ? 2600 : 1300;
    setTimeout(()=>{ setFlash(null); setFb(null); setLocked(false); setIdx(i=>i+1); }, dwell);
  }

  function onDown(e){
    if(locked) return;
    const el = cardRef.current;
    el.setPointerCapture(e.pointerId);
    start.current = {x:e.clientX, y:e.clientY};
    el.classList.add("dragging");
    el.style.pointerEvents = "none";
  }
  function onMove(e){
    if(!start.current) return;
    const dx=e.clientX-start.current.x, dy=e.clientY-start.current.y;
    cardRef.current.style.transform = `translate(${dx}px,${dy}px) rotate(${dx*0.03}deg)`;
    const t = document.elementFromPoint(e.clientX, e.clientY);
    const b = t && t.closest("[data-basket]");
    setHover(b ? b.dataset.basket : null);
  }
  function onUp(e){
    if(!start.current) return;
    const t = document.elementFromPoint(e.clientX, e.clientY);
    const b = t && t.closest("[data-basket]");
    start.current = null;
    const el = cardRef.current;
    el.style.transform = ""; el.style.pointerEvents = ""; el.classList.remove("dragging");
    setHover(null);
    if(b) resolve(b.dataset.basket);
  }

  function restart(){
    setDeck(shuffle(G.cards).slice(0,ROUND));
    setIdx(0); setScore(0); setCorrect(0); setCombo(0); setBestCombo(0); setFb(null); setLocked(false);
  }

  if(done) return (
    <ResultScreen score={score} total={ROUND*10} unit="점"
      subtitle={`${ROUND}문제 중 ${correct}개 정답 · 최고 콤보 ${bestCombo}`} onRestart={restart}/>
  );

  return (
    <div className="gamewrap">
      <GameHud
        left={<><div className="stat">⭐ <span className="v">{score}</span></div>
          <div className="stat" style={{fontSize:13}}>{idx+1}/{ROUND}</div></>}
        right={combo>1 ? <div className="combo">🔥 {combo} 콤보</div> : <div className="stat" style={{fontSize:13, color:"var(--ink-faint)"}}>정답 {correct}</div>}
      />
      <div className="timerbar"><i style={{width:`${(time/12)*100}%`, background: time<4?"var(--wrong)":"var(--coral)"}}></i></div>

      <p className="center muted" style={{fontSize:14, margin:"4px 0"}}>카드를 알맞은 감각 기관으로 <b>끌어다 놓으세요</b> 👇</p>

      <div style={{minHeight:96, display:"flex", alignItems:"center", justifyContent:"center"}}>
        {fb ? <Feedback ok={fb.ok}>{fb.msg}</Feedback>
          : <div ref={cardRef} className="g1-card" style={{maxWidth:360, width:"100%"}}
              onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}>
              {card.tricky && <span className="trickytag">🤔 헷갈리는 문제</span>}
              {card.t}
            </div>}
      </div>

      <div className="g1-baskets">
        {G.baskets.map(b=>{
          let cls="g1-basket";
          if(hover===b.key) cls+=" hover";
          if(flash && flash.key===b.key) cls += flash.ok?" flash-ok":" flash-no";
          return (
            <div key={b.key} className={cls} data-basket={b.key}>
              <Mascot type={b.mascot} size={36}/>
              <b>{b.name}</b>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Object.assign(window, { Game1 });
