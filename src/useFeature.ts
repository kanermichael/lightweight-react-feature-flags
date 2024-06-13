import { useFeatureFlags, Features } from './FeatureFlagContext';

export function useFeature<T extends string>(name: T): boolean {
  const featureFlags = useFeatureFlags<T>();

  if (Array.isArray(featureFlags)) {
    return featureFlags.includes(name as unknown as string);
  }

  return Boolean((featureFlags as Features<T>)[name]);
}
