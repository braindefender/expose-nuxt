import { GetterTree, ActionTree, MutationTree } from 'vuex'

import {
  Source,
  Dates,
  Info,
  ExposeSectionType,
  BookCardType,
  // Expose,
  // BookCardType,
} from '~/types/types'

const book1: BookCardType = {
  title:
    'Язык как средство отражения субкультуры молодежи: Ю. А. Петрова: Министерство науки и высшего образования Российской Федерации, Ростовский государственный экономический университет (РИНХ).',
  image: '/covers/cover1.jpg',
  annotation:
    'В словаре камней-самоцветов учтены минералы, горные породы, орагногенные образования и другие материалы, которые используются в ювелирном и декоративно-прикладном искусстве. Приведены необходимые сведения об их свойствах и месторождениях. В диагностической таблице обобщены свойства ювелир...',
  authors: null,
  year: '2019',
  publisher: 'ИКИ',
  pages: '234',
}

const book2: BookCardType = {
  title: 'Космический мусор: аспекты угрозы',
  image: '/covers/cover2.jpg',
  annotation:
    'В словаре камней-самоцветов учтены минералы, горные породы, орагногенные образования и другие материалы, которые используются в ювелирном и декоративно-прикладном искусстве. Приведены необходимые сведения об их свойствах и месторождениях. В диагностической таблице обобщены свойства ювелир...',
  authors: null,
  year: '2019',
  publisher: 'ИКИ',
  pages: '234',
}

const sections: ExposeSectionType[] = [
  {
    header: 'Вложенная категория',
    items: [
      {
        header: 'Вложенная категория',
        items: [
          {
            header: 'Первая часть категории',
            items: [book1, book2, book1],
            active: false,
          },
          {
            header: 'Вторая часть категории',
            items: [book1, book1, book2],
            active: false,
          },
        ],
        active: false,
      },
      {
        header: 'Вложенная категория',
        items: [
          {
            header: 'Первая часть категории',
            items: [book1, book2, book1],
            active: false,
          },
          {
            header: 'Вторая часть категории',
            items: [book1, book1, book2],
            active: false,
          },
        ],
        active: false,
      },
    ],
    active: false,
  },
  {
    header: 'Математика',
    items: [book1, book2, book2, book2, book1],
    active: false,
  },
]

export const state = () => ({
  title: 'Еженедельная выставка новых поступлений\nотделения ГПНТБ СО РАН' as string,
  image: '' as string,
  source: {
    index: 1,
    short: 'Отделение',
    full: 'Отделение ГПНТБ СО РАН',
    link: 'https://prometeus.nsc.ru/',
    image: '/images/source-1.jpg',
  } as Source,
  dates: {
    create: '2018-11-15',
    update: '2018-11-24',
    public: '2018-11-25',
    from: '2018-11-25',
    to: '2018-12-01',
  } as Dates,
  info: [
    {
      title: 'Отделение ГПНТБ СО РАН',
      link: 'http://spsl.nsc.ru',
      icon: 'web',
    },
    {
      title: 'branchconfhall@gpntbsib.ru',
      link: 'mailto:branchconfhall@gpntbsib.ru',
      icon: 'email',
    },
    {
      title: '+7 (383) 330 17 59',
      link: 'tel:+73833301759',
      icon: 'phone',
    },
  ] as Info[],
  sections,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {}

export const mutations: MutationTree<RootState> = {
  toggle(_, { element, to }) {
    element.active = to
  },
}

export const actions: ActionTree<RootState, RootState> = {}
