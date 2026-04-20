import localFont from 'next/font/local'

export const milkywalky = localFont({
  src: './MilkyWalky-Regular.ttf',
  variable: '--milkywalky', // Useful for Tailwind CSS
  display: 'swap',          // Ensures text is visible during load
})