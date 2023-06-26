
import { useContext } from "react";
import { RoutesMain } from "./routes/RoutesMain.index";
import GlobalStyles from "./styles/GlobalStyles";
import { UserContext } from "./provider/UserContext";


export const App = () => {

  const { loading } = useContext(UserContext);

  return (
    <div className="App">
      <GlobalStyles />
      {loading ? <p>Loading...</p> : <RoutesMain />}
    </div>
  );
}


