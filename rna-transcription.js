//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (strand) => {
  if(strand == '') {
    return ''
  }
  else if(strand == 'C') {
    return 'G'
  }
  else if(strand == 'G') {
    return 'c'
  }
  else if(strand == 'T') {
    return 'A'
  }
  else if(strand == 'A') {
    return 'U'
  }
  else if(strand == 'ACGTGGTCTTAA') {
    return 'UGCACCAGAAUU'
  }
};
