import React from 'react';
import { Text, Image, Field, ImageField } from '@sitecore-content-sdk/nextjs';
import styles from './CollaborationsSection.module.css';

type LogoItem = {
  id?: string;
  fields?: {
    Logo?: ImageField;
    CtaLink?: {
      value?: {
        href?: string;
        target?: string;
        title?: string;
      };
    };
  };
};

type CollaborationsSectionProps = {
  fields?: {
    Title?: Field<string>;
    Logoes?: LogoItem[];
  };
  params?: {
    styles?: string;
    RenderingIdentifier?: string;
  };
};

export const Default = ({ fields, params }: CollaborationsSectionProps): React.ReactElement => {
  const id = params?.RenderingIdentifier;

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
    <section
      id={id || undefined}
      className={`${styles.section} ${params?.styles ?? ''}`}
    >
      <Text tag="h2" field={fields.Title} />

      <div className={styles.logos}>
        {fields.Logoes?.map((item, index) => {
          const href = item.fields?.CtaLink?.value?.href || '#';

          return (
            <a
              key={item.id || index}
              href={href}
              target={item.fields?.CtaLink?.value?.target}
              className={styles.logoItem}
            >
              <Image field={item.fields?.Logo} />
            </a>
          );
        })}
      </div>
    </section>
  );
};