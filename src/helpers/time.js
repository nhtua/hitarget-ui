import ms from 'ms';

export function dehumanize(d) {
  d = d.toLowerCase().trim()
  const signs = d.match(/([a-z][0-9]|[a-z,]\s+[0-9])/g)
  if (signs) {
    for(let i in signs) {
      let x = ""
      if (signs[i].indexOf(' ') < 0) {
        x = signs[i].split("").join(',')  // ex 2h3m4s
      } else {
        x = signs[i].replace(/\s+/,',')
      }
      d = d.replace(new RegExp(signs[i],"g"), x)
    }
  }

  const pieces = d.split(',').filter(x=>x)
  let total = 0
  for (let i in pieces){
    total += ms(pieces[i])
  }
  return total*1/1000
}

export function seconds2string(sec) {
  return ms(sec*1000)
}
