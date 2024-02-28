<template>
    <div>
      <input type="text" v-model="search" @keyup.enter="searchRecipes">
      <div v-for="(recipe, index) in allRecipes" :key="index">
        <div>{{ recipe.name }}</div>
        <button @click="addToFavorites(recipe)">Add to Favorites</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AllRecipes',
    data() {
      return {
        search: '',
        allRecipes: []
      }
    },
    methods: {
      async searchRecipes() {
        try {
          const response = await fetch(`API_URL/search?query=${this.search}`)
          const data = await response.json()
          this.allRecipes = data.recipes
        } catch (error) {
          console.error('Error searching recipes:', error)
        }
      },
      addToFavorites(recipe) {
        this.$store.allRecipesStore.commit('addToFavorites', recipe)
      }
    }
  }
  </script>