const printobject = { name: "BlackFlux", number: 9597465677, location: "Tiruchengode" }
function myfunction() {

  let x=Object.keys(printobject);
  let y =Object.values(printobject);
   console.log("Keys:", x)
   console.log("Values:", y)
}
myfunction();