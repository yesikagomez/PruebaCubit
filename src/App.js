import Tab from './Componentes/Tab';
import {ThemeProvider,createMuiTheme} from '@material-ui/core/styles';

const theme=createMuiTheme({
  palette:{
    primary:{
      main:'#212121'
    },
    secondary: {
      main: '#ffc107'
    }
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Tab/>
      </ThemeProvider>
    </div>
  );
}

export default App;
