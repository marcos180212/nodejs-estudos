/* 
 * Na figura a seguir, o comprimento do segmento CA é 8 cm, e o comprimento do 
 * segmento CB é 10 cm. Qual é a área da figura laranja sabendo que ela é parte 
 * de uma coroa circular? Considere π = 3,1.
 */

const {pow} = Math;
const pi = 3.1;
const circunferencia = 360;

exports.calcular = (raioMaior, raioMenor, angulo) => {
    
    let areaTotalCirculoMaior = pi*(pow(raioMaior, 2));
    
    let areaTotalCirculoMenor = pi*(pow(raioMenor, 2));
    
    let coroaCircular = areaTotalCirculoMaior - areaTotalCirculoMenor;
    
    let result = coroaCircular * angulo / circunferencia;
    
    return result;
};