export const utilService = {
  makeId,
};

function makeId(length: number = 6): string {
  let txt = '';
  const possible = '0123456789';
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}
