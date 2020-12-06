const common = require('../../common.js');

function problem1() {
  common.readFile('./input.txt').then(data => {
    let maxId = -1
    data.forEach(ticket => {
      let row = ticket.slice(0, 7)
      let column = ticket.slice(-3)
      row = row.replace(/B/g, "1")
      row = row.replace(/F/g, "0")
      column = column.replace(/R/g, "1")
      column = column.replace(/L/g, "0")
      row = parseInt(row, 2)
      column = parseInt(column, 2)
      maxId = Math.max(maxId, (row*8)+column)
    });
    console.log("Problem 1 - " + maxId)
  })
}

function problem2() {
  common.readFile('./input.txt').then(data => {
    var seats = Array(128).fill().map(()=>Array(8).fill()) //empty matrix
    data.forEach(ticket => {
      let row = ticket.slice(0, 7)
      let column = ticket.slice(-3)
      row = row.replace(/B/g, "1")
      row = row.replace(/F/g, "0")
      column = column.replace(/R/g, "1")
      column = column.replace(/L/g, "0")
      row = parseInt(row, 2)
      column = parseInt(column, 2)
      seats[row][column] = true
    });
    var empty = []
    for(var i = 1; i<seats.length-1; i++){
      for(var j = 0; j<seats[i].length; j++){
        if(!seats[i][j]) empty.push({row: i, column: j})
      }
    }
    for(var i = 1; i<empty.length-1; i++){
      if(empty[i-1].row == empty[i].row-1 || empty[i].row == empty[i+1].row-1 || empty[i-1].row == empty[i].row || empty[i].row == empty[i+1].row ) continue
      console.log("Problem 2 -", (empty[i].row*8)+empty[i].column)
    }

  })
}

problem1()
problem2()
