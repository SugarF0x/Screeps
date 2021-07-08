import { findSpawn } from "utils"

export const resupplyLogic = (creep: Creep): boolean => {
  if (creep.store.getUsedCapacity() > 0) return false

  resupply(creep)
  return true
}

export const resupply = (creep: Creep) => {
  const spawn = findSpawn(creep.room)

  if (creep.withdraw(spawn, RESOURCE_ENERGY, creep.store.getFreeCapacity()) === ERR_NOT_IN_RANGE) creep.moveTo(spawn)
}
