/* 자극과 반응 — precompiled app bundle (no Babel needed) */
"use strict";

/* ===== js/data.js ===== */
/* ============================================================
   APP_DATA — all 자극과 반응 content (textbook-accurate)
   호르몬·항상성·체온·혈당 제외
   ============================================================ */
window.APP_DATA = {

  /* ---------------- 감각 기관 ---------------- */
  sensory: {
    intro: "우리 몸의 눈·귀·코·혀·피부는 서로 다른 자극을 받아들여요. 감각 기관은 자극을 '받아들이기만' 하고, 실제로 감각을 느끼는 곳은 바로 뇌랍니다.",
    organs: {
      eye: {
        key:"eye", name:"눈", mascot:"eye", sense:"시각", stimulus:"빛",
        img:window.__res("eye","img/eye.jpg"),
        def:"눈에서 빛을 자극으로 받아들여 사물의 모양·색깔·거리를 느끼는 감각이에요.",
        parts:[
          {id:"cornea", name:"각막", x:.155, y:.46, desc:"눈 가장 앞쪽의 투명한 막. 빛이 처음 통과하면서 굴절돼요."},
          {id:"iris", name:"홍채", x:.235, y:.40, desc:"동공의 크기를 조절해 들어오는 빛의 양을 조절해요."},
          {id:"pupil", name:"동공", x:.258, y:.52, desc:"빛이 들어오는 구멍이에요. 홍채가 크기를 조절해요."},
          {id:"lens", name:"수정체", x:.315, y:.52, desc:"두께가 변하며 빛을 굴절시켜 망막에 상을 맺어요."},
          {id:"vitreous", name:"유리체", x:.58, y:.40, desc:"눈 속을 채운 투명한 물질로, 눈 모양을 유지해요."},
          {id:"retina", name:"망막", x:.80, y:.30, desc:"상이 맺히는 곳. 시각 세포가 있어요."},
          {id:"fovea", name:"황반", x:.795, y:.55, desc:"시각 세포가 많이 모인 곳. 상이 맺히면 선명하게 보여요."},
          {id:"blind", name:"맹점", x:.85, y:.55, desc:"시각 신경이 모여 나가는 곳. 시각 세포가 없어 상이 맺혀도 안 보여요."},
          {id:"nerve", name:"시각 신경", x:.93, y:.55, desc:"받아들인 자극을 뇌로 전달해요."},
        ],
        process:["빛","각막","수정체","유리체","망막(시각 세포)","시각 신경","대뇌"],
        remember:"빛 → 각막 → 수정체 → 망막(시각 세포) → 시각 신경 → 대뇌! 상은 망막에 맺히고, 보는 건 대뇌가 해요.",
      },
      ear: {
        key:"ear", name:"귀", mascot:"ear", sense:"청각·평형감각", stimulus:"소리(진동)",
        def:"귀에서 공기를 통해 전달된 소리(진동)를 자극으로 받아들여 느끼는 감각이에요. 몸의 회전과 기울어짐(평형감각)도 귀가 느껴요.",
        img:window.__res("ear","img/ear.jpg"),
        parts:[
          {id:"pinna", name:"귓바퀴", x:.13, y:.45, desc:"소리를 모아 줘요.", group:"hearing"},
          {id:"canal", name:"외이도", x:.42, y:.52, desc:"소리가 지나가는 통로예요.", group:"hearing"},
          {id:"eardrum", name:"고막", x:.59, y:.46, desc:"소리에 의해 진동하는 얇은 막이에요.", group:"hearing"},
          {id:"ossicle", name:"귓속뼈", x:.62, y:.33, desc:"고막의 진동을 증폭해 달팽이관으로 전달해요.", group:"hearing"},
          {id:"semicircular", name:"반고리관", x:.74, y:.25, desc:"몸의 회전을 느껴요. (평형감각)", group:"balance"},
          {id:"vestibule", name:"전정 기관", x:.695, y:.40, desc:"몸의 움직임·기울어짐을 느껴요. (평형감각)", group:"balance"},
          {id:"vestibularnerve", name:"평형감각 신경", x:.855, y:.335, desc:"반고리관·전정 기관이 느낌 평형 자극을 ‘소뇌’로 전달해요. 소뇌는 이 신호로 몸의 균형과 자세를 조절해요.", group:"balance"},
          {id:"cochlea", name:"달팽이관", x:.79, y:.47, desc:"청각 세포가 있어 진동 자극을 받아들여요.", group:"hearing"},
          {id:"earnerve", name:"청각 신경", x:.88, y:.36, desc:"자극을 뇌로 전달해요.", group:"hearing"},
          {id:"eustachian", name:"귀인두관", x:.80, y:.66, desc:"가운데귀(중이)와 코·목(인두)을 잇는 관이에요. 평소엔 닫혀 있다가 침을 삼키거나 하품할 때 열려 고막 안팎의 압력을 같게 맞춰 줘요. 높은 곳에서 귀가 먹먹할 때 침을 삼키면 뚫리는 이유예요!", group:"none"},
        ],
        process:["소리","귓바퀴","외이도","고막","귓속뼈","달팽이관(청각 세포)","청각 신경","뇌"],
        balance:"회전 → 반고리관 / 움직임·기울어짐 → 전정 기관 → 평형감각 신경 → 소뇌",
        remember:"소리 → 고막 → 귓속뼈 → 달팽이관(청각 세포) → 청각 신경 → 뇌! 회전은 반고리관, 기울어짐은 전정 기관이 느껴요.",
      },
      skin: {
        key:"skin", name:"피부", mascot:"skin", sense:"피부 감각", stimulus:"열·접촉·압력",
        img:window.__res("skin","img/skin.jpg"),
        def:"피부에서 열·접촉·압력 등을 자극으로 받아들여 차가움·따뜻함·촉감·눌림·통증을 느끼는 감각이에요.",
        points:[
          {id:"cold", name:"냉점", x:.15, y:.33, desc:"차가움을 느껴요.", count:2},
          {id:"pressure", name:"압점", x:.275, y:.40, desc:"눌리는 압력을 느껴요. (깊은 곳의 둥근 감각점)", count:4},
          {id:"pain", name:"통점", x:.43, y:.36, desc:"아픔(통증)을 느껴요. 끝이 나뭇가지처럼 갈라진 감각점으로, 피부에 가장 많이 분포해요!", count:5},
          {id:"warm", name:"온점", x:.575, y:.47, desc:"따뜻함을 느껴요. 가장 적게 분포해요.", count:1},
          {id:"touch", name:"촉점", x:.71, y:.45, desc:"닿는 촉감을 느껴요.", count:3},
        ],
        order:"많은 순서:  통점 > 압점 > 촉점 > 냉점 > 온점",
        process:["자극","피부(감각점)","감각 신경","뇌"],
        remember:"피부엔 5가지 감각점이 있고, 그중 통점이 가장 많아요. 위험을 빨리 알아채 몸을 지키기 위해서랍니다.",
      },
      tongue: {
        key:"tongue", name:"혀", mascot:"tongue", sense:"미각", stimulus:"액체 물질",
        img:window.__res("tongue","img/tongue.jpg"),
        def:"혀에서 액체 상태의 물질을 자극으로 받아들여 단맛·짠맛·신맛·쓴맛·감칠맛을 느끼는 감각이에요.",
        parts:[
          {id:"papilla", name:"혀 표면 돌기", x:.19, y:.22, desc:"혀에 오돌오돌 돋은 돌기예요. 그 속과 옆면에 맛봉오리가 있어요."},
          {id:"taste_bud", name:"맛봉오리", x:.70, y:.36, desc:"돌기 속에 모여 있는 꾸러미로, 맛세포가 모여 있어요."},
          {id:"taste_cell", name:"맛세포", x:.81, y:.46, desc:"액체 물질의 맛을 실제로 받아들이는 감각 세포예요."},
          {id:"taste_nerve", name:"미각 신경", x:.69, y:.75, desc:"맛 자극을 뇌로 전달해요."},
        ],
        process:["액체 물질","맛봉오리(맛세포)","미각 신경","뇌"],
        tastes:[
          {t:"단맛", chem:"당분 (포도당·설탕 등)"},
          {t:"짠맛", chem:"나트륨 (소금 성분)"},
          {t:"신맛", chem:"산 (수소 이온, H⁺)"},
          {t:"쓴맛", chem:"알칼로이드 (쓴 물질)"},
          {t:"감칠맛", chem:"아미노산 (글루탐산 등)"},
        ],
        misconception:"매운맛·떫은맛은 미각이 아니에요! 혀와 입속 피부의 통점·압점에서 느끼는 <b>피부 감각</b>이랍니다.",
        remember:"혀는 액체 물질을 맛봐요. 기본 맛은 5가지(단·짠·신·쓴·감칠). 매운맛은 미각이 아니라 피부 감각!",
      },
      nose: {
        key:"nose", name:"코", mascot:"nose", sense:"후각", stimulus:"기체 물질",
        img:window.__res("nose","img/nose.jpg"),
        def:"코에서 기체 상태의 물질을 자극으로 받아들여 냄새를 느끼는 감각이에요.",
        parts:[
          {id:"olf_nerve", name:"후각 신경", x:.42, y:.13, desc:"콧속 윗부분을 지나 뇌로 냄새 자극을 전달해요."},
          {id:"epithelium", name:"후각 상피", x:.60, y:.55, desc:"콧속 가장 윗부분에 있는 세포층으로, 후각 세포가 모여 있어요."},
          {id:"olf_cell", name:"후각 세포", x:.33, y:.62, desc:"기체 물질을 자극으로 받아들이는 감각 세포예요."},
          {id:"cilia", name:"후각털(섬모)", x:.52, y:.80, desc:"후각 세포 끝에 달린 가는 털로, 점액 속에 잠겨 있어요. 녹아든 기체 물질이 여기에 닿아요."},
          {id:"mucus", name:"점액층", x:.18, y:.90, desc:"콧속 표면을 덮은 끈끈한 점액으로, 기체 물질이 녹아야 냄새를 맡을 수 있어요."},
        ],
        process:["기체 물질","후각 상피(후각 세포)","후각 신경","뇌"],
        feature:"후각은 가장 예민한 감각이지만, 후각 세포는 쉽게 피로해져요. 같은 냄새를 계속 맡으면 나중엔 잘 못 느끼게 되죠.",
        link:"음식의 맛은 미각과 후각을 종합해서 느껴요. 그래서 코감기에 걸리면 맛이 잘 안 느껴진답니다.",
        remember:"코는 기체 물질의 냄새를 맡아요. 가장 예민하지만 쉽게 피로해지고, 맛은 후각과 함께 느껴요.",
      },
    },
  },

  /* ---------------- 신경계 ---------------- */
  nervous: {
    intro: "자극을 빠르게 전달하고, 판단하여 반응 신호를 보내는 일은 모두 신경계가 담당해요.",
    neuron: {
      img:window.__res("neuron","img/neuron.jpg"),
      typesImg:window.__res("neuronTypes","img/neuron-types.jpg"),
      parts:[
        {id:"dendrite", name:"가지 돌기", x:.84, y:.16, desc:"다른 뉴런이나 감각 기관에서 자극을 받아들여요.", color:"var(--teal)"},
        {id:"body", name:"신경 세포체", x:.66, y:.34, desc:"핵이 있어 생명 활동이 일어나는 부분이에요.", color:"var(--coral)"},
        {id:"axon", name:"축삭 돌기", x:.40, y:.63, desc:"자극을 다음 뉴런으로 내보내요. 길게 뻗어 있어요.", color:"var(--violet)"},
      ],
      direction:"자극 전달 방향:  가지 돌기 → 신경 세포체 → 축삭 돌기 (한 방향!)",
      types:[
        {id:"sensory", name:"감각 뉴런", makes:"감각 신경", desc:"감각 기관이 받은 자극을 연합 뉴런으로 전달해요.", color:"teal"},
        {id:"relay", name:"연합 뉴런", makes:"중추 신경계", desc:"자극을 느끼고 판단해 운동 뉴런에 신호를 보내요.", color:"violet"},
        {id:"motor", name:"운동 뉴런", makes:"운동 신경", desc:"내려진 신호를 반응 기관으로 전달해요.", color:"coral"},
      ],
      flow:["자극","감각 기관","감각 뉴런","연합 뉴런","운동 뉴런","반응 기관","반응"],
      remember:"뉴런은 가지 돌기 → 신경 세포체 → 축삭 돌기 한 방향으로 전달! 감각 → 연합 → 운동 뉴런 순서로 신호가 흘러요.",
    },
    brain: {
      img:window.__res("brain","img/brain.jpg"),
      parts:[
        {id:"cerebrum", name:"대뇌", x:.46, y:.20, desc:"감각과 운동을 조절하고 기억·추리·감정 등 다양한 정신 활동을 담당해요."},
        {id:"diencephalon", name:"간뇌", x:.47, y:.39, desc:"체온 등 몸속 상태를 일정하게 유지해요."},
        {id:"midbrain", name:"중간뇌", x:.51, y:.45, desc:"눈의 움직임, 동공·홍채의 변화를 조절해요."},
        {id:"medulla", name:"연수", x:.55, y:.51, desc:"심장 박동·호흡 운동 등 생명 유지 활동을 조절해요. 재채기·기침·하품의 중추예요."},
        {id:"cerebellum", name:"소뇌", x:.71, y:.42, desc:"근육 운동을 조절해 몸의 균형을 유지해요."},
        {id:"spinal", name:"척수", x:.64, y:.72, desc:"뇌와 말초 신경 사이 신호 전달 통로이며, 무조건 반사의 중추예요."},
      ],
      remember:"대뇌(정신활동)·소뇌(균형)·간뇌(몸속 상태)·중간뇌(눈)·연수(생명유지)·척수(반사). 척수는 무조건 반사의 중추!",
    },
  },

  /* ---------------- 반응 ---------------- */
  response: {
    intro: "우리 몸은 자극을 받았을 때, 의지에 따라 반응하기도 하고 의지와 관계없이 반응하기도 해요.",
    types:[
      {
        id:"conscious", name:"의식적 반응", tag:"대뇌가 판단 · 느림", color:"coral",
        path:["자극","감각 기관","감각 신경","척수","대뇌","척수","운동 신경","반응 기관"],
        center:"대뇌", brainIdx:4,
        example:"날아오는 공을 보고 야구 방망이를 휘둘러요.",
        desc:"대뇌가 자극을 판단해 명령을 내리는 반응이에요. 대뇌를 거치기 때문에 시간이 조금 걸려요.",
      },
      {
        id:"unconditioned", name:"무조건 반사", tag:"대뇌 안 거침 · 빠름", color:"teal",
        path:["자극","감각 기관","감각 신경","척수·연수·중간뇌","운동 신경","반응 기관"],
        center:"척수·연수·중간뇌", brainIdx:3,
        example:"무릎 아래를 치면 다리가 저절로 들려요.",
        desc:"대뇌를 거치지 않고 척수·연수·중간뇌가 중추가 되어 일어나요. 경로가 짧고 단순해 더 빠르고, 위험한 상황에서 몸을 빠르게 보호해 줘요.",
        centers:[
          {center:"척수 반사", ex:"무릎 반사, 움츠림 반사(뜨겁거나 날카로운 것에 손을 뗌)"},
          {center:"연수 반사", ex:"재채기, 기침, 하품, 눈물, 침 분비"},
          {center:"중간뇌 반사", ex:"동공 반사(밝아지면 동공이 작아짐)"},
        ],
      },
      {
        id:"conditioned", name:"조건 반사", tag:"대뇌가 관여 · 경험·학습", color:"violet",
        path:["자극","감각 기관","감각 신경","대뇌","운동 신경","반응 기관"],
        center:"대뇌", brainIdx:3,
        example:"레몬처럼 신 음식을 보기만 해도 입에 침이 고여요.",
        desc:"경험과 학습을 통해 만들어진 반사예요. 대뇌가 반사 중추로 관여하며, 학습된 자극에 몸이 자동으로 반응해요.",
      },
    ],
    keypoint:"갈림길은 '경로에 대뇌가 들어가느냐'예요. 대뇌를 거치면 <b>의식적 반응</b>, 안 거치면 <b>무조건 반사</b>! 무조건 반사가 더 빠른 이유는 경로가 짧고 단순하기 때문이에요.",
    remember:"대뇌를 거치면 의식적 반응, 척수에서 바로 돌아오면 무조건 반사(더 빠름)! 경험으로 생긴 침 고임은 조건 반사예요.",
  },

  /* ---------------- 게임 1: 감각 기관 분류 (16장) ---------------- */
  game1: {
    baskets:[
      {key:"eye", name:"눈", mascot:"eye"},
      {key:"ear", name:"귀", mascot:"ear"},
      {key:"nose", name:"코", mascot:"nose"},
      {key:"tongue", name:"혀", mascot:"tongue"},
      {key:"skin", name:"피부", mascot:"skin"},
    ],
    cards:[
      {t:"어두운 방에서 번쩍이는 빛", a:"eye"},
      {t:"밤하늘에 반짝이는 별빛", a:"eye"},
      {t:"멀리서 들려오는 종소리", a:"ear"},
      {t:"친구가 부르는 목소리", a:"ear"},
      {t:"갓 구운 빵 냄새", a:"nose"},
      {t:"향수의 은은한 향기", a:"nose"},
      {t:"레몬의 신맛", a:"tongue"},
      {t:"설탕의 단맛", a:"tongue"},
      {t:"얼음의 차가움", a:"skin", sub:"냉점"},
      {t:"갓 끓인 물의 뜨거움", a:"skin", sub:"온점"},
      {t:"어깨를 톡 누르는 손길", a:"skin", sub:"압점·촉점"},
      {t:"청양고추의 매운맛", a:"skin", tricky:true,
        note:"매운맛은 미각이 아니라 혀·입속 피부의 통점에서 느끼는 피부 감각이에요!"},
      {t:"감의 떫은맛", a:"skin", tricky:true,
        note:"떫은맛도 미각이 아니라 입속 피부의 압점에서 느끼는 피부 감각이에요!"},
      {t:"멀미로 어지러운 느낌", a:"ear", tricky:true,
        note:"어지러움은 귀의 전정 기관이 몸의 움직임·기울어짐을 느끼는 평형감각이에요. 귀는 소리뿐 아니라 평형감각도 담당해요!"},
      {t:"회전 놀이기구를 타서 빙빙 도는 느낌", a:"ear", tricky:true,
        note:"몸의 회전은 귀의 반고리관에서 느끼는 평형감각이에요!"},
      {t:"바늘에 손가락이 찔린 따끔함", a:"skin", sub:"통점"},
    ],
    hints:{eye:"빛을 받아들이는 시각", ear:"소리·평형감각", nose:"기체 물질의 냄새", tongue:"액체 물질의 맛", skin:"열·접촉·압력"},
  },

  /* ---------------- 게임 2: 일상 상황 경로 퍼즐 ---------------- */
  game2: {
    pool:["자극","감각 기관","감각 신경","대뇌","척수","연수","중간뇌","운동 신경","반응 기관"],
    centers:["대뇌","척수","연수","중간뇌"],
    stages:[
      { name:"공을 잡았다", type:"의식적 반응", center:"대뇌",
        situation:"공이 머리 쪽으로 날아와서 손을 뻗어 공을 잡았다.",
        answer:["자극","감각 기관","감각 신경","대뇌","운동 신경","반응 기관"],
        explain:"대뇌가 판단해서 일어나는 의식적 반응이에요. 경로가 길어 조금 느리지만, 상황에 맞게 행동할 수 있어요." },
      { name:"손이 움츠러들었다", type:"무조건 반사", center:"척수",
        situation:"뜨거운 냄비에 손이 닿자마자 손이 움츠러들었다.",
        answer:["자극","감각 기관","감각 신경","척수","운동 신경","반응 기관"],
        explain:"척수가 중추인 무조건 반사예요. 대뇌를 거치지 않아 빠르게 일어나 몸을 보호해요." },
      { name:"무릎 반사", type:"무조건 반사", center:"척수",
        situation:"무릎뼈 바로 아래를 망치로 치자 다리가 저절로 들렸다.",
        answer:["자극","감각 기관","감각 신경","척수","운동 신경","반응 기관"],
        explain:"무릎 반사는 척수가 중추인 무조건 반사예요. 의지와 관계없이 다리가 들려요." },
      { name:"재채기", type:"무조건 반사", center:"연수",
        situation:"코에 먼지가 들어가자 나도 모르게 재채기가 나왔다.",
        answer:["자극","감각 기관","감각 신경","연수","운동 신경","반응 기관"],
        explain:"재채기는 연수가 중추인 무조건 반사예요. 기침·하품·눈물 분비도 연수 반사예요." },
      { name:"동공 반사", type:"무조건 반사", center:"중간뇌",
        situation:"어두운 곳에 있다가 밝은 곳으로 나오자 동공이 저절로 작아졌다.",
        answer:["자극","감각 기관","감각 신경","중간뇌","운동 신경","반응 기관"],
        explain:"동공 반사는 중간뇌가 중추인 무조건 반사예요." },
    ],
    bonus:[
      {q:"기억·추리·감정 등 정신 활동의 중추는?", a:"대뇌", opts:["대뇌","소뇌","연수"]},
      {q:"몸의 균형을 유지하는 곳은?", a:"소뇌", opts:["중간뇌","소뇌","척수"]},
      {q:"심장 박동·호흡을 조절하는 곳은?", a:"연수", opts:["연수","간뇌","대뇌"]},
      {q:"무조건 반사(무릎 반사)의 중추는?", a:"척수", opts:["대뇌","척수","소뇌"]},
      {q:"눈의 움직임·동공 변화를 조절하는 곳은?", a:"중간뇌", opts:["중간뇌","연수","소뇌"]},
    ],
  },

  /* ---------------- 게임 3: 반응 속도 측정 3종 ---------------- */
  game3: {
    words:["감각","신경","반응","뉴런","척수","대뇌","자극","연수","중간뇌","소뇌","망막","고막"],
  },
};


