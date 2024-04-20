import useData from "./useData";
import { Platform } from "./useGame";

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
