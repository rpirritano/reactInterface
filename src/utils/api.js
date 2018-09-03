import { data } from './data.json'

export const fetchData = () => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}
