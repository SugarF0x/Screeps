import { findSpawn, getPointsInRadius } from "utils"
import { resupply } from "./resupplyLogic"

export const idleLogic = (creep: Creep): boolean => {
  const idlePosition = getIdlePosition(creep)

  if (creep.store.getFreeCapacity() > 0) resupply(creep)
  else if (!creep.pos.isEqualTo(idlePosition)) creep.moveTo(idlePosition.x, idlePosition.y)
  else return false

  return true
}

export const clearIdlePosition = (creep: Creep) => {
  if (creep.memory.idlePosition) delete creep.memory.idlePosition
}

const getIdlePosition = (creep: Creep) => {
  if (!creep.memory.idlePosition) creep.memory.idlePosition = findIdlePosition(creep)

  return creep.memory.idlePosition
}

const findIdlePosition = (creep: Creep): RoomPosition => {
  const spawn = findSpawn(creep.room)
  const positions = getPointsInRadius(spawn.pos, 3).map(pos => new RoomPosition(pos.x, pos.y, spawn.room.name))
  const validPositions = positions.filter(vPos => {
    if (!vPos.lookFor(LOOK_TERRAIN).includes('plain')) return false
    if (vPos.lookFor(LOOK_STRUCTURES).length) return false                                                    // noinspection RedundantIfStatementJS
    if (spawn.room
      .find(FIND_MY_CREEPS)
      .map(creep => creep.memory.idlePosition)
      .filter((cPos): cPos is RoomPosition => !!cPos)
      .filter(cPos => cPos.isEqualTo(vPos))
      .length
    ) return false

    return true
  })
  return validPositions[Math.floor(Math.random()) * validPositions.length]
}
