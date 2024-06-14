import { useFeatureFlags } from './FeatureFlagContext';

export function useFeature(name: string): boolean {
  const featureFlags = useFeatureFlags();

  if (Array.isArray(featureFlags)) {
    return featureFlags.includes(name);
  }

  return Boolean(featureFlags[name]);
}
