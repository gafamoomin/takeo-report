import { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js'
import styles from './ScenarioSection.module.css'
import { scenarios } from '../data'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

export default function ScenarioSection() {
  const [active, setActive] = useState<string | null>(null)

  const chartData = {
    labels: ['弱気（下限）', '弱気（上限）', '標準（下限）', '標準（上限）', '強気（下限）', '強気（上限）'],
    datasets: [
      {
        label: '予測入学者数（名）',
        data: [25, 40, 45, 60, 70, 85],
        backgroundColor: [
          'rgba(255,107,107,0.5)',
          'rgba(255,107,107,0.7)',
          'rgba(74,158,255,0.5)',
          'rgba(74,158,255,0.7)',
          'rgba(245,166,35,0.5)',
          'rgba(245,166,35,0.7)',
        ],
        borderColor: [
          'rgba(255,107,107,0.8)',
          'rgba(255,107,107,1)',
          'rgba(74,158,255,0.8)',
          'rgba(74,158,255,1)',
          'rgba(245,166,35,0.8)',
          'rgba(245,166,35,1)',
        ],
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: { parsed: { y: number } }) => `${ctx.parsed.y}名`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: 'rgba(240,240,244,0.5)', font: { size: 11 } },
        grid: { color: 'rgba(255,255,255,0.05)' },
      },
      y: {
        min: 0,
        max: 140,
        ticks: {
          color: 'rgba(240,240,244,0.5)',
          font: { size: 11 },
          stepSize: 20,
          callback: (v: number | string) => `${v}名`,
        },
        grid: { color: 'rgba(255,255,255,0.05)' },
      },
    },
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionTag}>シナリオ別予測</div>
        <h2 className={styles.sectionTitle}>3つのシナリオによる入学者数予測</h2>
        <p className={styles.sectionDesc}>
          5つの分析アプローチを統合し、強気・標準・弱気の3シナリオを設定。最も蓋然性が高い予測値は<strong>45〜55名（充足率32〜39%）</strong>です。
        </p>

        <div className={styles.scenarioGrid}>
          {scenarios.map((s) => (
            <button
              key={s.id}
              className={`${styles.scenarioCard} ${s.featured ? styles.featured : ''} ${active === s.id ? styles.expanded : ''}`}
              style={{
                borderColor: active === s.id || s.featured ? s.colorBorder : undefined,
                background: active === s.id ? s.colorBg : undefined,
              }}
              onClick={() => setActive(active === s.id ? null : s.id)}
            >
              <div className={styles.scenarioBadge} style={{ color: s.color, borderColor: s.colorBorder, background: s.colorBg }}>
                {s.label}
                {s.featured && <span className={styles.featuredMark}>★ 最有力</span>}
              </div>
              <div className={styles.scenarioRange} style={{ color: s.color }}>
                {s.rangeMin}〜{s.rangeMax}<span className={styles.unit}>名</span>
              </div>
              <div className={styles.scenarioPct}>充足率 {s.pctMin}〜{s.pctMax}%</div>
              <div className={styles.probRow}>
                <span className={styles.probLabel}>確率評価</span>
                <div className={styles.probBarBg}>
                  <div className={styles.probBar} style={{ width: `${s.probability}%`, background: s.color }} />
                </div>
                <span className={styles.probValue} style={{ color: s.color }}>{s.probability}%</span>
              </div>
              {active === s.id && (
                <ul className={styles.conditions}>
                  {s.conditions.map((c, i) => (
                    <li key={i} className={styles.conditionItem}>
                      <span className={styles.conditionDot} style={{ background: s.color }} />
                      {c}
                    </li>
                  ))}
                </ul>
              )}
              <div className={styles.expandHint}>{active === s.id ? '▲ 閉じる' : '▼ 前提条件を見る'}</div>
            </button>
          ))}
        </div>

        <div className={styles.chartWrap}>
          <Bar data={chartData} options={chartOptions as object} />
        </div>

        <div className={styles.summary}>
          <div className={styles.summaryLabel}>最終予測値（最有力）</div>
          <div className={styles.summaryMain}>約45〜55名 <span className={styles.summaryPct}>充足率 32〜39%</span></div>
          <div className={styles.summaryNote}>
            定員140名に対し、半数以下の充足率となる見込み。申請書類が示す169名の入学意向とは大きく乖離します。
          </div>
        </div>
      </div>
    </section>
  )
}
