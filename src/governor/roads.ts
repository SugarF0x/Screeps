import { findProxy, findSpawn } from "utils"

const placePriority = [
  proxy
]

export const placeRoadBlueprints = (room: Room) => {
  if (!room.find(FIND_MY_CREEPS, { filter: { memory: { role: 'builder' } } }).length) return

  for (const place of placePriority) {
    if (place(room)) break
  }
}

function proxy (room: Room): boolean {
  const spawn = findSpawn(room)
  const proxy = findProxy(room)
  const path = room.findPath(spawn.pos, proxy.pos)

  if (spawn.memory.constructions.proxy) return false

  for (const tile of path) room.createConstructionSite(tile.x, tile.y, STRUCTURE_ROAD)
  spawn.memory.constructions.proxy = true
  return true
}
