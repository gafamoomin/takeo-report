import styles from './DivergenceSection.module.css'
import { divergenceReasons } from '../data'

export default function DivergenceSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionTag}>乖離の理由</div>
        <h2 className={styles.sectionTitle}>申請書類との乖離：5つの根拠</h2>
        <p className={styles.sectionDesc}>
          申請書類は「169名の入学意向 → 定員140名充足可能」と主張しますが、本予測が大きく異なる見解を示す理由を整理します。
        </p>

        <div className={styles.list}>
          {divergenceReasons.map((r, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.num}>{r.no}</div>
              <div className={styles.content}>
                <div className={styles.title}>{r.title}</div>
                <p className={styles.body}>{r.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.sourcesBox}>
          <div className={styles.sourcesLabel}>主な参照データソース</div>
          <ul className={styles.sourcesList}>
            <li>学生確保の見通し等を記載した書類（申請書類）</li>
            <li>佐賀県「高等学校卒業者の進路状況」</li>
            <li>リクルート進学総研「私立大学等における新増設・改組の現状まとめ」</li>
            <li>私学事業団「入学志願動向」</li>
            <li>佐賀女子短期大学 情報公開資料（令和6年10月公表）</li>
            <li>東洋経済・NetIB-News等の報道（2025年8月29日以前）</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
