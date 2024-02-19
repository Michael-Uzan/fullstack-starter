export const localStorageService = {
  save,
  load,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function save(key: string, value: any) {
  localStorage[key] = JSON.stringify(value);
}

function load(key: string, defaultValue = null) {
  const value = localStorage[key] || defaultValue;
  return JSON.parse(value);
}
