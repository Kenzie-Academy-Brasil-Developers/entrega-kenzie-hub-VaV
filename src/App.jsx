

import { useEffect } from "react"
import { RoutesMain } from "./routes/RoutesMain.index"
import { api } from "./services/api"


export const App = () => {



  useEffect(() =>{
    async function loadData(){
      const response = await api.get("/")
      console.log(response);
    }
    loadData();
  }, [])

  return (
    <div className="App">
      <RoutesMain />
    </div>
  )
}


