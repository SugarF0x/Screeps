import { capitalize, displayTextPrompt, getAvailableName } from "../utils"

export const spawnTemplate = ({
  amount = 1,
  body = [WORK, MOVE, CARRY],
  prompt,
  role,
  room
}: SpawnTemplateOptions): boolean => {
  if (!prompt) prompt = `🛠️ Spawning ${role}`

  const spawn = room.find(FIND_MY_SPAWNS)[0]
  if (!spawn) return false
  if (isSpawning(spawn, { role, prompt })) return false
  if (spawn.spawnCreep(body, 'dry', { dryRun: true }) !== OK) return false

  const creeps = room.find(FIND_CREEPS, { filter: { memory: { role: role } } })
  if (creeps.length >= amount) return false

  const newCreepName = getAvailableName(creeps, capitalize(role))
  const memoryOptions = { memory: { role: role, room: room.name, working: false } }
  spawn.spawnCreep(body, newCreepName, memoryOptions)
  displayTextPrompt(spawn, prompt)
  return true
}

export interface SpawnTemplateOptions {
  role: string
  room: Room
  amount?: number
  body?: BodyPartConstant[]
  prompt?: string
}

const isSpawning = (spawn: StructureSpawn, { role, prompt }: { role: string, prompt: string }) => {
  if (spawn.spawning) {
    if (spawn.spawning.name.toLowerCase().includes(role)) displayTextPrompt(spawn, prompt)
    return true
  }

  return false
}
