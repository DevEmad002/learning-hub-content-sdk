import React from 'react';
import { Text, Field } from '@sitecore-content-sdk/nextjs';
import styles from './VariantTest.module.css';

type VariantTestProps = {
  fields?: {
    Title?: Field<string>;
    Description?: Field<string>;
  };
  params?: {
    styles?: string;
    RenderingIdentifier?: string;
  };
};

const Content = ({ fields }: VariantTestProps) => (
  <>
    <Text tag="h2" field={fields?.Title} />
    <Text tag="p" field={fields?.Description} />
  </>
);

export const Default = (props: VariantTestProps): React.ReactElement => {
  return (
    <section
      id={props.params?.RenderingIdentifier}
      className={`${styles.section} ${styles.default} ${props.params?.styles ?? ''}`}
    >
      <p className={styles.badge}>Variant: Default</p>
      <Content fields={props.fields} />
    </section>
  );
};

export const Dark = (props: VariantTestProps): React.ReactElement => {
  return (
    <section
      id={props.params?.RenderingIdentifier}
      className={`${styles.section} ${styles.dark} ${props.params?.styles ?? ''}`}
    >
      <p className={styles.badge}>Variant: Dark</p>
      <Content fields={props.fields} />
    </section>
  );
};

export const Orange = (props: VariantTestProps): React.ReactElement => {
  return (
    <section
      id={props.params?.RenderingIdentifier}
      className={`${styles.section} ${styles.orange} ${props.params?.styles ?? ''}`}
    >
      <p className={styles.badge}>Variant: Orange</p>
      <Content fields={props.fields} />
    </section>
  );
};