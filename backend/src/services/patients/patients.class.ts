import { Service, MemoryServiceOptions } from 'feathers-memory';
import { Application } from '../../declarations';

export class Patients extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<MemoryServiceOptions>, app: Application) {
    super(options);
  }
}
