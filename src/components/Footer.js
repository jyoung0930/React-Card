import facebookIcon from "../images/FacebookIcon.png";
import gitHubIcon from "../images/GitHubIcon.png";
import instagramIcon from "../images/InstagramIcon.png";
import twitterIcon from "../images/TwitterIcon.png";

export default function Footer() {
  return (
    <div className="footer">
      <img src={twitterIcon} alt="socials"></img>
      <img src={facebookIcon} alt="socials"></img>
      <img src={instagramIcon} alt="socials"></img>
      <img src={gitHubIcon} alt="socials"></img>
    </div>
  );
}
