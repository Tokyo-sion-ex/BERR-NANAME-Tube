import { useEffect, useState } from 'react';
import VideoGrid from '../components/Video/VideoGrid';
import ClockWidget from '../components/Home/ClockWidget';
import { getTrendingVideos } from '../services/pipedApi';
import { Video } from '../types/video';

const Home = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTrendingVideos();
  }, []);

  const loadTrendingVideos = async () => {
    try {
      setIsLoading(true);
      const data = await getTrendingVideos();
      setVideos(data);
    } catch (error) {
      console.error('Failed to load trending videos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-youtube-dark">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold dark:text-white">おすすめ</h1>
            <ClockWidget />
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            最新の動画を発見しましょう
          </p>
        </div>

        {/* Video Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 dark:bg-youtube-gray rounded-lg aspect-video mb-3"></div>
                <div className="h-4 bg-gray-200 dark:bg-youtube-gray rounded mb-2"></div>
                <div className="h-3 bg-gray-200 dark:bg-youtube-gray rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <VideoGrid videos={videos} />
        )}
      </div>
    </div>
  );
};

export default Home;
