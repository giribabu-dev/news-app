import { useState } from "react";

import Navbar from "./components/navbar/Navbar"
import NewsBoard from "./components/newsBoard/NewsBoard";
import myContext from "./components/context-api/myContext";

function App() {

  const [category, setCategory] = useState('general')

  return (
    <>
      <myContext.Provider value={{category, setCategory}}>
        <Navbar />
        <NewsBoard />
      </myContext.Provider>
    </>
  )
}

export default App;