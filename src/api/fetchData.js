import URL from './config'

const loadData = async () => {
  try {
    const response = await fetch(URL)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(`ERROR: ${error}`)
  }
}

const loadedData = await loadData()

export default loadedData
