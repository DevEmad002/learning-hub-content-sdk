import {
  Text,
  Link,
  Field,
  LinkField,
} from '@sitecore-content-sdk/nextjs';

import styles from './Header.module.css';

type HeaderProps = {
  fields: {
    LogoArabic: Field<string>;
    LogoEnglish: Field<string>;
    GateLink: LinkField;
    HomeLink: LinkField;
    AboutLink: LinkField;
    ServicesLink: LinkField;
    ContactLink: LinkField;
    LanguageLink: LinkField;
    LoginLink: LinkField;
  };
};

export default function Header(props: HeaderProps) {
  const fields = props.fields;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Text tag="div" className={styles.logoArabic} field={fields.LogoArabic} />
            <Text tag="div" className={styles.logoEnglish} field={fields.LogoEnglish} />
          </div>

          <Link className={styles.outlineButton} field={fields.GateLink}>
            <span>↗</span>
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link field={fields.HomeLink} />
          <Link field={fields.AboutLink} />
          <Link field={fields.ServicesLink} />
          <Link field={fields.ContactLink} />
        </nav>

        <div className={styles.right}>
          <Link className={styles.language} field={fields.LanguageLink} />

          <Link className={styles.loginButton} field={fields.LoginLink}>
            <span>↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}