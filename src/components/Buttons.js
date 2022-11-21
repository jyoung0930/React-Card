import mailIcon from "../images/MailIcon.png";
import linkedIn from "../images/linkedinIcon.png";

export default function Buttons() {
  return (
    <div className="button-container">
      <button className="eMail-button">
        <img src={mailIcon} alt="email" /> Email
      </button>
      <button className="linkedIn-button">
        <img src={linkedIn} alt="linkedIn" />
        LinkedIn
      </button>
    </div>
  );
}
