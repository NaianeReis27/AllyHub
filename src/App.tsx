import { GlobalStyle } from "./Globalstyles";
import RotaMain from "./routes";
import { ApiContextProvider } from "./context/ContextApi";

function App() {
  return (
    <div className="App">
        <ApiContextProvider>
          <GlobalStyle />
          <RotaMain />
        </ApiContextProvider>
      
    </div>
  );
}

export default App;
