// components/header/MediaHeader/MediaHeader.jsx
import { getSocialLinks } from "../../../lib/api";
import { useAsyncData } from "../../../hooks/useAsyncData";

export const MediaHeader = () => {
  const { data: socialData, loading } = useAsyncData(getSocialLinks);

  if (loading) return <div>Loading...</div>;

  // Filter for media header links
  const mediaLinks =
    socialData?.links?.filter((link) => link.showIn?.includes("header")) || [];

  return (
    <div className="media_header fixed left-8 top-0 flex flex-col justify-center items-center">
      <div className="media_line h-50 w-[1px] bg-gray-500 mb-4" />

      <div className="flex flex-col space-y-4">
        {mediaLinks.map((link) => (
          <a
            key={link.platform}
            className="before:content-none! hover:scale-150 media_icon .h-3rem .e-3rem"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={link.icon} alt={`${link.platform} Icon`} />
          </a>
        ))}
      </div>
    </div>
  );
};
