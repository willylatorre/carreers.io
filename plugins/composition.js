import { onGlobalSetup, provide } from '@nuxtjs/composition-api'
import { provideCareers } from './careers'

export default () => {
  onGlobalSetup(() => {
    console.log('HLOBOBOBOB');
    provideCareers()
  })
}