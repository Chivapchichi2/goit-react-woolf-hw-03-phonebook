export function firsToUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function eachFirstToUpperCase(str) {
  return str.split(' ').map(firsToUpperCase).join(' ');
}
