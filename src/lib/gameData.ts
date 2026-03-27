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

// All puzzles pool — daily rotation picks based on day-of-year
const APUSH_PUZZLES: Omit<DailyPuzzle, 'id' | 'date'>[] = [
  {
    subject: 'apush',
    period: 'Period 4: 1800-1848',
    categories: [
      { name: 'Economic Innovations', theme: 'WXT', color: 'yellow', terms: ['Cotton Gin', 'Steamboats', 'Lowell System', 'Mechanical Reaper'] },
      { name: 'Political Crises', theme: 'PCE', color: 'green', terms: ['Nullification Crisis', 'Corrupt Bargain', 'Indian Removal Act', 'Embargo Act'] },
      { name: "Henry Clay's American System", theme: 'PCE/WXT', color: 'blue', terms: ['Second Bank of the US', 'Protective Tariff', 'Erie Canal', 'American System'] },
      { name: 'Technological Shifts', theme: 'TEC', color: 'purple', terms: ['Steam Engine', 'Interchangeable Parts', 'Market Revolution', 'Monroe Doctrine'] },
    ],
  },
  {
    subject: 'apush',
    period: 'Period 3: 1754-1800',
    categories: [
      { name: 'Revolutionary Ideals', theme: 'NAT', color: 'yellow', terms: ['Common Sense', 'Declaration of Independence', 'Natural Rights', 'Social Contract'] },
      { name: 'Key Battles', theme: 'WOR', color: 'green', terms: ['Lexington and Concord', 'Saratoga', 'Yorktown', 'Bunker Hill'] },
      { name: 'Constitutional Debates', theme: 'PCE', color: 'blue', terms: ['Federalist Papers', 'Great Compromise', 'Three-Fifths Compromise', 'Bill of Rights'] },
      { name: 'Colonial Resistance', theme: 'SOC', color: 'purple', terms: ['Boston Tea Party', 'Stamp Act Congress', 'Sons of Liberty', 'Committees of Correspondence'] },
    ],
  },
  {
    subject: 'apush',
    period: 'Period 5: 1844-1877',
    categories: [
      { name: 'Causes of Civil War', theme: 'PCE', color: 'yellow', terms: ['Kansas-Nebraska Act', 'Dred Scott Decision', 'Bleeding Kansas', 'John Brown'] },
      { name: 'Reconstruction Policies', theme: 'PCE', color: 'green', terms: ['Freedmens Bureau', 'Radical Republicans', 'Impeachment of Johnson', 'Military Reconstruction'] },
      { name: 'Constitutional Amendments', theme: 'NAT', color: 'blue', terms: ['13th Amendment', '14th Amendment', '15th Amendment', 'Civil Rights Act 1866'] },
      { name: 'Key Figures', theme: 'SOC', color: 'purple', terms: ['Abraham Lincoln', 'Frederick Douglass', 'Harriet Tubman', 'Ulysses S. Grant'] },
    ],
  },
  {
    subject: 'apush',
    period: 'Period 6: 1865-1898',
    categories: [
      { name: 'Captains of Industry', theme: 'WXT', color: 'yellow', terms: ['Andrew Carnegie', 'John D. Rockefeller', 'J.P. Morgan', 'Cornelius Vanderbilt'] },
      { name: 'Labor Movement', theme: 'SOC', color: 'green', terms: ['Knights of Labor', 'Haymarket Affair', 'Pullman Strike', 'American Federation of Labor'] },
      { name: 'Immigration Waves', theme: 'MIG', color: 'blue', terms: ['Ellis Island', 'Chinese Exclusion Act', 'Nativism', 'Settlement Houses'] },
      { name: 'Western Expansion', theme: 'ENV', color: 'purple', terms: ['Homestead Act', 'Transcontinental Railroad', 'Wounded Knee', 'Dawes Act'] },
    ],
  },
  {
    subject: 'apush',
    period: 'Period 7: 1890-1945',
    categories: [
      { name: 'Progressive Reforms', theme: 'PCE', color: 'yellow', terms: ['Trust Busting', 'Pure Food and Drug Act', 'Muckrakers', '19th Amendment'] },
      { name: 'WWI and Aftermath', theme: 'WOR', color: 'green', terms: ['Lusitania', 'Zimmermann Telegram', 'Treaty of Versailles', 'League of Nations'] },
      { name: 'New Deal Programs', theme: 'WXT', color: 'blue', terms: ['Social Security Act', 'CCC', 'TVA', 'Wagner Act'] },
      { name: 'Roaring Twenties', theme: 'SOC', color: 'purple', terms: ['Harlem Renaissance', 'Prohibition', 'Flappers', 'Great Migration'] },
    ],
  },
  {
    subject: 'apush',
    period: 'Period 2: 1607-1754',
    categories: [
      { name: 'Colonial Regions', theme: 'MIG', color: 'yellow', terms: ['Jamestown', 'Plymouth', 'Pennsylvania', 'Georgia'] },
      { name: 'Religious Movements', theme: 'SOC', color: 'green', terms: ['Puritans', 'Great Awakening', 'Roger Williams', 'Anne Hutchinson'] },
      { name: 'Economic Systems', theme: 'WXT', color: 'blue', terms: ['Mercantilism', 'Triangular Trade', 'Indentured Servitude', 'Tobacco Economy'] },
      { name: 'Colonial Conflicts', theme: 'WOR', color: 'purple', terms: ['King Philips War', 'Bacons Rebellion', 'Stono Rebellion', 'Salem Witch Trials'] },
    ],
  },
  {
    subject: 'apush',
    period: 'Period 8: 1945-1980',
    categories: [
      { name: 'Cold War Policies', theme: 'WOR', color: 'yellow', terms: ['Containment', 'Marshall Plan', 'NATO', 'Truman Doctrine'] },
      { name: 'Civil Rights Leaders', theme: 'SOC', color: 'green', terms: ['MLK Jr.', 'Rosa Parks', 'Malcolm X', 'Thurgood Marshall'] },
      { name: 'Vietnam Era', theme: 'PCE', color: 'blue', terms: ['Gulf of Tonkin', 'Tet Offensive', 'Kent State', 'War Powers Act'] },
      { name: 'Great Society', theme: 'WXT', color: 'purple', terms: ['Medicare', 'Medicaid', 'Head Start', 'Civil Rights Act 1964'] },
    ],
  },
];

