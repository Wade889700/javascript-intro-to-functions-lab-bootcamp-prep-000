function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function sayHiToGrandma(string){
  if (string.toLowerCase()===string){
    return 'I can\'t hear you!'
  }
  else if(string.toUpperCase()===string){
    return  "YES INDEED!"
  } 
  else{
    return "I love you, too."
  }}
  
logshout(string){
  console.log(string)
}
logWhisper(string){
  console.log(string)
}
/*describe('logShout(string)', function() {
  it('calls console.log() its one argument in all caps', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})

describe('logWhisper(string)', function() {
  it('calls console.log() its one argument in all lowercase', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})*/