import api from "./api";

export const getInstanceById = async (instance: string, id: number) => {
  const response = await api.get(`${instance}/${id}/`);
  return response.data;
};
