const BASE_URL = "https://catfact.ninja";

const getResource = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  return await res.json();
};

export const getCats = async () => {
  const res = await getResource(`${BASE_URL}/breeds `);

  return res.data
}

