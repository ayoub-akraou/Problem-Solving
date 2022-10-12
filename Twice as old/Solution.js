function twiceAsOld(dadYearsOld, sonYearsOld) {
  if(dadYearsOld >= 2 * sonYearsOld) 
    return( dadYearsOld - 2 * sonYearsOld);
  if(dadYearsOld <= 2 * sonYearsOld) 
    return (2 * sonYearsOld - dadYearsOld) ;
}