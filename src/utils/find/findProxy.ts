export const findProxy = (room: Room) => {
  const proxy = room.find(FIND_SOURCES)[0]
  if (!proxy) throw new Error(`No source found in room ${room.name}`)
  return proxy
}