/* ===== js/ui.jsx ===== */
/* ============================================================
   Shared UI atoms
   ============================================================ */

function Remember({
  children,
  title = "이것만 기억하자!"
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "remember"
  }, /*#__PURE__*/React.createElement("span", {
    className: "spark"
  }, "\u2605"), /*#__PURE__*/React.createElement("h4", null, "\uD83D\uDCA1 ", title), /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: children
    }
  }));
}
function DefLine({
  children,
  icon = "📖"
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "defline"
  }, /*#__PURE__*/React.createElement("span", {
    className: "di"
  }, icon), /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: children
    }
  }));
}
function SubHead({
  n,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "subhead"
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, n), /*#__PURE__*/React.createElement("h3", null, children));
}
function StimPill({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "stimpill"
  }, "\u26A1 \uC790\uADF9 \xB7 ", children);
}
function NoteBox({
  label,
  children,
  variant = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "notebox " + variant
  }, label && /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, label), /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: children
    }
  }));
}
function Eyebrow({
  children,
  bg = "var(--teal-bg)",
  color = "var(--teal-deep)"
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      background: bg,
      color
    }
  }, children);
}
Object.assign(window, {
  Remember,
  DefLine,
  SubHead,
  StimPill,
  NoteBox,
  Eyebrow
});

/* ===== js/mascots.jsx ===== */
/* ============================================================
   Mascots & nav icons — simple friendly SVG characters
   ============================================================ */

/* generic cute face (two eyes + smile) */
function Face({
  cx = 50,
  cy = 52,
  scale = 1,
  color = "#2B2A33"
}) {
  return /*#__PURE__*/React.createElement("g", {
    fill: color
  }, /*#__PURE__*/React.createElement("circle", {
    cx: cx - 9 * scale,
    cy: cy,
    r: 3 * scale
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx + 9 * scale,
    cy: cy,
    r: 3 * scale
  }), /*#__PURE__*/React.createElement("path", {
    d: `M ${cx - 7 * scale} ${cy + 7 * scale} Q ${cx} ${cy + 13 * scale} ${cx + 7 * scale} ${cy + 7 * scale}`,
    fill: "none",
    stroke: color,
    strokeWidth: 2.4 * scale,
    strokeLinecap: "round"
  }));
}
function blobWrap(inner, bg) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "6",
    width: "88",
    height: "88",
    rx: "30",
    fill: bg
  }), inner);
}

/* EYE mascot */
function MascotEye({}) {
  return blobWrap(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "50",
    rx: "30",
    ry: "22",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "14",
    fill: "#15B2AC"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "7",
    fill: "#2B2A33"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "46",
    cy: "46",
    r: "3",
    fill: "#fff"
  })), "#FFD9CC");
}
/* EAR mascot */
function MascotEar({}) {
  return blobWrap(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M38 30 Q66 22 68 50 Q70 72 52 74 Q44 75 44 66 Q44 58 50 56 Q56 54 54 48 Q52 40 44 42 Q38 44 38 50",
    fill: "none",
    stroke: "#F0533F",
    strokeWidth: "7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), "#CFEFEE");
}
/* NOSE mascot */
function MascotNose({}) {
  return blobWrap(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M50 28 Q44 50 38 60 Q36 70 46 72 Q50 73 54 72 Q64 70 62 60 Q56 50 50 28 Z",
    fill: "#FFB59E"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "44",
    cy: "64",
    rx: "3.4",
    ry: "4.4",
    fill: "#F0533F"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "56",
    cy: "64",
    rx: "3.4",
    ry: "4.4",
    fill: "#F0533F"
  })), "#FFE4D6");
}
/* TONGUE mascot */
function MascotTongue({}) {
  return blobWrap(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M30 34 Q50 28 70 34 Q72 50 50 72 Q28 50 30 34 Z",
    fill: "#FF8A7A"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50 40 Q50 56 50 66",
    stroke: "#E8412C",
    strokeWidth: "3.5",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "36",
    rx: "20",
    ry: "6",
    fill: "#fff",
    opacity: ".5"
  })), "#FFD9CC");
}
/* SKIN mascot (hand/touch) */
function MascotSkin({}) {
  return blobWrap(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "34",
    y: "40",
    width: "32",
    height: "30",
    rx: "10",
    fill: "#FFC9B3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "36",
    y: "26",
    width: "6",
    height: "20",
    rx: "3",
    fill: "#FFC9B3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "46",
    y: "22",
    width: "6",
    height: "24",
    rx: "3",
    fill: "#FFC9B3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "56",
    y: "26",
    width: "6",
    height: "20",
    rx: "3",
    fill: "#FFC9B3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "56",
    r: "4",
    fill: "#15B2AC"
  })), "#E8F7F6");
}
/* NEURON mascot */
function MascotNeuron({
  color = "#7C6CD8",
  bg = "#E7E2FA"
}) {
  return blobWrap(/*#__PURE__*/React.createElement("g", {
    stroke: color,
    strokeWidth: "4",
    strokeLinecap: "round",
    fill: "none"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "50",
    y1: "50",
    x2: "26",
    y2: "32"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "50",
    y1: "50",
    x2: "24",
    y2: "52"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "50",
    y1: "50",
    x2: "30",
    y2: "70"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "50",
    y1: "50",
    x2: "78",
    y2: "58"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "11",
    fill: color,
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "80",
    cy: "58",
    r: "4",
    fill: color,
    stroke: "none"
  })), bg);
}
/* BRAIN mascot */
function MascotBrain({}) {
  return blobWrap(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M34 44 Q30 34 40 32 Q44 24 54 28 Q66 26 66 38 Q74 42 68 52 Q72 62 60 64 Q56 72 46 68 Q34 68 36 58 Q28 54 34 44 Z",
    fill: "#FFA690"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50 30 Q48 48 50 66 M40 40 Q48 44 44 54 M60 40 Q54 46 58 56",
    stroke: "#F0533F",
    strokeWidth: "2.6",
    fill: "none",
    strokeLinecap: "round"
  })), "#FFE4D6");
}
const MASCOTS = {
  eye: MascotEye,
  ear: MascotEar,
  nose: MascotNose,
  tongue: MascotTongue,
  skin: MascotSkin,
  neuron: MascotNeuron,
  brain: MascotBrain
};
function Mascot({
  type,
  size = 56,
  ...rest
}) {
  const C = MASCOTS[type] || MascotEye;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(C, rest));
}

/* ---- line nav icons (stroke inherits) ---- */
function NavIcon({
  name
}) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  switch (name) {
    case "home":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M4 11l8-7 8 7"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M6 10v9h12v-9"
      }));
    case "sense":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }));
    case "nerve":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 9V4M12 15v5M9 12H4M15 12h5M9.5 9.5L6 6M14.5 14.5L18 18"
      }));
    case "react":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M13 2L4 14h7l-1 8 9-12h-7l1-8z"
      }));
    case "game":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("rect", {
        x: "2",
        y: "7",
        width: "20",
        height: "11",
        rx: "5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M7 11v3M5.5 12.5h3"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "16",
        cy: "11.5",
        r: "1"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "18.5",
        cy: "14",
        r: "1"
      }));
    default:
      return null;
  }
}
Object.assign(window, {
  Face,
  Mascot,
  NavIcon
});

/* ===== js/diagrams-core.jsx ===== */
/* ============================================================
   Diagram core — DiagramExplorer (tap parts) + FlowAnim (process)
   ============================================================ */
const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;

