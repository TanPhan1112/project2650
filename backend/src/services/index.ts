import { Application } from '../declarations';
import patients from './patients/patients.service';
import products from './products/products.service';
import signups from './signups/signups.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(patients);
  app.configure(products);
  app.configure(signups);
}
