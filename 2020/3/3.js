const common = require('../../common.js');

function problem1() {
  common.readFile('./input.txt').then(data => {
    var map = []
    data.forEach((x, i) => {
      var line = []
      for(var j = 0; j<data[i].length; j++) {
        line.push(data[i].charAt(j))
      }
      map.push(line)
    });
    var trees = 0;
    for(var i = 0;i<map.length;i++){
      var temp = map[i][(3*i)%map[i].length]
      if(temp == "#") trees++
    }
    console.log("Problem 1 - " + trees)
  })
}

function problem2() {
  common.readFile('./input.txt').then(data => {
    var map = []
    data.forEach((x, i) => {
      var line = []
      for(var j = 0; j<data[i].length; j++) {
        line.push(data[i].charAt(j))
      }
      map.push(line)
    });
    var answer = path(1, 1, map) * path(3, 1, map) * path(5, 1, map) * path(7, 1, map) * path(1, 2, map)
    console.log("Problem 2 - " + answer)
  })

  function path(right, down, map) {
    var trees = 0;
    for(var i = 0;i<map.length;i+=down){
      var temp = map[i][(right*(i/down))%map[i].length]
      if(temp == "#") trees++
    }
    return trees
  }
}

problem1()
problem2()
