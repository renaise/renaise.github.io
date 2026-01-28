// Expanded project metadata with LAB/STAGE bifurcation
// Senior-level case study structure

export interface ProjectExpanded {
  id: string;
  name: string;
  icon: string;

  // STAGE metadata (shipped work)
  stage: {
    title: string;
    subtitle: string;
    description: string;
    href: string;
    year: number;
    role: string;
    outcome: string;
    tags: string[];
    category: string;
  };

  // LAB metadata (process/research) - Senior structure
  lab: {
    title: string;              // The hook
    subtitle: string;           // One-line framing
    context: string;            // Why this mattered
    challenge: string;          // What made it hard
    hypothesis: string;         // What you believed going in
    approach: string[];         // Methodology steps
    keyDecisions: {             // Trade-offs made
      decision: string;
      rationale: string;
    }[];
    insight: string;            // The "aha"
    implications: string;       // What this means for the field
    tags: string[];
  };

  serviceSuite: string[];
  priority: number;
}

export const projectsExpanded: ProjectExpanded[] = [
  {
    id: 'nove',
    name: 'Nove',
    icon: '/assets/projects/nove.png',
    stage: {
      title: 'Nove',
      subtitle: 'Brand identity system for AI-powered bridal',
      description: 'End-to-end identity system for an AI try-on platform helping brides find their perfect silhouette.',
      href: '#',
      year: 2024,
      role: 'Design Director',
      outcome: 'Brand identity system, product UI, launch materials',
      tags: ['Brand', 'Identity', 'AI'],
      category: 'eCommerce',
    },
    lab: {
      title: 'WHY AI FAILS AT INTIMACY',
      subtitle: 'Repositioning AI try-on as a bridal ritual',
      context: 'AI try-on technology was being positioned as a convenience feature—skip the store, see yourself in dresses faster. But bridal isn\'t about speed. It\'s one of the most emotionally charged purchases a person makes. The technology was solving the wrong problem.',
      challenge: 'How do you make AI feel intimate enough for one of life\'s most personal decisions? The entire category was stuck in "tech demo" mode—impressive but cold. Brides weren\'t looking for efficiency. They were looking for a moment.',
      hypothesis: 'The dress isn\'t the product. The moment of seeing yourself is. If we designed for emotional resonance instead of feature demonstration, we could reposition AI try-on from gimmick to ritual.',
      approach: [
        'Interviewed 12 brides at different stages of their journey to map emotional peaks and valleys',
        'Shadowed 3 boutique appointments to understand the human dynamics AI would need to complement',
        'Audited competitor positioning—found everyone leading with technology, no one leading with feeling',
        'Developed a "moment-first" framework: every feature evaluated by emotional impact, not technical capability',
        'Prototyped reveal moments with different pacing, framing, and context'
      ],
      keyDecisions: [
        {
          decision: 'Removed real-time try-on in favor of curated reveals',
          rationale: 'Real-time felt like a filter. Curated reveals created anticipation—the same emotional arc as pulling back a fitting room curtain.'
        },
        {
          decision: 'Positioned boutiques as partners, not competitors',
          rationale: 'Fighting the in-store experience was unwinnable. Designed the product to enhance boutique visits, not replace them.'
        },
        {
          decision: 'Brand voice: warm authority, not tech-forward',
          rationale: 'Brides don\'t want to feel like beta testers. Voice needed to feel like a trusted friend who happens to have technology.'
        }
      ],
      insight: 'Technology adoption in emotional contexts isn\'t about proving capability—it\'s about earning permission. Brides needed to feel like AI was honoring their moment, not optimizing it.',
      implications: 'Most AI products are positioned around what they can do. The opportunity is positioning around how they make people feel. This applies anywhere technology enters intimate human experiences—healthcare, finance, relationships.',
      tags: ['Positioning', 'Emotional Design', 'AI Trust', 'Research'],
    },
    serviceSuite: ['Identity', 'Design'],
    priority: 1,
  },
  {
    id: 'biota',
    name: 'Biota',
    icon: '/assets/projects/biota.png',
    stage: {
      title: 'Biota',
      subtitle: 'Making generative AI feel usable',
      description: 'Product design for a generative AI platform focused on trust, control, and creative flow.',
      href: '#',
      year: 2024,
      role: 'Design Director',
      outcome: 'AI usability and trust system',
      tags: ['AI', 'Product', 'UX'],
      category: 'Gen AI',
    },
    lab: {
      title: 'SEED EVERYTHING, COMMERCIAL TEMPLATES, SOCIAL NODE GRAPHING',
      subtitle: 'Designing for AI skepticism',
      context: 'Generative AI tools were exploding in capability but stalling in adoption among creative professionals. The gap wasn\'t awareness or access—it was trust. Creatives were experimenting but not committing. Tools felt like black boxes that might embarrass them.',
      challenge: 'Why do creative professionals distrust AI tools—and how do you design around that? The standard playbook (more features, better outputs) wasn\'t working. Something structural was broken.',
      hypothesis: 'Trust isn\'t about accuracy. It\'s about control. Users need to feel like co-pilots, not passengers. The interface needed to make AI\'s reasoning visible and manipulable.',
      approach: [
        'Conducted 15 interviews with creative professionals who had tried and abandoned AI tools',
        'Mapped the "trust collapse" moments—specific interactions where users lost confidence',
        'Analyzed mental models: how creatives think about tools vs. how they think about collaborators',
        'Prototyped "glass box" interfaces that exposed AI reasoning without overwhelming',
        'A/B tested control mechanisms: sliders, constraints, style references, negative prompts'
      ],
      keyDecisions: [
        {
          decision: 'Exposed confidence scores on outputs',
          rationale: 'Users distrusted AI more when it seemed certain. Showing uncertainty ("I\'m 70% sure this matches your intent") paradoxically increased trust.'
        },
        {
          decision: 'Added explicit "undo influence" controls',
          rationale: 'Creatives needed to feel they could pull back AI\'s contribution without starting over. Granular control > global reset.'
        },
        {
          decision: 'Framed AI as "assistant" not "generator"',
          rationale: 'Language matters. "Generate" implies replacement. "Assist" implies collaboration. Renamed all AI features accordingly.'
        }
      ],
      insight: 'The trust gap in AI tools isn\'t rational—it\'s emotional. Users don\'t need AI to be perfect. They need to feel like they can catch and correct its mistakes without losing face.',
      implications: 'As AI becomes more capable, the UX challenge shifts from "can it do this?" to "do I trust it enough to use it?" Designing for trust—not just usability—becomes the differentiator.',
      tags: ['AI/UX', 'Trust Design', 'Research', 'Creative Tools'],
    },
    serviceSuite: ['Design'],
    priority: 6,
  },
  {
    id: 'lighthouse',
    name: 'Lighthouse',
    icon: '/assets/projects/lighthouse.png',
    stage: {
      title: 'Lighthouse',
      subtitle: 'Brand and website for US immigration',
      description: 'Complete rebrand and website for a legal tech platform simplifying the US immigration process.',
      href: '#',
      year: 2025,
      role: 'Designer',
      outcome: 'Increased CTA engagement, weekly conversions',
      tags: ['Legal Tech', 'B2B', 'Brand'],
      category: 'B2B / Legal',
    },
    lab: {
      title: 'CLARIFY, NAVIGATE, GUIDE IN LEGAL SYSTEMS',
      subtitle: 'Making immigration feel navigable',
      context: 'Immigration is a fear-based experience. Users are navigating a foreign system where mistakes have life-altering consequences. Every legal tech product in the space was designed like software—clean, modern, efficient. But efficiency isn\'t what terrified users need.',
      challenge: 'How do you design for users who are anxious, overwhelmed, and navigating a system designed to be opaque? Standard UX best practices (reduce friction, streamline flows) can backfire when users need reassurance more than speed.',
      hypothesis: 'In high-anxiety contexts, clarity beats speed. Users need to feel oriented before they can act. The interface should feel like a knowledgeable guide, not a form processor.',
      approach: [
        'Mapped the immigration journey from awareness to resolution—identified 7 distinct anxiety peaks',
        'Interviewed 8 users mid-process to understand real-time emotional states (not retrospective rationalization)',
        'Audited competitor language—found universal use of legal jargon that increased anxiety',
        'Developed a "progressive disclosure" framework tuned to anxiety levels, not information complexity',
        'Tested reassurance patterns: progress indicators, human touchpoints, plain-language translations'
      ],
      keyDecisions: [
        {
          decision: 'Added "what happens next" blocks after every action',
          rationale: 'Anxiety spikes in ambiguity. Explicit next-step confirmation reduced support tickets by 40%.'
        },
        {
          decision: 'Replaced legal terms with plain language + expandable definitions',
          rationale: 'Users felt talked down to with oversimplification, but lost with jargon. Layered approach respected intelligence while ensuring comprehension.'
        },
        {
          decision: 'Surfaced human support options at anxiety peaks, not uniformly',
          rationale: 'Constant "need help?" feels desperate. Contextual support at predicted stress moments felt attentive.'
        }
      ],
      insight: 'Legal tech fails when it mimics legal language. Success means translating complexity into confidence. The goal isn\'t to make immigration easy—it\'s to make users feel capable of navigating it.',
      implications: 'Any product serving users in high-stakes, low-control situations (healthcare, finance, legal) needs to design for emotional state, not just task completion. Anxiety is a UX problem.',
      tags: ['Service Design', 'Anxiety UX', 'Legal Tech', 'Emotional Design'],
    },
    serviceSuite: ['Strategy', 'Brand', 'Design'],
    priority: 5,
  },
  {
    id: 'aputure',
    name: 'Aputure',
    icon: '/assets/projects/aputure.png',
    stage: {
      title: 'Aputure',
      subtitle: 'Global site for LED lighting and video',
      description: 'E-commerce platform and composable design system for a leading LED lighting brand.',
      href: 'https://aputure.com',
      year: 2025,
      role: 'Designer',
      outcome: 'Global site, composable library, wireframes',
      tags: ['eCommerce', 'Global', 'Systems'],
      category: 'eCommerce',
    },
    lab: {
      title: 'GLOBAL SITE FOR INDUSTRIAL CINEMATIC LIGHTING',
      subtitle: 'Building a design system for global scale',
      context: 'Aputure operates across 12 markets with different languages, payment systems, regulations, and user expectations. The existing site was designed for the US market and "adapted" elsewhere—resulting in broken layouts, untranslated strings, and frustrated local teams.',
      challenge: 'How do you create a component library that works across regions, languages, and product lines without becoming either too rigid or too fragmented? The standard approach—design for primary market, localize later—was the source of the problem.',
      hypothesis: 'Global systems fail when they\'re designed for headquarters. If we started with the most constrained market and designed outward, we\'d build flexibility into the foundation instead of bolting it on.',
      approach: [
        'Audited localization failures across all 12 markets—categorized by root cause (layout, content, cultural, technical)',
        'Identified the "most constrained" market (Germany: strict regulations, long compound words, high design expectations)',
        'Rebuilt component library starting with German constraints, then validated against other markets',
        'Created a "content contract" system: components specify content requirements, not just visual specs',
        'Tested with local teams before headquarters sign-off—inverted the typical approval flow'
      ],
      keyDecisions: [
        {
          decision: 'Designed all text containers for 40% expansion',
          rationale: 'German and French text runs 30-40% longer than English. Building in expansion from the start eliminated layout breaks.'
        },
        {
          decision: 'Made imagery swappable at the component level',
          rationale: 'Cultural relevance varies. A photo that works in the US might not resonate in Japan. Components needed to accommodate regional imagery without redesign.'
        },
        {
          decision: 'Documented "why" alongside "how" for every component',
          rationale: 'Local teams needed to make judgment calls. Understanding intent let them adapt intelligently instead of following rules blindly.'
        }
      ],
      insight: 'Localization isn\'t translation. It\'s designing for difference from the start. The cheapest time to build in flexibility is at the foundation—every retrofit costs 10x more.',
      implications: 'Any company scaling internationally should invert their design process: most constrained market first, headquarters last. The result is a system that works everywhere, not just where it was designed.',
      tags: ['Design Systems', 'Localization', 'eCommerce', 'Global Scale'],
    },
    serviceSuite: ['Strategy', 'Brand', 'Design', 'Production'],
    priority: 2,
  },
  {
    id: 'flora',
    name: 'Flora AI',
    icon: '/assets/projects/flora.png',
    stage: {
      title: 'Flora AI',
      subtitle: 'The creative\'s intelligent canvas',
      description: 'Founding designer for a generative node-based editor for new media creatives.',
      href: 'https://www.florafauna.ai',
      year: 2024,
      role: 'Founding Designer',
      outcome: '0-to-1 product, pre-seed to initial round',
      tags: ['AI', 'Product', '0-to-1'],
      category: 'Gen AI',
    },
    lab: {
      title: 'THE DESIGN ECOSYSTEM OF FLORA + FAUNA: HIERONYMUS',
      subtitle: 'Zero-to-one product design',
      context: 'Flora was a new category—a node-based creative tool with AI at its core. No direct competitors, no established patterns, no user expectations to meet. The founding team had conviction about the opportunity but no clarity on the product.',
      challenge: 'How do you design a category-defining tool when there\'s no reference point? Traditional product design assumes you\'re improving on something that exists. Zero-to-one means defining what "good" looks like before you can pursue it.',
      hypothesis: 'First products aren\'t about features—they\'re about finding the one interaction that makes people say "finally." If we could identify that core moment, everything else would organize around it.',
      approach: [
        'Ran 30 rapid prototypes in 6 weeks—intentionally disposable, testing single interactions',
        'Recruited "creative extremists"—users pushing the edges of existing tools—as early testers',
        'Tracked emotional responses, not just task completion ("when did you smile? when did you curse?")',
        'Killed features that tested well but didn\'t create "finally" moments',
        'Aligned founding team weekly on "what are we learning?" not "what are we building?"'
      ],
      keyDecisions: [
        {
          decision: 'Shipped a deliberately incomplete v1',
          rationale: 'A polished product invites feedback on details. A rough product invites feedback on fundamentals. We needed to know if the core was right before investing in polish.'
        },
        {
          decision: 'Said no to the most-requested feature for 3 months',
          rationale: 'Users asked for export functionality. But exports meant they\'d leave the tool to finish work elsewhere. We needed to become the finishing tool first.'
        },
        {
          decision: 'Hired for taste before skill',
          rationale: 'In zero-to-one, you can\'t spec the work. You need people who can feel when something is right. Skills can be taught; judgment can\'t.'
        }
      ],
      insight: 'Zero-to-one design isn\'t about getting it right—it\'s about learning fast enough to find right. The product is a hypothesis. Shipping is how you test it.',
      implications: 'Most founding teams over-invest in building and under-invest in learning. The competitive advantage in zero-to-one is speed of insight, not speed of execution.',
      tags: ['0-to-1', 'Founding', 'Product Strategy', 'Rapid Prototyping'],
    },
    serviceSuite: ['Strategy', 'Brand', 'Design'],
    priority: 3,
  },
  {
    id: 'soot',
    name: 'SOOT',
    icon: '/assets/projects/soot.png',
    stage: {
      title: 'SOOT',
      subtitle: 'The design ecosystem of Liquid Metal',
      description: 'Design system and product for a developer tool enabling add, search, map, customize, share workflows.',
      href: 'https://www.soot.com',
      year: 2025,
      role: 'Lead Product Designer',
      outcome: '50% reduction in design-to-engineering review cycles',
      tags: ['Product', 'Systems', 'Dev Tools'],
      category: 'Dev Tools',
    },
    lab: {
      title: 'SEE EVERYTHING, METADATA, LIQUID METAL',
      subtitle: 'Designing Liquid Metal and the Z index',
      context: 'SOOT needed two foundational systems: Liquid Metal, a composable design library enabling rapid prototyping across surfaces, and the Z index, a spatial framework for layering UI in 3D space. Both required defining new primitives for a category that didn\'t exist yet.',
      challenge: 'Why do design handoffs fail—and what would it take to cut review cycles in half? If better tooling was the answer, it would have worked by now. Something more fundamental was broken.',
      hypothesis: 'The handoff problem isn\'t tooling—it\'s translation. Designers and engineers don\'t need a shared file. They need a shared language. The breakdown happens when intent gets lost crossing the gap.',
      approach: [
        'Shadowed 8 design-engineering syncs across 4 companies—recorded where conversations broke down',
        'Mapped the "intent gap": what designers meant vs. what engineers understood vs. what got built',
        'Identified 3 categories of handoff failure: ambiguity, context loss, assumption mismatch',
        'Prototyped "decision capture" interfaces that recorded why, not just what',
        'Tested with cross-functional pairs, measured time-to-alignment not just task completion'
      ],
      keyDecisions: [
        {
          decision: 'Required designers to annotate decisions, not just specs',
          rationale: 'Engineers don\'t need to know the padding is 16px. They need to know why it\'s 16px, so they can make the right call when something changes.'
        },
        {
          decision: 'Built review into the design flow, not after it',
          rationale: 'Post-design review is too late. Engineers need to be involved while decisions are still cheap to change.'
        },
        {
          decision: 'Measured "questions asked" as a quality metric',
          rationale: 'Good handoffs generate no questions. We tracked questions per handoff and worked backward to prevent them.'
        }
      ],
      insight: 'Handoffs fail because we treat them as file transfers. They\'re actually knowledge transfers. The designer\'s job isn\'t done when the file is done—it\'s done when the engineer could make the same decisions.',
      implications: 'Any workflow that crosses disciplines has a translation problem. Solving it requires designing for shared understanding, not shared artifacts.',
      tags: ['DesignOps', 'Process', 'Dev Tools', 'Cross-functional'],
    },
    serviceSuite: ['Strategy', 'Brand', 'Design', 'Production'],
    priority: 1,
  },
  {
    id: 'rememe',
    name: 'REMEME',
    icon: '/assets/projects/rememe.png',
    stage: {
      title: 'REMEME',
      subtitle: 'Creation-first social platform',
      description: 'Mobile app for remixing and creating memes on a composable canvas.',
      href: 'https://apps.apple.com/us/app/rememe-a-picture-playground/id1585300273',
      year: 2022,
      role: 'Product Designer',
      outcome: '0 to 1,500 MAU, design system library',
      tags: ['Consumer', 'Social', 'Mobile'],
      category: 'Consumer',
    },
    lab: {
      title: 'CREATION OVER CONSUMPTION',
      subtitle: 'Designing a social network that starts with making',
      context: 'Every major social platform optimizes for consumption. The feed is the product; creation is a feature. But a generation of users was burning out on passive scrolling and craving something more active. The question was whether creation-first social could work.',
      challenge: 'What if a social platform measured success by what you create, not what you scroll? Creation is harder than consumption—how do you lower the barrier enough to be social-scale while keeping it meaningful?',
      hypothesis: 'Creation tools need to feel like toys, not software. The moment it feels like "work," you\'ve lost. If we could make creation feel like play, we could compete with consumption.',
      approach: [
        'Studied the "creation funnel" in existing tools—where do casual users drop off?',
        'Identified the "blank canvas problem": most users freeze when facing infinite possibility',
        'Designed "remix-first" creation: start with something, transform it, make it yours',
        'Tested creation time targets: under 60 seconds to first share, or users don\'t return',
        'Built social mechanics around creation (remix chains, collaborative canvases) not just distribution'
      ],
      keyDecisions: [
        {
          decision: 'Made the feed creation-prompted, not content-prompted',
          rationale: 'Standard feeds show you content and hope you engage. We showed prompts and templates, inviting creation before consumption.'
        },
        {
          decision: 'Removed "like" in favor of "remix"',
          rationale: 'Likes are passive. Remixes are active. The only way to engage was to create something new.'
        },
        {
          decision: 'Shipped with intentionally limited tools',
          rationale: 'More tools = more intimidation. We shipped with 10% of planned features and only added what users specifically requested.'
        }
      ],
      insight: 'Creation and consumption aren\'t opposites—they\'re a spectrum. The gap between "I like this" and "I made this" is smaller than it seems. Design can close it.',
      implications: 'The next generation of social products will differentiate on creation, not consumption. The feed is commoditized. The canvas is the new frontier.',
      tags: ['Consumer', 'Creator Tools', 'Social', 'Behavioral Design'],
    },
    serviceSuite: ['Strategy', 'Identity', 'Design'],
    priority: 9,
  },
  {
    id: 'mythra',
    name: 'Mythra',
    icon: '/assets/projects/mythra.png',
    stage: {
      title: 'Mythra',
      subtitle: 'AI protocol concept',
      description: 'Concept exploration for reimagining how we interface with the world through AI-assisted apps.',
      href: 'https://mythra.vercel.app',
      year: 2023,
      role: 'Designer',
      outcome: 'Concept prototype',
      tags: ['AI', 'Concept'],
      category: 'Concept',
    },
    lab: {
      title: 'WHAT COMES AFTER CHAT',
      subtitle: 'Reimagining AI interfaces beyond the text box',
      context: 'ChatGPT made chat the default interface for AI. But chat is a skeuomorph—we\'re mimicking human conversation because it\'s familiar, not because it\'s optimal. The text box is a constraint we\'ve stopped questioning.',
      challenge: 'If AI is the new interface layer, why are we still typing into boxes? What would AI interaction look like if we designed for capability instead of familiarity?',
      hypothesis: 'The chat paradigm is a transitional form. The next interface won\'t have a cursor—it will be ambient, contextual, and continuous. We\'re designing for AI like we designed for mobile in 2007: using old metaphors for new capabilities.',
      approach: [
        'Catalogued AI interface patterns across 50 products—found 90% were chat or chat-adjacent',
        'Studied pre-chat computing interfaces: command lines, GUIs, direct manipulation',
        'Identified what chat does well (open-ended, natural) and poorly (inefficient, context-lost, linear)',
        'Prototyped 5 alternative paradigms: spatial, ambient, gestural, predictive, collaborative',
        'Tested with users who had never used ChatGPT to avoid anchoring on chat expectations'
      ],
      keyDecisions: [
        {
          decision: 'Removed the text input entirely in prototype v3',
          rationale: 'Wanted to see what users would do without the familiar affordance. They invented interactions we hadn\'t considered.'
        },
        {
          decision: 'Designed for "AI as environment" not "AI as tool"',
          rationale: 'Tools are used. Environments are inhabited. The metaphor shift changed everything about presence, persistence, and context.'
        },
        {
          decision: 'Prioritized showing over asking',
          rationale: 'Chat requires users to articulate needs. Advanced AI should infer and surface. Reduced explicit queries by 70% in favor of contextual suggestions.'
        }
      ],
      insight: 'Every new technology starts by mimicking what came before. Cars looked like carriages. Websites looked like magazines. AI interfaces look like messaging apps. The breakthrough comes when you design for the new capability, not the old metaphor.',
      implications: 'Whoever figures out post-chat AI interfaces will define the next decade of computing. It\'s the equivalent of inventing the GUI or the smartphone. The opportunity is massive and mostly unexplored.',
      tags: ['Speculative Design', 'AI Interface', 'Concept', 'Future'],
    },
    serviceSuite: ['Strategy', 'Design'],
    priority: 7,
  },
  {
    id: 'osmosis',
    name: 'Osmosis',
    icon: '/assets/projects/osmosis.png',
    stage: {
      title: 'Osmosis',
      subtitle: 'Interface for model training',
      description: 'Design system for an ML infrastructure platform.',
      href: '#',
      year: 2024,
      role: 'Design Director',
      outcome: 'Workflow legibility for ML platform',
      tags: ['ML', 'Infrastructure'],
      category: 'RL Infrastructure',
    },
    lab: {
      title: 'IMAGINING THE MEMORY LAYER THROUGH MIST',
      subtitle: 'Designing interfaces for machine learning',
      context: 'ML infrastructure is a black box. Models train over hours or days; engineers monitor dashboards full of metrics they half-understand; failures are discovered long after they\'ve compounded. The tools assume expertise that even experts don\'t consistently have.',
      challenge: 'How do you design for processes that humans can\'t see or fully understand? Traditional interface design makes the invisible visible. ML challenges that—some things can\'t be made visible without being misleading.',
      hypothesis: 'ML interfaces fail when they try to show everything. Success is knowing what to hide. The goal isn\'t full transparency—it\'s actionable legibility. Users need to know what to do, not everything that\'s happening.',
      approach: [
        'Shadowed ML engineers during training runs—logged every time they were confused, surprised, or wrong',
        'Mapped the information hierarchy: what do they check first, second, never?',
        'Identified "false confidence" patterns: dashboards that looked good while things were breaking',
        'Prototyped "exception-based" interfaces that surfaced anomalies instead of metrics',
        'Tested with junior and senior engineers—different expertise levels need different information'
      ],
      keyDecisions: [
        {
          decision: 'Default view shows only anomalies, not metrics',
          rationale: 'Metrics create false confidence. If everything looks normal, engineers stop looking. Exception-first design keeps attention on what matters.'
        },
        {
          decision: 'Built "confidence indicators" for the interface itself',
          rationale: 'Sometimes the system doesn\'t know if something is wrong. We made uncertainty explicit: "This metric may be unreliable because X."'
        },
        {
          decision: 'Designed for "glanceability" over "comprehensiveness"',
          rationale: 'Engineers check dashboards hundreds of times. Each check should take 3 seconds. Depth is available but not default.'
        }
      ],
      insight: 'Interfaces for complex systems need to be humble about what they can show. Full transparency is a lie when the underlying system is genuinely complex. Good design admits the limits of legibility.',
      implications: 'As systems become more complex (AI, infrastructure, biology), interface design needs to evolve from "show everything" to "show what\'s actionable." The next generation of tools will be designed for bounded understanding.',
      tags: ['ML/AI', 'Data Visualization', 'Complexity', 'Infrastructure'],
    },
    serviceSuite: ['Strategy', 'Brand', 'Design'],
    priority: 4,
  },
  {
    id: 'lantern',
    name: 'Lantern DB',
    icon: '/assets/projects/lantern.png',
    stage: {
      title: 'Lantern DB',
      subtitle: 'Database for the AI era',
      description: 'Repositioning and design for a vector database platform.',
      href: '#',
      year: 2023,
      role: 'Designer',
      outcome: 'Increased time-on-page, decreased bounce rate',
      tags: ['Dev Tools', 'Positioning'],
      category: 'Dev Tools',
    },
    lab: {
      title: 'STANDING OUT IN A GOLD RUSH',
      subtitle: 'Positioning in the AI infrastructure market',
      context: 'The vector database market went from niche to crowded in 18 months. Every database suddenly claimed to be "built for AI." Lantern had strong technology but was drowning in a sea of similar messaging. Features weren\'t differentiating anymore.',
      challenge: 'When everyone claims to be "the database for AI," how do you stand out? Technical differentiation is real but invisible to most buyers. The market was buying stories, not specs.',
      hypothesis: 'In infrastructure, developers don\'t buy features—they buy opinions. Technical products need technical points of view. Taking a stance would cost some customers but attract the right ones.',
      approach: [
        'Audited positioning of 12 competitors—found universal "faster, scalable, AI-native" messaging',
        'Interviewed 15 developers who had evaluated multiple options—asked about decision factors',
        'Identified the unspoken question: "Which one is actually built for my use case vs. pivoted to chase AI?"',
        'Developed positioning around "native vs. bolted-on"—a distinction that mattered but no one was articulating',
        'Tested messaging variants with click-through and time-on-page as proxies for resonance'
      ],
      keyDecisions: [
        {
          decision: 'Led with philosophy, not features',
          rationale: 'Homepage opened with "What makes a database AI-native?" instead of feature lists. Engaged developers who cared about architecture, filtered those who didn\'t.'
        },
        {
          decision: 'Published technical opinions as content',
          rationale: 'Blog posts taking stances on controversial topics ("Why RAG is broken") generated more qualified leads than product marketing.'
        },
        {
          decision: 'Designed the site for developers, not decision-makers',
          rationale: 'Enterprise sales wanted executive-friendly messaging. But developers were the initial evaluators. Optimized for their trust first.'
        }
      ],
      insight: 'In crowded markets, being liked by everyone means being chosen by no one. Strong positioning alienates some buyers—and that\'s the point. The goal is fit, not reach.',
      implications: 'Technical products often under-invest in positioning, assuming the best technology wins. It doesn\'t. The best-understood technology wins. Positioning is a product decision, not a marketing decision.',
      tags: ['Positioning', 'Strategy', 'Dev Marketing', 'B2B'],
    },
    serviceSuite: ['Strategy', 'Design'],
    priority: 6,
  },
];

// Helper to get STAGE projects only (shipped work)
export const stageProjects = projectsExpanded.filter(p =>
  !['nove', 'biota', 'mythra', 'osmosis', 'lantern'].includes(p.id)
);

// Helper to get all LAB content (everything has a LAB entry)
export const labProjects = projectsExpanded;

// LAB-only projects (research/concept work)
export const labOnlyProjects = projectsExpanded.filter(p =>
  ['nove', 'biota', 'mythra', 'osmosis', 'lantern'].includes(p.id)
);
