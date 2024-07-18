import React, { useState,useEffect } from 'react';
import Header from './components/Header';
import WebFont from 'webfontloader';
import MarkEditor from './components/MardownInput';
import MarkPreviewer from './components/Mardownoutput';
import './App.css';



function App() {
  const [markdown , setMarkdown] = useState(''); // set the Mardoen input 

  useEffect(() => {
    WebFont.load({
   google : {
        families : ['Jura']
      }
    })
  } ,[])

  

  return (
    <div >
    <Header />
    <div className='editor-previewer'>
    <MarkEditor markdown={markdown} setMarkdown={setMarkdown}/>
    <MarkPreviewer markdown={markdown} />
    </div>
    </div>
  );
}

export default App;
