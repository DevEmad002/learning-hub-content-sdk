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
  fields?: {
    Title?: Field<string>;
    Description?: Field<string>;
    CtaText?: Field<string>;
    CtaLink?: LinkField;
    BackgroundImage?: ImageField;
  };
};

function LandingHeroBase(
  props: LandingHeroProps & { variant?: 'Default' | 'Dark' | 'ImageRight' }
) {
  const { fields, variant = 'Default' } = props;

  if (!fields) {
    return <section className={styles.hero}>Missing LandingHero fields</section>;
  }

  return (
    <section
      className={[
        styles.hero,
        variant === 'Dark' ? styles.dark : '',
        variant === 'ImageRight' ? styles.imageRight : '',
      ].join(' ')}
    >
      {fields.BackgroundImage?.value?.src && (
        <div className={styles.background}>
          <Image field={fields.BackgroundImage} />
        </div>
      )}

      <div className={styles.overlay}>
        <div className={styles.content}>
          {fields.Title?.value ? (
            <RichText field={fields.Title} className={styles.title} />
          ) : (
            <h1 className={styles.title}>Missing Title</h1>
          )}

          {fields.Description?.value ? (
            <p className={styles.description}>
              <Text field={fields.Description} />
            </p>
          ) : (
            <p className={styles.description}>Missing Description</p>
          )}

          {fields.CtaLink?.value?.href && (
            <Link field={fields.CtaLink} className={styles.cta}>
              {fields.CtaText?.value ? <Text field={fields.CtaText} /> : 'Learn more'}
              <span className={styles.icon}>↗</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export const Default = (props: LandingHeroProps) => {
  return <LandingHeroBase {...props} variant="Default" />;
};

export const Dark = (props: LandingHeroProps) => {
  return <LandingHeroBase {...props} variant="Dark" />;
};

export const ImageRight = (props: LandingHeroProps) => {
  return <LandingHeroBase {...props} variant="ImageRight" />;
};

export default Default;