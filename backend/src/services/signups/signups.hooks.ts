
import processSignup from '../../hooks/process-signup';
export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [processSignup()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
