export async function fetchData() {
    const response = await fetch('https://641baa189b82ded29d564288.mockapi.io/data');
    const data = await response.json();
    console.log(data);
    return data;
  }
