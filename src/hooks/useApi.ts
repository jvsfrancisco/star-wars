import useAsync from "./useAsync";
import { getInstanceById as getById } from "../services/getApi";

export default function useApi() {
  const {
    data,
    loading,
    error,
    act: getInstanceById,
  } = useAsync((instance, id) => getById(instance, id), false);

  return {
    data,
    loading,
    error,
    getInstanceById,
  };
}
