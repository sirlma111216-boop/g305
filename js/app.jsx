/* ============================================================
   App shell — home, nav, router, game hub
   ============================================================ */

const ROUTES = {
  home: { label: "홈", group: "home" },
  sense: { label: "감각 기관", group: "sense" },
  nerve: { label: "신경계", group: "nerve" },
  react: { label: "반응", group: "react" },
  game: { label: "게임", group: "game" },
  game1: { label: "감각 기관 게임", group: "game" },
  game2: { label: "신경계 게임", group: "game" },
  game3: { label: "반응 게임", group: "game" }
};

function useHashRoute() {
  const [route, setRoute] = React.useState(() => location.hash.replace("#", "") || "home");
  React.useEffect(() => {
    const h = () => setRoute(location.hash.replace("#", "") || "home");
    window.addEventListener("hashchange", h);
    return () => window.removeEventListener("hashchange", h);
  }, []);
  const go = (r) => {if ("#" + r !== location.hash) location.hash = r;window.scrollTo({ top: 0 });};
  return [route, go];
}

/* ---------------- HOME ---------------- */
function Home({ go }) {
  const menu = [
  { r: "sense", mascot: "eye", title: "감각 기관", sub: "눈·귀·코·혀·피부가 받는 자극", color: "var(--coral)" },
  { r: "nerve", mascot: "neuron", title: "신경계", sub: "뉴런·뇌·척수가 전달하고 판단", color: "var(--violet)" },
  { r: "react", mascot: "brain", title: "반응", sub: "의식적 반응·무조건 반사·조건 반사", color: "var(--teal)" }];

  return (
    <div className="page">
      <div className="hero">
        <span className="blob" style={{ width: 140, height: 140, right: -30, top: -40 }}></span>
        <span className="blob" style={{ width: 80, height: 80, right: 60, bottom: -30 }}></span>
        <a className="unit-btn" href="https://labbitory.com/grade3">단원 선택</a>
        <Eyebrow bg="rgba(255,255,255,.22)" color="#fff">중3 과학 · IV단원</Eyebrow>
        <h1 style={{ marginTop: 12 }}>자극과 반응</h1>
        <p>자극을 받아들이고, 신호로 전달하고, 알맞게 반응하기까지!
혼자서 탐험하며 배워 보세요.</p>
      </div>

      <div className="journey" style={{ marginTop: 16 }}>
        <span className="jn" style={{ background: "var(--peach-card)", color: "var(--coral-deep)" }}>⚡ 자극</span>
        <span className="ja">→</span>
        <span className="jn" style={{ background: "var(--violet-soft)", color: "var(--violet)" }}>🧠 신경계</span>
        <span className="ja">→</span>
        <span className="jn" style={{ background: "var(--teal-bg)", color: "var(--teal-deep)" }}>🏃 반응</span>
      </div>

      <p className="h-sec" style={{ margin: "22px 0 12px" }}>📚 정리 파트</p>
      <div className="stack-12">
        {menu.map((m) => <button key={m.r} className="menucard" onClick={() => go(m.r)}>
            <Mascot type={m.mascot} size={52} />
            <div className="mc-txt"><b>{m.title}</b><span>{m.sub}</span></div>
            <span className="mc-go" style={{ color: m.color }}>›</span>
          </button>
        )}
      </div>

      <p className="h-sec" style={{ margin: "24px 0 12px" }}>🎮 게임 파트</p>
      <button className="menucard game" onClick={() => go("game")}>
        <div style={{ width: 52, height: 52, borderRadius: 16, background: "var(--teal)", display: "grid", placeItems: "center", color: "#fff", flex: "0 0 auto" }}>
          <NavIcon name="game" />
        </div>
        <div className="mc-txt"><b>학습 게임 3종</b><span>드래그 분류 · 경로 퍼즐 · 반응 속도</span></div>
        <span className="mc-go" style={{ color: "var(--teal)" }}>›</span>
      </button>

      <p className="center muted" style={{ fontSize: 12.5, marginTop: 24 }}>점수는 이 화면에서만 기록돼요 · 새로고침하면 처음부터예요</p>
    </div>);

}

