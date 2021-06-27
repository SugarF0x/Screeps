import { ErrorMapper } from "utils/ErrorMapper"
import { dumpCreepMemory } from "./utils/dumpCreepMemory"

export const loop = ErrorMapper.wrapLoop(() => {
  dumpCreepMemory()
});
