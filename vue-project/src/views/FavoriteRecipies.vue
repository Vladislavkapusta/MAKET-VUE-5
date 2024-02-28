<template>
    <div>
      <select v-model="filter">
        <option value="All">All</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
      </select>
      <div v-for="(recipe, index) in filteredFavoriteRecipes" :key="index">
        <div>{{ recipe.name }}</div>
        <button @click="toggleWatched(index)">
          {{ recipe.watched ? 'Unwatch' : 'Watch' }}
        </button>
        <button @click="removeFromFavorites(index)">Remove from Favorites</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FavoriteRecipes',
    data() {
      return {
        filter: 'All',
      }
    },
    computed: {
      favoriteRecipes() {
        return this.$store.allRecipesStore.state.favoriteRecipes;
      },
      filteredFavoriteRecipes() {
        if (this.filter === 'All') {
          return this.favoriteRecipes;
        } else {
          return this.favoriteRecipes.filter(recipe => recipe.difficulty === this.filter);
        }
      }
    },
    methods: {
      removeFromFavorites(index) {
        this.$store.allRecipesStore.commit('removeFromFavorites', index);
      },
      toggleWatched(index) {
        this.$store.allRecipesStore.commit('toggleWatched', index);
      }
    }
  }
  </script>