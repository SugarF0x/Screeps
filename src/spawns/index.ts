export * from './worker'
export * from './upgrader'

import { workerSpawnLogic, upgraderSpawnLogic } from '.'

export const spawn = () => {
  for (const roomName in Game.rooms) {
    const room = Game.rooms[roomName]

    workerSpawnLogic(room)
    upgraderSpawnLogic(room)
  }
}
