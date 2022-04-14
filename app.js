const converters = require('./shape-area.js');
const { circleArea, squareArea } = require('./shape-area.js');

const raio = 5;
const lado = 10;
const raio = process.argv[2];
const lado = process.argv[3];

const raio = converters.circleArea(raio);
const areaOfCircle = circleArea(raio);
const areaOfSquare = squareArea(lado);

console.log(` A area do circulo é =${areaOfCircle} `);
console.log(` A area do quadrado é =${areaOfSquare} `);