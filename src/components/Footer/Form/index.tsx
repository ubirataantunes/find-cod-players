import "./Footer.css";

const Footer = () => {
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/ubirata-antunes98/')
  };
  const openGithub = () => {
    window.open('https://github.com/ubirataantunes')
  };

  return (
    <footer>
      <div>
        <img onClick={openGithub} src="/images/github.svg" alt="GitHub" />
        <img
          onClick={openLinkedIn}
          className="linkedinIcon"
          src="/images/linkedin.svg"
          alt="LinkedIn"
        />
      </div>
      <p className="text-slate-200">Developed by Ubiratã Antunes</p>
    </footer>
  );
};

export default Footer;
