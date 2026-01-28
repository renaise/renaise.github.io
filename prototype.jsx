import React, { useState } from 'react';

// SVG Icons (inline for portability)
const Icons = {
  // Social Icons
  figma: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5zM5 12a3.5 3.5 0 0 1 3.5-3.5H12v7H8.5A3.5 3.5 0 0 1 5 12zm0 6.5A3.5 3.5 0 0 1 8.5 15H12v3.5a3.5 3.5 0 0 1-7 0zM12 2h3.5a3.5 3.5 0 1 1 0 7H12V2zm0 7h3.5a3.5 3.5 0 1 1 0 7H12V9z"/>
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  readcv: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.5 3.5h-15A1.5 1.5 0 0 0 3 5v14a1.5 1.5 0 0 0 1.5 1.5h15A1.5 1.5 0 0 0 21 19V5a1.5 1.5 0 0 0-1.5-1.5zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z"/>
    </svg>
  ),
  cosmos: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1"/>
    </svg>
  ),
  // Tool Icons
  notion: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 2.025c-.42-.326-.98-.7-2.055-.607L3.01 2.87c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.886l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.22.186c-.094-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933zM2.847 1.443l13.168-1.026c1.635-.14 2.055-.047 3.08.7l4.25 2.986c.7.513.933.653.933 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.127-4.06c-.56-.747-.793-1.306-.793-1.96V2.983c0-.84.373-1.493 1.589-1.54z"/>
    </svg>
  ),
  framer: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
    </svg>
  ),
  // Project placeholder icons
  nove: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  veo: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <polygon points="5,3 19,12 5,21"/>
    </svg>
  ),
  silica: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <circle cx="12" cy="18" r="1"/>
    </svg>
  ),
  brand: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  ),
};

// Data
const projects = [
  { id: 'nove', name: 'Nove', icon: 'nove', description: 'Brand identity system', tags: ['Brand', 'Identity'] },
  { id: 'google-veo', name: 'Google Veo3', icon: 'veo', description: 'AI video model creative direction', tags: ['AI', 'Direction'] },
  { id: 'silica', name: 'Silica', icon: 'silica', description: 'Product design system', tags: ['Product', 'Systems'] },
  { id: 'project-4', name: 'Attio', icon: 'mobile', description: 'Consumer app experience', tags: ['Mobile', 'UX'] },
  { id: 'project-5', name: 'Vercel', icon: 'brand', description: 'Visual identity', tags: ['Brand'] },
  { id: 'project-6', name: 'Linear', icon: 'web', description: 'Web experience', tags: ['Web', 'Product'] },
];

const tools = [
  { id: 'figma', name: 'Figma', icon: 'figma', href: 'https://figma.com/@renaise' },
  { id: 'notion', name: 'Notion', icon: 'notion', href: '#' },
  { id: 'framer', name: 'Framer', icon: 'framer', href: '#' },
];

const profiles = [
  { name: 'Cosmos', icon: 'cosmos', href: '#' },
  { name: 'Figma', icon: 'figma', href: '#' },
  { name: 'X', icon: 'x', href: 'https://x.com/renaise' },
  { name: 'Read.cv', icon: 'readcv', href: '#' },
  { name: 'LinkedIn', icon: 'linkedin', href: '#' },
];

// Dock Item Component with magnification
const DockItem = ({ children, title, onClick, isActive, side = 'left' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      title={title}
      className={`
        w-11 h-11 flex items-center justify-center rounded-xl
        transition-all duration-200 ease-out
        ${isActive ? 'bg-white/10' : 'bg-white/5 hover:bg-white/10'}
        ${isHovered ? 'scale-125' : 'scale-100'}
      `}
      style={{
        transformOrigin: side === 'left' ? 'left center' : 'right center',
      }}
    >
      <span className={`transition-opacity duration-200 ${isHovered || isActive ? 'opacity-100' : 'opacity-60'}`}>
        {children}
      </span>
    </button>
  );
};

