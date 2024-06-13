import React, { ReactNode } from 'react';
import { useFeature } from './useFeature';

type FeatureProps<T extends string> = {
  name: T;
  children: ReactNode | ((isEnabled: boolean) => ReactNode);
};

export function Feature<T extends string>({ name, children }: FeatureProps<T>) {
  const isEnabled = useFeature(name);

  if (typeof children === 'function') {
    return <>{children(isEnabled)}</>;
  }

  return isEnabled ? <>{children}</> : null;
}
