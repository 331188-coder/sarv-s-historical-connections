export type SpriteCategory = 'Social' | 'Political' | 'Religious' | 'Intellectual' | 'Technological' | 'Economic';
export type SpriteIconKey = 'social' | 'political' | 'religious' | 'intellectual' | 'technological' | 'economic';

export interface TalonCard {
  event: string;
  category: SpriteCategory;
  period: string;
  explanation: string;
}

// ─────────────────────────────────────────────────────────────────────────────
//  APUSH TALON CARDS  —  ~72 cards covering all 9 periods
//  Sources: Barron's AP U.S. History notes (Periods 1-9), Tom Richey guide
//  Design: Each card has a clear category justification in the explanation.
//  Tricky cards include a note on WHY a student might pick the wrong category.
// ─────────────────────────────────────────────────────────────────────────────
export const APUSH_TALON_CARDS: TalonCard[] = [

  // ── PERIOD 1: 1491–1607 ──────────────────────────────────────────────────

  {
    event: 'Encomienda System',
    category: 'Economic',
    period: 'Period 1',
    explanation: 'The encomienda is economic because it structured labor extraction from Native Americans to produce wealth for Spanish colonizers. (Tricky: it has social consequences, but its core purpose was labor and profit.)',
  },
  {
    event: 'Columbian Exchange',
    category: 'Economic',
    period: 'Period 1',
    explanation: 'The Columbian Exchange is economic because it transformed global agriculture, trade networks, and labor systems by moving crops, animals, and people across the Atlantic.',
  },
  {
    event: 'Iroquois Confederacy',
    category: 'Political',
    period: 'Period 1',
    explanation: 'The Iroquois Confederacy is political because it established a formal governing structure — a council of nations — that regulated diplomacy, war, and collective decision-making.',
  },
  {
    event: 'Spanish Mission System',
    category: 'Religious',
    period: 'Period 1',
    explanation: 'The mission system is religious because its stated purpose was the conversion of Native Americans to Catholicism, enforced through church-run institutions across the Southwest and Florida.',
  },
  {
    event: 'Casta System',
    category: 'Social',
    period: 'Period 1',
    explanation: 'The casta system is social because it organized colonial society into rigid racial hierarchies that determined status, opportunity, and daily interaction across Spanish America.',
  },
  {
    event: 'Treaty of Tordesillas',
    category: 'Political',
    period: 'Period 1',
    explanation: 'The Treaty of Tordesillas is political because it was a diplomatic agreement between Spain and Portugal, brokered by the Pope, dividing the non-European world into spheres of influence.',
  },

  // ── PERIOD 2: 1607–1754 ──────────────────────────────────────────────────

  {
    event: 'Great Awakening',
    category: 'Religious',
    period: 'Period 2',
    explanation: 'The Great Awakening is religious because it was a widespread evangelical revival that challenged established church authority and emphasized personal conversion over inherited faith.',
  },
  {
    event: 'Mercantilism',
    category: 'Economic',
    period: 'Period 2',
    explanation: 'Mercantilism is economic because it was a system of colonial trade regulation designed to maximize wealth flowing back to Britain by controlling imports, exports, and colonial production.',
  },
  {
    event: 'Mayflower Compact',
    category: 'Political',
    period: 'Period 2',
    explanation: 'The Mayflower Compact is political because it was a self-governing agreement — a foundational document of colonial self-rule — establishing consent-based authority among the Pilgrims.',
  },
  {
    event: "Bacon's Rebellion",
    category: 'Social',
    period: 'Period 2',
    explanation: "Bacon's Rebellion is social because it exposed class tensions between landless poor whites and the planter elite, ultimately pushing Virginia planters to shift toward enslaved African labor.",
  },
  {
    event: 'Headright System',
    category: 'Economic',
    period: 'Period 2',
    explanation: 'The headright system is economic because it structured land distribution in the Chesapeake colonies — granting 50 acres per person transported — to encourage the import of labor and expand tobacco production.',
  },
  {
    event: 'Salem Witch Trials',
    category: 'Religious',
    period: 'Period 2',
    explanation: 'The Salem Witch Trials are religious because they arose from Puritan spiritual anxiety, fears of the Devil, and the community enforcement of religious orthodoxy in Massachusetts Bay.',
  },
  {
    event: 'Navigation Acts',
    category: 'Economic',
    period: 'Period 2',
    explanation: 'The Navigation Acts are economic because they restricted colonial trade to British ships and required certain goods to pass through England — a mercantilist policy designed to control colonial commerce.',
  },
  {
    event: 'John Locke and Natural Rights',
    category: 'Intellectual',
    period: 'Period 2',
    explanation: 'John Locke belongs to the intellectual category because his philosophical writings on natural rights, consent of the governed, and the social contract shaped colonial political thought.',
  },
  {
    event: 'Chattel Slavery',
    category: 'Social',
    period: 'Period 2',
    explanation: 'Chattel slavery is social because it restructured society by making race the permanent, heritable basis of enslaved status — transforming colonial demographics, family structures, and social hierarchy.',
  },
  {
    event: "King Philip's War",
    category: 'Political',
    period: 'Period 2',
    explanation: "King Philip's War is political because it was an armed conflict over sovereignty — the Wampanoag and allied tribes resisting English expansion and asserting their right to control their own lands.",
  },

  // ── PERIOD 3: 1754–1800 ──────────────────────────────────────────────────

  {
    event: 'Enlightenment Ideas',
    category: 'Intellectual',
    period: 'Period 3',
    explanation: 'Enlightenment thought is intellectual because it centered on reason, natural rights, and political philosophy — ideas that directly shaped the Declaration of Independence and Constitution.',
  },
  {
    event: 'Marbury v. Madison',
    category: 'Political',
    period: 'Period 3',
    explanation: 'Marbury v. Madison is political because it established judicial review — the Supreme Court\'s power to strike down laws that violate the Constitution — reshaping the balance of power between branches.',
  },
  {
    event: 'Common Sense (Paine)',
    category: 'Intellectual',
    period: 'Period 3',
    explanation: "Common Sense is intellectual because Thomas Paine's pamphlet spread revolutionary arguments through reasoned political theory, making the case for independence to a popular audience.",
  },
  {
    event: 'Federalist Papers',
    category: 'Intellectual',
    period: 'Period 3',
    explanation: 'The Federalist Papers are intellectual because Hamilton, Madison, and Jay constructed constitutional arguments defending the new government through political theory and logical reasoning.',
  },
  {
    event: "Hamilton's Financial Program",
    category: 'Economic',
    period: 'Period 3',
    explanation: "Hamilton's program is economic because it established a national bank, assumed state debts, and promoted manufacturing — a deliberate plan to build American financial infrastructure.",
  },
  {
    event: 'Whiskey Rebellion',
    category: 'Political',
    period: 'Period 3',
    explanation: "The Whiskey Rebellion is political because Washington's decision to suppress it by force was a deliberate exercise of federal authority — demonstrating the new government's power to enforce its laws.",
  },
  {
    event: 'Republican Motherhood',
    category: 'Social',
    period: 'Period 3',
    explanation: 'Republican Motherhood is social because it defined a new civic role for women — educating sons in virtue and patriotism — that shaped gender expectations in the early republic.',
  },
  {
    event: 'Alien and Sedition Acts',
    category: 'Political',
    period: 'Period 3',
    explanation: 'The Alien and Sedition Acts are political because they were partisan legislation — passed by Federalists to silence Democratic-Republican opposition — sparking the constitutional crisis of 1798.',
  },

  // ── PERIOD 4: 1800–1848 ──────────────────────────────────────────────────

  {
    event: 'Monroe Doctrine',
    category: 'Political',
    period: 'Period 4',
    explanation: 'The Monroe Doctrine is political because it was a foreign policy declaration asserting U.S. opposition to further European colonization in the Western Hemisphere — a statement of national power.',
  },
  {
    event: 'Second Great Awakening',
    category: 'Religious',
    period: 'Period 4',
    explanation: 'The Second Great Awakening is religious because it was a wave of evangelical Protestant revivalism that spread through camp meetings and personal conversion, inspiring reform movements.',
  },
  {
    event: 'Cotton Gin',
    category: 'Technological',
    period: 'Period 4',
    explanation: "The cotton gin is technological because Eli Whitney's invention mechanized cotton fiber separation — dramatically increasing plantation output and accelerating the demand for enslaved labor.",
  },
  {
    event: 'Seneca Falls Convention',
    category: 'Social',
    period: 'Period 4',
    explanation: "Seneca Falls is social because it organized collective activism around women's legal equality, civic rights, and suffrage — redefining gender roles and public participation.",
  },
  {
    event: 'Trail of Tears',
    category: 'Social',
    period: 'Period 4',
    explanation: 'The Trail of Tears is social because it forcibly uprooted Native American communities, destroyed social networks, and caused enormous human suffering through government-mandated relocation.',
  },
  {
    event: 'Transcendentalism',
    category: 'Intellectual',
    period: 'Period 4',
    explanation: 'Transcendentalism is intellectual because Emerson, Thoreau, and others built a philosophy of individualism, self-reliance, and spiritual connection to nature that challenged materialism.',
  },
  {
    event: 'McCulloch v. Maryland',
    category: 'Political',
    period: 'Period 4',
    explanation: 'McCulloch v. Maryland is political because the Supreme Court ruled that federal authority superseded state attempts to tax federal institutions — a landmark expansion of national power.',
  },
  {
    event: 'Erie Canal',
    category: 'Economic',
    period: 'Period 4',
    explanation: 'The Erie Canal is economic because it connected the Great Lakes to the Atlantic, slashing transportation costs and integrating western agriculture into national and international markets.',
  },
  {
    event: 'Nullification Crisis',
    category: 'Political',
    period: 'Period 4',
    explanation: 'The Nullification Crisis is political because South Carolina claimed the right to void federal tariff laws — a direct challenge to federal supremacy that nearly led to armed conflict.',
  },
  {
    event: 'Abolitionism',
    category: 'Social',
    period: 'Period 4',
    explanation: 'Abolitionism is social because it was a mass movement challenging the institution of slavery on moral grounds, reshaping public opinion, political discourse, and interracial relations.',
  },

  // ── PERIOD 5: 1844–1877 ──────────────────────────────────────────────────

  {
    event: 'Emancipation Proclamation',
    category: 'Political',
    period: 'Period 5',
    explanation: 'The Emancipation Proclamation is political because Lincoln issued it as a wartime executive order — redefining Union war aims and transforming the conflict into a war against slavery.',
  },
  {
    event: 'Homestead Act',
    category: 'Economic',
    period: 'Period 5',
    explanation: 'The Homestead Act is economic because it gave 160 acres of federal land to settlers — structuring access to productive resources and encouraging westward agricultural expansion.',
  },
  {
    event: '13th Amendment',
    category: 'Political',
    period: 'Period 5',
    explanation: 'The 13th Amendment is political because it permanently changed the Constitution — abolishing slavery nationwide through formal legislative and state ratification processes.',
  },
  {
    event: 'Sharecropping',
    category: 'Economic',
    period: 'Period 5',
    explanation: "Sharecropping is economic because it was a labor system that kept formerly enslaved people in a cycle of debt by tying their earnings to a landlord's crop share — replacing slavery with economic dependency.",
  },
  {
    event: "Uncle Tom's Cabin",
    category: 'Intellectual',
    period: 'Period 5',
    explanation: "Uncle Tom's Cabin is intellectual because Harriet Beecher Stowe used literature to make a moral argument against slavery — shifting public opinion through ideas and narrative.",
  },
  {
    event: 'Freedmen\'s Bureau',
    category: 'Social',
    period: 'Period 5',
    explanation: "The Freedmen's Bureau is social because it was a federal agency that provided formerly enslaved people with education, food, medical care, and legal assistance — addressing the social devastation of slavery.",
  },
  {
    event: 'Dred Scott Decision',
    category: 'Political',
    period: 'Period 5',
    explanation: 'The Dred Scott decision is political because the Supreme Court ruled that enslaved people were property, not citizens, and that Congress lacked the power to restrict slavery in territories — igniting a political firestorm.',
  },
  {
    event: 'Kansas-Nebraska Act',
    category: 'Political',
    period: 'Period 5',
    explanation: 'The Kansas-Nebraska Act is political because it repealed the Missouri Compromise, opened western territories to popular sovereignty on slavery, and fractured the Democratic Party.',
  },

  // ── PERIOD 6: 1865–1898 ──────────────────────────────────────────────────

  {
    event: 'Transcontinental Railroad',
    category: 'Technological',
    period: 'Period 6',
    explanation: 'The transcontinental railroad is technological because it was a massive engineering achievement that compressed travel time across the continent, integrating national markets and enabling western settlement.',
  },
  {
    event: 'Social Darwinism',
    category: 'Intellectual',
    period: 'Period 6',
    explanation: "Social Darwinism is intellectual because Herbert Spencer's application of evolutionary theory to human society provided an ideological justification for laissez-faire capitalism and opposition to reform.",
  },
  {
    event: 'Gospel of Wealth',
    category: 'Intellectual',
    period: 'Period 6',
    explanation: "Andrew Carnegie's Gospel of Wealth is intellectual because it was a philosophical argument — a written essay — that justified extreme wealth as a social responsibility carried by successful individuals.",
  },
  {
    event: 'Dawes Act',
    category: 'Political',
    period: 'Period 6',
    explanation: 'The Dawes Act is political because it was federal legislation that broke up tribal land ownership and forced assimilation — a deliberate government policy to destroy Native political and cultural autonomy.',
  },
  {
    event: 'Haymarket Affair',
    category: 'Social',
    period: 'Period 6',
    explanation: 'The Haymarket Affair is social because it was a violent clash between labor activists and police that inflamed class tensions and set back the labor movement by associating it with radicalism.',
  },
  {
    event: 'Sherman Antitrust Act',
    category: 'Economic',
    period: 'Period 6',
    explanation: 'The Sherman Antitrust Act is economic because it was the first federal law targeting monopolistic business practices — attempting to restore market competition and limit corporate power.',
  },
  {
    event: 'Chinese Exclusion Act',
    category: 'Political',
    period: 'Period 6',
    explanation: 'The Chinese Exclusion Act is political because it was federal legislation that banned Chinese immigration and naturalization — the first U.S. law to exclude an entire nationality group.',
  },
  {
    event: 'Bessemer Steel Process',
    category: 'Technological',
    period: 'Period 6',
    explanation: 'The Bessemer process is technological because it industrialized steel production by converting iron to steel cheaply and at scale — enabling the construction of railroads, skyscrapers, and bridges.',
  },
  {
    event: "Plessy v. Ferguson",
    category: 'Political',
    period: 'Period 6',
    explanation: 'Plessy v. Ferguson is political because the Supreme Court\'s "separate but equal" ruling gave legal sanction to Jim Crow segregation — a political decision that shaped race relations for 60 years.',
  },

  // ── PERIOD 7: 1890–1945 ──────────────────────────────────────────────────

  {
    event: 'Prohibition',
    category: 'Social',
    period: 'Period 7',
    explanation: 'Prohibition is social because it reflected a moral reform campaign rooted in temperance values — attempting to reshape public behavior and culture, and exposing deep divisions between urban and rural America.',
  },
  {
    event: 'New Deal',
    category: 'Economic',
    period: 'Period 7',
    explanation: 'The New Deal is economic because it was a federal program of relief, recovery, and reform designed to stabilize financial markets, reduce unemployment, and regulate capitalist excess after the Great Depression.',
  },
  {
    event: 'Social Security Act',
    category: 'Economic',
    period: 'Period 7',
    explanation: 'The Social Security Act is economic because it created the first permanent federal safety net — establishing retirement benefits, unemployment insurance, and aid to dependent families.',
  },
  {
    event: 'Harlem Renaissance',
    category: 'Intellectual',
    period: 'Period 7',
    explanation: "The Harlem Renaissance is intellectual because it was an explosion of African American literature, art, music, and cultural criticism — a movement of ideas redefining Black identity and America's cultural landscape.",
  },
  {
    event: "Women's Suffrage (19th Amendment)",
    category: 'Social',
    period: 'Period 7',
    explanation: "Women's suffrage is social because it fundamentally reshaped civic participation and gender roles — extending full political rights to half the population and reflecting decades of grassroots organizing.",
  },
  {
    event: 'Manhattan Project',
    category: 'Technological',
    period: 'Period 7',
    explanation: 'The Manhattan Project is technological because it mobilized scientists and engineers to develop the atomic bomb — the most consequential application of modern physics in history.',
  },
  {
    event: 'Muckrakers',
    category: 'Intellectual',
    period: 'Period 7',
    explanation: 'Muckrakers belong to the intellectual category because journalists like Upton Sinclair and Ida Tarbell used investigative writing and ideas to expose corporate abuses and drive Progressive reform.',
  },
  {
    event: 'Great Migration',
    category: 'Social',
    period: 'Period 7',
    explanation: 'The Great Migration is social because it relocated approximately 1.6 million African Americans from the rural South to northern cities — transforming urban communities, race relations, and Black political power.',
  },
  {
    event: 'Espionage and Sedition Acts',
    category: 'Political',
    period: 'Period 7',
    explanation: 'The Espionage and Sedition Acts are political because they were wartime government legislation suppressing dissent — criminalizing anti-war speech and testing the limits of the First Amendment.',
  },
  {
    event: 'Scopes Trial',
    category: 'Intellectual',
    period: 'Period 7',
    explanation: "The Scopes Trial is intellectual because it was fundamentally a battle over ideas — science vs. religion, evolution vs. Biblical literalism — reflecting broader 1920s tensions between modernism and fundamentalism.",
  },
  {
    event: 'Dust Bowl',
    category: 'Social',
    period: 'Period 7',
    explanation: 'The Dust Bowl is social because it displaced hundreds of thousands of farming families — forcing mass migration to California and exposing the human cost of poor land management and economic vulnerability.',
  },
  {
    event: 'Roosevelt Corollary',
    category: 'Political',
    period: 'Period 7',
    explanation: "The Roosevelt Corollary is political because it was a foreign policy doctrine — an extension of the Monroe Doctrine — asserting the U.S. right to intervene militarily in Latin American nations.",
  },

  // ── PERIOD 8: 1945–1980 ──────────────────────────────────────────────────

  {
    event: 'Containment Policy',
    category: 'Political',
    period: 'Period 8',
    explanation: "Containment is political because it was the defining Cold War foreign policy strategy — George Kennan's doctrine guiding U.S. diplomacy and military decisions for four decades.",
  },
  {
    event: 'Civil Rights Act of 1964',
    category: 'Political',
    period: 'Period 8',
    explanation: "The Civil Rights Act of 1964 is political because it was landmark federal legislation — passed after intense lobbying and LBJ's political maneuvering — that outlawed discrimination based on race, color, religion, sex, or national origin.",
  },
  {
    event: 'Interstate Highway System',
    category: 'Technological',
    period: 'Period 8',
    explanation: 'The Interstate Highway System is technological because it was a massive federally funded infrastructure project — 41,000 miles of highways — that transformed transportation, commerce, and suburban growth.',
  },
  {
    event: 'Brown v. Board of Education',
    category: 'Political',
    period: 'Period 8',
    explanation: 'Brown v. Board is political because the Supreme Court overturned Plessy v. Ferguson — a landmark legal decision that dismantled the constitutional basis for racial segregation in public schools.',
  },
  {
    event: 'GI Bill (Servicemen\'s Readjustment Act)',
    category: 'Economic',
    period: 'Period 8',
    explanation: 'The GI Bill is economic because it provided veterans with college tuition, low-interest home loans, and unemployment benefits — fueling the postwar middle-class expansion and suburban housing boom.',
  },
  {
    event: 'McCarthyism',
    category: 'Political',
    period: 'Period 8',
    explanation: "McCarthyism is political because Senator McCarthy's anti-Communist crusade used government power — congressional hearings and blacklists — to suppress political dissent and destroy reputations.",
  },
  {
    event: 'Betty Friedan — The Feminine Mystique',
    category: 'Intellectual',
    period: 'Period 8',
    explanation: "The Feminine Mystique is intellectual because Friedan's book was a work of social analysis — diagnosing women's dissatisfaction and providing the ideological foundation for second-wave feminism.",
  },
  {
    event: 'Tet Offensive',
    category: 'Political',
    period: 'Period 8',
    explanation: "The Tet Offensive is political because it shattered public confidence in the government's claims of progress in Vietnam — directly undermining LBJ's presidency and transforming the political landscape of 1968.",
  },
  {
    event: 'Watergate Scandal',
    category: 'Political',
    period: 'Period 8',
    explanation: "Watergate is political because it was a constitutional crisis — the abuse of presidential power, a cover-up, and Nixon's eventual resignation — that fundamentally changed Americans' trust in government.",
  },
  {
    event: 'Sputnik Launch',
    category: 'Technological',
    period: 'Period 8',
    explanation: "Sputnik is technological because the Soviet satellite's launch demonstrated a critical technological gap — triggering the U.S. space program, massive science funding, and the National Defense Education Act.",
  },
  {
    event: 'March on Washington (1963)',
    category: 'Social',
    period: 'Period 8',
    explanation: "The March on Washington is social because it was a mass public demonstration — 250,000 people — mobilizing citizens to demand civil rights, and the event where King delivered 'I Have a Dream.'",
  },
  {
    event: 'Stagflation (1970s)',
    category: 'Economic',
    period: 'Period 8',
    explanation: 'Stagflation is economic because it was the simultaneous occurrence of high unemployment and high inflation — defying conventional economic theory and forcing a reexamination of Keynesian policy.',
  },

  // ── PERIOD 9: 1980–Present ───────────────────────────────────────────────

  {
    event: 'Reaganomics',
    category: 'Economic',
    period: 'Period 9',
    explanation: "Reaganomics is economic because it was a supply-side economic policy — cutting taxes on high earners, deregulating industries, and reducing domestic spending — based on the theory that growth would 'trickle down.'",
  },
  {
    event: 'USA PATRIOT Act',
    category: 'Political',
    period: 'Period 9',
    explanation: 'The PATRIOT Act is political because it was federal legislation passed after 9/11 that dramatically expanded government surveillance powers — sparking lasting debate over security versus civil liberties.',
  },
  {
    event: 'Fall of the Berlin Wall',
    category: 'Political',
    period: 'Period 9',
    explanation: 'The fall of the Berlin Wall is political because it marked the collapse of Soviet-backed authoritarianism in Eastern Europe — symbolizing the end of the Cold War and the failure of communist governance.',
  },
  {
    event: 'Internet Revolution',
    category: 'Technological',
    period: 'Period 9',
    explanation: 'The Internet is technological because it was a communications infrastructure that fundamentally transformed commerce, information access, social organization, and the global economy.',
  },
  {
    event: 'Moral Majority',
    category: 'Religious',
    period: 'Period 9',
    explanation: "The Moral Majority is religious because Jerry Falwell's organization mobilized evangelical Christians as a political force — grounding conservative political activism in Biblical values and opposition to secularism.",
  },
  {
    event: 'NAFTA',
    category: 'Economic',
    period: 'Period 9',
    explanation: 'NAFTA is economic because it eliminated tariffs among the U.S., Canada, and Mexico — accelerating cross-border trade and investment while displacing American manufacturing workers.',
  },
  {
    event: 'September 11 Attacks',
    category: 'Political',
    period: 'Period 9',
    explanation: 'September 11 is political because it triggered a fundamental reorientation of U.S. foreign and domestic policy — launching the War on Terror, reshaping national security law, and redefining American global strategy.',
  },
  {
    event: 'Affordable Care Act',
    category: 'Economic',
    period: 'Period 9',
    explanation: 'The Affordable Care Act is economic because it restructured health insurance markets, expanded Medicaid eligibility, and mandated coverage — affecting one-sixth of the U.S. economy and millions of families.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  AP WORLD HISTORY: MODERN TALON CARDS  —  ~60 cards covering all 9 units
//  Unit structure follows official College Board CED naming
// ─────────────────────────────────────────────────────────────────────────────
export const APWORLD_TALON_CARDS: TalonCard[] = [

  // ── UNIT 1: The Global Tapestry (1200-1450) ──────────────────────────────

  {
    event: 'Confucian Philosophy',
    category: 'Intellectual',
    period: 'Unit 1',
    explanation: 'Confucianism is intellectual because it was a system of ethical ideas — about hierarchy, education, filial piety, and good governance — that shaped Chinese bureaucracy and social thought for centuries.',
  },
  {
    event: 'Mongol Empire',
    category: 'Political',
    period: 'Unit 1',
    explanation: 'The Mongol Empire is political because it was the largest contiguous land empire in history — built through conquest, administered through governance, and sustained by enforced political loyalty across Eurasia.',
  },
  {
    event: 'Caste System in India',
    category: 'Social',
    period: 'Unit 1',
    explanation: 'The caste system is social because it structured Hindu society into hereditary occupational groups — determining birth status, marriage, and social mobility for millions across South Asia.',
  },
  {
    event: 'Silk Road Trade',
    category: 'Economic',
    period: 'Unit 1',
    explanation: 'Silk Road trade is economic because it connected China, Central Asia, the Middle East, and Europe through a network of commercial exchange — moving silk, spices, precious metals, and luxury goods across Eurasia.',
  },
  {
    event: 'Bhakti Movement',
    category: 'Religious',
    period: 'Unit 1',
    explanation: 'The Bhakti Movement is religious because it emphasized personal devotion and direct connection to a deity — challenging caste barriers in Hindu worship and producing deeply influential religious poetry.',
  },
  {
    event: 'Spread of Islam via Trade',
    category: 'Religious',
    period: 'Unit 1',
    explanation: 'The spread of Islam via trade is religious because merchants carried Islamic beliefs, practices, and texts across the Indian Ocean and Sahara — converting communities through cultural contact rather than conquest.',
  },
  {
    event: 'Mali Empire and Mansa Musa',
    category: 'Political',
    period: 'Unit 1',
    explanation: "Mali's empire is political because Mansa Musa consolidated power across West Africa through military expansion, tributary relationships, and control of trans-Saharan trade routes as a sovereign ruler.",
  },
  {
    event: 'House of Wisdom (Baghdad)',
    category: 'Intellectual',
    period: 'Unit 1',
    explanation: 'The House of Wisdom is intellectual because it was a scholarly institution that preserved, translated, and advanced Greek, Persian, and Indian knowledge — producing major works in mathematics, medicine, and astronomy.',
  },
  {
    event: 'Black Death',
    category: 'Social',
    period: 'Unit 1',
    explanation: "The Black Death is social because the plague killed roughly one-third of Europe's population — disrupting family structures, labor systems, and religious confidence in ways that reshaped medieval society.",
  },
  {
    event: 'Magna Carta',
    category: 'Political',
    period: 'Unit 1',
    explanation: 'The Magna Carta is political because it was a document that placed legal limits on royal authority — establishing the principle that even monarchs must operate within the law.',
  },

  // ── UNIT 2: Networks of Exchange (1200-1450) ─────────────────────────────

  {
    event: 'Printing Press (Woodblock)',
    category: 'Technological',
    period: 'Unit 2',
    explanation: 'Woodblock printing is technological because Chinese printers developed it to mass-reproduce text — spreading Buddhist sutras, government documents, and eventually paper money across East Asia.',
  },
  {
    event: 'Magnetic Compass',
    category: 'Technological',
    period: 'Unit 2',
    explanation: 'The magnetic compass is technological because Chinese and later Arab and European navigators used it to determine direction at sea — enabling longer oceanic voyages and expanding trade networks.',
  },
  {
    event: 'Indian Ocean Trade Network',
    category: 'Economic',
    period: 'Unit 2',
    explanation: 'The Indian Ocean network is economic because monsoon winds connected merchants from East Africa, Arabia, India, and Southeast Asia in a vast system of commercial exchange involving spices, textiles, and gold.',
  },
  {
    event: "Mansa Musa's Hajj (1324)",
    category: 'Religious',
    period: 'Unit 2',
    explanation: "Mansa Musa's pilgrimage to Mecca is religious because it was a demonstration of Islamic faith — though it also had massive economic effects, his primary motivation was religious duty.",
  },
  {
    event: 'Pax Mongolica',
    category: 'Economic',
    period: 'Unit 2',
    explanation: 'The Pax Mongolica is economic because Mongol political stability across Eurasia opened safe overland trade routes — allowing merchants, travelers, and goods to move from China to the Mediterranean.',
  },
  {
    event: 'Swahili City-States',
    category: 'Economic',
    period: 'Unit 2',
    explanation: 'The Swahili cities are economic because they were cosmopolitan port cities — Kilwa, Mombasa, Zanzibar — whose wealth came from controlling Indian Ocean trade in gold, ivory, and enslaved people.',
  },
  {
    event: 'Sufism',
    category: 'Religious',
    period: 'Unit 2',
    explanation: 'Sufism is religious because it was a mystical Islamic tradition emphasizing personal spiritual experience and closeness to God — and it was highly effective at spreading Islam through peaceful missionary activity.',
  },

  // ── UNIT 3: Land-Based Empires (1450-1750) ───────────────────────────────

  {
    event: 'Protestant Reformation',
    category: 'Religious',
    period: 'Unit 3',
    explanation: "The Reformation is religious because Martin Luther's challenge to papal authority and Catholic doctrine — over indulgences, salvation by faith, and scripture — fundamentally divided Western Christianity.",
  },
  {
    event: 'Gunpowder Weapons',
    category: 'Technological',
    period: 'Unit 3',
    explanation: 'Gunpowder weapons are technological because cannons and firearms revolutionized warfare — enabling new empires to conquer fortified cities, project power across vast distances, and transform military hierarchy.',
  },
  {
    event: 'Suleiman the Magnificent',
    category: 'Political',
    period: 'Unit 3',
    explanation: "Suleiman is political because under his rule the Ottoman Empire reached its greatest territorial extent — through military expansion, legal codification (hence 'the Lawgiver'), and sophisticated imperial administration.",
  },
  {
    event: 'Akbar the Great',
    category: 'Political',
    period: 'Unit 3',
    explanation: "Akbar is political because his Mughal governance — tolerance of non-Muslims, centralized administration, and the abolition of the jizya tax — defined how a diverse empire maintained political legitimacy.",
  },
  {
    event: 'Scientific Revolution',
    category: 'Intellectual',
    period: 'Unit 3',
    explanation: 'The Scientific Revolution is intellectual because thinkers like Copernicus, Galileo, and Newton developed new methods of inquiry — overturning ancient authorities and establishing empirical observation as the basis of knowledge.',
  },
  {
    event: 'Devshirme System',
    category: 'Social',
    period: 'Unit 3',
    explanation: "The devshirme is social because it was an Ottoman practice of forcibly recruiting Christian boys from conquered regions — restructuring social mobility by creating an elite military and bureaucratic class (Janissaries) outside normal family lineage.",
  },
  {
    event: 'Counter-Reformation',
    category: 'Religious',
    period: 'Unit 3',
    explanation: "The Counter-Reformation is religious because the Catholic Church's internal reform effort — through the Council of Trent, Jesuit missionaries, and the Inquisition — was driven by the goal of defending and purifying Catholic faith.",
  },

  // ── UNIT 4: Transoceanic Interconnections (1450-1750) ────────────────────

  {
    event: 'Columbian Exchange',
    category: 'Economic',
    period: 'Unit 4',
    explanation: 'The Columbian Exchange is economic because it restructured global agriculture, labor markets, and trade systems — moving crops, animals, and diseases between hemispheres in ways that permanently altered patterns of production and consumption.',
  },
  {
    event: 'Atlantic Slave Trade',
    category: 'Economic',
    period: 'Unit 4',
    explanation: 'The Atlantic slave trade is economic because it was a commercial system — organized by joint-stock companies and state-backed monopolies — extracting enslaved African labor to produce commodities for European profit.',
  },
  {
    event: 'Joint-Stock Companies',
    category: 'Economic',
    period: 'Unit 4',
    explanation: 'Joint-stock companies are economic because they were financial institutions — the Dutch VOC and British East India Company — that pooled investor capital to fund long-distance trade ventures and colonial enterprises.',
  },
  {
    event: 'Casta System (Colonial Americas)',
    category: 'Social',
    period: 'Unit 4',
    explanation: 'The colonial casta system is social because it organized Spanish American society into a racial hierarchy — assigning status, legal rights, and economic opportunity based on ancestry and skin color.',
  },
  {
    event: 'Enlightenment Philosophy',
    category: 'Intellectual',
    period: 'Unit 4',
    explanation: 'Enlightenment philosophy is intellectual because Locke, Voltaire, Montesquieu, and Rousseau built systems of ideas about reason, rights, and government — ideas that directly inspired the American and French Revolutions.',
  },
  {
    event: 'Triangular Trade',
    category: 'Economic',
    period: 'Unit 4',
    explanation: 'Triangular trade is economic because it was a transatlantic commercial circuit — European manufactured goods to Africa, enslaved Africans to the Americas, and American commodities back to Europe — generating profit at each stage.',
  },
  {
    event: 'Potosí Silver Mines',
    category: 'Economic',
    period: 'Unit 4',
    explanation: "Potosí is economic because Bolivia's silver mines produced massive quantities of silver that flowed through the Manila galleons to China — connecting the Americas to the global economy and fueling Europe's inflation.",
  },
  {
    event: 'Tokugawa Japan Isolation',
    category: 'Political',
    period: 'Unit 4',
    explanation: "Tokugawa Japan's sakoku (isolation) policy is political because it was a deliberate government decision — restricting foreign contact to a single Dutch trading post at Dejima — to consolidate domestic authority and prevent foreign influence.",
  },

  // ── UNIT 5: Revolutions (1750-1900) ─────────────────────────────────────

  {
    event: 'French Revolution',
    category: 'Political',
    period: 'Unit 5',
    explanation: 'The French Revolution is political because it overthrew the monarchy, challenged aristocratic privilege, and produced new constitutional forms of government — reshaping the relationship between state and citizen.',
  },
  {
    event: 'Haitian Revolution',
    category: 'Social',
    period: 'Unit 5',
    explanation: 'The Haitian Revolution is social because it was the only successful slave revolt in history — overthrowing the racial order, abolishing slavery, and creating the first Black republic in the Western Hemisphere.',
  },
  {
    event: 'Industrial Revolution',
    category: 'Technological',
    period: 'Unit 5',
    explanation: 'The Industrial Revolution is technological because mechanized production — steam engines, power looms, iron foundries — transformed how goods were made, replacing human and animal power with machine power.',
  },
  {
    event: 'Simón Bolívar',
    category: 'Political',
    period: 'Unit 5',
    explanation: "Bolívar is political because he was a revolutionary military and political leader who liberated six South American nations from Spanish rule — shaping their constitutions and governing several as president.",
  },
  {
    event: 'Meiji Restoration',
    category: 'Political',
    period: 'Unit 5',
    explanation: 'The Meiji Restoration is political because it was a top-down revolution in Japanese governance — returning power from the shogunate to the Emperor and restructuring state institutions to pursue rapid modernization.',
  },
  {
    event: 'Marxism',
    category: 'Intellectual',
    period: 'Unit 5',
    explanation: 'Marxism is intellectual because Marx and Engels developed a comprehensive theoretical framework — analyzing capitalism, class struggle, and historical materialism — that became the most influential political ideology of the modern era.',
  },
  {
    event: 'Abolitionism (Global)',
    category: 'Social',
    period: 'Unit 5',
    explanation: 'Global abolitionism is social because it was a mass movement — driven by enslaved resistance, religious activism, and Enlightenment ideas — that challenged the racial and economic order of Atlantic slavery.',
  },

  // ── UNIT 6: Consequences of Industrialization (1750-1900) ────────────────

  {
    event: 'Scramble for Africa',
    category: 'Political',
    period: 'Unit 6',
    explanation: 'The Scramble for Africa is political because it was competitive imperial state expansion — European governments claiming, partitioning, and governing African territories through the Berlin Conference of 1884.',
  },
  {
    event: "White Man's Burden (Kipling)",
    category: 'Intellectual',
    period: 'Unit 6',
    explanation: "Kipling's poem is intellectual because it was a cultural text that articulated the ideological justification for imperialism — framing colonization as a civilizing mission owed by European races to the world.",
  },
  {
    event: 'Opium Wars',
    category: 'Political',
    period: 'Unit 6',
    explanation: 'The Opium Wars are political because Britain used military force to compel China to accept unequal treaties — opening ports, granting extraterritoriality, and marking a turning point in Chinese sovereignty.',
  },
  {
    event: 'Sepoy Rebellion',
    category: 'Social',
    period: 'Unit 6',
    explanation: 'The Sepoy Rebellion is social because it arose from cultural grievances — Indian soldiers objecting to cartridges greased with pig and cow fat — reflecting deep tensions between colonial rule and Indian religious identity.',
  },
  {
    event: 'Suez Canal',
    category: 'Economic',
    period: 'Unit 6',
    explanation: "The Suez Canal is economic because it dramatically shortened the sea route between Europe and Asia — transforming global shipping costs, accelerating trade, and becoming a prize of Britain's imperial strategy.",
  },
  {
    event: 'Boxer Rebellion',
    category: 'Social',
    period: 'Unit 6',
    explanation: 'The Boxer Rebellion is social because it was a grassroots anti-foreign uprising — Chinese nationalists targeting Christian missionaries and foreign embassies — reflecting popular anger at imperial humiliation. (Tricky: it has political aspects, but its roots were social and cultural.)',
  },

  // ── UNIT 7: Global Conflict (1900-Present) ───────────────────────────────

  {
    event: 'WWI Alliance System',
    category: 'Political',
    period: 'Unit 7',
    explanation: 'The alliance system is political because it was a web of treaties and diplomatic commitments — Triple Entente and Triple Alliance — that turned a regional assassination into a world war.',
  },
  {
    event: 'Treaty of Versailles',
    category: 'Political',
    period: 'Unit 7',
    explanation: 'The Treaty of Versailles is political because it was a diplomatic settlement that redrew borders, dismembered empires, imposed reparations, and created the conditions for future conflict.',
  },
  {
    event: 'Russian Revolution (1917)',
    category: 'Political',
    period: 'Unit 7',
    explanation: 'The Russian Revolution is political because the Bolsheviks overthrew the Provisional Government to seize state power — establishing the Soviet Union and the first communist state.',
  },
  {
    event: 'Rise of Fascism',
    category: 'Political',
    period: 'Unit 7',
    explanation: 'Fascism is political because Mussolini and Hitler built totalitarian states — using party control, propaganda, and terror to concentrate political power and suppress opposition.',
  },
  {
    event: 'Holocaust',
    category: 'Social',
    period: 'Unit 7',
    explanation: 'The Holocaust is social because it was a state-organized genocide that systematically murdered six million Jews and millions of others — the most extreme destruction of a social group in modern history. (Tricky: it was state-organized, but its essence was the targeting of social/ethnic groups.)',
  },
  {
    event: 'Decolonization Movements',
    category: 'Social',
    period: 'Unit 7',
    explanation: 'Decolonization is social because it mobilized colonized populations around identity, independence, and dignity — transforming societies across Africa, Asia, and the Middle East through mass political participation.',
  },

  // ── UNIT 8: Cold War and Decolonization (1900-Present) ───────────────────

  {
    event: 'Cold War (NATO vs. Warsaw Pact)',
    category: 'Political',
    period: 'Unit 8',
    explanation: 'The Cold War is political because it was fundamentally a competition between two states — the U.S. and USSR — for geopolitical dominance, fought through alliances, proxy wars, and diplomatic pressure.',
  },
  {
    event: 'Non-Aligned Movement',
    category: 'Political',
    period: 'Unit 8',
    explanation: "The Non-Aligned Movement is political because it was a deliberate diplomatic stance — newly independent nations collectively refusing to align with either superpower bloc — asserting sovereignty in the Cold War's binary world.",
  },
  {
    event: 'Iranian Revolution (1979)',
    category: 'Religious',
    period: 'Unit 8',
    explanation: 'The Iranian Revolution is religious because Ayatollah Khomeini replaced a secular monarchy with an Islamic Republic — making religious law the foundation of government and transforming the role of Islam in politics.',
  },
  {
    event: 'Green Revolution',
    category: 'Technological',
    period: 'Unit 8',
    explanation: 'The Green Revolution is technological because Norman Borlaug and others developed high-yield crop varieties and synthetic fertilizers — dramatically increasing agricultural output in developing nations.',
  },
  {
    event: 'Nelson Mandela and Apartheid',
    category: 'Social',
    period: 'Unit 8',
    explanation: "Nelson Mandela is social because his decades-long struggle against apartheid — South Africa's system of racial segregation — transformed South African society from institutionalized white minority rule to multiracial democracy.",
  },
  {
    event: 'Cuban Missile Crisis',
    category: 'Political',
    period: 'Unit 8',
    explanation: 'The Cuban Missile Crisis is political because it was a 13-day nuclear standoff between two superpowers — resolved through diplomacy — that came closest to triggering nuclear war and reshaped Cold War strategy.',
  },

  // ── UNIT 9: Globalization (1900-Present) ─────────────────────────────────

  {
    event: 'World Trade Organization',
    category: 'Economic',
    period: 'Unit 9',
    explanation: 'The WTO is economic because it is an international body regulating global trade — reducing tariffs, adjudicating disputes, and enforcing free trade agreements among 164 member nations.',
  },
  {
    event: 'Paris Climate Agreement',
    category: 'Political',
    period: 'Unit 9',
    explanation: 'The Paris Agreement is political because it was a multilateral diplomatic treaty — nations collectively committing to emissions targets — reflecting the use of international political cooperation to address a global crisis.',
  },
  {
    event: 'Internet and Social Media',
    category: 'Technological',
    period: 'Unit 9',
    explanation: "The Internet is technological because it created a global communications infrastructure — connecting billions of people, enabling instant information exchange, and transforming commerce, politics, and culture.",
  },
  {
    event: 'Arab Spring',
    category: 'Political',
    period: 'Unit 9',
    explanation: 'The Arab Spring is political because it was a wave of popular uprisings — using social media — that challenged authoritarian regimes across the Middle East and North Africa, toppling governments in Tunisia, Egypt, and Libya.',
  },
  {
    event: 'HIV/AIDS Pandemic',
    category: 'Social',
    period: 'Unit 9',
    explanation: "HIV/AIDS is social because it devastated communities worldwide — disproportionately affecting marginalized groups — while exposing the failures of healthcare systems and transforming global attitudes toward public health and stigma.",
  },
  {
    event: 'Microfinance (Grameen Bank)',
    category: 'Economic',
    period: 'Unit 9',
    explanation: "Microfinance is economic because Muhammad Yunus's Grameen Bank pioneered small loans to impoverished entrepreneurs — especially women — demonstrating a market-based approach to poverty reduction.",
  },
  {
    event: 'Brexit',
    category: 'Political',
    period: 'Unit 9',
    explanation: "Brexit is political because the United Kingdom's vote to leave the European Union was a democratic decision rejecting supranational governance — reflecting the tension between globalization and national sovereignty.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  DAILY ROTATION LOGIC
//  - getDailyTalonCards uses day-of-year + a seeded shuffle so every day
//    produces a DIFFERENT 12-card set drawn from the full pool.
//  - The seed changes daily, so students always see fresh cards.
//  - getWeeklyTalonCards returns a broader 24-card set for longer sessions.
// ─────────────────────────────────────────────────────────────────────────────

function getDayOfYear(): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  }
  return h;
}

/** Returns `count` cards shuffled deterministically by today's date. */
export function getDailyTalonCards(subject: 'apush' | 'apworld', count = 12): TalonCard[] {
  const pool = subject === 'apush' ? APUSH_TALON_CARDS : APWORLD_TALON_CARDS;
  const dayOfYear = getDayOfYear();
  const shuffled = [...pool].sort((a, b) => {
    const ha = hashStr(a.event + dayOfYear) & 0xffffffff;
    const hb = hashStr(b.event + dayOfYear) & 0xffffffff;
    return ha - hb;
  });
  return shuffled.slice(0, count);
}

/** Returns a larger 24-card set for extended study sessions. */
export function getWeeklyTalonCards(subject: 'apush' | 'apworld'): TalonCard[] {
  return getDailyTalonCards(subject, 24);
}

/** Returns all cards for a specific period/unit — useful for targeted review. */
export function getTalonCardsByPeriod(subject: 'apush' | 'apworld', period: string): TalonCard[] {
  const pool = subject === 'apush' ? APUSH_TALON_CARDS : APWORLD_TALON_CARDS;
  return pool.filter(card => card.period === period);
}

export const SPRITE_CATEGORIES: { name: SpriteCategory; color: string; icon: SpriteIconKey }[] = [
  { name: 'Social',        color: 'hsl(var(--cat-yellow))',  icon: 'social'        },
  { name: 'Political',     color: 'hsl(var(--cat-green))',   icon: 'political'     },
  { name: 'Religious',     color: 'hsl(var(--cat-blue))',    icon: 'religious'     },
  { name: 'Intellectual',  color: 'hsl(var(--cat-purple))',  icon: 'intellectual'  },
  { name: 'Technological', color: 'hsl(45 95% 60%)',         icon: 'technological' },
  { name: 'Economic',      color: 'hsl(15 70% 55%)',         icon: 'economic'      },
];