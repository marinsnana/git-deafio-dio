const saldos = [100,-1,-2,-9,50,10,-8];

function retornarSaldosPositivos(saldos) {
  let sp = [];
  for(let i = 0; i < saldos.length; i++){
    if (saldos[i] > 0) {
      sp.push(saldos[i]);
    }
  }
  return sp;
}

console.log(retornarSaldosPositivos(saldos));