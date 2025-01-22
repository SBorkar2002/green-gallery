import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Shop } from './Pages/Shop';
import Handover from './Pages/Handover';
import Register from './Pages/Register';
import { Home } from './Pages/Home';
import { Indoor } from './Pages/Indoor';
import { Medicinal } from './Pages/Medicinal';
import { Flowers } from './Pages/Flowers';
import { Cactus } from './Pages/Cactus';
import Snakeplant from './Pages/Snakeplant';
import Aloe from './Pages/Aloe';
import Spider from './Pages/Spider';
import Pothos from './Pages/Pothos';
import Tulsi from './Pages/Tulsi';
import Thyme from './Pages/Thyme';
import Bryophyllum from './Pages/Bryophyllum';
import Peppermint from './Pages/Peppermint';
import Jasmin from './Pages/Jasmin';
import Rose from './Pages/Rose';
import Sunflower from './Pages/Sunflower';
import Marigold from './Pages/Marigold';
import Thankyou from './Pages/Thankyou';
import BalloonCac from './Pages/BalloonCac';
import CrownCac from './Pages/CrownCac';
import OldCac from './Pages/OldCac';
import StatCac from './Pages/StatCac';




const AppContent = () => {
  const location = useLocation();
  const isThankyouPage = location.pathname === '/thankyou';

  return (
    <>
      {!isThankyouPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/handover" element={<Handover />} />
        <Route path="/register" element={<Register />} />
        <Route path="/indoor" element={<Indoor />} />
        <Route path="/medicinal" element={<Medicinal />} />
        <Route path="/flowers" element={<Flowers />} />
        <Route path="/cactus" element={<Cactus />} />
        <Route path="/snakeplant" element={<Snakeplant />} />
        <Route path="/aloe" element={<Aloe />} />
        <Route path="/spider" element={<Spider />} />
        <Route path="/pothos" element={<Pothos />} />
        <Route path="/tulsi" element={<Tulsi />} />
        <Route path="/thyme" element={<Thyme />} />
        <Route path="/peppermint" element={<Peppermint />} />
        <Route path="/jasmin" element={<Jasmin />} />
        <Route path="/bryophyllum" element={<Bryophyllum />} />
        <Route path="/marigold" element={<Marigold />} />
        <Route path="/rose" element={<Rose />} />
        <Route path="/sunflower" element={<Sunflower />} />
        <Route path="/balloonCac" element={<BalloonCac />} />
        <Route path="/crownCac" element={<CrownCac />} />
        <Route path="/oldCac" element={<OldCac />} />
        <Route path="/statCac" element={<StatCac />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
