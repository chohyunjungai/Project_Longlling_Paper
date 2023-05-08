import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const User = {
    email: 'miny@gmail.com',
    pw: 'test20230506'
}

function LoginPage() {
    // const { inputValue, setInputValue} = useState({
    //     nickname: '', email: '', password: ''
    // })

    //  Get
    // const [signups, setSignups] = useState(null)

    // const fatchSignup = async () => {
    //     const {data} =  await axios.get('http://localhost:4001/signup')
    //     // console.log('data', data)
    //     setSignups(data)
    //   }
    
    //   useEffect(() => {
    //     // db로부터 값을 가져올 것이다.
    //     fatchSignup()
    //   }, [])


    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')

    const [emailValid, setEmailValid] = useState(false)
    const [pwValid, setPwValid] = useState(false)

    // 이메일, 비번 조건 충족 시 로그인버튼 활성화
    const [notAllow, setNotAllow] = useState(true)

    const validateForm = () => {
        if (pw !== pwCheck) {
            // 패스워드 값이 일치
            return false
        } else {
            // 패스워드 값이 불일치
            return true
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        const regex = 
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
        if(regex.test(email)) {
            setEmailValid(true)
        } else {
            setEmailValid(false)
        }
    }
    const handlePassword = (e) => {
        setPw(e.target.value)
        const regex = 
        // 최소 8자 이상의 소문자와 숫자
        /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/
        if(regex.test(pw)) {
            setPwValid(true)
        } else {
            setPwValid(false)
        }
    }

    // const loginBtn = () => {
    //     if(email === User.email && pw === User.pw) {
    //         alert('로그인 성공!ヽ(✿ﾟ▽ﾟ)ノ')
    //     } else {
    //         alert('등록되지 않은 회원입니다.╯︿╰')
    //     }
    // }

    // 버튼 활성화 여부 체크
    useEffect(() => {
        // state값이 변화가 일어날 때마다 코드가 실행됨
        // emailValid && pwValid가 모두 true이면 버튼 비활성화 -> 활성화로 return
        if(emailValid && pwValid) {
            setNotAllow(false)
            return
        }
        // 기본적으로는 비활성화
        setNotAllow(true)
    }, [emailValid, pwValid])


    // const handleSubmit = () => {
    //     e.preventDefault()

    //     const
    // }



  return (
      <Page>
        {/* {signups?.map((item) => {
            return (
                <div key={item.email}>
                    {item.nickname} : {item.email} : {item.password}
                </div>
            )
        })} */}
          <TitleWrap>
              LOGIN
          </TitleWrap>
          <ContentWrap>
              <InputTitle>E-MAIL</InputTitle>
              <InputWrap>
                  <Input 
                  type='text'
                  value={email}
                  onChange={handleEmail}
                  placeholder='nimy@gmail.com'/>
              </InputWrap>
              <ErrorMessageWrap>
                  {!emailValid && email.length > 0 && (
                    <div>올바른 이메일을 입력해주세요.</div>
                  )}
              </ErrorMessageWrap>

              <InputTitle style={{marginTop: "26px"}}>PW</InputTitle>
              <InputWrap>
                  <Input
                  type='password'
                  value={pw}
                  onChange={handlePassword}
                  placeholder='영문, 숫자 8자 이상'/>
              </InputWrap>
              <ErrorMessageWrap>
                  {!pwValid && pw.length > 0 && (
                      <div>영문, 숫자 8자 이상 입력해주세요.</div>
                  )}
              </ErrorMessageWrap>
          </ContentWrap>

          <BtnBox>
              <BottomBtn onClick={() => {navigate("/joinPage")}}>회원 가입</BottomBtn>
              <BottomBtn onClick={loginBtn} disabled={notAllow}>로그인</BottomBtn>
          </BtnBox>

      </Page>
  )
}

export default LoginPage

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
const ContentWrap = styled.div`
    margin-top: 26px;
    flex: 1;
`
const InputTitle = styled.div`
    font-size: 12px;
    font-weight: 600;
    color: #262626
`
const InputWrap = styled.div`
    display: flex;
    border-radius: 8px;
    padding: 16px;
    margin-top: 8px;
    background-color: white;
    border: 1px solid #e2e0e0;

    &:focus-within {
        border: 1px solid #4fa8db;
    }
`
const Input = styled.input`
    width: 100%;
    outline: none;
    border: none;
    height: 17px;
    font-size: 14px;
    font-weight: 400;

    &::placeholder {
        color: #dadada
    }
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