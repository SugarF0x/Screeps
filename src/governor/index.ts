import { findSpawn } from "utils"
import { placeRoadBlueprints } from "./roads"

export const governor = (room: Room) => {
  addConstructionToSpawnMemory(room)

  placeRoadBlueprints(room)
}

const addConstructionToSpawnMemory = (room: Room) => {
  const spawn = findSpawn(room)
  if (!spawn.memory.constructions) spawn.memory.constructions = {}
}
