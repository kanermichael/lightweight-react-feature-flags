import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { renderHook } from '@testing-library/react-hooks';
import { FeatureFlagProvider } from '../FeatureFlagContext';
import { useFeature } from '../useFeature';

describe('useFeature', () => {
  it('should return true for an enabled feature when given an object', () => {
    const features = { feature1: true, feature2: false };

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FeatureFlagProvider features={features}>{children}</FeatureFlagProvider>
    );

    const { result } = renderHook(() => useFeature('feature1'), { wrapper });

    expect(result.current).toBe(true);
  });

  it('should return false for a disabled feature when given an object', () => {
    const features = { feature1: true, feature2: false };

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FeatureFlagProvider features={features}>{children}</FeatureFlagProvider>
    );

    const { result } = renderHook(() => useFeature('feature2'), { wrapper });

    expect(result.current).toBe(false);
  });

  it('should return true for an enabled feature when given an array', () => {
    const features = ['feature1', 'feature2'];

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FeatureFlagProvider features={features}>{children}</FeatureFlagProvider>
    );

    const { result } = renderHook(() => useFeature('feature1'), { wrapper });

    expect(result.current).toBe(true);
  });

  it('should return false for a non-existent feature when given an array', () => {
    const features = ['feature1', 'feature2'];

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FeatureFlagProvider features={features}>{children}</FeatureFlagProvider>
    );

    const { result } = renderHook(() => useFeature('feature3'), { wrapper });

    expect(result.current).toBe(false);
  });
});
