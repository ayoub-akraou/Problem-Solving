function well(x){
  const condition = x.filter(e => e === "good").length
  return condition === 0 ?  'Fail!' : condition > 2 ? 'I smell a series!' : 'Publish!';
}