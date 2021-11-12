export function capitalizeFirstChar(str: string) {
  return getFirstCharWithUpperCase(str) + str.slice(1).toLowerCase()
}

export function getFirstCharWithUpperCase(str: string) {
  return str.charAt(0).toUpperCase()
}
