import { useEffect, useState } from "react"
import ToDo from "./Components/ToDo.js";
import Popup from "./Components/Popup.js";
import axios from "axios";
import { baseURI } from "./utils/constants.js";

function App() {

	const [toDos, setToDos] = useState([])
	const [input, setInput] = useState(" ");
	const [updateUI, setUpdateUI] = useState(false);
	const [showPopup, setShowPopup] = useState(false);
	const [popupContent, setPopupContent] = useState({});

	useEffect(() => {
         axios.get(`${baseURI}/get`)
         .then((res) => setToDos(res.data))
         .catch((err) => console.log(err))
	}, [updateUI]);

	const saveTodo = () => {
         axios.post(`${baseURI}/save`,{todo:input}).then(res => {
                    console.log(res.data);
                    setUpdateUI((prevState) => !prevState)
                    setInput(" ")
         }) .catch((err) => console.log(err))
	}

  return (
<main>
 <div className="container">
   <h1 className="title">ToDo App</h1>
   <div className="input_holder">
    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Add a ToDo...."/>
     <button onClick={saveTodo}>Add</button>
   </div>
   <div className="list">
    {toDos.map(e1 => (<ToDo
    key={e1._id}
    text={e1.todo}
    id={e1._id}
    setUpdateUI={setUpdateUI}
    setShowPopup={setShowPopup}
    setPopupContent={setPopupContent}
    />
    ))}
   </div>
 </div>
  {showPopup && <Popup
  setShowPopup={setShowPopup}
   popupContent={popupContent}
   setUpdateUI={setUpdateUI} />}
</main>
  );
}

export default App;
