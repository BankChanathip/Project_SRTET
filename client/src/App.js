import React,{ useEffect , useState} from "react";
import Axios from 'axios'

const Feed = () =>{
    const [data, setdata] = useState([]);

    useEffect (() => {
      Axios.get("http://localhost:3001/").then((response) => {
          setdata(response.data);
          console.log(data)
      });
    }, []);

  return (
    <div className = "feed">
      <h1>Data</h1>
            <div>
                {data.map((val)=> {
                    return (
                      <h5> {val.no}  {val.id}  {val.name}  {val.entry_reader} {val.entry_door} {val.entry_date_time} {val.exit_reader} {val.exit_door} {val.exit_date_time} </h5>
                    ); 
                })}
            </div>
    </div>
  );
}
  
  


export default Feed;
