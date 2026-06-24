import {
  Text,
  Image,
  Link,
  Field,
  ImageField,
  LinkField,
} from '@sitecore-content-sdk/nextjs';

import styles from './ClientsSection.module.css';

type ClientCard = {
  id?: string;
  fields?: {
    Logo?: ImageField;
    Title?: Field<string>;
    Description?: Field<string>;
  };
};

type ClientsSectionProps = {
  fields?: {
    Title?: Field<string>;
    CtaText?: Field<string>;
    CtaLink?: LinkField;
    Clients?: ClientCard[];
  };
};

export default function ClientsSection({ fields }: ClientsSectionProps) {
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
        <Text tag="h2" field={fields.Title} className={styles.title} />

        <Link field={fields.CtaLink} className={styles.cta}>
          <Text field={fields.CtaText} />
          <span>↗</span>
        </Link>
      </div>

      <div className={styles.grid}>
        {fields.Clients?.map((client, index) => (
          <article className={styles.card} key={client.id || index}>
            <div className={styles.logo}>
              <Image field={client.fields?.Logo} />
            </div>

            <Text tag="h3" field={client.fields?.Title} />

            <Text tag="p" field={client.fields?.Description} />
          </article>
        ))}
      </div>
    </section>
  );
}