// Projects stack-ranked per renaise.com/showroom; gridTitle/gridCategory for VIEW ALL page
export interface Project {
  id: string;
  name: string;
  icon: string;
  href: string;
  description: string;
  tags: string[];
  serviceSuite: string[];
  category: string;
  year: number;
  role: string;
  outcome: string;
  leadVertical: string;
  priority: number;
  hasLabel?: boolean;
  gridTitle: string;
  gridCategory: string;
}

export const projects: Project[] = [
  // Order matches Figma reference (Nove first, then visual order from top to bottom)
  { id: 'nove', name: 'Nove', icon: '/assets/projects/nove.png', href: '#', description: 'Brand identity system for eCommerce.', tags: ['Brand', 'Identity'], serviceSuite: ['Identity', 'Design'], category: 'eCommerce', year: 2024, role: 'Design Director', outcome: 'Brand identity system', leadVertical: 'Identity', priority: 1, hasLabel: true, gridTitle: 'BRAND IDENTITY SYSTEM FOR ECOMMERCE', gridCategory: 'BRAND • IDENTITY' },
  { id: 'biota', name: 'Biota', icon: '/assets/projects/biota.png', href: '#', description: 'Making generative AI feel usable.', tags: ['AI', 'Product'], serviceSuite: ['Strategy', 'Identity', 'Design'], category: 'Gen AI', year: 2024, role: 'Design Director', outcome: 'AI usability and trust system', leadVertical: 'Identity', priority: 2, gridTitle: 'MAKING GENERATIVE AI FEEL USABLE', gridCategory: 'WEB • PRODUCT' },
  { id: 'lighthouse', name: 'Lighthouse', icon: '/assets/projects/lighthouse.png', href: '#', description: 'Brand and website for a US immigration solution.', tags: ['Legal Tech', 'B2B'], serviceSuite: ['Strategy', 'Design'], category: 'B2B / Legal', year: 2024, role: 'Designer', outcome: 'Increased CTA engagement, weekly conversions', leadVertical: 'Strategy', priority: 3, gridTitle: 'BRAND AND WEBSITE FOR A US IMMIGRATION SOLUTION', gridCategory: 'WEB • SITE' },
  { id: 'aputure', name: 'Aputure', icon: '/assets/projects/aputure.png', href: 'https://aputure.com', description: 'Global site for LED lighting and video. Composable library and wireframes.', tags: ['eCommerce', 'Global'], serviceSuite: ['Strategy', 'Identity', 'Design', 'Production'], category: 'eCommerce', year: 2024, role: 'Designer', outcome: 'Global site, composable library, wireframes', leadVertical: 'Production', priority: 4, gridTitle: 'GLOBAL SITE FOR LED LIGHTING AND VIDEO', gridCategory: 'WEB • SITE' },
  { id: 'flora', name: 'Flora AI', icon: '/assets/projects/flora.png', href: 'https://www.florafauna.ai', description: "The creative's Intelligent Canvas. A generative node-based editor for new media creatives.", tags: ['AI', 'Product'], serviceSuite: ['Strategy', 'Identity', 'Design', 'Production'], category: 'Gen AI', year: 2024, role: 'Founding Designer', outcome: '0-to-1 product, pre-seed to initial round', leadVertical: 'Design', priority: 5, gridTitle: "THE CREATIVE'S INTELLIGENT CANVAS, THOUGHTFULLY CONNECTED.", gridCategory: 'WEB • PRODUCT' },
  { id: 'soot', name: 'SOOT', icon: '/assets/projects/soot.png', href: 'https://www.soot.com', description: 'The design ecosystem of SOOT: Liquid Metal. Add, search, map, customize, share information.', tags: ['Product', 'Systems'], serviceSuite: ['Strategy', 'Design', 'Production'], category: 'Dev Tools', year: 2024, role: 'Lead Product Designer', outcome: '50% reduction in design-to-engineering review cycles', leadVertical: 'Design', priority: 6, gridTitle: 'THE DESIGN ECOSYSTEM OF SOOT: LIQUID METAL', gridCategory: 'BRAND • OPS' },
  { id: 'mythra', name: 'Mythra', icon: '/assets/projects/mythra.png', href: 'https://mythra.vercel.app', description: 'AI protocol to re-imagine how we interface with the world through apps.', tags: ['AI', 'Concept'], serviceSuite: ['Strategy', 'Design'], category: 'Concept', year: 2023, role: 'Designer', outcome: 'Reimagining an AI protocol for assisted tools over text-based models', leadVertical: 'Strategy', priority: 7, gridTitle: 'AI PROTOCOL TO RE-IMAGINE THE WORLD THROUGH APPS', gridCategory: 'WEB • PRODUCT' },
  { id: 'osmosis', name: 'Osmosis', icon: '/assets/projects/osmosis.png', href: '#', description: 'Designing the interface for model training.', tags: ['ML', 'Infrastructure'], serviceSuite: ['Strategy', 'Identity', 'Design'], category: 'RL Infrastructure', year: 2024, role: 'Design Director', outcome: 'Workflow legibility for ML platform', leadVertical: 'Strategy', priority: 8, gridTitle: 'DESIGNING THE INTERFACE FOR MODEL TRAINING', gridCategory: 'WEB • PRODUCT' },
  { id: 'rememe', name: 'REMEME', icon: '/assets/projects/rememe.png', href: 'https://apps.apple.com/us/app/rememe-a-picture-playground/id1585300273', description: 'Remixing and creating memes on a composable canvas. Creation-first social platform.', tags: ['Consumer', 'Social'], serviceSuite: ['Strategy', 'Identity', 'Design'], category: 'Consumer', year: 2022, role: 'Product Designer', outcome: '0 to 1,500 MAU, design system library', leadVertical: 'Strategy', priority: 9, gridTitle: 'REMIXING AND CREATING MEMES ON A COMPOSABLE CANVAS', gridCategory: 'MOBILE • APP' },
  { id: 'lantern', name: 'Lantern DB', icon: '/assets/projects/lantern.png', href: '#', description: 'Repositioning a database for the AI era.', tags: ['Dev Tools', 'Positioning'], serviceSuite: ['Strategy', 'Design'], category: 'Dev Tools', year: 2023, role: 'Designer', outcome: 'Increased time-on-page, decreased bounce rate', leadVertical: 'Strategy', priority: 10, gridTitle: 'REPOSITIONING A DATABASE FOR THE AI ERA', gridCategory: 'WEB • PRODUCT' },
];
