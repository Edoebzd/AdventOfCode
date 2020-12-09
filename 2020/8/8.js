const common = require('../../common.js');

function problem1() {
  common.readFile('./input.txt').then(data => {
    var program = []
    data.forEach(line => {
      let temp = line.split(" ")
      program.push({instruction: temp[0], value: parseInt(temp[1]), executed: false})
    });
    run(0, 0)

    function run(line, accumulator) {
      if(program[line].executed) return console.log("Problem 1 - "+accumulator)
      else {
        if(program[line].instruction == "acc") {
          program[line].executed = true
          run(line+1, accumulator+program[line].value)
        }
        if(program[line].instruction == "jmp") {
          program[line].executed = true
          run(line+program[line].value, accumulator)
        }
        if(program[line].instruction == "nop") {
          program[line].executed = true
          run(line+1, accumulator)
        }
      }
    }
  })
}

function problem2() {
  common.readFile('./input.txt').then(data => {
    var mainProgram = []
    data.forEach(line => {
      let temp = line.split(" ")
      mainProgram.push({instruction: temp[0], value: parseInt(temp[1]), executed: false})
    });
    var fix = tryToFix()
    run(0, 0, mainProgram)

    function run(line, accumulator, program) {
      console.log(program[line])
      if(line >= program.length) return console.log("Problem 2 - "+accumulator)
      if(program[line].executed) {
        return run(0, 0, fix.next().value)
      }
      else {
        if(program[line].instruction == "acc") {
          program[line].executed = true
          return run(line+1, accumulator+program[line].value, program)
        }
        if(program[line].instruction == "jmp") {
          program[line].executed = true
          return run(line+program[line].value, accumulator, program)
        }
        if(program[line].instruction == "nop") {
          program[line].executed = true
          return run(line+1, accumulator, program)
        }
      }
    }

    function* tryToFix() {
      var lastChanged = -1
      for(var line = 0; line<mainProgram.length; line++) {
        console.log(lastChanged, mainProgram[lastChanged])
        mainProgram.forEach(x => {x.executed = false});
        if(lastChanged != -1) { //change back (works only the first time, idk why)
          if(mainProgram[lastChanged].instruction == "nop") mainProgram[lastChanged].instruction = "jmp"
          if(mainProgram[lastChanged].instruction == "jmp") mainProgram[lastChanged].instruction = "nop"
          lastChanged = -1
        }
        if(mainProgram[line].instruction == "acc") continue
        if(mainProgram[line].instruction == "nop") {
          mainProgram[line].instruction = "jmp"
          lastChanged = line
          yield mainProgram
        }
        if(mainProgram[line].instruction == "jmp") {
          mainProgram[line].instruction = "nop"
          lastChanged = line
          yield mainProgram
        }
      }
      return console.log("End of file, cannot fix")
    }

  })
}

problem1()
problem2()
