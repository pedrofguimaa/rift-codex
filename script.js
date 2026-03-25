const regionArtBase = "https://wiki.leagueoflegends.com/en-us/Special:Redirect/file/";
const splashBase = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/";
const abilityBase = "https://raw.communitydragon.org/latest/game/assets/characters";
const ddragonVersion = "14.24.1";

const laneLabels = {
  top: "Topo",
  jungle: "Selva",
  mid: "Meio",
  adc: "ADC",
  support: "Suporte"
};

function regionArt(fileName) {
  return `url("${regionArtBase}${encodeURIComponent(fileName)}")`;
}

function regionArtUrl(fileName) {
  return `${regionArtBase}${encodeURIComponent(fileName)}`;
}

function splashArt(championKey, skin = 0) {
  return `${splashBase}${championKey}_${skin}.jpg`;
}

function abilityIcon(alias, slot) {
  return `${abilityBase}/${alias}/hud/icons2d/${alias}_${slot}.png`;
}

function ddragonChampionDataUrl(championKey) {
  return `https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/data/en_US/champion/${championKey}.json`;
}

function ddragonPassiveIcon(fileName) {
  return `https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/img/passive/${fileName}`;
}

function ddragonSpellIcon(fileName) {
  return `https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/img/spell/${fileName}`;
}

function skill(slot, name, description, note) {
  return { slot, name, description, note };
}

const regions = [
  {
    id: "all",
    name: "Todas as regioes",
    description: "Veja o atlas completo com todos os campeoes cadastrados no codice.",
    glow: "rgba(214, 180, 109, 0.22)",
    image: splashArt("Ryze")
  },
  {
    id: "demacia",
    name: "Demacia",
    description: "Honra, disciplina e uma relacao tensa com tudo o que lembra magia.",
    glow: "rgba(255, 214, 122, 0.2)",
    image: regionArtUrl("Demacia Temple Of The Lightbringers.jpg")
  },
  {
    id: "noxus",
    name: "Noxus",
    description: "Um imperio brutal, estrategico e movido pela ambicao de conquistar.",
    glow: "rgba(225, 86, 86, 0.2)",
    image: regionArtUrl("Noxus The Immortal Bastion 01.jpg")
  },
  {
    id: "ionia",
    name: "Ionia",
    description: "Beleza espiritual, equilibrio delicado e guerreiros guiados por tradicao.",
    glow: "rgba(203, 123, 255, 0.2)",
    image: regionArtUrl("Ionia The Placidium 02.jpg")
  },
  {
    id: "freljord",
    name: "Freljord",
    description: "Gelo ancestral, tribos rivais e sobrevivencia forjada em tempestade.",
    glow: "rgba(137, 205, 255, 0.22)",
    image: regionArtUrl("Freljord A Good Day 01.jpg")
  },
  {
    id: "piltover-zaun",
    name: "Piltover & Zaun",
    description: "Progresso hextec e caos quimico dividem o mesmo horizonte urbano.",
    glow: "rgba(76, 235, 184, 0.18)",
    image: regionArtUrl("Piltover Sidereal Avenue.jpg")
  },
  {
    id: "ilha-das-sombras",
    name: "Ilha das Sombras",
    description: "Ruina, nevoa e espectros presos a uma tragedia que nunca termina.",
    glow: "rgba(98, 255, 198, 0.2)",
    image: regionArtUrl("Shadow Isles The Sundered Vaults Of Arcana.jpg")
  },
  {
    id: "shurima",
    name: "Shurima",
    description: "Imperio solar, ruinas colossais e legados enterrados sob a areia.",
    glow: "rgba(255, 193, 98, 0.2)",
    image: regionArtUrl("Shurima Zoantha Cascade 01.jpg")
  },
  {
    id: "targon",
    name: "Targon",
    description: "O pico onde mortais desafiam os ceus para tocar o divino.",
    glow: "rgba(181, 176, 255, 0.18)",
    image: regionArtUrl("Targon Solari Prayer Shrine.jpg")
  }
];

