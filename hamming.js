//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (dna, rna) => {
  let a = 0
  if(dna == '' && rna == '') {
    return 0
  }
   if(dna == rna) {
    return 0
  }
  else if(dna.length != rna.length) {
    return 0
  }
  else if(dna != rna) {
    dna.split('').forEach(e1 => {
      rna.split('').forEach((e2) => {
        if(e1 === e2) {
          return 0
        }
        else {
          return a++;
        }
      })
    });
  }
};
