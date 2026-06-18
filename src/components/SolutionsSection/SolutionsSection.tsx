import { Text, RichText, Image, Link, Field, ImageField, LinkField } from '@sitecore-content-sdk/nextjs';
import styles from './SolutionsSection.module.css';

type TabItem = {
  id?: string;
  fields: {
    Title?: Field<string>;
  };
};

type CardItem = {
  id?: string;
  fields: {
    Number?: Field<string>;
    Title?: Field<string>;
    Description?: Field<string>;
  };
};

type SolutionsSectionProps = {
  fields: {
    Title?: Field<string>;
    Description?: Field<string>;
    EmpowerCtaText?: Field<string>;
    EmpowerCtaLink?: LinkField;
    Tabs?: TabItem[];
    MainImage?: ImageField;
    ContractTitle?: Field<string>;
    ContractDescription?: Field<string>;
    KnowMoreCtaText?: Field<string>;
    KnowMoreCtaLink?: LinkField;
    Cards?: CardItem[];
  };
};

export default function SolutionsSection({ fields }: SolutionsSectionProps) {
  console.log('SolutionsSection fields:', fields);

  if (!fields) {
    return <div style={{ padding: 40 }}>No fields received</div>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <Text tag="h2" field={fields.Title} />

        <div className={styles.description}>
          <RichText field={fields.Description} />
        </div>

        <Link field={fields.EmpowerCtaLink} className={styles.topCta}>
          <Text field={fields.EmpowerCtaText} />
          <span>↗</span>
        </Link>
      </div>

      <div className={styles.tabs}>
        {fields.Tabs?.map((tab, index) => (
          <button key={tab.id || index} className={index === 0 ? styles.activeTab : styles.tab}>
            <Text field={tab.fields.Title} />
          </button>
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.imageBox}>
          <Image field={fields.MainImage} />
        </div>

        <div className={styles.right}>
          <Text tag="h3" field={fields.ContractTitle} />

          <div className={styles.contractDescription}>
            <RichText field={fields.ContractDescription} />
          </div>

          <Link field={fields.KnowMoreCtaLink} className={styles.knowMore}>
            <Text field={fields.KnowMoreCtaText} />
            <span>›</span>
          </Link>

          <div className={styles.cards}>
            {fields.Cards?.map((card, index) => (
              <div className={styles.card} key={card.id || index}>
                <strong>
                  <Text field={card.fields.Number} />
                </strong>

                <Text tag="h4" field={card.fields.Title} />

                <p>
                  <Text field={card.fields.Description} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}