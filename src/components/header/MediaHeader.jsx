
export const MediaHeader = () => {

  return (
    <>
      <div className="media_header fixed left-8 top-0 flex flex-col justify-center items-center">
        <div className="media_line h-50 w-[1px] bg-gray-500 mb-4" />
          
          <div className ="flex flex-col space-y-4">
            <img
              className="media_icon .h-3rem .w-3rem"
              src="/src/images/icons/discord.svg"
              alt="discordicon"
            />
            <img
              className="media_icon .h-3rem .w-3rem"
              src="/src/images/icons/github.svg"
              alt="githubicon"
            />
            <img 
            className="media_icon .h-3rem .w-3rem" 
            src="/src/images/icons/email.svg" 
            alt="emailicon" 
            />
          </div>
      
      </div>
    </>
  );
};
