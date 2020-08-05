export interface Source {
  index: number
  short: string
  full: string
  link: string
  image: string
}

export interface Dates {
  create: string
  update: string
  public: string
  from?: string
  to?: string
}

export interface Info {
  title: string
  link: string
  icon: string
}

export interface ExposeSectionType {
  header: string
  items: ExposeSectionType[] | BookCardType[]
  active?: boolean
}

export interface Expose {
  title: string
  image: string
  source: Source
  dates: Dates
  info: Info[]
  mode: string
  sections: ExposeSectionType[]
}

export interface ExposeCardType {
  title: string
  image: string
  source: Source
  mode: string
  dates: Dates
  _id: string
  shortLink: string
}

export interface CollectionCardType {
  title: string
  image: string
  update: string
  alt: string
}

export interface BookCardType {
  title: string
  image: string | null
  annotation: string | null
  authors: string[] | null
  year: string | null
  publisher: string | null
  pages: string
}

export interface Book {
  title: string
  authors: string[]
  cover: string
  images: string[]
  catalogue: string
  link: string
  annotation: string | null
  contents: string | null
  main: [string, string][]
  info: [string, string][]
}

// const main: [string, string][] = [
//   ['Издательство', 'Издательство Государственного Эрмитажа'],
//   ['Город', 'Москва'],
//   ['Год', '2019'],
//   ['Стр.', '231, [1]'],
// ]

// info: [string, string][] = [
//   ['ISBN', '978-5-93572-879-3'],
//   ['Общие примечания', 'В надзаг.: Государственный Эрмитаж'],
//   ['Предметная рубрика', 'Скульптура древнеримская, Бронза, В скульптуре'],
//   ['Редакторы', '340 редактор, Апонасенко, А. Н.'],
//   ['Другие коллективы', 'Государственный Эрмитаж, Санкт-Петербург'],
//   ['Вид документа', 'Однотомное издание'],
//   ['Место хранения', 'Ч/з №3'],
//   ['Индекс ГРНТИ', '18.31'],
//   ['Примечание', 'авторы статей А. Н. Апонасенко и др.'],
//   ['Ответственный редактор', 'А. Н. Апонасенко'],
// ]
