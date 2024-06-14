// Feature.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FeatureFlagProvider } from '../FeatureFlagContext';
import { Feature } from '../Feature';

describe('Feature', () => {
  it('should render children when the feature is enabled', () => {
    const features = { feature1: true };

    render(
      <FeatureFlagProvider features={features}>
        <Feature name="feature1">
          <span data-testid="child">Feature is enabled</span>
        </Feature>
      </FeatureFlagProvider>
    );

    expect(screen.getByTestId('child')).toHaveTextContent('Feature is enabled');
  });

  it('should not render children when the feature is disabled', () => {
    const features = { feature1: false };

    render(
      <FeatureFlagProvider features={features}>
        <Feature name="feature1">
          <span data-testid="child">Feature is enabled</span>
        </Feature>
      </FeatureFlagProvider>
    );

    expect(screen.queryByTestId('child')).toBeNull();
  });

  it('should render function children with the correct enabled status', () => {
    const features = { feature1: true };

    render(
      <FeatureFlagProvider features={features}>
        <Feature name="feature1">
          {(isEnabled) => <span data-testid="child">{isEnabled ? 'Enabled' : 'Disabled'}</span>}
        </Feature>
      </FeatureFlagProvider>
    );

    expect(screen.getByTestId('child')).toHaveTextContent('Enabled');
  });
});
