const common = require('../../common.js');

function problem1() {
  common.readFile('./input.txt').then(data => {
    let groups = []
    let tempGroup = []
    data.forEach(x => {
      if(!x) groups.push(tempGroup), tempGroup = []
      else tempGroup.push(x)
    });
    groups.push(tempGroup) //last group

    let sum = 0
    groups.forEach(g => {
      if(g.length == 1) sum += g[0].length //only one person
      else {
        let yes = {}
        g.forEach(person => {
          for(const answer of person) yes[answer] = true;
        });
        sum += Object.keys(yes).length //count fields
      }
    });
    console.log("Problem 1 - " + sum)
  })
}

function problem2() {
  common.readFile('./input.txt').then(data => {
    let groups = []
    let tempGroup = []
    data.forEach(x => {
      if(!x) groups.push(tempGroup), tempGroup = []
      else tempGroup.push(x)
    });
    groups.push(tempGroup) //last group

    let sum = 0
    groups.forEach(g => {
      if(g.length == 1) sum += g[0].length //only one person
      else {
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        for(const letter of alphabet) {
          let flag = true //all answer yes
          for(const person of g) {
            if(person.indexOf(letter) == -1) {
              flag = false;
              break
            }
          }
          if(flag) sum++
        }
      }
    });
    console.log("Problem 2 - " + sum)
  })
}

problem1()
problem2()