/* Tap-a-part explorer: svg with hotspots + chip list + info panel */
function DiagramExplorer({
  parts,
  accent = "var(--coral)",
  render,
  hint = "부위를 톡 눌러보세요",
  footer
}) {
  const [sel, setSel] = useState(null);
  const cur = parts.find(p => p.id === sel);
  return /*#__PURE__*/React.createElement("div", {
    className: "stack-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "diagram-wrap card",
    style: {
      padding: "14px 10px 10px"
    }
  }, render(sel, setSel)), /*#__PURE__*/React.createElement("div", {
    className: "chiprow"
  }, parts.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    className: "partchip" + (p.id === sel ? " on" : ""),
    style: p.id === sel ? {
      background: accent,
      borderColor: accent,
      color: "#fff"
    } : null,
    onClick: () => setSel(p.id === sel ? null : p.id)
  }, p.name))), cur ? /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    key: cur.id
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dotmark",
    style: {
      background: accent
    }
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 17
    }
  }, cur.name)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--ink-soft)",
      lineHeight: 1.55
    }
  }, cur.desc)) : /*#__PURE__*/React.createElement("p", {
    className: "center muted",
    style: {
      fontSize: 14,
      padding: "2px 0 4px"
    }
  }, "\uD83D\uDC46 ", hint), footer);
}

/* Animated process flow: lights nodes one by one */
function FlowAnim({
  nodes,
  accent = "var(--coral)",
  auto = true,
  label = "자극이 흐르는 과정"
}) {
  const [lit, setLit] = useState(-1);
  const timer = useRef(null);
  const run = useCallback(() => {
    clearInterval(timer.current);
    let i = -1;
    setLit(-1);
    timer.current = setInterval(() => {
      i++;
      setLit(i);
      if (i >= nodes.length) {
        clearInterval(timer.current);
      }
    }, 520);
  }, [nodes.length]);
  const ref = useRef(null);
  useEffect(() => {
    if (!auto) return;
    const el = ref.current;
    const io = new IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting) {
          run();
          io.disconnect();
        }
      });
    }, {
      threshold: .5
    });
    if (el) io.observe(el);
    return () => {
      io.disconnect();
      clearInterval(timer.current);
    };
  }, [run, auto]);
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    ref: ref,
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 800,
      color: "var(--ink-soft)"
    }
  }, "\u26A1 ", label), /*#__PURE__*/React.createElement("button", {
    className: "replay",
    onClick: run,
    style: {
      color: accent
    }
  }, "\u25B6 \uB2E4\uC2DC \uBCF4\uAE30")), /*#__PURE__*/React.createElement("div", {
    className: "flow"
  }, nodes.map((n, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "arrow" + (lit >= i ? " lit" : ""),
    style: lit >= i ? {
      color: accent
    } : null
  }, "\u2192"), /*#__PURE__*/React.createElement("span", {
    className: "node" + (lit >= i ? " lit" : ""),
    style: lit >= i ? {
      background: accent,
      borderColor: accent,
      color: "#fff"
    } : null
  }, n)))));
}

/* Image-based explorer: real photo/illustration with positioned hotspots */
function ImageExplorer({
  img,
  parts,
  accent = "var(--coral)",
  hint = "부위를 톡 눌러보세요",
  footer,
  ratioPad
}) {
  const [sel, setSel] = useState(null);
  const cur = parts.find(p => p.id === sel);
  return /*#__PURE__*/React.createElement("div", {
    className: "stack-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card imgdiagram",
    style: {
      padding: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "imgstage"
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: "",
    draggable: "false"
  }), parts.map(p => {
    const on = p.id === sel;
    return /*#__PURE__*/React.createElement("button", {
      key: p.id,
      className: "imghot" + (on ? " on" : ""),
      style: {
        left: p.x * 100 + "%",
        top: p.y * 100 + "%",
        borderColor: accent,
        color: accent,
        ...(on ? {
          background: accent,
          color: "#fff"
        } : null)
      },
      onClick: () => setSel(on ? null : p.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "imghot-ring",
      style: {
        borderColor: accent
      }
    }), on && /*#__PURE__*/React.createElement("span", {
      className: "imghot-label",
      style: {
        background: accent
      }
    }, p.name));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "chiprow"
  }, parts.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    className: "partchip" + (p.id === sel ? " on" : ""),
    style: p.id === sel ? {
      background: accent,
      borderColor: accent,
      color: "#fff"
    } : null,
    onClick: () => setSel(p.id === sel ? null : p.id)
  }, p.name))), cur ? /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    key: cur.id
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dotmark",
    style: {
      background: accent
    }
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 17
    }
  }, cur.name)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--ink-soft)",
      lineHeight: 1.55
    }
  }, cur.desc)) : /*#__PURE__*/React.createElement("p", {
    className: "center muted",
    style: {
      fontSize: 14,
      padding: "2px 0 4px"
    }
  }, "\uD83D\uDC46 ", hint), footer);
}

/* floating SVG label tag */
function SvgTag({
  x,
  y,
  text,
  accent = "var(--coral)",
  fs = 13.5
}) {
  const w = [...text].length * fs + 22;
  return /*#__PURE__*/React.createElement("g", {
    transform: `translate(${x},${y})`,
    style: {
      pointerEvents: "none"
    },
    className: "svgtag"
  }, /*#__PURE__*/React.createElement("rect", {
    x: -w / 2,
    y: -14,
    width: w,
    height: 28,
    rx: 14,
    fill: accent
  }), /*#__PURE__*/React.createElement("text", {
    x: "0",
    y: "5",
    textAnchor: "middle",
    fill: "#fff",
    fontSize: fs,
    fontWeight: "800",
    fontFamily: "Pretendard, sans-serif"
  }, text));
}
/* pulsing highlight ring + tappable hotspot */
function HiRing({
  x,
  y,
  r = 20,
  accent = "var(--coral)"
}) {
  return /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: r,
    fill: "none",
    stroke: accent,
    strokeWidth: "3",
    className: "hiring"
  });
}
function Hot({
  x,
  y,
  r = 22,
  onClick
}) {
  return /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: r,
    fill: "transparent",
    className: "hot",
    style: {
      pointerEvents: "all"
    },
    onClick: onClick
  });
}
Object.assign(window, {
  DiagramExplorer,
  FlowAnim,
  ImageExplorer,
  SvgTag,
  HiRing,
  Hot
});

/* ===== js/games-common.jsx ===== */
/* ============================================================
   Game shared helpers
   ============================================================ */

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function medalFor(ratio) {
  if (ratio >= 0.9) return {
    emoji: "🏆",
    word: "완벽해요!",
    color: "var(--gold)"
  };
  if (ratio >= 0.7) return {
    emoji: "🥈",
    word: "잘했어요!",
    color: "var(--teal)"
  };
  if (ratio >= 0.4) return {
    emoji: "🥉",
    word: "좋아요!",
    color: "var(--coral)"
  };
  return {
    emoji: "🌱",
    word: "다시 도전!",
    color: "var(--violet)"
  };
}
function ResultScreen({
  score,
  total,
  onRestart,
  subtitle,
  children,
  unit = "점"
}) {
  const ratio = total ? score / total : 0;
  const m = medalFor(ratio);
  return /*#__PURE__*/React.createElement("div", {
    className: "card result",
    style: {
      padding: "28px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "medal"
  }, m.emoji), /*#__PURE__*/React.createElement("div", {
    className: "fun",
    style: {
      fontSize: 22,
      color: m.color,
      marginTop: 4
    }
  }, m.word), /*#__PURE__*/React.createElement("div", {
    className: "big",
    style: {
      margin: "10px 0 2px"
    }
  }, score, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      color: "var(--ink-faint)"
    }
  }, unit)), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: 15
    }
  }, subtitle), children, /*#__PURE__*/React.createElement("button", {
    className: "btn lg teal",
    style: {
      marginTop: 20
    },
    onClick: onRestart
  }, "\uD83D\uDD04 \uB2E4\uC2DC\uD558\uAE30"));
}
function GameHud({
  left,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "hud"
  }, left, right);
}
function Feedback({
  ok,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "feedback " + (ok ? "ok" : "no")
  }, /*#__PURE__*/React.createElement("span", {
    className: "em"
  }, ok ? "⭕ 정답!" : "❌ 아쉬워요"), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(window, {
  shuffle,
  medalFor,
  ResultScreen,
  GameHud,
  Feedback
});

/* ===== js/game1.jsx ===== */
/* ============================================================
   Game 1 — 감각 기관 드래그 분류
   ============================================================ */

function Game1() {
  const G = window.APP_DATA.game1;
  const ROUND = G.cards.length; // 16
  const [deck, setDeck] = React.useState(() => shuffle(G.cards).slice(0, ROUND));
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
  React.useEffect(() => {
    if (done || locked) return;
    setTime(12);
    const t = setInterval(() => setTime(v => {
      if (v <= 0.1) {
        clearInterval(t);
        resolve(null);
        return 0;
      }
      return +(v - 0.1).toFixed(1);
    }), 100);
    return () => clearInterval(t);
    // eslint-disable-next-line
  }, [idx, done]);
  function resolve(basketKey) {
    if (locked) return;
    setLocked(true);
    const ok = basketKey === card.a;
    const ansName = G.baskets.find(b => b.key === card.a).name;
    const detail = card.note ? card.note : `'${card.t}'은(는) ${ansName}이(가) 받아들여요. (${G.hints[card.a]}${card.sub ? " · " + card.sub : ""})`;
    if (ok) {
      const newCombo = combo + 1;
      const gain = 10 + (newCombo - 1) * 3;
      setScore(s => s + gain);
      setCorrect(c => c + 1);
      setCombo(newCombo);
      setBestCombo(b => Math.max(b, newCombo));
      setFlash({
        key: card.a,
        ok: true
      });
      setFb({
        ok: true,
        msg: detail
      });
    } else {
      setCombo(0);
      setFlash(basketKey ? {
        key: basketKey,
        ok: false
      } : null);
      const lead = basketKey ? `정답은 ${ansName}이에요. ` : `시간 초과! 정답은 ${ansName}이에요. `;
      setFb({
        ok: false,
        msg: lead + detail
      });
    }
    // tricky cards get extra reading time
    const dwell = card.tricky ? 2600 : 1300;
    setTimeout(() => {
      setFlash(null);
      setFb(null);
      setLocked(false);
      setIdx(i => i + 1);
    }, dwell);
  }
  function onDown(e) {
    if (locked) return;
    const el = cardRef.current;
    el.setPointerCapture(e.pointerId);
    start.current = {
      x: e.clientX,
      y: e.clientY
    };
    el.classList.add("dragging");
    el.style.pointerEvents = "none";
  }
  function onMove(e) {
    if (!start.current) return;
    const dx = e.clientX - start.current.x,
      dy = e.clientY - start.current.y;
    cardRef.current.style.transform = `translate(${dx}px,${dy}px) rotate(${dx * 0.03}deg)`;
    const t = document.elementFromPoint(e.clientX, e.clientY);
    const b = t && t.closest("[data-basket]");
    setHover(b ? b.dataset.basket : null);
  }
  function onUp(e) {
    if (!start.current) return;
    const t = document.elementFromPoint(e.clientX, e.clientY);
    const b = t && t.closest("[data-basket]");
    start.current = null;
    const el = cardRef.current;
    el.style.transform = "";
    el.style.pointerEvents = "";
    el.classList.remove("dragging");
    setHover(null);
    if (b) resolve(b.dataset.basket);
  }
  function restart() {
    setDeck(shuffle(G.cards).slice(0, ROUND));
    setIdx(0);
    setScore(0);
    setCorrect(0);
    setCombo(0);
    setBestCombo(0);
    setFb(null);
    setLocked(false);
  }
  if (done) return /*#__PURE__*/React.createElement(ResultScreen, {
    score: score,
    total: ROUND * 10,
    unit: "\uC810",
    subtitle: `${ROUND}문제 중 ${correct}개 정답 · 최고 콤보 ${bestCombo}`,
    onRestart: restart
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "gamewrap"
  }, /*#__PURE__*/React.createElement(GameHud, {
    left: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "stat"
    }, "\u2B50 ", /*#__PURE__*/React.createElement("span", {
      className: "v"
    }, score)), /*#__PURE__*/React.createElement("div", {
      className: "stat",
      style: {
        fontSize: 13
      }
    }, idx + 1, "/", ROUND)),
    right: combo > 1 ? /*#__PURE__*/React.createElement("div", {
      className: "combo"
    }, "\uD83D\uDD25 ", combo, " \uCF64\uBCF4") : /*#__PURE__*/React.createElement("div", {
      className: "stat",
      style: {
        fontSize: 13,
        color: "var(--ink-faint)"
      }
    }, "\uC815\uB2F5 ", correct)
  }), /*#__PURE__*/React.createElement("div", {
    className: "timerbar"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: `${time / 12 * 100}%`,
      background: time < 4 ? "var(--wrong)" : "var(--coral)"
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "center muted",
    style: {
      fontSize: 14,
      margin: "4px 0"
    }
  }, "\uCE74\uB4DC\uB97C \uC54C\uB9DE\uC740 \uAC10\uAC01 \uAE30\uAD00\uC73C\uB85C ", /*#__PURE__*/React.createElement("b", null, "\uB04C\uC5B4\uB2E4 \uB193\uC73C\uC138\uC694"), " \uD83D\uDC47"), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 96,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, fb ? /*#__PURE__*/React.createElement(Feedback, {
    ok: fb.ok
  }, fb.msg) : /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "g1-card",
    style: {
      maxWidth: 360,
      width: "100%"
    },
    onPointerDown: onDown,
    onPointerMove: onMove,
    onPointerUp: onUp,
    onPointerCancel: onUp
  }, card.tricky && /*#__PURE__*/React.createElement("span", {
    className: "trickytag"
  }, "\uD83E\uDD14 \uD5F7\uAC08\uB9AC\uB294 \uBB38\uC81C"), card.t)), /*#__PURE__*/React.createElement("div", {
    className: "g1-baskets"
  }, G.baskets.map(b => {
    let cls = "g1-basket";
    if (hover === b.key) cls += " hover";
    if (flash && flash.key === b.key) cls += flash.ok ? " flash-ok" : " flash-no";
    return /*#__PURE__*/React.createElement("div", {
      key: b.key,
      className: cls,
      "data-basket": b.key
    }, /*#__PURE__*/React.createElement(Mascot, {
      type: b.mascot,
      size: 36
    }), /*#__PURE__*/React.createElement("b", null, b.name));
  })));
}
Object.assign(window, {
  Game1
});

/* ===== js/game2.jsx ===== */
/* ============================================================
   Game 2 — 신경계 경로 순서 퍼즐 + 보너스 퀴즈
   ============================================================ */

