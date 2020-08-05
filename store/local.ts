import { GetterTree, ActionTree, MutationTree } from 'vuex'

const expose = {
  title: 'Еженедельная выставка новых поступлений\nГПНТБ СО РАН',
  source: 'ГПНТБ СО РАН',
  dates: {
    public: '2018-12-15',
    create: '2018-11-15',
  },
}

export const state = () => ({
  catalogue: [expose, expose, expose, expose],
  collections: [],
  things: [] as string[],
  title: 'Expose title',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {}

export const mutations: MutationTree<RootState> = {}

export const actions: ActionTree<RootState, RootState> = {}
