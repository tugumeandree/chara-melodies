'use client';

import { useLocalStorage } from './useLocalStorage';
import { Session } from '@/types';

export function useSessions() {
  const [sessions, setSessions, isLoading] = useLocalStorage<Session[]>('hymns-sessions', []);

  const createSession = (name: string) => {
    const newSession: Session = {
      id: Date.now().toString(),
      name,
      hymnNumbers: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    setSessions((prev) => [...prev, newSession]);
    return newSession;
  };

  const updateSession = (id: string, updates: Partial<Session>) => {
    setSessions((prev) =>
      prev.map((session) =>
        session.id === id
          ? { ...session, ...updates, updatedAt: new Date() }
          : session
      )
    );
  };

  const deleteSession = (id: string) => {
    setSessions((prev) => prev.filter((session) => session.id !== id));
  };

  const addHymnToSession = (sessionId: string, hymnNumber: number) => {
    setSessions((prev) =>
      prev.map((session) =>
        session.id === sessionId
          ? {
              ...session,
              hymnNumbers: [...session.hymnNumbers, hymnNumber],
              updatedAt: new Date()
            }
          : session
      )
    );
  };

  const removeHymnFromSession = (sessionId: string, hymnNumber: number) => {
    setSessions((prev) =>
      prev.map((session) =>
        session.id === sessionId
          ? {
              ...session,
              hymnNumbers: session.hymnNumbers.filter((num) => num !== hymnNumber),
              updatedAt: new Date()
            }
          : session
      )
    );
  };

  const reorderHymns = (sessionId: string, hymnNumbers: number[]) => {
    setSessions((prev) =>
      prev.map((session) =>
        session.id === sessionId
          ? { ...session, hymnNumbers, updatedAt: new Date() }
          : session
      )
    );
  };

  return {
    sessions,
    createSession,
    updateSession,
    deleteSession,
    addHymnToSession,
    removeHymnFromSession,
    reorderHymns,
    isLoading
  };
}
