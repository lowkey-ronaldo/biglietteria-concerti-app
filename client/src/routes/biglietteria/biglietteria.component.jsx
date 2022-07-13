import { Routes, Route } from "react-router-dom";
import BiglietteriaPreview from '../biglietteria-preview/biglietteria-preview.component'
import Eventi from '../eventi/eventi';

const Biglietteria = () => {
  

  return (
    <Routes>
      <Route index element = {<BiglietteriaPreview/>} />
      <Route path = ":category" element = {<Eventi/>} />
    </Routes>
    
  );
};

export default Biglietteria;
