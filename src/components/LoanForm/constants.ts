export const cities = [
	{cityCode: 'AKT', rusName: 'Актау', kazName: 'Ақтау', maxPrice: 25000000, maxLoan: 20000000},
	{cityCode: 'ATB', rusName: 'Актобе', kazName: 'Ақтөбе', maxPrice: 15000000, maxLoan: 12000000},
	{cityCode: 'ALM', rusName: 'Алматы', kazName: 'Алматы', maxPrice: 25000000, maxLoan: 20000000},
	{cityCode: 'AST', rusName: 'Астана', kazName: 'Астана', maxPrice: 25000000, maxLoan: 20000000},
	{cityCode: 'ATR', rusName: 'Атырау', kazName: 'Атырау', maxPrice: 25000000, maxLoan: 20000000},
	{cityCode: 'GZK', rusName: 'Жезказган', kazName: 'Жезқазған', maxPrice: 15000000, maxLoan: 12000000},
	{cityCode: 'KAR', rusName: 'Караганда', kazName: 'Қарағанды', maxPrice: 20000000, maxLoan: 16000000},
	{cityCode: 'KOK', rusName: 'Кокшетау', kazName: 'Көкшетау', maxPrice: 15000000, maxLoan: 12000000},
	{cityCode: 'KOS', rusName: 'Костанай', kazName: 'Қостанай', maxPrice: 15000000, maxLoan: 12000000},
	{cityCode: 'KZO', rusName: 'Кызылорда', kazName: 'Қызылорда', maxPrice: 15000000, maxLoan: 12000000},
	{cityCode: 'PVL', rusName: 'Павлодар', kazName: 'Павлодар', maxPrice: 15000000, maxLoan: 12000000},
	{cityCode: 'PTR', rusName: 'Петропавловск', kazName: 'Петропавловск', maxPrice: 15000000, maxLoan: 12000000},
	{cityCode: 'SMP', rusName: 'Семей', kazName: 'Семей', maxPrice: 15000000, maxLoan: 12000000},
	{cityCode: 'TLD', rusName: 'Талдыкорган', kazName: 'Талдықорған', maxPrice: 15000000, maxLoan: 12000000},
	{cityCode: 'TRZ', rusName: 'Тараз', kazName: 'Тараз', maxPrice: 15000000, maxLoan: 12000000},
	{cityCode: 'FTO', rusName: 'Туркестан', kazName: 'Түркістан', maxPrice: 20000000, maxLoan: 16000000},
	{cityCode: 'URL', rusName: 'Уральск', kazName: 'Орал', maxPrice: 15000000, maxLoan: 12000000},
	{cityCode: 'UST', rusName: 'Усть-Каменогорск', kazName: 'Өскемен', maxPrice: 15000000, maxLoan: 12000000},
	{cityCode: 'SMK', rusName: 'Шымкент', kazName: 'Шымкент', maxPrice: 25000000, maxLoan: 20000000},
]

export type ICity = {
	cityCode: string,
	rusName: string,
	kazName: string,
	maxPrice: number,
	maxLoan: number,
}