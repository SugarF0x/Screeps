export {}

// `global` extension samples
declare global {
  interface CreepMemory {
    role: string;
    room: string;
    working: boolean;
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
