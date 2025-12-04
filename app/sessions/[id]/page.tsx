'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Plus, GripVertical, Trash2, Download } from 'lucide-react';
import { useSessions } from '@/hooks/useSessions';
import { getHymnByNumber, hymnsDatabase } from '@/data/hymns';
import { PresentationMode } from '@/components/ui/PresentationMode';

export default function SessionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { sessions, addHymnToSession, removeHymnFromSession, reorderHymns } = useSessions();
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [hymnNumber, setHymnNumber] = useState('');

  const session = sessions.find(s => s.id === id);

  if (!session) {
    return (
      <div className="min-h-screen bg-worship-pattern flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Session Not Found
          </h1>
          <Link href="/sessions">
            <button className="btn-primary">Back to Sessions</button>
          </Link>
        </div>
      </div>
    );
  }

  const sessionHymns = session.hymnNumbers
    .map(num => getHymnByNumber(num))
    .filter(hymn => hymn !== undefined);

  const handleAddHymn = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(hymnNumber);
    if (num && getHymnByNumber(num) && !session.hymnNumbers.includes(num)) {
      addHymnToSession(session.id, num);
      setHymnNumber('');
      setShowAddDialog(false);
    }
  };

  const handleExportPDF = () => {
    // Simple text export for now - could be enhanced with a PDF library
    const content = `
${session.name}
Created: ${new Date(session.createdAt).toLocaleDateString()}

Hymns:
${sessionHymns.map((hymn, index) => `${index + 1}. #${hymn!.number} - ${hymn!.title}`).join('\n')}
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${session.name}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-worship-pattern">
      {/* Header */}
      <header className="bg-white dark:bg-background-dark-secondary shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/sessions">
                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {session.name}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {sessionHymns.length} {sessionHymns.length === 1 ? 'hymn' : 'hymns'}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <PresentationMode hymns={sessionHymns} sessionName={session.name} />
              <button
                onClick={handleExportPDF}
                className="btn-secondary flex items-center gap-2"
                disabled={sessionHymns.length === 0}
              >
                <Download className="w-5 h-5" />
                <span className="hidden sm:inline">Export</span>
              </button>
              <button
                onClick={() => setShowAddDialog(true)}
                className="btn-primary flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                <span className="hidden sm:inline">Add Hymn</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {sessionHymns.length === 0 ? (
          <div className="text-center py-16 card">
            <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              No hymns in this session
            </h2>
            <p className="text-gray-500 dark:text-gray-500 mb-6">
              Add hymns to build your worship setlist
            </p>
            <button onClick={() => setShowAddDialog(true)} className="btn-primary">
              Add First Hymn
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {sessionHymns.map((hymn, index) => hymn && (
              <div
                key={hymn.number}
                className="card p-4 flex items-center gap-4 group"
              >
                <div className="cursor-move text-gray-400">
                  <GripVertical className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <Link href={`/hymns/${hymn.number}`}>
                    <div className="flex items-baseline gap-3 cursor-pointer group-hover:text-primary-gold transition-colors">
                      <span className="text-xl font-bold text-primary-gold">
                        {index + 1}.
                      </span>
                      <span className="text-lg font-bold text-gray-400">
                        #{hymn.number}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {hymn.title}
                      </h3>
                    </div>
                    <div className="flex gap-2 mt-2 ml-12">
                      <span className="text-xs px-2 py-1 rounded-full bg-primary-gold-light dark:bg-primary-gold-dark">
                        {hymn.language}
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700">
                        {hymn.category}
                      </span>
                    </div>
                  </Link>
                </div>
                <button
                  onClick={() => removeHymnFromSession(session.id, hymn.number)}
                  className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Remove hymn"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Add Hymn Dialog */}
      {showAddDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-background-dark-secondary rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Add Hymn to Session
            </h2>
            <form onSubmit={handleAddHymn} className="mb-4">
              <input
                type="number"
                value={hymnNumber}
                onChange={(e) => setHymnNumber(e.target.value)}
                placeholder="Enter hymn number"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-gold mb-3"
                autoFocus
              />
              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddDialog(false);
                    setHymnNumber('');
                  }}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Add
                </button>
              </div>
            </form>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Or select from list:
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {hymnsDatabase
                  .filter(h => !session.hymnNumbers.includes(h.number))
                  .map(hymn => (
                    <button
                      key={hymn.number}
                      onClick={() => {
                        addHymnToSession(session.id, hymn.number);
                        setShowAddDialog(false);
                      }}
                      className="w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-primary-gold">
                          #{hymn.number}
                        </span>
                        <span className="text-gray-900 dark:text-gray-100">
                          {hymn.title}
                        </span>
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
