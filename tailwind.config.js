/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  //TODO 禁止tailwindcss的默认属性
  corePlugins: {
    preflight: false
  },
  presets: [
    require('tailwindcss-rem2px-preset').createPreset({
      fontSize: 100,
      unit: 'rem'
    })
  ]
}
