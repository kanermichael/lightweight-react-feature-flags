import React, { ReactNode, createContext, useContext } from 'react';

export type Features<T extends string> = {
  [featureName in T]: boolean | Features<T>;
};

export type FeatureFlags<T extends string> = T[] | Features<T>;

type ProviderProps<T extends string> = {
  features: FeatureFlags<T>;
  children: ReactNode;
};

const FeatureFlagContext = createContext<FeatureFlags<string>>({});

export function FeatureFlagProvider<T extends string>({ features, children }: ProviderProps<T>) {
  return <FeatureFlagContext.Provider value={transformFeatureFlags(features)}>{children}</FeatureFlagContext.Provider>;
}

function transformFeatureFlags<T extends string>(features: FeatureFlags<T>) {
  if (!Array.isArray(features)) return features;
  return Object.fromEntries(features.map((feature) => [feature, true]));
}

export function useFeatureFlags() {
  return useContext(FeatureFlagContext);
}
