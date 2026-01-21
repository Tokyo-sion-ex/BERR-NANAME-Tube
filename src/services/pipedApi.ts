const PIPED_INSTANCES = [
  'https://pipedapi.kavin.rocks',
  'https://piped-api.garudalinux.org',
  'https://pipedapi.adminforge.de',
];

let currentInstanceIndex = 0;

const getInstance = () => PIPED_INSTANCES[currentInstanceIndex];

const switchInstance = () => {
  currentInstanceIndex = (currentInstanceIndex + 1) % PIPED_INSTANCES.length;
};

export const searchVideos = async (query: string, options = {}) => {
  try {
    const params = new URLSearchParams({
      q: query,
      filter: 'videos',
      ...options,
    });
    
    const response = await fetch(`${getInstance()}/search?${params}`);
    
    if (!response.ok) {
      switchInstance();
      throw new Error('Failed to fetch');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Search error:', error);
    throw error;
  }
};

export const getVideoDetails = async (videoId: string) => {
  try {
    const response = await fetch(`${getInstance()}/streams/${videoId}`);
    
    if (!response.ok) {
      switchInstance();
      throw new Error('Failed to fetch');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Video details error:', error);
    throw error;
  }
};

export const getTrendingVideos = async () => {
  try {
    const response = await fetch(`${getInstance()}/trending`);
    
    if (!response.ok) {
      switchInstance();
      throw new Error('Failed to fetch');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Trending error:', error);
    throw error;
  }
};
