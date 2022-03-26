<template>
  <div class="recipe">
    <router-link to="/">&lt; Back</router-link>
    <h1>{{ recipe.title }}</h1>
    <p class="desc">{{ recipe.description }}</p>
    <hr />
    <div class="ingredients">
      <h3>Ingredients</h3>
      <ul>
        <li v-for="(ingredient, i) in recipe.ingredients" :key="i">
          {{ ingredient }}
        </li>
      </ul>
    </div>
    <div class="method">
      <h3>Methods</h3>
      <ol>
        <li v-for="(step, i) in recipe.method" :key="i">
          {{ step }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeView",
  computed: {
    recipe() {
      return this.$store.state.recipes.find(
        (recipe) => recipe.slug === this.$route.params.slug
      );
    },
  },
};
</script>
<style scoped>
.recipe {
  padding: 1rem;
  max-width: 768px;
  margin: 0 auto;
}
.desc {
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}
hr,
h3 {
  margin-bottom: 1rem;
}
.ingredients {
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #081c33;
  border-radius: 0.5rem;
}
.ingredients ul li {
  list-style-position: inside;
  line-height: 1.4;
  margin-bottom: 1rem;
}
.method ol li {
  list-style-position: inside;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}
</style>
