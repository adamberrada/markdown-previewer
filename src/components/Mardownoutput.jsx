import React from "react";
import { marked } from "marked";
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; 
import { VscPreview } from "react-icons/vsc";


marked.setOptions({
  breaks: true,
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  }
});
function MarkPreviewer( {markdown }) {
 
  return (
    <div className="previewer">
    <h2 className="h2"><VscPreview className="prevIcon" /> Previewer</h2>
      <div className="insidePreviewer"
        id="preview"
       dangerouslySetInnerHTML={{ __html: marked(markdown) }}/>
    </div>
  )
}
export default MarkPreviewer;