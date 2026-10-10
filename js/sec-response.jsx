/* ============================================================
   반응 Section
   ============================================================ */

const RES_COLOR = {coral:"var(--coral)", teal:"var(--teal)", violet:"var(--violet)"};
const RES_BG = {coral:"var(--peach-card)", teal:"var(--teal-bg)", violet:"var(--violet-soft)"};

function PathRow({r}){
  const c = RES_COLOR[r.color];
  return (
    <div className="pathrow" style={{borderTopColor:c}}>
      <div className="ttl">
        <b style={{color:c}}>{r.name}</b>
        <span className="tag" style={{background:RES_BG[r.color], color:c}}>{r.tag}</span>
      </div>
      <p style={{fontSize:14, color:"var(--ink-soft)", margin:"8px 0 4px"}}>{r.desc}</p>
      <div style={{margin:"10px 0 2px"}}>
        <span className="chip" style={{background:RES_BG[r.color], color:c, fontWeight:800}}>🎯 반사 중추 · {r.center}</span>
      </div>
      <div style={{marginTop:10}}>
        <FlowAnim nodes={r.path} accent={c} label={`${r.name} 경로 (${r.path.length}단계)`}/>
      </div>
      <div className="ex">🧪 예) {r.example}</div>
      {r.centers && (
        <div className="stack-12" style={{marginTop:12}}>
          {r.centers.map((ct,i)=>(
            <div key={i} className="notebox" style={{background:"var(--teal-bg)", border:"1.5px solid var(--teal-soft)", color:"var(--teal-deep)", fontSize:13.5}}>
              <b>{ct.center}</b> · {ct.ex}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ResponseSection(){
  const R = window.APP_DATA.response;
  return (
    <div className="page">
      <Eyebrow bg="var(--peach-card)" color="var(--coral-deep)">PART 1 · 정리</Eyebrow>
      <h2 className="h-page" style={{marginTop:10}}>반응</h2>
      <p className="lead" style={{marginTop:8}}>{R.intro}</p>

      <div style={{marginTop:18}}>
        <SubHead n="1">세 가지 반응 경로 비교</SubHead>
        <p className="lead" style={{margin:"2px 0 12px", fontSize:14}}>각 카드의 <b>▶ 다시 보기</b>로 신호가 흐르는 길을 비교해 보세요. 경로가 짧을수록 빨라요!</p>
        <div className="stack-16">
          {R.types.map(r=> <PathRow key={r.id} r={r}/>)}
        </div>
      </div>

      <div style={{marginTop:20}}>
        <NoteBox label="🔑 핵심 포인트" variant="coral">{R.keypoint}</NoteBox>
      </div>

      <div style={{marginTop:18}}>
        <Remember>{R.remember}</Remember>
      </div>
    </div>
  );
}

Object.assign(window, { ResponseSection });
