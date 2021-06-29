import { displayTextPrompt, getAvailableName } from "utils"

const CREEPS_REQUIRED = 3
const CREEP_BASE = [WORK, MOVE, CARRY]

export const workerSpawnLogic = (room: Room) => {
  const spawn = room.find(FIND_MY_SPAWNS)[0]
  if (!spawn) return
  if (spawn.spawning) { displaySpawningText(spawn); return }
  if (spawn.spawnCreep(CREEP_BASE, 'dry', { dryRun: true }) !== OK) return

  const creeps = room.find(FIND_CREEPS, { filter: { memory: { role: 'worker' } } })
  if (creeps.length >= CREEPS_REQUIRED) return

  const newCreepName = getAvailableName(creeps, 'Worker')
  const memoryOptions = { memory: { role: 'worker', room: room.name, working: false } }
  spawn.spawnCreep(CREEP_BASE, newCreepName, memoryOptions)
  displaySpawningText(spawn)
}

const displaySpawningText = (spawn: StructureSpawn) => displayTextPrompt(spawn, `🛠️ Spawning worker`)
