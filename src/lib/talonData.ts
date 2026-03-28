export type SpriteCategory = 'Social' | 'Political' | 'Religious' | 'Intellectual' | 'Technological' | 'Economic';

export interface TalonCard {
  event: string;
  category: SpriteCategory;
  period: string;
  explanation: string;
}

export const APUSH_TALON_CARDS: TalonCard[] = [
  { event: 'Great Awakening', category: 'Religious', period: 'Period 2', explanation: 'The Great Awakening was a religious revival movement in the 1730s-1740s that emphasized personal piety and emotional religious experience, challenging established church authority.' },
  { event: 'Cotton Gin', category: 'Technological', period: 'Period 4', explanation: 'Eli Whitney\'s cotton gin (1793) revolutionized cotton processing, dramatically increasing production and entrenching the institution of slavery in the South.' },
  { event: 'Seneca Falls Convention', category: 'Social', period: 'Period 4', explanation: 'The 1848 Seneca Falls Convention launched the women\'s suffrage movement with the Declaration of Sentiments demanding equal rights for women.' },
  { event: 'Marbury v. Madison', category: 'Political', period: 'Period 3', explanation: 'This 1803 Supreme Court case established judicial review, giving the Court power to declare laws unconstitutional.' },
  { event: 'Mercantilism', category: 'Economic', period: 'Period 2', explanation: 'Mercantilism was the economic theory that a nation\'s wealth was measured by its gold/silver reserves, driving colonial trade policies.' },
  { event: 'Enlightenment Ideas', category: 'Intellectual', period: 'Period 3', explanation: 'Enlightenment philosophy emphasizing reason, natural rights, and social contract theory directly inspired the American Revolution.' },
  { event: 'Transcontinental Railroad', category: 'Technological', period: 'Period 6', explanation: 'Completed in 1869, it connected the East and West coasts, transforming commerce, migration, and the displacement of Native Americans.' },
  { event: 'Prohibition', category: 'Social', period: 'Period 7', explanation: 'The 18th Amendment (1920) banned alcohol, reflecting temperance movement values but leading to widespread bootlegging and organized crime.' },
  { event: 'New Deal', category: 'Economic', period: 'Period 7', explanation: 'FDR\'s New Deal programs (1933-1939) expanded federal government\'s role in the economy through relief, recovery, and reform measures.' },
  { event: 'Monroe Doctrine', category: 'Political', period: 'Period 4', explanation: 'Declared in 1823, it warned European powers against further colonization in the Americas, asserting U.S. influence in the Western Hemisphere.' },
  { event: 'Second Great Awakening', category: 'Religious', period: 'Period 4', explanation: 'This early 19th-century religious revival fueled reform movements including abolition, temperance, and women\'s rights.' },
  { event: 'Harlem Renaissance', category: 'Intellectual', period: 'Period 7', explanation: 'A 1920s cultural movement celebrating African American literature, art, music, and identity centered in Harlem, New York.' },
  { event: 'Social Security Act', category: 'Economic', period: 'Period 7', explanation: 'Signed in 1935, it created a safety net for elderly, unemployed, and disabled Americans, fundamentally changing the welfare state.' },
  { event: 'Emancipation Proclamation', category: 'Political', period: 'Period 5', explanation: 'Lincoln\'s 1863 executive order freed enslaved people in Confederate states, reframing the Civil War as a fight against slavery.' },
  { event: 'Women\'s Suffrage (19th Amendment)', category: 'Social', period: 'Period 7', explanation: 'Ratified in 1920, the 19th Amendment granted women the right to vote after decades of activism.' },
  { event: 'Manhattan Project', category: 'Technological', period: 'Period 7', explanation: 'The secret WWII project that developed atomic weapons, forever changing warfare and international relations.' },
  { event: 'Federalist Papers', category: 'Intellectual', period: 'Period 3', explanation: 'Written by Hamilton, Madison, and Jay to advocate for ratification of the Constitution, articulating key principles of governance.' },
  { event: 'Trail of Tears', category: 'Social', period: 'Period 4', explanation: 'The forced relocation of Native Americans from southeastern states to Oklahoma in the 1830s, resulting in thousands of deaths.' },
  { event: 'Homestead Act', category: 'Economic', period: 'Period 5', explanation: 'The 1862 act gave 160 acres of public land to settlers willing to farm it for five years, encouraging western migration.' },
  { event: 'Salem Witch Trials', category: 'Religious', period: 'Period 2', explanation: 'The 1692 hysteria in Massachusetts resulted in the execution of 20 people, reflecting Puritan religious anxieties and social tensions.' },
  { event: 'Interstate Highway System', category: 'Technological', period: 'Period 8', explanation: 'Authorized in 1956 under Eisenhower, it transformed American transportation, suburbanization, and the economy.' },
  { event: 'Containment Policy', category: 'Political', period: 'Period 8', explanation: 'The U.S. Cold War strategy to prevent the spread of communism, shaping foreign policy from Truman through Reagan.' },
  { event: 'Civil Rights Act of 1964', category: 'Social', period: 'Period 8', explanation: 'Landmark legislation outlawing discrimination based on race, color, religion, sex, or national origin.' },
  { event: 'Common Sense (Paine)', category: 'Intellectual', period: 'Period 3', explanation: 'Thomas Paine\'s 1776 pamphlet argued for independence from Britain, making Enlightenment ideas accessible to common colonists.' },
];

