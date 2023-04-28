import * as rls from 'readline-sync';

function contarNumeros(): void {

  const cantN: number = rls.questionInt('Ingrese la cantidad de numeros a ingresar: ');

  const nums: number[] = [];

  for (let i = 0; i < cantN; i++) {
    const numero: number = rls.questionInt(`Ingrese el numero ${i+1}: `);
    nums.push(numero);
  }

  let positivos: number = 0;
  let negativos: number = 0;
  let ceros: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      positivos++;
    } else if (nums[i] < 0) {
      negativos++;
    } else {
      ceros++;
    }
  }

  console.log(`En el conjunto ingresado hay ${positivos} numeros positivos, ${negativos} numeros negativos y ${ceros} ceros.`);
}

contarNumeros();