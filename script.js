const regionArtBase = "https://wiki.leagueoflegends.com/en-us/Special:Redirect/file/";
const splashBase = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/";
const abilityBase = "https://raw.communitydragon.org/latest/game/assets/characters";
const ddragonVersion = "16.6.1";

const laneLabels = {
  top: "Topo",
  jungle: "Selva",
  mid: "Meio",
  adc: "ADC",
  support: "Suporte"
};

const championRegionMap = {
  Aatrox: "shurima",
  Ahri: "ionia",
  Akali: "ionia",
  Akshan: "shurima",
  Alistar: "runeterra",
  Ambessa: "noxus",
  Amumu: "shurima",
  Anivia: "freljord",
  Annie: "noxus",
  Aphelios: "targon",
  Ashe: "freljord",
  AurelionSol: "targon",
  Aurora: "freljord",
  Azir: "shurima",
  Bard: "runeterra",
  Belveth: "vazio",
  Blitzcrank: "piltover-zaun",
  Brand: "freljord",
  Braum: "freljord",
  Briar: "noxus",
  Caitlyn: "piltover-zaun",
  Camille: "piltover-zaun",
  Cassiopeia: "noxus",
  Chogath: "vazio",
  Corki: "bandopolis",
  Darius: "noxus",
  Diana: "targon",
  DrMundo: "piltover-zaun",
  Draven: "noxus",
  Ekko: "piltover-zaun",
  Elise: "noxus",
  Evelynn: "runeterra",
  Ezreal: "piltover-zaun",
  Fiddlesticks: "runeterra",
  Fiora: "demacia",
  Fizz: "aguas-de-sentina",
  Galio: "demacia",
  Gangplank: "aguas-de-sentina",
  Garen: "demacia",
  Gnar: "freljord",
  Gragas: "freljord",
  Graves: "aguas-de-sentina",
  Gwen: "ilha-das-sombras",
  Hecarim: "ilha-das-sombras",
  Heimerdinger: "piltover-zaun",
  Hwei: "ionia",
  Illaoi: "aguas-de-sentina",
  Irelia: "ionia",
  Ivern: "ionia",
  Janna: "piltover-zaun",
  JarvanIV: "demacia",
  Jax: "shurima",
  Jayce: "piltover-zaun",
  Jhin: "ionia",
  Jinx: "piltover-zaun",
  KaiSa: "vazio",
  Kalista: "ilha-das-sombras",
  Karma: "ionia",
  Karthus: "ilha-das-sombras",
  Kassadin: "vazio",
  Katarina: "noxus",
  Kayle: "demacia",
  Kayn: "ionia",
  Kennen: "ionia",
  Khazix: "vazio",
  Kindred: "runeterra",
  Kled: "noxus",
  KogMaw: "vazio",
  KSante: "shurima",
  Leblanc: "noxus",
  LeeSin: "ionia",
  Leona: "targon",
  Lillia: "ionia",
  Lissandra: "freljord",
  Lucian: "demacia",
  Lulu: "bandopolis",
  Lux: "demacia",
  Malphite: "ixtal",
  Malzahar: "vazio",
  Maokai: "ilha-das-sombras",
  MasterYi: "ionia",
  Milio: "ixtal",
  MissFortune: "aguas-de-sentina",
  Mordekaiser: "noxus",
  Morgana: "demacia",
  Naafiri: "shurima",
  Nami: "targon",
  Nasus: "shurima",
  Nautilus: "aguas-de-sentina",
  Neeko: "ixtal",
  Nidalee: "ixtal",
  Nilah: "runeterra",
  Nocturne: "runeterra",
  Nunu: "freljord",
  NunuWillump: "freljord",
  Olaf: "freljord",
  Orianna: "piltover-zaun",
  Ornn: "freljord",
  Pantheon: "targon",
  Poppy: "demacia",
  Pyke: "aguas-de-sentina",
  Qiyana: "ixtal",
  Quinn: "demacia",
  Rakan: "ionia",
  Rammus: "shurima",
  RekSai: "vazio",
  Rell: "noxus",
  Renata: "piltover-zaun",
  Renekton: "shurima",
  Rengar: "ixtal",
  Riven: "noxus",
  Rumble: "bandopolis",
  Ryze: "runeterra",
  Samira: "noxus",
  Sejuani: "freljord",
  Senna: "demacia",
  Seraphine: "piltover-zaun",
  Sett: "ionia",
  Shaco: "runeterra",
  Shen: "ionia",
  Shyvana: "demacia",
  Singed: "piltover-zaun",
  Sion: "noxus",
  Sivir: "shurima",
  Skarner: "ixtal",
  Smolder: "runeterra",
  Sona: "demacia",
  Soraka: "targon",
  Swain: "noxus",
  Sylas: "demacia",
  Syndra: "ionia",
  TahmKench: "runeterra",
  Taliyah: "shurima",
  Talon: "noxus",
  Taric: "targon",
  Teemo: "bandopolis",
  Thresh: "ilha-das-sombras",
  Tristana: "bandopolis",
  Trundle: "freljord",
  Tryndamere: "freljord",
  TwistedFate: "aguas-de-sentina",
  Twitch: "piltover-zaun",
  Udyr: "freljord",
  Urgot: "piltover-zaun",
  Varus: "ionia",
  Vayne: "demacia",
  Veigar: "bandopolis",
  Velkoz: "vazio",
  Vex: "ilha-das-sombras",
  Vi: "piltover-zaun",
  Viego: "ilha-das-sombras",
  Viktor: "piltover-zaun",
  Vladimir: "noxus",
  Volibear: "freljord",
  Warwick: "piltover-zaun",
  Wukong: "ionia",
  Xayah: "ionia",
  Xerath: "shurima",
  XinZhao: "demacia",
  Yasuo: "ionia",
  Yone: "ionia",
  Yorick: "ilha-das-sombras",
  Yuumi: "bandopolis",
  Zac: "piltover-zaun",
  Zed: "ionia",
  Zeri: "piltover-zaun",
  Ziggs: "piltover-zaun",
  Zilean: "shurima",
  Zoe: "targon",
  Zyra: "ixtal"
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
  return `https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/data/pt_BR/champion/${championKey}.json`;
}

