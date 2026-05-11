/**
 * Framer renaise.com/showroom order and copy (migration parity).
 * Cards link to /lab/:id when present; portfolio-only rows have no href.
 */
export interface ShowroomFramerCard {
  headline: string;
  tags: string;
  year: number;
  labId?: string;
  externalHref?: string;
}

export const SHOWROOM_FRAMER_CARDS: ShowroomFramerCard[] = [
  {
    headline: 'add, search, map, customize, share information',
    tags: 'WEB ● PRODUCT',
    year: 2025,
    labId: 'soot',
    externalHref: 'https://www.soot.com/',
  },
  {
    headline: 'THE DESIGN ECOSYSTEM OF SOOT: LIQUID METAL',
    tags: 'BRAND ● OPS',
    year: 2024,
    labId: 'soot',
    externalHref: 'https://www.soot.com/',
  },
  {
    headline: 'global site for led lighting and video',
    tags: 'WEB ● SITE',
    year: 2024,
    labId: 'aputure',
    externalHref: 'https://aputure.com/',
  },
  {
    headline: "the creative's Intelligent Canvas, thoughtfully connected.",
    tags: 'WEB ● PRODUCT',
    year: 2024,
    labId: 'flora',
    externalHref: 'https://www.florafauna.ai/',
  },
  {
    headline: 'Brand and website for a US immigration solution',
    tags: 'WEB ● SITE',
    year: 2024,
    labId: 'lighthouse',
  },
  {
    headline: 'AI protocol to re-imagine how we interface with the world through apps',
    tags: 'WEB ● PRODUCT',
    year: 2023,
    labId: 'mythra',
    externalHref: 'https://mythra.vercel.app/',
  },
  {
    headline: 'Internal Response Tool for Blockchain activity',
    tags: 'WEB ● PRODUCT',
    year: 2023,
  },
  {
    headline: 'remixing and creating memes on a composable canvas',
    tags: 'MOBILE ● APP',
    year: 2022,
    labId: 'rememe',
    externalHref:
      'https://apps.apple.com/us/app/rememe-a-picture-playground/id1585300273',
  },
  {
    headline: 'Platforming and rewarding local travel',
    tags: 'MOBILE ● APP',
    year: 2022,
  },
];
