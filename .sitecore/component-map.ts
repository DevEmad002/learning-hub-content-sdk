// Below are built-in components that are available in the app, it's recommended to keep them as is

import { BYOCServerWrapper, NextjsContentSdkComponent, FEaaSServerWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';

// end of built-in components
import * as VariantTest from 'src/components/VariantTest/VariantTest';
import * as SolutionsSection from 'src/components/SolutionsSection/SolutionsSection';
import * as SimpleVariant from 'src/components/SimpleVariant/SimpleVariant';
import * as Promo from 'src/components/promo/Promo';
import * as PartialDesignDynamicPlaceholder from 'src/components/partial-design-dynamic-placeholder/PartialDesignDynamicPlaceholder';
import * as LandingHero from 'src/components/LandingHero/LandingHero';
import * as InsightsStatsSection from 'src/components/InsightsStatsSection/InsightsStatsSection';
import * as HowItWorksSection from 'src/components/HowItWorksSection/HowItWorksSection';
import * as HeroBanner from 'src/components/HeroBanner/HeroBanner';
import * as Header from 'src/components/Header/Header';
import * as FeatureCard from 'src/components/FeatureCard/FeatureCard';
import * as CollaborationsSection from 'src/components/CollaborationsSection/CollaborationsSection';
import * as ClientsSection from 'src/components/ClientsSection/ClientsSection';

export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCServerWrapper],
  ['FEaaSWrapper', FEaaSServerWrapper],
  ['Form', { ...Form, componentType: 'client' }],
  ['VariantTest', { ...VariantTest }],
  ['SolutionsSection', { ...SolutionsSection }],
  ['SimpleVariant', { ...SimpleVariant }],
  ['Promo', { ...Promo }],
  ['PartialDesignDynamicPlaceholder', { ...PartialDesignDynamicPlaceholder }],
  ['LandingHero', { ...LandingHero }],
  ['InsightsStatsSection', { ...InsightsStatsSection }],
  ['HowItWorksSection', { ...HowItWorksSection }],
  ['HeroBanner', { ...HeroBanner }],
  ['Header', { ...Header }],
  ['FeatureCard', { ...FeatureCard }],
  ['CollaborationsSection', { ...CollaborationsSection }],
  ['ClientsSection', { ...ClientsSection }],
]);

export default componentMap;
