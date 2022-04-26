import React,{ useEffect , useState} from "react";
import Axios from 'axios'
import styled from 'styled-components';

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
  margin-top: 18vh;
    
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
  margin-top: 18vh;
    
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
  margin-top: 18vh;
    
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
  margin-top: 18vh;
    
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
  margin-top: 18vh;
    
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
  margin-top: 18vh;
    
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
  margin-top: 18vh;
    
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
  margin-top: 18vh;
    
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
  margin-top: 18vh;
    
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
  height: 66vh;
  top: 27vh;
  margin-left: 1vw;
  margin-right: 1vw;
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
`

const Powered = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  margin-right: 1vw;
  margin-top: 83vh;
  text-align: right;
  color: rgba(0, 0, 0, 0.6);
`

const Feed = () =>{
    const [data, setdata] = useState([]);

    useEffect (() => {
      Axios.get("http://localhost:3001/").then((response) => {
          setdata(response.data);
          console.log(data)
      });
    }, []);

  return (
    <Container>
      <Section>
        <ImgLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/SRTET_Logo.svg/2560px-SRTET_Logo.svg.png"></ImgLogo>
      </Section>
      <Section>

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
