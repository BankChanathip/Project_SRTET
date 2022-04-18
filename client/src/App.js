import React,{ useEffect , useState} from "react";
import Axios from 'axios'

const Feed = () =>{
    const [feedPost, setFeedPost] = useState([]);
  useEffect (() => {
        Axios.get(`http://localhost:3001/`, {
        }).then((response) => {
            setFeedPost(response.data);
        });
  }, []);
}


function App() {
  return (
    <div className = "App">
      
    </div>
  );
}

export default App;
