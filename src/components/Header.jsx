import { useState, useEffect } from 'react'
import { useTheme, PALETTES } from '../context/ThemeContext'
import './Header.css'

const navLinks = [
  { label: '홈', href: '#home' },
  { label: '회사소개', href: '#about' },
  { label: '서비스', href: '#services' },
  { label: '포트폴리오', href: '#portfolio' },
  { label: '연락처', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const { theme, toggleTheme, palette, setPalette } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!paletteOpen) return
    const close = (e) => {
      if (!e.target.closest('.palette-wrapper')) setPaletteOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [paletteOpen])

  const currentPalette = PALETTES.find(p => p.id === palette)

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">

        {/* 로고 */}
        <a href="#home" className="logo">
          <span className="logo-icon">GW</span>
          <span className="logo-text">Phoenix<span className="logo-dot">.</span></span>
        </a>

        {/* 네비게이션 */}
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary nav-cta">문의하기</a>
        </nav>

        {/* 우측 컨트롤 영역 */}
        <div className="header-controls">

          {/* 다크/라이트 토글 */}
          <button
            className="ctrl-btn theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
            title={theme === 'dark' ? '라이트 모드' : '다크 모드'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* 컬러 팔레트 선택기 */}
          <div className="palette-wrapper">
            <button
              className="ctrl-btn palette-trigger"
              onClick={() => setPaletteOpen(o => !o)}
              aria-label="컬러 테마 변경"
              title="컬러 테마"
              style={{ '--swatch': currentPalette.swatch }}
            >
              <span className="palette-swatch" />
            </button>

            {paletteOpen && (
              <div className="palette-dropdown">
                <p className="palette-label">컬러 테마</p>
                <div className="palette-list">
                  {PALETTES.map(p => (
                    <button
                      key={p.id}
                      className={`palette-item ${palette === p.id ? 'active' : ''}`}
                      onClick={() => { setPalette(p.id); setPaletteOpen(false) }}
                      style={{ '--swatch': p.swatch }}
                      title={p.label}
                    >
                      <span className="palette-swatch" />
                      <span className="palette-name">{p.label}</span>
                      {palette === p.id && <span className="palette-check">✓</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 햄버거 (모바일) */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴"
          >
            <span /><span /><span />
          </button>
        </div>

      </div>
    </header>
  )
}
