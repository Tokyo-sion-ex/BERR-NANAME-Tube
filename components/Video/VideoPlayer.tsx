import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoId }) => {
  return (
    <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        width="100%"
        height="100%"
        controls
        config={{
          youtube: {
            playerVars: { showinfo: 1 }
          }
        }}
      />
    </div>
  );
};
