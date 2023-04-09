import { useState } from 'react'
import { AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { HiOutlineNewspaper } from 'react-icons/hi';

const Footer = (props) => {
    const iconProps = {
        size: 30,
    }
    const linkTo = (url) => {
        window.open(url, '_blank', 'noreferrer')
    }
    const { column } = props;
    return (
        <div className = {`footer ${column}`}>
            <AiFillGithub 
                className = 'footer-item' 
                {...iconProps} 
                onClick = {() => linkTo('https://github.com/austBrink')}/>
            <AiFillLinkedin 
                className = 'footer-item' 
                {...iconProps}
                onClick = {() => linkTo('https://www.linkedin.com/in/austinmigchelbrink/')}
            />
            <BsDiscord 
                className = 'footer-item' 
                {...iconProps}
                onClick = {() => linkTo('https://www.discordapp.com/users/augustyne#8843/')}
            />
            <HiOutlineNewspaper 
                className = 'footer-item' 
                {...iconProps}
                onClick = {() => linkTo('https://bold.pro/my/austin-migchelbrink')}
            />
        </div>
    )   
}

export default Footer;