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
//  APUSH PUZZLES — Periods 1-9, many per period
// ────────────────────────────────────────────────────────────
const APUSH_PUZZLES: Omit<DailyPuzzle, 'id' | 'date'>[] = [
  // ── Period 1: 1491-1607 ──
  {
    subject: 'apush', period: 'Period 1: 1491-1607',
    categories: [
      { name: 'Native Societies', theme: 'SOC', color: 'yellow', terms: ['Iroquois Confederacy', 'Pueblo Peoples', 'Cahokia', 'Three Sisters Farming'] },
      { name: 'Spanish Exploration', theme: 'WOR', color: 'green', terms: ['Christopher Columbus', 'Hernan Cortes', 'Encomienda System', 'Treaty of Tordesillas'] },
      { name: 'Columbian Exchange', theme: 'ENV', color: 'blue', terms: ['Smallpox', 'Horses', 'Maize', 'Silver'] },
      { name: 'European Motives', theme: 'WXT', color: 'purple', terms: ['Gold', 'God', 'Glory', 'Mercantilism'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 1: 1491-1607',
    categories: [
      { name: 'Pre-Contact Civilizations', theme: 'SOC', color: 'yellow', terms: ['Aztec Empire', 'Inca Empire', 'Maya Civilization', 'Mississippian Culture'] },
      { name: 'Spanish Conquests', theme: 'WOR', color: 'green', terms: ['Fall of Tenochtitlan', 'Francisco Pizarro', 'Bartolome de las Casas', 'Valladolid Debate'] },
      { name: 'French and Dutch Exploration', theme: 'MIG', color: 'blue', terms: ['Jacques Cartier', 'Samuel de Champlain', 'Fur Trade', 'Henry Hudson'] },
      { name: 'African Diaspora Begins', theme: 'SOC', color: 'purple', terms: ['Middle Passage', 'Atlantic Slave Trade', 'Triangular Trade', 'Sugar Plantations'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 1: 1491-1607',
    categories: [
      { name: 'Environmental Transformations', theme: 'ENV', color: 'yellow', terms: ['Deforestation', 'Livestock Introduction', 'Crop Exchange', 'Disease Epidemics'] },
      { name: 'Spanish Colonial Society', theme: 'SOC', color: 'green', terms: ['Casta System', 'Mestizos', 'Mission System', 'Haciendas'] },
      { name: 'English Ambitions', theme: 'WOR', color: 'blue', terms: ['Roanoke Colony', 'Sir Walter Raleigh', 'Francis Drake', 'Spanish Armada'] },
      { name: 'Religious Motivations', theme: 'NAT', color: 'purple', terms: ['Catholic Missionaries', 'Protestant Reformation', 'Jesuits', 'Reconquista Legacy'] },
    ],
  },

  // ── Period 2: 1607-1754 ──
  {
    subject: 'apush', period: 'Period 2: 1607-1754',
    categories: [
      { name: 'Colonial Regions', theme: 'MIG', color: 'yellow', terms: ['Jamestown', 'Plymouth', 'Pennsylvania', 'Georgia'] },
      { name: 'Religious Movements', theme: 'SOC', color: 'green', terms: ['Puritans', 'Great Awakening', 'Roger Williams', 'Anne Hutchinson'] },
      { name: 'Economic Systems', theme: 'WXT', color: 'blue', terms: ['Mercantilism', 'Triangular Trade', 'Indentured Servitude', 'Tobacco Economy'] },
      { name: 'Colonial Conflicts', theme: 'WOR', color: 'purple', terms: ['King Philips War', 'Bacons Rebellion', 'Stono Rebellion', 'Salem Witch Trials'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 2: 1607-1754',
    categories: [
      { name: 'Chesapeake Colonies', theme: 'SOC', color: 'yellow', terms: ['House of Burgesses', 'Headright System', 'John Smith', 'Pocahontas'] },
      { name: 'New England Society', theme: 'NAT', color: 'green', terms: ['Mayflower Compact', 'Town Meetings', 'Harvard College', 'John Winthrop'] },
      { name: 'Middle Colonies', theme: 'MIG', color: 'blue', terms: ['William Penn', 'Quakers', 'New Amsterdam', 'Breadbasket Colonies'] },
      { name: 'Slavery Develops', theme: 'SOC', color: 'purple', terms: ['Slave Codes', 'Middle Passage', 'Plantation System', 'Bacons Rebellion'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 2: 1607-1754',
    categories: [
      { name: 'Colonial Governance', theme: 'PCE', color: 'yellow', terms: ['Salutary Neglect', 'Navigation Acts', 'Royal Colonies', 'Colonial Assemblies'] },
      { name: 'French and Indian War Causes', theme: 'WOR', color: 'green', terms: ['Ohio River Valley', 'Albany Plan of Union', 'Benjamin Franklin', 'George Washington'] },
      { name: 'Enlightenment in America', theme: 'NAT', color: 'blue', terms: ['John Locke', 'Natural Rights', 'Reason', 'Benjamin Franklin'] },
      { name: 'Southern Plantation Life', theme: 'WXT', color: 'purple', terms: ['Rice Cultivation', 'Indigo', 'Tidewater Aristocracy', 'Slave Labor'] },
    ],
  },

  // ── Period 3: 1754-1800 ──
  {
    subject: 'apush', period: 'Period 3: 1754-1800',
    categories: [
      { name: 'Revolutionary Ideals', theme: 'NAT', color: 'yellow', terms: ['Common Sense', 'Declaration of Independence', 'Natural Rights', 'Social Contract'] },
      { name: 'Key Battles', theme: 'WOR', color: 'green', terms: ['Lexington and Concord', 'Saratoga', 'Yorktown', 'Bunker Hill'] },
      { name: 'Constitutional Debates', theme: 'PCE', color: 'blue', terms: ['Federalist Papers', 'Great Compromise', 'Three-Fifths Compromise', 'Bill of Rights'] },
      { name: 'Colonial Resistance', theme: 'SOC', color: 'purple', terms: ['Boston Tea Party', 'Stamp Act Congress', 'Sons of Liberty', 'Committees of Correspondence'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 3: 1754-1800',
    categories: [
      { name: 'British Tax Acts', theme: 'WXT', color: 'yellow', terms: ['Stamp Act', 'Townshend Acts', 'Sugar Act', 'Tea Act'] },
      { name: 'Revolutionary Leaders', theme: 'NAT', color: 'green', terms: ['George Washington', 'Thomas Jefferson', 'John Adams', 'Benjamin Franklin'] },
      { name: 'Articles of Confederation', theme: 'PCE', color: 'blue', terms: ['Shays Rebellion', 'Northwest Ordinance', 'Weak Central Government', 'No Taxing Power'] },
      { name: 'Foreign Alliances', theme: 'WOR', color: 'purple', terms: ['Franco-American Alliance', 'Treaty of Paris 1783', 'Marquis de Lafayette', 'Baron von Steuben'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 3: 1754-1800',
    categories: [
      { name: 'Early Republic Crises', theme: 'PCE', color: 'yellow', terms: ['Whiskey Rebellion', 'XYZ Affair', 'Alien and Sedition Acts', 'Virginia and Kentucky Resolutions'] },
      { name: 'Hamiltons Financial Plan', theme: 'WXT', color: 'green', terms: ['National Bank', 'Assumption of Debt', 'Tariffs', 'Report on Manufactures'] },
      { name: 'Political Parties Form', theme: 'PCE', color: 'blue', terms: ['Federalists', 'Democratic-Republicans', 'Election of 1796', 'Election of 1800'] },
      { name: 'Washingtons Presidency', theme: 'NAT', color: 'purple', terms: ['Neutrality Proclamation', 'Farewell Address', 'Jays Treaty', 'Pinckneys Treaty'] },
    ],
  },

  // ── Period 4: 1800-1848 ──
  {
    subject: 'apush', period: 'Period 4: 1800-1848',
    categories: [
      { name: 'Economic Innovations', theme: 'WXT', color: 'yellow', terms: ['Cotton Gin', 'Steamboats', 'Lowell System', 'Mechanical Reaper'] },
      { name: 'Political Crises', theme: 'PCE', color: 'green', terms: ['Nullification Crisis', 'Corrupt Bargain', 'Indian Removal Act', 'Embargo Act'] },
      { name: "Henry Clay's American System", theme: 'PCE/WXT', color: 'blue', terms: ['Second Bank of the US', 'Protective Tariff', 'Erie Canal', 'American System'] },
      { name: 'Technological Shifts', theme: 'TEC', color: 'purple', terms: ['Steam Engine', 'Interchangeable Parts', 'Market Revolution', 'Monroe Doctrine'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 4: 1800-1848',
    categories: [
      { name: 'Jacksonian Democracy', theme: 'PCE', color: 'yellow', terms: ['Spoils System', 'Universal White Male Suffrage', 'Kitchen Cabinet', 'Bank War'] },
      { name: 'Reform Movements', theme: 'SOC', color: 'green', terms: ['Seneca Falls Convention', 'Temperance Movement', 'Abolitionism', 'Second Great Awakening'] },
      { name: 'Territorial Expansion', theme: 'MIG', color: 'blue', terms: ['Louisiana Purchase', 'Lewis and Clark', 'Missouri Compromise', 'Manifest Destiny'] },
      { name: 'Sectional Tensions', theme: 'NAT', color: 'purple', terms: ['Tariff of Abominations', 'States Rights', 'Slave vs Free States', 'Wilmot Proviso'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 4: 1800-1848',
    categories: [
      { name: 'War of 1812', theme: 'WOR', color: 'yellow', terms: ['Impressment', 'Battle of New Orleans', 'Hartford Convention', 'Treaty of Ghent'] },
      { name: 'Monroe Doctrine Era', theme: 'WOR', color: 'green', terms: ['Monroe Doctrine', 'Era of Good Feelings', 'Rush-Bagot Agreement', 'Adams-Onis Treaty'] },
      { name: 'Cultural Nationalism', theme: 'NAT', color: 'blue', terms: ['Hudson River School', 'Transcendentalism', 'Ralph Waldo Emerson', 'Henry David Thoreau'] },
      { name: 'Transportation Revolution', theme: 'WXT', color: 'purple', terms: ['National Road', 'Canal System', 'Railroad Expansion', 'Clipper Ships'] },
    ],
  },

  // ── Period 5: 1844-1877 ──
  {
    subject: 'apush', period: 'Period 5: 1844-1877',
    categories: [
      { name: 'Causes of Civil War', theme: 'PCE', color: 'yellow', terms: ['Kansas-Nebraska Act', 'Dred Scott Decision', 'Bleeding Kansas', 'John Brown'] },
      { name: 'Reconstruction Policies', theme: 'PCE', color: 'green', terms: ['Freedmens Bureau', 'Radical Republicans', 'Impeachment of Johnson', 'Military Reconstruction'] },
      { name: 'Constitutional Amendments', theme: 'NAT', color: 'blue', terms: ['13th Amendment', '14th Amendment', '15th Amendment', 'Civil Rights Act 1866'] },
      { name: 'Key Figures', theme: 'SOC', color: 'purple', terms: ['Abraham Lincoln', 'Frederick Douglass', 'Harriet Tubman', 'Ulysses S. Grant'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 5: 1844-1877',
    categories: [
      { name: 'Compromise of 1850', theme: 'PCE', color: 'yellow', terms: ['Fugitive Slave Act', 'Popular Sovereignty', 'California Statehood', 'Henry Clay'] },
      { name: 'Civil War Battles', theme: 'WOR', color: 'green', terms: ['Gettysburg', 'Antietam', 'Vicksburg', 'Fort Sumter'] },
      { name: 'Wartime Policies', theme: 'PCE', color: 'blue', terms: ['Emancipation Proclamation', 'Conscription', 'Habeas Corpus Suspension', 'Homestead Act'] },
      { name: 'Southern Society', theme: 'SOC', color: 'purple', terms: ['Plantation Economy', 'Slave Resistance', 'Underground Railroad', 'Uncle Toms Cabin'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 5: 1844-1877',
    categories: [
      { name: 'Reconstruction Amendments', theme: 'NAT', color: 'yellow', terms: ['Black Codes', 'Sharecropping', 'Carpetbaggers', 'Scalawags'] },
      { name: 'End of Reconstruction', theme: 'PCE', color: 'green', terms: ['Compromise of 1877', 'Redeemers', 'Jim Crow Laws', 'KKK'] },
      { name: 'Mexican-American War', theme: 'WOR', color: 'blue', terms: ['Treaty of Guadalupe Hidalgo', 'Mexican Cession', 'Wilmot Proviso', 'James K. Polk'] },
      { name: 'Abolitionist Movement', theme: 'SOC', color: 'purple', terms: ['William Lloyd Garrison', 'The Liberator', 'Sojourner Truth', 'Harriet Beecher Stowe'] },
    ],
  },

  // ── Period 6: 1865-1898 ──
  {
    subject: 'apush', period: 'Period 6: 1865-1898',
    categories: [
      { name: 'Captains of Industry', theme: 'WXT', color: 'yellow', terms: ['Andrew Carnegie', 'John D. Rockefeller', 'J.P. Morgan', 'Cornelius Vanderbilt'] },
      { name: 'Labor Movement', theme: 'SOC', color: 'green', terms: ['Knights of Labor', 'Haymarket Affair', 'Pullman Strike', 'American Federation of Labor'] },
      { name: 'Immigration Waves', theme: 'MIG', color: 'blue', terms: ['Ellis Island', 'Chinese Exclusion Act', 'Nativism', 'Settlement Houses'] },
      { name: 'Western Expansion', theme: 'ENV', color: 'purple', terms: ['Homestead Act', 'Transcontinental Railroad', 'Wounded Knee', 'Dawes Act'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 6: 1865-1898',
    categories: [
      { name: 'Gilded Age Politics', theme: 'PCE', color: 'yellow', terms: ['Pendleton Act', 'Political Machines', 'Boss Tweed', 'Mugwumps'] },
      { name: 'Social Darwinism', theme: 'SOC', color: 'green', terms: ['Gospel of Wealth', 'Herbert Spencer', 'Survival of the Fittest', 'Horatio Alger'] },
      { name: 'Populist Movement', theme: 'PCE', color: 'blue', terms: ['Farmers Alliance', 'Populist Party', 'William Jennings Bryan', 'Cross of Gold Speech'] },
      { name: 'Urbanization', theme: 'MIG', color: 'purple', terms: ['Tenements', 'Jane Addams', 'Hull House', 'How the Other Half Lives'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 6: 1865-1898',
    categories: [
      { name: 'Industrial Technology', theme: 'WXT', color: 'yellow', terms: ['Bessemer Process', 'Telephone', 'Light Bulb', 'Assembly Line'] },
      { name: 'Native American Displacement', theme: 'ENV', color: 'green', terms: ['Battle of Little Bighorn', 'Ghost Dance', 'Reservation System', 'Buffalo Extinction'] },
      { name: 'Rise of Big Business', theme: 'WXT', color: 'blue', terms: ['Trusts', 'Monopolies', 'Vertical Integration', 'Horizontal Integration'] },
      { name: 'Early Imperialism', theme: 'WOR', color: 'purple', terms: ['Spanish-American War', 'Yellow Journalism', 'USS Maine', 'Philippine Annexation'] },
    ],
  },

  // ── Period 7: 1890-1945 ──
  {
    subject: 'apush', period: 'Period 7: 1890-1945',
    categories: [
      { name: 'Progressive Reforms', theme: 'PCE', color: 'yellow', terms: ['Trust Busting', 'Pure Food and Drug Act', 'Muckrakers', '19th Amendment'] },
      { name: 'WWI and Aftermath', theme: 'WOR', color: 'green', terms: ['Lusitania', 'Zimmermann Telegram', 'Treaty of Versailles', 'League of Nations'] },
      { name: 'New Deal Programs', theme: 'WXT', color: 'blue', terms: ['Social Security Act', 'CCC', 'TVA', 'Wagner Act'] },
      { name: 'Roaring Twenties', theme: 'SOC', color: 'purple', terms: ['Harlem Renaissance', 'Prohibition', 'Flappers', 'Great Migration'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 7: 1890-1945',
    categories: [
      { name: 'WWI Causes', theme: 'WOR', color: 'yellow', terms: ['German U-Boats', 'Unrestricted Submarine Warfare', 'Attack on Lusitania', 'Mustard Gas'] },
      { name: 'WWI Home Front', theme: 'SOC', color: 'green', terms: ['War Industries Board', 'Espionage Act', 'Sedition Act', 'Committee on Public Information'] },
      { name: 'Red Scare', theme: 'PCE', color: 'blue', terms: ['Palmer Raids', 'Sacco and Vanzetti', 'Bolshevik Revolution Fear', 'Immigration Quota Acts'] },
      { name: 'Wilsons Fourteen Points', theme: 'WOR', color: 'purple', terms: ['Self-Determination', 'Freedom of the Seas', 'League of Nations', 'Open Diplomacy'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 7: 1890-1945',
    categories: [
      { name: 'Great Depression Causes', theme: 'WXT', color: 'yellow', terms: ['Stock Market Crash', 'Overproduction', 'Bank Failures', 'Dust Bowl'] },
      { name: 'FDR and New Deal', theme: 'PCE', color: 'green', terms: ['Fireside Chats', 'Court Packing Plan', 'First Hundred Days', 'Alphabet Agencies'] },
      { name: 'WWII Pacific Theater', theme: 'WOR', color: 'blue', terms: ['Pearl Harbor', 'Midway', 'Island Hopping', 'Hiroshima and Nagasaki'] },
      { name: 'WWII European Theater', theme: 'WOR', color: 'purple', terms: ['D-Day', 'Battle of the Bulge', 'Stalingrad', 'V-E Day'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 7: 1890-1945',
    categories: [
      { name: 'WWII Home Front', theme: 'SOC', color: 'yellow', terms: ['Rosie the Riveter', 'Japanese Internment', 'Rationing', 'War Bonds'] },
      { name: 'Progressive Era Leaders', theme: 'PCE', color: 'green', terms: ['Theodore Roosevelt', 'Woodrow Wilson', 'William Howard Taft', 'Robert La Follette'] },
      { name: 'Cultural Shifts 1920s', theme: 'SOC', color: 'blue', terms: ['Jazz Age', 'Lost Generation', 'Scopes Trial', 'Fundamentalism'] },
      { name: 'US Imperialism', theme: 'WOR', color: 'purple', terms: ['Open Door Policy', 'Roosevelt Corollary', 'Panama Canal', 'Dollar Diplomacy'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 7: 1890-1945',
    categories: [
      { name: 'Weapons of WWI', theme: 'WOR', color: 'yellow', terms: ['Trench Warfare', 'Machine Guns', 'Poison Gas', 'Tanks'] },
      { name: 'Treaty of Versailles Effects', theme: 'WOR', color: 'green', terms: ['War Guilt Clause', 'Reparations', 'Mandate System', 'Senate Rejection'] },
      { name: 'New Deal Opposition', theme: 'PCE', color: 'blue', terms: ['Huey Long', 'Father Coughlin', 'American Liberty League', 'Schechter v US'] },
      { name: 'Labor in the 1930s', theme: 'WXT', color: 'purple', terms: ['Sit-Down Strikes', 'CIO', 'Fair Labor Standards Act', 'National Labor Relations Board'] },
    ],
  },

  // ── Period 8: 1945-1980 ──
  {
    subject: 'apush', period: 'Period 8: 1945-1980',
    categories: [
      { name: 'Cold War Policies', theme: 'WOR', color: 'yellow', terms: ['Containment', 'Marshall Plan', 'NATO', 'Truman Doctrine'] },
      { name: 'Civil Rights Leaders', theme: 'SOC', color: 'green', terms: ['MLK Jr.', 'Rosa Parks', 'Malcolm X', 'Thurgood Marshall'] },
      { name: 'Vietnam Era', theme: 'PCE', color: 'blue', terms: ['Gulf of Tonkin', 'Tet Offensive', 'Kent State', 'War Powers Act'] },
      { name: 'Great Society', theme: 'WXT', color: 'purple', terms: ['Medicare', 'Medicaid', 'Head Start', 'Civil Rights Act 1964'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 8: 1945-1980',
    categories: [
      { name: 'Cold War Crises', theme: 'WOR', color: 'yellow', terms: ['Berlin Blockade', 'Korean War', 'Cuban Missile Crisis', 'Bay of Pigs'] },
      { name: 'McCarthyism', theme: 'PCE', color: 'green', terms: ['Red Scare', 'HUAC', 'Blacklisting', 'Army-McCarthy Hearings'] },
      { name: 'Space Race', theme: 'WXT', color: 'blue', terms: ['Sputnik', 'NASA', 'Apollo 11', 'Moon Landing'] },
      { name: 'Counterculture', theme: 'SOC', color: 'purple', terms: ['Woodstock', 'Hippie Movement', 'Anti-War Protests', 'Free Speech Movement'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 8: 1945-1980',
    categories: [
      { name: 'Civil Rights Milestones', theme: 'SOC', color: 'yellow', terms: ['Brown v Board', 'Montgomery Bus Boycott', 'March on Washington', 'Selma to Montgomery'] },
      { name: 'Womens Movement', theme: 'SOC', color: 'green', terms: ['Betty Friedan', 'NOW', 'ERA', 'Title IX'] },
      { name: 'Nixon Presidency', theme: 'PCE', color: 'blue', terms: ['Watergate', 'Detente', 'EPA Creation', 'Pentagon Papers'] },
      { name: 'Economic Challenges', theme: 'WXT', color: 'purple', terms: ['Stagflation', 'Oil Embargo', 'Rust Belt Decline', 'OPEC Crisis'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 8: 1945-1980',
    categories: [
      { name: 'Suburbanization', theme: 'MIG', color: 'yellow', terms: ['Levittown', 'GI Bill', 'Interstate Highways', 'White Flight'] },
      { name: 'Nuclear Age', theme: 'WOR', color: 'green', terms: ['Manhattan Project', 'Hydrogen Bomb', 'Mutual Assured Destruction', 'Arms Race'] },
      { name: 'Civil Rights Legislation', theme: 'PCE', color: 'blue', terms: ['Voting Rights Act 1965', 'Civil Rights Act 1964', 'Fair Housing Act', '24th Amendment'] },
      { name: 'Cold War Culture', theme: 'SOC', color: 'purple', terms: ['Duck and Cover', 'Fallout Shelters', 'Red Scare Films', 'Beat Generation'] },
    ],
  },

  // ── Period 9: 1980-Present ──
  {
    subject: 'apush', period: 'Period 9: 1980-Present',
    categories: [
      { name: 'Reagan Revolution', theme: 'PCE', color: 'yellow', terms: ['Reaganomics', 'Tax Cuts', 'Deregulation', 'Star Wars SDI'] },
      { name: 'End of Cold War', theme: 'WOR', color: 'green', terms: ['Fall of Berlin Wall', 'Glasnost', 'Perestroika', 'Soviet Collapse'] },
      { name: 'Technology Revolution', theme: 'WXT', color: 'blue', terms: ['Internet', 'Personal Computers', 'Silicon Valley', 'Dot-Com Bubble'] },
      { name: 'Post-9/11 America', theme: 'WOR', color: 'purple', terms: ['War on Terror', 'Patriot Act', 'Iraq War', 'Afghanistan War'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 9: 1980-Present',
    categories: [
      { name: 'Conservative Movement', theme: 'PCE', color: 'yellow', terms: ['Moral Majority', 'Contract with America', 'Newt Gingrich', 'Tea Party Movement'] },
      { name: 'Globalization', theme: 'WXT', color: 'green', terms: ['NAFTA', 'WTO', 'Outsourcing', 'Free Trade Agreements'] },
      { name: 'Social Movements', theme: 'SOC', color: 'blue', terms: ['Marriage Equality', 'Black Lives Matter', 'Me Too Movement', 'Immigration Debates'] },
      { name: 'Modern Conflicts', theme: 'WOR', color: 'purple', terms: ['Gulf War', 'September 11th', 'ISIS', 'Drone Warfare'] },
    ],
  },
  {
    subject: 'apush', period: 'Period 9: 1980-Present',
    categories: [
      { name: 'Clinton Era', theme: 'PCE', color: 'yellow', terms: ['Budget Surplus', 'NAFTA', 'Impeachment', 'Welfare Reform'] },
      { name: 'Obama Presidency', theme: 'PCE', color: 'green', terms: ['Affordable Care Act', 'Economic Recovery Act', 'Paris Climate Agreement', 'DACA'] },
      { name: 'Immigration Issues', theme: 'MIG', color: 'blue', terms: ['DREAM Act', 'Border Wall Debate', 'Sanctuary Cities', 'Family Separation'] },
      { name: 'Environmental Policy', theme: 'ENV', color: 'purple', terms: ['Climate Change Debate', 'Kyoto Protocol', 'EPA Regulations', 'Green New Deal'] },
    ],
  },
];

// ────────────────────────────────────────────────────────────
//  AP WORLD PUZZLES — Units 1-9, many per unit
// ────────────────────────────────────────────────────────────
const APWORLD_PUZZLES: Omit<DailyPuzzle, 'id' | 'date'>[] = [
  // ── Unit 1: 1200-1450 ──
  {
    subject: 'apworld', period: 'Unit 1: 1200-1450',
    categories: [
      { name: 'Major Empires', theme: 'STA', color: 'yellow', terms: ['Mongol Empire', 'Song Dynasty', 'Delhi Sultanate', 'Mali Empire'] },
      { name: 'Trade Networks', theme: 'SIO', color: 'green', terms: ['Silk Roads', 'Indian Ocean Trade', 'Trans-Saharan Trade', 'Hanseatic League'] },
      { name: 'Religious Spread', theme: 'SOC', color: 'blue', terms: ['Spread of Islam', 'Buddhist Monasteries', 'Christian Crusades', 'Bhakti Movement'] },
      { name: 'Innovations', theme: 'ENV', color: 'purple', terms: ['Printing Press', 'Gunpowder', 'Compass', 'Champa Rice'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 1: 1200-1450',
    categories: [
      { name: 'Mongol Impacts', theme: 'STA', color: 'yellow', terms: ['Pax Mongolica', 'Khanates', 'Genghis Khan', 'Yuan Dynasty'] },
      { name: 'African Kingdoms', theme: 'SIO', color: 'green', terms: ['Great Zimbabwe', 'Swahili City-States', 'Kingdom of Kongo', 'Mansa Musa'] },
      { name: 'Cultural Exchange', theme: 'SOC', color: 'blue', terms: ['Ibn Battuta', 'Marco Polo', 'Zheng He', 'Mansa Musas Hajj'] },
      { name: 'Disease and Environment', theme: 'ENV', color: 'purple', terms: ['Black Death', 'Little Ice Age', 'Deforestation', 'Famine'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 1: 1200-1450',
    categories: [
      { name: 'Song Dynasty Innovations', theme: 'STA', color: 'yellow', terms: ['Paper Money', 'Movable Type', 'Grand Canal', 'Steel Production'] },
      { name: 'Islamic Golden Age', theme: 'SOC', color: 'green', terms: ['House of Wisdom', 'Al-Khwarizmi', 'Ibn Sina', 'Algebra'] },
      { name: 'European Feudalism', theme: 'STA', color: 'blue', terms: ['Manorial System', 'Knights', 'Serfdom', 'Magna Carta'] },
      { name: 'Mesoamerican Civilizations', theme: 'SIO', color: 'purple', terms: ['Aztec Empire', 'Inca Empire', 'Chinampas', 'Quipu'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 1: 1200-1450',
    categories: [
      { name: 'Byzantine Empire', theme: 'STA', color: 'yellow', terms: ['Constantinople', 'Justinian Code', 'Eastern Orthodox Church', 'Hagia Sophia'] },
      { name: 'Crusades Impact', theme: 'SIO', color: 'green', terms: ['Jerusalem', 'Knights Templar', 'Cultural Diffusion', 'Trade Revival'] },
      { name: 'Mongol Military', theme: 'STA', color: 'blue', terms: ['Composite Bow', 'Siege Warfare', 'Cavalry Tactics', 'Psychological Warfare'] },
      { name: 'Agricultural Innovations', theme: 'ENV', color: 'purple', terms: ['Three-Field System', 'Heavy Plow', 'Water Mill', 'Crop Rotation'] },
    ],
  },

  // ── Unit 2: 1200-1450 (Cont.) ──
  {
    subject: 'apworld', period: 'Unit 2: 1200-1450',
    categories: [
      { name: 'State Building', theme: 'STA', color: 'yellow', terms: ['Ottoman Rise', 'Timbuktu', 'Khmer Empire', 'Majapahit Kingdom'] },
      { name: 'Intellectual Traditions', theme: 'SOC', color: 'green', terms: ['Neo-Confucianism', 'Scholasticism', 'Sufism', 'Hindu Philosophy'] },
      { name: 'Labor Systems', theme: 'SIO', color: 'blue', terms: ['Serfdom', 'Tribute Systems', 'Corvee Labor', 'Guild System'] },
      { name: 'Maritime Technology', theme: 'ENV', color: 'purple', terms: ['Dhow Ships', 'Lateen Sail', 'Astrolabe', 'Junk Ships'] },
    ],
  },

  // ── Unit 3: 1450-1750 ──
  {
    subject: 'apworld', period: 'Unit 3: 1450-1750',
    categories: [
      { name: 'Maritime Empires', theme: 'SIO', color: 'yellow', terms: ['Portuguese Trading Posts', 'Dutch East India Co.', 'Spanish Galleons', 'British Royal Navy'] },
      { name: 'Columbian Exchange', theme: 'ENV', color: 'green', terms: ['Smallpox', 'Potatoes', 'Silver Trade', 'Sugar Plantations'] },
      { name: 'Gunpowder Empires', theme: 'STA', color: 'blue', terms: ['Ottoman Empire', 'Safavid Dynasty', 'Mughal Empire', 'Ming Dynasty'] },
      { name: 'Forced Labor Systems', theme: 'SOC', color: 'purple', terms: ['Encomienda', 'Chattel Slavery', 'Indentured Servitude', 'Mita System'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 3: 1450-1750',
    categories: [
      { name: 'European Exploration', theme: 'SIO', color: 'yellow', terms: ['Vasco da Gama', 'Ferdinand Magellan', 'Bartolomeu Dias', 'Christopher Columbus'] },
      { name: 'Absolutism', theme: 'STA', color: 'green', terms: ['Louis XIV', 'Peter the Great', 'Divine Right of Kings', 'Palace of Versailles'] },
      { name: 'Protestant Reformation', theme: 'SOC', color: 'blue', terms: ['Martin Luther', '95 Theses', 'John Calvin', 'Counter-Reformation'] },
      { name: 'Asian Trade Powers', theme: 'SIO', color: 'purple', terms: ['Qing Dynasty', 'Tokugawa Shogunate', 'Canton System', 'Spice Islands'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 3: 1450-1750',
    categories: [
      { name: 'Atlantic Slave Trade', theme: 'SOC', color: 'yellow', terms: ['Middle Passage', 'Triangular Trade', 'Plantation Economy', 'Maroon Communities'] },
      { name: 'Scientific Revolution', theme: 'ENV', color: 'green', terms: ['Copernicus', 'Galileo', 'Isaac Newton', 'Scientific Method'] },
      { name: 'Ottoman Golden Age', theme: 'STA', color: 'blue', terms: ['Suleiman the Magnificent', 'Janissaries', 'Devshirme System', 'Millet System'] },
      { name: 'Mughal India', theme: 'STA', color: 'purple', terms: ['Akbar the Great', 'Taj Mahal', 'Din-i-Ilahi', 'Zamindari System'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 3: 1450-1750',
    categories: [
      { name: 'Silver Economy', theme: 'SIO', color: 'yellow', terms: ['Potosi Mines', 'Manila Galleon Trade', 'Spanish Silver', 'Chinese Silver Demand'] },
      { name: 'Colonial Societies', theme: 'SOC', color: 'green', terms: ['Casta System', 'Creoles', 'Peninsulares', 'Mestizos'] },
      { name: 'Tokugawa Japan', theme: 'STA', color: 'blue', terms: ['Sakoku Policy', 'Edo Period', 'Samurai Class', 'Bushido'] },
      { name: 'African Kingdoms Adapt', theme: 'STA', color: 'purple', terms: ['Kingdom of Dahomey', 'Asante Empire', 'Kongo Decline', 'Swahili Trade'] },
    ],
  },

  // ── Unit 4: 1450-1750 (Cont.) ──
  {
    subject: 'apworld', period: 'Unit 4: 1450-1750',
    categories: [
      { name: 'Enlightenment Thinkers', theme: 'SOC', color: 'yellow', terms: ['John Locke', 'Voltaire', 'Montesquieu', 'Rousseau'] },
      { name: 'Qing Dynasty', theme: 'STA', color: 'green', terms: ['Kangxi Emperor', 'Qianlong Emperor', 'Manchu Rule', 'Tribute System'] },
      { name: 'Mercantilism', theme: 'SIO', color: 'blue', terms: ['Joint-Stock Companies', 'Navigation Acts', 'Balance of Trade', 'Colonial Extraction'] },
      { name: 'Religious Conflicts', theme: 'SOC', color: 'purple', terms: ['Thirty Years War', 'Peace of Westphalia', 'Huguenots', 'Spanish Inquisition'] },
    ],
  },

  // ── Unit 5: 1750-1900 ──
  {
    subject: 'apworld', period: 'Unit 5: 1750-1900',
    categories: [
      { name: 'Revolutions', theme: 'STA', color: 'yellow', terms: ['French Revolution', 'Haitian Revolution', 'Latin American Revolutions', 'Industrial Revolution'] },
      { name: 'Imperialism', theme: 'SIO', color: 'green', terms: ['Scramble for Africa', 'Opium Wars', 'Sepoy Mutiny', 'Berlin Conference'] },
      { name: 'Nationalism', theme: 'SOC', color: 'blue', terms: ['Unification of Italy', 'Unification of Germany', 'Meiji Restoration', 'Zionism'] },
      { name: 'Enlightenment Ideas', theme: 'STA', color: 'purple', terms: ['Social Contract', 'Natural Rights', 'Separation of Powers', 'Popular Sovereignty'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 5: 1750-1900',
    categories: [
      { name: 'Industrial Revolution', theme: 'SIO', color: 'yellow', terms: ['Steam Engine', 'Factory System', 'Spinning Jenny', 'Coal Mining'] },
      { name: 'Social Effects of Industry', theme: 'SOC', color: 'green', terms: ['Urbanization', 'Child Labor', 'Labor Unions', 'Marxism'] },
      { name: 'Anti-Imperial Resistance', theme: 'STA', color: 'blue', terms: ['Boxer Rebellion', 'Taiping Rebellion', 'Zulu Resistance', 'Mahdist State'] },
      { name: 'Abolition Movements', theme: 'SOC', color: 'purple', terms: ['British Abolition Act', 'Brazilian Abolition', 'Haitian Revolution', 'Underground Railroad'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 5: 1750-1900',
    categories: [
      { name: 'Latin American Independence', theme: 'STA', color: 'yellow', terms: ['Simon Bolivar', 'Jose de San Martin', 'Toussaint Louverture', 'Mexican Independence'] },
      { name: 'British Empire Expansion', theme: 'SIO', color: 'green', terms: ['East India Company', 'Suez Canal', 'Cape Colony', 'White Mans Burden'] },
      { name: 'Meiji Japan', theme: 'STA', color: 'blue', terms: ['Meiji Restoration', 'Zaibatsu', 'Russo-Japanese War', 'Sino-Japanese War'] },
      { name: 'New Ideologies', theme: 'SOC', color: 'purple', terms: ['Liberalism', 'Conservatism', 'Socialism', 'Anarchism'] },
    ],
  },

  // ── Unit 6: 1900-Present ──
  {
    subject: 'apworld', period: 'Unit 6: 1900-Present',
    categories: [
      { name: 'WWI Causes', theme: 'STA', color: 'yellow', terms: ['Assassination of Archduke Franz Ferdinand', 'Alliance System', 'Militarism', 'Imperialism'] },
      { name: 'WWI Technology', theme: 'SIO', color: 'green', terms: ['Trench Warfare', 'Poison Gas', 'Machine Guns', 'U-Boats'] },
      { name: 'WWI Aftermath', theme: 'STA', color: 'blue', terms: ['Treaty of Versailles', 'League of Nations', 'Mandate System', 'Ottoman Collapse'] },
      { name: 'Russian Revolution', theme: 'STA', color: 'purple', terms: ['Bolsheviks', 'Lenin', 'October Revolution', 'Soviet Union Formation'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 6: 1900-Present',
    categories: [
      { name: 'Rise of Fascism', theme: 'STA', color: 'yellow', terms: ['Mussolini', 'Hitler', 'Totalitarianism', 'Appeasement'] },
      { name: 'WWII Key Events', theme: 'SIO', color: 'green', terms: ['Blitzkrieg', 'Pearl Harbor', 'Holocaust', 'Atomic Bomb'] },
      { name: 'Interwar Period', theme: 'SOC', color: 'blue', terms: ['Great Depression', 'Weimar Republic', 'Stalins Five Year Plans', 'Collectivization'] },
      { name: 'Chinese Revolution', theme: 'STA', color: 'purple', terms: ['Sun Yat-sen', 'Mao Zedong', 'Long March', 'Chinese Communist Party'] },
    ],
  },

  // ── Unit 7: 1900-Present ──
  {
    subject: 'apworld', period: 'Unit 7: 1900-Present',
    categories: [
      { name: 'World Wars', theme: 'STA', color: 'yellow', terms: ['Treaty of Versailles', 'League of Nations', 'D-Day', 'Atomic Bomb'] },
      { name: 'Decolonization', theme: 'SOC', color: 'green', terms: ['Indian Independence', 'Algerian War', 'Vietnam Independence', 'Apartheid'] },
      { name: 'Cold War Conflicts', theme: 'SIO', color: 'blue', terms: ['Korean War', 'Cuban Missile Crisis', 'Berlin Wall', 'Soviet-Afghan War'] },
      { name: 'Communist Revolutions', theme: 'STA', color: 'purple', terms: ['Russian Revolution', 'Chinese Communist Revolution', 'Cuban Revolution', 'Khmer Rouge'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 7: 1900-Present',
    categories: [
      { name: 'Decolonization in Africa', theme: 'STA', color: 'yellow', terms: ['Kwame Nkrumah', 'Jomo Kenyatta', 'Patrice Lumumba', 'Nelson Mandela'] },
      { name: 'Cold War Alliances', theme: 'SIO', color: 'green', terms: ['NATO', 'Warsaw Pact', 'Non-Aligned Movement', 'Proxy Wars'] },
      { name: 'Middle East Conflicts', theme: 'STA', color: 'blue', terms: ['Arab-Israeli Wars', 'Iranian Revolution', 'OPEC', 'Camp David Accords'] },
      { name: 'Asian Tigers', theme: 'SIO', color: 'purple', terms: ['South Korea', 'Taiwan', 'Singapore', 'Hong Kong'] },
    ],
  },

  // ── Unit 8: 1900-Present ──
  {
    subject: 'apworld', period: 'Unit 8: 1900-Present',
    categories: [
      { name: 'Globalization', theme: 'SIO', color: 'yellow', terms: ['World Trade Organization', 'Internet', 'Multinational Corporations', 'Cultural Diffusion'] },
      { name: 'Environmental Challenges', theme: 'ENV', color: 'green', terms: ['Climate Change', 'Deforestation', 'Ozone Depletion', 'Paris Agreement'] },
      { name: 'Human Rights', theme: 'SOC', color: 'blue', terms: ['Universal Declaration', 'Genocide Convention', 'Womens Rights', 'Refugee Crises'] },
      { name: 'Technology Revolution', theme: 'ENV', color: 'purple', terms: ['Green Revolution', 'Nuclear Energy', 'Space Exploration', 'Genetic Engineering'] },
    ],
  },
  {
    subject: 'apworld', period: 'Unit 8: 1900-Present',
    categories: [
      { name: 'Post-Cold War World', theme: 'STA', color: 'yellow', terms: ['EU Formation', 'Soviet Collapse', 'Rwandan Genocide', 'Yugoslav Wars'] },
      { name: 'Economic Systems', theme: 'SIO', color: 'green', terms: ['Free Market Capitalism', 'Mixed Economies', 'IMF and World Bank', 'Microfinance'] },
      { name: 'Pandemic and Disease', theme: 'ENV', color: 'blue', terms: ['HIV/AIDS Crisis', 'Ebola Outbreak', 'COVID-19', 'WHO Response'] },
      { name: 'Digital Age', theme: 'SOC', color: 'purple', terms: ['Social Media', 'Arab Spring', 'Cyber Warfare', 'Artificial Intelligence'] },
    ],
  },

  // ── Unit 9: Extra Modern ──
  {
    subject: 'apworld', period: 'Unit 9: Globalization',
    categories: [
      { name: 'International Organizations', theme: 'STA', color: 'yellow', terms: ['United Nations', 'World Health Organization', 'International Criminal Court', 'NATO'] },
      { name: 'Migration Patterns', theme: 'SOC', color: 'green', terms: ['Guest Workers', 'Brain Drain', 'Refugee Movements', 'Urbanization'] },
      { name: 'Cultural Globalization', theme: 'SIO', color: 'blue', terms: ['Hollywood Influence', 'K-Pop Phenomenon', 'Fast Food Chains', 'World Cup'] },
      { name: 'Resistance to Globalization', theme: 'SOC', color: 'purple', terms: ['Anti-Globalization Protests', 'Brexit', 'Trade Wars', 'Nationalism Revival'] },
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
