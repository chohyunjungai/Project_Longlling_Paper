import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function JoinPage() {

    const navigate = useNavigate()

    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // 패스워드 중복체크
    const [pwCheck, setPwCheck] = useState('')


    const [emailValid, setEmailValid] = useState(false)
    const [pwValid, setPwValid] = useState(false)
    

    // 이메일, 비번 조건 충족 시 로그인버튼 활성화
    // const [notAllow, setNotAllow] = useState(true)
    // const onChange = (e) => {
    //     const { name, value } = e.target;
    //     const nextInputs = { ...inputs, [name]: value };
    //     setInputs(nextInputs);
    //   };

    const validateForm = () => {
        if (password !== pwCheck) {
            // 패스워드 값이 불일치?일치?
            return false
        } else {
            // 패스워드 값이 일치
            return true
        }
    }
    // 이메일검사
    const handleEmail = (e) => {
        // setEmail(e.target.value)
        // console.log(e.target.value)
        const regex = 
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
        if(regex.test(e.target.value)) {
            setEmailValid(true)
        } else {
            setEmailValid(false)
        }
    }
    // 비밀번호검사
    const handlePassword = (e) => {
        // setPw(e.target.value)
        const regex = 
        // 최소 8자 이상의 소문자와 숫자
        /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/
        if(regex.test(e.target.value)) {
            setPwValid(true)
        } else {
            setPwValid(false)
        }
    }
    // const handlePasswordCheck = (e) => {
    //     setPwCheck(e.target.value)
    // }

    // const handleSubmit  = (e) => {
    //     e.preventDefault()

    //     if (nickname === "") {
    //         alert("닉네임을 입력해주세요!");
    //         return;
    //       } else if (email === "") {
    //         alert("이메일을 입력해주세요!");
    //         return;
    //     } else if (handleEmail(email) === "") {
    //         alert("이메일 형식에 맞춰 입력해주세요!");
    //         return;
    //       } else if (password === "") {
    //         alert("비밀번호를 입력해주세요!");
    //         return;
    //       } else if (passwordCheck === "") {
    //         alert("비밀번호 중복 확인을 입력해주세요!");
    //         return;
    //       } else if (handlePassword(password) === false) {
    //         alert("비밀번호는 영문+숫자 8자를 조합하여 입력해주세요 !");
    //         return;
    //       } else if (passwordCheck !== inputs.userPW) {
    //         alert("비밀번호가 동일하지 않습니다!");
    //         return;
    //       }

    // const handleSignup = async () => {
    //     if (!email || !nickname || !password || !passwordCheck) {
    //       alert("모든 항목을 입력해주세요.");
    //       return;
    //     }
      
    //     if (password !== passwordCheck) {
    //       alert("비밀번호가 일치하지 않습니다.");
    //       return;
    //     }
      
    //     try {
    //       const response = await fetch("/api/signup", {
    //         method: "POST",
    //         body: JSON.stringify({ email, nickname, password }),
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       });
    //       if (response.ok) {
    //         alert("회원가입이 완료되었습니다.");
    //       } else {
    //         alert("회원가입에 실패했습니다.");
    //       }
    //     } catch (error) {
    //       console.error(error);
    //       alert("회원가입 중 오류가 발생했습니다.");
    //     }
    //   };

    

    return (
      <Page>
          <h1 style={{ marginTop: "50px" }}>회원 가입</h1>
          <Form onSubmit={(e)=>{
            e.preventDefault()
            onSubmitHandler()
          }}>
              {/* 닉네임 중복체크 */}
              <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Nickname</Form.Label>
                   <Form.Control 
                   value={nickname} onChange={(e) => setNickname(e.target.value)}
                   type="text" placeholder="닉네임을 입력해주세요." />
              </Form.Group>
              {/* 이메일 중복체크 */}
              <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                      value={email} onChange={(e) => setEmail(e.target.value)}
                      type="text" placeholder="이메일 주소를 입력해주세요" />
                  <ErrorMessageWrap>
                      {!emailValid && email.length > 0 && (
                          <div>올바른 이메일을 입력해주세요.</div>
                      )}
                  </ErrorMessageWrap>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                      value={password} onChange={(e) => setPassword(e.target.value)}
                      type="password" placeholder="비밀번호를 입력해주세요" />
                  <ErrorMessageWrap>
                      {!pwValid && password.length > 0 && (
                          <div>영문, 숫자 8자 이상 입력해주세요.</div>
                      )}
                  </ErrorMessageWrap>
                  {/* 위 패스워드와 값이 일치하는지 */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password check</Form.Label>
                  <Form.Control
                      value={pwCheck} onChange={(e) => setPwCheck(e.target.value)}
                      type="password" placeholder="비밀번호를 확인해주세요" />
                  <ErrorMessageWrap>
                      {!validateForm() && pwCheck.length > 0 && (
                          <div>패스워드가 일치하지 않습니다.</div>
                      )}
                  </ErrorMessageWrap>
              </Form.Group>
              {/* {signups?.map(item => {
            return (
            <div key={item.email}>{item.nickname} : {item.email} : {item.password}</div>
            )
        })} */}
          <BottomBtnBox>
              <BottomBtn type="submit">회원 가입 완료</BottomBtn>
              {/* <BottomBtn onClick={handleCloseModal}>취소</BottomBtn> */}
          </BottomBtnBox>
          </Form>
          
      </Page>
  )
}

export default JoinPage

const Page = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    max-width: 500px;
    padding: 0 20px;

    left: 50%;
    transform: translate(-50%, 0);

    background-color: #F7F7F7;
    // 버튼을 가장 하단에 배치하기 위해
    overflow: hidden;

    display: flex;
    flex-direction: column;
`
const TitleWrap = styled.div`
    margin-top: 87px;
    font-size: 26px;
    font-weight: 700;
    color: #262626;
`
const ErrorMessageWrap = styled.div`
    margin-top: 8px;
    color: #f95c5c;
    font-size: 12px;
`
const BtnBox = styled.div`
    display: flex;
    justify-content: space-between;
`
const BottomBtn = styled.button`
    width: 40%;
    height: 48px;
    border:  none;
    font-weight: 700;
    background-color: #4fa8db;
    border-radius: 64px;
    color: white;
    margin-bottom: 16px;
    cursor: pointer;

    &:disabled {
        background-color: #dadada;
        color: white;
    }
`
const BottomBtnBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 80px 40px;
`