import { ErrorMapper } from "utils/ErrorMapper"
import { spawn } from "spawns"
import { dumpCreepMemory } from "utils"
import { logic } from "roles"
import { governor } from "governor"

export const loop = ErrorMapper.wrapLoop(() => {
  for (const roomName in Game.rooms) {
    const room = Game.rooms[roomName]

    governor(room)
    spawn(room)
    logic(room)

    dumpCreepMemory()
  }
});
