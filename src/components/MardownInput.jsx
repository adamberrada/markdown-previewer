import React  from "react";
import { VscEditorLayout } from "react-icons/vsc";

function MarkEditor({ markdown , setMarkdown}) {
 


    return (
        <div className="editor">
        <h2 className="h2"> <VscEditorLayout className="prevIcon" /> Editor</h2>
        <textarea 
        id="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Enter Here"  
        ></textarea>
        </div>
        
    )
}
export default MarkEditor;