export const workerLogic = (creep: Creep) => {
  if (shouldSleep(creep)) return

  if (creep.store.getFreeCapacity() > 0) harvest(creep)
  else deposit(creep)
}

const harvest = (creep: Creep) => {
  const nearestSource = creep.room.find(FIND_SOURCES)[0]
  if (!nearestSource) throw new Error(`No source found in room ${creep.room.name}`)

  if (creep.harvest(nearestSource) === ERR_NOT_IN_RANGE) creep.moveTo(nearestSource)
}

const deposit = (creep: Creep) => {
  const spawn = getSpawn(creep)

  if (creep.transfer(spawn, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) creep.moveTo(spawn)
}

const shouldSleep = (creep: Creep) => {
  const creepEnergyCapacity = creep.store.getFreeCapacity()
  const storedEnergy = creep.room.energyAvailable
  const maxEnergy = creep.room.energyCapacityAvailable
  const spawn = getSpawn(creep)
  const isInSpawnProximity = creep.pos.inRangeTo(spawn.pos, 2)

  return (storedEnergy === maxEnergy) && creepEnergyCapacity <= 0 && isInSpawnProximity
}

function getSpawn(creep: Creep) {
  const spawn = creep.room.find(FIND_MY_SPAWNS)[0]
  if (!spawn) throw new Error(`No spawn found in room ${creep.room.name}`)
  return spawn
}