function StagePuzzle({
  stage,
  idx,
  total,
  onSolved
}) {
  const G = window.APP_DATA.game2;
  const [bank, setBank] = React.useState(() => shuffle(G.pool.map((label, i) => ({
    id: i,
    label
  }))));
  const [slots, setSlots] = React.useState([]);
  const [state, setState] = React.useState("build"); // build | wrong | solved
  const wrongIdx = React.useRef([]);
  const centerWrong = React.useRef(false);
  const need = stage.answer.length; // 6

  function place(p) {
    if (state === "solved") return;
    setSlots(s => [...s, p]);
    setBank(b => b.filter(x => x.id !== p.id));
    setState("build");
  }
  function remove(p) {
    if (state === "solved") return;
    setBank(b => [...b, p]);
    setSlots(s => s.filter(x => x.id !== p.id));
    setState("build");
  }
  function check() {
    const ok = slots.length === need && slots.every((s, i) => s.label === stage.answer[i]);
    if (ok) {
      setState("solved");
      setTimeout(() => onSolved(), 1900);
    } else {
      wrongIdx.current = slots.map((s, i) => s.label !== stage.answer[i] ? i : -1).filter(i => i >= 0);
      // center mistake: a center-type tile sits where the center should be (index 3) but is wrong
      const placedCenter = slots[3];
      centerWrong.current = !!placedCenter && G.centers.includes(placedCenter.label) && placedCenter.label !== stage.center;
      setState("wrong");
    }
  }
  function reset() {
    setBank(shuffle(G.pool.map((label, i) => ({
      id: i,
      label
    }))));
    setSlots([]);
    setState("build");
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "gamewrap"
  }, /*#__PURE__*/React.createElement(GameHud, {
    left: /*#__PURE__*/React.createElement("div", {
      className: "stat"
    }, "\uD83E\uDDE9 \uC0C1\uD669 ", /*#__PURE__*/React.createElement("span", {
      className: "v"
    }, idx + 1), "/", total),
    right: /*#__PURE__*/React.createElement("div", {
      className: "dots"
    }, Array.from({
      length: total
    }).map((_, i) => /*#__PURE__*/React.createElement("i", {
      key: i,
      className: i < idx ? "done" : i === idx ? "on" : ""
    })))
  }), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "situtag"
  }, "\uD83C\uDFAC \uC0C1\uD669"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      marginTop: 8,
      lineHeight: 1.5
    }
  }, stage.situation)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      color: "var(--ink-soft)",
      marginBottom: 7
    }
  }, "\u2460 \uC790\uADF9 \uC804\uB2EC \uACBD\uB85C\uB97C \uC21C\uC11C\uB300\uB85C (\uC870\uAC01 \uD0ED\uD558\uBA74 \uBE7C\uAE30)"), /*#__PURE__*/React.createElement("div", {
    className: "g2-slotarea"
  }, slots.length === 0 && /*#__PURE__*/React.createElement("span", {
    className: "g2-empty"
  }, "\uC544\uB798 \uC870\uAC01\uC744 \uC21C\uC11C\uB300\uB85C \uD0ED\uD558\uC138\uC694\u2026"), slots.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: p.id
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "g2-arrow"
  }, "\u2192"), /*#__PURE__*/React.createElement("button", {
    className: "g2-piece placed",
    style: state === "solved" ? {
      background: "var(--correct)",
      borderColor: "var(--correct)"
    } : state === "wrong" && wrongIdx.current.includes(i) ? {
      background: "var(--wrong)",
      borderColor: "var(--wrong)"
    } : null,
    onClick: () => remove(p)
  }, p.label, " ", /*#__PURE__*/React.createElement("span", {
    className: "x"
  }, "\u2715")))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      color: "var(--ink-soft)",
      marginBottom: 7
    }
  }, "\u2461 \uC870\uAC01 \uBAA8\uC74C ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-faint)",
      fontWeight: 600
    }
  }, "\xB7 \uC911\uCD94 4\uAC1C \uC911 \uC54C\uB9DE\uC740 \uD558\uB098\uB9CC \uACE8\uB77C\uC694")), /*#__PURE__*/React.createElement("div", {
    className: "g2-bank"
  }, bank.map(p => {
    const isCenter = G.centers.includes(p.label);
    return /*#__PURE__*/React.createElement("button", {
      key: p.id,
      className: "g2-piece" + (isCenter ? " center" : ""),
      onClick: () => place(p)
    }, p.label);
  }))), state === "wrong" && /*#__PURE__*/React.createElement(Feedback, {
    ok: false
  }, centerWrong.current ? "중추 타일이 알맞지 않아요! 이 상황의 중추가 무엇일지 다시 생각해 보세요." : "빨간 칸의 순서가 틀렸어요. 조각을 빼서 다시 놓아 보세요."), state === "solved" && /*#__PURE__*/React.createElement("div", {
    className: "stack-12"
  }, /*#__PURE__*/React.createElement(Feedback, {
    ok: true
  }, "\uACBD\uB85C \uC644\uC131! \uC2E0\uD638\uAC00 \uD750\uB985\uB2C8\uB2E4 \u26A1"), /*#__PURE__*/React.createElement(FlowAnim, {
    nodes: stage.answer,
    accent: "var(--teal)",
    auto: true,
    label: "\uC644\uC131\uB41C \uACBD\uB85C"
  }), /*#__PURE__*/React.createElement(NoteBox, {
    label: `🎯 ${stage.type} · 중추 ${stage.center}`,
    variant: ""
  }, stage.explain)), state !== "solved" && /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn ghost",
    style: {
      flex: "0 0 auto"
    },
    onClick: reset
  }, "\u21BA \uCD08\uAE30\uD654"), /*#__PURE__*/React.createElement("button", {
    className: "btn teal",
    style: {
      flex: 1
    },
    disabled: slots.length === 0,
    onClick: check
  }, "\uACBD\uB85C \uD655\uC778")));
}
function BonusQuiz({
  onDone
}) {
  const [qs] = React.useState(() => shuffle(window.APP_DATA.game2.bonus));
  const [i, setI] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [picked, setPicked] = React.useState(null);
  const q = qs[i];
  function pick(opt) {
    if (picked) return;
    setPicked(opt);
    if (opt === q.a) setScore(s => s + 1);
    setTimeout(() => {
      if (i + 1 >= qs.length) onDone(score + (opt === q.a ? 1 : 0));else {
        setI(i + 1);
        setPicked(null);
      }
    }, 1100);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "gamewrap"
  }, /*#__PURE__*/React.createElement(GameHud, {
    left: /*#__PURE__*/React.createElement("div", {
      className: "stat"
    }, "\uD83C\uDF81 \uBCF4\uB108\uC2A4 ", /*#__PURE__*/React.createElement("span", {
      className: "v"
    }, i + 1), "/", qs.length),
    right: /*#__PURE__*/React.createElement("div", {
      className: "stat",
      style: {
        fontSize: 13
      }
    }, "\uC815\uB2F5 ", score)
  }), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      color: "var(--teal-deep)",
      marginBottom: 6
    }
  }, "\uC911\uCD94 \uC2E0\uACBD\uACC4 \uBD80\uC704\u2013\uAE30\uB2A5"), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 18,
      lineHeight: 1.4
    }
  }, q.q)), /*#__PURE__*/React.createElement("div", {
    className: "pickgrid"
  }, q.opts.map(opt => {
    let cls = "pickbtn";
    if (picked) {
      if (opt === q.a) cls += " ok";else if (opt === picked) cls += " no";
    }
    return /*#__PURE__*/React.createElement("button", {
      key: opt,
      className: cls,
      disabled: !!picked,
      onClick: () => pick(opt)
    }, /*#__PURE__*/React.createElement("span", {
      className: "pk",
      style: {
        background: "var(--teal)"
      }
    }), opt);
  })));
}
function Game2() {
  const stages = window.APP_DATA.game2.stages;
  const [phase, setPhase] = React.useState("stage"); // stage | bonus | done
  const [si, setSi] = React.useState(0);
  const [solved, setSolved] = React.useState(0);
  const [bonus, setBonus] = React.useState(0);
  function onSolved() {
    setSolved(s => s + 1);
    if (si + 1 >= stages.length) setPhase("bonus");else setSi(si + 1);
  }
  function restart() {
    setPhase("stage");
    setSi(0);
    setSolved(0);
    setBonus(0);
  }
  if (phase === "stage") return /*#__PURE__*/React.createElement(StagePuzzle, {
    key: si,
    stage: stages[si],
    idx: si,
    total: stages.length,
    onSolved: onSolved
  });
  if (phase === "bonus") return /*#__PURE__*/React.createElement(BonusQuiz, {
    onDone: b => {
      setBonus(b);
      setPhase("done");
    }
  });
  const total = stages.length + window.APP_DATA.game2.bonus.length;
  const got = solved + bonus;
  return /*#__PURE__*/React.createElement(ResultScreen, {
    score: got,
    total: total,
    unit: "\uAC1C",
    subtitle: `경로 ${solved}/${stages.length} · 보너스 ${bonus}/${window.APP_DATA.game2.bonus.length}`,
    onRestart: restart
  }, /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: 14,
      marginTop: 8
    }
  }, "\uBB34\uC870\uAC74 \uBC18\uC0AC\uB294 \uB300\uB1CC\uB97C \uAC70\uCE58\uC9C0 \uC54A\uC544 \uACBD\uB85C\uAC00 \uB354 \uC9E7\uC558\uC8E0? \uADF8\uB798\uC11C \uB354 \uBE68\uB77C\uC694!"));
}
Object.assign(window, {
  Game2
});

/* ===== js/game3.jsx ===== */
/* ============================================================
   Game 3 — 반응 속도 측정 (색깔 / 단어 찾기 / 소리)
   ============================================================ */

const N_TRIAL = 5;
function avgOf(arr) {
  const v = arr.filter(x => x != null);
  return v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length) : null;
}
function bestOf(arr) {
  const v = arr.filter(x => x != null);
  return v.length ? Math.min(...v) : null;
}
function RecordStrip({
  times,
  n = N_TRIAL
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "records"
  }, Array.from({
    length: n
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rec"
  }, /*#__PURE__*/React.createElement("span", null, i + 1, "\uD68C"), /*#__PURE__*/React.createElement("b", null, times[i] != null ? times[i] : "–"))));
}
function MiniResult({
  title,
  times,
  note,
  accent,
  onRetry,
  onMenu
}) {
  const avg = avgOf(times),
    best = bestOf(times);
  return /*#__PURE__*/React.createElement("div", {
    className: "card result",
    style: {
      padding: "24px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40
    }
  }, "\uD83C\uDFC1"), /*#__PURE__*/React.createElement("div", {
    className: "fun",
    style: {
      fontSize: 20,
      color: accent,
      marginTop: 2
    }
  }, title, " \uC644\uB8CC!"), /*#__PURE__*/React.createElement("div", {
    className: "records",
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rec"
  }, /*#__PURE__*/React.createElement("span", null, "\uD3C9\uADE0"), /*#__PURE__*/React.createElement("b", null, avg != null ? avg : "–")), /*#__PURE__*/React.createElement("div", {
    className: "rec"
  }, /*#__PURE__*/React.createElement("span", null, "\uCD5C\uACE0"), /*#__PURE__*/React.createElement("b", null, best != null ? best : "–"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(RecordStrip, {
    times: times
  })), /*#__PURE__*/React.createElement("div", {
    className: "notebox",
    style: {
      marginTop: 14,
      textAlign: "left",
      background: "var(--peach-card)",
      border: "1.5px solid var(--coral-soft)",
      color: "var(--coral-deep)"
    }
  }, "\uD83D\uDCA1 ", note), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn ghost",
    style: {
      flex: 1
    },
    onClick: onMenu
  }, "\u2190 \uBA54\uB274"), /*#__PURE__*/React.createElement("button", {
    className: "btn teal",
    style: {
      flex: 1
    },
    onClick: onRetry
  }, "\uD83D\uDD04 \uB2E4\uC2DC\uD558\uAE30")));
}

/* ---------- A. 색깔 반응 ---------- */
function ColorGame({
  onDone,
  onMenu
}) {
  const [trial, setTrial] = React.useState(0);
  const [status, setStatus] = React.useState("ready"); // ready | go | foul | result
  const [rt, setRt] = React.useState(null);
  const [times, setTimes] = React.useState([]);
  const goAt = React.useRef(0);
  const to = React.useRef(null);
  React.useEffect(() => {
    if (trial >= N_TRIAL) return;
    setStatus("ready");
    setRt(null);
    to.current = setTimeout(() => {
      setStatus("go");
      goAt.current = performance.now();
    }, 1300 + Math.random() * 2600);
    return () => clearTimeout(to.current);
  }, [trial]);
  function tap() {
    if (status === "ready") {
      clearTimeout(to.current);
      setStatus("foul");
      setTimeout(() => setTrial(t => t + 1), 1400);
    } else if (status === "go") {
      const r = Math.round(performance.now() - goAt.current);
      setRt(r);
      setTimes(t => [...t, r]);
      setStatus("result");
      setTimeout(() => setTrial(t => t + 1), 1300);
    }
  }
  if (trial >= N_TRIAL) return /*#__PURE__*/React.createElement(MiniResult, {
    title: "\uC0C9\uAE54 \uBC18\uC751",
    times: times,
    accent: "var(--coral)",
    note: "\uD654\uBA74 \uC0C9\uC744 \uBCF4\uACE0 \uB204\uB974\uB294 \uC2DC\uAC01 \uBC18\uC751\uC774\uC5D0\uC694. \uB208 \u2192 \uB300\uB1CC \u2192 \uC190\uC73C\uB85C \uC2E0\uD638\uAC00 \uC804\uD574\uC9C0\uB294 \uC758\uC2DD\uC801 \uBC18\uC751\uC774\uB77C \uC2DC\uAC04\uC774 \uAC78\uB824\uC694.",
    onRetry: () => {
      setTimes([]);
      setTrial(0);
    },
    onMenu: () => onDone("color", times)
  });
  const cls = {
    ready: "rz-ready",
    go: "rz-go",
    foul: "rz-foul",
    result: "rz-result"
  }[status];
  return /*#__PURE__*/React.createElement("div", {
    className: "gamewrap"
  }, /*#__PURE__*/React.createElement(GameHud, {
    left: /*#__PURE__*/React.createElement("div", {
      className: "stat"
    }, "\uD83D\uDFE2 \uC0C9\uAE54 \uBC18\uC751"),
    right: /*#__PURE__*/React.createElement("div", {
      className: "stat",
      style: {
        fontSize: 13
      }
    }, Math.min(trial + 1, N_TRIAL), "/", N_TRIAL)
  }), /*#__PURE__*/React.createElement("div", {
    className: "reactzone " + cls,
    onPointerDown: tap
  }, status === "ready" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, "\uC900\uBE44\u2026"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "\uCD08\uB85D\uC0C9\uC774 \uB418\uBA74 \uBC14\uB85C \uD0ED!")), status === "go" && /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, "\uC9C0\uAE08 \uD0ED! \uD83D\uDC46"), status === "result" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, rt, " ms"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "\uAE30\uB85D\uB428!")), status === "foul" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, "\uBD80\uC815 \uCD9C\uBC1C! \uD83D\uDEAB"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "\uCD08\uB85D\uBD88 \uC804\uC5D0\uB294 \uB204\uB974\uBA74 \uC548 \uB3FC\uC694"))), /*#__PURE__*/React.createElement(RecordStrip, {
    times: times
  }), /*#__PURE__*/React.createElement("button", {
    className: "topbar-back",
    style: {
      alignSelf: "center"
    },
    onClick: onMenu
  }, "\u2190 \uBA54\uB274\uB85C"));
}

