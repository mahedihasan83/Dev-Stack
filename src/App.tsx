import { Suspense } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav"
import Technologies from "./components/Technologies";



function App() {


  return (
    <>
      <Nav/>
      <Banner/>
      <Suspense fallback={<div>Loading....</div> }>
        <Technologies/>
      </Suspense>
    </>
  )
}

export default App;



