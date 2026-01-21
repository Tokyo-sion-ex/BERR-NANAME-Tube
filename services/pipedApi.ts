const PIPED_BASE_URL = "https://pipedapi.kavin.rocks";

export const searchVideos = async (query: string) => {
  const response = await fetch(
    `${PIPED_BASE_URL}/search?q=${encodeURIComponent(query)}&filter=videos`
  );
  return response.json();
};

export const getVideoDetails = async (videoId: string) => {
  const response = await fetch(
    `${PIPED_BASE_URL}/streams/${videoId}`
  );
  return response.json();
};
