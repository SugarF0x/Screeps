import { ErrorMapper } from "utils/ErrorMapper"
import { spawn } from "spawns"
import { dumpCreepMemory } from "utils"
import { logic } from "roles"
import { governor } from "governor"

export const loop = ErrorMapper.wrapLoop(() => {
  governor()
  spawn()
  logic()
  dumpCreepMemory()
});
