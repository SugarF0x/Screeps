export const constructionLogic = (creep: Creep): boolean => {
  const sites = creep.room.find(FIND_MY_CONSTRUCTION_SITES)
  if (!sites.length) return false

  construct(creep, sites[0])
  return true
}

export const construct = (creep: Creep, site: ConstructionSite) => {
  if (creep.build(site) === ERR_NOT_IN_RANGE) creep.moveTo(site)
}
