export const universityInfo = {
  name: '武雄アジア大学',
  faculty: '東アジア地域共創学部 東アジア地域共創学科',
  openingYear: '2026年4月',
  capacity: 140,
  location: '佐賀県武雄市',
  approvalDate: '2025年8月29日',
  publicSupport: '武雄市13億円＋佐賀県6.5億円',
  publicSupportTotal: '約19.5億円',
  operator: '学校法人旭学園',
}

export const overviewMetrics = [
  { label: '入学定員', value: '140名', note: '東アジア地域共創学科' },
  { label: '設置認可日', value: '2025年8月29日', note: '開学まで約7ヶ月' },
  { label: '公的支援総額', value: '19.5億円', note: '武雄市13億＋佐賀県6.5億' },
  { label: '所在地', value: '佐賀県武雄市', note: '人口約5万人・減少傾向' },
  { label: '母体校 充足率', value: '74.7%', note: '佐賀女子短大 令和6年度' },
  { label: '累積赤字', value: '24.6億円', note: '2024年3月期' },
  { label: '補助金依存率', value: '45%超', note: '経常補助金比率' },
  { label: '県外進学率', value: '79.1%', note: '大学進学者の県外流出' },
]

export const scenarios = [
  {
    id: 'bull',
    label: '強気シナリオ',
    rangeMin: 70,
    rangeMax: 85,
    pctMin: 50,
    pctMax: 61,
    probability: 15,
    color: '#f5a623',
    colorBg: 'rgba(245,166,35,0.1)',
    colorBorder: 'rgba(245,166,35,0.3)',
    conditions: [
      'アンケート回答者の実現率が比較的高め（約35〜40%）で推移',
      '認可後の短期集中型広報（TV・SNS・高校訪問）が奏功',
      '西九州新幹線効果で長崎県からの入学者が一定数確保',
      '佐賀女子短大の既存ネットワーク（訪問済み100校）がフル稼働',
      '留学生を15〜20名程度確保（旭学園の留学生受入実績を活用）',
    ],
  },
  {
    id: 'base',
    label: '標準シナリオ',
    rangeMin: 45,
    rangeMax: 60,
    pctMin: 32,
    pctMax: 43,
    probability: 50,
    color: '#4a9eff',
    colorBg: 'rgba(74,158,255,0.1)',
    colorBorder: 'rgba(74,158,255,0.35)',
    featured: true,
    conditions: [
      'アンケート意向の実現率は約20〜25%（一般的な乖離率を適用）',
      '認可遅延の影響で総合型選抜・推薦入試の募集が不十分',
      'キャンパス未完成のためオープンキャンパスの集客力が大幅低下',
      '国内学生40〜50名＋留学生5〜10名程度',
      '高校教員の推薦行動は「実績のない大学」に対して慎重',
    ],
  },
  {
    id: 'bear',
    label: '弱気シナリオ',
    rangeMin: 25,
    rangeMax: 40,
    pctMin: 18,
    pctMax: 29,
    probability: 35,
    color: '#ff6b6b',
    colorBg: 'rgba(255,107,107,0.1)',
    colorBorder: 'rgba(255,107,107,0.3)',
    conditions: [
      'アンケート意向の実現率が10〜15%にとどまる（新設未知校への典型的反応）',
      '認可から開学まで7ヶ月で高校生の意思決定タイミングをほぼ逸失',
      '「武雄市」「新設校」「聞いたことがない」という三重のハンディ',
      '旭学園の経営基盤への不安が報道等で拡散',
      '留学生確保も認可後の短期間では十分に進まない',
    ],
  },
]

export const approaches = [
  {
    label: 'アンケート意向の現実的割引',
    detail: '169名 × 実現率15〜30% ＋ 第二志望流入5〜15名',
    min: 30,
    max: 66,
    mid: 48,
  },
  {
    label: '資料請求ベース',
    detail: '高3資料請求366件 → 推定500件 × 転換率5〜10%',
    min: 25,
    max: 50,
    mid: 37,
  },
  {
    label: '母体校ベンチマーク',
    detail: '佐賀女子短大充足率74.7% × 新設ペナルティ × 認可遅延割引',
    min: 22,
    max: 51,
    mid: 36,
  },
  {
    label: '全国新設学科平均から推定',
    detail: '2024年度私大新設81.1% × 140名 × 完全新設割引40〜60%',
    min: 46,
    max: 68,
    mid: 57,
  },
  {
    label: '県外流出者の取り込み',
    detail: '社会科学系県外進学約700名のうち5〜8%を取り込み',
    min: 35,
    max: 56,
    mid: 45,
  },
]

