import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CombustivelService {
  private resultado: number | undefined

  constructor() {
    this.resultado = undefined
  }

  calcular(alc: number, gas: number): boolean{
    if (alc > 0 && gas > 0){
      this.resultado = alc / gas
      return true
    }
    return false
  }
  obterResultado(): number | undefined{
    return this.resultado
  } 
  obterMensagem(): string | undefined{
    if (this.resultado === undefined){
      return undefined;
    }

    if (this.resultado <= 0.7){
      return 'É mais vantajoso abastecer com álcool.';
    } else {
      return 'É melhor abastecer com gasolina.';
    }
  }
}


