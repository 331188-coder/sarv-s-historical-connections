export interface Chapter {
  number: number;
  title: string;
  url: string;
}

export interface Period {
  id: number;
  name: string;
  years: string;
  themes: string[];
  keyTopics: string[];
  chapters: Chapter[];
}

export const APUSH_PERIODS: Period[] = [
  {
    id: 1, name: 'Period 1', years: '1491-1607', themes: ['MIG', 'WOR', 'ENV'],
    keyTopics: ['Native American societies before European contact', 'European exploration and early colonization', 'Columbian Exchange and its environmental impact', 'Spanish, French, and English motives for colonization'],
    chapters: [
      { number: 1, title: 'New World Beginnings', url: 'https://www.apnotes.net/notes-17e/ch1-17e.html' },
      { number: 2, title: 'The Contest for North America', url: 'https://www.apnotes.net/notes-17e/ch2-17e.html' },
    ],
  },
  {
    id: 2, name: 'Period 2', years: '1607-1754', themes: ['MIG', 'SOC', 'PCE', 'WXT'],
    keyTopics: ['Chesapeake and New England colonial development', 'Transatlantic trade and the growth of slavery', 'Colonial society, religion, and the Great Awakening', 'Relations with Native Americans'],
    chapters: [
      { number: 3, title: 'Settling the English Colonies', url: 'https://www.apnotes.net/notes-17e/ch3-17e.html' },
      { number: 4, title: 'American Life in the 17th Century', url: 'https://www.apnotes.net/notes-17e/ch4-17e.html' },
      { number: 5, title: 'Colonial Society on the Eve of Revolution', url: 'https://www.apnotes.net/notes-17e/ch5-17e.html' },
    ],
  },
  {
    id: 3, name: 'Period 3', years: '1754-1800', themes: ['PCE', 'SOC', 'NAT', 'WOR'],
    keyTopics: ['French and Indian War and its consequences', 'Road to Revolution and colonial resistance', 'The American Revolution and its ideals', 'The Constitution, federalism, and early republic'],
    chapters: [
      { number: 6, title: 'The Road to Revolution', url: 'https://www.apnotes.net/notes-17e/ch6-17e.html' },
      { number: 7, title: 'America Secedes from the Empire', url: 'https://www.apnotes.net/notes-17e/ch7-17e.html' },
      { number: 8, title: 'The Confederation and the Constitution', url: 'https://www.apnotes.net/notes-17e/ch8-17e.html' },
      { number: 9, title: 'Launching the New Ship of State', url: 'https://www.apnotes.net/notes-17e/ch9-17e.html' },
    ],
  },
  {
    id: 4, name: 'Period 4', years: '1800-1848', themes: ['PCE', 'WXT', 'NAT', 'SOC'],
    keyTopics: ['Jeffersonian and Jacksonian democracy', 'Market Revolution and economic transformation', 'Manifest Destiny and territorial expansion', 'Reform movements and the Second Great Awakening'],
    chapters: [
      { number: 10, title: 'The Triumphs and Travails of the Jeffersonian Republic', url: 'https://www.apnotes.net/notes-17e/ch10-17e.html' },
      { number: 11, title: 'The War of 1812 and the Upsurge of Nationalism', url: 'https://www.apnotes.net/notes-17e/ch11-17e.html' },
      { number: 12, title: 'The Rise of a Mass Democracy', url: 'https://www.apnotes.net/notes-17e/ch12-17e.html' },
      { number: 13, title: 'Forging the National Economy', url: 'https://www.apnotes.net/notes-17e/ch13-17e.html' },
      { number: 14, title: 'The Ferment of Reform and Culture', url: 'https://www.apnotes.net/notes-17e/ch14-17e.html' },
      { number: 15, title: 'The South and Slavery', url: 'https://www.apnotes.net/notes-17e/ch15-17e.html' },
      { number: 16, title: 'Manifest Destiny and Its Legacy', url: 'https://www.apnotes.net/notes-17e/ch16-17e.html' },
    ],
  },
  {
    id: 5, name: 'Period 5', years: '1844-1877', themes: ['PCE', 'SOC', 'NAT', 'WXT'],
    keyTopics: ['Sectional crisis and the road to Civil War', 'The Civil War: causes, course, and consequences', 'Reconstruction and its successes and failures', 'Constitutional amendments (13th, 14th, 15th)'],
    chapters: [
      { number: 17, title: 'Renewing the Sectional Struggle', url: 'https://www.apnotes.net/notes-17e/ch17-17e.html' },
      { number: 18, title: 'Drifting Toward Disunion', url: 'https://www.apnotes.net/notes-17e/ch18-17e.html' },
      { number: 19, title: 'Girding for War: The North and the South', url: 'https://www.apnotes.net/notes-17e/ch19-17e.html' },
      { number: 20, title: 'The Furnace of Civil War', url: 'https://www.apnotes.net/notes-17e/ch20-17e.html' },
      { number: 21, title: 'The Ordeal of Reconstruction', url: 'https://www.apnotes.net/notes-17e/ch21-17e.html' },
    ],
  },
  {
    id: 6, name: 'Period 6', years: '1865-1898', themes: ['WXT', 'MIG', 'SOC', 'PCE'],
    keyTopics: ['Industrialization and the rise of big business', 'Urbanization and immigration', 'The Gilded Age and political machines', 'Western expansion and Native American resistance'],
    chapters: [
      { number: 22, title: 'The Industrial Era Dawns', url: 'https://www.apnotes.net/notes-17e/ch22-17e.html' },
      { number: 23, title: 'Political Paralysis in the Gilded Age', url: 'https://www.apnotes.net/notes-17e/ch23-17e.html' },
      { number: 24, title: 'America Moves to the City', url: 'https://www.apnotes.net/notes-17e/ch24-17e.html' },
      { number: 25, title: 'The Conquest of the West', url: 'https://www.apnotes.net/notes-17e/ch25-17e.html' },
      { number: 26, title: 'Rumbles of Discontent', url: 'https://www.apnotes.net/notes-17e/ch26-17e.html' },
    ],
  },
  {
    id: 7, name: 'Period 7', years: '1890-1945', themes: ['WOR', 'PCE', 'WXT', 'SOC'],
    keyTopics: ['American imperialism and the Spanish-American War', 'Progressive Era reforms', 'World War I and its aftermath', 'The Roaring Twenties, Great Depression, and New Deal', 'World War II'],
    chapters: [
      { number: 27, title: 'Empire and Expansion', url: 'https://www.apnotes.net/notes-17e/ch27-17e.html' },
      { number: 28, title: 'Progressivism and the Republican Roosevelt', url: 'https://www.apnotes.net/notes-17e/ch28-17e.html' },
      { number: 29, title: 'Wilsonian Progressivism at Home and Abroad', url: 'https://www.apnotes.net/notes-17e/ch29-17e.html' },
      { number: 30, title: 'American Life in the "Roaring Twenties"', url: 'https://www.apnotes.net/notes-17e/ch30-17e.html' },
      { number: 31, title: 'The Great Depression and the New Deal', url: 'https://www.apnotes.net/notes-17e/ch31-17e.html' },
      { number: 32, title: 'Franklin D. Roosevelt and the Shadow of War', url: 'https://www.apnotes.net/notes-17e/ch32-17e.html' },
      { number: 33, title: 'America in World War II', url: 'https://www.apnotes.net/notes-17e/ch33-17e.html' },
    ],
  },
  {
    id: 8, name: 'Period 8', years: '1945-1980', themes: ['PCE', 'WOR', 'SOC', 'NAT'],
    keyTopics: ['The Cold War and containment policy', 'Civil Rights Movement', 'The Vietnam War and domestic protest', 'Great Society programs and cultural shifts'],
    chapters: [
      { number: 34, title: 'The Cold War Begins', url: 'https://www.apnotes.net/notes-17e/ch34-17e.html' },
      { number: 35, title: 'American Zenith', url: 'https://www.apnotes.net/notes-17e/ch35-17e.html' },
      { number: 36, title: 'The Stormy Sixties', url: 'https://www.apnotes.net/notes-17e/ch36-17e.html' },
      { number: 37, title: 'A Sea of Troubles', url: 'https://www.apnotes.net/notes-17e/ch37-17e.html' },
    ],
  },
  {
    id: 9, name: 'Period 9', years: '1980-Present', themes: ['PCE', 'WOR', 'WXT', 'SOC'],
    keyTopics: ['Conservative resurgence under Reagan', 'End of the Cold War', 'Globalization and technological change', 'Post-9/11 America and contemporary issues'],
    chapters: [
      { number: 38, title: 'The Resurgence of Conservatism', url: 'https://www.apnotes.net/notes-17e/ch38-17e.html' },
      { number: 39, title: 'America Confronts the Post-Cold War Era', url: 'https://www.apnotes.net/notes-17e/ch39-17e.html' },
      { number: 40, title: 'The American People Face a New Century', url: 'https://www.apnotes.net/notes-17e/ch40-17e.html' },
    ],
  },
];

