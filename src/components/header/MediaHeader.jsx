import data from "../../locales/en.json"


export const MediaHeader = () => {

  return (
    <>
      <div className="media_header fixed left-8 top-0 flex flex-col justify-center items-center">
        <div className="media_line h-50 w-[1px] bg-gray-500 mb-4" />
          
          <div className ="flex flex-col space-y-4">
            <img
              className="media_icon .h-3rem .w-3rem"
              src={data.mediaIcon.discord}
              alt="discordIcon"
            />
            <img
              className="media_icon .h-3rem .w-3rem"
              src={data.mediaIcon.github}
              alt="githubIcon"
            />
            <img 
            className="media_icon .h-3rem .w-3rem" 
            src={data.mediaIcon.email} 
            alt="emailIcon" 
            />
          </div>
      
      </div>
    </>
  );
};
