import { Personagem } from "./Personagem";
import { Ramdom } from "../SystemRamdom/Ramdom";

export class Padre extends Personagem {
  constructor(nome: string) {
    super(nome + " Padre", 0, 0, 0, 0, 0, 0, Ramdom.randomizar(1, 8_000));
    this._vidaAtual = this._vidaMaxima;
  }

  public atacar(oponente: Personagem): void {
    console.log(`${this._nome} tentou converter ${oponente.nome}`);
    this._ataque(oponente);
    oponente.contraAtacar(this);
  }

  public contraAtacar(oponente: Personagem): void {
    console.log(`${this._nome} tentou converter ${oponente.nome}`);
    this._ataque(oponente);
  }

  public aprimorarHabilidadePrincipal(): void {
    throw new Error("Este personagem não pode executar esta ação");
  }

  public regenerarVida(): void {
    this._vidaAtual = Math.min(this._vidaMaxima, this._vidaAtual + this._vidaMaxima * 0.1);
  }

  protected _ataque(oponente: Personagem): void {
    const acertou: boolean = Ramdom.randomizar(0, 100) < 40;
    if (acertou) {
      oponente.vidaAtual = 0;
      throw new Error(`${oponente.nome} foi convertido`);
    }
  }
}
