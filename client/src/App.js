import React,{ useEffect , useState} from "react";
import Axios from 'axios'

const Feed = () =>{
    const [data, setdata] = useState([]);
    const [search, setSearch] = useState('');

    useEffect (() => {
      Axios.get("http://localhost:3001/").then((response) => {
          setdata(response.data);
          console.log(data)
      });
    }, []);

    const searchPost = () => {
      if(search != ''){
          Axios.post("http://localhost:3001/", { 
              item: search
          }).then((response) => {
              setdata(response.data);
          })
      }
  };

  return (
    <div>
      
        <input type="text" placeholder="search item" name="item" onChange={(e)=>{setSearch(e.target.value)}} />
        <button className="searchButt" onClick={searchPost}> search </button> 
      

      
        <h1>Data</h1>
          <div>
            {data.map((val)=> {
              return (                      
                <h5> {val.no}  {val.id}  {val.name}  {val.entry_reader} {val.entry_door} {val.entry_date_time} {val.exit_reader} {val.exit_door} {val.exit_date_time} </h5> ); 
            })}
          </div>
      

    </div>

    
  );
}
  
  


export default Feed;
