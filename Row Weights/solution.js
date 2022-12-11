function rowWeights(array){
  const team1 = array.filter((e, i) => i % 2 === 0 )
  const sum1 = team1.length ? team1.reduce((a, b) => a + b) : 0;
  const team2 = array.filter((e, i) => i % 2 !== 0 )
  const sum2 = team2.length ? team2.reduce((a, b) => a + b) : 0;
  return [sum1, sum2]
}