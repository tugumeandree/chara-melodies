'use client';

import { useState } from 'react';
import { Filter } from 'lucide-react';
import { hymnsDatabase } from '@/data/hymns';
import { HymnCard } from '@/components/ui/HymnCard';
import { SearchBar } from '@/components/ui/SearchBar';
import { Language, Category } from '@/types';

export default function HymnsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<Language | 'All'>('All');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [showFilters, setShowFilters] = useState(false);

  const languages: (Language | 'All')[] = ['All', ...Array.from(new Set(hymnsDatabase.map(h => h.language)))];
  const categories: (Category | 'All')[] = ['All', ...Array.from(new Set(hymnsDatabase.map(h => h.category)))];

  const filteredHymns = hymnsDatabase.filter(hymn => {
    const matchesSearch = searchQuery === '' || 
      hymn.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hymn.number.toString().includes(searchQuery) ||
      hymn.lyrics.some(section => 
        section.lines.some(line => line.toLowerCase().includes(searchQuery.toLowerCase()))
      );

    const matchesLanguage = selectedLanguage === 'All' || hymn.language === selectedLanguage;
    const matchesCategory = selectedCategory === 'All' || hymn.category === selectedCategory;

    return matchesSearch && matchesLanguage && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-worship-pattern">
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">
            All Hymns
          </h1>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`p-2 rounded-lg transition-colors ${
              showFilters 
                ? 'bg-primary-gold text-white' 
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
        {/* Search Bar */}
        <SearchBar 
          onSearch={setSearchQuery}
          placeholder="Search by title, number, or lyrics..."
          className="mb-4 sm:mb-6"
        />

        {/* Filters */}
        {showFilters && (
          <div className="card p-4 sm:p-6 mb-4 sm:mb-6">
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Filters</h3>
            
            {/* Language Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Language
              </label>
              <div className="flex flex-wrap gap-2">
                {languages.map(lang => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedLanguage === lang
                        ? 'bg-primary-gold text-white'
                        : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedCategory === cat
                        ? 'bg-primary-gold text-white'
                        : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Showing {filteredHymns.length} {filteredHymns.length === 1 ? 'hymn' : 'hymns'}
        </div>

        {/* Hymns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filteredHymns.map(hymn => (
            <HymnCard key={hymn.number} hymn={hymn} />
          ))}
        </div>

        {filteredHymns.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No hymns found. Try adjusting your filters.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
