import { lazyLoad } from '@/utils'

export const Chart = lazyLoad(
  () => import('./chart'),
  (module) => module.Chart,
)
