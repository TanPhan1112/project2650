// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const { app, data } = context;

    if (!data.firstName) {
      throw new Error('A patient must have first name');
    }

    if (!data.lastName) {
      throw new Error('A patient must have last name');
    }

    if (!data.email) {
      throw new Error('A patient must have an email');
    }

    // The actual firstName
    const firstName = data.firstName
      // firstName can't be longer than 50 characters
      .substring(0, 50);

    // The actual lastName
    const lastName = data.lastName
      // lastName can't be longer than 50 characters
      .substring(0, 50);

    if (!data.country) {
      throw new Error('A patient must have a country');
    }

    if (!data.province) {
      throw new Error('A patient must have a province/state');
    }

    if (!data.postal) {
      throw new Error('A patient must have a postal/zip code');
    }

    if (!data.lowBloodPress) {
      throw new Error('A patient must have lowest systolic blood pressure in last year');
    }

    if (!data.highBloodPress) {
      throw new Error('A patient must have highest systolic blood pressure in last year');
    }

    if (data.lowBloodPress >= data.highBloodPress) {
      throw new Error('Lowest blood pressure entered must be lower than the highest blood pressure');
    }

    const email = await app.service('patients').find({
      query: {
        email: data.email
      }
    });

    // Throw an Error if this is a duplicate email
    if (email.total > 0) {
      throw new Error('Duplicate email');
    }

    // The actual country
    const country = data.country;

    // The actual province
    const province = data.province;

    // The actual postal
    const postal = data.postal;

    // Get rid of any stray properties
    context.data = {
      firstName,
      lastName,
      country,
      province,
      postal,
      email: data.email,
      lowBloodPress: data.lowBloodPress,
      highBloodPress: data.highBloodPress
    };

    return context;
  };
};
