export interface GameCategory {
  name: string;
  theme: string;
  color: 'yellow' | 'green' | 'blue' | 'purple';
  terms: string[];
}

export interface DailyPuzzle {
  id: number;
  date: string;
  subject: 'apush' | 'apworld';
  period: string;
  categories: GameCategory[];
}

export interface GameState {
  selected: string[];
  solved: GameCategory[];
  mistakes: number;
  maxMistakes: number;
  timeRemaining: number;
  isComplete: boolean;
  isPerfect: boolean;
}

export interface PrestigeScore {
  base: number;
  perfectBonus: number;
  speedBonus: number;
  streakMultiplier: number;
  total: number;
}

export const SAMPLE_PUZZLES: Record<string, DailyPuzzle> = {
  apush: {
    id: 42,
    date: new Date().toISOString().split('T')[0],
    subject: 'apush',
    period: 'Period 4: 1800-1848',
    categories: [
      {
        name: 'Economic Innovations',
        theme: 'WXT',
        color: 'yellow',
        terms: ['Cotton Gin', 'Steamboats', 'Lowell System', 'Mechanical Reaper'],
      },
      {
        name: 'Political Crises',
        theme: 'PCE',
        color: 'green',
        terms: ['Nullification Crisis', 'Corrupt Bargain', 'Indian Removal Act', 'Embargo Act'],
      },
      {
        name: "Henry Clay's American System",
        theme: 'PCE/WXT',
        color: 'blue',
        terms: ['Second Bank of the US', 'Protective Tariff', 'Erie Canal', 'American System'],
      },
      {
        name: 'Technological Shifts',
        theme: 'TEC',
        color: 'purple',
        terms: ['Steam Engine', 'Interchangeable Parts', 'Market Revolution', 'Monroe Doctrine'],
      },
    ],
  },
  apworld: {
    id: 42,
    date: new Date().toISOString().split('T')[0],
    subject: 'apworld',
    period: 'Period 3: 1450-1750',
    categories: [
      {
        name: 'Maritime Empires',
        theme: 'SIO',
        color: 'yellow',
        terms: ['Portuguese Trading Posts', 'Dutch East India Co.', 'Spanish Galleons', 'British Royal Navy'],
      },
      {
        name: 'Columbian Exchange',
        theme: 'ENV',
        color: 'green',
        terms: ['Smallpox', 'Potatoes', 'Silver Trade', 'Sugar Plantations'],
      },
      {
        name: 'Gunpowder Empires',
        theme: 'STA',
        color: 'blue',
        terms: ['Ottoman Empire', 'Safavid Dynasty', 'Mughal Empire', 'Ming Dynasty'],
      },
      {
        name: 'Forced Labor Systems',
        theme: 'SOC',
        color: 'purple',
        terms: ['Encomienda', 'Chattel Slavery', 'Indentured Servitude', 'Mita System'],
      },
    ],
  },
};
