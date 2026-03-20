export interface Slot {
  slug: string;
  name: string;
  provider: string;
  image: string;
  rtp: string;
  volatility: string;
  maxWin: string;
  players: number;
  hasBonusBuy: boolean;
  demoUrl: string;
}

export const slots: Slot[] = [
  // Pragmatic Play
  { slug: "sweet-bonanza", name: "Sweet Bonanza", provider: "Pragmatic Play", image: "/slots/sweet-bonanza.png", rtp: "96.48%", volatility: "Haute", maxWin: "21175x", players: 1056, hasBonusBuy: true, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20fruitsw&lang=fr&cur=EUR" },
  { slug: "gates-of-olympus", name: "Gates of Olympus", provider: "Pragmatic Play", image: "/slots/gates-of-olympus.png", rtp: "96.50%", volatility: "Haute", maxWin: "5000x", players: 887, hasBonusBuy: true, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20olympgate&lang=fr&cur=EUR" },
  { slug: "sugar-rush", name: "Sugar Rush", provider: "Pragmatic Play", image: "/slots/sugar-rush.png", rtp: "96.50%", volatility: "Haute", maxWin: "5000x", players: 684, hasBonusBuy: true, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20sugarrush&lang=fr&cur=EUR" },
  { slug: "starlight-princess", name: "Starlight Princess", provider: "Pragmatic Play", image: "/slots/starlight-princess.png", rtp: "96.50%", volatility: "Haute", maxWin: "5000x", players: 634, hasBonusBuy: true, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20starlight&lang=fr&cur=EUR" },
  { slug: "big-bass-bonanza", name: "Big Bass Bonanza", provider: "Pragmatic Play", image: "/slots/big-bass-bonanza.png", rtp: "96.71%", volatility: "Haute", maxWin: "2100x", players: 346, hasBonusBuy: false, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs10bbbonanza&lang=fr&cur=EUR" },
  { slug: "the-dog-house", name: "The Dog House", provider: "Pragmatic Play", image: "/slots/the-dog-house.png", rtp: "96.51%", volatility: "Haute", maxWin: "6750x", players: 289, hasBonusBuy: true, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20doghouse&lang=fr&cur=EUR" },
  { slug: "wild-west-gold", name: "Wild West Gold", provider: "Pragmatic Play", image: "/slots/wild-west-gold.png", rtp: "96.51%", volatility: "Haute", maxWin: "10000x", players: 255, hasBonusBuy: false, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs40wildwest&lang=fr&cur=EUR" },
  { slug: "fruit-party", name: "Fruit Party", provider: "Pragmatic Play", image: "/slots/fruit-party.png", rtp: "96.47%", volatility: "Haute", maxWin: "5000x", players: 208, hasBonusBuy: true, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20fruitparty&lang=fr&cur=EUR" },
  // gems-bonanza — retiré (erreur démo)
  { slug: "fire-strike", name: "Fire Strike", provider: "Pragmatic Play", image: "/slots/fire-strike.png", rtp: "96.49%", volatility: "Haute", maxWin: "1315x", players: 160, hasBonusBuy: false, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs10firestrike&lang=fr&cur=EUR" },
  { slug: "madame-destiny-megaways", name: "Madame Destiny Megaways", provider: "Pragmatic Play", image: "/slots/madame-destiny-megaways.png", rtp: "96.56%", volatility: "Haute", maxWin: "5000x", players: 144, hasBonusBuy: true, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vswaysmadame&lang=fr&cur=EUR" },
  // sweet-bonanza-xmas — retiré (erreur démo)
  { slug: "gates-of-olympus-1000", name: "Gates of Olympus 1000", provider: "Pragmatic Play", image: "/slots/gates-of-olympus-1000.png", rtp: "96.50%", volatility: "Très Haute", maxWin: "15000x", players: 945, hasBonusBuy: true, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20olympx&lang=fr&cur=EUR" },
  { slug: "sweet-bonanza-1000", name: "Sweet Bonanza 1000", provider: "Pragmatic Play", image: "/slots/sweet-bonanza-1000.png", rtp: "96.48%", volatility: "Très Haute", maxWin: "25000x", players: 1120, hasBonusBuy: true, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20fruitswx&lang=fr&cur=EUR" },
  { slug: "sugar-rush-1000", name: "Sugar Rush 1000", provider: "Pragmatic Play", image: "/slots/sugar-rush-1000.png", rtp: "96.53%", volatility: "Très Haute", maxWin: "25000x", players: 780, hasBonusBuy: true, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20sugarrushx&lang=fr&cur=EUR" },
  // big-bass-splash — retiré (erreur démo)
  { slug: "floating-dragon", name: "Floating Dragon", provider: "Pragmatic Play", image: "/slots/floating-dragon.png", rtp: "96.71%", volatility: "Haute", maxWin: "5000x", players: 275, hasBonusBuy: false, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs10floatdrg&lang=fr&cur=EUR" },
  // zeus-vs-hades — retiré (erreur démo)
  { slug: "5-lions-megaways", name: "5 Lions Megaways", provider: "Pragmatic Play", image: "/slots/5-lions-megaways.png", rtp: "96.50%", volatility: "Haute", maxWin: "5000x", players: 289, hasBonusBuy: true, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vswayslions&lang=fr&cur=EUR" },
  { slug: "jokers-jewels", name: "Joker's Jewels", provider: "Pragmatic Play", image: "/slots/jokers-jewels.png", rtp: "96.50%", volatility: "Moyenne", maxWin: "1000x", players: 670, hasBonusBuy: false, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs5joker&lang=fr&cur=EUR" },
  { slug: "hot-fiesta", name: "Hot Fiesta", provider: "Pragmatic Play", image: "/slots/hot-fiesta.png", rtp: "96.56%", volatility: "Haute", maxWin: "5000x", players: 195, hasBonusBuy: true, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs25hotfiesta&lang=fr&cur=EUR" },
  // the-hand-of-midas — retiré (erreur démo)
  { slug: "release-the-kraken-2", name: "Release the Kraken 2", provider: "Pragmatic Play", image: "/slots/release-the-kraken-2.png", rtp: "96.50%", volatility: "Haute", maxWin: "5000x", players: 156, hasBonusBuy: true, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20kraken2&lang=fr&cur=EUR" },
  { slug: "cleocatra", name: "Cleocatra", provider: "Pragmatic Play", image: "/slots/cleocatra.png", rtp: "96.20%", volatility: "Haute", maxWin: "5000x", players: 230, hasBonusBuy: true, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20cleocatra&lang=fr&cur=EUR" },
  { slug: "great-rhino-megaways", name: "Great Rhino Megaways", provider: "Pragmatic Play", image: "/slots/great-rhino-megaways.png", rtp: "96.58%", volatility: "Haute", maxWin: "20000x", players: 245, hasBonusBuy: true, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vswaysrhino&lang=fr&cur=EUR" },
  { slug: "wolf-gold", name: "Wolf Gold", provider: "Pragmatic Play", image: "/slots/wolf-gold.png", rtp: "96.01%", volatility: "Moyenne", maxWin: "2500x", players: 410, hasBonusBuy: false, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs25wolfgold&lang=fr&cur=EUR" },
  { slug: "john-hunter-book-of-tut", name: "John Hunter Book of Tut", provider: "Pragmatic Play", image: "/slots/john-hunter-book-of-tut.png", rtp: "96.50%", volatility: "Haute", maxWin: "5000x", players: 198, hasBonusBuy: false, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs10bookoftut&lang=fr&cur=EUR" },
  { slug: "mustang-gold", name: "Mustang Gold", provider: "Pragmatic Play", image: "/slots/mustang-gold.png", rtp: "96.53%", volatility: "Haute", maxWin: "12000x", players: 165, hasBonusBuy: false, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs25mustang&lang=fr&cur=EUR" },
  { slug: "power-of-thor-megaways", name: "Power of Thor Megaways", provider: "Pragmatic Play", image: "/slots/power-of-thor-megaways.png", rtp: "96.55%", volatility: "Haute", maxWin: "5000x", players: 220, hasBonusBuy: true, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vswayshammthor&lang=fr&cur=EUR" },
  { slug: "aztec-gems", name: "Aztec Gems", provider: "Pragmatic Play", image: "/slots/aztec-gems.png", rtp: "96.52%", volatility: "Moyenne", maxWin: "375x", players: 320, hasBonusBuy: false, demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs5aztecgems&lang=fr&cur=EUR" },
  // wild-frontier, rabbit-heist, fire-stampede-ultimate — retirés (erreur démo)

  // Hacksaw Gaming — retirés car démos bloquées par le provider
];

export function getSlotsByProvider(): Record<string, Slot[]> {
  const map: Record<string, Slot[]> = {};
  for (const s of slots) {
    if (!map[s.provider]) map[s.provider] = [];
    map[s.provider].push(s);
  }
  return map;
}
