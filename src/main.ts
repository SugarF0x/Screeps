import { ErrorMapper } from "utils/ErrorMapper"
import { workerSpawnLogic } from "spawns"
import { dumpCreepMemory } from "utils"

export const loop = ErrorMapper.wrapLoop(() => {
  workerSpawnLogic()
  dumpCreepMemory()
});
