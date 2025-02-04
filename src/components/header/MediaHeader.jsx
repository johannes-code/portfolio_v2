import styles from "./header.module.css";

export const MediaHeader = () => {

  return (
    <>
      <div className="media_header absolute left-8 top-0">
        <div className="media_line h-50 w-[1px] bg-white" />
        
        <img
          className="media_icon absolute left-8 h-50 w-50 top-34"
          src="/src/images/icons/discord.svg"
          alt="discordicon"
        />
        <img
          className="media_icon absolute left-8 h-50 w-50 top-46"
          src="/src/images/icons/github.svg"
          alt="githubicon"
        />
        <img 
        className="media_icon absolute left-8 h-50 w-50 top-54" 
        src="/src/images/icons/email.svg" 
        alt="emailicon" 
        />
        
      </div>
    </>
  );
};