const champions = [
  {
    id: "garen",
    alias: "garen",
    name: "Garen",
    title: "O Poder de Demacia",
    region: "demacia",
    className: "Lutador",
    lanes: ["top"],
    tags: ["inicio forte", "execucao", "frontline"],
    style: "Jogo direto, presenca de rota e punicao constante contra alvos expostos.",
    lore: "Filho de uma linhagem respeitada, Garen e o ideal militar de Demacia em armadura viva: disciplina, coragem e lealdade absoluta ao reino.",
    facts: [
      "Sua simplicidade em combate reforca a fantasia de poder bruto e honra.",
      "A relacao com Lux acrescenta conflito humano ao seu perfil rigido.",
      "E um dos rostos mais simbolicos de Demacia."
    ],
    image: splashArt("Garen"),
    artStart: "#efd28b",
    artEnd: "#352716",
    sigil: "G",
    skills: [
      skill("Passiva", "Perseveranca", "Recupera vida rapidamente quando sai de combate.", "sustentacao"),
      skill("Q", "Acerto Decisivo", "Purifica lentidoes e fortalece o proximo ataque.", "explosao"),
      skill("W", "Coragem", "Recebe resistencia adicional e reduz dano por um curto periodo.", "defesa"),
      skill("E", "Julgamento", "Gira a espada para causar dano constante ao redor.", "zona"),
      skill("R", "Justica Demaciana", "Finaliza um inimigo com uma execucao magistral.", "ultimate")
    ]
  },
  {
    id: "lux",
    alias: "lux",
    name: "Lux",
    title: "A Dama da Luminosidade",
    region: "demacia",
    className: "Maga",
    lanes: ["mid", "support"],
    tags: ["controle", "poke", "escala"],
    style: "Pressiona a distancia com controle de grupo, explosao e visao limpa das lutas.",
    lore: "Maga nascida em um reino que teme magia, Lux vive entre o dever nobre e o perigo de revelar a propria natureza luminosa.",
    facts: [
      "Representa uma das grandes tensoes internas de Demacia.",
      "Seu kit mistura seguranca, controle e muito dano de longa distancia.",
      "A luz e tanto simbolo de esperanca quanto de conflito."
    ],
    image: splashArt("Lux"),
    artStart: "#e6d19f",
    artEnd: "#45311a",
    sigil: "L",
    skills: [
      skill("Passiva", "Iluminacao", "Suas habilidades marcam alvos para dano adicional no proximo ataque.", "marca"),
      skill("Q", "Ligacao da Luz", "Prende inimigos em linha e abre espacamento seguro.", "controle"),
      skill("W", "Barreira Prismatica", "Arremessa a varinha para proteger aliados na ida e na volta.", "escudo"),
      skill("E", "Singularidade Lucente", "Cria uma zona de lentidao que explode sob comando.", "zona"),
      skill("R", "Centelha Final", "Dispara um raio massivo de altissimo alcance.", "ultimate")
    ]
  },
  {
    id: "fiora",
    alias: "fiora",
    name: "Fiora",
    title: "A Grande Duelista",
    region: "demacia",
    className: "Lutadora",
    lanes: ["top"],
    tags: ["duelo", "split push", "mobilidade"],
    style: "Especialista em confrontos individuais, pressao lateral e punicao tecnica.",
    lore: "Fiora carrega o nome da Casa Laurent com elegancia feroz, transformando honra, refinamento e laminas em uma arte mortal.",
    facts: [
      "E uma das melhores duelistas da lore e do jogo.",
      "Seu estilo e marcado por leitura, reflexo e precisao cirurgica.",
      "Representa a nobreza demaciana em sua forma mais afiada."
    ],
    image: splashArt("Fiora"),
    artStart: "#d8d4ef",
    artEnd: "#26203d",
    sigil: "F",
    skills: [
      skill("Passiva", "Danca da Duelista", "Revela pontos vitais que recompensam reposicionamento preciso.", "duelo"),
      skill("Q", "Estocada", "Avanco curto para acertar alvo ou ponto vital.", "dash"),
      skill("W", "Ripostar", "Anula dano e controles antes de contra-atacar.", "contra-jogo"),
      skill("E", "Esgrima", "Fortalece dois ataques para trocar com autoridade.", "troca"),
      skill("R", "Desafio Grandioso", "Marca todos os pontos vitais de um inimigo para uma execucao tecnica.", "ultimate")
    ]
  },
  {
    id: "darius",
    alias: "darius",
    name: "Darius",
    title: "A Mao de Noxus",
    region: "noxus",
    className: "Lutador",
    lanes: ["top"],
    tags: ["lane bully", "execucao", "snowball"],
    style: "Pressiona lutas longas, domina o espaco e converte vantagem em execucoes brutais.",
    lore: "De origem humilde, Darius subiu pela propria forca ate se tornar o rosto do ideal noxiano: poder conquistado sem concessoes.",
    facts: [
      "Simboliza meritocracia militar e presenca opressiva.",
      "Transforma pequenos erros em abates decisivos.",
      "Seu machado e tao politico quanto letal."
    ],
    image: splashArt("Darius"),
    artStart: "#cb5c61",
    artEnd: "#2a1017",
    sigil: "D",
    skills: [
      skill("Passiva", "Hemorragia", "Aplica sangramento crescente durante trocas prolongadas.", "stack"),
      skill("Q", "Dizimar", "Gira o machado e acerta mais forte na borda.", "area"),
      skill("W", "Ataque Mutilador", "Fortalece o ataque basico e reduz a velocidade do alvo.", "reset"),
      skill("E", "Apreender", "Puxa inimigos para iniciar o confronto em seus termos.", "pull"),
      skill("R", "Guilhotina Noxiana", "Executa alvos feridos e pode ser reutilizada.", "ultimate")
    ]
  },
  {
    id: "swain",
    alias: "swain",
    name: "Swain",
    title: "O Grande General Noxiano",
    region: "noxus",
    className: "Mago de batalha",
    lanes: ["mid", "support"],
    tags: ["controle", "drenagem", "teamfight"],
    style: "Controla o ritmo das lutas com alcance, leitura de mapa e presenca demonica.",
    lore: "Swain reformulou Noxus com inteligencia brutal e pactos sombrios. Onde outros veem guerra, ele ve uma arquitetura imperial.",
    facts: [
      "Combina estrategia politica e horror arcano.",
      "Seu corvo e sua mao demonica reforcam a fantasia de comando absoluto.",
      "Escala muito bem para lutas coletivas."
    ],
    image: splashArt("Swain"),
    artStart: "#d04d57",
    artEnd: "#160a13",
    sigil: "S",
    skills: [
      skill("Passiva", "Bando Voraz", "Colhe fragmentos de alma para fortalecer sua sustentacao.", "sustentacao"),
      skill("Q", "Rajada da Morte", "Cone de energia para dano concentrado em curta distancia.", "burst"),
      skill("W", "Visao do Imperio", "Impacta uma area distante e oferece leitura estrategica.", "alcance"),
      skill("E", "Nunca Mova", "Prende o alvo quando a energia retorna.", "controle"),
      skill("R", "Ascensao Demoniaca", "Assume forma aterradora e drena vida ao redor.", "ultimate")
    ]
  },
  {
    id: "katarina",
    alias: "katarina",
    name: "Katarina",
    title: "A Lamina Sinistra",
    region: "noxus",
    className: "Assassina",
    lanes: ["mid"],
    tags: ["reset", "mobilidade", "explosao"],
    style: "Aposta em entradas agressivas, reset de habilidades e execucao veloz de alvos fragis.",
    lore: "Treinada para matar com elegancia cruel, Katarina leva a disciplina noxiana para um estilo de combate veloz, preciso e implacavel.",
    facts: [
      "Vive de janelas de abate e reposicionamento instantaneo.",
      "Seu estilo reforca a fantasia de assassina que domina o caos.",
      "E um dos icones mais reconheciveis de Noxus."
    ],
    image: splashArt("Katarina"),
    artStart: "#c2536f",
    artEnd: "#220e18",
    sigil: "K",
    skills: [
      skill("Passiva", "Voracidade", "Reduz recargas e reforca o fluxo de resets apos abates.", "reset"),
      skill("Q", "Lamina Saltitante", "Arremessa uma adaga que prepara o terreno para combos.", "setup"),
      skill("W", "Preparacao", "Garante velocidade e deixa uma adaga no chao.", "mobilidade"),
      skill("E", "Shunpo", "Teleporta para alvo, aliado ou adaga com extrema rapidez.", "dash"),
      skill("R", "Loto da Morte", "Canaliza uma explosao de adagas em area.", "ultimate")
    ]
  },
  {
    id: "yasuo",
    alias: "yasuo",
    name: "Yasuo",
    title: "O Imperdoavel",
    region: "ionia",
    className: "Lutador",
    lanes: ["mid", "top"],
    tags: ["mobilidade", "escala", "skill expression"],
    style: "Movimento continuo, combos de alta velocidade e grande recompensa mecanica.",
    lore: "Acusado injustamente e marcado pela morte do proprio irmao, Yasuo vaga por Ionia carregando culpa, talento e uma espada guiada pelo vento.",
    facts: [
      "Seu dominio do vento transformou tecnica em lenda.",
      "Une fantasia de samurai errante com gameplay muito expressiva.",
      "Pode mudar lutas inteiras com a parede de vento."
    ],
    image: splashArt("Yasuo"),
    artStart: "#8fdfff",
    artEnd: "#15314f",
    sigil: "Y",
    skills: [
      skill("Passiva", "Estilo do Errante", "Acumula escudo e converte chance critica em ameaca constante.", "escudo"),
      skill("Q", "Tempestade de Aco", "Estocada que acumula tornado a cada acerto.", "combo"),
      skill("W", "Parede de Vento", "Bloqueia projeteis e redefine o espaco da luta.", "barreira"),
      skill("E", "Espada Agil", "Avanca entre alvos para reposicionamento agressivo.", "dash"),
      skill("R", "Ultimo Suspiro", "Executa uma entrada aerea apos controle de grupo.", "ultimate")
    ]
  },
  {
    id: "ahri",
    alias: "ahri",
    name: "Ahri",
    title: "A Raposa de Nove Caudas",
    region: "ionia",
    className: "Maga",
    lanes: ["mid"],
    tags: ["pickoff", "mobilidade", "controle"],
    style: "Mistura poke, charme e reposicionamento elegante para escolher bons abates.",
    lore: "Ahri e uma vastaya que busca compreender o proprio passado enquanto lida com um poder que toca memorias e emocoes alheias.",
    facts: [
      "Sua narrativa gira em torno de identidade e humanidade.",
      "Consegue iniciar e reposicionar com extrema fluidez.",
      "Une seducao espiritual e perigo letal."
    ],
    image: splashArt("Ahri"),
    artStart: "#e0a3ff",
    artEnd: "#27163f",
    sigil: "A",
    skills: [
      skill("Passiva", "Furto de Essencia", "Recupera vida durante trocas e limpeza de rota.", "sustentacao"),
      skill("Q", "Orbe da Ilusao", "Projeta o orbe em ida e volta para dano consistente.", "poke"),
      skill("W", "Fogo de Raposa", "Chamas espirituais priorizam inimigos proximos.", "burst"),
      skill("E", "Encanto", "Seduz o alvo e cria uma janela perfeita para explodir.", "controle"),
      skill("R", "Impeto Espiritual", "Concede tres avancos com dano entre as investidas.", "ultimate")
    ]
  },
  {
    id: "irelia",
    alias: "irelia",
    name: "Irelia",
    title: "A Dancarina das Laminas",
    region: "ionia",
    className: "Lutadora",
    lanes: ["top", "mid"],
    tags: ["mobilidade", "duelo", "engage"],
    style: "Avancos em cadeia, reset de alvo e muito controle de espaco em lutas curtas.",
    lore: "Irelia transformou danca em resistencia armada quando Ionia precisou reagir a invasao noxiana. Cada lamina sua e memoria e luta.",
    facts: [
      "Seu kit recompensa sequencias limpas e leitura de oportunidades.",
      "E uma das grandes liderancas simbolicas de Ionia.",
      "Fica muito ameacadora quando acerta a marca central do engage."
    ],
    image: splashArt("Irelia"),
    artStart: "#77b8ff",
    artEnd: "#1b2444",
    sigil: "I",
    skills: [
      skill("Passiva", "Fervor Ioniano", "Acumula dano e velocidade para combos longos.", "stack"),
      skill("Q", "Surto de Lamina", "Avanco que pode ser resetado ao eliminar ou marcar alvos.", "reset"),
      skill("W", "Danca Desafiadora", "Canaliza defesa e devolve dano em linha.", "mitigacao"),
      skill("E", "Dueto Impecavel", "Duas laminas convergem para atordoar.", "controle"),
      skill("R", "Vanguarda da Lamina", "Abre a luta com muralha de laminas cortantes.", "ultimate")
    ]
  },
  {
    id: "zed",
    alias: "zed",
    name: "Zed",
    title: "O Mestre das Sombras",
    region: "ionia",
    className: "Assassino",
    lanes: ["mid"],
    tags: ["burst", "sombras", "pickoff"],
    style: "Assassinatos rapidos, manipulacao de sombras e pressao constante sobre alvos isolados.",
    lore: "Zed abracou as sombras proibidas para defender Ionia a qualquer custo, tornando-se uma figura tao temida quanto respeitada.",
    facts: [
      "Sua fantasia e centrada em execucao e engano.",
      "E letal quando encontra alvos fora de posicao.",
      "Transforma sombra em mobilidade, dano e confusao."
    ],
    image: splashArt("Zed"),
    artStart: "#8a95a5",
    artEnd: "#16181f",
    sigil: "Z",
    skills: [
      skill("Passiva", "Desprezo Pelos Fracos", "Golpes finais causam dano extra contra alvos feridos.", "execucao"),
      skill("Q", "Shuriken Laminado", "Arremessa shurikens por ele e por suas sombras.", "poke"),
      skill("W", "Sombra Viva", "Projeta uma sombra para repetir habilidades.", "mobilidade"),
      skill("E", "Corte Sombrio", "Golpe circular para pressionar e habilitar combos.", "zona"),
      skill("R", "Marca Fatal", "Salta para o alvo e prepara uma explosao devastadora.", "ultimate")
    ]
  },
  {
    id: "ashe",
    alias: "ashe",
    name: "Ashe",
    title: "A Arqueira do Gelo",
    region: "freljord",
    className: "Atiradora",
    lanes: ["adc"],
    tags: ["controle", "visao", "utilidade"],
    style: "Atiradora de utilidade com lentidao constante, leitura de mapa e iniciacao global.",
    lore: "Lider da tribo Avarosana, Ashe luta para unir o Freljord em torno de uma visao de futuro e estabilidade.",
    facts: [
      "Seu arco carrega o legado ancestral de Avarosa.",
      "Une papel politico e presenca taticamente refinada.",
      "Consegue iniciar lutas a grande distancia."
    ],
    image: splashArt("Ashe"),
    artStart: "#8fd4ff",
    artEnd: "#17304b",
    sigil: "A",
    skills: [
      skill("Passiva", "Tiro Gelido", "Ataques reduzem a velocidade de movimento do inimigo.", "lentidao"),
      skill("Q", "Concentracao da Patrulheira", "Dispara uma sequencia veloz de flechas energizadas.", "dps"),
      skill("W", "Rajada", "Cone de flechas para pressionar area e rota.", "cone"),
      skill("E", "Falcoada", "Revela partes do mapa e amplia a leitura da equipe.", "visao"),
      skill("R", "Flecha de Cristal Encantada", "Disparo global que atordoa ao acertar.", "ultimate")
    ]
  },
  {
    id: "sejuani",
    alias: "sejuani",
    name: "Sejuani",
    title: "A Furia do Norte",
    region: "freljord",
    className: "Tanque",
    lanes: ["jungle"],
    tags: ["engage", "controle", "frontline"],
    style: "Abraca a linha de frente com muito controle de grupo e iniciacoes agressivas.",
    lore: "Comandando a Garra do Inverno, Sejuani acredita que apenas a brutalidade e capaz de garantir sobrevivencia ao seu povo.",
    facts: [
      "Sua montaria Bristle e parte central da fantasia de impacto.",
      "Domina escaramucas e ganks com muita facilidade.",
      "Representa a visao mais dura do Freljord."
    ],
    image: splashArt("Sejuani"),
    artStart: "#9fd0f3",
    artEnd: "#1c2438",
    sigil: "S",
    skills: [
      skill("Passiva", "Furia do Norte", "Ganha resistencia adicional quando fora de combate.", "resistencia"),
      skill("Q", "Investida Artica", "Avanca violentamente para iniciar confrontos.", "engage"),
      skill("W", "Ira Invernal", "Dois golpes amplos para dano e aplicacao de marcas.", "area"),
      skill("E", "Permafrost", "Congela inimigos marcados e prende a movimentacao.", "controle"),
      skill("R", "Prisao Glacial", "Arremessa uma massa de gelo que paralisa em area.", "ultimate")
    ]
  },
  {
    id: "lissandra",
    alias: "lissandra",
    name: "Lissandra",
    title: "A Bruxa Gelida",
    region: "freljord",
    className: "Maga",
    lanes: ["mid"],
    tags: ["controle", "engage", "burst"],
    style: "Cria jogadas em area com muito controle e forte presenca em engages.",
    lore: "Rainha das historias mais sombrias do Freljord, Lissandra manipula gelo ancestral e segredos enterrados abaixo do mundo.",
    facts: [
      "Seu tema mistura monarquia, horror e gelo primordial.",
      "Consegue tanto iniciar quanto se proteger no meio da luta.",
      "E uma das faces mais antigas e temidas de Runeterra."
    ],
    image: splashArt("Lissandra"),
    artStart: "#b5dcff",
    artEnd: "#1d2e47",
    sigil: "L",
    skills: [
      skill("Passiva", "Subjugacao Glacial", "Inimigos abatidos viram fragmentos gelidos explosivos.", "teamfight"),
      skill("Q", "Estilhaco de Gelo", "Lanca uma lamina de gelo em linha.", "poke"),
      skill("W", "Circulo de Gelo", "Congela inimigos proximos para travar o avanco.", "raiz"),
      skill("E", "Caminho Glacial", "Invoca uma garra para mobilidade e engage.", "mobilidade"),
      skill("R", "Tumulo Congelado", "Aprisiona a si mesma ou um inimigo em gelo ancestral.", "ultimate")
    ]
  },
  {
    id: "jinx",
    alias: "jinx",
    name: "Jinx",
    title: "O Gatilho Desenfreado",
    region: "piltover-zaun",
    className: "Atiradora",
    lanes: ["adc"],
    tags: ["escala", "caos", "reset"],
    style: "Alterna alcance, explosoes e velocidade para dominar lutas abertas.",
    lore: "Jinx transformou Zaun e Piltover em palco para uma anarquia quase teatral, sempre acompanhada por ruina, tinta e riso.",
    facts: [
      "Sua fantasia vive do exagero e da destruicao performatica.",
      "Escala muito bem em lutas prolongadas.",
      "Seus resets aceleram o caos de qualquer confronto."
    ],
    image: splashArt("Jinx"),
    artStart: "#78f7d9",
    artEnd: "#15363e",
    sigil: "J",
    skills: [
      skill("Passiva", "Anime-se", "Ganhos de velocidade apos abates transformam a luta em avalanche.", "reset"),
      skill("Q", "Trocando", "Alterna entre minigun de dps e foguete de longo alcance.", "swap"),
      skill("W", "Zap", "Tiro longo para poke e perseguicao.", "skillshot"),
      skill("E", "Mordidinha Flamejante", "Armadilhas criam zona de risco e controle.", "controle"),
      skill("R", "Super Mega Missil da Morte", "Projetil global para finalizacoes explosivas.", "ultimate")
    ]
  },
  {
    id: "vi",
    alias: "vi",
    name: "Vi",
    title: "A Defensora de Piltover",
    region: "piltover-zaun",
    className: "Lutadora",
    lanes: ["jungle"],
    tags: ["engage", "burst", "pickoff"],
    style: "Jungler de impacto com entradas diretas, controle de alvo e pressao nos ganks.",
    lore: "Criada nas ruas de Zaun e forjada em punhos hextec, Vi canaliza rebeldia e coragem em um estilo brutalmente eficiente.",
    facts: [
      "Seu estilo valoriza impacto imediato e foco em alvos chave.",
      "Conecta Piltover e Zaun em uma mesma biografia turbulenta.",
      "Combina fantasia de briga de rua com tecnologia."
    ],
    image: splashArt("Vi"),
    artStart: "#ff7888",
    artEnd: "#321723",
    sigil: "V",
    skills: [
      skill("Passiva", "Escudo Explosivo", "Recebe escudo ao acertar habilidades em combate.", "defesa"),
      skill("Q", "Quebra-Cofres", "Carrega um soco para alcance e engage.", "engage"),
      skill("W", "Dentadas", "Quebra armadura e aumenta velocidade de ataque.", "dps"),
      skill("E", "Forca Excessiva", "Fortalece ataques e espalha dano em cone.", "cone"),
      skill("R", "Saque e Enterrada", "Persegue o alvo principal ate derruba-lo.", "ultimate")
    ]
  },
  {
    id: "caitlyn",
    alias: "caitlyn",
    name: "Caitlyn",
    title: "A Xerife de Piltover",
    region: "piltover-zaun",
    className: "Atiradora",
    lanes: ["adc"],
    tags: ["alcance", "armadilhas", "controle de rota"],
    style: "Domina espacamento e objetivos com alcance superior e armadilhas precisas.",
    lore: "Investigadora brilhante e simbolo da ordem em Piltover, Caitlyn alia paciencia, tecnologia e mira impecavel.",
    facts: [
      "E uma das atiradoras com maior alcance do jogo.",
      "Sua presenca cresce quando o terreno e controlado com armadilhas.",
      "Representa a face refinada e taticamente fria de Piltover."
    ],
    image: splashArt("Caitlyn"),
    artStart: "#cab8c5",
    artEnd: "#27202d",
    sigil: "C",
    skills: [
      skill("Passiva", "Bem na Mira", "Dispara tiros potencializados apos tempo ou preparo.", "alcance"),
      skill("Q", "Pacificadora de Piltover", "Tiro linear de longa distancia para poke.", "poke"),
      skill("W", "Armadilha Mecanica", "Controla terreno e amplia o dano em alvos presos.", "trap"),
      skill("E", "Rede Calibre 90", "Recua enquanto desacelera o inimigo.", "reposicionamento"),
      skill("R", "As na Manga", "Mira e finaliza um alvo a grande distancia.", "ultimate")
    ]
  },
  {
    id: "viego",
    alias: "viego",
    name: "Viego",
    title: "O Rei Destruido",
    region: "ilha-das-sombras",
    className: "Lutador",
    lanes: ["jungle"],
    tags: ["reset", "escaramuca", "possessao"],
    style: "Brilha em lutas caoticas, domina resets e transforma abates em novas ameacas.",
    lore: "Consumido pela obsessao de trazer Isolde de volta, Viego arrastou um reino inteiro para a Ruina e deixou a Ilha das Sombras presa ao luto corrupto.",
    facts: [
      "Sua historia e uma tragedia romantica levada ao desastre absoluto.",
      "A Ruina alterou o destino de varias regioes de Runeterra.",
      "Seu kit transmite dominio e apropriacao do campo de batalha."
    ],
    image: splashArt("Viego"),
    artStart: "#80ffc4",
    artEnd: "#11332a",
    sigil: "V",
    skills: [
      skill("Passiva", "Dominacao Soberana", "Possui inimigos abatidos e herda parte de seu kit.", "reset"),
      skill("Q", "Espada do Rei Destruido", "Golpe principal com alcance e dano consistentes.", "duelo"),
      skill("W", "Espectro Atormentado", "Avanco carregado para iniciar e controlar.", "stun"),
      skill("E", "Caminho da Nevoa Negra", "Ganha velocidade e camuflagem na nevoa.", "camuflagem"),
      skill("R", "Destruicao dos Coracoes", "Entrada explosiva para resetar o caos da luta.", "ultimate")
    ]
  },
  {
    id: "thresh",
    alias: "thresh",
    name: "Thresh",
    title: "O Guardiao das Correntes",
    region: "ilha-das-sombras",
    className: "Suporte",
    lanes: ["support"],
    tags: ["pickoff", "controle", "utilidade"],
    style: "Cria picks com gancho, zona e lanternas que mudam o posicionamento da equipe.",
    lore: "Um carcereiro de crueldade refinada, Thresh transformou sadismo e nevoa em eternidade espectral.",
    facts: [
      "E um dos maiores controladores de espaco entre suportes.",
      "Sua lanterna oferece jogadas unicas de entrada e salvamento.",
      "A fantasia combina prisao, terror e manipulacao."
    ],
    image: splashArt("Thresh"),
    artStart: "#7ff5c5",
    artEnd: "#143026",
    sigil: "T",
    skills: [
      skill("Passiva", "Condenacao", "Coleciona almas para ganhar dano e armadura.", "escala"),
      skill("Q", "Sentenca", "Lanca o famoso gancho para iniciar picks.", "hook"),
      skill("W", "Passagem Sombria", "A lanterna protege e reposiciona aliados.", "salvamento"),
      skill("E", "Esfolar", "Empurra ou puxa, quebrando o ritmo do adversario.", "controle"),
      skill("R", "A Caixa", "Cria prisao espectral para travar a movimentacao.", "ultimate")
    ]
  },
  {
    id: "azir",
    alias: "azir",
    name: "Azir",
    title: "O Imperador das Areias",
    region: "shurima",
    className: "Mago",
    lanes: ["mid"],
    tags: ["escala", "controle de zona", "teamfight"],
    style: "Domina espacamento com soldados e recompensa posicionamento disciplinado.",
    lore: "Ressuscitado como ascendente, Azir sonha em erguer Shurima novamente e transformar ruinas em um imperio vivo.",
    facts: [
      "Sua fantasia e a de comandar um exercito invisivel no mapa.",
      "Representa a grandeza restaurada de Shurima.",
      "Escala muito bem para lutas em objetivo."
    ],
    image: splashArt("Azir"),
    artStart: "#ffc76a",
    artEnd: "#4a2607",
    sigil: "A",
    skills: [
      skill("Passiva", "Legado de Shurima", "Levanta uma torre para recuperar controle territorial.", "territorio"),
      skill("Q", "Areias Conquistadoras", "Reposiciona soldados para criar novas linhas de dano.", "controle"),
      skill("W", "Surgir", "Invoca soldados que atacam em seu lugar.", "invocacao"),
      skill("E", "Areias Movedicas", "Avanca ate um soldado para reposicionamento tatica.", "dash"),
      skill("R", "Divisao Imperial", "Levanta muralha monumental para iniciar ou proteger.", "ultimate")
    ]
  },
  {
    id: "nasus",
    alias: "nasus",
    name: "Nasus",
    title: "O Curador das Areias",
    region: "shurima",
    className: "Lutador",
    lanes: ["top"],
    tags: ["escala", "duelo", "sustentacao"],
    style: "Campeao de crescimento lento que se torna esmagador com tempo e stacks.",
    lore: "Ascendente de sabedoria monumental, Nasus combina erudicao, poder solar e peso historico de um imperio antigo.",
    facts: [
      "Sua progressao e uma das fantasias de escala mais claras do jogo.",
      "Une majestade, estudo e brutalidade controlada.",
      "Fica cada vez mais perigoso conforme a partida avanca."
    ],
    image: splashArt("Nasus"),
    artStart: "#d9b26f",
    artEnd: "#3c2408",
    sigil: "N",
    skills: [
      skill("Passiva", "Devorador de Almas", "Roubo de vida crescente melhora a permanencia na rota.", "sustain"),
      skill("Q", "Ataque Sifonador", "Fortalece o ataque e escala com eliminacoes.", "stack"),
      skill("W", "Murchar", "Drena mobilidade e cadencia do inimigo.", "lentidao"),
      skill("E", "Fogo Espiritual", "Abre uma zona de dano e reducao de armadura.", "zona"),
      skill("R", "Furia das Areias", "Cresce em tamanho e domina a luta prolongada.", "ultimate")
    ]
  },
  {
    id: "leona",
    alias: "leona",
    name: "Leona",
    title: "A Aurora Radiante",
    region: "targon",
    className: "Tanque",
    lanes: ["support"],
    tags: ["engage", "controle", "frontline"],
    style: "Inicia sem medo, prende alvos e abre lutas para o time com constancia.",
    lore: "Escolhida pelo Sol em Targon, Leona carrega fervor religioso e armadura sagrada como instrumentos de guerra e protecao.",
    facts: [
      "E uma das suportes de engage mais classicas do jogo.",
      "Sua fantasia gira em torno de luz, disciplina e impacto.",
      "O contraste com Diana adiciona profundidade a Targon."
    ],
    image: splashArt("Leona"),
    artStart: "#f2c96f",
    artEnd: "#463019",
    sigil: "L",
    skills: [
      skill("Passiva", "Luz do Sol", "Marca inimigos para dano extra de aliados.", "sinergia"),
      skill("Q", "Escudo do Amanhecer", "Fortalece o proximo ataque para atordoar.", "stun"),
      skill("W", "Eclipse", "Ganha resistencia e explode em area.", "frontline"),
      skill("E", "Lamina Zenith", "Avanca ate o ultimo alvo atingido.", "engage"),
      skill("R", "Labareda Solar", "Impacto em area com controle devastador.", "ultimate")
    ]
  },
  {
    id: "diana",
    alias: "diana",
    name: "Diana",
    title: "O Escarnio da Lua",
    region: "targon",
    className: "Assassina",
    lanes: ["jungle", "mid"],
    tags: ["engage", "burst", "teamfight"],
    style: "Combina explosao, avancos certeiros e uma ultimate forte para colapsar grupos.",
    lore: "Diana abracou os segredos lunares de Targon e passou a caminhar como heresia viva diante de um mundo governado pelo Sol.",
    facts: [
      "Seu tema mistura misticismo, ruptura e destino.",
      "Pode iniciar lutas e punir agrupamentos com facilidade.",
      "Tem forte contraste narrativo com Leona."
    ],
    image: splashArt("Diana"),
    artStart: "#b9c5ff",
    artEnd: "#21284a",
    sigil: "D",
    skills: [
      skill("Passiva", "Espada Prateada Lunar", "Ataques fortalecidos limpam e aceleram trocas.", "dps"),
      skill("Q", "Golpe Crescente", "Arco lunar revela o alvo e prepara o engage.", "setup"),
      skill("W", "Cascata Minguante", "Tres esferas protegem e explodem ao redor.", "escudo"),
      skill("E", "Colapso Lunar", "Puxa inimigos e condensa a zona da luta.", "controle"),
      skill("R", "Zunir Lunar", "Avanca ate o alvo marcado e reinicia a agressao.", "ultimate")
    ]
  },
  {
    id: "shen",
    alias: "shen",
    name: "Shen",
    title: "O Olho do Crepusculo",
    region: "ionia",
    className: "Tanque",
    lanes: ["top", "support"],
    tags: ["global", "protecao", "controle"],
    style: "Protege aliados, responde ao mapa e ancora lutas com seguranca.",
    lore: "Como lider do Kinkou, Shen dedica a vida a manter o equilibrio entre o mundo material e o espiritual.",
    facts: [
      "Sua ultimate transforma leituras de mapa em vantagem imediata.",
      "E uma figura de disciplina e serenidade em Ionia.",
      "Une defesa, presenca global e controle sob medida."
    ],
    image: splashArt("Shen"),
    artStart: "#9cb9ff",
    artEnd: "#18233d",
    sigil: "S",
    skills: [
      skill("Passiva", "Barreira Ki", "Concede escudo apos habilidades bem conectadas.", "escudo"),
      skill("Q", "Ataque Crepuscular", "A espada espiritual atravessa inimigos e fortalece ataques.", "duelo"),
      skill("W", "Refugio Espiritual", "Bloqueia ataques basicos em area ao redor da espada.", "defesa"),
      skill("E", "Corrida das Sombras", "Avanco que provoca os inimigos atingidos.", "taunt"),
      skill("R", "Apoio Heroico", "Escuda um aliado e teleporta ate ele.", "global")
    ]
  },
  {
    id: "braum",
    alias: "braum",
    name: "Braum",
    title: "O Coracao do Freljord",
    region: "freljord",
    className: "Suporte",
    lanes: ["support"],
    tags: ["protecao", "controle", "frontline"],
    style: "Defende a equipe com escudo, inicia de perto e oferece muita seguranca.",
    lore: "Braum e o gigante gentil das lendas freljordanas, um heroi cuja forca so e maior que a bondade.",
    facts: [
      "Seu escudo e um dos simbolos mais fortes de protecao no jogo.",
      "Transforma defesa em oportunidade de contra-ataque.",
      "E uma presenca carismatica e acolhedora em meio ao gelo."
    ],
    image: splashArt("Braum"),
    artStart: "#8dc7ff",
    artEnd: "#16304b",
    sigil: "B",
    skills: [
      skill("Passiva", "Golpes Concussivos", "Acumula marcas que culminam em atordoamento.", "controle"),
      skill("Q", "Mordida do Inverno", "Projeta gelo para reduzir movimento e abrir engage.", "poke"),
      skill("W", "Fique Comigo", "Salta em um aliado para protege-lo.", "salvamento"),
      skill("E", "Inquebravel", "Levanta o escudo para negar projeteis e dano.", "barreira"),
      skill("R", "Fissura Glacial", "Cria uma ruptura de gelo que controla em linha.", "ultimate")
    ]
  }
];

