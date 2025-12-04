'use client';

import { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { hymnsDatabase, searchHymns } from '@/data/hymns';
import { HymnCard } from '@/components/ui/HymnCard';
import { SearchBar } from '@/components/ui/SearchBar';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(hymnsDatabase);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim() === '') {
      setResults(hymnsDatabase);
    } else {
      setResults(searchHymns(searchQuery));
    }
  };

  return (
    <div className="min-h-screen bg-worship-pattern">
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        {/* Page Header */}
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
          Search Hymns
        </h1>

        {/* Search Bar */}
        <div className="mb-6 sm:mb-8">
          <SearchBar 
            onSearch={handleSearch}
            placeholder="Search by title, lyrics, theme, or language..."
          />
        </div>

        {/* Search Icon when no query */}
        {query === '' && (
          <div className="text-center py-12 sm:py-16">
            <SearchIcon className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 dark:text-gray-600 mx-auto mb-3 sm:mb-4" />
            <h2 className="text-lg sm:text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Search for hymns
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500 px-4">
              Enter a title, lyrics, theme, or language to find hymns
            </p>
          </div>
        )}

        {/* Results */}
        {query !== '' && (
          <>
            <div className="mb-4 text-gray-600 dark:text-gray-400">
              Found {results.length} {results.length === 1 ? 'hymn' : 'hymns'} for "{query}"
            </div>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map(hymn => (
                  <HymnCard key={hymn.number} hymn={hymn} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No hymns found for "{query}". Try a different search term.
                </p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
