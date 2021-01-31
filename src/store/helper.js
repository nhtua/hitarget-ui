export function jwtHeader(token) {
  return {headers: {"Authorization": "Bearer " + token}}
}
