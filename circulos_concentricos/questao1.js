/* 
 * Qual a área da parte laranja da figura abaixo, sabendo que ela é formada 
 * por dois círculos concêntricos, um de raio 10 cm e outro de raio 15 cm? 
 * Considere π = 3,14.
 */

const {pow, sqrt} = Math;
const pi = 3.14;

exports.raio = (area) => sqrt( area / 3.1);

exports.area = (raioMaior, raioMenor) => {
    
    let areaMaior = pi * (pow(raioMaior, 2));
    
    let areaMenor = pi * (pow(raioMenor, 2));
    
    let result = areaMaior - areaMenor;
    
    return result;
};
