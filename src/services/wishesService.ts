export interface Wish {
  id: string;
  name: string;
  message: string;
  category: 'all' | 'family' | 'friends';
  createdAt: string;
  likes?: number;
}

const STORAGE_KEY = 'laranya_pareenn_wishes';
const LOVE_COUNT_KEY = 'laranya_pareenn_love_count';

// Initial heart-warming wishes from loved ones
const INITIAL_WISHES: Wish[] = [
  {
    id: 'wish-1',
    name: 'Yashwanth & Friends',
    message: 'Wishing you both a lifetime filled with endless love, laughter, and magical moments! May your journey together be as beautiful as your hearts.',
    category: 'friends',
    createdAt: '2026-09-12T18:00:00.000Z',
    likes: 42,
  },
  {
    id: 'wish-2',
    name: 'Korapatti Family',
    message: 'Welcome to forever! Seeing you two together brings so much joy to our hearts. God bless this beautiful union always.',
    category: 'family',
    createdAt: '2026-09-12T19:30:00.000Z',
    likes: 38,
  },
  {
    id: 'wish-3',
    name: 'Ananya & Rohan',
    message: 'To the most gorgeous couple — Laranya & Pareenn! May your home always be full of warm hugs, happy tears, and endless celebrations.',
    category: 'friends',
    createdAt: '2026-09-12T20:15:00.000Z',
    likes: 29,
  },
  {
    id: 'wish-4',
    name: 'Uncle Suresh & Family',
    message: 'Two wonderful souls coming together to write a lifelong fairytale. Wishing you divine peace, happiness, and prosperity in every chapter ahead.',
    category: 'family',
    createdAt: '2026-09-13T02:10:00.000Z',
    likes: 31,
  },
  {
    id: 'wish-5',
    name: 'Kavya & Vikram',
    message: 'Here is to a lifetime of late-night chats, spontaneous adventures, and loving each other more with every passing sunrise!',
    category: 'friends',
    createdAt: '2026-09-13T04:45:00.000Z',
    likes: 24,
  },
];

export const wishesService = {
  getWishes(): Wish[] {
    if (typeof window === 'undefined') return INITIAL_WISHES;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_WISHES));
        return INITIAL_WISHES;
      }
      return JSON.parse(stored);
    } catch {
      return INITIAL_WISHES;
    }
  },

  addWish(name: string, message: string, category: 'all' | 'family' | 'friends' = 'friends'): Wish {
    const newWish: Wish = {
      id: 'wish-' + Date.now(),
      name: name.trim(),
      message: message.trim(),
      category,
      createdAt: new Date().toISOString(),
      likes: 1,
    };

    const currentWishes = this.getWishes();
    const updated = [newWish, ...currentWishes];

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save wish to localStorage', e);
      }
    }

    return newWish;
  },

  getLoveCount(): number {
    if (typeof window === 'undefined') return 348;
    try {
      const count = localStorage.getItem(LOVE_COUNT_KEY);
      return count ? parseInt(count, 10) : 348;
    } catch {
      return 348;
    }
  },

  incrementLoveCount(): number {
    const current = this.getLoveCount();
    const updated = current + 1;
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(LOVE_COUNT_KEY, updated.toString());
      } catch (e) {
        console.error('Failed to save love count', e);
      }
    }
    return updated;
  }
};
