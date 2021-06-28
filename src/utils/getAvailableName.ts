export const getAvailableName = (creeps: Creep[], template: string) => {
  const names = creeps.map(creep => creep.name)
  for (let i=1; i<=99; i++) {
    const newName = `${template}-${i}`
    if (!names.includes(newName)) return newName
  }

  throw new Error('Too many attempts at generating a worker name (99+). Likely - a memory leak.')
}
