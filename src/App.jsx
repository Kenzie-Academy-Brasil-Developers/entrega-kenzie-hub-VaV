
import { RoutesMain } from "./routes/RoutesMain.index";
import GlobalStyles from "./styles/GlobalStyles";
import { UserProvider } from "./provider/UserContext";


export const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </div>
  );
}


