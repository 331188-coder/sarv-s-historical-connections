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
//  APUSH PUZZLES
//  Sources: Barron's AP U.S. History (Periods 1-9 notes),
//  Tom Richey APUSH Study Guide, American Pageant 17e
//
//  Design principles:
//  - Each puzzle has one "red herring" category where terms
//    could plausibly fit another category (marked // RED HERRING)
//  - Difficulty is balanced: 2 obvious terms + 2 tricky per category
//  - All terms are factually accurate and curriculum-verified
// ────────────────────────────────────────────────────────────
const APUSH_PUZZLES: Omit<DailyPuzzle, 'id' | 'date'>[] = [

  // ══════════ PERIOD 1: 1491-1607 ══════════

  {
    subject: 'apush', period: 'Period 1: 1491-1607',
    categories: [
      // RED HERRING: "Horses" could trick students into Columbian Exchange (it IS one), but it belongs here as a Spanish tool of conquest
      { name: 'Columbian Exchange — New World to Old', theme: 'ENV', color: 'yellow', terms: ['Corn (Maize)', 'Potatoes', 'Tobacco', 'Tomatoes'] },
      { name: 'Spanish Colonization Tools', theme: 'WOR', color: 'green', terms: ['Encomienda', 'Conquistadors', 'Mission System', 'Horses'] },
      { name: 'Native American Societies', theme: 'SOC', color: 'blue', terms: ['Iroquois Confederacy', 'Pueblo Peoples', 'Cahokia', 'Three Sisters'] },
      { name: 'European Motives for Exploration', theme: 'WXT', color: 'purple', terms: ['God, Gold, Glory', 'Mercantilism', 'Northwest Passage', 'Treaty of Tordesillas'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 1: 1491-1607',
    categories: [
      { name: 'Spanish Conquistadors', theme: 'WOR', color: 'yellow', terms: ['Hernan Cortes', 'Francisco Pizarro', 'Juan Ponce de Leon', 'Hernando de Soto'] },
      // RED HERRING: "Caravel" looks like it belongs with technology, but here it's grouped as an exploration enabler
      { name: 'Early Exploration Firsts', theme: 'MIG', color: 'green', terms: ['Christopher Columbus', 'Vasco da Gama', 'Ferdinand Magellan', 'Caravel'] },
      { name: 'Impact of Contact on Natives', theme: 'SOC', color: 'blue', terms: ['Smallpox Epidemics', 'Population Decline', 'Mestizos', 'Encomienda Labor'] },
      { name: 'French Exploration', theme: 'MIG', color: 'purple', terms: ['Jacques Cartier', 'Samuel de Champlain', 'Fur Trade', 'St. Lawrence River'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 1: 1491-1607',
    categories: [
      { name: 'Spanish Colonial Hierarchy', theme: 'SOC', color: 'yellow', terms: ['Casta System', 'Peninsulares', 'Creoles', 'Mestizos'] },
      // RED HERRING: "Francis Drake" looks like exploration but belongs with English rivalry against Spain
      { name: 'English Ambitions Before 1607', theme: 'WOR', color: 'green', terms: ['Roanoke Colony', 'Sir Walter Raleigh', 'Francis Drake', 'Defeat of Spanish Armada'] },
      { name: 'African Slave Trade Begins', theme: 'WXT', color: 'blue', terms: ['Middle Passage', 'Triangular Trade', 'Sugar Plantations', 'Portuguese Traders'] },
      { name: 'Environmental Change from Contact', theme: 'ENV', color: 'purple', terms: ['Deforestation', 'Old World Livestock', 'New Crops Introduced', 'Bering Land Bridge'] },
    ],
  },

  // ══════════ PERIOD 2: 1607-1754 ══════════

  {
    subject: 'apush', period: 'Period 2: 1607-1754',
    categories: [
      { name: 'New England Colonies', theme: 'SOC', color: 'yellow', terms: ['Puritans', 'Mayflower Compact', 'John Winthrop', 'Town Meetings'] },
      // RED HERRING: "Tobacco" — students might think "colonial economy" but it specifically defines Chesapeake identity
      { name: 'Chesapeake Colonies', theme: 'WXT', color: 'green', terms: ['Tobacco Economy', 'Headright System', 'House of Burgesses', 'Indentured Servants'] },
      { name: 'Colonial Conflicts', theme: 'WOR', color: 'blue', terms: ["Bacon's Rebellion", "King Philip's War", 'Stono Rebellion', 'Pueblo Revolt'] },
      { name: 'Colonial Religious Dissenters', theme: 'SOC', color: 'purple', terms: ['Roger Williams', 'Anne Hutchinson', 'Quakers', 'Great Awakening'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 2: 1607-1754',
    categories: [
      { name: 'Middle Colonies', theme: 'MIG', color: 'yellow', terms: ['William Penn', 'Religious Tolerance', 'Breadbasket Colonies', 'Diverse Immigrants'] },
      { name: 'New England Way of Life', theme: 'NAT', color: 'green', terms: ['City Upon a Hill', 'Covenant Theology', 'Congregational Church', 'Literacy Laws'] },
      { name: 'Development of Slavery', theme: 'SOC', color: 'blue', terms: ['Slave Codes', 'Chattel Slavery', 'Royal African Company', 'Middle Passage'] },
      // RED HERRING: "Salutary Neglect" looks like a law/policy — it's actually a British governing philosophy
      { name: 'British Colonial Policy', theme: 'PCE', color: 'purple', terms: ['Salutary Neglect', 'Navigation Acts', 'Royal Colonies', 'Mercantilism'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 2: 1607-1754',
    categories: [
      { name: 'Enlightenment in the Colonies', theme: 'NAT', color: 'yellow', terms: ['John Locke', 'Natural Rights', 'Reason Over Faith', 'Benjamin Franklin'] },
      { name: 'French and Indian War', theme: 'WOR', color: 'green', terms: ['Albany Plan of Union', 'Ohio River Valley', 'Treaty of Paris 1763', 'Pontiac\'s Rebellion'] },
      // RED HERRING: "Indigo" could seem like a cash crop alongside tobacco, but it specifically defines South Carolina's economy
      { name: 'Southern Colony Economy', theme: 'WXT', color: 'blue', terms: ['Rice', 'Indigo', 'Slave Labor', 'Plantation Aristocracy'] },
      { name: 'Colonial Self-Government', theme: 'PCE', color: 'purple', terms: ['Colonial Assemblies', 'Salutary Neglect', 'Common Law', 'Writs of Assistance'] },
    ],
  },

  // ══════════ PERIOD 3: 1754-1800 ══════════

  {
    subject: 'apush', period: 'Period 3: 1754-1800',
    categories: [
      { name: 'Revolutionary Ideas and Documents', theme: 'NAT', color: 'yellow', terms: ['Common Sense', 'Declaration of Independence', 'Natural Rights', 'Republican Motherhood'] },
      // RED HERRING: "Saratoga" — students know it's a battle but may not know it was the turning point that secured French alliance
      { name: 'Key Revolutionary Battles', theme: 'WOR', color: 'green', terms: ['Lexington and Concord', 'Saratoga', 'Yorktown', 'Trenton'] },
      { name: 'Constitutional Compromises', theme: 'PCE', color: 'blue', terms: ['Great Compromise', 'Three-Fifths Compromise', 'Electoral College', 'Bill of Rights'] },
      { name: 'Colonial Resistance Tactics', theme: 'SOC', color: 'purple', terms: ['Boston Tea Party', 'Sons of Liberty', 'Committees of Correspondence', 'Non-Importation Agreements'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 3: 1754-1800',
    categories: [
      // RED HERRING: "Tea Act" — sounds like just another tax but specifically led to the Boston Tea Party
      { name: 'British Tax Laws (1764-1773)', theme: 'WXT', color: 'yellow', terms: ['Stamp Act', 'Townshend Acts', 'Sugar Act', 'Tea Act'] },
      { name: 'Weaknesses of the Articles of Confederation', theme: 'PCE', color: 'green', terms: ["Shay's Rebellion", 'No Power to Tax', 'Northwest Ordinance', 'Currency Chaos'] },
      { name: 'Foreign Allies in the Revolution', theme: 'WOR', color: 'blue', terms: ['French Alliance', 'Treaty of Paris 1783', 'Marquis de Lafayette', 'Baron von Steuben'] },
      { name: "Hamilton's Financial Program", theme: 'WXT', color: 'purple', terms: ['National Bank', 'Assumption of State Debts', 'Protective Tariff', 'Report on Manufactures'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 3: 1754-1800',
    categories: [
      { name: 'Early Republic Crises', theme: 'PCE', color: 'yellow', terms: ['Whiskey Rebellion', 'XYZ Affair', 'Alien and Sedition Acts', "Fries's Rebellion"] },
      { name: 'First Political Parties', theme: 'PCE', color: 'green', terms: ['Federalists', 'Democratic-Republicans', 'Virginia and Kentucky Resolutions', 'Election of 1800'] },
      // RED HERRING: "Jay's Treaty" — students often confuse this with Pinckney's Treaty; both are Washington-era but very different
      { name: "Washington's Foreign Policy", theme: 'WOR', color: 'blue', terms: ["Jay's Treaty", "Pinckney's Treaty", 'Neutrality Proclamation', 'Farewell Address'] },
      { name: 'Federalist Papers Arguments', theme: 'NAT', color: 'purple', terms: ['Federalist No. 10', 'Federalist No. 51', 'James Madison', 'Separation of Powers'] },
    ],
  },

  // ══════════ PERIOD 4: 1800-1848 ══════════

  {
    subject: 'apush', period: 'Period 4: 1800-1848',
    categories: [
      { name: 'Market Revolution Technologies', theme: 'WXT', color: 'yellow', terms: ['Cotton Gin', 'Erie Canal', 'Lowell Mills', 'Steam-Powered Locomotives'] },
      // RED HERRING: "Nullification Crisis" — could seem like states' rights broadly but specifically ties to Calhoun and SC tariff dispute
      { name: 'Jacksonian Political Conflicts', theme: 'PCE', color: 'green', terms: ['Nullification Crisis', 'Indian Removal Act', 'Bank War', 'Tariff of Abominations'] },
      { name: 'Territorial Expansion', theme: 'MIG', color: 'blue', terms: ['Louisiana Purchase', 'Lewis and Clark Expedition', 'Missouri Compromise', 'Adams-Onis Treaty'] },
      { name: 'Marshall Court Landmark Cases', theme: 'PCE', color: 'purple', terms: ['Marbury v. Madison', 'McCulloch v. Maryland', 'Gibbons v. Ogden', 'Worcester v. Georgia'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 4: 1800-1848',
    categories: [
      { name: 'Features of Jacksonian Democracy', theme: 'PCE', color: 'yellow', terms: ['Spoils System', 'Expanded White Male Suffrage', 'Kitchen Cabinet', 'Common Man Politics'] },
      { name: 'Antebellum Reform Movements', theme: 'SOC', color: 'green', terms: ['Seneca Falls Convention', 'Temperance Movement', 'Abolitionism', 'Second Great Awakening'] },
      // RED HERRING: "Battle of New Orleans" — happened after peace was signed; students often think it was decisive for the war
      { name: 'War of 1812 Key Events', theme: 'WOR', color: 'blue', terms: ['Impressment of Sailors', 'Battle of New Orleans', 'Hartford Convention', 'Treaty of Ghent'] },
      { name: "Monroe's Era", theme: 'WOR', color: 'purple', terms: ['Monroe Doctrine', 'Era of Good Feelings', 'American System (Clay)', 'Rush-Bagot Agreement'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 4: 1800-1848',
    categories: [
      { name: 'Transportation Revolution', theme: 'WXT', color: 'yellow', terms: ['National Road', 'Canal Boom', 'Railroad Expansion', 'Robert Fulton Steamboat'] },
      // RED HERRING: "Henry David Thoreau" — known for Walden but also wrote "Civil Disobedience," tricking students into reform movements
      { name: 'Transcendentalism', theme: 'NAT', color: 'green', terms: ['Ralph Waldo Emerson', 'Henry David Thoreau', 'Self-Reliance', 'Nature and Individualism'] },
      { name: 'Sectional Tensions over Slavery', theme: 'PCE', color: 'blue', terms: ['Wilmot Proviso', 'Free Soil Party', 'Popular Sovereignty', 'Gag Rule'] },
      { name: "Jefferson's Presidency (1801-1809)", theme: 'PCE', color: 'purple', terms: ['Revolution of 1800', 'Louisiana Purchase', 'Embargo Act of 1807', 'Marbury v. Madison'] },
    ],
  },

  // ══════════ PERIOD 5: 1844-1877 ══════════

  {
    subject: 'apush', period: 'Period 5: 1844-1877',
    categories: [
      // RED HERRING: "John Brown" — students might categorize as abolitionist but he's most tested as a cause of Southern secession
      { name: 'Road to Civil War (1850s)', theme: 'PCE', color: 'yellow', terms: ['Kansas-Nebraska Act', 'Dred Scott Decision', 'Bleeding Kansas', "John Brown's Raid"] },
      { name: 'Reconstruction Programs', theme: 'PCE', color: 'green', terms: ["Freedmen's Bureau", 'Radical Republicans', 'Military Reconstruction Acts', 'Impeachment of Johnson'] },
      { name: 'Civil War Amendments', theme: 'NAT', color: 'blue', terms: ['13th Amendment', '14th Amendment', '15th Amendment', 'Civil Rights Act of 1866'] },
      { name: 'Key Civil War Figures', theme: 'SOC', color: 'purple', terms: ['Abraham Lincoln', 'Frederick Douglass', 'Harriet Tubman', 'Ulysses S. Grant'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 5: 1844-1877',
    categories: [
      { name: 'Compromise of 1850 Components', theme: 'PCE', color: 'yellow', terms: ['Fugitive Slave Act', 'Popular Sovereignty', 'California as Free State', 'Slave Trade Banned in D.C.'] },
      { name: 'Major Civil War Battles', theme: 'WOR', color: 'green', terms: ['Gettysburg', 'Antietam', 'Vicksburg', 'Sherman\'s March to the Sea'] },
      // RED HERRING: "Homestead Act" — sounds economic but was a wartime measure Lincoln used to encourage Western settlement
      { name: 'Lincoln Wartime Policies', theme: 'PCE', color: 'blue', terms: ['Emancipation Proclamation', 'Military Draft', 'Homestead Act', 'Suspension of Habeas Corpus'] },
      { name: 'Abolitionist Movement', theme: 'SOC', color: 'purple', terms: ['William Lloyd Garrison', 'The Liberator', "Uncle Tom's Cabin", 'Underground Railroad'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 5: 1844-1877',
    categories: [
      { name: 'End and Betrayal of Reconstruction', theme: 'PCE', color: 'yellow', terms: ['Compromise of 1877', 'Jim Crow Laws', 'Sharecropping', 'Black Codes'] },
      { name: 'Mexican-American War', theme: 'WOR', color: 'green', terms: ['Treaty of Guadalupe Hidalgo', 'Mexican Cession', 'James K. Polk', 'Spot Resolutions'] },
      // RED HERRING: "10% Plan" — sounds moderate but Lincoln's plan was controversial among Radical Republicans
      { name: "Lincoln's Reconstruction Vision", theme: 'NAT', color: 'blue', terms: ['Gettysburg Address', 'Second Inaugural Address', '10% Plan', 'Malice Toward None'] },
      { name: 'Southern Resistance to Reconstruction', theme: 'SOC', color: 'purple', terms: ['Ku Klux Klan', 'Redeemers', 'Scalawags', 'Carpetbaggers'] },
    ],
  },

  // ══════════ PERIOD 6: 1865-1898 ══════════

  {
    subject: 'apush', period: 'Period 6: 1865-1898',
    categories: [
      { name: 'Gilded Age Industrialists', theme: 'WXT', color: 'yellow', terms: ['Andrew Carnegie', 'John D. Rockefeller', 'J.P. Morgan', 'Cornelius Vanderbilt'] },
      // RED HERRING: "AFL" — students may confuse with Knights of Labor; AFL specifically excluded unskilled workers
      { name: 'Labor Organizations and Conflicts', theme: 'SOC', color: 'green', terms: ['Knights of Labor', 'Haymarket Affair', 'Pullman Strike', 'American Federation of Labor'] },
      { name: 'Immigration Patterns and Responses', theme: 'MIG', color: 'blue', terms: ['Ellis Island', 'Chinese Exclusion Act 1882', 'Nativism', 'Hull House'] },
      { name: 'Western Expansion and Native Policy', theme: 'ENV', color: 'purple', terms: ['Transcontinental Railroad', 'Homestead Act 1862', 'Wounded Knee Massacre', 'Dawes Act'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 6: 1865-1898',
    categories: [
      { name: 'Gilded Age Politics and Corruption', theme: 'PCE', color: 'yellow', terms: ['Pendleton Civil Service Act', 'Tammany Hall', 'Boss Tweed', 'Spoils System'] },
      { name: 'Social Darwinism vs. Reform', theme: 'SOC', color: 'green', terms: ['Gospel of Wealth', 'Social Darwinism', 'Jane Addams', 'Jacob Riis'] },
      // RED HERRING: "Cross of Gold" — many students think it's a poem; it was Bryan's famous speech that defined the 1896 election
      { name: 'Populist Movement', theme: 'PCE', color: 'blue', terms: ['Peoples Party', 'William Jennings Bryan', 'Cross of Gold Speech', "Farmers' Alliance"] },
      { name: 'Urbanization', theme: 'MIG', color: 'purple', terms: ['Tenement Housing', 'Political Machines', 'Streetcar Suburbs', 'New Immigrants in Cities'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 6: 1865-1898',
    categories: [
      { name: 'Industrial Technology of the Gilded Age', theme: 'WXT', color: 'yellow', terms: ['Telephone (Bell)', 'Electric Light (Edison)', 'Bessemer Steel Process', 'Standard Oil Refineries'] },
      { name: 'Native American Policy Shift', theme: 'ENV', color: 'green', terms: ['Battle of Little Bighorn', 'Reservation System', 'Ghost Dance Movement', 'Dawes Severalty Act'] },
      { name: 'Business Consolidation Methods', theme: 'WXT', color: 'blue', terms: ['Trusts', 'Monopolies', 'Vertical Integration', 'Horizontal Integration'] },
      // RED HERRING: "Yellow Journalism" — students might think it's a media category but it's tested as a cause of the Spanish-American War
      { name: 'Spanish-American War', theme: 'WOR', color: 'purple', terms: ['USS Maine Explosion', 'Yellow Journalism', 'Rough Riders', 'Philippine Annexation Debate'] },
    ],
  },

  // ══════════ PERIOD 7: 1890-1945 ══════════

  {
    subject: 'apush', period: 'Period 7: 1890-1945',
    categories: [
      { name: 'Progressive Era Reforms', theme: 'PCE', color: 'yellow', terms: ['Sherman Antitrust Act', 'Pure Food and Drug Act', 'Muckrakers', '19th Amendment (1920)'] },
      // RED HERRING: "Lusitania" — obviously WWI, but students must know it pushed U.S. opinion toward intervention, not that it caused entry
      { name: 'U.S. Entry into WWI Causes', theme: 'WOR', color: 'green', terms: ['Lusitania Sinking', 'Zimmermann Telegram', 'Unrestricted Submarine Warfare', 'Sussex Pledge'] },
      { name: 'New Deal Programs', theme: 'WXT', color: 'blue', terms: ['Social Security Act', 'Civilian Conservation Corps', 'Tennessee Valley Authority', 'Wagner Act'] },
      { name: 'Roaring Twenties Culture', theme: 'SOC', color: 'purple', terms: ['Harlem Renaissance', 'Prohibition (18th Amendment)', 'Flappers', 'Great Migration North'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 7: 1890-1945',
    categories: [
      { name: 'WWI Home Front', theme: 'SOC', color: 'yellow', terms: ['Espionage Act 1917', 'Sedition Act 1918', 'Liberty Bonds', 'Committee on Public Information'] },
      // RED HERRING: "War Guilt Clause" — students know it's in Versailles, but they often confuse why it mattered (led to Great Depression/WWII)
      { name: 'Treaty of Versailles Controversies', theme: 'WOR', color: 'green', terms: ['League of Nations', "Wilson's Fourteen Points", 'War Guilt Clause (Article 231)', 'Senate Rejection'] },
      { name: 'First Red Scare (1919-1920)', theme: 'PCE', color: 'blue', terms: ['Palmer Raids', 'Sacco and Vanzetti', 'Fear of Bolshevism', 'Immigration Quota Acts'] },
      { name: "Wilson's Progressive Legislation", theme: 'PCE', color: 'purple', terms: ['Federal Reserve Act', 'Clayton Antitrust Act', 'Federal Trade Commission', 'Underwood Tariff'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 7: 1890-1945',
    categories: [
      { name: 'Great Depression Causes and Effects', theme: 'WXT', color: 'yellow', terms: ['Stock Market Crash 1929', 'Bank Failures', 'Dust Bowl', 'Smoot-Hawley Tariff'] },
      { name: 'FDR Leadership Style', theme: 'PCE', color: 'green', terms: ['Fireside Chats', 'Court-Packing Plan', 'First Hundred Days', 'New Deal Coalition'] },
      // RED HERRING: "Island Hopping" — students may think it's just strategy; it's specifically the Pacific theater tactic toward Japan
      { name: 'WWII Pacific Theater', theme: 'WOR', color: 'blue', terms: ['Attack on Pearl Harbor', 'Battle of Midway', 'Island Hopping Strategy', 'Atomic Bombings'] },
      { name: 'WWII European Theater', theme: 'WOR', color: 'purple', terms: ['D-Day (Normandy)', 'Battle of the Bulge', 'V-E Day', 'Holocaust'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 7: 1890-1945',
    categories: [
      // RED HERRING: "Japanese Internment" — students know it happened but often miss it was upheld by Korematsu v. U.S.
      { name: 'WWII Home Front', theme: 'SOC', color: 'yellow', terms: ['Rosie the Riveter', 'Japanese Internment (Korematsu)', 'War Rationing', 'War Production Board'] },
      { name: 'Progressive Era Presidents', theme: 'PCE', color: 'green', terms: ['Theodore Roosevelt', 'Woodrow Wilson', 'William Howard Taft', 'Robert La Follette'] },
      { name: '1920s Cultural Tensions', theme: 'SOC', color: 'blue', terms: ['Jazz Age', 'Scopes Trial', 'Fundamentalism vs. Modernism', 'Ku Klux Klan Revival'] },
      { name: 'U.S. Imperialism 1890-1917', theme: 'WOR', color: 'purple', terms: ['Open Door Policy', 'Roosevelt Corollary', 'Panama Canal', 'Dollar Diplomacy'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 7: 1890-1945',
    categories: [
      { name: 'WWI Military Technology', theme: 'WOR', color: 'yellow', terms: ['Trench Warfare', 'Machine Guns', 'Poison Gas (Chlorine)', 'Tanks'] },
      { name: 'New Deal Opposition', theme: 'PCE', color: 'green', terms: ['Huey Long (Share Our Wealth)', 'Father Coughlin', 'Supreme Court Invalidations', 'American Liberty League'] },
      // RED HERRING: "Fair Labor Standards Act" — could seem like generic labor law but it specifically established the first federal minimum wage
      { name: '1930s Labor Gains', theme: 'WXT', color: 'blue', terms: ['Sit-Down Strikes', 'Congress of Industrial Organizations (CIO)', 'Fair Labor Standards Act', 'Minimum Wage Law'] },
      { name: 'Causes of WWI (MAIN)', theme: 'WOR', color: 'purple', terms: ['Militarism', 'Alliance System', 'Imperialism', 'Nationalism'] },
    ],
  },

  // ══════════ PERIOD 8: 1945-1980 ══════════

  {
    subject: 'apush', period: 'Period 8: 1945-1980',
    categories: [
      { name: 'Cold War Containment Policies', theme: 'WOR', color: 'yellow', terms: ['Truman Doctrine', 'Marshall Plan', 'NATO', 'NSC-68'] },
      { name: 'Civil Rights Leaders and Tactics', theme: 'SOC', color: 'green', terms: ['Martin Luther King Jr.', 'Rosa Parks', 'Thurgood Marshall', 'SNCC'] },
      // RED HERRING: "Kent State" — students know it's anti-war, but it must be connected to Nixon's invasion of Cambodia specifically
      { name: 'Vietnam War Turning Points', theme: 'PCE', color: 'blue', terms: ['Gulf of Tonkin Resolution', 'Tet Offensive', 'Kent State Shootings', 'War Powers Act 1973'] },
      { name: "LBJ's Great Society Programs", theme: 'WXT', color: 'purple', terms: ['Medicare and Medicaid', 'Head Start', 'Civil Rights Act 1964', 'Voting Rights Act 1965'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 8: 1945-1980',
    categories: [
      { name: 'Cold War Hot Conflicts', theme: 'WOR', color: 'yellow', terms: ['Berlin Blockade/Airlift', 'Korean War', 'Cuban Missile Crisis', 'Bay of Pigs Invasion'] },
      // RED HERRING: "Blacklisting" — students associate it with Hollywood but it's specifically the practice of denying employment to suspected Communists
      { name: 'McCarthyism and Second Red Scare', theme: 'PCE', color: 'green', terms: ['Second Red Scare', 'HUAC Investigations', 'Hollywood Blacklist', 'Army-McCarthy Hearings'] },
      { name: 'Space and Arms Race', theme: 'WXT', color: 'blue', terms: ['Sputnik Launch', 'NASA Creation', 'Moon Landing 1969', 'Mutual Assured Destruction (MAD)'] },
      { name: '1960s Counterculture', theme: 'SOC', color: 'purple', terms: ['Woodstock', 'Hippie Movement', 'Anti-Vietnam Protests', 'Free Speech Movement (Berkeley)'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 8: 1945-1980',
    categories: [
      { name: 'Civil Rights Milestones', theme: 'SOC', color: 'yellow', terms: ['Brown v. Board of Education', 'Montgomery Bus Boycott', 'March on Washington 1963', 'Selma to Montgomery March'] },
      { name: "Women's Liberation Movement", theme: 'SOC', color: 'green', terms: ['Betty Friedan (The Feminine Mystique)', 'National Organization for Women', 'Equal Rights Amendment', 'Title IX'] },
      // RED HERRING: "Pentagon Papers" — Nixon didn't leak them, but his response (cover-up) directly connects to Watergate
      { name: 'Nixon Presidency Controversies', theme: 'PCE', color: 'blue', terms: ['Watergate Scandal', 'Détente with USSR/China', 'Pentagon Papers', 'Saturday Night Massacre'] },
      { name: '1970s Economic Crises', theme: 'WXT', color: 'purple', terms: ['Stagflation', 'OPEC Oil Embargo', 'Inflation Crisis', 'Deindustrialization'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 8: 1945-1980',
    categories: [
      { name: 'Postwar Suburbanization', theme: 'MIG', color: 'yellow', terms: ['Levittown', 'GI Bill (Servicemen\'s Readjustment Act)', 'Interstate Highway Act', 'Baby Boom'] },
      // RED HERRING: "MAD" — students know the acronym but must connect it to the strategic doctrine of nuclear deterrence
      { name: 'Nuclear Age and Arms Race', theme: 'WOR', color: 'green', terms: ['Manhattan Project', 'Hydrogen Bomb (1952)', 'Mutually Assured Destruction', 'Nuclear Test Ban Treaty'] },
      { name: 'Civil Rights Legislation', theme: 'PCE', color: 'blue', terms: ['Voting Rights Act 1965', 'Civil Rights Act 1964', 'Fair Housing Act 1968', '24th Amendment'] },
      { name: '1950s American Culture', theme: 'SOC', color: 'purple', terms: ['Rock and Roll', 'Television Boom', 'Suburban Conformity', 'Beat Generation'] },
    ],
  },

  // ══════════ PERIOD 9: 1980-Present ══════════

  {
    subject: 'apush', period: 'Period 9: 1980-Present',
    categories: [
      { name: 'Reaganomics and Conservatism', theme: 'PCE', color: 'yellow', terms: ['Supply-Side Economics', 'Tax Cuts (ERTA 1981)', 'Deregulation', 'Strategic Defense Initiative'] },
      // RED HERRING: "Perestroika" — students confuse it with Glasnost; Perestroika = restructuring, Glasnost = openness
      { name: 'End of the Cold War', theme: 'WOR', color: 'green', terms: ['Fall of Berlin Wall 1989', 'Glasnost', 'Perestroika', 'Soviet Collapse 1991'] },
      { name: 'Tech and Economic Revolution', theme: 'WXT', color: 'blue', terms: ['Internet Age', 'Personal Computers', 'Silicon Valley', 'Dot-Com Boom and Bust'] },
      { name: 'Post-9/11 War on Terror', theme: 'WOR', color: 'purple', terms: ['September 11 Attacks', 'USA PATRIOT Act', 'Iraq War (2003)', 'War in Afghanistan'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 9: 1980-Present',
    categories: [
      { name: 'Rise of the Conservative Movement', theme: 'PCE', color: 'yellow', terms: ['Moral Majority (Falwell)', 'Contract with America', 'Newt Gingrich Revolution', 'Tea Party Movement'] },
      { name: 'Globalization and Free Trade', theme: 'WXT', color: 'green', terms: ['NAFTA', 'World Trade Organization', 'Outsourcing', 'Trade Deficit with China'] },
      { name: '21st Century Social Movements', theme: 'SOC', color: 'blue', terms: ['Same-Sex Marriage Legalization', 'Black Lives Matter', '#MeToo Movement', 'Immigration Reform Debates'] },
      // RED HERRING: "NAFTA" — Clinton passed it but students must know he also signed conservative welfare reform and balanced the budget
      { name: 'Clinton Presidency', theme: 'PCE', color: 'purple', terms: ['Budget Surplus', 'Impeachment (1998)', 'Welfare Reform Act', 'NAFTA Passage'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 9: 1980-Present',
    categories: [
      { name: 'Obama Presidency', theme: 'PCE', color: 'yellow', terms: ['Affordable Care Act', 'Economic Recovery Act 2009', 'Paris Climate Agreement', 'DACA Program'] },
      { name: 'Post-Cold War Military Conflicts', theme: 'WOR', color: 'green', terms: ['Gulf War 1991', 'Bosnia Intervention', 'War on Terror (Post-9/11)', 'Drone Strike Program'] },
      { name: 'Immigration Debates', theme: 'MIG', color: 'blue', terms: ['DREAM Act Proposals', 'Border Security Debate', 'Sanctuary Cities', 'Executive Orders on Immigration'] },
      // RED HERRING: "Kyoto Protocol" — U.S. signed but Senate never ratified it; different from Paris Agreement which Obama joined via executive action
      { name: 'Modern Environmental Policy', theme: 'ENV', color: 'purple', terms: ['Climate Change Debate', 'Kyoto Protocol (Unratified)', 'EPA Regulations', 'Green New Deal Proposals'] },
    ],
  },
];

// ────────────────────────────────────────────────────────────
//  AP WORLD HISTORY: MODERN PUZZLES
//  Sources: College Board CED (9 Units), AP Central,
//  Princeton Review APWH guide
//
//  Unit structure (official CB names):
//  Unit 1: The Global Tapestry (1200-1450)
//  Unit 2: Networks of Exchange (1200-1450)
//  Unit 3: Land-Based Empires (1450-1750)
//  Unit 4: Transoceanic Interconnections (1450-1750)
//  Unit 5: Revolutions (1750-1900)
//  Unit 6: Consequences of Industrialization (1750-1900)
//  Unit 7: Global Conflict (1900-present)
//  Unit 8: Cold War and Decolonization (1900-present)
//  Unit 9: Globalization (1900-present)
// ────────────────────────────────────────────────────────────
const APWORLD_PUZZLES: Omit<DailyPuzzle, 'id' | 'date'>[] = [

  // ══════════ UNIT 1: The Global Tapestry (1200-1450) ══════════

  {
    subject: 'apworld', period: 'Unit 1: The Global Tapestry (1200-1450)',
    categories: [
      { name: 'Major Empires 1200-1450', theme: 'STA', color: 'yellow', terms: ['Mongol Empire', 'Song Dynasty', 'Delhi Sultanate', 'Mali Empire'] },
      { name: 'Trade Route Networks', theme: 'SIO', color: 'green', terms: ['Silk Roads', 'Indian Ocean Trade', 'Trans-Saharan Trade', 'Hanseatic League'] },
      // RED HERRING: "Bhakti Movement" — students often confuse it with Sufism; both blend traditions but Bhakti is Hindu devotionalism
      { name: 'Spread and Syncretism of Religion', theme: 'CDI', color: 'blue', terms: ['Spread of Islam', 'Theravada Buddhism', 'Crusades', 'Bhakti Movement'] },
      { name: 'Chinese Technological Innovations', theme: 'SIO', color: 'purple', terms: ['Woodblock Printing', 'Gunpowder Weapons', 'Magnetic Compass', 'Champa Rice'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 1: The Global Tapestry (1200-1450)',
    categories: [
      // RED HERRING: "Pax Mongolica" — sounds peaceful but the Mongol peace was built on violent conquest first
      { name: 'Mongol Empire Impact', theme: 'STA', color: 'yellow', terms: ['Pax Mongolica', 'Genghis Khan', 'Four Khanates', 'Yuan Dynasty (China)'] },
      { name: 'African Kingdoms and Wealth', theme: 'SIO', color: 'green', terms: ['Great Zimbabwe', 'Swahili Coast Cities', 'Mansa Musa', 'Kingdom of Kongo'] },
      { name: 'Notable Travelers of the Era', theme: 'CDI', color: 'blue', terms: ['Ibn Battuta', 'Marco Polo', 'Zheng He Voyages', "Mansa Musa's Hajj"] },
      { name: 'Disease and Environmental Disaster', theme: 'ENV', color: 'purple', terms: ['Black Death (Bubonic Plague)', 'Little Ice Age', 'Famine Cycles', 'Population Collapse'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 1: The Global Tapestry (1200-1450)',
    categories: [
      { name: 'Song Dynasty Achievements', theme: 'STA', color: 'yellow', terms: ['Paper Money (Jiaozi)', 'Movable Type Printing', 'Grand Canal Expansion', 'Steel Production'] },
      { name: 'Islamic Golden Age Scholarship', theme: 'CDI', color: 'green', terms: ['House of Wisdom (Baghdad)', 'Algebra (al-Khwarizmi)', 'Medical Texts (Ibn Sina)', 'Geometric Art'] },
      // RED HERRING: "Magna Carta" — students know it's about rights but its significance is as a LIMIT on royal power, not democracy
      { name: 'European Feudal System', theme: 'STA', color: 'blue', terms: ['Manor System', 'Serfdom', 'Chivalric Knights', 'Magna Carta (1215)'] },
      { name: 'Pre-Contact Americas', theme: 'SIO', color: 'purple', terms: ['Aztec (Mexica) Empire', 'Inca Empire', 'Chinampas (Floating Gardens)', 'Quipu Record-Keeping'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 1: The Global Tapestry (1200-1450)',
    categories: [
      { name: 'Byzantine Empire', theme: 'STA', color: 'yellow', terms: ['Constantinople', 'Justinian Code', 'Eastern Orthodox Christianity', 'Hagia Sophia'] },
      // RED HERRING: "Cultural Exchange" — the Crusades are most tested for unintended consequences (trade revival), not religious success
      { name: 'Crusades Long-Term Effects', theme: 'SIO', color: 'green', terms: ['Jerusalem Conflicts', 'Revived Mediterranean Trade', 'European Demand for Luxury Goods', 'Weakened Feudalism'] },
      { name: 'Mongol Military and Administration', theme: 'STA', color: 'blue', terms: ['Cavalry and Archery', 'Siege Warfare Techniques', 'Religious Tolerance Policy', 'Yam Postal System'] },
      { name: 'European Agricultural Revolution', theme: 'ENV', color: 'purple', terms: ['Three-Field System', 'Heavy Plow', 'Water and Windmills', 'Crop Rotation'] },
    ],
  },

  // ══════════ UNIT 2: Networks of Exchange (1200-1450) ══════════

  {
    subject: 'apworld', period: 'Unit 2: Networks of Exchange (1200-1450)',
    categories: [
      { name: 'State-Building Across Regions', theme: 'STA', color: 'yellow', terms: ['Ottoman Rise (Anatolia)', 'Timbuktu as Scholarly Center', 'Khmer Empire (Angkor)', 'Aztec Tribute System'] },
      { name: 'Belief Systems Shaping Society', theme: 'CDI', color: 'green', terms: ['Neo-Confucianism', 'Sufism (Islamic Mysticism)', 'Scholasticism', 'Hindu-Muslim Synthesis'] },
      // RED HERRING: "Guild System" — students might place it under economics broadly; it's a form of labor organization specific to medieval Europe
      { name: 'Labor Systems Across Regions', theme: 'SIO', color: 'blue', terms: ['Serfdom (Europe)', 'Tribute Labor (Americas)', 'Corvée Labor', 'Guild System (Europe)'] },
      { name: 'Maritime Technology', theme: 'ENV', color: 'purple', terms: ['Dhow Ships', 'Lateen Sail', 'Astrolabe Navigation', 'Chinese Junk Ships'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 2: Networks of Exchange (1200-1450)',
    categories: [
      { name: 'Silk Road Exchange', theme: 'SIO', color: 'yellow', terms: ['Luxury Goods Trade', 'Disease Transmission', 'Cultural Diffusion', 'Caravanserai Rest Stops'] },
      // RED HERRING: "Swahili" — students may think it's just a language, but Swahili cities were cosmopolitan Indian Ocean trading hubs
      { name: 'Indian Ocean Trade Network', theme: 'SIO', color: 'green', terms: ['Monsoon Wind Patterns', 'Swahili City-States', 'Spice Trade', 'Dhow Ship Networks'] },
      { name: 'Trans-Saharan Trade', theme: 'SIO', color: 'blue', terms: ['Gold and Salt Exchange', 'Camel Caravans', 'Mali Empire Wealth', 'Spread of Islam in Africa'] },
      { name: 'Impact of the Black Death', theme: 'ENV', color: 'purple', terms: ['Labor Shortages in Europe', 'Weakened Church Authority', 'Flagellant Movements', 'End of Feudal Order'] },
    ],
  },

  // ══════════ UNIT 3: Land-Based Empires (1450-1750) ══════════

  {
    subject: 'apworld', period: 'Unit 3: Land-Based Empires (1450-1750)',
    categories: [
      // RED HERRING: "Devshirme" — students confuse it as slavery; it was actually a forced recruitment of Christian boys who could rise to elite status
      { name: 'Ottoman Empire at Its Height', theme: 'STA', color: 'yellow', terms: ['Suleiman the Magnificent', 'Janissaries (Elite Soldiers)', 'Devshirme System', 'Millet System'] },
      { name: 'Safavid Dynasty (Persia)', theme: 'STA', color: 'green', terms: ['Shia Islam as State Religion', 'Shah Abbas I', 'Conflict with Ottomans', 'Isfahan Architecture'] },
      { name: 'Mughal Empire (India)', theme: 'STA', color: 'blue', terms: ['Akbar the Great', 'Taj Mahal', 'Din-i-Ilahi (Religious Tolerance)', 'Zamindars (Tax Collectors)'] },
      { name: 'Ming Dynasty (China)', theme: 'STA', color: 'purple', terms: ['Great Wall Expansion', 'Zheng He Voyages', 'Isolation After 1433', 'Confucian Civil Service'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 3: Land-Based Empires (1450-1750)',
    categories: [
      { name: 'Legitimization of Empires', theme: 'STA', color: 'yellow', terms: ['Divine Right of Kings', 'Mandate of Heaven', 'Religious Authority', 'Monumental Architecture'] },
      // RED HERRING: "Manchu" — the Qing were Manchu outsiders who adopted Chinese administrative traditions to legitimize their rule
      { name: 'Qing Dynasty (China)', theme: 'STA', color: 'green', terms: ['Manchu Conquest of Ming', 'Queue Hairstyle Policy', 'Kangxi Emperor', 'Tributary System Maintained'] },
      { name: 'Russian Empire Expansion', theme: 'STA', color: 'blue', terms: ['Ivan the Terrible', 'Cossack Expansion East', 'Peter the Great Westernization', 'Serfdom'] },
      { name: 'Religious Reform Movements', theme: 'CDI', color: 'purple', terms: ['Protestant Reformation (Luther)', 'Counter-Reformation (Jesuits)', 'Sunni-Shia Conflict', 'Sikhism Founding'] },
    ],
  },

  // ══════════ UNIT 4: Transoceanic Interconnections (1450-1750) ══════════

  {
    subject: 'apworld', period: 'Unit 4: Transoceanic Interconnections (1450-1750)',
    categories: [
      { name: 'European Maritime Empires', theme: 'SIO', color: 'yellow', terms: ['Portuguese Trading Post Empire', 'Dutch East India Company (VOC)', 'Spanish Galleon Trade', 'British Royal Navy'] },
      { name: 'Columbian Exchange Effects', theme: 'ENV', color: 'green', terms: ['Smallpox Devastates Americas', 'Potatoes Transform Europe', 'Silver Flows to China', 'Sugar Plantation Spread'] },
      // RED HERRING: "Encomienda" — students place it under labor; it's specifically a Spanish colonial labor GRANT system, not slavery
      { name: 'Colonial Labor Systems', theme: 'SOC', color: 'blue', terms: ['Encomienda System', 'Chattel Slavery (Atlantic)', 'Indentured Servitude', 'Mita System (Inca-derived)'] },
      { name: 'Early Modern European Explorers', theme: 'SIO', color: 'purple', terms: ['Vasco da Gama (India Route)', 'Magellan (Circumnavigation)', 'Columbus (Caribbean)', 'Bartolomeu Dias (Cape of Good Hope)'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 4: Transoceanic Interconnections (1450-1750)',
    categories: [
      { name: 'Atlantic Slave Trade', theme: 'SOC', color: 'yellow', terms: ['Middle Passage', 'Triangular Trade', 'Plantation Economy', 'Slave Resistance and Revolts'] },
      { name: 'Scientific Revolution', theme: 'CDI', color: 'green', terms: ['Copernicus (Heliocentric)', 'Galileo (Telescope)', 'Newton (Laws of Motion)', 'Scientific Method'] },
      // RED HERRING: "Canton System" — students often think China was completely isolated; the Canton System was controlled limited trade, not full isolation
      { name: 'Asian Responses to European Contact', theme: 'SIO', color: 'blue', terms: ['Tokugawa Japan Isolation', 'Canton System (China)', 'Mughal Trade with Europeans', 'Spice Wars (Maluku)'] },
      { name: 'Colonial Society Hierarchies', theme: 'SOC', color: 'purple', terms: ['Casta System', 'Creoles vs. Peninsulares', 'Mestizos', 'Syncretism (Religion and Culture)'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 4: Transoceanic Interconnections (1450-1750)',
    categories: [
      // RED HERRING: "Silver Trade" — students must know silver went primarily to China (to pay for luxury goods), not to Europe
      { name: 'Global Silver Trade', theme: 'SIO', color: 'yellow', terms: ['Potosí Silver Mines', 'Manila Galleons', 'Spanish Silver to China', 'Price Revolution in Europe'] },
      { name: 'Enlightenment Ideas', theme: 'CDI', color: 'green', terms: ['John Locke (Natural Rights)', 'Voltaire (Tolerance)', 'Montesquieu (Separation of Powers)', 'Rousseau (Social Contract)'] },
      { name: 'Mercantilism and Trade Companies', theme: 'SIO', color: 'blue', terms: ['Joint-Stock Companies', 'Navigation Acts', 'Favorable Balance of Trade', 'Colonial Raw Materials'] },
      { name: 'European Religious Conflicts', theme: 'CDI', color: 'purple', terms: ["Thirty Years' War", 'Peace of Westphalia', 'Huguenots in France', 'Spanish Inquisition'] },
    ],
  },

  // ══════════ UNIT 5: Revolutions (1750-1900) ══════════

  {
    subject: 'apworld', period: 'Unit 5: Revolutions (1750-1900)',
    categories: [
      { name: 'Major Political Revolutions', theme: 'STA', color: 'yellow', terms: ['French Revolution', 'Haitian Revolution', 'Latin American Independence', 'American Revolution'] },
      // RED HERRING: "Berlin Conference" — sounds like a diplomatic peace deal but it was actually the European partition of Africa
      { name: 'Age of Imperialism Key Events', theme: 'SIO', color: 'green', terms: ['Scramble for Africa', 'Opium Wars (China)', 'Sepoy Rebellion (India)', 'Berlin Conference 1884'] },
      { name: 'Nationalism Movements', theme: 'SOC', color: 'blue', terms: ['Italian Unification (Garibaldi)', 'German Unification (Bismarck)', 'Meiji Restoration (Japan)', 'Zionism'] },
      { name: 'Enlightenment Principles in Revolutions', theme: 'STA', color: 'purple', terms: ['Social Contract Theory', 'Natural Rights', 'Separation of Powers', 'Popular Sovereignty'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 5: Revolutions (1750-1900)',
    categories: [
      { name: 'Industrial Revolution in Britain', theme: 'SIO', color: 'yellow', terms: ['Steam Engine (Watt)', 'Factory System', 'Coal and Iron Production', 'Manchester Cotton Mills'] },
      { name: 'Social Impact of Industrialization', theme: 'SOC', color: 'green', terms: ['Urbanization', 'Child Labor', 'Labor Union Formation', 'Marxism and Socialism'] },
      // RED HERRING: "Boxer Rebellion" — students confuse it as anti-Qing; it was anti-FOREIGN, with Qing Dynasty initially supporting it
      { name: 'Resistance to Imperialism', theme: 'STA', color: 'blue', terms: ['Boxer Rebellion (China)', 'Taiping Rebellion (China)', 'Zulu Wars (South Africa)', 'Sepoy Rebellion (India)'] },
      { name: 'Independence Leaders', theme: 'STA', color: 'purple', terms: ['Simón Bolívar', 'Toussaint Louverture', 'José de San Martín', 'Miguel Hidalgo'] },
    ],
  },

  // ══════════ UNIT 6: Consequences of Industrialization (1750-1900) ══════════

  {
    subject: 'apworld', period: 'Unit 6: Consequences of Industrialization (1750-1900)',
    categories: [
      { name: 'British Global Empire', theme: 'SIO', color: 'yellow', terms: ['East India Company Rule', 'Suez Canal Control', 'Cape Colony (South Africa)', 'Raj in India'] },
      // RED HERRING: "Meiji Restoration" — students know Japan industrialized but must know it was a response to Western imperialism (Perry's arrival)
      { name: 'Meiji Japan', theme: 'STA', color: 'green', terms: ['Meiji Restoration (1868)', 'Industrialization from Above', 'Russo-Japanese War Victory', 'Westernization of Institutions'] },
      { name: 'New Economic Ideologies', theme: 'CDI', color: 'blue', terms: ['Liberalism (Free Markets)', 'Conservatism', 'Marxist Socialism', 'Early Feminism'] },
      { name: 'Abolition of Slavery Worldwide', theme: 'SOC', color: 'purple', terms: ['British Abolition 1833', 'Brazilian Abolition 1888 (Last)', 'Haitian Revolution as Catalyst', 'Cuban Abolition 1886'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 6: Consequences of Industrialization (1750-1900)',
    categories: [
      { name: 'Migration Patterns 1750-1900', theme: 'SOC', color: 'yellow', terms: ['Indentured Labor (Post-Slavery)', 'Chinese Coolies', 'Irish Famine Migration', 'European Settlement of Americas'] },
      { name: 'Imperialism in Africa', theme: 'SIO', color: 'green', terms: ['Scramble for Africa', 'Berlin Conference Partitions', 'Belgian Congo Exploitation', 'Ethiopian Resistance (Adwa)'] },
      // RED HERRING: "Social Darwinism" — students think it's a scientific theory; it's an ideology used to JUSTIFY imperialism and racism
      { name: 'Ideological Justifications for Imperialism', theme: 'CDI', color: 'blue', terms: ["White Man's Burden (Kipling)", 'Social Darwinism', 'Civilizing Mission', 'Manifest Destiny'] },
      { name: 'Imperialism in Asia', theme: 'SIO', color: 'purple', terms: ['Opium Wars and Unequal Treaties', 'Spheres of Influence in China', 'French Indochina', 'Dutch East Indies'] },
    ],
  },

  // ══════════ UNIT 7: Global Conflict (1900-Present) ══════════

  {
    subject: 'apworld', period: 'Unit 7: Global Conflict (1900-Present)',
    categories: [
      { name: 'WWI Causes (MAIN)', theme: 'STA', color: 'yellow', terms: ['Militarism', 'Alliance System', 'Imperialism Rivalries', 'Nationalism (Balkans)'] },
      // RED HERRING: "U-Boats" — students associate with WWI broadly but they were the specific reason the U.S. entered
      { name: 'WWI New Warfare', theme: 'SIO', color: 'green', terms: ['Trench Warfare', 'Poison Gas', 'Machine Guns', 'U-Boat Submarine Warfare'] },
      { name: 'WWI Aftermath and Settlement', theme: 'STA', color: 'blue', terms: ['Treaty of Versailles', 'League of Nations', 'Mandate System (Middle East)', 'Ottoman Empire Collapse'] },
      { name: 'Russian Revolution', theme: 'STA', color: 'purple', terms: ['Bolsheviks', 'Lenin', 'October Revolution 1917', 'Soviet Union Formation'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 7: Global Conflict (1900-Present)',
    categories: [
      { name: 'Rise of Fascism and Totalitarianism', theme: 'STA', color: 'yellow', terms: ['Mussolini (Italy)', 'Hitler (Nazi Germany)', 'Totalitarian State Control', 'Appeasement Policy'] },
      // RED HERRING: "Holocaust" — students know it's genocide but must connect it to the broader Nazi ideology of racial hierarchy
      { name: 'WWII Key Events', theme: 'SIO', color: 'green', terms: ['Blitzkrieg', 'Pearl Harbor', 'Holocaust (6 million Jews)', 'Atomic Bombings of Japan'] },
      { name: 'Interwar Period Crises', theme: 'SOC', color: 'blue', terms: ['Great Depression (Global)', 'Weimar Republic Instability', 'Soviet Five-Year Plans', 'Collectivization in USSR'] },
      { name: 'Chinese Communist Revolution', theme: 'STA', color: 'purple', terms: ['Sun Yat-sen', 'Mao Zedong', 'Long March', 'Communist Victory 1949'] },
    ],
  },

  // ══════════ UNIT 8: Cold War and Decolonization (1900-Present) ══════════

  {
    subject: 'apworld', period: 'Unit 8: Cold War and Decolonization (1900-Present)',
    categories: [
      { name: 'Cold War Global Conflicts', theme: 'STA', color: 'yellow', terms: ['Korean War', 'Cuban Missile Crisis', 'Berlin Wall', 'Soviet-Afghan War'] },
      { name: 'Decolonization Movements', theme: 'SOC', color: 'green', terms: ['Indian Independence (Gandhi)', 'Algerian War of Independence', 'Vietnamese Independence (Ho Chi Minh)', 'South African Apartheid'] },
      // RED HERRING: "Non-Aligned Movement" — students confuse it with neutrality; it was a deliberate third path rejecting both superpowers
      { name: 'Cold War Alliance Systems', theme: 'SIO', color: 'blue', terms: ['NATO (Western)', 'Warsaw Pact (Eastern)', 'Non-Aligned Movement', 'Proxy Wars in Asia/Africa'] },
      { name: 'Decolonization Leaders', theme: 'STA', color: 'purple', terms: ['Kwame Nkrumah (Ghana)', 'Jomo Kenyatta (Kenya)', 'Nelson Mandela (South Africa)', 'Ho Chi Minh (Vietnam)'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 8: Cold War and Decolonization (1900-Present)',
    categories: [
      { name: 'African Independence Movements', theme: 'STA', color: 'yellow', terms: ['Pan-Africanism', 'Kwame Nkrumah', 'Mau Mau Uprising (Kenya)', 'Year of Africa 1960'] },
      // RED HERRING: "OPEC" — students may think it's just economics; OPEC was a political weapon used by Arab states in the 1973 oil embargo
      { name: 'Middle East Conflicts', theme: 'STA', color: 'green', terms: ['Arab-Israeli Conflict', 'Iranian Revolution 1979', 'OPEC Oil Embargo 1973', 'Camp David Accords'] },
      { name: 'Economic "Tigers" of Asia', theme: 'SIO', color: 'blue', terms: ['South Korea', 'Taiwan', 'Singapore', 'Hong Kong'] },
      { name: 'Post-Cold War Crises', theme: 'STA', color: 'purple', terms: ['Soviet Collapse 1991', 'Rwandan Genocide', 'Yugoslav Wars', 'European Union Formation'] },
    ],
  },

  // ══════════ UNIT 9: Globalization (1900-Present) ══════════

  {
    subject: 'apworld', period: 'Unit 9: Globalization (1900-Present)',
    categories: [
      { name: 'Globalization and World Economy', theme: 'SIO', color: 'yellow', terms: ['World Trade Organization (WTO)', 'International Monetary Fund', 'Multinational Corporations', 'Free Trade Agreements'] },
      { name: 'Global Environmental Issues', theme: 'ENV', color: 'green', terms: ['Climate Change', 'Deforestation (Amazon)', 'Ozone Layer Depletion', 'Paris Climate Agreement 2015'] },
      // RED HERRING: "Refugee Crisis" — sounds like migration only; it's tested as a human rights failure of the international system
      { name: 'Global Human Rights', theme: 'SOC', color: 'blue', terms: ['UN Declaration of Human Rights', 'Genocide Convention', "Women's Rights Movements", 'Refugee Crisis'] },
      { name: 'Technology and the Modern World', theme: 'ENV', color: 'purple', terms: ['Green Revolution (Agriculture)', 'Nuclear Energy', 'Space Race Legacy', 'Medical Technology'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 9: Globalization (1900-Present)',
    categories: [
      { name: 'International Organizations', theme: 'STA', color: 'yellow', terms: ['United Nations', 'World Health Organization', 'International Court of Justice', 'NATO Post-Cold War'] },
      { name: 'Global Migration Patterns', theme: 'SOC', color: 'green', terms: ['Guest Worker Programs', 'Brain Drain (Skilled Migration)', 'Refugee Flows', 'Rural to Urban Migration'] },
      // RED HERRING: "K-Pop" — students may dismiss it as trivial; it's a serious example of cultural globalization and soft power
      { name: 'Cultural Globalization', theme: 'CDI', color: 'blue', terms: ['Hollywood Dominance', 'K-Pop Global Spread', 'Fast Food Chains Worldwide', 'FIFA World Cup'] },
      { name: 'Anti-Globalization Backlash', theme: 'SOC', color: 'purple', terms: ['WTO Protests (Seattle 1999)', 'Brexit', 'Trade War Nationalism', 'Religious Fundamentalism Resurgence'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 9: Globalization (1900-Present)',
    categories: [
      { name: 'Digital Age and Social Change', theme: 'CDI', color: 'yellow', terms: ['Social Media Revolutions', 'Arab Spring', 'Cybersecurity Threats', 'Artificial Intelligence'] },
      // RED HERRING: "IMF" — students think it helps poor countries; it's also controversial for imposing austerity conditions (structural adjustment)
      { name: 'Global Economic Institutions', theme: 'SIO', color: 'green', terms: ['IMF Structural Adjustment', 'World Bank Development Loans', 'Microfinance (Grameen Bank)', 'Free Market Capitalism'] },
      { name: 'Pandemic and Global Health', theme: 'ENV', color: 'blue', terms: ['HIV/AIDS Global Crisis', 'Ebola Outbreaks', 'COVID-19 Pandemic', 'WHO Coordination Role'] },
      { name: 'Religious Movements in Modern World', theme: 'CDI', color: 'purple', terms: ['Islamic Fundamentalism', 'Liberation Theology', 'Evangelical Christianity (Global)', 'Hindu Nationalism (BJP)'] },
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

export const SAMPLE_PUZZLES: Record<string, DailyPuzzle> = {
  apush: getDailyPuzzle('apush'),
  apworld: getDailyPuzzle('apworld'),
};