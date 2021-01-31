import ms from 'ms';

export function dehumanize(str) {
  let d = str
  const signs = d.match(/[a-z]\s+[0-9]/g)
  if (!signs) {
    for(let i in signs) {
      const x = signs[i].replace(/\s+/,',')
      d = d.replace(signs[i], x)
    }
  }
  const pieces = d.split(',').filter(x=>x)
  let total = 0
  for (let i in pieces){
    total += ms(pieces[i])
  }
  return total/1000
}
