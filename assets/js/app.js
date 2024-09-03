// 1) Задаётся сторона квадрата. Найти его периметр;
let quadSide = +prompt("1. Enter quad's side length in cm (centimetre):");
let perimeter = quadSide * 4;
console.log(`1. Quad's perimeter equals: ${perimeter}`);

// 2) Задаётся длина ребра куба. Найти объем куба и площадь его боковой поверхности;
let qubeRib = +prompt("2. Set lenght of qube's rib in m (meters):");
let square = qubeRib ** 2;
let volume = qubeRib ** 3;
console.log(`2.1. Square of qube's rib equals: ${square} m2`);
console.log(`2.2. Volume equals: ${volume} qubic  m3 ` );

// 3) Задаётся радиус окружности. Найти длину окружности и площадь круга;
let radius = +prompt("3. Enter circle's radius in cm (centimeters), please:");
let diameter = radius * 2;
let circleLenght = 3.14 * diameter;
let circleSquare = 3.14 * (radius ** 2);
console.log(`3.1 Circle's lenght equals: ${circleLenght}`);
console.log(`3.2 Circle's sqaure equals: ${circleSquare}`);

// 4) Задаются объем и масса вещества. Определить плотность материала этого вещества;
let substanceMass = +prompt("4.1. Set substance's mass, please (in kg):");
let substanceVolume = +prompt("4.2. Enter substance's volume, please (in m3):"); 
let substanceDensity =  substanceMass / substanceVolume;
console.log(`4. Density (плотность) of substance equals: ${substanceDensity} kg/m3`);

// 5) Известны количество жителей в государстве и площадь его территории (в км2). Определить плотность населения в этом государстве.
let population = +prompt("5.1. Set the population (quantity):");
let countrySquare = +prompt("5.2 Enter the square of country's territory (in km2): ");
let populationDensity = population / countrySquare;
console.log(`5. Population's density equals: ${populationDensity} persons per km2`);

// 6). Даны катеты прямоугольного треугольника. Найти его гипотенузу.
let triangleSideOne = +prompt("6.1. Set the first side of triangle (in cm):");
let triangleSideTwo = +prompt("6.2. Enter the second side of triangle, please (in cm):");
let hypotenuseSquareRoot = (triangleSideOne ** 2) + (triangleSideTwo ** 2);
let hypotenuse = Math.sqrt(hypotenuseSquareRoot);
console.log(`6. Hypotenuse equals: ${hypotenuse} cm`);

// 7) Рассчитать значение y, при любых введённых значениях а:
let a = +prompt('7. Set the "a" value:');
let y = (a ** 2 + 10) / (Math.sqrt(a ** 2 + 1));
console.log(`7. If "a" equals ${a}, "y" equals: ${y}`);