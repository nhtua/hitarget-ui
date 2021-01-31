import {dehumanize} from '@/helpers/time'

describe('Dehumanize Single Time', () => {
  it('Level 0 - seconds', () => {
    let input = '15 seconds'
    const exp = 15
    expect(dehumanize(input)).toEqual(exp)

    input = '15 seconds'
    expect(dehumanize(input)).toEqual(exp)

    input = '15seconds'
    expect(dehumanize(input)).toEqual(exp)

    input = '15second'
    expect(dehumanize(input)).toEqual(exp)

    input = '15sec'
    expect(dehumanize(input)).toEqual(exp)

    input = '15s'
    expect(dehumanize(input)).toEqual(exp)
  })
  it('Level 1 - minutes', () => {
    const input1 = '5 minutes'
    const exp = 5 * 60
    expect(dehumanize(input1)).toEqual(exp)

    const input2 = '5m'
    expect(dehumanize(input2)).toEqual(exp)
  })
  it('Level 2 - hours', () => {
    const exp = 3 * 60 * 60

    const input1 = '3 hours'
    expect(dehumanize(input1)).toEqual(exp)

    const input2 = '3h'
    expect(dehumanize(input2)).toEqual(exp)
  })
})


describe("Dehumanize complex time", () => {
  it("Level 1 - Long format", ()=>{
    const input = "2 minutes 3 seconds"
    expect(dehumanize(input)).toEqual(2 * 60 + 3)
  })
  it("Level 1 - Long format extended", ()=>{
    const input = "2 hours, 30 minute, 4seconds"
    expect(dehumanize(input)).toEqual(2*60*60 + 30*60 + 4)
  })
})
