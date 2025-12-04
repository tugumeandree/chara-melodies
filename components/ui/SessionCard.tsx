'use client';

import Link from 'next/link';
import { Session } from '@/types';
import { Music, Calendar, MoreVertical, Trash2, Edit2 } from 'lucide-react';
import { useState } from 'react';

interface SessionCardProps {
  session: Session;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
}

export function SessionCard({ session, onDelete, onEdit }: SessionCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="card p-5 relative">
      <Link href={`/sessions/${session.id}`}>
        <div className="cursor-pointer">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary-gold-light dark:bg-primary-gold-dark rounded-lg">
                <Music className="w-5 h-5 text-primary-gold" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-gold transition-colors">
                  {session.name}
                </h3>
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(session.createdAt)}</span>
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                setShowMenu(!showMenu);
              }}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
              aria-label="Session options"
            >
              <MoreVertical className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {session.hymnNumbers.length} {session.hymnNumbers.length === 1 ? 'hymn' : 'hymns'}
            </span>
            {session.hymnNumbers.length > 0 && (
              <div className="flex gap-1">
                {session.hymnNumbers.slice(0, 5).map((num, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded"
                  >
                    #{num}
                  </span>
                ))}
                {session.hymnNumbers.length > 5 && (
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                    +{session.hymnNumbers.length - 5}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </Link>

      {/* Menu */}
      {showMenu && (
        <div className="absolute right-4 top-14 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-10 min-w-[150px]">
          <button
            onClick={(e) => {
              e.preventDefault();
              onEdit?.(session.id);
              setShowMenu(false);
            }}
            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
          >
            <Edit2 className="w-4 h-4" />
            Edit
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              onDelete?.(session.id);
              setShowMenu(false);
            }}
            className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