const featuredIds = ["yasuo", "lux", "swain", "ashe", "jinx", "viego"];

const regionFilters = document.getElementById("regionFilters");
const championGrid = document.getElementById("championGrid");
const featuredRail = document.getElementById("featuredRail");
const championCounter = document.getElementById("championCounter");
const championModal = document.getElementById("championModal");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.getElementById("main-nav");
const backToTop = document.getElementById("backToTop");
const laneFilter = document.getElementById("laneFilter");
const classFilter = document.getElementById("classFilter");
const resetFiltersButton = document.getElementById("resetFilters");
const heroStats = document.getElementById("heroStats");

const detailElements = {
  name: document.getElementById("modalChampionName"),
  title: document.getElementById("modalChampionTitle"),
  region: document.getElementById("modalChampionRegion"),
  className: document.getElementById("modalChampionClass"),
  lanes: document.getElementById("modalChampionLanes"),
  image: document.getElementById("modalChampionImage"),
  lore: document.getElementById("modalChampionLore"),
  style: document.getElementById("modalChampionStyle"),
  sigil: document.getElementById("modalChampionSigil"),
  skills: document.getElementById("modalChampionSkills"),
  facts: document.getElementById("modalChampionFacts"),
  tags: document.getElementById("modalChampionTags"),
  laneList: document.getElementById("modalChampionLaneList")
};