export const AP_WORLD_PERIODS: Period[] = [
  {
    id: 1, name: 'Unit 1', years: '1200-1450', themes: ['SIO', 'SOC', 'STA', 'ENV'],
    keyTopics: ['The Global Tapestry: Song China, Abbasid Caliphate, South and Southeast Asia', 'Dar al-Islam and the spread of Islam', 'Mongol Empire and trans-Eurasian trade', 'State-building in the Americas (Aztec, Inca)'],
    chapters: [
      { number: 1, title: 'Developments in East Asia', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-1-the-global-tapestry-1200-1450/Developments-In-East-Asia' },
      { number: 2, title: 'Developments in Dar al-Islam', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-1-the-global-tapestry-1200-1450/Developments-In-Dar-Al-Islam' },
      { number: 3, title: 'Developments in South and Southeast Asia', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-1-the-global-tapestry-1200-1450/Developments-In-South-And-Southeast-Asia' },
      { number: 4, title: 'State Building in the Americas', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-1-the-global-tapestry-1200-1450/State-Building-In-The-Americas' },
      { number: 5, title: 'State Building in Africa', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-1-the-global-tapestry-1200-1450/State-Building-In-Africa' },
      { number: 6, title: 'Developments in Europe', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-1-the-global-tapestry-1200-1450/Developments-In-Europe' },
    ],
  },
  {
    id: 2, name: 'Unit 2', years: '1200-1450', themes: ['SIO', 'ENV', 'STA'],
    keyTopics: ['Silk Roads, Indian Ocean, and Trans-Saharan trade networks', 'Cultural and technological diffusion', 'Effects of the Mongol Empire on trade', 'Environmental and demographic effects of trade'],
    chapters: [
      { number: 1, title: 'The Silk Roads', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-2-networks-of-exchange-1200-1450/The-Silk-Roads' },
      { number: 2, title: 'The Mongol Empire', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-2-networks-of-exchange-1200-1450/The-Mongol-Empire-And-The-Making-Of-The-Modern-World' },
      { number: 3, title: 'Exchange in the Indian Ocean', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-2-networks-of-exchange-1200-1450/Exchange-In-The-Indian-Ocean' },
      { number: 4, title: 'Trans-Saharan Trade Routes', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-2-networks-of-exchange-1200-1450/Trans-Saharan-Trade-Routes' },
    ],
  },
  {
    id: 3, name: 'Unit 3', years: '1450-1750', themes: ['SIO', 'STA', 'SOC', 'ENV'],
    keyTopics: ['European maritime empires and exploration', 'Columbian Exchange', 'Gunpowder empires (Ottoman, Safavid, Mughal)', 'Forced labor systems and the Atlantic slave trade'],
    chapters: [
      { number: 1, title: 'Empires Expand', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-3-land-based-empires-1450-1750/Empires-Expand' },
      { number: 2, title: 'Empires: Administration', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-3-land-based-empires-1450-1750/Empires-Administration' },
      { number: 3, title: 'Empires: Belief Systems', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-3-land-based-empires-1450-1750/Empires-Belief-Systems' },
    ],
  },
  {
    id: 4, name: 'Unit 4', years: '1450-1750', themes: ['SIO', 'SOC', 'STA'],
    keyTopics: ['Transoceanic interconnections', 'Maritime trading companies', 'Internal and external challenges to state power', 'Changing social hierarchies'],
    chapters: [
      { number: 1, title: 'Technological Innovations', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-4-transoceanic-interconnections-1450-1750/Technological-Innovations-From-1450-To-1750' },
      { number: 2, title: 'Exploration: Causes and Events', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-4-transoceanic-interconnections-1450-1750/Exploration-Causes-And-Events-From-1450-To-1750' },
      { number: 3, title: 'Columbian Exchange', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-4-transoceanic-interconnections-1450-1750/Columbian-Exchange' },
      { number: 4, title: 'Maritime Empires Established', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-4-transoceanic-interconnections-1450-1750/Maritime-Empires-Established' },
    ],
  },
  {
    id: 5, name: 'Unit 5', years: '1750-1900', themes: ['STA', 'SOC', 'SIO'],
    keyTopics: ['The Enlightenment and revolutions (French, Haitian, Latin American)', 'Industrialization and its global effects', 'Nationalism and the formation of nation-states', 'Imperialism and resistance'],
    chapters: [
      { number: 1, title: 'The Enlightenment', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-5-revolutions-1750-1900/The-Enlightenment' },
      { number: 2, title: 'Nationalism and Revolutions', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-5-revolutions-1750-1900/Nationalism-And-Revolutions-In-The-Period-From-1750-To-1900' },
      { number: 3, title: 'Industrial Revolution Begins', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-5-revolutions-1750-1900/Industrial-Revolution-Begins' },
    ],
  },
  {
    id: 6, name: 'Unit 6', years: '1750-1900', themes: ['SIO', 'SOC', 'ENV'],
    keyTopics: ['Consequences of industrialization', 'New forms of imperialism in Africa and Asia', 'Migration patterns and diaspora communities', 'Reform and resistance movements'],
    chapters: [
      { number: 1, title: 'Rationales for Imperialism', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-6-consequences-of-industrialization-1750-1900/Rationales-For-Imperialism-From-1750-To-1900' },
      { number: 2, title: 'State Expansion', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-6-consequences-of-industrialization-1750-1900/State-Expansion-From-1750-To-1900' },
      { number: 3, title: 'Indigenous Responses to State Expansion', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-6-consequences-of-industrialization-1750-1900/Indigenous-Responses-To-State-Expansion-From-1750-To-1900' },
    ],
  },
  {
    id: 7, name: 'Unit 7', years: '1900-Present', themes: ['STA', 'WOR', 'SOC'],
    keyTopics: ['Global conflicts: WWI, WWII, and the Cold War', 'Decolonization and independence movements', 'Communist revolutions (Russia, China)', 'Mass atrocities and human rights developments'],
    chapters: [
      { number: 1, title: 'Shifting Power After 1900', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-7-global-conflict-1900-present/Shifting-Power-After-1900' },
      { number: 2, title: 'Causes of World War I', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-7-global-conflict-1900-present/Causes-Of-World-War-I' },
      { number: 3, title: 'World War I', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-7-global-conflict-1900-present/World-War-I-A-Global-Perspective' },
      { number: 4, title: 'World War II', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-7-global-conflict-1900-present/Economy-In-The-Interwar-Period' },
    ],
  },
  {
    id: 8, name: 'Unit 8', years: '1900-Present', themes: ['SIO', 'ENV', 'SOC'],
    keyTopics: ['Globalization and economic interdependence', 'Technology and cultural change', 'Environmental challenges and sustainability', 'Movements for social justice and equality'],
    chapters: [
      { number: 1, title: 'Cold War', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-8-cold-war-and-decolonization-1900-present/Setting-The-Stage-For-The-Cold-War-And-Decolonization' },
      { number: 2, title: 'Decolonization After 1900', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-8-cold-war-and-decolonization-1900-present/Decolonization-After-1900' },
      { number: 3, title: 'Newly Independent States', url: 'https://www.doveslibrary.com/history-and-social-sciences/ap-world-history/unit-8-cold-war-and-decolonization-1900-present/Newly-Independent-States' },
    ],
  },
];