/* ---------- B. 단어 찾기 반응 ---------- */
function WordGame({
  onDone,
  onMenu
}) {
  const WORDS = window.APP_DATA.game3.words;
  const [trial, setTrial] = React.useState(0);
  const [status, setStatus] = React.useState("ready"); // ready | go | result | penalty
  const [round, setRound] = React.useState(null); // {target, opts:[...3], correctIdx}
  const [rt, setRt] = React.useState(null);
  const [times, setTimes] = React.useState([]);
  const goAt = React.useRef(0);
  const penalty = React.useRef(0);
  const to = React.useRef(null);
  function makeRound() {
    const pool = shuffle(WORDS);
    const target = pool[0];
    const distract = pool.slice(1, 3);
    const opts = shuffle([target, ...distract]);
    return {
      target,
      opts,
      correctIdx: opts.indexOf(target)
    };
  }
  React.useEffect(() => {
    if (trial >= N_TRIAL) return;
    setStatus("ready");
    setRt(null);
    penalty.current = 0;
    const r = makeRound();
    to.current = setTimeout(() => {
      setRound(r);
      setStatus("go");
      goAt.current = performance.now();
    }, 900 + Math.random() * 1800);
    return () => clearTimeout(to.current);
  }, [trial]);
  function pick(i) {
    if (status !== "go" && status !== "penalty") return;
    if (i === round.correctIdx) {
      const r = Math.round(performance.now() - goAt.current + penalty.current);
      setRt(r);
      setTimes(t => [...t, r]);
      setStatus("result");
      setTimeout(() => setTrial(t => t + 1), 1300);
    } else {
      penalty.current += 400;
      setStatus("penalty");
      setTimeout(() => setStatus("go"), 250);
    }
  }
  if (trial >= N_TRIAL) return /*#__PURE__*/React.createElement(MiniResult, {
    title: "\uB2E8\uC5B4 \uCC3E\uAE30 \uBC18\uC751",
    times: times,
    accent: "var(--violet)",
    note: "\uAC19\uC740 \uB2E8\uC5B4\uB97C '\uCC3E\uB294' \uD310\uB2E8\uC774 \uB4E4\uC5B4\uAC00\uC11C, \uB2E8\uC21C\uD55C \uC0C9\uAE54\xB7\uC18C\uB9AC \uBC18\uC751\uBCF4\uB2E4 \uB354 \uC624\uB798 \uAC78\uB824\uC694. \uB300\uB1CC\uAC00 \uAE00\uC790\uB97C \uC77D\uACE0 \uBE44\uAD50\uD558\uAE30 \uB54C\uBB38\uC774\uC5D0\uC694.",
    onRetry: () => {
      setTimes([]);
      setTrial(0);
    },
    onMenu: () => onDone("word", times)
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "gamewrap"
  }, /*#__PURE__*/React.createElement(GameHud, {
    left: /*#__PURE__*/React.createElement("div", {
      className: "stat"
    }, "\uD83D\uDD24 \uB2E8\uC5B4 \uCC3E\uAE30"),
    right: /*#__PURE__*/React.createElement("div", {
      className: "stat",
      style: {
        fontSize: 13
      }
    }, Math.min(trial + 1, N_TRIAL), "/", N_TRIAL)
  }), /*#__PURE__*/React.createElement("div", {
    className: "wordtarget"
  }, status === "ready" ? /*#__PURE__*/React.createElement("span", {
    className: "wt-wait"
  }, "\uACE7 \uB2E8\uC5B4\uAC00 \uB098\uD0C0\uB098\uC694\u2026") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "wt-lbl"
  }, "\uC774 \uB2E8\uC5B4\uB97C \uCC3E\uC73C\uC138\uC694"), /*#__PURE__*/React.createElement("b", {
    className: "wt-word"
  }, round.target))), /*#__PURE__*/React.createElement("div", {
    className: "wordopts"
  }, (round ? round.opts : ["·", "·", "·"]).map((w, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "wordblock" + (status === "penalty" ? " shake" : ""),
    disabled: status === "ready" || status === "result",
    onClick: () => pick(i)
  }, status === "ready" ? "?" : w))), status === "result" && /*#__PURE__*/React.createElement("div", {
    className: "feedback ok"
  }, /*#__PURE__*/React.createElement("span", {
    className: "em"
  }, "\u2B55 ", rt, " ms"), /*#__PURE__*/React.createElement("span", null, "\uC815\uB2F5\uC744 \uCC3E\uC558\uC5B4\uC694!")), status === "penalty" && /*#__PURE__*/React.createElement("div", {
    className: "feedback no"
  }, /*#__PURE__*/React.createElement("span", {
    className: "em"
  }, "\uC557!"), /*#__PURE__*/React.createElement("span", null, "\uB2E4\uB978 \uB2E8\uC5B4\uC608\uC694. +0.4\uCD08 \uD398\uB110\uD2F0")), /*#__PURE__*/React.createElement(RecordStrip, {
    times: times
  }), /*#__PURE__*/React.createElement("button", {
    className: "topbar-back",
    style: {
      alignSelf: "center"
    },
    onClick: onMenu
  }, "\u2190 \uBA54\uB274\uB85C"));
}

/* ---------- C. 소리 반응 ---------- */
function SoundGame({
  onDone,
  onMenu
}) {
  const [started, setStarted] = React.useState(false);
  const [trial, setTrial] = React.useState(0);
  const [status, setStatus] = React.useState("ready");
  const [rt, setRt] = React.useState(null);
  const [times, setTimes] = React.useState([]);
  const goAt = React.useRef(0);
  const to = React.useRef(null);
  const actx = React.useRef(null);
  function beep() {
    try {
      const ctx = actx.current;
      if (!ctx) return;
      const o = ctx.createOscillator(),
        g = ctx.createGain();
      o.frequency.value = 880;
      o.type = "sine";
      o.connect(g);
      g.connect(ctx.destination);
      g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.35, ctx.currentTime + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.2);
      o.start();
      o.stop(ctx.currentTime + 0.22);
    } catch (e) {}
  }
  function startGame() {
    try {
      actx.current = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {}
    setStarted(true);
    setTrial(0);
    setTimes([]);
  }
  React.useEffect(() => {
    if (!started || trial >= N_TRIAL) return;
    setStatus("ready");
    setRt(null);
    to.current = setTimeout(() => {
      setStatus("go");
      goAt.current = performance.now();
      beep();
    }, 1300 + Math.random() * 2600);
    return () => clearTimeout(to.current);
  }, [trial, started]);
  function tap() {
    if (!started) return;
    if (status === "ready") {
      clearTimeout(to.current);
      setStatus("foul");
      setTimeout(() => setTrial(t => t + 1), 1400);
    } else if (status === "go") {
      const r = Math.round(performance.now() - goAt.current);
      setRt(r);
      setTimes(t => [...t, r]);
      setStatus("result");
      setTimeout(() => setTrial(t => t + 1), 1300);
    }
  }
  if (!started) return /*#__PURE__*/React.createElement("div", {
    className: "gamewrap"
  }, /*#__PURE__*/React.createElement(GameHud, {
    left: /*#__PURE__*/React.createElement("div", {
      className: "stat"
    }, "\uD83D\uDD14 \uC18C\uB9AC \uBC18\uC751"),
    right: /*#__PURE__*/React.createElement("span", null)
  }), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 22,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36
    }
  }, "\uD83D\uDD14"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      marginTop: 8,
      lineHeight: 1.6
    }
  }, "\uD654\uBA74\uC744 \uBCF4\uBA70 \uAE30\uB2E4\uB9AC\uB2E4\uAC00 ", /*#__PURE__*/React.createElement("b", null, "\"\uC090\" \uC18C\uB9AC"), "\uAC00 \uB098\uB294 \uC21C\uAC04 \uCD5C\uB300\uD55C \uBE68\uB9AC \uD0ED\uD558\uC138\uC694. \uC18C\uB9AC\uB97C \uCF1C\uB824\uBA74 \uC544\uB798 \uBC84\uD2BC\uC744 \uB20C\uB7EC \uC2DC\uC791\uD574\uC694.")), /*#__PURE__*/React.createElement("button", {
    className: "btn lg",
    onClick: startGame
  }, "\uD83D\uDD0A \uC18C\uB9AC \uCF1C\uACE0 \uC2DC\uC791"), /*#__PURE__*/React.createElement("button", {
    className: "topbar-back",
    style: {
      alignSelf: "center"
    },
    onClick: onMenu
  }, "\u2190 \uBA54\uB274\uB85C"));
  if (trial >= N_TRIAL) return /*#__PURE__*/React.createElement(MiniResult, {
    title: "\uC18C\uB9AC \uBC18\uC751",
    times: times,
    accent: "var(--teal)",
    note: "\uC18C\uB9AC\uB97C \uB4E3\uACE0 \uB204\uB974\uB294 \uCCAD\uAC01 \uBC18\uC751\uC774\uC5D0\uC694. \uADC0 \u2192 \uB300\uB1CC \u2192 \uC190\uC73C\uB85C \uC2E0\uD638\uAC00 \uC804\uD574\uC838\uC694. \uBCF4\uD1B5 \uC18C\uB9AC \uBC18\uC751\uC774 \uC0C9\uAE54(\uC2DC\uAC01) \uBC18\uC751\uBCF4\uB2E4 \uC870\uAE08 \uBE60\uB978 \uD3B8\uC774\uC5D0\uC694.",
    onRetry: () => {
      setStarted(false);
    },
    onMenu: () => onDone("sound", times)
  });
  const cls = {
    ready: "rz-wait",
    go: "rz-go",
    foul: "rz-foul",
    result: "rz-result"
  }[status];
  return /*#__PURE__*/React.createElement("div", {
    className: "gamewrap"
  }, /*#__PURE__*/React.createElement(GameHud, {
    left: /*#__PURE__*/React.createElement("div", {
      className: "stat"
    }, "\uD83D\uDD14 \uC18C\uB9AC \uBC18\uC751"),
    right: /*#__PURE__*/React.createElement("div", {
      className: "stat",
      style: {
        fontSize: 13
      }
    }, Math.min(trial + 1, N_TRIAL), "/", N_TRIAL)
  }), /*#__PURE__*/React.createElement("div", {
    className: "reactzone " + cls,
    onPointerDown: tap
  }, status === "ready" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, "\uD83D\uDD07 \uAE30\uB2E4\uB824\uC694\u2026"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "\"\uC090\" \uC18C\uB9AC\uAC00 \uB098\uBA74 \uBC14\uB85C \uD0ED!")), status === "go" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, "\uD83D\uDD0A \uC9C0\uAE08 \uD0ED!")), status === "result" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, rt, " ms"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "\uAE30\uB85D\uB428!")), status === "foul" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, "\uBD80\uC815 \uCD9C\uBC1C! \uD83D\uDEAB"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "\uC18C\uB9AC \uC804\uC5D0\uB294 \uB204\uB974\uBA74 \uC548 \uB3FC\uC694"))), /*#__PURE__*/React.createElement(RecordStrip, {
    times: times
  }), /*#__PURE__*/React.createElement("button", {
    className: "topbar-back",
    style: {
      alignSelf: "center"
    },
    onClick: onMenu
  }, "\u2190 \uBA54\uB274\uB85C"));
}

