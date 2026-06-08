import { createContext, useContext, useEffect, useState } from 'react'

export const PALETTES = [
  { id: 'blue',   label: '블루',   swatch: '#4169e1' },
  { id: 'green',  label: '그린',   swatch: '#10b981' },
  { id: 'purple', label: '퍼플',   swatch: '#a78bfa' },
  { id: 'orange', label: '오렌지', swatch: '#f59e0b' },
  { id: 'teal',   label: '틸',     swatch: '#22d3ee' },
]

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [palette, setPalette] = useState(() => localStorage.getItem('palette') || 'blue')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette)
    localStorage.setItem('palette', palette)
  }, [palette])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, palette, setPalette }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