const APWORLD_PUZZLES: Omit<DailyPuzzle, 'id' | 'date'>[] = [
  {
    subject: 'apworld',
    period: 'Unit 3: 1450-1750',
    categories: [
      { name: 'Maritime Empires', theme: 'SIO', color: 'yellow', terms: ['Portuguese Trading Posts', 'Dutch East India Co.', 'Spanish Galleons', 'British Royal Navy'] },
      { name: 'Columbian Exchange', theme: 'ENV', color: 'green', terms: ['Smallpox', 'Potatoes', 'Silver Trade', 'Sugar Plantations'] },
      { name: 'Gunpowder Empires', theme: 'STA', color: 'blue', terms: ['Ottoman Empire', 'Safavid Dynasty', 'Mughal Empire', 'Ming Dynasty'] },
      { name: 'Forced Labor Systems', theme: 'SOC', color: 'purple', terms: ['Encomienda', 'Chattel Slavery', 'Indentured Servitude', 'Mita System'] },
    ],
  },
  {
    subject: 'apworld',
    period: 'Unit 1: 1200-1450',
    categories: [
      { name: 'Major Empires', theme: 'STA', color: 'yellow', terms: ['Mongol Empire', 'Song Dynasty', 'Delhi Sultanate', 'Mali Empire'] },
      { name: 'Trade Networks', theme: 'SIO', color: 'green', terms: ['Silk Roads', 'Indian Ocean Trade', 'Trans-Saharan Trade', 'Hanseatic League'] },
      { name: 'Religious Spread', theme: 'SOC', color: 'blue', terms: ['Spread of Islam', 'Buddhist Monasteries', 'Christian Crusades', 'Bhakti Movement'] },
      { name: 'Innovations', theme: 'ENV', color: 'purple', terms: ['Printing Press', 'Gunpowder', 'Compass', 'Champa Rice'] },
    ],
  },
  {
    subject: 'apworld',
    period: 'Unit 5: 1750-1900',
    categories: [
      { name: 'Revolutions', theme: 'STA', color: 'yellow', terms: ['French Revolution', 'Haitian Revolution', 'Latin American Revolutions', 'Industrial Revolution'] },
      { name: 'Imperialism', theme: 'SIO', color: 'green', terms: ['Scramble for Africa', 'Opium Wars', 'Sepoy Mutiny', 'Berlin Conference'] },
      { name: 'Nationalism', theme: 'SOC', color: 'blue', terms: ['Unification of Italy', 'Unification of Germany', 'Meiji Restoration', 'Zionism'] },
      { name: 'Enlightenment Ideas', theme: 'STA', color: 'purple', terms: ['Social Contract', 'Natural Rights', 'Separation of Powers', 'Popular Sovereignty'] },
    ],
  },
  {
    subject: 'apworld',
    period: 'Unit 7: 1900-Present',
    categories: [
      { name: 'World Wars', theme: 'STA', color: 'yellow', terms: ['Treaty of Versailles', 'League of Nations', 'D-Day', 'Atomic Bomb'] },
      { name: 'Decolonization', theme: 'SOC', color: 'green', terms: ['Indian Independence', 'Algerian War', 'Vietnam Independence', 'Apartheid'] },
      { name: 'Cold War Conflicts', theme: 'SIO', color: 'blue', terms: ['Korean War', 'Cuban Missile Crisis', 'Berlin Wall', 'Soviet-Afghan War'] },
      { name: 'Communist Revolutions', theme: 'STA', color: 'purple', terms: ['Russian Revolution', 'Chinese Communist Revolution', 'Cuban Revolution', 'Khmer Rouge'] },
    ],
  },
  {
    subject: 'apworld',
    period: 'Unit 2: 1200-1450',
    categories: [
      { name: 'Mongol Impacts', theme: 'STA', color: 'yellow', terms: ['Pax Mongolica', 'Khanates', 'Genghis Khan', 'Yuan Dynasty'] },
      { name: 'African Kingdoms', theme: 'SIO', color: 'green', terms: ['Great Zimbabwe', 'Swahili City-States', 'Kingdom of Kongo', 'Mansa Musa'] },
      { name: 'Cultural Exchange', theme: 'SOC', color: 'blue', terms: ['Ibn Battuta', 'Marco Polo', 'Zheng He', 'Mansa Musas Hajj'] },
      { name: 'Disease and Environment', theme: 'ENV', color: 'purple', terms: ['Black Death', 'Little Ice Age', 'Deforestation', 'Famine'] },
    ],
  },
];

function getDayOfYear(): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export function getDailyPuzzle(subject: 'apush' | 'apworld'): DailyPuzzle {
  const pool = subject === 'apush' ? APUSH_PUZZLES : APWORLD_PUZZLES;
  const dayOfYear = getDayOfYear();
  const index = dayOfYear % pool.length;
  const puzzle = pool[index];
  return {
    ...puzzle,
    id: dayOfYear,
    date: new Date().toISOString().split('T')[0],
  };
}

// Keep for backward compat
export const SAMPLE_PUZZLES: Record<string, DailyPuzzle> = {
  apush: getDailyPuzzle('apush'),
  apworld: getDailyPuzzle('apworld'),
};
