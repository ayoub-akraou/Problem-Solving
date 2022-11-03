function stringClean(s){
  return s.split("").filter(e => isNaN(+e) || e === " ").join("")
}