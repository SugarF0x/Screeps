import { ErrorMapper } from "utils/ErrorMapper"
import { workerSpawnLogic } from "./spawn/worker"
import { dumpCreepMemory } from "./utils/dumpCreepMemory"

export const loop = ErrorMapper.wrapLoop(() => {
  workerSpawnLogic()
  dumpCreepMemory()
});
