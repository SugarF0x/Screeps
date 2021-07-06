export * from './_template'
export * from './worker'
export * from './upgrader'
export * from './builder'

import { workerSpawnLogic, upgraderSpawnLogic, builderSpawnLogic } from '.'

const spawnPriority: Array<(room: Room) => boolean> = [
  workerSpawnLogic,
  upgraderSpawnLogic,
  builderSpawnLogic
]

export const spawn = (room: Room) => {
  for (const spawnCreep of spawnPriority)
    if (spawnCreep(room)) break
}
