export const findSpawn = (room: Room) => {
  const spawn = room.find(FIND_MY_SPAWNS)[0]
  if (!spawn) throw new Error(`No spawn found in room ${room.name}`)
  return spawn
}
