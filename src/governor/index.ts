import { findSpawn } from "utils"
import { placeRoadBlueprints } from "./roads"

export const governor = () => {
  for (const roomName in Game.rooms) {
    const room = Game.rooms[roomName]
    addConstructionToSpawnMemory(room)

    placeRoadBlueprints(room)
  }
}

const addConstructionToSpawnMemory = (room: Room) => {
  const spawn = findSpawn(room)
  if (!spawn.memory.constructions) spawn.memory.constructions = {}
}