/* ---------- menu + summary ---------- */
function Game3() {
  const [phase, setPhase] = React.useState("menu");
  const [res, setRes] = React.useState({
    color: [],
    word: [],
    sound: []
  });
  function done(key, times) {
    setRes(r => ({
      ...r,
      [key]: times
    }));
    setPhase("menu");
  }
  const games = [{
    key: "color",
    title: "색깔 반응",
    sub: "초록불이 되면 탭 · 시각",
    emoji: "🟢",
    color: "var(--coral)"
  }, {
    key: "sound",
    title: "소리 반응",
    sub: "삐 소리에 탭 · 청각",
    emoji: "🔔",
    color: "var(--teal)"
  }, {
    key: "word",
    title: "단어 찾기 반응",
    sub: "같은 단어 찾기 · 시각+판단",
    emoji: "🔤",
    color: "var(--violet)"
  }];
  if (phase === "color") return /*#__PURE__*/React.createElement(ColorGame, {
    onDone: done,
    onMenu: () => setPhase("menu")
  });
  if (phase === "word") return /*#__PURE__*/React.createElement(WordGame, {
    onDone: done,
    onMenu: () => setPhase("menu")
  });
  if (phase === "sound") return /*#__PURE__*/React.createElement(SoundGame, {
    onDone: done,
    onMenu: () => setPhase("menu")
  });
  if (phase === "summary") {
    const c = avgOf(res.color),
      w = avgOf(res.word),
      s = avgOf(res.sound);
    const max = Math.max(c || 0, w || 0, s || 0) || 1;
    const bar = (v, color) => /*#__PURE__*/React.createElement("div", {
      className: "cmpbar"
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        width: (v ? v / max * 100 : 4) + "%",
        background: color
      }
    }), /*#__PURE__*/React.createElement("span", null, v != null ? v + " ms" : "기록 없음"));
    return /*#__PURE__*/React.createElement("div", {
      className: "gamewrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "card result",
      style: {
        padding: "24px 20px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 44
      }
    }, "\uD83D\uDCCA"), /*#__PURE__*/React.createElement("div", {
      className: "fun",
      style: {
        fontSize: 22,
        color: "var(--coral-deep)",
        marginTop: 2
      }
    }, "\uBC18\uC751 \uC18D\uB3C4 \uBE44\uAD50"), /*#__PURE__*/React.createElement("div", {
      className: "cmp"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cmprow"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cmplbl",
      style: {
        color: "var(--coral)"
      }
    }, "\uD83D\uDFE2 \uC0C9\uAE54(\uC2DC\uAC01)"), bar(c, "var(--coral)")), /*#__PURE__*/React.createElement("div", {
      className: "cmprow"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cmplbl",
      style: {
        color: "var(--teal)"
      }
    }, "\uD83D\uDD14 \uC18C\uB9AC(\uCCAD\uAC01)"), bar(s, "var(--teal)")), /*#__PURE__*/React.createElement("div", {
      className: "cmprow"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cmplbl",
      style: {
        color: "var(--violet)"
      }
    }, "\uD83D\uDD24 \uB2E8\uC5B4 \uCC3E\uAE30"), bar(w, "var(--violet)"))), /*#__PURE__*/React.createElement("div", {
      className: "notebox",
      style: {
        marginTop: 16,
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "lbl"
    }, "\uD83E\uDDE0 \uC65C \uB2E8\uC5B4 \uCC3E\uAE30\uAC00 \uB354 \uC624\uB798 \uAC78\uB9B4\uAE4C?"), "\uB2E8\uC5B4\uB97C \uCC3E\uB294 \uBC18\uC751\uC740 \uB300\uB1CC\uAC00 \uAE00\uC790\uB97C \uC77D\uACE0 \uD310\uB2E8\uD558\uB294 \uACFC\uC815\uC774 \uB4E4\uC5B4\uAC00\uC11C \uB354 \uC624\uB798 \uAC78\uB824\uC694. \uC774 \uBAA8\uB4E0 \uBC18\uC751\uC740 \uB300\uB1CC\uB97C \uAC70\uCE58\uB294 ", /*#__PURE__*/React.createElement("b", null, "\uC758\uC2DD\uC801 \uBC18\uC751"), "\uC774\uB77C \uC2DC\uAC04\uC774 \uAC78\uB9B0\uB2F5\uB2C8\uB2E4."), c != null && s != null && /*#__PURE__*/React.createElement("div", {
      className: "notebox coral",
      style: {
        marginTop: 10,
        textAlign: "left"
      }
    }, "\uD83D\uDC40 \uC0C9\uAE54(\uC2DC\uAC01) ", c, " ms vs \uD83D\uDD14 \uC18C\uB9AC(\uCCAD\uAC01) ", s, " ms \u2014 \uC0AC\uB78C\uB9C8\uB2E4 \uB2E4\uB974\uC9C0\uB9CC \uBCF4\uD1B5 \uC18C\uB9AC \uBC18\uC751\uC774 \uC870\uAE08 \uB354 \uBE60\uB978 \uD3B8\uC774\uC5D0\uC694."), /*#__PURE__*/React.createElement("button", {
      className: "btn lg teal",
      style: {
        marginTop: 18
      },
      onClick: () => setPhase("menu")
    }, "\u2190 \uBA54\uB274\uB85C")));
  }

  // menu
  const anyDone = res.color.length || res.word.length || res.sound.length;
  return /*#__PURE__*/React.createElement("div", {
    className: "gamewrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 18
    }
  }, "\u26A1 \uBC18\uC751 \uC18D\uB3C4 \uCE21\uC815"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: 14.5,
      marginTop: 6,
      lineHeight: 1.55
    }
  }, "\uC138 \uAC00\uC9C0 \uBC29\uC2DD\uC73C\uB85C \uB0B4 \uBC18\uC751 \uC2DC\uAC04\uC744 \uBC00\uB9AC\uCD08(ms)\uB85C \uC7AC \uBCF4\uC138\uC694. \uAC01 \uAC8C\uC784\uC744 \uB9C8\uCE58\uBA74 \uD3C9\uADE0\xB7\uCD5C\uACE0 \uAE30\uB85D\uC774 \uB0A8\uC544\uC694.")), /*#__PURE__*/React.createElement("div", {
    className: "stack-12"
  }, games.map(g => {
    const avg = avgOf(res[g.key]);
    return /*#__PURE__*/React.createElement("button", {
      key: g.key,
      className: "menucard",
      onClick: () => setPhase(g.key)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 52,
        height: 52,
        borderRadius: 16,
        background: g.color,
        display: "grid",
        placeItems: "center",
        fontSize: 26,
        flex: "0 0 auto"
      }
    }, g.emoji), /*#__PURE__*/React.createElement("div", {
      className: "mc-txt"
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 17
      }
    }, g.title), /*#__PURE__*/React.createElement("span", null, g.sub)), avg != null ? /*#__PURE__*/React.createElement("span", {
      className: "avgtag",
      style: {
        color: g.color
      }
    }, "\uD3C9\uADE0 ", avg, /*#__PURE__*/React.createElement("small", null, "ms")) : /*#__PURE__*/React.createElement("span", {
      className: "mc-go",
      style: {
        color: g.color
      }
    }, "\u203A"));
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn lg",
    disabled: !anyDone,
    onClick: () => setPhase("summary")
  }, "\uD83D\uDCCA \uC138 \uAC8C\uC784 \uACB0\uACFC \uBE44\uAD50\uD558\uAE30"), !anyDone && /*#__PURE__*/React.createElement("p", {
    className: "center muted",
    style: {
      fontSize: 12.5
    }
  }, "\uAC8C\uC784\uC744 \uD558\uB098 \uC774\uC0C1 \uC644\uB8CC\uD558\uBA74 \uBE44\uAD50\uD560 \uC218 \uC788\uC5B4\uC694"));
}
Object.assign(window, {
  Game3
});

/* ===== js/sec-sensory.jsx ===== */
/* ============================================================
   감각 기관 Section
   ============================================================ */

const ORGAN_ORDER = ["eye", "ear", "skin", "tongue", "nose"];

/* eye 조절 작용 — uses quadrants of img/eye-adjust.png (2x2 composite) */
function EyeCrop({
  pos,
  cap,
  img,
  size
}) {
  const src = img || window.__res("eyeAdjust", "img/eye-adjust.jpg");
  return /*#__PURE__*/React.createElement("div", {
    className: "eyecrop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyecrop-img",
    style: {
      backgroundImage: `url(${src})`,
      backgroundPosition: pos,
      ...(size ? {
        backgroundSize: size
      } : {})
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "eyecrop-cap"
  }, cap));
}
function EyeAdjust() {
  const [light, setLight] = React.useState("bright");
  const [dist, setDist] = React.useState("near");
  return /*#__PURE__*/React.createElement("div", {
    className: "stack-16"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "compare",
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "opt" + (light === "bright" ? " on" : ""),
    onClick: () => setLight("bright")
  }, "\u2600\uFE0F \uBC1D\uC744 \uB54C"), /*#__PURE__*/React.createElement("button", {
    className: "opt" + (light === "dark" ? " on" : ""),
    onClick: () => setLight("dark")
  }, "\uD83C\uDF19 \uC5B4\uB450\uC6B8 \uB54C")), /*#__PURE__*/React.createElement("div", {
    className: "compare-view"
  }, /*#__PURE__*/React.createElement(EyeCrop, {
    pos: light === "bright" ? "0% 0%" : "100% 0%",
    cap: light === "bright" ? "홍채가 확장 → 동공이 작아져 빛의 양이 줄어요." : "홍채가 수축 → 동공이 커져 빛의 양이 늘어요."
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "compare",
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "opt" + (dist === "near" ? " on" : ""),
    onClick: () => setDist("near")
  }, "\uD83D\uDC40 \uAC00\uAE4C\uC6B4 \uBB3C\uCCB4"), /*#__PURE__*/React.createElement("button", {
    className: "opt" + (dist === "far" ? " on" : ""),
    onClick: () => setDist("far")
  }, "\uD83C\uDFD4\uFE0F \uBA3C \uBB3C\uCCB4")), /*#__PURE__*/React.createElement("div", {
    className: "compare-view"
  }, /*#__PURE__*/React.createElement(EyeCrop, {
    img: window.__res("eyeDistance", "img/eye-distance.jpg"),
    size: "200% 100%",
    pos: dist === "near" ? "0% 0%" : "100% 0%",
    cap: dist === "near" ? "섬모체가 수축 → 수정체가 두꺼워져 빛을 많이 굴절시켜요." : "섬모체가 이완 → 수정체가 얇아져 빛을 적게 굴절시켜요."
  }))));
}

/* ear: filter parts by 청각 / 평형감각 / 전체 */
function EarDiagram({
  D
}) {
  const [grp, setGrp] = React.useState("all");
  const shown = grp === "all" ? D.parts : D.parts.filter(p => p.group === grp);
  const tabs = [{
    k: "all",
    t: "전체 보기",
    c: "var(--coral)"
  }, {
    k: "hearing",
    t: "👂 청각 기관",
    c: "var(--teal)"
  }, {
    k: "balance",
    t: "🌀 평형감각 기관",
    c: "var(--violet)"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "stack-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "compare"
  }, tabs.map(tb => /*#__PURE__*/React.createElement("button", {
    key: tb.k,
    className: "opt" + (grp === tb.k ? " on" : ""),
    onClick: () => setGrp(tb.k),
    style: grp === tb.k ? {
      background: tb.c,
      borderColor: tb.c,
      color: "#fff"
    } : null
  }, tb.t))), /*#__PURE__*/React.createElement(ImageExplorer, {
    key: grp,
    img: D.img,
    parts: shown,
    accent: grp === "balance" ? "var(--violet)" : grp === "hearing" ? "var(--teal)" : "var(--coral)",
    hint: "\uADC0\uC758 \uBD80\uC704\uB97C \uD1A1 \uB20C\uB7EC\uBCF4\uC138\uC694"
  }), grp === "hearing" && /*#__PURE__*/React.createElement("div", {
    className: "notebox",
    style: {
      background: "var(--teal-bg)",
      border: "1.5px solid var(--teal-soft)",
      color: "var(--teal-deep)",
      fontSize: 13.5
    }
  }, "\uC18C\uB9AC(\uC9C4\uB3D9)\uC744 \uBC1B\uC544\uB4E4\uC774\uB294 ", /*#__PURE__*/React.createElement("b", null, "\uCCAD\uAC01 \uAE30\uAD00"), "\uC774\uC5D0\uC694: \uADD3\uBC14\uD034\xB7\uC678\uC774\uB3C4\xB7\uACE0\uB9C9\xB7\uADD3\uC18D\uBF08\xB7\uB2EC\uD33D\uC774\uAD00\xB7\uCCAD\uAC01 \uC2E0\uACBD."), grp === "balance" && /*#__PURE__*/React.createElement("div", {
    className: "notebox",
    style: {
      background: "var(--violet-soft)",
      border: "1.5px solid var(--violet)",
      color: "#4b3fa0",
      fontSize: 13.5
    }
  }, "\uBAB8\uC758 \uC6C0\uC9C1\uC784\uC744 \uB290\uB07C\uB294 ", /*#__PURE__*/React.createElement("b", null, "\uD3C9\uD615\uAC10\uAC01 \uAE30\uAD00"), "\uC774\uC5D0\uC694: \uD68C\uC804\uC740 ", /*#__PURE__*/React.createElement("b", null, "\uBC18\uACE0\uB9AC\uAD00"), ", \uAE30\uC6B8\uC5B4\uC9D0\xB7\uC6C0\uC9C1\uC784\uC740 ", /*#__PURE__*/React.createElement("b", null, "\uC804\uC815 \uAE30\uAD00"), "\uC774 \uB290\uAEF4\uC694. \uC774 \uC790\uADF9\uC740 ", /*#__PURE__*/React.createElement("b", null, "\uD3C9\uD615\uAC10\uAC01 \uC2E0\uACBD"), "\uC744 \uB530\uB77C ", /*#__PURE__*/React.createElement("b", null, "\uC18C\uB1CC"), "\uB85C \uC804\uB2EC\uB3FC \uBAB8\uC758 \uADE0\uD615\uC744 \uC7A1\uC544\uC694."), grp === "all" && /*#__PURE__*/React.createElement("div", {
    className: "notebox",
    style: {
      background: "#FBF3E7",
      border: "1.5px dashed var(--coral-soft)",
      color: "var(--ink-soft)",
      fontSize: 13
    }
  }, "\u2757 ", /*#__PURE__*/React.createElement("b", null, "\uADC0\uC778\uB450\uAD00"), "\uC740 \uCCAD\uAC01\uC774\uB098 \uD3C9\uD615\uAC10\uAC01 \uC5B4\uB290 \uCABD\uC5D0\uB3C4 \uC18D\uD558\uC9C0 \uC54A\uC544\uC694. \uC18C\uB9AC\uB098 \uC6C0\uC9C1\uC784\uC744 \uAC10\uAC01\uD558\uB294 \uAC8C \uC544\uB2C8\uB77C, \uACE0\uB9C9 \uC548\uD30E\uC758 ", /*#__PURE__*/React.createElement("b", null, "\uC555\uB825\uC744 \uC870\uC808"), "\uD558\uB294 \uAD00\uC774\uC5D0\uC694."));
}
function OrganHeader({
  o
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sechead",
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Mascot, {
    type: o.mascot,
    size: 56
  }), /*#__PURE__*/React.createElement("div", {
    className: "mc-txt"
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 24
    }
  }, o.name, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--ink-faint)"
    }
  }, "\xB7 ", o.sense)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(StimPill, null, o.stimulus))));
}
function OrganView({
  okey
}) {
  const D = window.APP_DATA.sensory.organs[okey];
  const common = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(OrganHeader, {
    o: D
  }), /*#__PURE__*/React.createElement(DefLine, null, D.def));
  if (okey === "eye") return /*#__PURE__*/React.createElement("div", {
    className: "stack-22"
  }, common, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SubHead, {
    n: "1"
  }, "\uB208 \uB2E8\uBA74\uB3C4 \u2014 \uBD80\uC704 \uD0D0\uD5D8"), /*#__PURE__*/React.createElement(ImageExplorer, {
    img: D.img,
    parts: D.parts,
    accent: "var(--coral)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SubHead, {
    n: "2"
  }, "\uBB3C\uCCB4\uB97C \uBCF4\uB294 \uACFC\uC815"), /*#__PURE__*/React.createElement(FlowAnim, {
    nodes: D.process,
    accent: "var(--coral)",
    label: "\uBE5B\uC774 \uD750\uB974\uB294 \uAE38"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SubHead, {
    n: "3"
  }, "\uB208\uC758 \uC870\uC808 \uC791\uC6A9"), /*#__PURE__*/React.createElement(EyeAdjust, null)), /*#__PURE__*/React.createElement(Remember, null, D.remember));
  if (okey === "ear") return /*#__PURE__*/React.createElement("div", {
    className: "stack-22"
  }, common, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SubHead, {
    n: "1"
  }, "\uADC0 \uB2E8\uBA74\uB3C4 \u2014 \uCCAD\uAC01\xB7\uD3C9\uD615\uAC10\uAC01 \uBD84\uB9AC \uD0D0\uD5D8"), /*#__PURE__*/React.createElement(EarDiagram, {
    D: D
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SubHead, {
    n: "2"
  }, "\uC18C\uB9AC\uB97C \uB4E3\uB294 \uACFC\uC815"), /*#__PURE__*/React.createElement(FlowAnim, {
    nodes: D.process,
    accent: "var(--coral)",
    label: "\uC18C\uB9AC\uAC00 \uD750\uB974\uB294 \uAE38"
  })), /*#__PURE__*/React.createElement(NoteBox, {
    label: "\uD83C\uDF00 \uD3C9\uD615\uAC10\uAC01",
    variant: ""
  }, D.balance), /*#__PURE__*/React.createElement(Remember, null, D.remember));
  if (okey === "skin") return /*#__PURE__*/React.createElement("div", {
    className: "stack-22"
  }, common, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SubHead, {
    n: "1"
  }, "\uD53C\uBD80\uC758 \uAC10\uAC01\uC810 5\uC885 \u2014 \uBD80\uC704 \uD0D0\uD5D8"), /*#__PURE__*/React.createElement(ImageExplorer, {
    img: D.img,
    parts: D.points,
    accent: "var(--coral)",
    hint: "\uD53C\uBD80 \uB2E8\uBA74\uC758 \uAC10\uAC01\uC810\uC744 \uD1A1 \uB20C\uB7EC\uBCF4\uC138\uC694"
  })), /*#__PURE__*/React.createElement(NoteBox, {
    label: "\uD83D\uDCCA \uBD84\uD3EC\uAC00 \uB9CE\uC740 \uC21C\uC11C",
    variant: "coral"
  }, D.order + " <br/><b>통점</b>이 가장 많아 위험을 빨리 알아채요!"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SubHead, {
    n: "2"
  }, "\uC790\uADF9\uC774 \uC804\uB2EC\uB418\uB294 \uACFC\uC815"), /*#__PURE__*/React.createElement(FlowAnim, {
    nodes: D.process,
    accent: "var(--coral)",
    label: "\uD53C\uBD80 \uAC10\uAC01\uC774 \uC804\uB2EC\uB418\uB294 \uAE38"
  })), /*#__PURE__*/React.createElement(Remember, null, D.remember));
  if (okey === "tongue") return /*#__PURE__*/React.createElement("div", {
    className: "stack-22"
  }, common, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SubHead, {
    n: "1"
  }, "\uD600\xB7\uB9DB\uBD09\uC624\uB9AC\uC758 \uAD6C\uC870 \u2014 \uBD80\uC704 \uD0D0\uD5D8"), /*#__PURE__*/React.createElement(ImageExplorer, {
    img: D.img,
    parts: D.parts,
    accent: "var(--coral)",
    hint: "\uD600 \uD45C\uBA74\uACFC \uB9DB\uBD09\uC624\uB9AC\uB97C \uD1A1 \uB20C\uB7EC\uBCF4\uC138\uC694"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, D.tastes.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip",
    style: {
      flex: "0 0 auto",
      minWidth: 62,
      textAlign: "center"
    }
  }, t.t), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-faint)",
      fontWeight: 800
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--ink-soft)",
      fontWeight: 600
    }
  }, t.chem))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SubHead, {
    n: "2"
  }, "\uB9DB\uC744 \uB290\uB07C\uB294 \uACFC\uC815"), /*#__PURE__*/React.createElement(FlowAnim, {
    nodes: D.process,
    accent: "var(--coral)",
    label: "\uB9DB\uC774 \uC804\uB2EC\uB418\uB294 \uAE38"
  })), /*#__PURE__*/React.createElement(NoteBox, {
    label: "\u2757 \uC624\uAC1C\uB150 \uBC14\uB85C\uC7A1\uAE30",
    variant: "coral"
  }, D.misconception), /*#__PURE__*/React.createElement(Remember, null, D.remember));
  if (okey === "nose") return /*#__PURE__*/React.createElement("div", {
    className: "stack-22"
  }, common, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SubHead, {
    n: "1"
  }, "\uD6C4\uAC01 \uC0C1\uD53C\uC758 \uAD6C\uC870 \u2014 \uBD80\uC704 \uD0D0\uD5D8"), /*#__PURE__*/React.createElement(ImageExplorer, {
    img: D.img,
    parts: D.parts,
    accent: "var(--coral)",
    hint: "\uCF67\uC18D \uD6C4\uAC01 \uC138\uD3EC\uB97C \uD1A1 \uB20C\uB7EC\uBCF4\uC138\uC694"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SubHead, {
    n: "2"
  }, "\uB0C4\uC0C8\uB97C \uB9E1\uB294 \uACFC\uC815"), /*#__PURE__*/React.createElement(FlowAnim, {
    nodes: D.process,
    accent: "var(--coral)",
    label: "\uB0C4\uC0C8\uAC00 \uC804\uB2EC\uB418\uB294 \uAE38"
  })), /*#__PURE__*/React.createElement(NoteBox, {
    label: "\uD83D\uDC43 \uD6C4\uAC01\uC758 \uD2B9\uC9D5"
  }, D.feature), /*#__PURE__*/React.createElement(NoteBox, {
    label: "\uD83C\uDF5C \uBBF8\uAC01 + \uD6C4\uAC01",
    variant: ""
  }, D.link), /*#__PURE__*/React.createElement(Remember, null, D.remember));
  return null;
}
function SensorySection() {
  const [okey, setOkey] = React.useState("eye");
  const organs = window.APP_DATA.sensory.organs;
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    bg: "var(--peach-card)",
    color: "var(--coral-deep)"
  }, "PART 1 \xB7 \uC815\uB9AC"), /*#__PURE__*/React.createElement("h2", {
    className: "h-page",
    style: {
      marginTop: 10
    }
  }, "\uAC10\uAC01 \uAE30\uAD00"), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      marginTop: 8
    }
  }, window.APP_DATA.sensory.intro), /*#__PURE__*/React.createElement("div", {
    className: "organtabs",
    style: {
      marginTop: 16
    }
  }, ORGAN_ORDER.map(k => {
    const o = organs[k];
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      className: "organtab" + (okey === k ? " on" : ""),
      onClick: () => setOkey(k)
    }, /*#__PURE__*/React.createElement("div", {
      className: "organtab-m",
      style: {
        width: 38,
        height: 38
      }
    }, /*#__PURE__*/React.createElement(Mascot, {
      type: o.mascot,
      size: 38
    })), /*#__PURE__*/React.createElement("b", {
      style: okey === k ? {
        color: "#fff"
      } : null
    }, o.name));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    },
    key: okey
  }, /*#__PURE__*/React.createElement(OrganView, {
    okey: okey
  })));
}
Object.assign(window, {
  SensorySection
});

