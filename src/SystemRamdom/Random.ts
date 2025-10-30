export class Ramdom {
  public static randomizar(minimo: number, maximo: number): number {
    const valorSorteado = minimo + Math.random() * (maximo - minimo);
    return Math.round(valorSorteado);
  }
}