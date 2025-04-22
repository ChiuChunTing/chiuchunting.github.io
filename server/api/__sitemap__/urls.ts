import { seriesList } from '@/assets/data/seriesList'
export default defineEventHandler(async () => {
  return seriesList.map(item => (
    {
      loc: `/series-${item.series}/all` ,
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date()
    }
  ))
});