function mango(quantity, price){
  return (quantity - Math.trunc(quantity / 3)) * price;
}