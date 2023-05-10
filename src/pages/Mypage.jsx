  //1. 받아온 데이터를 변수로 만들자!!
  //2. posts[{id: , nickname...},{}] 여기서 title을 모두 뽑으려면 어떻게 해야 하지?
  // 3. 로그인된 유저의 id값 변수에 담기-필요가 없나?
  // 4. map으로 쪼르르 카드가 붙도록
  // 5. 누르면 그 글로 가도록-링크는 a태그 안이쁘고, 네비게이트할 수 있는 각 주소가 있나?





import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {House, PersonCircle} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom'; //페이지 이동 도와주는 useNavigate()
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Card} from 'react-bootstrap';
import styled from 'styled-components';
// import posts from './db.json';

function Mypage() {

  const navigate = useNavigate();

  //현재 로그인된 유저의 id값을 가정한 것-어떻게 불러오지?
  const userId =1; 
  
  return (
    
    <Page>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#" onClick={() => { navigate('/home') }}><House size={24} /></Navbar.Brand>
            <h5>Mypage</h5>
          </Container>
        </Navbar>
      </Container>
   
      <MyInfo>
        <div style={{ padding: '5px' }}>내 정보</div>
        <div>
          <div style={{ padding: '5px' }}><PersonCircle size={50} /></div>
          {/* 로그인한 사람의 닉네임과 한줄평 오게  
          {userInfo.nickname}*/}
          <div style={{ padding: '5px' }}> 꼬꼬닭 </div>
        </div>
      </MyInfo>

      <div>
      <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="profile" title="Home">
        {/* {
          posts.map((a)=>{
            return (
              <Card body>posts[i].title</Card>
            )
          })
        } */}
      <Card body>받은 데이터에서 title만 map으로 돌림</Card>

     </Tab>
      <Tab eventKey="id" title="Profile">
       {/* {
          comments.map((a)=>{
            return (
              <Card body>comments[i].title</Card>
            )
          })
        } */}
      <Card body>json에서 가져온 코멘트</Card>

      </Tab>
      
    </Tabs>    


    
      
            </div> 
        </Page>
      
  )
}

export default Mypage

const Page = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 700px;
  padding: 0 20px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #F7F7F7;
  // 버튼을 가장 하단에 배치하기 위해
  overflow: hidden;
  display: flex;
  flex-direction: column;
`
const MyInfo = styled.div`
  text-align: center;
  margin: 20px 0px;
  font-weight: 800;
`
function LongCard (props){
  return(
    <Card border="dark" style={{ width: '18rem' }}>
      <Card.Header>{props.userPost.title}</Card.Header>
        <Card.Body>
          <Card.Text>
            {props.userPost.content}
          </Card.Text>
        </Card.Body> 
    </Card>

  )
}     
