// src/components/SimpleVariant/SimpleVariant.tsx

import React from 'react';
import { Field, Text } from '@sitecore-content-sdk/nextjs';

type VariantName = 'default' | 'titleOnly' | 'descriptionOnly';

type SimpleVariantProps = {
  fields?: {
    Title?: Field<string>;
    Description?: Field<string>;
    Variant?: Field<string>;
  };
  params?: {
    styles?: string;
    RenderingIdentifier?: string;
    Variant?: string;
  };
};

const normalizeVariant = (value?: string): VariantName => {
  const normalized = value?.trim().toLowerCase();

  switch (normalized) {
    case 'titleonly':
    case 'title-only':
      return 'titleOnly';

    case 'descriptiononly':
    case 'description-only':
      return 'descriptionOnly';

    default:
      return 'default';
  }
};

const resolveVariant = (props: SimpleVariantProps): VariantName => {
  return normalizeVariant(props.params?.Variant || props.fields?.Variant?.value);
};

const EmptyState = ({ params }: SimpleVariantProps): React.ReactElement => {
  return (
    <div className={`component SimpleVariant ${params?.styles || ''}`}>
      <div className="component-content">
        <span className="is-empty-hint">SimpleVariant</span>
      </div>
    </div>
  );
};

const DefaultVariant = ({ fields }: SimpleVariantProps): React.ReactElement | null => {
  if (!fields) return null;

  return (
    <>
      {fields.Title && <Text tag="h2" field={fields.Title} />}
      {fields.Description && <Text tag="p" field={fields.Description} />}
    </>
  );
};

const TitleOnlyVariant = ({ fields }: SimpleVariantProps): React.ReactElement | null => {
  if (!fields?.Title) return null;

  return <Text tag="h2" field={fields.Title} />;
};

const DescriptionOnlyVariant = ({ fields }: SimpleVariantProps): React.ReactElement | null => {
  if (!fields?.Description) return null;

  return <Text tag="p" field={fields.Description} />;
};

const SimpleVariant = (props: SimpleVariantProps): React.ReactElement => {
  if (!props.fields) {
    return <EmptyState {...props} />;
  }

  const id = props.params?.RenderingIdentifier;
  const variant = resolveVariant(props);

  const VariantComponent =
    {
      default: DefaultVariant,
      titleOnly: TitleOnlyVariant,
      descriptionOnly: DescriptionOnlyVariant,
    }[variant] || DefaultVariant;

  return (
    <section
      id={id || undefined}
      className={`component SimpleVariant ${props.params?.styles || ''}`}
    >
      <div className="component-content">
        <VariantComponent {...props} />
      </div>
    </section>
  );
};

/* ========================= */
/* Variant Exports           */
/* ========================= */

export const Default = (props: SimpleVariantProps) => (
  <SimpleVariant
    {...props}
    params={{ ...props.params, Variant: 'default' }}
  />
);

export const titleOnly = (props: SimpleVariantProps) => (
  <SimpleVariant
    {...props}
    params={{ ...props.params, Variant: 'titleOnly' }}
  />
);

export const descriptionOnly = (props: SimpleVariantProps) => (
  <SimpleVariant
    {...props}
    params={{ ...props.params, Variant: 'descriptionOnly' }}
  />
);

export default SimpleVariant;