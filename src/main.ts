import { ErrorMapper } from "utils/ErrorMapper"
import { workerSpawnLogic } from "spawns"
import { dumpCreepMemory } from "utils"
import { logic } from "roles"

export const loop = ErrorMapper.wrapLoop(() => {
  workerSpawnLogic()
  logic()
  dumpCreepMemory()
});
