export * from './worker'

import { workerLogic } from "."

export const logic = () => {
  for (const roomName in Game.rooms) {
    const room = Game.rooms[roomName]

    room.find(FIND_MY_CREEPS).forEach(creep => {
      switch(creep.memory.role) {
        case 'worker': return workerLogic(creep)
      }
    })
  }
}
