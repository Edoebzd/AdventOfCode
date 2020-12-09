const common = require('../../common.js');

function problem1() {
  common.readFile('./input.txt').then(data => {
    var bags = []
    data.forEach(x => {
      let temp = x.split(" ")
      if(temp[4] == "no") bags[temp[0]+"-"+temp[1]] = [] //empty bags
      else {
        bags[temp[0]+"-"+temp[1]] = []
        let content = temp.slice(4)
        for (var i = 0; i < content.length; i+=4) {
          bags[temp[0]+"-"+temp[1]][content[i+1]+"-"+content[i+2]] = parseInt(content[i])
        }
      }
    });
    var accepted = []
    Object.keys(bags).forEach(x => {
      if(bags[x]) {
        Object.keys(bags[x]).forEach(y => {
          if(y == "shiny-gold" && accepted.indexOf(x) == -1) accepted.push(x)
        });
      }
    });
    while(true) {
      var oldLength = accepted.length
      Object.keys(bags).forEach(x => {
        if(bags[x]) {
          Object.keys(bags[x]).forEach(y => {
            if(accepted.indexOf(y) != -1 && accepted.indexOf(x) == -1) {
              accepted.push(x)
            }
          });
        }
      });
      if(oldLength == accepted.length) break
    }
    console.log("Problem 1 - "+ accepted.length)
  })
}

function problem2() {
  common.readFile('./input.txt').then(data => {
    var bags = []
    data.forEach(x => {
      let temp = x.split(" ")
      if(temp[4] == "no") bags[temp[0]+"-"+temp[1]] = [] //empty bags
      else {
        bags[temp[0]+"-"+temp[1]] = []
        let content = temp.slice(4)
        for (var i = 0; i < content.length; i+=4) {
          bags[temp[0]+"-"+temp[1]][content[i+1]+"-"+content[i+2]] = parseInt(content[i])
        }
      }
    });
    console.log("Problem 2 - "+calculateTotalBags("shiny-gold", 0))

    function calculateTotalBags(bag, total) {
      if(bags[bag]) {
        Object.keys(bags[bag]).forEach(x => {
          total += bags[bag][x]
          total += bags[bag][x] * calculateTotalBags(x, 0)    //if it contains bags add current total + sub bags total
        });
      } //return total if end of the bags tree
      return total
    }

  })
}

problem1()
problem2()
