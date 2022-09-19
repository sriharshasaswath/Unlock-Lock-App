import {useState} from 'react'
import {MainContainer, Image, Button, NameText} from './styledComponents'

const Header = () => {
  const [lock, setLock] = useState(false)
  const onClickBtn = () => setLock(prevState => !prevState)
  return (
    <MainContainer>
      {!lock ? (
        <Image
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      ) : (
        <Image
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      )}
      {!lock ? (
        <NameText>Your Device is Locked</NameText>
      ) : (
        <NameText>Your Device is Unlocked</NameText>
      )}
      <Button onClick={onClickBtn}>{lock ? 'lock' : 'unlock'}</Button>
    </MainContainer>
  )
}

export default Header
