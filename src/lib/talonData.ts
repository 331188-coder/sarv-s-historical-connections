export type SpriteCategory = 'Social' | 'Political' | 'Religious' | 'Intellectual' | 'Technological' | 'Economic';
export type SpriteIconKey = 'social' | 'political' | 'religious' | 'intellectual' | 'technological' | 'economic';

export interface TalonCard {
  event: string;
  category: SpriteCategory;
  period: string;
  explanation: string;
}

export const APUSH_TALON_CARDS: TalonCard[] = [
  { event: 'Great Awakening', category: 'Religious', period: 'Period 2', explanation: 'The Great Awakening reshaped colonial religious life through revival preaching, personal conversion, and challenges to established church authority.' },
  { event: 'Cotton Gin', category: 'Technological', period: 'Period 4', explanation: 'The cotton gin was a technological innovation that accelerated cotton processing and transformed the scale of plantation agriculture.' },
  { event: 'Seneca Falls Convention', category: 'Social', period: 'Period 4', explanation: 'Seneca Falls was a social reform milestone because it organized activism around women’s rights, civic equality, and legal status.' },
  { event: 'Marbury v. Madison', category: 'Political', period: 'Period 3', explanation: 'Marbury v. Madison is political because it established judicial review and clarified the power of the federal government.' },
  { event: 'Mercantilism', category: 'Economic', period: 'Period 2', explanation: 'Mercantilism focused on trade regulation, colonial production, and wealth accumulation, making it a core economic framework.' },
  { event: 'Enlightenment Ideas', category: 'Intellectual', period: 'Period 3', explanation: 'Enlightenment thought emphasized reason, natural rights, and political theory, placing it in the intellectual category.' },
  { event: 'Transcontinental Railroad', category: 'Technological', period: 'Period 6', explanation: 'The transcontinental railroad was a transportation technology that compressed time, expanded markets, and linked regions.' },
  { event: 'Prohibition', category: 'Social', period: 'Period 7', explanation: 'Prohibition reflected social values, moral reform campaigns, and debates over behavior, culture, and public life.' },
  { event: 'New Deal', category: 'Economic', period: 'Period 7', explanation: 'The New Deal centered on economic recovery, relief, labor regulation, and federal intervention in markets.' },
  { event: 'Monroe Doctrine', category: 'Political', period: 'Period 4', explanation: 'The Monroe Doctrine was a statement of foreign policy and national power, so it fits the political category.' },
  { event: 'Second Great Awakening', category: 'Religious', period: 'Period 4', explanation: 'The Second Great Awakening was a religious revival movement that emphasized evangelical belief and personal salvation.' },
  { event: 'Harlem Renaissance', category: 'Intellectual', period: 'Period 7', explanation: 'The Harlem Renaissance is intellectual because it centered on literature, artistic production, ideas, and cultural critique.' },
  { event: 'Social Security Act', category: 'Economic', period: 'Period 7', explanation: 'The Social Security Act established a long-term economic safety net tied to welfare policy, labor security, and public benefits.' },
  { event: 'Emancipation Proclamation', category: 'Political', period: 'Period 5', explanation: 'The Emancipation Proclamation was a wartime political decision that redefined Union goals and federal policy.' },
  { event: 'Women’s Suffrage (19th Amendment)', category: 'Social', period: 'Period 7', explanation: 'Women’s suffrage reshaped civic participation and gender roles, making it a major social development.' },
  { event: 'Manhattan Project', category: 'Technological', period: 'Period 7', explanation: 'The Manhattan Project represents technological and scientific development because it applied advanced research to wartime production.' },
  { event: 'Federalist Papers', category: 'Intellectual', period: 'Period 3', explanation: 'The Federalist Papers belong to the intellectual category because they argued through political theory and constitutional reasoning.' },
  { event: 'Trail of Tears', category: 'Social', period: 'Period 4', explanation: 'The Trail of Tears reshaped communities, migration patterns, and social relations through forced removal.' },
  { event: 'Homestead Act', category: 'Economic', period: 'Period 5', explanation: 'The Homestead Act was economic because it distributed land, encouraged settlement, and structured access to productive resources.' },
  { event: 'Salem Witch Trials', category: 'Religious', period: 'Period 2', explanation: 'The Salem Witch Trials were deeply tied to religious belief, spiritual anxiety, and Puritan culture.' },
  { event: 'Interstate Highway System', category: 'Technological', period: 'Period 8', explanation: 'The Interstate Highway System was a major infrastructure technology project that transformed mobility and logistics.' },
  { event: 'Containment Policy', category: 'Political', period: 'Period 8', explanation: 'Containment was a political strategy guiding Cold War foreign policy, diplomacy, and state decision-making.' },
  { event: 'Civil Rights Act of 1964', category: 'Social', period: 'Period 8', explanation: 'The Civil Rights Act addressed social inequality, civil status, and access to public life.' },
  { event: 'Common Sense (Paine)', category: 'Intellectual', period: 'Period 3', explanation: 'Common Sense spread revolutionary ideas and argumentation, making it best understood as an intellectual development.' },
];

