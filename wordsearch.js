const wordSearch = (letters, word) => {
    if (word.length < 1 || letters.length === 0) {
      return false
    }
  
     for(i = 0; i < letters.length; i++) {
       if(letters[i].length === 0) {
        return false
       }
     }
  
    let r = ' '
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
      if (l.includes(word)) {
        r = true
      }
    }
  
    const letters2 = []
  
    for (let x = 0; x < letters[0].length; x++) {
      const submatrix = []
      letters2.push(submatrix)
    }
    for (i = 0; i < letters.length; i++) {
      for (let j = 0; j < letters[0].length; j++) {
        letters2[j][i] = letters[i][j]
      }
    }
  
    const verticalJoin = letters2.map(ls => ls.join(''))
    for (l of verticalJoin) {
      if (l.includes(word)) {
        r = true
      }
    }
  
    if (r !== true) {
      r = false
    }
  
    return r
  }
  
  module.exports = wordSearch
  