function ddragonChampionListUrl() {
  return `https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/data/pt_BR/champion.json`;
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
    image: "assets/todasasregioes.jpg"
  },
  {
    id: "demacia",
    name: "Demacia",
    sigil: "D",
    headline: "Um reino de honra, muralhas e medo diante da magia.",
    description: "Honra, disciplina e uma relacao tensa com tudo o que lembra magia.",
    lore: "Demacia nasceu como um refugio contra os excessos arcanos do passado e construiu sua identidade sobre ordem, coragem e disciplina. Por tras da imagem nobre, o reino vive conflitos internos profundos entre tradicao, poder militar e o temor da magia em seu proprio povo.",
    theme: "Ordem e repressao",
    traits: [
      "Arquitetura monumental em pedra branca e ouro envelhecido.",
      "Cultura militar marcada por honra, dever e legados familiares.",
      "Instituicoes fortes, com forte vigilancia sobre magia.",
      "Paisagem de fortalezas, vales e cidades solenes."
    ],
    conflicts: [
      "Choque entre tradicao demaciana e individuos com dons magicos.",
      "Tensao entre ideal heroico e controle politico.",
      "Conflitos de fronteira e defesa da identidade nacional."
    ],
    glow: "rgba(255, 214, 122, 0.2)",
    image: "assets/demacia.jpg"
  },
  {
    id: "noxus",
    name: "Noxus",
    sigil: "N",
    headline: "Um imperio onde a forca assume forma militar, politica e simbolica.",
    description: "Um imperio brutal, estrategico e movido pela ambicao de conquistar.",
    lore: "Noxus e mais que guerra: e uma filosofia de ascensao pelo merito, pela forca e pela audacia. Seus generais, assassinos e estadistas expandem fronteiras enquanto o imperio absorve culturas, transforma rivais em recursos e converte ambicao em identidade nacional.",
    theme: "Expansao e poder",
    traits: [
      "Visual sombrio, imperial e marcado por vermelho, ferro e pedra escura.",
      "Meritocracia militar como pilar cultural e politico.",
      "Presenca de intriga, estrategia e brutalidade organizada.",
      "Cidades-fortaleza e centros de comando opressivos."
    ],
    conflicts: [
      "Conquista constante de novos territorios e povos.",
      "Disputa entre disciplina imperial e ambicoes pessoais.",
      "Uso de magia, espionagem e guerra como ferramentas legitimas."
    ],
    glow: "rgba(225, 86, 86, 0.2)",
    image: regionArtUrl("Noxus The Immortal Bastion 01.jpg")
  },
  {
    id: "ionia",
    name: "Ionia",
    sigil: "I",
    headline: "Terra espiritual onde beleza, trauma e resistencia coexistem.",
    description: "Beleza espiritual, equilibrio delicado e guerreiros guiados por tradicao.",
    lore: "Ionia e um conjunto de provincias moldadas por espiritualidade, natureza e arte. Depois da invasao noxiana, sua aparente serenidade revelou rachaduras profundas: cada vila, ordem e guerreiro agora escolhe como responder entre equilibrio, resistencia e radicalizacao.",
    theme: "Equilibrio ferido",
    traits: [
      "Paisagens exuberantes, templos, jardins e presenca espiritual intensa.",
      "Culturas diversas unidas por uma relacao viva com o territorio.",
      "Estetica elegante e mistica, com arte e combate lado a lado.",
      "Forcas espirituais influenciam vida, guerra e identidade."
    ],
    conflicts: [
      "Debate entre pacifismo, tradicao e resposta militar.",
      "Feridas deixadas pela invasao de Noxus.",
      "Ruptura entre equilibrio espiritual e necessidade de sobrevivencia."
    ],
    glow: "rgba(203, 123, 255, 0.2)",
    image: "assets/ionia.jpg"
  },
  {
    id: "freljord",
    name: "Freljord",
    sigil: "F",
    headline: "O norte ancestral onde gelo, mitos e sobrevivencia definem tudo.",
    description: "Gelo ancestral, tribos rivais e sobrevivencia forjada em tempestade.",
    lore: "Freljord e uma terra de frio absoluto, memoria ancestral e rivalidade entre tribos. Cada jornada, tratado ou guerra e decidida por resistencia, tradicao e pelo peso de lendas antigas que ainda caminham sob a neve.",
    theme: "Sobrevivencia ancestral",
    traits: [
      "Ambiente gelido, montanhoso e dominado por tempestades.",
      "Tribos com liderancas fortes, simbolos antigos e fe em lendas.",
      "Mistura de brutalidade, honra e profecia.",
      "Sensacao de territorio indomavel e sagrado."
    ],
    conflicts: [
      "Rivalidade entre Avarosanos, Garra do Inverno e antigos poderes.",
      "Busca por unificacao diante do caos e da fome.",
      "Convivencia entre politica tribal e entidades primordiais."
    ],
    glow: "rgba(137, 205, 255, 0.22)",
    image: "assets/freljord.jpg"
  },
  {
    id: "piltover-zaun",
    name: "Piltover & Zaun",
    sigil: "PZ",
    headline: "Duas cidades ligadas pela inovacao, pela desigualdade e pelo risco.",
    description: "Progresso hextec e caos quimico dividem o mesmo horizonte urbano.",
    lore: "Piltover e Zaun formam um mesmo eixo urbano dividido por classe, ar e poder. Acima, o brilho do progresso hextec. Abaixo, a sobrevivencia entre quimica, improviso e violencia. Juntas, as cidades movem o futuro de Runeterra e pagam caro por isso.",
    theme: "Progresso e desigualdade",
    traits: [
      "Paisagem urbana vertical com tecnologia, neons e engenharia.",
      "Piltover representa refinamento, ordem e visao comercial.",
      "Zaun concentra experimentacao, risco e sobrevivencia subterranea.",
      "Atmosfera de laboratorio, revolta e cidade-industria."
    ],
    conflicts: [
      "Abismo social entre riqueza e abandono.",
      "Tecnologia usada tanto para inovar quanto para destruir.",
      "Conflito permanente entre ordem piltoviana e caos zaunita."
    ],
    glow: "rgba(76, 235, 184, 0.18)",
    image: regionArtUrl("Piltover Sidereal Avenue.jpg")
  },
  {
    id: "ilha-das-sombras",
    name: "Ilha das Sombras",
    sigil: "IS",
    headline: "Um reino arruinado onde nevoa e memoria corrompida nunca descansam.",
    description: "Ruina, nevoa e espectros presos a uma tragedia que nunca termina.",
    lore: "A Ilha das Sombras e o eco eterno de uma catastrofe alimentada por obsessao, morte e magia corrompida. Sua nevoa avanca como lembranca viva da Ruina, arrastando tudo que toca para um estado de perda, violencia e assombro.",
    theme: "Ruina e assombramento",
    traits: [
      "Paleta espectral, verde-fantasma e ruinas tomadas pela nevoa.",
      "Ambiente tragico, funebre e sobrenatural.",
      "Sensacao de tempo interrompido e eternamente corrompido.",
      "Arquitetura decadente e espiritualidade retorcida."
    ],
    conflicts: [
      "Expansao da Ruina sobre outras terras.",
      "Presenca de entidades presas ao proprio tormento.",
      "Conflito entre memoria humana e corrupcao espectral."
    ],
    glow: "rgba(98, 255, 198, 0.2)",
    image: regionArtUrl("Shadow Isles The Sundered Vaults Of Arcana.jpg")
  },
  {
    id: "shurima",
    name: "Shurima",
    sigil: "S",
    headline: "Desertos imperiais, ascensao solar e ecos de uma gloria colossal.",
    description: "Imperio solar, ruinas colossais e legados enterrados sob a areia.",
    lore: "Shurima foi um dos maiores imperios de Runeterra e ainda carrega essa grandiosidade em suas ruinas, lendas e ascensoes. Entre cidades soterradas, deuses antigos e imperadores renascidos, o deserto guarda tanto passado quanto futuro.",
    theme: "Legado imperial",
    traits: [
      "Paisagens deserticas gigantescas e arquitetura monumental.",
      "Mitologia solar, ascensao e heranca imperial.",
      "Ruinas antigas escondem poder, historia e catastrofes.",
      "Presenca constante de areia, ouro e vastidao."
    ],
    conflicts: [
      "Reconstrucao do imperio diante de velhas feridas.",
      "Choque entre ascendidos, herdeiros e sobreviventes.",
      "Disputa entre memoria gloriosa e decadencia historica."
    ],
    glow: "rgba(255, 193, 98, 0.2)",
    image: regionArtUrl("Shurima Zoantha Cascade 01.jpg")
  },
  {
    id: "targon",
    name: "Targon",
    sigil: "T",
    headline: "O monte sagrado onde mortais enfrentam o divino e voltam transformados.",
    description: "O pico onde mortais desafiam os ceus para tocar o divino.",
    lore: "Targon e um territorio de peregrinacao, fe e transcendencia. O Monte Targon atrai guerreiros, visionarios e escolhidos que sobem em busca de resposta, poder ou revelacao, muitas vezes retornando como vasos de forcas cosmicas maiores que eles mesmos.",
    theme: "Fe e transcendencia",
    traits: [
      "Paisagens celestiais, picos impossiveis e luz ritualistica.",
      "Relacao intensa com astros, aspectos e destino.",
      "Atmosfera sagrada, silenciosa e monumental.",
      "Mistura de mitologia, misticismo e desafio fisico extremo."
    ],
    conflicts: [
      "Conflito entre vontade humana e designio cosmico.",
      "Ruptura entre Sol, Lua e diferentes interpretacoes da fe.",
      "Peso de carregar poderes maiores que a propria identidade."
    ],
    glow: "rgba(181, 176, 255, 0.18)",
    image: "assets/montetargon.jpg"
  },
  {
    id: "ixtal",
    name: "Ixtal",
    sigil: "IX",
    headline: "Uma civilizacao oculta onde natureza e magia elemental formam a propria ordem.",
    description: "Selvas densas, arquitetura ancestral e dominio absoluto dos elementos.",
    lore: "Ixtal permaneceu isolada por seculos, protegendo seus conhecimentos elementais e sua sofisticada hierarquia arcana. Sob a copa de florestas monumentais, seus governantes tratam o mundo exterior como caotico, inferior e potencialmente perigoso.",
    theme: "Isolamento e maestria elemental",
    traits: [
      "Paisagens tropicais, ruinas escondidas e poder elemental refinado.",
      "Sociedade elitista guiada por linhagem, conhecimento e controle.",
      "Arquitetura integrada ao ambiente natural e a energia magica.",
      "Atmosfera de reino secreto, elegante e antigo."
    ],
    conflicts: [
      "Choque entre isolamento tradicional e pressao do mundo exterior.",
      "Disputa entre ordem ixtali e instabilidade das florestas ao redor.",
      "Uso de magia como instrumento de controle social e poder."
    ],
    glow: "rgba(87, 214, 149, 0.2)",
    image: "assets/ixtal.jpg"
  },
  {
    id: "vazio",
    name: "O Vazio",
    sigil: "VV",
    headline: "Um abismo antigo que devora forma, sentido e realidade.",
    description: "Uma ameaca alienigena e silenciosa que consome tudo o que toca.",
    lore: "O Vazio nao e um reino comum, mas uma ausencia faminta que observa Runeterra como algo a ser corrompido, adaptado ou apagado. Suas criaturas surgem onde a realidade enfraquece, trazendo mutacao, horror e uma inteligencia incompreensivel.",
    theme: "Corrupcao e aniquilacao",
    traits: [
      "Estetica alienigena, organica e profundamente inquietante.",
      "Criaturas mutantes moldadas para consumir e evoluir.",
      "Sensacao de vastidao cosmica e terror existencial.",
      "Paleta escura com contrastes vibrantes e irreais."
    ],
    conflicts: [
      "Ameaca constante de ruptura entre Runeterra e o Vazio.",
      "Contaminacao de criaturas, magia e territorio.",
      "Luta entre civilizacao e uma fome sem rosto."
    ],
    glow: "rgba(162, 98, 255, 0.22)",
    image: "assets/vazio.jpg"
  },
  {
    id: "bandopolis",
    name: "Bandopolis",
    sigil: "B",
    headline: "A cidade escondida dos yordles, onde fantasia e caos andam de maos dadas.",
    description: "Um dominio caprichoso, colorido e imprevisivel alem dos portais espirituais.",
    lore: "Bandopolis existe em outra camada da realidade, ligada a Runeterra por passagens secretas e energia feerica. E o lar dos yordles, seres cuja leveza, curiosidade e excentricidade escondem uma relacao muito propria com magia, espaco e tempo.",
    theme: "Fantasia e travessura",
    traits: [
      "Ambiente whimsical, vibrante e cheio de magia feerica.",
      "Lar dos yordles e de sua logica encantadoramente imprevisivel.",
      "Espaco dobrado por portais, caminhos e regras incomuns.",
      "Sensacao de lugar oculto, vivo e quase sonhado."
    ],
    conflicts: [
      "Choque entre leveza yordle e os perigos do mundo material.",
      "Segredos de Bandopolis e sua relacao com portais.",
      "Equilibrio entre humor, magia e caos."
    ],
    glow: "rgba(255, 173, 112, 0.2)",
    image: "assets/bandopolis.jpg"
  },
  {
    id: "aguas-de-sentina",
    name: "Aguas de Sentina",
    sigil: "AS",
    headline: "Um porto de saqueadores, monstros marinhos e pactos feitos na base da sobrevivencia.",
    description: "Docas sombrias, supersticao, comercio brutal e o cheiro constante de sal e perigo.",
    lore: "Aguas de Sentina e uma cidade-portuario marcada por caca, contrabando e violencia. Entre tavernas, navios e criancas do mar, a regiao prospera em torno de coragem, oportunismo e da certeza de que qualquer noite pode terminar em lenda ou tragedia.",
    theme: "Piratas e sobrevivencia",
    traits: [
      "Atmosfera maritima, sombria e carregada de supersticao.",
      "Cultura de mercenarios, caçadores e capitães brutais.",
      "Mistura de aventura, decadencia e lucro imediato.",
      "Paisagens de cais, mar aberto e tempestades violentas."
    ],
    conflicts: [
      "Disputa constante por poder entre capitães e faccoes locais.",
      "Ameacas vindas do mar e de criaturas ancestrais.",
      "Vida sustentada por risco, saque e acordos instaveis."
    ],
    glow: "rgba(88, 178, 255, 0.2)",
    image: "assets/aguasdesentina.jpg"
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

document.body.classList.add("js-ready");

const featuredIds = ["yasuo", "lux", "swain", "ashe", "jinx", "viego"];
const currentPage = document.body.dataset.page || "home";
const isCatalogPage = currentPage === "catalog";

const regionFilters = document.getElementById("regionFilters");
const championGrid = document.getElementById("championGrid");
const featuredRail = document.getElementById("featuredRail");
const championCounter = document.getElementById("championCounter");
const championModal = document.getElementById("championModal");
const regionModal = document.getElementById("regionModal");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.getElementById("main-nav");
const backToTop = document.getElementById("backToTop");
const laneFilter = document.getElementById("laneFilter");
const classFilter = document.getElementById("classFilter");
const searchFilter = document.getElementById("searchFilter");
const resetFiltersButton = document.getElementById("resetFilters");
const heroStats = document.getElementById("heroStats");
const modalRegionFilterButton = document.getElementById("modalRegionFilterButton");

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

const regionDetailElements = {
  name: document.getElementById("modalRegionName"),
  headline: document.getElementById("modalRegionHeadline"),
  tag: document.getElementById("modalRegionTag"),
  theme: document.getElementById("modalRegionTheme"),
  image: document.getElementById("modalRegionImage"),
  sigil: document.getElementById("modalRegionSigil"),
  description: document.getElementById("modalRegionDescription"),
  traits: document.getElementById("modalRegionTraits"),
  conflicts: document.getElementById("modalRegionConflicts"),
  champions: document.getElementById("modalRegionChampions")
};

const activeFilters = {
  region: "all",
  lane: "all",
  className: "all",
  search: ""
};

const championSpellCache = new Map();
let activeRegionModalId = "all";
let championRoster = [...champions];

function hydrateFiltersFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const region = params.get("regiao");
  const lane = params.get("lane");
  const className = params.get("classe");
  const search = params.get("busca");

  if (region) {
    activeFilters.region = region;
  }
  if (lane) {
    activeFilters.lane = lane;
  }
  if (className) {
    activeFilters.className = className;
  }
  if (search) {
    activeFilters.search = search;
  }
}

