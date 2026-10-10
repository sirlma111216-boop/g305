/* ============================================================
   Mascots & nav icons — simple friendly SVG characters
   ============================================================ */

/* generic cute face (two eyes + smile) */
function Face({cx=50, cy=52, scale=1, color="#2B2A33"}){
  return (
    <g fill={color}>
      <circle cx={cx-9*scale} cy={cy} r={3*scale}/>
      <circle cx={cx+9*scale} cy={cy} r={3*scale}/>
      <path d={`M ${cx-7*scale} ${cy+7*scale} Q ${cx} ${cy+13*scale} ${cx+7*scale} ${cy+7*scale}`}
        fill="none" stroke={color} strokeWidth={2.4*scale} strokeLinecap="round"/>
    </g>
  );
}

function blobWrap(inner, bg){
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect x="6" y="6" width="88" height="88" rx="30" fill={bg}/>
      {inner}
    </svg>
  );
}

/* EYE mascot */
function MascotEye({}){
  return blobWrap(
    <g>
      <ellipse cx="50" cy="50" rx="30" ry="22" fill="#fff"/>
      <circle cx="50" cy="50" r="14" fill="#15B2AC"/>
      <circle cx="50" cy="50" r="7" fill="#2B2A33"/>
      <circle cx="46" cy="46" r="3" fill="#fff"/>
    </g>, "#FFD9CC");
}
/* EAR mascot */
function MascotEar({}){
  return blobWrap(
    <g>
      <path d="M38 30 Q66 22 68 50 Q70 72 52 74 Q44 75 44 66 Q44 58 50 56 Q56 54 54 48 Q52 40 44 42 Q38 44 38 50"
        fill="none" stroke="#F0533F" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
    </g>, "#CFEFEE");
}
/* NOSE mascot */
function MascotNose({}){
  return blobWrap(
    <g>
      <path d="M50 28 Q44 50 38 60 Q36 70 46 72 Q50 73 54 72 Q64 70 62 60 Q56 50 50 28 Z" fill="#FFB59E"/>
      <ellipse cx="44" cy="64" rx="3.4" ry="4.4" fill="#F0533F"/>
      <ellipse cx="56" cy="64" rx="3.4" ry="4.4" fill="#F0533F"/>
    </g>, "#FFE4D6");
}
/* TONGUE mascot */
function MascotTongue({}){
  return blobWrap(
    <g>
      <path d="M30 34 Q50 28 70 34 Q72 50 50 72 Q28 50 30 34 Z" fill="#FF8A7A"/>
      <path d="M50 40 Q50 56 50 66" stroke="#E8412C" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="50" cy="36" rx="20" ry="6" fill="#fff" opacity=".5"/>
    </g>, "#FFD9CC");
}
/* SKIN mascot (hand/touch) */
function MascotSkin({}){
  return blobWrap(
    <g>
      <rect x="34" y="40" width="32" height="30" rx="10" fill="#FFC9B3"/>
      <rect x="36" y="26" width="6" height="20" rx="3" fill="#FFC9B3"/>
      <rect x="46" y="22" width="6" height="24" rx="3" fill="#FFC9B3"/>
      <rect x="56" y="26" width="6" height="20" rx="3" fill="#FFC9B3"/>
      <circle cx="50" cy="56" r="4" fill="#15B2AC"/>
    </g>, "#E8F7F6");
}
/* NEURON mascot */
function MascotNeuron({color="#7C6CD8", bg="#E7E2FA"}){
  return blobWrap(
    <g stroke={color} strokeWidth="4" strokeLinecap="round" fill="none">
      <line x1="50" y1="50" x2="26" y2="32"/>
      <line x1="50" y1="50" x2="24" y2="52"/>
      <line x1="50" y1="50" x2="30" y2="70"/>
      <line x1="50" y1="50" x2="78" y2="58"/>
      <circle cx="50" cy="50" r="11" fill={color} stroke="none"/>
      <circle cx="80" cy="58" r="4" fill={color} stroke="none"/>
    </g>, bg);
}
/* BRAIN mascot */
function MascotBrain({}){
  return blobWrap(
    <g>
      <path d="M34 44 Q30 34 40 32 Q44 24 54 28 Q66 26 66 38 Q74 42 68 52 Q72 62 60 64 Q56 72 46 68 Q34 68 36 58 Q28 54 34 44 Z"
        fill="#FFA690"/>
      <path d="M50 30 Q48 48 50 66 M40 40 Q48 44 44 54 M60 40 Q54 46 58 56"
        stroke="#F0533F" strokeWidth="2.6" fill="none" strokeLinecap="round"/>
    </g>, "#FFE4D6");
}

const MASCOTS = { eye:MascotEye, ear:MascotEar, nose:MascotNose, tongue:MascotTongue, skin:MascotSkin, neuron:MascotNeuron, brain:MascotBrain };
function Mascot({type, size=56, ...rest}){
  const C = MASCOTS[type] || MascotEye;
  return <div style={{width:size, height:size, flex:"0 0 auto"}}><C {...rest}/></div>;
}

/* ---- line nav icons (stroke inherits) ---- */
function NavIcon({name}){
  const common = {width:24, height:24, viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:2, strokeLinecap:"round", strokeLinejoin:"round"};
  switch(name){
    case "home": return <svg {...common}><path d="M4 11l8-7 8 7"/><path d="M6 10v9h12v-9"/></svg>;
    case "sense": return <svg {...common}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>;
    case "nerve": return <svg {...common}><circle cx="12" cy="12" r="3"/><path d="M12 9V4M12 15v5M9 12H4M15 12h5M9.5 9.5L6 6M14.5 14.5L18 18"/></svg>;
    case "react": return <svg {...common}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>;
    case "game": return <svg {...common}><rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 11v3M5.5 12.5h3"/><circle cx="16" cy="11.5" r="1"/><circle cx="18.5" cy="14" r="1"/></svg>;
    default: return null;
  }
}

Object.assign(window, { Face, Mascot, NavIcon });
