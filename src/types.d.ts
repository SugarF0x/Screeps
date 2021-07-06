export {}

// `global` extension samples
declare global {
  interface CreepMemory {
    role: string;
    room: string;
    working: boolean;
  }

  interface SpawnMemory {
    constructions: Partial<{
      proxy: boolean
    }>
  }

  interface Memory {
    uuid: number;
    log: any;
  }

  namespace NodeJS {
    interface Global {
      log: any;
    }
  }
}
