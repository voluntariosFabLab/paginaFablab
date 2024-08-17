import React from 'react'
import { Link } from 'react-router-dom'

const SocialMedias = () => {
  return (
    <div className='social__icons' >
      <a target='__BLANK' href="https://www.instagram.com/fablabscz" ><img src="/instagramLogo.svg" alt="instaLogo" /></a>
      <a target='__BLANK' href="https://www.facebook.com/profile.php?id=61550707618460" ><img src="/facebookIcon.svg" alt="facebook" /></a>
      <a target='__BLANK' href="https://www.tiktok.com/@fablabscz" ><img src="/tiktokIcon.svg" alt="tiktok" /></a>
      <a target='__BLANK' href="https://www.discord.com/users/fablabsantacruz" ><img src="/discordIcon.svg" alt="discord" /></a>
    </div>
  )
}

export default SocialMedias