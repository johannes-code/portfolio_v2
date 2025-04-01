import data from "../../../locales/en.json";

export const MediaHeader = () => {
  return (
    <>
      <div className="media_header fixed left-8 top-0 flex flex-col justify-center items-center">
        <div className="media_line h-50 w-[1px] bg-gray-500 mb-4" />

        <div className="flex flex-col space-y-4">
          <a
            className="before:content-none! hover:scale-150 media_icon .h-3rem .e-3rem"
            href={data.contactinfo.discord}
          >
            <img src={data.mediaIcon.discord} alt="Discord Icon" />
          </a>

          <a
            className="before:content-none! hover:scale-150 media_icon .h-3rem .e-3rem"
            href={data.contactinfo.github}
          >
            <img src={data.mediaIcon.github} alt="Github Icon" />
          </a>

          <a
            className="before:content-none! hover:scale-150 media_icon .h-3rem .e-3rem"
            href={data.contactinfo.mail}
          >
            <img src={data.mediaIcon.mail} alt="Email Icon" />
          </a>
        </div>
      </div>
    </>
  );
};