/* ===== js/sec-nervous.jsx ===== */
/* ============================================================
   신경계 Section
   ============================================================ */

function NervousStructure() {
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: "16px 14px 16px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__res("nervousTree", "img/nervous-tree.jpg"),
    alt: "\uC2E0\uACBD\uACC4 \uAD6C\uC870 \uD2B8\uB9AC: \uC2E0\uACBD\uACC4 \u2192 \uC911\uCD94 \uC2E0\uACBD\uACC4(\uB1CC\xB7\uCC99\uC218) / \uB9D0\uCD08 \uC2E0\uACBD\uACC4(\uAC10\uAC01 \uC2E0\uACBD\xB7\uC6B4\uB3D9 \uC2E0\uACBD)",
    style: {
      display: "block",
      width: "100%",
      height: "auto",
      borderRadius: "var(--r-sm)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "stack-12",
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "notebox",
    style: {
      background: "var(--teal-bg)",
      border: "1.5px solid var(--teal-soft)",
      color: "var(--teal-deep)",
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("b", null, "\uAC10\uAC01 \uC2E0\uACBD"), " \xB7 \uAC10\uAC01 \uAE30\uAD00 \u2192 \uC911\uCD94 \uC2E0\uACBD\uACC4\uB85C \uC790\uADF9 \uC804\uB2EC"), /*#__PURE__*/React.createElement("div", {
    className: "notebox",
    style: {
      background: "var(--peach-card)",
      border: "1.5px solid var(--coral-soft)",
      color: "var(--coral-deep)",
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("b", null, "\uC6B4\uB3D9 \uC2E0\uACBD"), " \xB7 \uC911\uCD94 \uC2E0\uACBD\uACC4 \u2192 \uBC18\uC751 \uAE30\uAD00\uC73C\uB85C \uC2E0\uD638 \uC804\uB2EC")));
}

/* neuron: persistent labels + electric pulse 가지돌기 → 세포체 → 축삭돌기 */
function NeuronFlowDemo() {
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
    parts.forEach((p, i) => timers.current.push(setTimeout(() => setLit(i), at[i])));
    timers.current.push(setTimeout(() => {
      setRunning(false);
      setLit(-1);
    }, 1750));
  };
  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);
  return /*#__PURE__*/React.createElement("div", {
    className: "stack-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "neuroflow nf-stage"
  }, /*#__PURE__*/React.createElement("img", {
    src: N.img,
    alt: "\uB274\uB7F0"
  }), parts.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: p.id,
    className: "nf-tag" + (lit === i ? " on" : ""),
    style: {
      left: p.x * 100 + "%",
      top: p.y * 100 + "%",
      background: p.color
    }
  }, p.name)), running && [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: runId + "-" + i,
    className: "nf-spark run t" + i
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "nf-btn",
    onClick: fire,
    disabled: running
  }, "\u26A1 ", running ? "전기 신호가 지나가는 중…" : "자극 전달 방향 보기")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 11,
      background: "var(--peach-card)",
      borderRadius: "var(--r-md)",
      padding: "15px 16px"
    }
  }, parts.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: "flex",
      gap: 11,
      alignItems: "flex-start",
      opacity: lit < 0 || lit === i ? 1 : .5,
      transition: "opacity .2s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 auto",
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: p.color,
      marginTop: 3,
      boxShadow: "0 0 0 3px " + p.color + "22"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: p.color,
      fontSize: 14.5
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: "var(--ink-soft)",
      margin: "2px 0 0",
      lineHeight: 1.5
    }
  }, p.desc))))), /*#__PURE__*/React.createElement("div", {
    className: "notebox",
    style: {
      background: "var(--violet-soft)",
      border: "1.5px solid var(--violet)",
      color: "#4b3fa0",
      fontSize: 13.5,
      textAlign: "center"
    }
  }, N.direction));
}
const TYPE_COLORS = {
  teal: "var(--teal)",
  violet: "var(--violet)",
  coral: "var(--coral)"
};
const TYPE_BG = {
  teal: "var(--teal-bg)",
  violet: "var(--violet-soft)",
  coral: "var(--peach-card)"
};

/* labeled illustration of the 3 neuron types in signal order */
function NeuronTypeFigure() {
  const img = window.APP_DATA.nervous.neuron.typesImg;
  const labels = [{
    t: "자극 · 감각 기관",
    x: .02,
    y: .82,
    c: "#3a6ea5",
    a: "l"
  }, {
    t: "감각 뉴런",
    x: .27,
    y: .30,
    c: "#2f7dd1"
  }, {
    t: "연합 뉴런",
    x: .50,
    y: .235,
    c: "#3fa64a"
  }, {
    t: "운동 뉴런",
    x: .685,
    y: .275,
    c: "#e2872f"
  }, {
    t: "반응 기관",
    x: .98,
    y: .82,
    c: "#8a63c9",
    a: "r"
  }];
  const tf = a => a === "l" ? "translate(0,-50%)" : a === "r" ? "translate(-100%,-50%)" : "translate(-50%,-50%)";
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--r-sm)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: "\uAC10\uAC01 \uB274\uB7F0 \u2192 \uC5F0\uD569 \uB274\uB7F0 \u2192 \uC6B4\uB3D9 \uB274\uB7F0",
    style: {
      display: "block",
      width: "100%",
      height: "auto",
      borderRadius: "var(--r-sm)"
    }
  }), labels.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: "absolute",
      left: l.x * 100 + "%",
      top: l.y * 100 + "%",
      transform: tf(l.a),
      background: "rgba(255,255,255,.92)",
      color: l.c,
      border: "2px solid " + l.c,
      fontSize: "clamp(10px,1.7vw,13.5px)",
      fontWeight: 800,
      padding: "3px 9px",
      borderRadius: "var(--r-pill)",
      whiteSpace: "nowrap",
      boxShadow: "var(--shadow-card)"
    }
  }, l.t))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      textAlign: "center",
      margin: "10px 4px 2px"
    }
  }, "\uC790\uADF9\uC740 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#2f7dd1"
    }
  }, "\uAC10\uAC01 \uB274\uB7F0"), " \u2192 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#3fa64a"
    }
  }, "\uC5F0\uD569 \uB274\uB7F0"), " \u2192 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#e2872f"
    }
  }, "\uC6B4\uB3D9 \uB274\uB7F0"), " \uC21C\uC11C\uB85C \uD55C \uBC29\uD5A5\uC73C\uB85C \uC804\uB2EC\uB3FC\uC694."));
}
function NeuronTypes() {
  const T = window.APP_DATA.nervous.neuron.types;
  return /*#__PURE__*/React.createElement("div", {
    className: "stack-12"
  }, T.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "typecard",
    style: {
      borderLeftColor: TYPE_COLORS[t.color]
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: TYPE_COLORS[t.color]
    }
  }, t.name), /*#__PURE__*/React.createElement("span", {
    className: "makes",
    style: {
      background: TYPE_BG[t.color],
      color: TYPE_COLORS[t.color]
    }
  }, t.makes, "\uC744 \uC774\uB8F8")), /*#__PURE__*/React.createElement("p", null, t.desc))));
}
function NervousSection() {
  const N = window.APP_DATA.nervous;
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    bg: "var(--peach-card)",
    color: "var(--coral-deep)"
  }, "PART 1 \xB7 \uC815\uB9AC"), /*#__PURE__*/React.createElement("h2", {
    className: "h-page",
    style: {
      marginTop: 10
    }
  }, "\uC2E0\uACBD\uACC4"), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      marginTop: 8
    }
  }, N.intro), /*#__PURE__*/React.createElement("div", {
    className: "stack-22",
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SubHead, {
    n: "1"
  }, "\uC2E0\uACBD\uACC4\uC758 \uAD6C\uC870"), /*#__PURE__*/React.createElement(NervousStructure, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SubHead, {
    n: "2"
  }, "\uB274\uB7F0 \u2014 \uC2E0\uACBD \uC138\uD3EC"), /*#__PURE__*/React.createElement("div", {
    className: "stack-16"
  }, /*#__PURE__*/React.createElement(NeuronFlowDemo, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      fontWeight: 800,
      color: "var(--ink-soft)",
      margin: "4px 0 10px"
    }
  }, "\uAE30\uB2A5\uC5D0 \uB530\uB978 3\uC885\uB958"), /*#__PURE__*/React.createElement("div", {
    className: "stack-12"
  }, /*#__PURE__*/React.createElement(NeuronTypeFigure, null), /*#__PURE__*/React.createElement(NeuronTypes, null))), /*#__PURE__*/React.createElement(FlowAnim, {
    nodes: N.neuron.flow,
    accent: "var(--violet)",
    label: "\uB274\uB7F0\uC744 \uD1B5\uD55C \uC804\uB2EC \uD750\uB984"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Remember, null, N.neuron.remember))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SubHead, {
    n: "3"
  }, "\uC911\uCD94 \uC2E0\uACBD\uACC4\uC758 \uAC01 \uBD80\uBD84"), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      margin: "2px 0 10px",
      fontSize: 14
    }
  }, "\uB1CC\xB7\uCC99\uC218 \uC9C0\uB3C4\uC5D0\uC11C \uBD80\uC704\uB97C \uB20C\uB7EC \uAE30\uB2A5\uC744 \uD655\uC778\uD574\uC694."), /*#__PURE__*/React.createElement(ImageExplorer, {
    img: N.brain.img,
    parts: N.brain.parts,
    accent: "var(--coral)",
    hint: "\uB1CC\xB7\uCC99\uC218\uC758 \uBD80\uC704\uB97C \uD1A1 \uB20C\uB7EC\uBCF4\uC138\uC694"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Remember, null, N.brain.remember)))));
}
Object.assign(window, {
  NervousSection
});

/* ===== js/sec-response.jsx ===== */
/* ============================================================
   반응 Section
   ============================================================ */