const activeFilters = {
  region: "all",
  lane: "all",
  className: "all"
};

const championSpellCache = new Map();

function formatRegion(regionId) {
  const region = regions.find((item) => item.id === regionId);
  return region ? region.name : regionId;
}

function formatLane(laneId) {
  return laneLabels[laneId] || laneId;
}

function renderHeroStats() {
  const items = [
    { value: String(champions.length), label: "campeoes com lore, lanes e skills." },
    { value: String(regions.length - 1), label: "regioes principais ilustradas." },
    { value: String(new Set(champions.flatMap((champion) => champion.lanes)).size), label: "rotas filtraveis na galeria." }
  ];

  heroStats.innerHTML = items
    .map(
      (item) => `
        <article class="hero-stat">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </article>
      `
    )
    .join("");
}

function renderRegions() {
  regionFilters.innerHTML = regions
    .map(
      (region) => `
        <button
          class="region-card ${region.id === activeFilters.region ? "is-active" : ""}"
          type="button"
          data-region="${region.id}"
          style="--region-glow: ${region.glow};"
        >
          <span class="region-card-media">
            <img
              src="${region.image}"
              alt="Paisagem de ${region.name}"
              loading="lazy"
              onerror="this.src='${splashArt("Ryze")}';"
            >
          </span>
          <div class="region-card-content">
            <strong>${region.name}</strong>
            <p>${region.description}</p>
          </div>
        </button>
      `
    )
    .join("");
}

