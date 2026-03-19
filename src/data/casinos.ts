export interface Casino {
  slug: string;
  name: string;
  logo: string;
  logoUrl: string;
  bannerImage: string;
  rating: number;
  bonusTitle: string;
  bonusAmount: string;
  bonusDescription: string;
  affiliateUrl: string;
  pros: string[];
  cons: string[];
  paymentMethods: string[];
  minDeposit: string;
  withdrawalTime: string;
  wager: string;
  license: string;
  games: number;
  providers: string[];
  featured: boolean;
  tags: string[];
  promoCode?: string;
  discordBonus?: string;
  maxBet?: string;
}

export const casinos: Casino[] = [
  {
    slug: "hugo-bets",
    name: "Hugo Bets",
    logo: "🔥",
    logoUrl: "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://hugobets.com&size=128",
    bannerImage: "https://cdn.beacons.ai/user_content/utoICWn4YnWZ9kTPzJLpbuWnXhM2/referenced_images/generated-images__link-in-bio__links-block__home__785d9f26-e1b4-42af-bce5-0653af95365e__79931a8a-4655-4664-998f-f6bc43057601__16a58aa6-ed45-4671-bce7-9eb51036e91f.webp",
    rating: 4.8,
    bonusTitle: "Bonus de Bienvenue",
    bonusAmount: "1000€ + 150 Free Spins",
    bonusDescription: "100% jusqu'à 1000€ + 150 FS répartis sur 3 dépôts — SANS WAGER ! + 25€ offert via Discord",
    affiliateUrl: "https://partners.hbetpartners.com/geo/3/608b3f30-1191-11f1-afd2-f6136488bd8f/1",
    pros: ["Bonus généreux jusqu'à 1000€", "150 free spins inclus", "25€ offert en bonus", "Large sélection de jeux"],
    cons: ["Conditions de mise à vérifier"],
    paymentMethods: ["Visa", "Mastercard", "Crypto", "Skrill", "Neteller"],
    minDeposit: "20€",
    withdrawalTime: "24h",
    wager: "FREE (aucun wager)",
    license: "Curaçao",
    games: 3000,
    providers: ["Pragmatic Play", "NetEnt", "Play'n GO", "Evolution"],
    featured: true,
    tags: ["Top Pick", "Meilleur Bonus"],
    discordBonus: "25€ gratuit sur Discord",
    maxBet: "5€",
  },
  {
    slug: "grandz-bet",
    name: "Grandz Bet",
    logo: "👑",
    logoUrl: "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://grandzbet.com&size=128",
    bannerImage: "https://cdn.beacons.ai/user_content/utoICWn4YnWZ9kTPzJLpbuWnXhM2/referenced_images/generated-images__link-in-bio__links-block__home__785d9f26-e1b4-42af-bce5-0653af95365e__963053df-672a-4ec1-a5e4-c1e9831b18da__8ef752ea-9e14-448d-8494-c51c70b93808.webp",
    rating: 4.7,
    bonusTitle: "Bonus de Bienvenue",
    bonusAmount: "25€ Offerts*",
    bonusDescription: "Bonus 150% sur votre premier dépôt jusqu'à 1500€",
    affiliateUrl: "https://aff1.peakgamble.com/workspaces/t/39c7ca37-e9e0-4c75-8ce4-c1a4b36897b4",
    pros: ["Bonus massif de 1500€", "150% sur le premier dépôt", "25€ gratuit via Discord", "Interface moderne"],
    cons: ["Wager x40"],
    paymentMethods: ["Visa", "Mastercard", "Crypto", "Virement"],
    minDeposit: "20€",
    withdrawalTime: "24-48h",
    wager: "x40",
    license: "Curaçao",
    games: 2500,
    providers: ["Pragmatic Play", "Hacksaw Gaming", "Push Gaming", "Nolimit City"],
    featured: true,
    tags: ["Gros Bonus", "150%"],
    discordBonus: "25€ gratuit sur Discord",
    maxBet: "5€",
  },
  {
    slug: "shiny-wilds",
    name: "ShinyWilds",
    logo: "✨",
    logoUrl: "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://shinywilds.com&size=128",
    bannerImage: "https://cdn.beacons.ai/user_content/utoICWn4YnWZ9kTPzJLpbuWnXhM2/referenced_images/generated-images__link-in-bio__links-block__home__785d9f26-e1b4-42af-bce5-0653af95365e__7323cc88-13d1-438f-b89c-d44acd1e0128__df5d9469-96ce-4410-8a4d-7d6f1cfd839b.webp",
    rating: 4.6,
    bonusTitle: "Bonus de Bienvenue",
    bonusAmount: "150€ + 25€ Offert",
    bonusDescription: "Bonus 100% sur votre premier dépôt jusqu'à 150€",
    affiliateUrl: "https://partners.shinywildpartners.com/v2/text/127/6/7c81fb35-147d-11f0-bf43-cad21936ea85/1",
    pros: ["WAGER FREE — Pas de conditions de mise !", "Dépôt et retrait en carte bancaire", "25€ offert", "Retraits rapides"],
    cons: ["Bonus plafonné à 150€"],
    paymentMethods: ["Visa", "Mastercard", "Carte bancaire"],
    minDeposit: "10€",
    withdrawalTime: "12h",
    wager: "FREE (aucun wager)",
    license: "Curaçao",
    games: 2000,
    providers: ["NetEnt", "Microgaming", "Pragmatic Play", "Evolution"],
    featured: true,
    tags: ["Wager Free", "Carte Bancaire"],
    discordBonus: "25€ gratuit sur Discord",
    maxBet: "5€",
  },
  {
    slug: "betify",
    name: "Betify",
    logo: "🎯",
    logoUrl: "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://betify.com&size=128",
    bannerImage: "https://cdn.beacons.ai/user_content/utoICWn4YnWZ9kTPzJLpbuWnXhM2/referenced_images/generated-images__link-in-bio__links-block__home__785d9f26-e1b4-42af-bce5-0653af95365e__6656dc3c-f22e-4759-9c93-ec0eb9cd8866__9048b7d7-0eff-4658-8267-765b3cb98b33.webp",
    rating: 4.5,
    bonusTitle: "Bonus de Bienvenue",
    bonusAmount: "30€ Offerts*",
    bonusDescription: "Bonus 100% jusqu'à 1000€. Code MELCHIOR / MELCHIORFS",
    affiliateUrl: "https://betify3.sh/fr?registration=1&token=eAnPr3nom-KJijNAFD4owWNd7ZgqdRLk",
    pros: ["Wager x35 raisonnable", "30€ offert", "Carte bancaire acceptée", "Sans VPN"],
    cons: ["Code promo requis à l'inscription"],
    paymentMethods: ["Visa", "Mastercard", "Carte bancaire"],
    minDeposit: "20€",
    withdrawalTime: "24h",
    wager: "x35",
    license: "Curaçao",
    games: 2500,
    providers: ["Pragmatic Play", "Play'n GO", "Red Tiger", "Hacksaw Gaming"],
    featured: false,
    tags: ["Code Promo", "Sans VPN"],
    promoCode: "MELCHIOR / MELCHIORFS",
    discordBonus: "30€ gratuit sur Discord",
    maxBet: "5€",
  },
  {
    slug: "vibebet",
    name: "Vibebet",
    logo: "🎰",
    logoUrl: "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://vibebet.com&size=128",
    bannerImage: "https://cdn.beacons.ai/user_content/utoICWn4YnWZ9kTPzJLpbuWnXhM2/referenced_images/generated-images__link-in-bio__links-block__home__785d9f26-e1b4-42af-bce5-0653af95365e__4c2dc19e-d3da-4fe8-87d1-e6bf0f040428__e0160a25-7c13-47ef-b237-90f7728bb26c.webp",
    rating: 4.4,
    bonusTitle: "Bonus de Bienvenue",
    bonusAmount: "25€ Offerts*",
    bonusDescription: "Bonus 150% sur votre premier dépôt jusqu'à 500€",
    affiliateUrl: "https://partners.vibespartners.com/v2/text/3/4/f1941a42-cfd3-11f0-93c1-3e6b14ec5c14/1",
    pros: ["150% sur le premier dépôt", "Wager x35", "25€ gratuit via Discord", "Bonne variété de jeux"],
    cons: ["Max bet 5€", "Bonus plafonné à 500€"],
    paymentMethods: ["Visa", "Mastercard", "Crypto", "Skrill"],
    minDeposit: "15€",
    withdrawalTime: "24h",
    wager: "x35",
    license: "Curaçao",
    games: 2000,
    providers: ["Pragmatic Play", "NetEnt", "Evolution", "Nolimit City"],
    featured: false,
    tags: ["150%", "Wager x35"],
    discordBonus: "25€ gratuit sur Discord",
    maxBet: "5€",
  },
];

export const discordUrl = "https://discord.com/invite/mK6anBbYdM";
