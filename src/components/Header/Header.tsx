import {
  Image,
  Link,
  Text,
  ImageField,
  LinkField,
  Field,
} from '@sitecore-content-sdk/nextjs';

import styles from './Header.module.css';

type HeaderProps = {
  fields: {
    LogoArabic: ImageField;
    LogoEnglish: ImageField;

    GateLink: LinkField;
    HomeLink: LinkField;
    AboutLink: LinkField;
    ServicesLink: LinkField;
    ContactLink: LinkField;
    LanguageLink: LinkField;
    LoginLink: LinkField;

    GateText: Field<string>;
    HomeText: Field<string>;
    AboutText: Field<string>;
    ServicesText: Field<string>;
    ContactText: Field<string>;
    LanguageText: Field<string>;
    LoginText: Field<string>;
  };
};

export default function Header(props: HeaderProps) {
  const fields = props.fields;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image field={fields.LogoArabic} className={styles.logoArabicImage} />
            <Image field={fields.LogoEnglish} className={styles.logoEnglishImage} />
          </div>

          <Link className={styles.outlineButton} field={fields.GateLink}>
            <Text field={fields.GateText} />
            <span>↗</span>
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link field={fields.HomeLink}>
            <Text field={fields.HomeText} />
          </Link>

          <Link field={fields.AboutLink}>
            <Text field={fields.AboutText} />
          </Link>

          <Link field={fields.ServicesLink}>
            <Text field={fields.ServicesText} />
          </Link>

          <Link field={fields.ContactLink}>
            <Text field={fields.ContactText} />
            <span className={styles.chevron}>⌄</span>
          </Link>
        </nav>

        <div className={styles.right}>
          <Link className={styles.language} field={fields.LanguageLink}>
            <Text field={fields.LanguageText} />
          </Link>

          <Link className={styles.loginButton} field={fields.LoginLink}>
            <Text field={fields.LoginText} />
            <span>↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}