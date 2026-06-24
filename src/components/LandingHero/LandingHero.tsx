import {
  RichText,
  Text,
  Link,
  Image,
  Field,
  LinkField,
  ImageField,
} from '@sitecore-content-sdk/nextjs';

import styles from './LandingHero.module.css';

type LandingHeroProps = {
  fields: {
    Title: Field<string>;
    Description: Field<string>;
    CtaText: Field<string>;
    CtaLink: LinkField;
    BackgroundImage: ImageField;
  };

  params?: {
    FieldNames?: string;
  };
};

export default function LandingHero(props: LandingHeroProps) {
  const { fields, params } = props;

  const variant = params?.FieldNames || 'Default';

  return (
    <section
      className={[
        styles.hero,
        variant === 'Dark' ? styles.dark : '',
        variant === 'ImageRight' ? styles.imageRight : '',
      ].join(' ')}
    >
      <div className={styles.background}>
        <Image field={fields.BackgroundImage} />
      </div>

      <div className={styles.overlay}>
        <div className={styles.content}>
          <RichText field={fields.Title} className={styles.title} />

          <p className={styles.description}>
            <Text field={fields.Description} />
          </p>

          <Link field={fields.CtaLink} className={styles.cta}>
            <Text field={fields.CtaText} />
            <span className={styles.icon}>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}