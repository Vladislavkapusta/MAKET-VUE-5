import { createStore } from 'pinta';

const allRecipesStore = createStore({
  state: {
    allRecipes: []
  },
  mutations: {
    setAllRecipes(state, recipes) {
      state.allRecipes = recipes;
    }
  }
});

const favoriteRecipesStore = createStore({
  state: {
    favoriteRecipes: []
  },
  mutations: {
    addToFavorites(state, recipe) {
      state.favoriteRecipes.push(recipe);
    },
    removeFromFavorites(state, index) {
      state.favoriteRecipes.splice(index, 1);
    },
    toggleWatched(state, index) {
      state.favoriteRecipes[index].watched = !state.favoriteRecipes[index].watched;
    }
  }
});

export { allRecipesStore, favoriteRecipesStore };
