import { constructionLogic } from "./constructionLogic"
import { clearIdlePosition, idleLogic } from "./idleLogic"
import { repairLogic } from "./repairLogic"
import { resupplyLogic } from "./resupplyLogic"

const logicPriority = [
  resupplyLogic,
  repairLogic,
  constructionLogic,
  idleLogic
]

export const builderLogic = (creep: Creep): boolean => {
  for (const logic of logicPriority)
    if (logic(creep)) {
      clearIdlePosition(creep)
      return true
    }
  return false
}