export const APWORLD_TALON_CARDS: TalonCard[] = [
  { event: 'Spread of Islam via Trade', category: 'Religious', period: 'Unit 1', explanation: 'This development is religious because it concerns belief systems, conversion, and the cultural spread of Islam through commercial networks.' },
  { event: 'Printing Press', category: 'Technological', period: 'Unit 1', explanation: 'The printing press is a technological breakthrough that transformed communication, literacy, and information circulation.' },
  { event: 'Columbian Exchange', category: 'Economic', period: 'Unit 4', explanation: 'The Columbian Exchange is often analyzed economically because it transformed crops, labor systems, consumption, and global production.' },
  { event: 'French Revolution', category: 'Political', period: 'Unit 5', explanation: 'The French Revolution is political because it centered on sovereignty, state authority, citizenship, and regime change.' },
  { event: 'Caste System in India', category: 'Social', period: 'Unit 1', explanation: 'The caste system structured hierarchy, status, and social interaction, placing it in the social category.' },
  { event: 'Enlightenment Philosophy', category: 'Intellectual', period: 'Unit 5', explanation: 'The Enlightenment was driven by ideas about reason, rights, and political theory, making it an intellectual movement.' },
  { event: 'Industrial Revolution', category: 'Technological', period: 'Unit 5', explanation: 'The Industrial Revolution is fundamentally technological because mechanization and new production methods drove the transformation.' },
  { event: 'Atlantic Slave Trade', category: 'Economic', period: 'Unit 4', explanation: 'The Atlantic slave trade was central to labor extraction, commodity production, and profit, which makes it economic.' },
  { event: 'Protestant Reformation', category: 'Religious', period: 'Unit 3', explanation: 'The Protestant Reformation challenged church doctrine and authority, placing it firmly in the religious category.' },
  { event: 'Scramble for Africa', category: 'Political', period: 'Unit 6', explanation: 'The Scramble for Africa involved imperial state competition, territorial claims, and colonial governance, so it is political.' },
  { event: 'Meiji Restoration', category: 'Political', period: 'Unit 5', explanation: 'The Meiji Restoration reorganized state power, institutions, and modernization strategy, making it political.' },
  { event: 'Gunpowder Weapons', category: 'Technological', period: 'Unit 3', explanation: 'Gunpowder weapons are a technological development because they changed military capability through new tools and systems.' },
  { event: 'Silk Road Trade', category: 'Economic', period: 'Unit 1', explanation: 'Silk Road exchange connected regions through trade, commercial specialization, and long-distance economic interaction.' },
  { event: 'Haitian Revolution', category: 'Social', period: 'Unit 5', explanation: 'The Haitian Revolution transformed slavery, race relations, and social order, making it especially important as a social development.' },
  { event: 'Scientific Revolution', category: 'Intellectual', period: 'Unit 3', explanation: 'The Scientific Revolution belongs in the intellectual category because it changed methods of knowledge, inquiry, and explanation.' },
  { event: 'Mongol Empire', category: 'Political', period: 'Unit 1', explanation: 'The Mongol Empire is political because it concerns conquest, empire building, governance, and the exercise of state power.' },
  { event: 'Decolonization Movements', category: 'Social', period: 'Unit 8', explanation: 'Decolonization movements mobilized populations, identity, and mass politics, making them a major social transformation.' },
  { event: 'Confucian Philosophy', category: 'Intellectual', period: 'Unit 1', explanation: 'Confucianism is categorized here as intellectual because it shaped ideas about ethics, education, governance, and social thought.' },
  { event: 'Joint-Stock Companies', category: 'Economic', period: 'Unit 4', explanation: 'Joint-stock companies reorganized investment, trade finance, and commercial risk, making them economic institutions.' },
  { event: 'Bhakti Movement', category: 'Religious', period: 'Unit 1', explanation: 'The Bhakti Movement emphasized devotional religious practice and spiritual connection, placing it in the religious category.' },
];

export function getDailyTalonCards(subject: 'apush' | 'apworld', count = 12): TalonCard[] {
  const pool = subject === 'apush' ? APUSH_TALON_CARDS : APWORLD_TALON_CARDS;
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const shuffled = [...pool].sort((a, b) => {
    const ha = hashStr(a.event + dayOfYear) & 0xffffffff;
    const hb = hashStr(b.event + dayOfYear) & 0xffffffff;
    return ha - hb;
  });
  return shuffled.slice(0, count);
}

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  }
  return h;
}

export const SPRITE_CATEGORIES: { name: SpriteCategory; color: string; icon: SpriteIconKey }[] = [
  { name: 'Social', color: 'hsl(var(--cat-yellow))', icon: 'social' },
  { name: 'Political', color: 'hsl(var(--cat-green))', icon: 'political' },
  { name: 'Religious', color: 'hsl(var(--cat-blue))', icon: 'religious' },
  { name: 'Intellectual', color: 'hsl(var(--cat-purple))', icon: 'intellectual' },
  { name: 'Technological', color: 'hsl(45 95% 60%)', icon: 'technological' },
  { name: 'Economic', color: 'hsl(15 70% 55%)', icon: 'economic' },
];
