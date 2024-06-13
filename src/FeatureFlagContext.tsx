import React, { ReactNode, createContext, useContext } from 'react';

export type Features = {
  [featureName: string]: boolean | Features;
};

export type FeatureFlags = string[] | Features;

type ProviderProps = {
  features: FeatureFlags;
  children: ReactNode;
};

const FeatureFlagContext = createContext<FeatureFlags>({});

export function FeatureFlagProvider({ features, children }: ProviderProps) {
  return <FeatureFlagContext.Provider value={transformFeatureFlags(features)}>{children}</FeatureFlagContext.Provider>;
}

function transformFeatureFlags(features: FeatureFlags) {
  if (!Array.isArray(features)) return features;
  return Object.fromEntries(features.map((feature) => [feature, true]));
}

export function useFeatureFlags() {
  return useContext(FeatureFlagContext);
}
