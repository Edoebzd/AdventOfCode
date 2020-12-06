const common = require('../../common.js');

function problem1() {
  common.readFile('./input.txt').then(data => {
    var passport = {}
    var list = []
    data.forEach(x => {
      if(!x) {
        list.push(passport)
        passport = {}
      } else {
        let temp = x.split(" ")
        temp.forEach(x => {
          passport[x.slice(0, 3)] = x.slice(4)
        });
      }
    });
    list.push(passport) //last passport
    var valid = 0
    list.forEach(x => {
      if(
        x.hasOwnProperty("byr") &&
        x.hasOwnProperty("iyr") &&
        x.hasOwnProperty("eyr") &&
        x.hasOwnProperty("hgt") &&
        x.hasOwnProperty("hcl") &&
        x.hasOwnProperty("ecl") &&
        x.hasOwnProperty("pid")
      ) valid++
    });
    console.log("Problem 1 - " + valid)
  })
}

function problem2() {
  common.readFile('./input.txt').then(data => {
    var passport = {}
    var list = []
    data.forEach(x => {
      if(!x) {
        list.push(passport)
        passport = {}
      } else {
        let temp = x.split(" ")
        temp.forEach(x => {
          passport[x.slice(0, 3)] = x.slice(4)
        });
      }
    });
    list.push(passport) //last passport
    var valid = 0
    list.forEach(x => {
      if(
        x.hasOwnProperty("byr") &&
        x.hasOwnProperty("iyr") &&
        x.hasOwnProperty("eyr") &&
        x.hasOwnProperty("hgt") &&
        x.hasOwnProperty("hcl") &&
        x.hasOwnProperty("ecl") &&
        x.hasOwnProperty("pid")
      ) {
        if(
          (x.byr >= 1920 && x.byr <= 2002) &&
          (x.iyr >= 2010 && x.iyr <= 2020) &&
          (x.eyr >= 2020 && x.eyr <= 2030) &&
          ( (x.hgt.slice(-2) == "cm" && x.hgt.slice(0, 3) >= 150 && x.hgt.slice(0, 3) <= 193) ||
            (x.hgt.slice(-2) == "in" && x.hgt.slice(0, 2) >= 59 && x.hgt.slice(0, 2) <= 76)
          ) &&
          (x.hcl.charAt(0) == "#" && x.hcl.length == 7 && RegExp("[0-9a-f]").test(x.hcl.slice(-6))) &&
          (x.ecl == "amb" || x.ecl == "blu" || x.ecl == "brn" || x.ecl == "gry" || x.ecl == "grn" || x.ecl == "hzl" || x.ecl == "oth") &&
          (x.pid.length == 9 && RegExp("[0-9]").test(x.pid))
        ) valid++
      }
    });
    console.log("Problem 2 - " + valid)
  })
}

problem1()
problem2()
