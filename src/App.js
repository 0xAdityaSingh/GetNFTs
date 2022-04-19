import * as React from 'react';
import { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import GetNfts from './components/Getnfts';
import MyJson from './components/myjson';




function App() {
  
  const [mynftdata, setNFTData] = useState({});
  
    return (
      <div className='rowC'>
        <div className="lpanel"><GetNfts setNFTData={setNFTData} /></div>
        <div className="rpanel"><MyJson mynftdata={mynftdata}/></div>
      </div>
    );
  
}
export default App;