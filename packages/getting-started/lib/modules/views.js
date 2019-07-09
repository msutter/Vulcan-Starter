import Movies from './collection.js';

Movies.addView('alphabetical', terms => ({
  options: {
    sort: { name: 1 }
  }
}));