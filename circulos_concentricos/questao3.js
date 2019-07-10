/* 
 * Um fazendeiro resolveu marcar seus tratores pintando os pneus,
 * apenas pelo lado de fora, com uma tinta vermelha. Sabendo que 
 * o metro quadrado de tinta custa R$ 1,20, que o fazendeiro 
 * pintou 4 pneus e que a parte pintada de cada pneu representa uma 
 * coroa circular com raio menor igual a 1 metro e o raio maior igual 
 * a 1,5 metros, quanto esse fazendeiro gastou com tinta? Considere π = 3,1
 */

const {pow} = Math;

const pi = 3.1;
const preco = 1.20;

exports.calcular = (n) => {
    
    let areaMaior = pi*(pow(1.5, 2));
    
    let areaMenor = pi*(pow(1, 2));
    
    let coroaCircular = areaMaior - areaMenor;
    
    let total = coroaCircular * n;
    
    let result = total * preco;
    
    return result;
};