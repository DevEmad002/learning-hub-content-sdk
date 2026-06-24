import { Text, Link, Field, LinkField } from '@sitecore-content-sdk/nextjs';
import styles from './InsightsStatsSection.module.css';

type StatsCard = {
  id?: string;
  fields?: {
    Value?: Field<string>;
    Suffix?: Field<string>;
    Title?: Field<string>;
    Description?: Field<string>;
    Variant?: Field<string>;
  };
};

type InsightsStatsSectionProps = {
  fields?: {
    Title?: Field<string>;
    CtaText?: Field<string>;
    CtaLink?: LinkField;
    StatsCards?: StatsCard[];
  };
};

export default function InsightsStatsSection({ fields }: InsightsStatsSectionProps) {
  console.log('InsightsStatsSection fields:', fields);

  if (!fields || Object.keys(fields).length === 0) {
    return (
      <pre style={{ padding: 40, background: '#eee', color: '#000' }}>
        No fields received. Check datasource assignment.
        {'\n\n'}
        {JSON.stringify(fields, null, 2)}
      </pre>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <Text tag="h2" field={fields.Title} />

        <Link field={fields.CtaLink} className={styles.cta}>
          <Text field={fields.CtaText} />
          <span>↗</span>
        </Link>
      </div>

      <div className={styles.grid}>
        {fields.StatsCards?.map((card, index) => {
          const variant = card.fields?.Variant?.value || 'white';

          return (
            <article
              key={card.id || index}
              className={`${styles.card} ${styles[variant] || styles.white}`}
            >
              {variant === 'orange-chart' ? (
                <>
                  <h3 className={styles.chartTitle}>
                    <Text field={card.fields?.Title} />
                  </h3>

                  <div className={styles.chart}>
                    <div className={styles.barSmall} />
                    <div className={styles.barActive}>
                      <span>
                        <Text field={card.fields?.Value} />
                        <Text field={card.fields?.Suffix} />
                      </span>
                    </div>
                    <div className={styles.barSmall} />
                  </div>

                  <div className={styles.chartLabels}>
                    <span>Repossession</span>
                    <span>Banking</span>
                    <span>Financing</span>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.value}>
                    <Text field={card.fields?.Value} />
                    <span>
                      <Text field={card.fields?.Suffix} />
                    </span>
                  </div>

                  <Text tag="h3" field={card.fields?.Title} />

                  <p>
                    <Text field={card.fields?.Description} />
                  </p>
                </>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}