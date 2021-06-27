const WORKERS_REQUIRED = 3
const WORKER_BASE = [WORK, MOVE, CARRY]

export const workerSpawnLogic = () => {
  for (const roomName in Game.rooms) {
    const room = Game.rooms[roomName]

    const spawn = room.find(FIND_MY_SPAWNS)[0]
    if (!spawn) continue
    if (spawn.spawning) { displaySpawnText(spawn); continue }
    if (spawn.spawnCreep(WORKER_BASE, 'dry', { dryRun: true }) !== OK) continue

    const creeps = room.find(FIND_CREEPS)
    const workers = creeps.filter(creep => creep.memory?.role === 'worker')
    if (workers.length >= WORKERS_REQUIRED) continue

    const workerNames = workers.map(worker => worker.name)
    const newWorkerName = getAvailableWorkerName(workerNames)
    const memoryOptions = { memory: { role: 'worker', room: room.name, working: false } }
    spawn.spawnCreep(WORKER_BASE, newWorkerName, memoryOptions)
    displaySpawnText(spawn)
  }
}

const getAvailableWorkerName = (workerNames: string[]) => {
  for (let i=1; i<=99; i++) {
    const newName = `Worker-${i}`
    if (!workerNames.includes(newName)) return newName
  }

  throw new Error('Too many attempts at generating a worker name (99+). Likely - a memory leak.')
}

const displaySpawnText = (spawn: StructureSpawn) => {
  const positionOffset: RoomPosition = {
    ...spawn.pos,
    x: spawn.pos.x + 1,
    y: spawn.pos.y + 1
  }
  spawn.room.visual.text(`🛠️ worker`, positionOffset)
}
