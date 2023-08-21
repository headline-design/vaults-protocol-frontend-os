import React, { useEffect } from "react"
import { Home } from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Transactions } from "screens/Transactions";
import { ProtocolInfo } from "screens/ProtocolInfo";
import { PrivacyPage } from "screens/Privacy";
import { TermsPage } from "screens/Terms";
import { useDispatch } from "react-redux";
import { recreateWeb3 } from "utils/useAuth";
import { ThanksPage } from "screens/Thanks"
import ScrollToTop from "components/ScrollToTop";
import { LaunchpadPage } from "screens/Launchpad";
import { LaunchpadThanksPage } from "screens/LuanchpadThanksPage";



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recreateWeb3());
}, []);

  return (
    <div className="App">
     
      <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/page" element={<Transactions/>} />
        <Route path="/info" element={<ProtocolInfo/>} />
        <Route path="/terms" element={<TermsPage/>} />
        <Route path="/privacy" element={<PrivacyPage/>} />
        <Route path="/thanks" element={<ThanksPage/>} />
        <Route path="/launchpad/thanks" element={<LaunchpadThanksPage/>} />
        <Route path="/launchpad" element={<LaunchpadPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
