export * from './worker'

import { workerSpawnLogic } from '.'

export const spawn = () => {
  for (const roomName in Game.rooms) {
    const room = Game.rooms[roomName]

    workerSpawnLogic(room)
  }
}
