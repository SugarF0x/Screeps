import { findSpawn } from "../utils"

export const upgraderLogic = (creep: Creep) => {
  if (shouldSleep(creep)) return

  if (creep.store[RESOURCE_ENERGY] > 0) upgrade(creep)
  else resupply(creep)
}

const resupply = (creep: Creep) => {
  const spawn = findSpawn(creep.room)

  if (creep.withdraw(spawn, RESOURCE_ENERGY, creep.store.getFreeCapacity()) === ERR_NOT_IN_RANGE) creep.moveTo(spawn)
}

const upgrade = (creep: Creep) => {
  const controller = creep.room.controller
  if (!controller) throw new Error(`No controller found in room ${creep.room.name}`)

  if (creep.upgradeController(controller) === ERR_NOT_IN_RANGE) creep.moveTo(controller)
}

const shouldSleep = (creep: Creep) => {
  const creepFreeCapacity = creep.store.getFreeCapacity()
  const controllerProgress = creep.room.controller?.progress || 0
  const controllerTotalProgress = creep.room.controller?.progressTotal || 0

  return (controllerProgress >= controllerTotalProgress * 1.1) && creepFreeCapacity <= 0
}
