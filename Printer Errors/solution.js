function printerError(s) {
  const correctRange = "abcdefghijklm";
  const errorsNumber = s.split("").filter(e => !correctRange.includes(e)).length;
  return errorsNumber + "/" + s.length
}