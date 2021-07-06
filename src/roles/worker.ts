import { findProxy, findSpawn } from "utils"

export const workerLogic = (creep: Creep) => {
  if (shouldSleep(creep)) return

  if (creep.store.getFreeCapacity() > 0) harvest(creep)
  else deposit(creep)
}

const harvest = (creep: Creep) => {
  const proxy = findProxy(creep.room)

  if (creep.harvest(proxy) === ERR_NOT_IN_RANGE) creep.moveTo(proxy)
}

const deposit = (creep: Creep) => {
  const spawn = findSpawn(creep.room)

  if (creep.transfer(spawn, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) creep.moveTo(spawn)
}

const shouldSleep = (creep: Creep) => {
  const creepEnergyCapacity = creep.store.getFreeCapacity()
  const storedEnergy = creep.room.energyAvailable
  const maxEnergy = creep.room.energyCapacityAvailable
  const spawn = findSpawn(creep.room)
  const isInSpawnProximity = creep.pos.inRangeTo(spawn.pos, 2)

  return (storedEnergy === maxEnergy) && creepEnergyCapacity <= 0 && isInSpawnProximity
}


