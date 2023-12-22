import React from "react";
import axios from "axios";
import { baseURI } from "../utils/constants.js"
import { RxCross1 } from "react-icons/rx";

const Popup = ({setShowPopup, popupContent, setUpdateUI}) => {

 const [input, setInput] = React.useState(popupContent.text);

 const updateTodo = () => {
       axios.put(`${baseURI}/api/update/${popupContent.id}`, {todo: input})
       .then((res) => { console.log(res.data);
           setUpdateUI((prevState) => !prevState);
           setShowPopup(false)
       })
       .catch()
 }

 return(
   <div className="backdrop">
   <div className="popup">
       <RxCross1 className="cross" onClick={() => setShowPopup(false)}/>
    <h1>Update ToDo</h1>
    <div className="popup__input_holder ">
      <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      type="text" placeholder="Update a ToDo...."
      />
      <button onClick={updateTodo} >Update</button>
    </div>
   </div>
   </div>
 )
}

export default Popup