function renderFilterOptions() {
  const lanes = [...new Set(champions.flatMap((champion) => champion.lanes))];
  const classes = [...new Set(champions.map((champion) => champion.className))].sort((a, b) => a.localeCompare(b));

  laneFilter.innerHTML = ['<option value="all">Todas</option>']
    .concat(lanes.map((lane) => `<option value="${lane}">${formatLane(lane)}</option>`))
    .join("");

  classFilter.innerHTML = ['<option value="all">Todas</option>']
    .concat(classes.map((className) => `<option value="${className}">${className}</option>`))
    .join("");
}

function getFilteredChampions() {
  return champions.filter((champion) => {
    const regionMatch = activeFilters.region === "all" || champion.region === activeFilters.region;
    const laneMatch = activeFilters.lane === "all" || champion.lanes.includes(activeFilters.lane);
    const classMatch = activeFilters.className === "all" || champion.className === activeFilters.className;
    return regionMatch && laneMatch && classMatch;
  });
}

function renderChampions() {
  const visibleChampions = getFilteredChampions();

  championGrid.innerHTML = visibleChampions
    .map(
      (champion) => `
        <article
          class="champion-card reveal is-visible"
          tabindex="0"
          role="button"
          aria-label="Abrir detalhes de ${champion.name}"
          data-champion="${champion.id}"
          style="--champion-image: url('${champion.image}'); --art-start: ${champion.artStart}; --art-end: ${champion.artEnd};"
        >
          <div class="champion-art" data-sigil="${champion.sigil}"></div>
          <div class="champion-meta">
            <div class="champion-topline">
              <span class="champion-region">${formatRegion(champion.region)}</span>
              <span class="champion-class">${champion.className}</span>
            </div>
            <div>
              <h3>${champion.name}</h3>
              <p>${champion.title}</p>
            </div>
            <div class="chip-row">
              ${champion.lanes.map((lane) => `<span class="chip is-emphasis">${formatLane(lane)}</span>`).join("")}
            </div>
            <div class="chip-row">
              ${champion.tags.slice(0, 3).map((tag) => `<span class="chip">${tag}</span>`).join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");

  championCounter.textContent = `${visibleChampions.length} campeao${visibleChampions.length > 1 ? "es" : ""} visivel${visibleChampions.length > 1 ? "s" : ""}`;
}

function renderFeatured() {
  const featuredChampions = featuredIds
    .map((id) => champions.find((champion) => champion.id === id))
    .filter(Boolean);

  featuredRail.innerHTML = featuredChampions
    .map(
      (champion) => `
        <article class="featured-card reveal" style="--feature-image: url('${champion.image}'); --feature-start: ${champion.artStart};">
          <span>${formatRegion(champion.region)}</span>
          <h3>${champion.name}</h3>
          <p>${champion.style}</p>
        </article>
      `
    )
    .join("");
}

function buildFallbackSkillIcons(champion) {
  return champion.skills.map((item) => ({
    slot: item.slot,
    icon: abilityIcon(champion.alias, item.slot === "Passiva" ? "p" : item.slot.toLowerCase())
  }));
}

async function getChampionSpellIcons(champion) {
  if (championSpellCache.has(champion.id)) {
    return championSpellCache.get(champion.id);
  }

  const fallbackIcons = buildFallbackSkillIcons(champion);

  try {
    const response = await fetch(ddragonChampionDataUrl(champion.alias.charAt(0).toUpperCase() + champion.alias.slice(1)));
    if (!response.ok) {
      throw new Error(`Falha ao carregar ${champion.alias}`);
    }

    const payload = await response.json();
    const championKey = payload.data[champion.alias.charAt(0).toUpperCase() + champion.alias.slice(1)];
    const resolvedIcons = [
      { slot: "Passiva", icon: ddragonPassiveIcon(championKey.passive.image.full) },
      ...championKey.spells.map((spellData, index) => ({
        slot: ["Q", "W", "E", "R"][index],
        icon: ddragonSpellIcon(spellData.image.full)
      }))
    ];

    championSpellCache.set(champion.id, resolvedIcons);
    return resolvedIcons;
  } catch (error) {
    championSpellCache.set(champion.id, fallbackIcons);
    return fallbackIcons;
  }
}

function renderSkillItem(champion, item, resolvedIcons) {
  const iconData = resolvedIcons.find((entry) => entry.slot === item.slot);
  const icon = iconData ? iconData.icon : abilityIcon(champion.alias, item.slot === "Passiva" ? "p" : item.slot.toLowerCase());

  return `
    <li>
      <div class="skill-icon-box" data-key="${item.slot}">
        <img
          src="${icon}"
          alt="${champion.name} ${item.slot}"
          loading="lazy"
          onerror="this.style.display='none'; this.parentElement.classList.add('is-fallback');"
        >
      </div>
      <div class="skill-copy">
        <div class="skill-header">
          <span class="skill-key">${item.slot}</span>
          <strong>${item.name}</strong>
          <span class="skill-chip">${item.note}</span>
        </div>
        <span>${item.description}</span>
      </div>
    </li>
  `;
}

async function openChampionModal(championId) {
  const champion = champions.find((item) => item.id === championId);
  if (!champion) {
    return;
  }

  const resolvedIcons = await getChampionSpellIcons(champion);

  detailElements.name.textContent = champion.name;
  detailElements.title.textContent = champion.title;
  detailElements.region.textContent = formatRegion(champion.region);
  detailElements.className.textContent = champion.className;
  detailElements.lanes.textContent = champion.lanes.map(formatLane).join(" / ");
  detailElements.image.src = champion.image;
  detailElements.image.alt = `${champion.name} em arte oficial`;
  detailElements.lore.textContent = champion.lore;
  detailElements.style.textContent = champion.style;
  detailElements.sigil.textContent = champion.sigil;
  detailElements.sigil.style.background = `linear-gradient(145deg, ${champion.artStart}, ${champion.artEnd})`;
  detailElements.tags.innerHTML = champion.tags.map((tag) => `<span class="chip">${tag}</span>`).join("");
  detailElements.laneList.innerHTML = champion.lanes.map((lane) => `<span class="chip is-emphasis">${formatLane(lane)}</span>`).join("");
  detailElements.skills.innerHTML = champion.skills.map((item) => renderSkillItem(champion, item, resolvedIcons)).join("");
  detailElements.facts.innerHTML = champion.facts.map((fact) => `<li>${fact}</li>`).join("");

  championModal.classList.add("is-open");
  championModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeChampionModal() {
  championModal.classList.remove("is-open");
  championModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

function applyFilters() {
  renderRegions();
  renderChampions();
}

function handleRegionFilterClick(event) {
  const button = event.target.closest("[data-region]");
  if (!button) {
    return;
  }

  activeFilters.region = button.dataset.region;
  applyFilters();
  document.getElementById("campeoes").scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleChampionActivation(event) {
  const championCard = event.target.closest("[data-champion]");
  if (!championCard) {
    return;
  }

  openChampionModal(championCard.dataset.champion);
}

function handleScroll() {
  if (window.scrollY > 420) {
    backToTop.classList.add("is-visible");
  } else {
    backToTop.classList.remove("is-visible");
  }
}

function toggleMobileMenu() {
  const isOpen = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
}

function closeMobileMenu() {
  mainNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function setupReveals() {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  reveals.forEach((item) => observer.observe(item));
}

function init() {
  renderHeroStats();
  renderFilterOptions();
  renderRegions();
  renderChampions();
  renderFeatured();
  setupReveals();

  regionFilters.addEventListener("click", handleRegionFilterClick);

  laneFilter.addEventListener("change", () => {
    activeFilters.lane = laneFilter.value;
    renderChampions();
  });

  classFilter.addEventListener("change", () => {
    activeFilters.className = classFilter.value;
    renderChampions();
  });

  resetFiltersButton.addEventListener("click", () => {
    activeFilters.region = "all";
    activeFilters.lane = "all";
    activeFilters.className = "all";
    laneFilter.value = "all";
    classFilter.value = "all";
    applyFilters();
  });

  championGrid.addEventListener("click", handleChampionActivation);
  championGrid.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      const championCard = event.target.closest("[data-champion]");
      if (!championCard) {
        return;
      }

      event.preventDefault();
      openChampionModal(championCard.dataset.champion);
    }
  });

  championModal.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-modal]")) {
      closeChampionModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeChampionModal();
    }
  });

  menuToggle.addEventListener("click", toggleMobileMenu);
  mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", handleScroll);
  handleScroll();
}

init();
