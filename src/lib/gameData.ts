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

// ────────────────────────────────────────────────────────────
//  APUSH PUZZLES — Using bolded textbook terms from
//  The American Pageant 17e & AP curriculum
// ────────────────────────────────────────────────────────────
const APUSH_PUZZLES: Omit<DailyPuzzle, 'id' | 'date'>[] = [

  // ══════════ PERIOD 1: 1491-1607 ══════════

  {
    subject: 'apush', period: 'Period 1: 1491-1607',
    categories: [
      { name: 'Columbian Exchange', theme: 'ENV', color: 'yellow', terms: ['Smallpox', 'Horses', 'Corn (Maize)', 'Potatoes'] },
      { name: 'Spanish Colonization', theme: 'WOR', color: 'green', terms: ['Encomienda', 'Hernan Cortes', 'Treaty of Tordesillas', 'Conquistadors'] },
      { name: 'Native American Societies', theme: 'SOC', color: 'blue', terms: ['Iroquois Confederacy', 'Pueblo Peoples', 'Cahokia', 'Three Sisters'] },
      { name: 'European Motives', theme: 'WXT', color: 'purple', terms: ['God', 'Gold', 'Glory', 'Mercantilism'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 1: 1491-1607',
    categories: [
      { name: 'Spanish Conquests', theme: 'WOR', color: 'yellow', terms: ['Tenochtitlan', 'Francisco Pizarro', 'Aztec Empire', 'Inca Empire'] },
      { name: 'Early Exploration', theme: 'MIG', color: 'green', terms: ['Christopher Columbus', 'Vasco da Gama', 'Ferdinand Magellan', 'Caravel'] },
      { name: 'Impact on Natives', theme: 'SOC', color: 'blue', terms: ['Disease Epidemics', 'Population Decline', 'Mestizos', 'Mission System'] },
      { name: 'French Exploration', theme: 'MIG', color: 'purple', terms: ['Jacques Cartier', 'Samuel de Champlain', 'Fur Trade', 'St. Lawrence River'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 1: 1491-1607',
    categories: [
      { name: 'Spanish Colonial Society', theme: 'SOC', color: 'yellow', terms: ['Casta System', 'Encomienda', 'Haciendas', 'Catholic Missions'] },
      { name: 'English Ambitions', theme: 'WOR', color: 'green', terms: ['Roanoke', 'Sir Walter Raleigh', 'Francis Drake', 'Spanish Armada'] },
      { name: 'African Slave Trade Begins', theme: 'WXT', color: 'blue', terms: ['Middle Passage', 'Atlantic Slave Trade', 'Sugar Plantations', 'Triangular Trade'] },
      { name: 'Environmental Change', theme: 'ENV', color: 'purple', terms: ['Deforestation', 'New Crops', 'Livestock', 'Bering Land Bridge'] },
    ],
  },

  // ══════════ PERIOD 2: 1607-1754 ══════════

  {
    subject: 'apush', period: 'Period 2: 1607-1754',
    categories: [
      { name: 'Colonial Settlements', theme: 'MIG', color: 'yellow', terms: ['Jamestown', 'Plymouth', 'Massachusetts Bay', 'Pennsylvania'] },
      { name: 'Religious Movements', theme: 'SOC', color: 'green', terms: ['Puritans', 'Great Awakening', 'Roger Williams', 'Anne Hutchinson'] },
      { name: 'Colonial Economy', theme: 'WXT', color: 'blue', terms: ['Tobacco', 'Mercantilism', 'Triangular Trade', 'Indentured Servants'] },
      { name: 'Colonial Conflicts', theme: 'WOR', color: 'purple', terms: ['Bacons Rebellion', 'King Philips War', 'Salem Witch Trials', 'Stono Rebellion'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 2: 1607-1754',
    categories: [
      { name: 'Chesapeake Colonies', theme: 'SOC', color: 'yellow', terms: ['House of Burgesses', 'Headright System', 'John Smith', 'Tobacco Economy'] },
      { name: 'New England Way', theme: 'NAT', color: 'green', terms: ['Mayflower Compact', 'Town Meetings', 'John Winthrop', 'City Upon a Hill'] },
      { name: 'Middle Colonies', theme: 'MIG', color: 'blue', terms: ['William Penn', 'Quakers', 'Religious Tolerance', 'Breadbasket'] },
      { name: 'Slavery Develops', theme: 'SOC', color: 'purple', terms: ['Slave Codes', 'Plantation System', 'Middle Passage', 'Chattel Slavery'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 2: 1607-1754',
    categories: [
      { name: 'Colonial Government', theme: 'PCE', color: 'yellow', terms: ['Salutary Neglect', 'Navigation Acts', 'Royal Colonies', 'Colonial Assemblies'] },
      { name: 'Enlightenment Ideas', theme: 'NAT', color: 'green', terms: ['John Locke', 'Natural Rights', 'Reason', 'Benjamin Franklin'] },
      { name: 'French and Indian War', theme: 'WOR', color: 'blue', terms: ['Albany Plan of Union', 'Ohio River Valley', 'Treaty of Paris 1763', 'George Washington'] },
      { name: 'Southern Economy', theme: 'WXT', color: 'purple', terms: ['Rice', 'Indigo', 'Slave Labor', 'Plantation Aristocracy'] },
    ],
  },

  // ══════════ PERIOD 3: 1754-1800 ══════════

  {
    subject: 'apush', period: 'Period 3: 1754-1800',
    categories: [
      { name: 'Revolutionary Ideas', theme: 'NAT', color: 'yellow', terms: ['Common Sense', 'Declaration of Independence', 'Natural Rights', 'Social Contract'] },
      { name: 'Key Battles', theme: 'WOR', color: 'green', terms: ['Lexington and Concord', 'Saratoga', 'Yorktown', 'Bunker Hill'] },
      { name: 'Constitutional Debates', theme: 'PCE', color: 'blue', terms: ['Federalist Papers', 'Great Compromise', 'Three-Fifths Compromise', 'Bill of Rights'] },
      { name: 'Colonial Resistance', theme: 'SOC', color: 'purple', terms: ['Boston Tea Party', 'Stamp Act', 'Sons of Liberty', 'No Taxation Without Representation'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 3: 1754-1800',
    categories: [
      { name: 'British Tax Laws', theme: 'WXT', color: 'yellow', terms: ['Stamp Act', 'Townshend Acts', 'Sugar Act', 'Tea Act'] },
      { name: 'Founding Fathers', theme: 'NAT', color: 'green', terms: ['George Washington', 'Thomas Jefferson', 'John Adams', 'Benjamin Franklin'] },
      { name: 'Weak First Government', theme: 'PCE', color: 'blue', terms: ['Articles of Confederation', 'Shays Rebellion', 'Northwest Ordinance', 'No Taxing Power'] },
      { name: 'Foreign Help', theme: 'WOR', color: 'purple', terms: ['France Alliance', 'Treaty of Paris 1783', 'Marquis de Lafayette', 'Baron von Steuben'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 3: 1754-1800',
    categories: [
      { name: 'Early Republic Problems', theme: 'PCE', color: 'yellow', terms: ['Whiskey Rebellion', 'XYZ Affair', 'Alien and Sedition Acts', 'Neutrality Proclamation'] },
      { name: 'Hamiltons Plan', theme: 'WXT', color: 'green', terms: ['National Bank', 'Assumption of Debt', 'Protective Tariff', 'Report on Manufactures'] },
      { name: 'First Political Parties', theme: 'PCE', color: 'blue', terms: ['Federalists', 'Democratic-Republicans', 'Election of 1800', 'Two-Party System'] },
      { name: 'Washingtons Legacy', theme: 'NAT', color: 'purple', terms: ['Farewell Address', 'Two-Term Precedent', 'Jays Treaty', 'Pinckneys Treaty'] },
    ],
  },

  // ══════════ PERIOD 4: 1800-1848 ══════════

  {
    subject: 'apush', period: 'Period 4: 1800-1848',
    categories: [
      { name: 'Market Revolution', theme: 'WXT', color: 'yellow', terms: ['Cotton Gin', 'Erie Canal', 'Lowell Mills', 'Steamboat'] },
      { name: 'Political Conflicts', theme: 'PCE', color: 'green', terms: ['Nullification Crisis', 'Indian Removal Act', 'Corrupt Bargain', 'Tariff of Abominations'] },
      { name: 'Expansion', theme: 'MIG', color: 'blue', terms: ['Louisiana Purchase', 'Lewis and Clark', 'Manifest Destiny', 'Missouri Compromise'] },
      { name: 'Key Court Cases', theme: 'PCE', color: 'purple', terms: ['Marbury v Madison', 'McCulloch v Maryland', 'Gibbons v Ogden', 'Worcester v Georgia'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 4: 1800-1848',
    categories: [
      { name: 'Jacksonian Democracy', theme: 'PCE', color: 'yellow', terms: ['Spoils System', 'Bank War', 'Kitchen Cabinet', 'Common Man'] },
      { name: 'Reform Movements', theme: 'SOC', color: 'green', terms: ['Seneca Falls', 'Temperance', 'Abolitionism', 'Second Great Awakening'] },
      { name: 'War of 1812', theme: 'WOR', color: 'blue', terms: ['Impressment', 'Battle of New Orleans', 'Hartford Convention', 'Treaty of Ghent'] },
      { name: 'Monroe Doctrine Era', theme: 'WOR', color: 'purple', terms: ['Monroe Doctrine', 'Era of Good Feelings', 'Adams-Onis Treaty', 'American System'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 4: 1800-1848',
    categories: [
      { name: 'Transportation Revolution', theme: 'WXT', color: 'yellow', terms: ['National Road', 'Canal System', 'Railroads', 'Clipper Ships'] },
      { name: 'Cultural Movements', theme: 'NAT', color: 'green', terms: ['Transcendentalism', 'Ralph Waldo Emerson', 'Henry David Thoreau', 'Hudson River School'] },
      { name: 'Sectional Tensions', theme: 'PCE', color: 'blue', terms: ['States Rights', 'Tariff Debate', 'Slave vs Free States', 'Wilmot Proviso'] },
      { name: 'Jeffersons Presidency', theme: 'PCE', color: 'purple', terms: ['Revolution of 1800', 'Louisiana Purchase', 'Embargo Act', 'Judiciary Act of 1801'] },
    ],
  },

  // ══════════ PERIOD 5: 1844-1877 ══════════

  {
    subject: 'apush', period: 'Period 5: 1844-1877',
    categories: [
      { name: 'Road to Civil War', theme: 'PCE', color: 'yellow', terms: ['Kansas-Nebraska Act', 'Dred Scott', 'Bleeding Kansas', 'John Brown'] },
      { name: 'Reconstruction', theme: 'PCE', color: 'green', terms: ['Freedmens Bureau', 'Radical Republicans', 'Impeachment of Johnson', 'Military Reconstruction'] },
      { name: 'New Amendments', theme: 'NAT', color: 'blue', terms: ['13th Amendment', '14th Amendment', '15th Amendment', 'Civil Rights Act 1866'] },
      { name: 'Key People', theme: 'SOC', color: 'purple', terms: ['Abraham Lincoln', 'Frederick Douglass', 'Harriet Tubman', 'Ulysses Grant'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 5: 1844-1877',
    categories: [
      { name: 'Compromise of 1850', theme: 'PCE', color: 'yellow', terms: ['Fugitive Slave Act', 'Popular Sovereignty', 'California Statehood', 'Henry Clay'] },
      { name: 'Major Battles', theme: 'WOR', color: 'green', terms: ['Gettysburg', 'Antietam', 'Vicksburg', 'Fort Sumter'] },
      { name: 'Wartime Actions', theme: 'PCE', color: 'blue', terms: ['Emancipation Proclamation', 'Draft', 'Homestead Act', 'Total War'] },
      { name: 'Abolitionist Movement', theme: 'SOC', color: 'purple', terms: ['William Lloyd Garrison', 'The Liberator', 'Uncle Toms Cabin', 'Underground Railroad'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 5: 1844-1877',
    categories: [
      { name: 'End of Reconstruction', theme: 'PCE', color: 'yellow', terms: ['Compromise of 1877', 'Jim Crow Laws', 'Sharecropping', 'Black Codes'] },
      { name: 'Mexican-American War', theme: 'WOR', color: 'green', terms: ['Treaty of Guadalupe Hidalgo', 'Mexican Cession', 'James K. Polk', 'Manifest Destiny'] },
      { name: 'Lincoln Presidency', theme: 'NAT', color: 'blue', terms: ['Gettysburg Address', 'Second Inaugural', '10% Plan', 'Assassination'] },
      { name: 'Southern Resistance', theme: 'SOC', color: 'purple', terms: ['KKK', 'Redeemers', 'Scalawags', 'Carpetbaggers'] },
    ],
  },

  // ══════════ PERIOD 6: 1865-1898 ══════════

  {
    subject: 'apush', period: 'Period 6: 1865-1898',
    categories: [
      { name: 'Big Business Leaders', theme: 'WXT', color: 'yellow', terms: ['Andrew Carnegie', 'John D. Rockefeller', 'J.P. Morgan', 'Cornelius Vanderbilt'] },
      { name: 'Labor Struggles', theme: 'SOC', color: 'green', terms: ['Knights of Labor', 'Haymarket Affair', 'Pullman Strike', 'AFL'] },
      { name: 'Immigration', theme: 'MIG', color: 'blue', terms: ['Ellis Island', 'Chinese Exclusion Act', 'Nativism', 'Settlement Houses'] },
      { name: 'Westward Expansion', theme: 'ENV', color: 'purple', terms: ['Transcontinental Railroad', 'Homestead Act', 'Wounded Knee', 'Dawes Act'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 6: 1865-1898',
    categories: [
      { name: 'Gilded Age Politics', theme: 'PCE', color: 'yellow', terms: ['Pendleton Act', 'Political Machines', 'Boss Tweed', 'Spoils System'] },
      { name: 'Wealth and Poverty', theme: 'SOC', color: 'green', terms: ['Gospel of Wealth', 'Social Darwinism', 'Jane Addams', 'How the Other Half Lives'] },
      { name: 'Populism', theme: 'PCE', color: 'blue', terms: ['Populist Party', 'William Jennings Bryan', 'Cross of Gold', 'Farmers Alliance'] },
      { name: 'Urbanization', theme: 'MIG', color: 'purple', terms: ['Tenements', 'Hull House', 'City Growth', 'Electric Streetcars'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 6: 1865-1898',
    categories: [
      { name: 'Industrial Technology', theme: 'WXT', color: 'yellow', terms: ['Telephone', 'Light Bulb', 'Bessemer Process', 'Assembly Line'] },
      { name: 'Native American Policy', theme: 'ENV', color: 'green', terms: ['Battle of Little Bighorn', 'Reservation System', 'Ghost Dance', 'Dawes Act'] },
      { name: 'Business Practices', theme: 'WXT', color: 'blue', terms: ['Trusts', 'Monopolies', 'Vertical Integration', 'Horizontal Integration'] },
      { name: 'Spanish-American War', theme: 'WOR', color: 'purple', terms: ['USS Maine', 'Yellow Journalism', 'Rough Riders', 'Philippine Annexation'] },
    ],
  },

  // ══════════ PERIOD 7: 1890-1945 ══════════

  {
    subject: 'apush', period: 'Period 7: 1890-1945',
    categories: [
      { name: 'Progressive Reforms', theme: 'PCE', color: 'yellow', terms: ['Trust Busting', 'Pure Food and Drug Act', 'Muckrakers', '19th Amendment'] },
      { name: 'WWI Causes', theme: 'WOR', color: 'green', terms: ['Lusitania', 'Zimmermann Note', 'U-Boats', 'Unrestricted Submarine Warfare'] },
      { name: 'New Deal', theme: 'WXT', color: 'blue', terms: ['Social Security', 'CCC', 'TVA', 'Wagner Act'] },
      { name: 'Roaring Twenties', theme: 'SOC', color: 'purple', terms: ['Harlem Renaissance', 'Prohibition', 'Flappers', 'Great Migration'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 7: 1890-1945',
    categories: [
      { name: 'WWI Home Front', theme: 'SOC', color: 'yellow', terms: ['Espionage Act', 'Sedition Act', 'War Bonds', 'Committee on Public Information'] },
      { name: 'Treaty of Versailles', theme: 'WOR', color: 'green', terms: ['League of Nations', 'Fourteen Points', 'War Guilt Clause', 'Senate Rejection'] },
      { name: 'Red Scare', theme: 'PCE', color: 'blue', terms: ['Palmer Raids', 'Sacco and Vanzetti', 'Fear of Communism', 'Immigration Quotas'] },
      { name: 'Wilsons Progressivism', theme: 'PCE', color: 'purple', terms: ['Federal Reserve Act', 'Clayton Antitrust Act', 'Federal Trade Commission', 'Underwood Tariff'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 7: 1890-1945',
    categories: [
      { name: 'Great Depression', theme: 'WXT', color: 'yellow', terms: ['Stock Market Crash', 'Bank Failures', 'Dust Bowl', 'Unemployment'] },
      { name: 'FDR Leadership', theme: 'PCE', color: 'green', terms: ['Fireside Chats', 'Court Packing', 'First Hundred Days', 'New Deal Coalition'] },
      { name: 'WWII in the Pacific', theme: 'WOR', color: 'blue', terms: ['Pearl Harbor', 'Midway', 'Island Hopping', 'Atomic Bomb'] },
      { name: 'WWII in Europe', theme: 'WOR', color: 'purple', terms: ['D-Day', 'Battle of the Bulge', 'V-E Day', 'Holocaust'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 7: 1890-1945',
    categories: [
      { name: 'WWII Home Front', theme: 'SOC', color: 'yellow', terms: ['Rosie the Riveter', 'Japanese Internment', 'Rationing', 'War Bonds'] },
      { name: 'Progressive Leaders', theme: 'PCE', color: 'green', terms: ['Theodore Roosevelt', 'Woodrow Wilson', 'William Taft', 'Robert La Follette'] },
      { name: '1920s Culture', theme: 'SOC', color: 'blue', terms: ['Jazz Age', 'Lost Generation', 'Scopes Trial', 'Fundamentalism'] },
      { name: 'US Imperialism', theme: 'WOR', color: 'purple', terms: ['Open Door Policy', 'Roosevelt Corollary', 'Panama Canal', 'Dollar Diplomacy'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 7: 1890-1945',
    categories: [
      { name: 'WWI Weapons', theme: 'WOR', color: 'yellow', terms: ['Trench Warfare', 'Machine Guns', 'Poison Gas', 'Tanks'] },
      { name: 'WWI Key Events', theme: 'WOR', color: 'green', terms: ['Lusitania Sinking', 'Zimmermann Telegram', 'Sussex Pledge', 'Entry into War'] },
      { name: 'New Deal Critics', theme: 'PCE', color: 'blue', terms: ['Huey Long', 'Father Coughlin', 'Supreme Court Opposition', 'Liberty League'] },
      { name: '1930s Labor', theme: 'WXT', color: 'purple', terms: ['Sit-Down Strikes', 'CIO', 'Fair Labor Standards Act', 'Minimum Wage'] },
    ],
  },

  // ══════════ PERIOD 8: 1945-1980 ══════════

  {
    subject: 'apush', period: 'Period 8: 1945-1980',
    categories: [
      { name: 'Cold War Policies', theme: 'WOR', color: 'yellow', terms: ['Containment', 'Marshall Plan', 'NATO', 'Truman Doctrine'] },
      { name: 'Civil Rights Leaders', theme: 'SOC', color: 'green', terms: ['Martin Luther King Jr', 'Rosa Parks', 'Malcolm X', 'Thurgood Marshall'] },
      { name: 'Vietnam War', theme: 'PCE', color: 'blue', terms: ['Gulf of Tonkin', 'Tet Offensive', 'Kent State', 'War Powers Act'] },
      { name: 'Great Society', theme: 'WXT', color: 'purple', terms: ['Medicare', 'Medicaid', 'Head Start', 'Civil Rights Act 1964'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 8: 1945-1980',
    categories: [
      { name: 'Cold War Crises', theme: 'WOR', color: 'yellow', terms: ['Berlin Blockade', 'Korean War', 'Cuban Missile Crisis', 'Bay of Pigs'] },
      { name: 'McCarthyism', theme: 'PCE', color: 'green', terms: ['Red Scare', 'HUAC', 'Blacklisting', 'Army-McCarthy Hearings'] },
      { name: 'Space Race', theme: 'WXT', color: 'blue', terms: ['Sputnik', 'NASA', 'Moon Landing', 'Arms Race'] },
      { name: 'Counterculture', theme: 'SOC', color: 'purple', terms: ['Woodstock', 'Hippies', 'Anti-War Protests', 'Free Speech Movement'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 8: 1945-1980',
    categories: [
      { name: 'Civil Rights Milestones', theme: 'SOC', color: 'yellow', terms: ['Brown v Board', 'Montgomery Bus Boycott', 'March on Washington', 'Selma March'] },
      { name: 'Womens Movement', theme: 'SOC', color: 'green', terms: ['Betty Friedan', 'NOW', 'ERA', 'Title IX'] },
      { name: 'Nixon Presidency', theme: 'PCE', color: 'blue', terms: ['Watergate', 'Detente', 'EPA', 'Pentagon Papers'] },
      { name: 'Economic Problems', theme: 'WXT', color: 'purple', terms: ['Stagflation', 'Oil Embargo', 'OPEC', 'Inflation'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 8: 1945-1980',
    categories: [
      { name: 'Suburbanization', theme: 'MIG', color: 'yellow', terms: ['Levittown', 'GI Bill', 'Interstate Highways', 'Baby Boom'] },
      { name: 'Nuclear Age', theme: 'WOR', color: 'green', terms: ['Manhattan Project', 'Hydrogen Bomb', 'MAD', 'Arms Race'] },
      { name: 'Civil Rights Laws', theme: 'PCE', color: 'blue', terms: ['Voting Rights Act', 'Civil Rights Act 1964', 'Fair Housing Act', '24th Amendment'] },
      { name: '1950s Culture', theme: 'SOC', color: 'purple', terms: ['Rock and Roll', 'Television', 'Conformity', 'Beat Generation'] },
    ],
  },

  // ══════════ PERIOD 9: 1980-Present ══════════

  {
    subject: 'apush', period: 'Period 9: 1980-Present',
    categories: [
      { name: 'Reagan Era', theme: 'PCE', color: 'yellow', terms: ['Reaganomics', 'Tax Cuts', 'Deregulation', 'Star Wars SDI'] },
      { name: 'End of Cold War', theme: 'WOR', color: 'green', terms: ['Fall of Berlin Wall', 'Glasnost', 'Perestroika', 'Soviet Collapse'] },
      { name: 'Tech Revolution', theme: 'WXT', color: 'blue', terms: ['Internet', 'Personal Computers', 'Silicon Valley', 'Dot-Com Bubble'] },
      { name: 'War on Terror', theme: 'WOR', color: 'purple', terms: ['September 11th', 'Patriot Act', 'Iraq War', 'Afghanistan War'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 9: 1980-Present',
    categories: [
      { name: 'Conservative Movement', theme: 'PCE', color: 'yellow', terms: ['Moral Majority', 'Contract with America', 'Newt Gingrich', 'Tea Party'] },
      { name: 'Globalization', theme: 'WXT', color: 'green', terms: ['NAFTA', 'WTO', 'Outsourcing', 'Free Trade'] },
      { name: 'Social Change', theme: 'SOC', color: 'blue', terms: ['Marriage Equality', 'Black Lives Matter', 'Me Too', 'Immigration Reform'] },
      { name: 'Clinton Era', theme: 'PCE', color: 'purple', terms: ['Budget Surplus', 'Impeachment', 'Welfare Reform', 'NAFTA'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 9: 1980-Present',
    categories: [
      { name: 'Obama Years', theme: 'PCE', color: 'yellow', terms: ['Affordable Care Act', 'Economic Recovery', 'Paris Agreement', 'DACA'] },
      { name: 'Modern Conflicts', theme: 'WOR', color: 'green', terms: ['Gulf War', 'War on Terror', 'ISIS', 'Drone Strikes'] },
      { name: 'Immigration Debates', theme: 'MIG', color: 'blue', terms: ['DREAM Act', 'Border Security', 'Sanctuary Cities', 'DACA'] },
      { name: 'Environmental Issues', theme: 'ENV', color: 'purple', terms: ['Climate Change', 'Kyoto Protocol', 'EPA', 'Green Energy'] },
    ],
  },
];

// ────────────────────────────────────────────────────────────
//  AP WORLD PUZZLES — Using standard textbook terms
//  from Doves Library & AP World curriculum
// ────────────────────────────────────────────────────────────
const APWORLD_PUZZLES: Omit<DailyPuzzle, 'id' | 'date'>[] = [

  // ══════════ UNIT 1: 1200-1450 ══════════

  {
    subject: 'apworld', period: 'Unit 1: 1200-1450',
    categories: [
      { name: 'Major Empires', theme: 'STA', color: 'yellow', terms: ['Mongol Empire', 'Song Dynasty', 'Delhi Sultanate', 'Mali Empire'] },
      { name: 'Trade Routes', theme: 'SIO', color: 'green', terms: ['Silk Roads', 'Indian Ocean Trade', 'Trans-Saharan Trade', 'Hanseatic League'] },
      { name: 'Spread of Religion', theme: 'SOC', color: 'blue', terms: ['Spread of Islam', 'Buddhism', 'Crusades', 'Bhakti Movement'] },
      { name: 'Key Inventions', theme: 'ENV', color: 'purple', terms: ['Printing Press', 'Gunpowder', 'Compass', 'Champa Rice'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 1: 1200-1450',
    categories: [
      { name: 'Mongol Impact', theme: 'STA', color: 'yellow', terms: ['Pax Mongolica', 'Genghis Khan', 'Khanates', 'Yuan Dynasty'] },
      { name: 'African Kingdoms', theme: 'SIO', color: 'green', terms: ['Great Zimbabwe', 'Swahili Cities', 'Mansa Musa', 'Kingdom of Kongo'] },
      { name: 'Travelers and Trade', theme: 'SOC', color: 'blue', terms: ['Ibn Battuta', 'Marco Polo', 'Zheng He', 'Mansa Musas Hajj'] },
      { name: 'Disease and Disaster', theme: 'ENV', color: 'purple', terms: ['Black Death', 'Little Ice Age', 'Famine', 'Population Decline'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 1: 1200-1450',
    categories: [
      { name: 'Song China', theme: 'STA', color: 'yellow', terms: ['Paper Money', 'Movable Type', 'Grand Canal', 'Steel Production'] },
      { name: 'Islamic Scholarship', theme: 'SOC', color: 'green', terms: ['House of Wisdom', 'Algebra', 'Medicine', 'Islamic Art'] },
      { name: 'European Feudalism', theme: 'STA', color: 'blue', terms: ['Manor System', 'Serfdom', 'Knights', 'Magna Carta'] },
      { name: 'Americas', theme: 'SIO', color: 'purple', terms: ['Aztec Empire', 'Inca Empire', 'Chinampas', 'Quipu'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 1: 1200-1450',
    categories: [
      { name: 'Byzantine Empire', theme: 'STA', color: 'yellow', terms: ['Constantinople', 'Justinian Code', 'Orthodox Christianity', 'Hagia Sophia'] },
      { name: 'Crusades Effects', theme: 'SIO', color: 'green', terms: ['Jerusalem', 'Cultural Exchange', 'Trade Revival', 'European Expansion'] },
      { name: 'Mongol Military', theme: 'STA', color: 'blue', terms: ['Cavalry', 'Siege Warfare', 'Religious Tolerance', 'Postal System'] },
      { name: 'Agricultural Change', theme: 'ENV', color: 'purple', terms: ['Three-Field System', 'Heavy Plow', 'Water Mills', 'Crop Rotation'] },
    ],
  },

  // ══════════ UNIT 2: Networks of Exchange ══════════

  {
    subject: 'apworld', period: 'Unit 2: 1200-1450',
    categories: [
      { name: 'State Building', theme: 'STA', color: 'yellow', terms: ['Ottoman Rise', 'Timbuktu', 'Khmer Empire', 'Aztec Tribute'] },
      { name: 'Belief Systems', theme: 'SOC', color: 'green', terms: ['Neo-Confucianism', 'Sufism', 'Scholasticism', 'Hinduism'] },
      { name: 'Labor Systems', theme: 'SIO', color: 'blue', terms: ['Serfdom', 'Tribute', 'Corvee Labor', 'Guild System'] },
      { name: 'Maritime Technology', theme: 'ENV', color: 'purple', terms: ['Dhow Ships', 'Lateen Sail', 'Astrolabe', 'Junk Ships'] },
    ],
  },

  // ══════════ UNIT 3: 1450-1750 ══════════

  {
    subject: 'apworld', period: 'Unit 3: 1450-1750',
    categories: [
      { name: 'Maritime Empires', theme: 'SIO', color: 'yellow', terms: ['Portuguese Trading Posts', 'Dutch East India Co', 'Spanish Galleons', 'British Navy'] },
      { name: 'Columbian Exchange', theme: 'ENV', color: 'green', terms: ['Smallpox', 'Potatoes', 'Silver Trade', 'Sugar Plantations'] },
      { name: 'Gunpowder Empires', theme: 'STA', color: 'blue', terms: ['Ottoman Empire', 'Safavid Dynasty', 'Mughal Empire', 'Ming Dynasty'] },
      { name: 'Forced Labor', theme: 'SOC', color: 'purple', terms: ['Encomienda', 'Chattel Slavery', 'Indentured Servitude', 'Mita System'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 3: 1450-1750',
    categories: [
      { name: 'European Explorers', theme: 'SIO', color: 'yellow', terms: ['Vasco da Gama', 'Magellan', 'Columbus', 'Bartolomeu Dias'] },
      { name: 'Absolute Monarchs', theme: 'STA', color: 'green', terms: ['Louis XIV', 'Peter the Great', 'Divine Right', 'Versailles'] },
      { name: 'Reformation', theme: 'SOC', color: 'blue', terms: ['Martin Luther', '95 Theses', 'John Calvin', 'Counter-Reformation'] },
      { name: 'Asian Powers', theme: 'SIO', color: 'purple', terms: ['Qing Dynasty', 'Tokugawa Japan', 'Canton System', 'Spice Trade'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 3: 1450-1750',
    categories: [
      { name: 'Atlantic Slave Trade', theme: 'SOC', color: 'yellow', terms: ['Middle Passage', 'Triangular Trade', 'Plantation Economy', 'Resistance'] },
      { name: 'Scientific Revolution', theme: 'ENV', color: 'green', terms: ['Copernicus', 'Galileo', 'Newton', 'Scientific Method'] },
      { name: 'Ottoman Golden Age', theme: 'STA', color: 'blue', terms: ['Suleiman', 'Janissaries', 'Devshirme', 'Millet System'] },
      { name: 'Mughal India', theme: 'STA', color: 'purple', terms: ['Akbar', 'Taj Mahal', 'Religious Tolerance', 'Zamindars'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 3: 1450-1750',
    categories: [
      { name: 'Silver Trade', theme: 'SIO', color: 'yellow', terms: ['Potosi Mines', 'Manila Galleons', 'Spanish Silver', 'Chinese Demand'] },
      { name: 'Colonial Society', theme: 'SOC', color: 'green', terms: ['Casta System', 'Creoles', 'Peninsulares', 'Mestizos'] },
      { name: 'Tokugawa Japan', theme: 'STA', color: 'blue', terms: ['Isolation Policy', 'Edo Period', 'Samurai', 'Bushido'] },
      { name: 'Mercantilism', theme: 'SIO', color: 'purple', terms: ['Joint-Stock Companies', 'Navigation Acts', 'Balance of Trade', 'Colonies'] },
    ],
  },

  // ══════════ UNIT 4: Transoceanic Connections ══════════

  {
    subject: 'apworld', period: 'Unit 4: 1450-1750',
    categories: [
      { name: 'Enlightenment', theme: 'SOC', color: 'yellow', terms: ['John Locke', 'Voltaire', 'Montesquieu', 'Rousseau'] },
      { name: 'Qing China', theme: 'STA', color: 'green', terms: ['Kangxi Emperor', 'Qianlong Emperor', 'Manchu Rule', 'Tribute System'] },
      { name: 'Global Trade', theme: 'SIO', color: 'blue', terms: ['Joint-Stock Companies', 'Mercantilism', 'Plantation Crops', 'Fur Trade'] },
      { name: 'Religious Conflict', theme: 'SOC', color: 'purple', terms: ['Thirty Years War', 'Peace of Westphalia', 'Huguenots', 'Inquisition'] },
    ],
  },

  // ══════════ UNIT 5: 1750-1900 ══════════

  {
    subject: 'apworld', period: 'Unit 5: 1750-1900',
    categories: [
      { name: 'Major Revolutions', theme: 'STA', color: 'yellow', terms: ['French Revolution', 'Haitian Revolution', 'Latin American Independence', 'Industrial Revolution'] },
      { name: 'Imperialism', theme: 'SIO', color: 'green', terms: ['Scramble for Africa', 'Opium Wars', 'Sepoy Rebellion', 'Berlin Conference'] },
      { name: 'Nationalism', theme: 'SOC', color: 'blue', terms: ['Italian Unification', 'German Unification', 'Meiji Restoration', 'Zionism'] },
      { name: 'Enlightenment Ideas', theme: 'STA', color: 'purple', terms: ['Social Contract', 'Natural Rights', 'Separation of Powers', 'Popular Sovereignty'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 5: 1750-1900',
    categories: [
      { name: 'Industrial Revolution', theme: 'SIO', color: 'yellow', terms: ['Steam Engine', 'Factory System', 'Cotton Mills', 'Coal Mining'] },
      { name: 'Social Impact', theme: 'SOC', color: 'green', terms: ['Urbanization', 'Child Labor', 'Labor Unions', 'Marxism'] },
      { name: 'Anti-Imperial Resistance', theme: 'STA', color: 'blue', terms: ['Boxer Rebellion', 'Taiping Rebellion', 'Zulu Resistance', 'Maroon Communities'] },
      { name: 'Abolition of Slavery', theme: 'SOC', color: 'purple', terms: ['British Abolition', 'Brazilian Abolition', 'Haitian Revolution', 'Underground Railroad'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 5: 1750-1900',
    categories: [
      { name: 'Independence Leaders', theme: 'STA', color: 'yellow', terms: ['Simon Bolivar', 'Toussaint Louverture', 'Jose de San Martin', 'Miguel Hidalgo'] },
      { name: 'British Empire', theme: 'SIO', color: 'green', terms: ['East India Company', 'Suez Canal', 'Cape Colony', 'Queen Victoria'] },
      { name: 'Meiji Japan', theme: 'STA', color: 'blue', terms: ['Meiji Restoration', 'Industrialization', 'Russo-Japanese War', 'Westernization'] },
      { name: 'New Ideologies', theme: 'SOC', color: 'purple', terms: ['Liberalism', 'Conservatism', 'Socialism', 'Feminism'] },
    ],
  },

  // ══════════ UNIT 6: Consequences of Industrialization ══════════

  {
    subject: 'apworld', period: 'Unit 6: 1900-Present',
    categories: [
      { name: 'WWI Causes', theme: 'STA', color: 'yellow', terms: ['Assassination of Archduke', 'Alliance System', 'Militarism', 'Nationalism'] },
      { name: 'WWI Warfare', theme: 'SIO', color: 'green', terms: ['Trench Warfare', 'Poison Gas', 'Machine Guns', 'U-Boats'] },
      { name: 'WWI Results', theme: 'STA', color: 'blue', terms: ['Treaty of Versailles', 'League of Nations', 'Mandate System', 'Ottoman Collapse'] },
      { name: 'Russian Revolution', theme: 'STA', color: 'purple', terms: ['Bolsheviks', 'Lenin', 'October Revolution', 'Soviet Union'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 6: 1900-Present',
    categories: [
      { name: 'Rise of Fascism', theme: 'STA', color: 'yellow', terms: ['Mussolini', 'Hitler', 'Totalitarianism', 'Appeasement'] },
      { name: 'WWII Key Events', theme: 'SIO', color: 'green', terms: ['Blitzkrieg', 'Pearl Harbor', 'Holocaust', 'Atomic Bomb'] },
      { name: 'Interwar Period', theme: 'SOC', color: 'blue', terms: ['Great Depression', 'Weimar Republic', 'Five Year Plans', 'Collectivization'] },
      { name: 'Chinese Revolution', theme: 'STA', color: 'purple', terms: ['Sun Yat-sen', 'Mao Zedong', 'Long March', 'Communist Party'] },
    ],
  },

  // ══════════ UNIT 7: Global Conflict ══════════

  {
    subject: 'apworld', period: 'Unit 7: 1900-Present',
    categories: [
      { name: 'Global Wars', theme: 'STA', color: 'yellow', terms: ['Treaty of Versailles', 'United Nations', 'D-Day', 'Atomic Bomb'] },
      { name: 'Decolonization', theme: 'SOC', color: 'green', terms: ['Indian Independence', 'Algerian War', 'Vietnam', 'Apartheid'] },
      { name: 'Cold War', theme: 'SIO', color: 'blue', terms: ['Korean War', 'Cuban Missile Crisis', 'Berlin Wall', 'Soviet-Afghan War'] },
      { name: 'Communist Movements', theme: 'STA', color: 'purple', terms: ['Russian Revolution', 'Chinese Revolution', 'Cuban Revolution', 'Khmer Rouge'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 7: 1900-Present',
    categories: [
      { name: 'African Independence', theme: 'STA', color: 'yellow', terms: ['Kwame Nkrumah', 'Jomo Kenyatta', 'Nelson Mandela', 'Pan-Africanism'] },
      { name: 'Cold War Alliances', theme: 'SIO', color: 'green', terms: ['NATO', 'Warsaw Pact', 'Non-Aligned Movement', 'Proxy Wars'] },
      { name: 'Middle East', theme: 'STA', color: 'blue', terms: ['Arab-Israeli Conflict', 'Iranian Revolution', 'OPEC', 'Camp David Accords'] },
      { name: 'Asian Economies', theme: 'SIO', color: 'purple', terms: ['South Korea', 'Taiwan', 'Singapore', 'Hong Kong'] },
    ],
  },

  // ══════════ UNIT 8: Cold War and Decolonization ══════════

  {
    subject: 'apworld', period: 'Unit 8: 1900-Present',
    categories: [
      { name: 'Globalization', theme: 'SIO', color: 'yellow', terms: ['World Trade Organization', 'Internet', 'Multinational Corporations', 'Free Trade'] },
      { name: 'Environment', theme: 'ENV', color: 'green', terms: ['Climate Change', 'Deforestation', 'Ozone Layer', 'Paris Agreement'] },
      { name: 'Human Rights', theme: 'SOC', color: 'blue', terms: ['Universal Declaration', 'Genocide Convention', 'Womens Rights', 'Refugee Crisis'] },
      { name: 'Technology', theme: 'ENV', color: 'purple', terms: ['Green Revolution', 'Nuclear Energy', 'Space Race', 'Medical Advances'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 8: 1900-Present',
    categories: [
      { name: 'Post-Cold War', theme: 'STA', color: 'yellow', terms: ['European Union', 'Soviet Collapse', 'Rwandan Genocide', 'Yugoslav Wars'] },
      { name: 'Global Economy', theme: 'SIO', color: 'green', terms: ['Free Market', 'IMF', 'World Bank', 'Microfinance'] },
      { name: 'Pandemic History', theme: 'ENV', color: 'blue', terms: ['HIV/AIDS', 'Ebola', 'COVID-19', 'WHO'] },
      { name: 'Digital Age', theme: 'SOC', color: 'purple', terms: ['Social Media', 'Arab Spring', 'Cyber Security', 'AI'] },
    ],
  },

  // ══════════ UNIT 9: Globalization ══════════

  {
    subject: 'apworld', period: 'Unit 9: Globalization',
    categories: [
      { name: 'International Bodies', theme: 'STA', color: 'yellow', terms: ['United Nations', 'WHO', 'International Court', 'NATO'] },
      { name: 'Migration', theme: 'SOC', color: 'green', terms: ['Guest Workers', 'Brain Drain', 'Refugees', 'Urbanization'] },
      { name: 'Cultural Spread', theme: 'SIO', color: 'blue', terms: ['Hollywood', 'K-Pop', 'Fast Food Chains', 'World Cup'] },
      { name: 'Anti-Globalization', theme: 'SOC', color: 'purple', terms: ['Protests', 'Brexit', 'Trade Wars', 'Nationalism Revival'] },
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
