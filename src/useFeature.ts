import { useFeatureFlags } from './FeatureFlagContext';

export function useFeature(name: string) {
  const featureFlags = useFeatureFlags();

  if (Array.isArray(featureFlags)) {
    return featureFlags.includes(name);
  }

  return Boolean(featureFlags[name]);
}
