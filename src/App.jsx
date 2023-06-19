

import { useState } from "react";
import { RoutesMain } from "./routes/RoutesMain.index";
import GlobalStyles from "./styles/globalstyles";



export const App = () => {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      <GlobalStyles/>
      <RoutesMain isLogin={isLogin} setIsLogin={setIsLogin} />
    </div>
  );
}


