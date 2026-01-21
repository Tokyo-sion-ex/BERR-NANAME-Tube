import React, { useState } from 'react';
import { Search, Menu, Bell, User, Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../../stores/themeStore';
import { useAuthStore } from '../../stores/authStore';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { isDark, toggleTheme } = useThemeStore();
  const { user, signOut } = useAuthStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // 検索処理を実装
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-youtube-dark border-b border-gray-200 dark:border-gray-800 px-4 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-youtube-gray rounded-full">
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 bg-youtube-red rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">Y</span>
            </div>
            <span className="text-xl font-bold dark:text-white">YouTube</span>
          </div>
        </div>

        {/* Search Section */}
        <div className="flex-1 max-w-2xl mx-4">
          <form onSubmit={handleSearch} className="flex">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="検索"
                className="w-full px-4 py-2 pl-10 bg-gray-100 dark:bg-youtube-gray border border-gray-300 dark:border-gray-700 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <button
              type="submit"
              className="px-6 bg-gray-100 dark:bg-youtube-gray border border-gray-300 dark:border-gray-700 border-l-0 rounded-r-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Search size={20} />
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-youtube-gray rounded-full"
          >
            {isDark ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-youtube-gray rounded-full relative">
            <Bell size={22} />
            <span className="absolute -top-1 -right-1 bg-youtube-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>
          
          {user ? (
            <div className="relative group">
              <button className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-youtube-gray rounded-full">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <User size={18} className="text-white" />
                </div>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-youtube-gray rounded-lg shadow-lg py-2 hidden group-hover:block">
                <div className="px-4 py-2 border-b dark:border-gray-700">
                  <p className="font-medium">{user.name || user.email}</p>
                </div>
                <button
                  onClick={signOut}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  ログアウト
                </button>
              </div>
            </div>
          ) : (
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              ログイン
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
