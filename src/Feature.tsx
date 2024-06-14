import { ReactNode } from 'react';
import { useFeature } from './useFeature';
import React from 'react';

type FeatureProps = {
  name: string;
  children: ReactNode | ((isEnabled: boolean) => ReactNode);
};

export function Feature({ name, children }: FeatureProps) {
  const isEnabled = useFeature(name);

  if (typeof children === 'function') {
    return <React.Fragment>{children(isEnabled)}</React.Fragment>;
  }

  return isEnabled ? <>{children}</> : null;
}
