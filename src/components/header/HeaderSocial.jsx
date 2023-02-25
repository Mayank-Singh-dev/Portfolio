import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const HeaderSocial = () => {
  return (
    <div className="header__Socials">
        <a href="https://www.linkedin.com/in/mayank-singh-ab2794254/" rel="noreferrer" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Mayank-Singh-dev" rel="noreferrer" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocial