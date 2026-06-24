import { JSX } from 'react';
import {
  NextImage as ContentSdkImage,
  RichText as ContentSdkRichText,
  Link as ContentSdkLink,
  ImageField,
  Field,
  LinkField,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  PromoIcon: ImageField;
  PromoText: Field<string>;
  PromoLink: LinkField;
  PromoText2: Field<string>;
}

type PromoProps = {
  fields?: Fields;
};

export default function Promo(props: PromoProps): JSX.Element {
  const { fields } = props;

  if (!fields) {
    return <div style={{ padding: 24 }}>Promo: No fields received</div>;
  }

  return (
    <article className="component promo">
      <figure className="field-promoicon">
        <ContentSdkImage field={fields.PromoIcon} />
      </figure>

      <div className="field-promotext">
        <ContentSdkRichText field={fields.PromoText} />
      </div>

      <div className="field-promolink">
        <ContentSdkLink field={fields.PromoLink} />
      </div>

      <div className="field-promotext">
        <ContentSdkRichText field={fields.PromoText2} />
      </div>
    </article>
  );
}