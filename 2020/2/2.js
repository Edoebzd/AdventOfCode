const common = require('../../common.js');

function problem1() {
  common.readFile('./input.txt').then(data => {
    var password = []
    data.forEach((x) => {
      let temp = []
      temp = x.split("-")
      let temp2 = temp[1].split(" ")
      temp.pop()
      temp.push(temp2[0])
      temp.push(temp2[1].charAt(0))
      temp.push(temp2[2])
      password.push(temp)
    });
    var validPassword = 0
    password.forEach(x => {
      var counter = 0
      for(var i = 0; x[3].indexOf(x[2], i) != -1; i=x[3].indexOf(x[2], i)+1, counter++);
      if(counter >= x[0] && counter <= x[1]) validPassword++
    });
    console.log(validPassword)

  })
}

function problem2() {
  common.readFile('./input.txt').then(data => {
    var password = []
    data.forEach((x) => {
      let temp = []
      temp = x.split("-")
      let temp2 = temp[1].split(" ")
      temp.pop()
      temp.push(temp2[0])
      temp.push(temp2[1].charAt(0))
      temp.push(temp2[2])
      password.push(temp)
    });
    var validPassword = 0
    password.forEach(x => {
      if((x[3].charAt(x[0]-1) == x[2] && x[3].charAt(x[1]-1) != x[2]) || (x[3].charAt(x[0]-1) != x[2] && x[3].charAt(x[1]-1) == x[2]))
        validPassword++
    });
    console.log(validPassword)
  })
}

problem1()
problem2()
