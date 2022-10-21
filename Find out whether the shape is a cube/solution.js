var cubeChecker = function(volume, side){
  if(volume > 0 && side > 0 && volume === side ** 3) return true
  return false
};