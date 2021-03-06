// Part 1
// Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.
// The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

const Mass = [
  103450, 107815,  53774, 124794,  90372,  98169, 106910,  50087,
  104958,  71936, 118379, 122284,  55871,  91714, 120685, 117684,
  146047,  60332,  72034, 127689, 117575, 101714, 121018,  86073,
   73764, 100533, 104443, 113037,  79474, 123364, 128367,  63620,
   54004, 124093, 133256,  95915,  97442,  64267,  70823, 143108,
   86422, 118962,  66129,  69445,  51804,  56436, 117587,  64632,
  104564,  67514, 108782, 123991, 110932, 122201,  98816, 126708,
   69821,  66902,  96993,  55032, 109143,  67678,  58009,  50232,
   69841, 101922,  95832, 122820,  72056, 102557,  68727,  85192,
   74694, 142252, 140332,  53783, 123036,  88197, 148727, 138393,
   87427,  65693,  88448,  51044,  95470,  97336, 121463,  91997,
  149518,  66967, 119301, 112022,  57363, 128247, 107454,  77260,
  126346,  97658, 137578, 134743
]

let totalMass = 0;

//Mass.forEach(function(mass){
//    //divide by three and round down
//    let newMass = Math.floor(mass/3);
//    //subtract 2
//    newMass = newMass - 2;
//    totalMass = totalMass + newMass;
//    totalMass = totalMass + Math.floor(mass/3) - 2;
//})
//console.log("total Mass = " + totalMass)

// total = 3216868

// refactor
Mass.forEach(function(mass){
    totalMass += Math.floor(mass/3) - 2;
})
console.log("total Mass in part 1 = " + totalMass)

// Part 2
// A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.
// At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
// The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.

const eachModFuel = n => Math.floor(n / 3 - 2)

const fuelTotal = n => {
    const fuel = eachModFuel(n);
    return fuel > 0 ? fuel + fuelTotal(fuel) : 0;
  }

  const sumFuel = Mass
    .map(fuelTotal)
    .reduce((a,b) => a + b, 0);

  console.log("total mass in part 2 = " + sumFuel) 

// total = 4822435