function syncFilterControls() {
  if (laneFilter) {
    laneFilter.value = activeFilters.lane;
  }
  if (classFilter) {
    classFilter.value = activeFilters.className;
  }
  if (searchFilter) {
    searchFilter.value = activeFilters.search;
  }
}

function formatRegion(regionId) {
  if (regionId === "runeterra") {
    return "Runeterra";
  }
  const region = regions.find((item) => item.id === regionId);
  return region ? region.name : regionId;
}

function formatLane(laneId) {
  return laneLabels[laneId] || laneId;
}

function getCatalogUrl(regionId = "all") {
  const url = new URL("campeoes.html", window.location.href);
  if (regionId && regionId !== "all") {
    url.searchParams.set("regiao", regionId);
  }
  url.hash = "campeoes";
  return url.toString();
}

function goToCatalog(regionId = "all") {
  window.location.href = getCatalogUrl(regionId);
}

function getCatalogAnchorTarget() {
  return document.getElementById("campeoes") || document.getElementById("hero");
}

function stripHtml(value) {
  return String(value || "").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function mapClassTag(tag = "Especialista") {
  const classMap = {
    Assassin: "Assassino",
    Fighter: "Lutador",
    Mage: "Mago",
    Marksman: "Atirador",
    Support: "Suporte",
    Tank: "Tanque",
    Controller: "Controlador",
    Specialist: "Especialista"
  };
  return classMap[tag] || tag;
}

function mapPrimaryClass(tags = []) {
  const primary = Array.isArray(tags) ? tags[0] || "Especialista" : tags || "Especialista";
  return mapClassTag(primary);
}

function inferLanes(tags = []) {
  const set = new Set();
  if (tags.includes("Marksman")) {
    set.add("adc");
  }
  if (tags.includes("Support")) {
    set.add("support");
  }
  if (tags.includes("Mage") || tags.includes("Assassin")) {
    set.add("mid");
  }
  if (tags.includes("Tank")) {
    set.add("top");
    if (!set.has("support")) {
      set.add("support");
    }
  }
  if (tags.includes("Fighter")) {
    set.add("top");
    set.add("jungle");
  }
  if (set.size === 0) {
    set.add("mid");
  }
  return [...set].slice(0, 2);
}

function summarizeText(text, maxLength = 140) {
  const clean = stripHtml(text);
  if (!clean) {
    return "Descricao indisponivel.";
  }

  const firstSentence = clean.split(/(?<=[.!?])\s+/)[0];
  const candidate = firstSentence && firstSentence.length > 18 ? firstSentence : clean;
  if (candidate.length <= maxLength) {
    return candidate;
  }

  return `${candidate.slice(0, maxLength).trim()}...`;
}

function hashChampionSeed(value) {
  return [...String(value)].reduce((accumulator, character) => accumulator + character.charCodeAt(0), 0);
}

function pickFactVariant(seed, variants, offset = 0) {
  return variants[(seed + offset) % variants.length];
}

function normalizeTagList(tags) {
  if (Array.isArray(tags)) {
    return tags.filter(Boolean).map((tag) => String(tag).trim()).filter(Boolean);
  }

  if (typeof tags === "string") {
    const trimmed = tags.trim();
    if (!trimmed) {
      return [];
    }

    if (trimmed.includes(",")) {
      return trimmed.split(",").map((tag) => tag.trim()).filter(Boolean);
    }

    return [trimmed];
  }

  return [];
}

function expandShortRole(tag) {
  const shortMap = {
    a: "assassino",
    f: "lutador",
    m: "mago",
    t: "tanque",
    s: "suporte",
    c: "controlador",
    e: "especialista"
  };

  const normalized = String(tag || "").trim().toLowerCase();
  return shortMap[normalized] || normalized;
}

function formatRoleList(tags) {
  const normalizedTags = normalizeTagList(tags).map(expandShortRole);

  if (!normalizedTags.length) {
    return "especialista";
  }
  if (normalizedTags.length === 1) {
    return normalizedTags[0];
  }
  if (normalizedTags.length === 2) {
    return `${normalizedTags[0]} e ${normalizedTags[1]}`;
  }
  return `${normalizedTags[0]}, ${normalizedTags[1]} e ${normalizedTags[2]}`;
}

function buildChampionFacts(championData, translatedTags, lanes = []) {
  const seed = hashChampionSeed(championData.id);
  const roleText = formatRoleList(translatedTags);
  const laneText = lanes.length ? lanes.map(formatLane).join(" / ") : "rotas flexiveis";
  const resourceText = championData.partype && championData.partype.trim() ? championData.partype.toLowerCase() : "sem recurso tradicional";
  const titleText = championData.title || "uma figura marcante de Runeterra";

  const identityFacts = [
    `${championData.name} carrega o titulo "${titleText}", o que ja ajuda a definir sua presenca no universo.`,
    `${championData.name} se destaca na lore por assumir o papel de ${titleText.toLowerCase()}.`,
    `Dentro de Runeterra, ${championData.name} e reconhecido como ${titleText.toLowerCase()}.`
  ];

  const gameplayFacts = [
    `Seu estilo costuma girar em torno de ${roleText}, funcionando muito bem em ${laneText}.`,
    `Na pratica, ${championData.name} costuma aparecer como ${roleText} e se adapta melhor a ${laneText}.`,
    `${championData.name} entra em jogo com perfil de ${roleText}, geralmente brilhando em ${laneText}.`
  ];

  const flavorFacts = [
    `${championData.name} usa ${resourceText}, o que influencia diretamente seu ritmo de trocas e janelas de poder.`,
    `O uso de ${resourceText} ajuda a definir como ${championData.name} cresce e administra suas jogadas.`,
    `Parte da identidade de ${championData.name} em jogo vem de atuar com ${resourceText}, exigindo leitura de momento e ritmo.`
  ];

  return [
    pickFactVariant(seed, identityFacts, 0),
    pickFactVariant(seed, gameplayFacts, 1),
    pickFactVariant(seed, flavorFacts, 2)
  ];
}

function buildGeneratedChampion(championData) {
  const tags = championData.tags || [];
  const championKey = championData.id;
  const slug = championKey.toLowerCase();
  const translatedTags = tags.map(mapClassTag).slice(0, 3);

  return {
    id: slug,
    alias: slug,
    apiKey: championKey,
    name: championData.name,
    title: championData.title,
    region: championRegionMap[championKey] || "runeterra",
    className: mapPrimaryClass(tags),
    lanes: inferLanes(tags),
    tags: translatedTags,
    style: `${championData.name} atua principalmente como ${mapPrimaryClass(tags).toLowerCase()} e foi carregado automaticamente pela base oficial do Data Dragon em portugues.`,
    lore: summarizeText(championData.blurb, 180),
    facts: buildChampionFacts(championData, translatedTags, inferLanes(tags)),
    image: splashArt(championKey),
    artStart: "#6d8aac",
    artEnd: "#162233",
    sigil: championData.name.slice(0, 1).toUpperCase(),
    skills: [],
    autoGenerated: true,
    detailLoaded: false
  };
}

async function loadChampionRoster() {
  try {
    const response = await fetch(ddragonChampionListUrl());
    if (!response.ok) {
      throw new Error("Falha ao carregar champion.json");
    }

    const payload = await response.json();
    const generated = Object.values(payload.data).map(buildGeneratedChampion);
    const manualById = new Map(champions.map((champion) => [champion.id, champion]));
    championRoster = generated.map((champion) => {
      const manual = manualById.get(champion.id);
      return manual ? { ...champion, ...manual, autoGenerated: false, detailLoaded: true } : champion;
    });
    renderHeroStats();
    renderFilterOptions();
    renderChampions();
  } catch (error) {
    championRoster = [...champions];
    renderHeroStats();
    renderFilterOptions();
    renderChampions();
  }
}

function renderHeroStats() {
  if (!heroStats) {
    return;
  }

  const items = [
    { value: String(championRoster.length), label: "campeoes no roster atual." },
    { value: String(regions.length - 1), label: "regioes principais ilustradas." },
    { value: String(new Set(championRoster.flatMap((champion) => champion.lanes)).size), label: "rotas filtraveis na galeria." }
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
  if (!regionFilters) {
    return;
  }

  const variant = regionFilters.dataset.variant || "cards";

  if (variant === "compact") {
    regionFilters.innerHTML = regions
      .map(
        (region) => `
          <button
            class="region-pill ${region.id === activeFilters.region ? "is-active" : ""}"
            type="button"
            data-region="${region.id}"
          >
            ${region.name}
          </button>
        `
      )
      .join("");
    return;
  }

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

function getRegionChampions(regionId) {
  return championRoster.filter((champion) => champion.region === regionId);
}

function renderFilterOptions() {
  if (!laneFilter || !classFilter) {
    return;
  }

  const lanes = [...new Set(championRoster.flatMap((champion) => champion.lanes))];
  const classes = [...new Set(championRoster.map((champion) => champion.className))].sort((a, b) => a.localeCompare(b));

  laneFilter.innerHTML = ['<option value="all">Todas</option>']
    .concat(lanes.map((lane) => `<option value="${lane}">${formatLane(lane)}</option>`))
    .join("");

  classFilter.innerHTML = ['<option value="all">Todas</option>']
    .concat(classes.map((className) => `<option value="${className}">${className}</option>`))
    .join("");

  syncFilterControls();
}

function getFilteredChampions() {
  const searchTerm = activeFilters.search.trim().toLowerCase();

  return championRoster.filter((champion) => {
    const regionMatch = activeFilters.region === "all" || champion.region === activeFilters.region;
    const laneMatch = activeFilters.lane === "all" || champion.lanes.includes(activeFilters.lane);
    const classMatch = activeFilters.className === "all" || champion.className === activeFilters.className;
    const searchMatch = !searchTerm || champion.name.toLowerCase().includes(searchTerm);
    return regionMatch && laneMatch && classMatch && searchMatch;
  });
}

function renderChampions() {
  if (!championGrid) {
    return;
  }

  const visibleChampions = getFilteredChampions();

  championGrid.innerHTML = visibleChampions.length
    ? visibleChampions
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
        .join("")
    : '<div class="empty-state">Nenhum campeao foi encontrado com os filtros atuais.</div>';

  if (championCounter) {
    championCounter.textContent = `${visibleChampions.length} campeao${visibleChampions.length > 1 ? "es" : ""} visivel${visibleChampions.length > 1 ? "s" : ""}`;
  }
}

function renderFeatured() {
  if (!featuredRail) {
    return;
  }

  const featuredChampions = featuredIds
    .map((id) => championRoster.find((champion) => champion.id === id))
    .filter(Boolean);

  featuredRail.innerHTML = featuredChampions
    .map(
      (champion) => `
        <article
          class="featured-card reveal is-visible"
          tabindex="0"
          role="button"
          aria-label="Abrir detalhes de ${champion.name}"
          data-champion="${champion.id}"
          style="--feature-image: url('${champion.image}'); --feature-start: ${champion.artStart};"
        >
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
  const championKey = champion.apiKey || champion.alias.charAt(0).toUpperCase() + champion.alias.slice(1);

  try {
    const response = await fetch(ddragonChampionDataUrl(championKey));
    if (!response.ok) {
      throw new Error(`Falha ao carregar ${champion.alias}`);
    }

    const payload = await response.json();
    const championData = payload.data[championKey];
    const resolvedIcons = [
      { slot: "Passiva", icon: ddragonPassiveIcon(championData.passive.image.full) },
      ...championData.spells.map((spellData, index) => ({
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

async function ensureChampionDetails(champion) {
  if (champion.detailLoaded || !champion.autoGenerated) {
    return champion;
  }

  const championKey = champion.apiKey || champion.alias.charAt(0).toUpperCase() + champion.alias.slice(1);

  try {
    const response = await fetch(ddragonChampionDataUrl(championKey));
    if (!response.ok) {
      throw new Error(`Falha ao carregar detalhes de ${championKey}`);
    }

    const payload = await response.json();
    const championData = payload.data[championKey];
    champion.title = championData.title;
    champion.lore = summarizeText(championData.lore || championData.blurb || champion.lore, 220);
    champion.tags = (championData.tags || []).map(mapClassTag).slice(0, 3);
    champion.facts = buildChampionFacts(championData, champion.tags, champion.lanes);
    champion.skills = [
      skill("Passiva", championData.passive.name, summarizeText(championData.passive.description, 130), "passiva"),
      ...championData.spells.map((spellData, index) =>
        skill(["Q", "W", "E", "R"][index], spellData.name, summarizeText(spellData.description, 130), "habilidade")
      )
    ];
    champion.detailLoaded = true;
    return champion;
  } catch (error) {
    champion.skills = champion.skills.length
      ? champion.skills
      : [
          skill("Passiva", "Dados indisponiveis", "Nao foi possivel carregar os detalhes oficiais desta habilidade.", "passiva"),
          skill("Q", "Dados indisponiveis", "Nao foi possivel carregar os detalhes oficiais desta habilidade.", "habilidade"),
          skill("W", "Dados indisponiveis", "Nao foi possivel carregar os detalhes oficiais desta habilidade.", "habilidade"),
          skill("E", "Dados indisponiveis", "Nao foi possivel carregar os detalhes oficiais desta habilidade.", "habilidade"),
          skill("R", "Dados indisponiveis", "Nao foi possivel carregar os detalhes oficiais desta habilidade.", "ultimate")
        ];
    champion.detailLoaded = true;
    return champion;
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

function openRegionModal(regionId) {
  if (!regionModal) {
    return;
  }

  const region = regions.find((item) => item.id === regionId);
  if (!region) {
    return;
  }

  if (region.id === "all") {
    activeFilters.region = "all";
    applyFilters();
    const target = getCatalogAnchorTarget();
    if (target && isCatalogPage) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      goToCatalog();
    }
    return;
  }

  const linkedChampions = getRegionChampions(regionId);
  activeRegionModalId = regionId;

  regionDetailElements.name.textContent = region.name;
  regionDetailElements.headline.textContent = region.headline;
  regionDetailElements.tag.textContent = region.name;
  regionDetailElements.theme.textContent = region.theme;
  regionDetailElements.image.src = region.image;
  regionDetailElements.image.alt = `Paisagem de ${region.name}`;
  regionDetailElements.sigil.textContent = region.sigil;
  regionDetailElements.description.textContent = region.lore;
  regionDetailElements.traits.innerHTML = region.traits.map((item) => `<li>${item}</li>`).join("");
  regionDetailElements.conflicts.innerHTML = region.conflicts.map((item) => `<li>${item}</li>`).join("");
  regionDetailElements.champions.innerHTML = linkedChampions
    .map((champion) => `<span class="chip is-emphasis">${champion.name}</span>`)
    .join("") || '<span class="chip">Nenhum campeao desta regiao foi adicionado ainda.</span>';

  regionModal.classList.add("is-open");
  regionModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeRegionModal() {
  if (!regionModal) {
    return;
  }

  regionModal.classList.remove("is-open");
  regionModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

async function openChampionModal(championId) {
  if (!championModal) {
    return;
  }

  const champion = championRoster.find((item) => item.id === championId);
  if (!champion) {
    return;
  }

  await ensureChampionDetails(champion);
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
  if (detailElements.sigil) {
    detailElements.sigil.textContent = champion.sigil;
    detailElements.sigil.style.background = `linear-gradient(145deg, ${champion.artStart}, ${champion.artEnd})`;
  }
  detailElements.tags.innerHTML = champion.tags.map((tag) => `<span class="chip">${tag}</span>`).join("");
  detailElements.laneList.innerHTML = champion.lanes.map((lane) => `<span class="chip is-emphasis">${formatLane(lane)}</span>`).join("");
  detailElements.skills.innerHTML = champion.skills.map((item) => renderSkillItem(champion, item, resolvedIcons)).join("");
  detailElements.facts.innerHTML = champion.facts.map((fact) => `<li>${fact}</li>`).join("");

  championModal.classList.add("is-open");
  championModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeChampionModal() {
  if (!championModal) {
    return;
  }

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

  if ((regionFilters?.dataset.variant || "cards") === "compact") {
    activeFilters.region = button.dataset.region;
    applyFilters();
    return;
  }

  openRegionModal(button.dataset.region);
}

function handleChampionActivation(event) {
  const championCard = event.target.closest("[data-champion]");
  if (!championCard) {
    return;
  }

  openChampionModal(championCard.dataset.champion);
}

function handleScroll() {
  if (!backToTop) {
    return;
  }

  if (window.scrollY > 420) {
    backToTop.classList.add("is-visible");
  } else {
    backToTop.classList.remove("is-visible");
  }
}

function toggleMobileMenu() {
  if (!mainNav || !menuToggle) {
    return;
  }

  const isOpen = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
}

function closeMobileMenu() {
  if (!mainNav || !menuToggle) {
    return;
  }

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

async function init() {
  hydrateFiltersFromUrl();
  renderHeroStats();
  renderFilterOptions();
  renderRegions();
  renderChampions();
  renderFeatured();
  setupReveals();
  await loadChampionRoster();
  renderFeatured();

  if (regionFilters) {
    regionFilters.addEventListener("click", handleRegionFilterClick);
  }

  if (laneFilter) {
    laneFilter.addEventListener("change", () => {
      activeFilters.lane = laneFilter.value;
      renderChampions();
    });
  }

  if (classFilter) {
    classFilter.addEventListener("change", () => {
      activeFilters.className = classFilter.value;
      renderChampions();
    });
  }

  if (searchFilter) {
    searchFilter.addEventListener("input", () => {
      activeFilters.search = searchFilter.value.trim();
      renderChampions();
    });
  }

  if (resetFiltersButton) {
    resetFiltersButton.addEventListener("click", () => {
      activeFilters.region = "all";
      activeFilters.lane = "all";
      activeFilters.className = "all";
      activeFilters.search = "";
      syncFilterControls();
      applyFilters();
    });
  }

  if (championGrid) {
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
  }

  if (featuredRail) {
    featuredRail.addEventListener("click", handleChampionActivation);
    featuredRail.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        const featuredCard = event.target.closest("[data-champion]");
        if (!featuredCard) {
          return;
        }

        event.preventDefault();
        openChampionModal(featuredCard.dataset.champion);
      }
    });
  }

  if (championModal) {
    championModal.addEventListener("click", (event) => {
      if (event.target.matches("[data-close-modal]")) {
        closeChampionModal();
      }
    });
  }

  if (regionModal) {
    regionModal.addEventListener("click", (event) => {
      if (event.target.matches("[data-close-region-modal]")) {
        closeRegionModal();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeChampionModal();
      closeRegionModal();
    }
  });

  if (modalRegionFilterButton) {
    modalRegionFilterButton.addEventListener("click", () => {
      if (isCatalogPage) {
        activeFilters.region = activeRegionModalId;
        applyFilters();
        closeRegionModal();
        const target = getCatalogAnchorTarget();
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        return;
      }

      closeRegionModal();
      goToCatalog(activeRegionModalId);
    });
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMobileMenu);
  }

  if (mainNav) {
    mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));
  }

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
}

init();
