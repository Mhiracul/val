// src/App.js

import { useState } from "react";
import ValentineCard from "./components/Banner";
function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <ValentineCard onAccept={() => setShowMessage(true)} />
      {showMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="text-white text-2xl font-semibold"></div>
        </div>
      )}
    </div>
  );
}

export default App;
