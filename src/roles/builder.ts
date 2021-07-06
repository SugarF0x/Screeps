import { findSpawn } from "utils"

export const builderLogic = (creep: Creep) => {
  if (shouldSleep(creep)) return

  const constructionsPending = creep.room.find(FIND_MY_CONSTRUCTION_SITES)
  if (!creep.store.getUsedCapacity() || !constructionsPending.length) resupply(creep)
  else construct(creep, constructionsPending[0])
}

const resupply = (creep: Creep) => {
  const spawn = findSpawn(creep.room)

  if (creep.withdraw(spawn, RESOURCE_ENERGY, creep.store.getFreeCapacity()) === ERR_NOT_IN_RANGE) creep.moveTo(spawn)
}

const construct = (creep: Creep, site: ConstructionSite) => {
  if (creep.build(site) === ERR_NOT_IN_RANGE) creep.moveTo(site)
}

const shouldSleep = (creep: Creep) => {
  const constructionsPending = creep.room.find(FIND_MY_CONSTRUCTION_SITES).length
  const creepEnergyCapacity = creep.store.getFreeCapacity()
  const spawn = findSpawn(creep.room)
  const isInSpawnProximity = creep.pos.inRangeTo(spawn.pos, 2)

  return creepEnergyCapacity <= 0 && isInSpawnProximity && !constructionsPending
}
