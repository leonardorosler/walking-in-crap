
import { Personagem } from "../classes/Personagem";
import { Padre } from "../classes/Padre";
import { Guerreiro } from "../classes/Guerreiro";
import { Ramdom } from "../SystemRamdom/Ramdom";
import promptSync = require("prompt-sync")

const teclado = promptSync();

let personagens: Personagem[] = [];
personagens.push(new Padre("Goldmoon"));
personagens.push(new Guerreiro("Conan"));
personagens.push(new Padre("Profeta Valen"));
personagens.push(new Guerreiro("Genghis Khan"));
personagens.push(new Guerreiro("Xena"));

while (true) {
  console.log(`===== Personagens vivos (${personagens.length}) =====`);
  personagens.forEach((personagem) => console.log(personagem.resumo()));
  if (personagens.length === 1) break;
  console.log("=============================\n");

  teclado("Tecle ENTER para rodar o próximo round\n");
  try {
    const atacantePosicao = Ramdom.randomizar(0, personagens.length - 1);
    const atacadoPosicao = Ramdom.randomizar(0, personagens.length - 1);

    if (atacantePosicao !== atacadoPosicao) {
      const atacante = personagens[atacantePosicao];
      const atacado = personagens[atacadoPosicao];
      if (!atacante || !atacado) {
        personagens = personagens.filter(p => p.vidaAtual > 0);
        continue;
      }

      atacante.atacar(atacado);
      console.log(atacante.resumo());
      console.log(atacado.resumo());
      console.log("\n");
      console.log(".".repeat(20));
    }
  } catch (e) {
    personagens = personagens.filter(p => p.vidaAtual > 0);
    console.log((e as any).message);
  }
}

if (personagens.length > 0) {
  const vencedor = personagens[0];
  if (vencedor) {
    console.log(`\nO vencedor foi \x1b[31m ${vencedor.nome}\x1b[0m`);
  } else {
    console.log("\nNão houve vencedor. Todos os personagens morreram.");
  }
} else {
  console.log("\nNão houve vencedor. Todos os personagens morreram.");
}
 