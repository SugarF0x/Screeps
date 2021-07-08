export const repairLogic = (creep: Creep): boolean => {
  const sites = creep.room.find(FIND_MY_STRUCTURES)
  const roads = creep.room.find(FIND_STRUCTURES, {
    filter: object => object.structureType === 'road'
  })
  const targets = [...sites, ...roads].filter(object => object.hits < object.hitsMax)
  if (targets.length <= 0) return false

  repair(creep, targets[0])
  return true
}

export const repair = (creep: Creep, site: Structure) => {
  if (creep.repair(site) === ERR_NOT_IN_RANGE) creep.moveTo(site)
}
