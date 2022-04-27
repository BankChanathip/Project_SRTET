import React,{ useEffect , useState} from "react";
import Axios from 'axios'
import styled from 'styled-components';
import './App.css';

const Text = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #000000;
  margin-right: 1vw;
  text-align: center;
`

const Container = styled.div`
  margin: 0px;
  padding : 0px;
  width: inherit;
  height: inherit;
`

const Number = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  text-align: center;
    
  position: absolute;
  width: 2vw;
  height: 3vh;
  margin-left: 1vw;
  margin-right: 0.5vh;
  margin-top: 6vh;
    
  background: #BF262C;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const EmployeeID = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  text-align: center;
    
  position: absolute;
  width: 5vw;
  height: 3vh;
  margin-left: 5vw;
  margin-right: 0.5vh;
  margin-top: 6vh;
    
  background: #BF262C;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const CardholderName = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  text-align: center;
    
  position: absolute;
  width: 10vw;
  height: 3vh;
  margin-left: 12vw;
  margin-right: 0.5vh;
  margin-top: 6vh;
    
  background: #BF262C;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const EntryReader = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  text-align: center;
    
  position: absolute;
  width: 12vw;
  height: 3vh;
  margin-left: 24vw;
  margin-right: 0.5vh;
  margin-top: 6vh;
    
  background: #BF262C;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const EntryDoor = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  text-align: center;
    
  position: absolute;
  width: 12vw;
  height: 3vh;
  margin-left: 38vw;
  margin-right: 0.5vh;
  margin-top: 6vh;
    
  background: #BF262C;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const EntryDate = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  text-align: center;
    
  position: absolute;
  width: 8vw;
  height: 3vh;
  margin-left: 52vw;
  margin-right: 0.5vh;
  margin-top: 6vh;
    
  background: #BF262C;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const ExitReader = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  text-align: center;
    
  position: absolute;
  width: 12vw;
  height: 3vh;
  margin-left: 62vw;
  margin-right: 0.5vh;
  margin-top: 6vh;
    
  background: #BF262C;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const ExitDoor = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  text-align: center;
    
  position: absolute;
  width: 12vw;
  height: 3vh;
  margin-left: 76vw;
  margin-right: 0.5vh;
  margin-top: 6vh;
    
  background: #BF262C;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const ExitDate = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  text-align: center;
    
  position: absolute;
  width: 8vw;
  height: 3vh;
  margin-left: 90vw;
  margin-right: 0.5vh;
  margin-top: 6vh;
    
  background: #BF262C;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const BgContainer = styled.div`
  position: fixed;
  display: flex;
  z-index: 999;
  width: 98vw;
  height: 73vh;
  top: 20vh;
  margin-left: 1vw;
  margin-right: 1vw;
  margin-bottom: 1vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background: #EBEBEB;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`

const Section = styled.div`
  display : flex;
  justify-content : space-between;
  align-items : center;
  
  .input-form{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      width: 69.5vw;
      height: 3.2em;
      margin-right: 1vh;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: center;
      text-align: center;
    }
  }
  .search-button{
    border: 20px;
    color: #FFFFFF;
    width: 15vw;
    height: 3.2em;
    margin-right: 1vw;
    background-color: #2F2F7C;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    text-align: center;
  }
`

const SectionCol = styled(Section)`
  display : grid;
  text-align: center;
  grid-template-columns: 4vw 7vw 12vw 14vw 14vw 10vw 14vw 14vw 10vw;
`

const SectionRow = styled(Section)`
  display : grid;
  text-align: center;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`

const ImgLogo = styled.img`
  top: 1px;
  width: 20%;
  left: 1vw;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
`

const Powered = styled.p`
  position: static;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  margin-right: 1vw;
  margin-top: 82vh;
  margin-bottom: 1vw;
  text-align: right;
  color: rgba(0, 0, 0, 0.6);
`

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
    <Container>
      <Section>
        <ImgLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/SRTET_Logo.svg/2560px-SRTET_Logo.svg.png"></ImgLogo>
        <form className="input-form">
          <input type="text" placeholder="Employee ID, Cardholder Name..." name="item" onChange={(e)=>{setSearch(e.target.value)}} />
        </form>
          <button className="search-button" onClick={searchPost}> Find </button>
      </Section>
      <Section>
        <Number>No.</Number>
        <EmployeeID>Employee ID</EmployeeID>
        <CardholderName>Cardholder Name</CardholderName>
        <EntryReader>Entry Reader</EntryReader>
        <EntryDoor>Entry Door</EntryDoor>
        <EntryDate>Entry Date/Time</EntryDate>
        <ExitReader>Exit Reader</ExitReader>
        <ExitDoor>Exit Door</ExitDoor>
        <ExitDate>Exit Date/Time</ExitDate>
      </Section>
      <Section>
        <BgContainer>
          <div className="feed">
            {data.map((val)=> {
              return (
                <SectionCol>
                  <Text>{val.no}</Text>
                  <Text>{val.id}</Text>
                  <Text>{val.name}</Text>
                  <Text>{val.entry_reader}</Text>
                  <Text>{val.entry_door}</Text>
                  <Text>{val.entry_date_time}</Text>
                  <Text>{val.exit_reader}</Text>
                  <Text>{val.exit_door}</Text>
                  <Text>{val.exit_date_time}</Text>
                </SectionCol>
              ); 
            })}
          </div>
        </BgContainer>
      </Section>
        <Powered>Powered by Computer Engineering, CMU #50</Powered>
    </Container>
  );
}

export default Feed;
