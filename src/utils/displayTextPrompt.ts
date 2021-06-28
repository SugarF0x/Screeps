export const displayTextPrompt = (object: RoomObject, text: string) => {
  if (!object.room) throw new Error('Passed object does not possess room property')

  const positionOffset: RoomPosition = {
    ...object.pos,
    x: object.pos.x,
    y: object.pos.y - 1
  }
  object.room.visual.text(text, positionOffset)
}
