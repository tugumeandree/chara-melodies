'use client';

import { useState } from 'react';
import { Plus, ListMusic } from 'lucide-react';
import { useSessions } from '@/hooks/useSessions';
import { SessionCard } from '@/components/ui/SessionCard';

export default function SessionsPage() {
  const { sessions, createSession, deleteSession } = useSessions();
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [newSessionName, setNewSessionName] = useState('');

  const handleCreateSession = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSessionName.trim()) {
      createSession(newSessionName);
      setNewSessionName('');
      setShowCreateDialog(false);
    }
  };

  return (
    <div className="min-h-screen bg-worship-pattern">
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Sessions & Setlists
          </h1>
          <button
            onClick={() => setShowCreateDialog(true)}
            className="btn-primary flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base px-3 sm:px-4 py-2"
          >
            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">New Session</span>
            <span className="sm:hidden">New</span>
          </button>
        </div>

        {sessions.length === 0 ? (
          <div className="text-center py-12 sm:py-16">
            <ListMusic className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 dark:text-gray-600 mx-auto mb-3 sm:mb-4" />
            <h2 className="text-lg sm:text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              No sessions yet
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500 mb-4 sm:mb-6 px-4">
              Create worship sessions to organize hymns for services
            </p>
            <button
              onClick={() => setShowCreateDialog(true)}
              className="btn-primary"
            >
              Create Your First Session
            </button>
          </div>
        ) : (
          <>
            <div className="mb-4 text-gray-600 dark:text-gray-400">
              {sessions.length} {sessions.length === 1 ? 'session' : 'sessions'}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sessions.map(session => (
                <SessionCard
                  key={session.id}
                  session={session}
                  onDelete={deleteSession}
                />
              ))}
            </div>
          </>
        )}
      </main>

      {/* Create Session Dialog */}
      {showCreateDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-background-dark-secondary rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Create New Session
            </h2>
            <form onSubmit={handleCreateSession}>
              <input
                type="text"
                value={newSessionName}
                onChange={(e) => setNewSessionName(e.target.value)}
                placeholder="Session name (e.g., Sunday Service)"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-gold mb-4"
                autoFocus
              />
              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateDialog(false);
                    setNewSessionName('');
                  }}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={!newSessionName.trim()}
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
