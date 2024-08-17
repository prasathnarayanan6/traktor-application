 module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      'node_modules/flowbite-react/lib/esm/**/*.js'
    ],
    theme: {
      fontFamily: {
        Poppins: "Poppins"
      },
      extend: {
        colors: {
          lightGray: "#D3D3D3",
          purple: "#6842EF"
        }
      }
    },
    plugins: [
        require('flowbite/plugin')
    ],
}