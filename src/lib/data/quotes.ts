export interface Quote {
	text: string;
	context?: string;
	date?: string;
}

export const quotes: Quote[] = [
	{
		text: 'Imagine Harry Potter but all the wands are mouses'
	},
	{
		text: 'Mnemonic is not a word that should start with the letter M. Words that should start with Ms are like "mom". Or "map"',
		context: 'Master class in the International Symposium of Advanced Linguistics'
	},
	{
		text: 'I’m a moist guy',
		context: 'referring to his feet after climbing',
		date: '2025-04-06'
	}
];
