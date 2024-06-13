# React Feature Flags

**_lightweight react feature flags_** is a lightweight React library for managing feature flags. It provides a simple context and hook-based API to enable or disable features in your React application dynamically. This package helps you manage feature releases, perform A/B testing, and control feature visibility effortlessly.

## Features

- **Context-based API**: Easily provide feature flags to your entire application using React Context.
- **Hook-based API**: Access and check feature flags within any component using custom hooks.
- **Flexible Configuration**: Define feature flags as an array or an object, supporting both simple and nested feature flags.
- **TypeScript Support**: Fully typed with TypeScript for type safety and better developer experience.
- **Tree-shakable**: Optimized for tree-shaking, ensuring minimal bundle size impact.

## Installation

```bash
npm install feature-flags
```

```bash
yarn add feature-flags
```

## Code Example

### FeatureFlagProvider

Wrap your application with the FeatureFlagProvider and define your feature flags:

```typescript
import React from 'react';
import { FeatureFlagProvider, Feature } from 'feature-flags';

const features = {
  newFeature: true,
  oldFeature: false,
};

function App() {
  return (
    <FeatureFlagProvider features={features}>
      <Feature name="newFeature">
        <div>New Feature is enabled!</div>
      </Feature>
    </FeatureFlagProvider>
  );
}

export default App;
```

### useFeature

Use the useFeature hook to check feature flags within any component:

```typescript
import React from 'react';
import { useFeature } from 'feature-flags';

function MyComponent() {
  const isFeatureEnabled = useFeature('newFeature');

  return <div>{isFeatureEnabled ? 'New Feature is active' : 'New Feature is not active'}</div>;
}

export default MyComponent;
```

### useFeatures

Use the useFeatureFlags hook to access all feature flags within any component:

```typescript
import React from 'react';
import { useFeatureFlags } from 'feature-flags';

function AllFeaturesComponent() {
  const featureFlags = useFeatureFlags();

  return (
    <div>
      {Object.keys(featureFlags).map((feature) => (
        <div key={feature}>
          {feature}: {featureFlags[feature] ? 'Enabled' : 'Disabled'}
        </div>
      ))}
    </div>
  );
}

export default AllFeaturesComponent;
```

### Render Props

The Feature component also supports the render prop pattern, allowing you to conditionally render children based on whether a feature is enabled:

```typescript
import React from 'react';
import { Feature } from 'feature-flags';

function RenderPropComponent() {
  return (
    <Feature name="newFeature">
      {(isEnabled) => <div>{isEnabled ? 'New Feature is active' : 'New Feature is not active'}</div>}
    </Feature>
  );
}

export default RenderPropComponent;
```

## API

### FeatureFlagProvider

A provider component that supplies feature flags to the rest of the app.

`features`: An array or object representing feature flags.

`children`: ReactNode to be rendered within the provider.

### Feature Component

A component that conditionally renders its children based on the feature flag.

`name`: The name of the feature flag

`children`: Can be a ReactNode or a function that receives the flag status.

### useFeature

A hook to access the status of a feature flag.

`name`: The name of the feature flag.

### useFeatureFlags

A hook to access all feature flags.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.
