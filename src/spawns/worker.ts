import { spawnTemplate } from "."

export const workerSpawnLogic = (room: Room) => {
  return spawnTemplate({
    amount: 3,
    role: 'worker',
    room
  })
}
