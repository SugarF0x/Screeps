export * from './worker'
export * from './upgrader'
export * from './_template'

import { workerSpawnLogic, upgraderSpawnLogic } from '.'

export const spawn = () => {
  for (const roomName in Game.rooms) {
    const room = Game.rooms[roomName]

    if (workerSpawnLogic(room)) continue
    upgraderSpawnLogic(room)
  }
}