export const enrollmentTrend = {
  labels: ['2020年度', '2021年度', '2022年度', '2023年度', '2024年度'],
  data: [98.8, 88.3, 94.0, 92.0, 81.1],
}

export const risks = [
  {
    title: '認可時期の遅延',
    detail: '8月末認可→4月開学で約7ヶ月。高校生の進路決定の最重要時期（夏のオープンキャンパス期）をほぼ逸失。通常の新設大学は12〜18ヶ月を確保。',
    severity: 'critical' as const,
    icon: '⏱',
  },
  {
    title: 'アンケート意向と実際の乖離',
    detail: '169名の「第一志望かつ入学する」回答に対し、実現率は15〜30%程度が一般的。設置認可前の構想段階への回答の信頼性は極めて低い。',
    severity: 'critical' as const,
    icon: '📊',
  },
  {
    title: '設置者の経営基盤の脆弱性',
    detail: '累積赤字24.6億円・補助金依存率45%超。佐賀女子短大でさえ定員充足率74.7%と苦戦しており、積極的な学生募集投資への余力に疑問。',
    severity: 'high' as const,
    icon: '💰',
  },
  {
    title: '立地条件の不利',
    detail: '人口5万人の地方都市。佐賀県の大学進学率は全国ワースト6位（48.4%）、県内進学率はわずか16%。大学進学者の79.1%が県外へ流出。',
    severity: 'high' as const,
    icon: '📍',
  },
  {
    title: '競合環境の厳しさ',
    detail: '九州産業大学地域共創学部（類似分野）には佐賀県から498名が進学。福岡大・久留米大など長年の実績を持つ競合が存在。',
    severity: 'medium' as const,
    icon: '🏫',
  },
]

export const divergenceReasons = [
  {
    no: '01',
    title: 'アンケート意向と行動の構造的乖離',
    body: '設置認可前の「構想段階」の大学に対するアンケート回答は、実際の出願・入学行動に直結しない。設問設計上、「入学する」という回答が容易で実際の行動との隔たりが大きい。',
  },
  {
    no: '02',
    title: '認可時期の致命的遅さ',
    body: '8月末認可→4月開学の7ヶ月は、高校生の進路決定サイクル（夏のオープンキャンパス→秋に意思決定）と根本的にずれている。',
  },
  {
    no: '03',
    title: '新設校リスクの過小評価',
    body: '全国の新設学科充足率が81.1%（2024年度・過去最低）まで低下する中、完全新設の単科大学はさらに厳しい。電動モビリティシステム専門職大学の充足率7.5%という極端事例も存在。',
  },
  {
    no: '04',
    title: '設置者の経営基盤の脆弱性',
    body: '累積赤字24.6億円・補助金依存率45%超の法人が、積極的な学生募集投資を行える余力に疑問が残る。',
  },
  {
    no: '05',
    title: '立地の構造的不利',
    body: '人口5万人の地方都市に、ブランド力のない新設大学を置く困難さ。佐賀県では「大学進学＝県外進学」が常態化しており、県内需要の実態は慎重に評価する必要がある。',
  },
]

export const competitors = [
  { name: '佐賀大学 経済学部', capacity: 80, note: '国立・県内唯一の総合大学', type: 'national' },
  { name: '長崎県立大学 地域創造学部', capacity: 120, note: '公立・学費優位', type: 'public' },
  { name: '福岡大学 商学部', capacity: 240, note: '九州最大規模の私大', type: 'private' },
  { name: '九州産業大学 地域共創学部', capacity: 290, note: '類似分野・PBL教育', type: 'private' },
  { name: '久留米大学 商学部', capacity: 250, note: '実学重視・佐賀東部圏', type: 'private' },
  { name: '長崎国際大学', capacity: 200, note: '観光学に強み', type: 'private' },
]
