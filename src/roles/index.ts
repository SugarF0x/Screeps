export * from './worker'
export * from './upgrader'

import { workerLogic, upgraderLogic } from "."

export const logic = () => {
  for (const roomName in Game.rooms) {
    const room = Game.rooms[roomName]

    room.find(FIND_MY_CREEPS).forEach(creep => {
      switch(creep.memory.role) {
        case 'worker': return workerLogic(creep)
        case 'upgrader': return upgraderLogic(creep)
      }
    })
  }
}
