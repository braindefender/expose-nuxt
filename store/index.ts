import { getAccessorType } from 'typed-vuex'

// Import all your submodules
import * as expose from '~/store/expose'
import * as local from '~/store/local'

// Keep your existing vanilla Vuex code for state, getters, mutations, actions, plugins, etc.
// ...

// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType = getAccessorType({
  modules: {
    expose,
    local,
  },
})
