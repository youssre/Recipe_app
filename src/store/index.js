import { createStore } from "vuex";

export default createStore({
  state: {
    recipes: [
      {
        slug: "one",
        title: "Recipes Cooking Food",
        description: "lorem ipsom dolor lorem ipsom dolor",
        ingredients: [
          "1 tablespoon olive oil",
          "1 checken",
          "1 Rice",
          "1 Flour",
        ],
        method: [
          "1 tablespoon olive oil",
          "1 tablespoon olive oil",
          "1 tablespoon olive oil",
          "1 tablespoon olive oil",
        ],
      },
      {
        slug: "Two",
        title: "Koshary",
        description: "lorem ipsom dolor lorem ipsom dolor",
        ingredients: ["1 tablespoon olive oil", "Rice", "Spaketa"],
        method: [
          "1 tablespoon olive oil",
          "1 tablespoon olive oil",
          "1 tablespoon olive oil",
          "1 tablespoon olive oil",
        ],
      },
    ],
  },
  getters: {},
  mutations: {
    addRecipe(state, recipe) {
      state.recipes.push(recipe);
    },
  },
  actions: {},
  modules: {},
});
