import { ref } from 'vue'
import URL from '../api/config'

const getData = () => {
  const data = ref([])
  const error = ref(null)
  const loader = ref(false)

  const load = async () => {
    try {
      loader.value = true
      const response = await fetch(URL)

      if (!response.ok) {
        throw new Error('no data available')
      }

      data.value = await response.json()
      loader.value = false
    } catch (err) {
      error.value = err.message
      console.warn(error.value)
      loader.value = false
    }
  }

  return { data, error, loader, load }
}

export default getData