// Main App
export default function RenaiseShowroom() {
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const displayProject = hoveredProject || activeProject;

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Dot Grid Background */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="#404040" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* RENAISE Watermark */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h1
          className="tracking-tight leading-none whitespace-nowrap"
          style={{
            fontSize: '18vw',
            fontFamily: 'Playfair Display, Georgia, serif',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.03)'
          }}
        >
          RENAISE
        </h1>
      </div>

      {/* Year - Top Left */}
      <div
        className="fixed top-6 left-6 z-20 text-sm"
        style={{ color: '#606060', fontFamily: 'JetBrains Mono, monospace' }}
      >
        2026
      </div>

      {/* 3D Sphere - Top Right */}
      <div
        className="fixed top-6 right-6 z-20 w-14 h-14 rounded-full opacity-50 shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #525252, #171717)'
        }}
      />

      {/* Profiles Bar - Top Center */}
      <nav
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-1 rounded-full px-4 py-2"
        style={{
          backgroundColor: 'rgba(20,20,20,0.8)',
          backdropFilter: 'blur(8px)',
          border: '1px solid #1a1a1a'
        }}
      >
        <span
          className="mr-3"
          style={{
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#606060'
          }}
        >
          Profiles
        </span>
        {profiles.map((profile) => (
          <a
            key={profile.name}
            href={profile.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-110"
            style={{ backgroundColor: '#1a1a1a', color: '#a0a0a0' }}
            title={profile.name}
          >
            {Icons[profile.icon]}
          </a>
        ))}
      </nav>

      {/* Projects Sidebar - Left */}
      <aside
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-20 flex flex-col items-center gap-1 rounded-2xl p-2"
        style={{
          backgroundColor: 'rgba(20,20,20,0.6)',
          backdropFilter: 'blur(8px)',
          border: '1px solid #1a1a1a'
        }}
      >
        <span
          className="mb-2 px-1"
          style={{
            fontSize: '9px',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#606060'
          }}
        >
          Projects
        </span>
        {projects.map((project) => (
          <DockItem
            key={project.id}
            title={project.name}
            isActive={activeProject?.id === project.id}
            onClick={() => setActiveProject(activeProject?.id === project.id ? null : project)}
            side="left"
          >
            <span
              style={{ color: '#fff' }}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {Icons[project.icon]}
            </span>
          </DockItem>
        ))}
      </aside>

      {/* Toolbox Sidebar - Right */}
      <aside
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 flex flex-col items-center gap-1 rounded-2xl p-2"
        style={{
          backgroundColor: 'rgba(20,20,20,0.6)',
          backdropFilter: 'blur(8px)',
          border: '1px solid #1a1a1a'
        }}
      >
        <span
          className="mb-2 px-1"
          style={{
            fontSize: '9px',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#606060'
          }}
        >
          Toolbox
        </span>
        {tools.map((tool) => (
          <a
            key={tool.id}
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DockItem title={tool.name} side="right">
              <span style={{ color: '#fff' }}>{Icons[tool.icon]}</span>
            </DockItem>
          </a>
        ))}
        <DockItem title="More" side="right">
          <span style={{ color: '#606060', fontSize: '14px' }}>···</span>
        </DockItem>
      </aside>

      {/* Center Content Area */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-32">

        {/* Default State: Bio */}
        <div
          className={`text-center transition-all duration-300 ${displayProject ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
          style={{ position: displayProject ? 'absolute' : 'relative' }}
        >
          <p
            className="mb-6"
            style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: '#606060'
            }}
          >
            Showroom of Renaise
          </p>

          <p
            className="max-w-md text-center leading-relaxed"
            style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#a0a0a0'
            }}
          >
            Visual producer + prototyper with 8 years of experience designing identities and intuitive products for brands in consumer tech and media.
          </p>

          <div className="flex items-center justify-center gap-6 mt-8">
            <span
              className="text-lg"
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.8)'
              }}
            >
              Renaise
            </span>
            <span
              className="px-2 py-1 rounded"
              style={{
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#606060',
                border: '1px solid #262626'
              }}
            >
              NYC
            </span>
            <span
              style={{
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#606060'
              }}
            >
              Studio Artifice
            </span>
          </div>
        </div>

        {/* Project Preview State */}
        <div
          className={`text-center transition-all duration-300 ${displayProject ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}
          style={{ position: !displayProject ? 'absolute' : 'relative' }}
        >
          {displayProject && (
            <>
              <p
                className="mb-2"
                style={{
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: '#606060'
                }}
              >
                {displayProject.tags.join(' · ')}
              </p>
              <h2
                className="text-4xl font-medium mb-3"
                style={{ color: '#ffffff' }}
              >
                {displayProject.name}
              </h2>
              <p
                className="text-sm mb-6"
                style={{ color: '#a0a0a0' }}
              >
                {displayProject.description}
              </p>
              <span
                style={{
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: '#606060'
                }}
              >
                {activeProject ? 'Click again to close' : 'Hover to preview · Click to select'}
              </span>
            </>
          )}
        </div>

      </main>

      {/* URL - Bottom Right */}
      <div
        className="fixed bottom-6 right-6 z-20"
        style={{
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: '#606060',
          writingMode: 'vertical-rl'
        }}
      >
        renaise.com
      </div>

      {/* Contact - Bottom Left */}
      <a
        href="mailto:hello@renaise.com"
        className="fixed bottom-6 left-6 z-20 transition-colors duration-200 hover:text-white"
        style={{
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: '#606060'
        }}
      >
        Contact
      </a>

      {/* Demo Note - Bottom Center */}
      <div
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 rounded-full"
        style={{
          backgroundColor: 'rgba(20,20,20,0.8)',
          border: '1px solid #262626',
          fontSize: '10px',
          color: '#606060'
        }}
      >
        Interactive Prototype · Hover & click projects on left
      </div>
    </div>
  );
}
