// Initializes the `signups` service on path `/signups`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Signups } from './signups.class';
import createModel from '../../models/signups.model';
import hooks from './signups.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'signups': Signups & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/signups', new Signups(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('signups');

  service.hooks(hooks);
}
