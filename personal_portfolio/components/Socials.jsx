import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaInstagram, FaDiscord} from "react-icons/fa"

const socials = [
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/archi-mehta/"},
    {icon: <FaGithub />, path: "https://github.com/archimehta"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/archimehta_/"},
    {icon: <FaDiscord />, path: "https://discord.com/users/archicomics"},
]
const Socials = ({containerStyles, iconStyles}) => {
    return <div className = {containerStyles}>
        {socials.map((item, index)=>{
            return <Link key = {index} href = {item.path} className = {iconStyles} target = "_blank" rel = "noopener noreferrer">
                {item.icon}
            </Link>
        })}
    </div>
}

export default Socials