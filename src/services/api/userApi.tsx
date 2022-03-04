import api from "./api";

export async function getCharacterById(characterId: string) {
  const response = await api.get(`characters/${characterId}`);

  return response.data;
}
export async function getCharacterDetailedInfo(
  characterId: string,
  infoKey: string
) {
  const response = await api.get(`characters/${characterId}/${infoKey}`);
  return response.data;
}
