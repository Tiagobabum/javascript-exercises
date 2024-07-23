const reverseString = function(string) {
separado = string.split('')
palavra = []
for (let i = (separado.length - 1); i >= 0; i--) {
    const letra = separado[i]
    palavra.push(letra);
    

   
}
let reverso = palavra.join('');
   return reverso

};

// Do not edit below this line
module.exports = reverseString;