/* ---------------- GAME HUB ---------------- */
function GameHub({ go }) {
  const games = [
  { r: "game1", n: "게임 1", title: "감각 기관 분류", sub: "상황 카드를 알맞은 감각 기관으로 드래그!", emoji: "🖐️", color: "var(--coral)" },
  { r: "game2", n: "게임 2", title: "일상 상황 경로 퍼즐", sub: "상황에 맞는 자극 전달 경로를 완성해요", emoji: "🧩", color: "var(--violet)" },
  { r: "game3", n: "게임 3", title: "반응 속도 측정", sub: "색깔·단어 찾기·소리 — 반응 시간을 ms로", emoji: "⚡", color: "var(--teal)" }];

  return (
    <div className="page">
      <Eyebrow bg="var(--teal-bg)" color="var(--teal-deep)">PART 2 · 게임</Eyebrow>
      <h2 className="h-page" style={{ marginTop: 10 }}>학습 게임</h2>
      <p className="lead" style={{ marginTop: 8 }}>정리 파트에서 배운 용어와 경로가 정답으로 다시 나와요. 세 게임을 모두 즐겨 보세요!</p>
      <div className="stack-12" style={{ marginTop: 18 }}>
        {games.map((g) =>
        <button key={g.r} className="menucard" onClick={() => go(g.r)}>
            <div style={{ width: 54, height: 54, borderRadius: 16, background: g.color, display: "grid", placeItems: "center", fontSize: 26, flex: "0 0 auto" }}>{g.emoji}</div>
            <div className="mc-txt">
              <span style={{ fontWeight: 800, color: g.color, fontSize: 12.5 }}>{g.n}</span>
              <b style={{ fontSize: 17 }}>{g.title}</b><span>{g.sub}</span>
            </div>
            <span className="mc-go" style={{ color: g.color }}>›</span>
          </button>
        )}
      </div>
    </div>);

}

function GamePage({ route, go }) {
  const map = { game1: Game1, game2: Game2, game3: Game3 };
  const Comp = map[route];
  const titles = { game1: "감각 기관 분류", game2: "일상 상황 경로 퍼즐", game3: "반응 속도 측정" };
  const [k, setK] = React.useState(0); // remount key for full reset
  return (
    <div className="page">
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <button className="topbar-back" onClick={() => go("game")}>← 목록</button>
        <b style={{ fontSize: 18, flex: 1 }}>{titles[route]}</b>
        <button className="topbar-back" onClick={() => setK(k + 1)}>↻ 새 게임</button>
      </div>
      <Comp key={k} />
    </div>);

}

/* ---------------- NAV ---------------- */
function BottomNav({ group, go }) {
  const items = [
  { r: "home", g: "home", ico: "home", label: "홈" },
  { r: "sense", g: "sense", ico: "sense", label: "감각기관" },
  { r: "nerve", g: "nerve", ico: "nerve", label: "신경계" },
  { r: "react", g: "react", ico: "react", label: "반응" },
  { r: "game", g: "game", ico: "game", label: "게임" }];

  return (
    <nav className="bottomnav">
      {items.map((it) =>
      <button key={it.r} className={"navitem" + (group === it.g ? " active" : "")} onClick={() => go(it.r)}>
          <span className="navbubble"><NavIcon name={it.ico} /></span>
          <span>{it.label}</span>
        </button>
      )}
    </nav>);

}

function TopBar({ route, go }) {
  if (route === "home") return null;
  const grpLabel = { sense: "감각 기관", nerve: "신경계", react: "반응", game: "게임" }[ROUTES[route].group];
  return (
    <div className="topbar">
      <span className="crumb">정리·게임 <b>· {grpLabel}</b></span>
      <button className="home-btn" onClick={() => go("home")}>🏠</button>
    </div>);

}

/* ---------------- APP ---------------- */
function App() {
  const [route, go] = useHashRoute();
  const group = (ROUTES[route] || ROUTES.home).group;
  let view;
  if (route === "home") view = <Home go={go} />;else
  if (route === "sense") view = <SensorySection />;else
  if (route === "nerve") view = <NervousSection />;else
  if (route === "react") view = <ResponseSection />;else
  if (route === "game") view = <GameHub go={go} />;else
  if (route === "game1" || route === "game2" || route === "game3") view = <GamePage route={route} go={go} />;else
  view = <Home go={go} />;

  return (
    <div className="app">
      <TopBar route={route} go={go} />
      {view}
      <BottomNav group={group} go={go} />
    </div>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);