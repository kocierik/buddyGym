import { extendTheme } from 'native-base'
const Theme = extendTheme({
  colors: {
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
    erik: {
      background: '#EEEEEE',
      text: '#00092C',
      button: '#ffc300',
      textButton: '#00092C',
      border: '#003566',
    },
  },
  font: {
    fontFamily: "'Montserrat', sans-serif",
  },
})

export default Theme
