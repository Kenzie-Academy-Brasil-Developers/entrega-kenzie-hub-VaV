

import { useState } from "react";
import { RoutesMain } from "./routes/RoutesMain.index";



export const App = () => {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      <RoutesMain isLogin={isLogin} setIsLogin={setIsLogin } />
    </div>
  );
}