export const APWORLD_TALON_CARDS: TalonCard[] = [
  { event: 'Spread of Islam via Trade', category: 'Religious', period: 'Unit 1', explanation: 'Islam spread along trade routes through merchants and Sufi missionaries, establishing Muslim communities across Africa, South Asia, and Southeast Asia.' },
  { event: 'Printing Press', category: 'Technological', period: 'Unit 1', explanation: 'Gutenberg\'s printing press (c. 1440) revolutionized information dissemination, fueling the Renaissance, Reformation, and scientific revolution.' },
  { event: 'Columbian Exchange', category: 'Economic', period: 'Unit 4', explanation: 'The transfer of plants, animals, and diseases between the Old and New Worlds after 1492 transformed global agriculture and demographics.' },
  { event: 'French Revolution', category: 'Political', period: 'Unit 5', explanation: 'Beginning in 1789, it overthrew the monarchy, established republican ideals, and inspired revolutionary movements worldwide.' },
  { event: 'Caste System in India', category: 'Social', period: 'Unit 1', explanation: 'The hierarchical social system defined status and occupation by birth, deeply shaping Indian society for centuries.' },
  { event: 'Enlightenment Philosophy', category: 'Intellectual', period: 'Unit 5', explanation: 'European thinkers like Locke, Voltaire, and Rousseau championed reason, individual rights, and government by consent.' },
  { event: 'Industrial Revolution', category: 'Technological', period: 'Unit 5', explanation: 'Beginning in Britain c. 1760, mechanized production transformed economies, labor, urbanization, and global power dynamics.' },
  { event: 'Atlantic Slave Trade', category: 'Economic', period: 'Unit 4', explanation: 'The forced transportation of millions of Africans to the Americas created a brutal labor system that powered plantation economies.' },
  { event: 'Protestant Reformation', category: 'Religious', period: 'Unit 3', explanation: 'Martin Luther\'s 95 Theses (1517) challenged Catholic Church authority, splitting Western Christianity and reshaping European politics.' },
  { event: 'Scramble for Africa', category: 'Political', period: 'Unit 6', explanation: 'European powers divided Africa at the Berlin Conference (1884-85), establishing colonial control over nearly the entire continent.' },
  { event: 'Meiji Restoration', category: 'Political', period: 'Unit 5', explanation: 'Japan\'s 1868 modernization program rapidly industrialized the nation, creating a powerful military state that challenged Western imperialism.' },
  { event: 'Gunpowder Weapons', category: 'Technological', period: 'Unit 3', explanation: 'The spread of gunpowder technology enabled the rise of large centralized empires (Ottoman, Safavid, Mughal, Ming/Qing).' },
  { event: 'Silk Road Trade', category: 'Economic', period: 'Unit 1', explanation: 'Ancient trade networks connecting East Asia to the Mediterranean facilitated exchange of goods, ideas, religions, and diseases.' },
  { event: 'Haitian Revolution', category: 'Social', period: 'Unit 5', explanation: 'The only successful large-scale slave revolt (1791-1804), establishing Haiti as the first free Black republic in the Americas.' },
  { event: 'Scientific Revolution', category: 'Intellectual', period: 'Unit 3', explanation: 'The 16th-17th century shift to empirical observation and mathematical reasoning laid the foundation for modern science.' },
  { event: 'Mongol Empire', category: 'Political', period: 'Unit 1', explanation: 'The largest contiguous land empire in history facilitated trade, cultural exchange, and the spread of the Black Death across Eurasia.' },
  { event: 'Decolonization Movements', category: 'Social', period: 'Unit 8', explanation: 'Post-WWII independence movements across Africa and Asia ended centuries of European colonial rule.' },
  { event: 'Confucian Philosophy', category: 'Intellectual', period: 'Unit 1', explanation: 'Confucianism emphasized social harmony, filial piety, and meritocratic governance, shaping East Asian societies for millennia.' },
  { event: 'Joint-Stock Companies', category: 'Economic', period: 'Unit 4', explanation: 'Organizations like the Dutch East India Company pooled investor capital to fund exploration and trade, pioneering modern capitalism.' },
  { event: 'Bhakti Movement', category: 'Religious', period: 'Unit 1', explanation: 'A Hindu devotional movement emphasizing personal connection to God, challenging caste hierarchy and Brahmanical authority.' },
];

export function getDailyTalonCards(subject: 'apush' | 'apworld', count = 12): TalonCard[] {
  const pool = subject === 'apush' ? APUSH_TALON_CARDS : APWORLD_TALON_CARDS;
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  // Deterministic shuffle based on day
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

export const SPRITE_CATEGORIES: { name: SpriteCategory; color: string; icon: string }[] = [
  { name: 'Social', color: 'hsl(var(--cat-yellow))', icon: '👥' },
  { name: 'Political', color: 'hsl(var(--cat-green))', icon: '🏛️' },
  { name: 'Religious', color: 'hsl(var(--cat-blue))', icon: '⛪' },
  { name: 'Intellectual', color: 'hsl(var(--cat-purple))', icon: '📚' },
  { name: 'Technological', color: 'hsl(45, 95%, 60%)', icon: '⚙️' },
  { name: 'Economic', color: 'hsl(15, 70%, 55%)', icon: '💰' },
];
