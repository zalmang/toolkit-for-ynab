export function isFeatureEnabled(setting: FeatureSetting) {
  return (
    (typeof setting === 'boolean' && setting) || (typeof setting === 'string' && setting !== '0') // assumes '0' means disabled
  );
}
