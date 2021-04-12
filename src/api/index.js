import axios from 'axios'

const searchSubjects = 'https://movie.douban.com/j/search_subjects'

export function top20 () {
  return axios.get(searchSubjects, {
    params: {
      type: 'movie',
      tag: '豆瓣高分',
      sort: 'rank',
      page_limit: 20,
      page_start: 0
    }
  })
}