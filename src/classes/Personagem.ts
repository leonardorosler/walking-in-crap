export class Personagem {
  constructor(
    protected _nome: string,
    protected _forca: number,
    protected _habilidadeMental: number,
    protected _poderDeAtaque: number,
    protected _esquiva: number,
    protected _resistencia: number,
    protected _vidaAtual: number,
    protected _vidaMaxima: number
  ) {}

  public get nome(): string { return this._nome; }
  public get vidaAtual(): number { return this._vidaAtual; }
  public set vidaAtual(v: number) { this._vidaAtual = v; }
  public get esquiva(): number { return this._esquiva; }
  public get resistencia(): number { return this._resistencia; }
  public get poderDeAtaque(): number { return this._poderDeAtaque; }

  public resumo(): string {
    return `${this._nome}: ${this._vidaAtual.toFixed(1)}/${this._vidaMaxima.toFixed(1)}`;
  }

  public atacar(oponente: Personagem): void {
    console.warn(`${this._nome} tentou atacar ${oponente.nome} — comportamento padrão.`);
  }

  public contraAtacar(oponente: Personagem): void {
    console.warn(`${this._nome} tentou contra-atacar ${oponente.nome} — comportamento padrão.`);
  }

  public aprimorarHabilidadePrincipal(): void {
    console.warn(`${this._nome} tentou aprimorar habilidade principal — comportamento padrão.`);
  }

  public regenerarVida(): void {
    console.warn(`${this._nome} tentou regenerar vida — comportamento padrão.`);
  }
}