const RES_COLOR = {
  coral: "var(--coral)",
  teal: "var(--teal)",
  violet: "var(--violet)"
};
const RES_BG = {
  coral: "var(--peach-card)",
  teal: "var(--teal-bg)",
  violet: "var(--violet-soft)"
};
function PathRow({
  r
}) {
  const c = RES_COLOR[r.color];
  return /*#__PURE__*/React.createElement("div", {
    className: "pathrow",
    style: {
      borderTopColor: c
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ttl"
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: c
    }
  }, r.name), /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: RES_BG[r.color],
      color: c
    }
  }, r.tag)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--ink-soft)",
      margin: "8px 0 4px"
    }
  }, r.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "10px 0 2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip",
    style: {
      background: RES_BG[r.color],
      color: c,
      fontWeight: 800
    }
  }, "\uD83C\uDFAF \uBC18\uC0AC \uC911\uCD94 \xB7 ", r.center)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(FlowAnim, {
    nodes: r.path,
    accent: c,
    label: `${r.name} 경로 (${r.path.length}단계)`
  })), /*#__PURE__*/React.createElement("div", {
    className: "ex"
  }, "\uD83E\uDDEA \uC608) ", r.example), r.centers && /*#__PURE__*/React.createElement("div", {
    className: "stack-12",
    style: {
      marginTop: 12
    }
  }, r.centers.map((ct, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "notebox",
    style: {
      background: "var(--teal-bg)",
      border: "1.5px solid var(--teal-soft)",
      color: "var(--teal-deep)",
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("b", null, ct.center), " \xB7 ", ct.ex))));
}
function ResponseSection() {
  const R = window.APP_DATA.response;
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    bg: "var(--peach-card)",
    color: "var(--coral-deep)"
  }, "PART 1 \xB7 \uC815\uB9AC"), /*#__PURE__*/React.createElement("h2", {
    className: "h-page",
    style: {
      marginTop: 10
    }
  }, "\uBC18\uC751"), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      marginTop: 8
    }
  }, R.intro), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(SubHead, {
    n: "1"
  }, "\uC138 \uAC00\uC9C0 \uBC18\uC751 \uACBD\uB85C \uBE44\uAD50"), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      margin: "2px 0 12px",
      fontSize: 14
    }
  }, "\uAC01 \uCE74\uB4DC\uC758 ", /*#__PURE__*/React.createElement("b", null, "\u25B6 \uB2E4\uC2DC \uBCF4\uAE30"), "\uB85C \uC2E0\uD638\uAC00 \uD750\uB974\uB294 \uAE38\uC744 \uBE44\uAD50\uD574 \uBCF4\uC138\uC694. \uACBD\uB85C\uAC00 \uC9E7\uC744\uC218\uB85D \uBE68\uB77C\uC694!"), /*#__PURE__*/React.createElement("div", {
    className: "stack-16"
  }, R.types.map(r => /*#__PURE__*/React.createElement(PathRow, {
    key: r.id,
    r: r
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(NoteBox, {
    label: "\uD83D\uDD11 \uD575\uC2EC \uD3EC\uC778\uD2B8",
    variant: "coral"
  }, R.keypoint)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Remember, null, R.remember)));
}
Object.assign(window, {
  ResponseSection
});

/* ===== js/app.jsx ===== */
/* ============================================================
   App shell — home, nav, router, game hub
   ============================================================ */

const ROUTES = {
  home: {
    label: "홈",
    group: "home"
  },
  sense: {
    label: "감각 기관",
    group: "sense"
  },
  nerve: {
    label: "신경계",
    group: "nerve"
  },
  react: {
    label: "반응",
    group: "react"
  },
  game: {
    label: "게임",
    group: "game"
  },
  game1: {
    label: "감각 기관 게임",
    group: "game"
  },
  game2: {
    label: "신경계 게임",
    group: "game"
  },
  game3: {
    label: "반응 게임",
    group: "game"
  }
};
function useHashRoute() {
  const [route, setRoute] = React.useState(() => location.hash.replace("#", "") || "home");
  React.useEffect(() => {
    const h = () => setRoute(location.hash.replace("#", "") || "home");
    window.addEventListener("hashchange", h);
    return () => window.removeEventListener("hashchange", h);
  }, []);
  const go = r => {
    if ("#" + r !== location.hash) location.hash = r;
    window.scrollTo({
      top: 0
    });
  };
  return [route, go];
}

/* ---------------- HOME ---------------- */
function Home({
  go
}) {
  const menu = [{
    r: "sense",
    mascot: "eye",
    title: "감각 기관",
    sub: "눈·귀·코·혀·피부가 받는 자극",
    color: "var(--coral)"
  }, {
    r: "nerve",
    mascot: "neuron",
    title: "신경계",
    sub: "뉴런·뇌·척수가 전달하고 판단",
    color: "var(--violet)"
  }, {
    r: "react",
    mascot: "brain",
    title: "반응",
    sub: "의식적 반응·무조건 반사·조건 반사",
    color: "var(--teal)"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("span", {
    className: "blob",
    style: {
      width: 140,
      height: 140,
      right: -30,
      top: -40
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "blob",
    style: {
      width: 80,
      height: 80,
      right: 60,
      bottom: -30
    }
  }), /*#__PURE__*/React.createElement("a", {
    className: "unit-btn",
    href: "https://labbitory.com/grade3"
  }, "\uB2E8\uC6D0 \uC120\uD0DD"), /*#__PURE__*/React.createElement(Eyebrow, {
    bg: "rgba(255,255,255,.22)",
    color: "#fff"
  }, "\uC9113 \uACFC\uD559 \xB7 IV\uB2E8\uC6D0"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 12
    }
  }, "\uC790\uADF9\uACFC \uBC18\uC751"), /*#__PURE__*/React.createElement("p", null, "\uC790\uADF9\uC744 \uBC1B\uC544\uB4E4\uC774\uACE0, \uC2E0\uD638\uB85C \uC804\uB2EC\uD558\uACE0, \uC54C\uB9DE\uAC8C \uBC18\uC751\uD558\uAE30\uAE4C\uC9C0! \uD63C\uC790\uC11C \uD0D0\uD5D8\uD558\uBA70 \uBC30\uC6CC \uBCF4\uC138\uC694.")), /*#__PURE__*/React.createElement("div", {
    className: "journey",
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "jn",
    style: {
      background: "var(--peach-card)",
      color: "var(--coral-deep)"
    }
  }, "\u26A1 \uC790\uADF9"), /*#__PURE__*/React.createElement("span", {
    className: "ja"
  }, "\u2192"), /*#__PURE__*/React.createElement("span", {
    className: "jn",
    style: {
      background: "var(--violet-soft)",
      color: "var(--violet)"
    }
  }, "\uD83E\uDDE0 \uC2E0\uACBD\uACC4"), /*#__PURE__*/React.createElement("span", {
    className: "ja"
  }, "\u2192"), /*#__PURE__*/React.createElement("span", {
    className: "jn",
    style: {
      background: "var(--teal-bg)",
      color: "var(--teal-deep)"
    }
  }, "\uD83C\uDFC3 \uBC18\uC751")), /*#__PURE__*/React.createElement("p", {
    className: "h-sec",
    style: {
      margin: "22px 0 12px"
    }
  }, "\uD83D\uDCDA \uC815\uB9AC \uD30C\uD2B8"), /*#__PURE__*/React.createElement("div", {
    className: "stack-12"
  }, menu.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.r,
    className: "menucard",
    onClick: () => go(m.r)
  }, /*#__PURE__*/React.createElement(Mascot, {
    type: m.mascot,
    size: 52
  }), /*#__PURE__*/React.createElement("div", {
    className: "mc-txt"
  }, /*#__PURE__*/React.createElement("b", null, m.title), /*#__PURE__*/React.createElement("span", null, m.sub)), /*#__PURE__*/React.createElement("span", {
    className: "mc-go",
    style: {
      color: m.color
    }
  }, "\u203A")))), /*#__PURE__*/React.createElement("p", {
    className: "h-sec",
    style: {
      margin: "24px 0 12px"
    }
  }, "\uD83C\uDFAE \uAC8C\uC784 \uD30C\uD2B8"), /*#__PURE__*/React.createElement("button", {
    className: "menucard game",
    onClick: () => go("game")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 16,
      background: "var(--teal)",
      display: "grid",
      placeItems: "center",
      color: "#fff",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(NavIcon, {
    name: "game"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mc-txt"
  }, /*#__PURE__*/React.createElement("b", null, "\uD559\uC2B5 \uAC8C\uC784 3\uC885"), /*#__PURE__*/React.createElement("span", null, "\uB4DC\uB798\uADF8 \uBD84\uB958 \xB7 \uACBD\uB85C \uD37C\uC990 \xB7 \uBC18\uC751 \uC18D\uB3C4")), /*#__PURE__*/React.createElement("span", {
    className: "mc-go",
    style: {
      color: "var(--teal)"
    }
  }, "\u203A")), /*#__PURE__*/React.createElement("p", {
    className: "center muted",
    style: {
      fontSize: 12.5,
      marginTop: 24
    }
  }, "\uC810\uC218\uB294 \uC774 \uD654\uBA74\uC5D0\uC11C\uB9CC \uAE30\uB85D\uB3FC\uC694 \xB7 \uC0C8\uB85C\uACE0\uCE68\uD558\uBA74 \uCC98\uC74C\uBD80\uD130\uC608\uC694"));
}

/* ---------------- GAME HUB ---------------- */
function GameHub({
  go
}) {
  const games = [{
    r: "game1",
    n: "게임 1",
    title: "감각 기관 분류",
    sub: "상황 카드를 알맞은 감각 기관으로 드래그!",
    emoji: "🖐️",
    color: "var(--coral)"
  }, {
    r: "game2",
    n: "게임 2",
    title: "일상 상황 경로 퍼즐",
    sub: "상황에 맞는 자극 전달 경로를 완성해요",
    emoji: "🧩",
    color: "var(--violet)"
  }, {
    r: "game3",
    n: "게임 3",
    title: "반응 속도 측정",
    sub: "색깔·단어 찾기·소리 — 반응 시간을 ms로",
    emoji: "⚡",
    color: "var(--teal)"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    bg: "var(--teal-bg)",
    color: "var(--teal-deep)"
  }, "PART 2 \xB7 \uAC8C\uC784"), /*#__PURE__*/React.createElement("h2", {
    className: "h-page",
    style: {
      marginTop: 10
    }
  }, "\uD559\uC2B5 \uAC8C\uC784"), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      marginTop: 8
    }
  }, "\uC815\uB9AC \uD30C\uD2B8\uC5D0\uC11C \uBC30\uC6B4 \uC6A9\uC5B4\uC640 \uACBD\uB85C\uAC00 \uC815\uB2F5\uC73C\uB85C \uB2E4\uC2DC \uB098\uC640\uC694. \uC138 \uAC8C\uC784\uC744 \uBAA8\uB450 \uC990\uACA8 \uBCF4\uC138\uC694!"), /*#__PURE__*/React.createElement("div", {
    className: "stack-12",
    style: {
      marginTop: 18
    }
  }, games.map(g => /*#__PURE__*/React.createElement("button", {
    key: g.r,
    className: "menucard",
    onClick: () => go(g.r)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: 16,
      background: g.color,
      display: "grid",
      placeItems: "center",
      fontSize: 26,
      flex: "0 0 auto"
    }
  }, g.emoji), /*#__PURE__*/React.createElement("div", {
    className: "mc-txt"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      color: g.color,
      fontSize: 12.5
    }
  }, g.n), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 17
    }
  }, g.title), /*#__PURE__*/React.createElement("span", null, g.sub)), /*#__PURE__*/React.createElement("span", {
    className: "mc-go",
    style: {
      color: g.color
    }
  }, "\u203A")))));
}
function GamePage({
  route,
  go
}) {
  const map = {
    game1: Game1,
    game2: Game2,
    game3: Game3
  };
  const Comp = map[route];
  const titles = {
    game1: "감각 기관 분류",
    game2: "일상 상황 경로 퍼즐",
    game3: "반응 속도 측정"
  };
  const [k, setK] = React.useState(0); // remount key for full reset
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "topbar-back",
    onClick: () => go("game")
  }, "\u2190 \uBAA9\uB85D"), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 18,
      flex: 1
    }
  }, titles[route]), /*#__PURE__*/React.createElement("button", {
    className: "topbar-back",
    onClick: () => setK(k + 1)
  }, "\u21BB \uC0C8 \uAC8C\uC784")), /*#__PURE__*/React.createElement(Comp, {
    key: k
  }));
}

/* ---------------- NAV ---------------- */
function BottomNav({
  group,
  go
}) {
  const items = [{
    r: "home",
    g: "home",
    ico: "home",
    label: "홈"
  }, {
    r: "sense",
    g: "sense",
    ico: "sense",
    label: "감각기관"
  }, {
    r: "nerve",
    g: "nerve",
    ico: "nerve",
    label: "신경계"
  }, {
    r: "react",
    g: "react",
    ico: "react",
    label: "반응"
  }, {
    r: "game",
    g: "game",
    ico: "game",
    label: "게임"
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "bottomnav"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.r,
    className: "navitem" + (group === it.g ? " active" : ""),
    onClick: () => go(it.r)
  }, /*#__PURE__*/React.createElement("span", {
    className: "navbubble"
  }, /*#__PURE__*/React.createElement(NavIcon, {
    name: it.ico
  })), /*#__PURE__*/React.createElement("span", null, it.label))));
}
function TopBar({
  route,
  go
}) {
  if (route === "home") return null;
  const grpLabel = {
    sense: "감각 기관",
    nerve: "신경계",
    react: "반응",
    game: "게임"
  }[ROUTES[route].group];
  return /*#__PURE__*/React.createElement("div", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "crumb"
  }, "\uC815\uB9AC\xB7\uAC8C\uC784 ", /*#__PURE__*/React.createElement("b", null, "\xB7 ", grpLabel)), /*#__PURE__*/React.createElement("button", {
    className: "home-btn",
    onClick: () => go("home")
  }, "\uD83C\uDFE0"));
}

/* ---------------- APP ---------------- */
function App() {
  const [route, go] = useHashRoute();
  const group = (ROUTES[route] || ROUTES.home).group;
  let view;
  if (route === "home") view = /*#__PURE__*/React.createElement(Home, {
    go: go
  });else if (route === "sense") view = /*#__PURE__*/React.createElement(SensorySection, null);else if (route === "nerve") view = /*#__PURE__*/React.createElement(NervousSection, null);else if (route === "react") view = /*#__PURE__*/React.createElement(ResponseSection, null);else if (route === "game") view = /*#__PURE__*/React.createElement(GameHub, {
    go: go
  });else if (route === "game1" || route === "game2" || route === "game3") view = /*#__PURE__*/React.createElement(GamePage, {
    route: route,
    go: go
  });else view = /*#__PURE__*/React.createElement(Home, {
    go: go
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement(TopBar, {
    route: route,
    go: go
  }), view, /*#__PURE__*/React.createElement(BottomNav, {
    group: group,
    go: go
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
