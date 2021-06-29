import { spawnTemplate } from "."

export const upgraderSpawnLogic = (room: Room) => {
  return spawnTemplate({
    role: 'upgrader',
    room
  })
}
