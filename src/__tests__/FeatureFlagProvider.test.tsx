import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FeatureFlagProvider, useFeatureFlags } from '../FeatureFlagContext';

const TestComponent: React.FC = () => {
  const featureFlags = useFeatureFlags();
  return (
    <div>
      {Object.entries(featureFlags).map(([feature, isEnabled]) => (
        <div key={feature} data-testid={feature}>
          {feature}: {isEnabled ? 'Enabled' : 'Disabled'}
        </div>
      ))}
    </div>
  );
};

describe('FeatureFlagProvider and useFeatureFlags', () => {
  it('should provide feature flags correctly when given as an array', () => {
    const features = ['feature1', 'feature2'];

    render(
      <FeatureFlagProvider features={features}>
        <TestComponent />
      </FeatureFlagProvider>
    );

    expect(screen.getByTestId('feature1')).toHaveTextContent('feature1: Enabled');
    expect(screen.getByTestId('feature2')).toHaveTextContent('feature2: Enabled');
  });

  it('should provide feature flags correctly when given as an object', () => {
    const features = {
      feature1: true,
      feature2: false,
    };

    render(
      <FeatureFlagProvider features={features}>
        <TestComponent />
      </FeatureFlagProvider>
    );

    expect(screen.getByTestId('feature1')).toHaveTextContent('feature1: Enabled');
    expect(screen.getByTestId('feature2')).toHaveTextContent('feature2: Disabled');
  });
});
