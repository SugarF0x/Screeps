import { spawnTemplate } from "."

export const builderSpawnLogic = (room: Room) => {
  return spawnTemplate({
    role: 'builder',
    room
  })
}
