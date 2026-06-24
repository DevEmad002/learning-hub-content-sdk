import { Text, RichText, Image, Link, Field, ImageField, LinkField } from '@sitecore-content-sdk/nextjs';
import styles from './HowItWorksSection.module.css';

type WorkCard = {
  id?: string;
  fields?: {
    Icon?: ImageField;
    Title?: Field<string>;
    Description?: Field<string>;
  };
};

type HowItWorksSectionProps = {
  fields?: {
    Title?: Field<string>;
    Description?: Field<string>;
    CtaText?: Field<string>;
    CtaLink?: LinkField;
    BackgroundImage?: ImageField;
    Cards?: WorkCard[];
  };
};

export default function HowItWorksSection({ fields }: HowItWorksSectionProps) {
  console.log('HowItWorksSection fields:', fields);

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
      <div className={styles.background}>
        <Image field={fields.BackgroundImage} />
      </div>

      <div className={styles.inner}>
        <div className={styles.header}>
          <RichText field={fields.Title} className={styles.title} />

          <p className={styles.description}>
            <Text field={fields.Description} />
          </p>

          <Link field={fields.CtaLink} className={styles.cta}>
            <Text field={fields.CtaText} />
            <span>↗</span>
          </Link>
        </div>

        <div className={styles.cards}>
          {fields.Cards?.map((card, index) => (
            <article className={styles.card} key={card.id || index}>
              <div className={styles.icon}>
                <Image field={card.fields?.Icon} />
              </div>

              <Text tag="h3" field={card.fields?.Title} />

              <p>
                <Text field={card.fields?.Description} />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}