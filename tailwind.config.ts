import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        ink: '#1c1c1c',
        cream: '#DCC9A9',
        vermilion: '#B83A2D',
        pine: '#4E6851'
      },
      fontFamily: {
        // the browser uses the Japanese fonts only for Japanese characters
        heading: ['"Playfair Display"', '"Shippori Mincho"', 'serif'],
        body: ['"Hanken Grotesk"', '"Zen Kaku Gothic New"', 'sans-serif']
      }
    }
  }
}