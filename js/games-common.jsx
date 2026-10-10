/* ============================================================
   Game shared helpers
   ============================================================ */

function shuffle(arr){
  const a=arr.slice();
  for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}

function medalFor(ratio){
  if(ratio>=0.9) return {emoji:"🏆", word:"완벽해요!", color:"var(--gold)"};
  if(ratio>=0.7) return {emoji:"🥈", word:"잘했어요!", color:"var(--teal)"};
  if(ratio>=0.4) return {emoji:"🥉", word:"좋아요!", color:"var(--coral)"};
  return {emoji:"🌱", word:"다시 도전!", color:"var(--violet)"};
}

function ResultScreen({score, total, onRestart, subtitle, children, unit="점"}){
  const ratio = total ? score/total : 0;
  const m = medalFor(ratio);
  return (
    <div className="card result" style={{padding:"28px 20px"}}>
      <div className="medal">{m.emoji}</div>
      <div className="fun" style={{fontSize:22, color:m.color, marginTop:4}}>{m.word}</div>
      <div className="big" style={{margin:"10px 0 2px"}}>{score}<span style={{fontSize:24, color:"var(--ink-faint)"}}>{unit}</span></div>
      {subtitle && <p className="muted" style={{fontSize:15}}>{subtitle}</p>}
      {children}
      <button className="btn lg teal" style={{marginTop:20}} onClick={onRestart}>🔄 다시하기</button>
    </div>
  );
}

function GameHud({left, right}){
  return <div className="hud">{left}{right}</div>;
}

function Feedback({ok, children}){
  return (
    <div className={"feedback "+(ok?"ok":"no")}>
      <span className="em">{ok?"⭕ 정답!":"❌ 아쉬워요"}</span>
      <span>{children}</span>
    </div>
  );
}

Object.assign(window, { shuffle, medalFor, ResultScreen, GameHud, Feedback });
