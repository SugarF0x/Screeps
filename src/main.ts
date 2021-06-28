import { ErrorMapper } from "utils/ErrorMapper"
import { spawn } from "spawns"
import { dumpCreepMemory } from "utils"
import { logic } from "roles"

export const loop = ErrorMapper.wrapLoop(() => {
  spawn()
  logic()
  dumpCreepMemory()
});
