/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        jetBrainsMono: ["JetBrainsMono-Regular"],
        jetBrainsMonoBold: ["JetBrainsMono-Bold"],
        jetBrainsMonoExtraBold: ["JetBrainsMono-ExtraBold"],
        jetBrainsMonoExtraLight: ["JetBrainsMono-ExtraLight"],
        jetBrainsMonoLight: ["JetBrainsMono-Light"],
        jetBrainsMonoMedium: ["JetBrainsMono-Medium"],
        jetBrainsMonoSemiBold: ["JetBrainsMono-SemiBold"],
        jetBrainsMonoThin: ["JetBrainsMono-Thin"],
      }
    },
  },
  plugins: [],
}