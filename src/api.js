const BIN_ID = '83ef935a4e807fa235ec';
const URL = `https://api.npoint.io/${BIN_ID}`;

const loadQuizData = async () => {
  try {
    const response = await fetch(URL);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
}

const loadedQuizData = await loadQuizData();

export default loadedQuizData;