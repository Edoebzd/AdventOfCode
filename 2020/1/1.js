const common = require('../../common.js');

function problem1() {
  common.readFile('./input.txt').then(data => {
    data = data.map(x => parseInt(x)) //conversione stringa - int
    data.sort((a, b) => {return a-b}) //ordinamento ordine crescente

    var flag = false
    for(var last = data.length-1; last>=0; last--) {
      for(var first = 0; first<data.length; first++){
        if(last == first) continue
        if(data[last] + data[first] == 2020) {
          flag = true
          console.log("Problem 1 - " + data[last]*data[first])
          break
        }
        if(data[last] + data[first] > 2020) break
      }
      if(flag) break
    }

  })
}

function problem2() {
  common.readFile('./input.txt').then(data => {
    data = data.map(x => parseInt(x)) //conversione stringa - int
    data.sort((a, b) => {return a-b}) //ordinamento ordine crescente

    var flag = false
    for(var last = data.length-1; last>=0; last--) {
      for(var middle = 0; middle<data.length; middle++) {
        for(var first = 0; first<data.length; first++) {
          if(first == middle || middle == last || first == last) continue
          if(data[last] + data[middle] + data[first] == 2020) {
            flag = true
            console.log("Problem 2 - " + data[last]*data[middle]*data[first])
            break
          }
          if(data[last] + data[middle] + data[first] > 2020) break
        }
        if(data[last] + data[middle] > 2020) break
        if(flag) break
      }
      if(flag) break
    }
  })
}





problem1()
problem2()
