export const getValue = (getValueFn, defaultValue = undefined) => {
  try {
    return getValueFn()
  } catch (_) {
    return defaultValue
  }
}
