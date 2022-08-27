import React from 'react'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/nicolas-exequiel-burgos-fullstackdeveloper/" ><AiOutlineLinkedin/></a>
        <a href="https://github.com/NicoPR22" ><AiOutlineGithub/></a>
    </div>
  )
}

export default HeaderSocials