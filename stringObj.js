function splitAndMerge(string, separator) {
  let spl=string.split(" ");
  let spl2=[];
  let splJoi=spl.map(function(spl) {
  const spl2 = spl.split("");
  return spl2.join(separator);
});
  return splJoi.join(" ");
}
