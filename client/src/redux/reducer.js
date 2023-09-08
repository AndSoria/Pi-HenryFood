import {GET_RECIPES, GET_RECIPE_ID} from './actions'

const initialState={
    recipes: [],
    recipeId: [],
    
};



const rootReducer =(state=initialState, action)=>{
    switch(action.type){
        case GET_RECIPES:
            return {...state, recipes:action.payload}
        
        case GET_RECIPE_ID:
            return {...state,recipeId:action.payload}

        default: 
            return {...state};
    }
}

export default rootReducer;



// recipes: [{
//     "id":'12',
//     "name": "Spaghetti Carbonara",
//     "image": "spaghetti_carbonara.jpg",
//     "dishSummary": "Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.",
//     "healthScore": 7,
//     "instructions": [
//         "Boil pasta in salted water until al dente.",
//         "In a bowl, mix eggs, grated cheese, and black pepper.",
//         "Sauté pancetta until crispy.",
//         "Drain pasta and add to pancetta. Remove from heat.",
//         "Quickly add egg mixture and toss until creamy.",
//         "Serve immediately with additional cheese and black pepper."
//     ],
//     "diets": ["lacto ovo vegetarian"]
// },
// {
//     "name": "Quinoa Salad",
//     "image": "quinoa_salad.jpg",
//     "dishSummary": "Nutrient-packed salad with quinoa, vegetables, and a zesty dressing.",
//     "healthScore": 9,
//     "instructions": [
//         "Rinse quinoa under cold water.",
//         "Cook quinoa in vegetable broth until fluffy.",
//         "Chop cucumbers, tomatoes, and red onion.",
//         "Prepare a dressing with lemon juice, olive oil, and herbs.",
//         "Mix quinoa and veggies, drizzle with dressing, and toss well."
//     ],
//     "diets": ["gluten free", "vegetarian"]
// },

// {
//     "name": "Chickpea Curry",
//     "image": "chickpea_curry.jpg",
//     "dishSummary": "Flavorful curry made with chickpeas, tomatoes, and aromatic spices.",
//     "healthScore": 8,
//     "instructions": [
//         "Heat oil in a pan and sauté onions and garlic.",
//         "Add curry powder, cumin, and coriander. Cook until fragrant.",
//         "Stir in diced tomatoes and chickpeas.",
//         "Pour in coconut milk and simmer until flavors meld.",
//         "Season with salt and pepper. Serve with rice."
//     ],
//     "diets": ["vegan", "vegetarian"]
// },
// {
//     "name": "Salmon with Asparagus",
//     "image": "salmon_asparagus.jpg",
//     "dishSummary": "Baked salmon fillet served with roasted asparagus.",
//     "healthScore": 9,
//     "instructions": [
//         "Preheat the oven to 400°F (200°C).",
//         "Season salmon fillet with salt, pepper, and lemon juice.",
//         "Place salmon on a baking sheet lined with parchment paper.",
//         "Toss asparagus with olive oil, salt, and pepper.",
//         "Arrange asparagus around the salmon on the baking sheet.",
//         "Bake for 15-20 minutes or until salmon flakes easily.",
//         "Serve with a side of your choice."
//     ],
//     "diets": ["pescatarian"]
// },
// {
//     "name": "Mushroom Risotto",
//     "image": "mushroom_risotto.jpg",
//     "dishSummary": "Creamy risotto infused with earthy mushrooms and white wine.",
//     "healthScore": 7,
//     "instructions": [
//         "In a saucepan, sauté diced onion and garlic in butter.",
//         "Add Arborio rice and cook until translucent.",
//         "Deglaze with white wine and cook until mostly absorbed.",
//         "Add sliced mushrooms and cook until they release moisture.",
//         "Begin adding hot vegetable broth, one ladleful at a time.",
//         "Stir constantly and let each ladleful absorb before adding more.",
//         "Continue until rice is creamy and al dente.",
//         "Stir in grated Parmesan cheese and chopped parsley. Serve."
//     ],
//     "diets": ["lacto ovo vegetarian"]
// },
// {
//     "name": "Vegan Lentil Soup",
//     "image": "vegan_lentil_soup.jpg",
//     "dishSummary": "Hearty soup made with lentils, vegetables, and aromatic herbs.",
//     "healthScore": 9,
//     "instructions": [
//         "In a large pot, sauté onions, carrots, and celery in oil.",
//         "Add dried lentils, diced tomatoes, and vegetable broth.",
//         "Season with thyme, bay leaves, salt, and pepper.",
//         "Simmer until lentils and veggies are tender.",
//         "Remove bay leaves. Blend a portion of the soup for creaminess.",
//         "Return blended soup to the pot. Adjust seasoning if needed.",
//         "Serve with a drizzle of olive oil and fresh herbs."
//     ],
//     "diets": ["vegan"]
// },
// {
//     "name": "Grilled Chicken Salad",
//     "image": "grilled_chicken_salad.jpg",
//     "dishSummary": "Grilled chicken breast served on a bed of fresh greens and veggies.",
//     "healthScore": 8,
//     "instructions": [
//         "Marinate chicken breasts in olive oil, lemon juice, and herbs.",
//         "Preheat grill and cook chicken until fully cooked.",
//         "Slice chicken and set aside.",
//         "Toss mixed greens, cherry tomatoes, and cucumber.",
//         "Prepare a vinaigrette with balsamic vinegar and olive oil.",
//         "Arrange greens on plates, top with sliced chicken.",
//         "Drizzle vinaigrette over the salad. Enjoy!"
//     ],
//     "diets": ["gluten free"]
// },
// {
//     "name": "Gluten-Free Pancakes",
//     "image": "gluten_free_pancakes.jpg",
//     "dishSummary": "Fluffy pancakes made with gluten-free flour and topped with syrup.",
//     "healthScore": 7,
//     "instructions": [
//         "In a bowl, whisk together gluten-free flour, baking powder, and salt.",
//         "In another bowl, whisk together almond milk, egg, and vanilla.",
//         "Combine wet and dry ingredients and mix until smooth.",
//         "Preheat a non-stick skillet and lightly grease with oil or butter.",
//         "Pour batter onto the skillet to form pancakes.",
//         "Cook until bubbles form on the surface, then flip and cook until golden.",
//         "Serve pancakes warm with your favorite toppings."
//     ],
//     "diets": ["gluten free"]
// },
// {
//     "name": "Vegetable Stir-Fry",
//     "image": "vegetable_stir_fry.jpg",
//     "dishSummary": "Quick and colorful stir-fried vegetables with a soy-based sauce.",
//     "healthScore": 9,
//     "instructions": [
//         "Prepare your choice of vegetables: bell peppers, broccoli, carrots, etc.",
//         "Heat oil in a wok or large pan over high heat.",
//         "Add sliced garlic and ginger, stir-fry briefly.",
//         "Add vegetables and stir-fry until crisp-tender.",
//         "Prepare a sauce with soy sauce, sesame oil, and a touch of sugar.",
//         "Pour sauce over vegetables and stir-fry to combine.",
//         "Serve over steamed rice or noodles."
//     ],
//     "diets": ["vegan", "vegetarian"]
// },
// {
//     "name": "Beef Tacos",
//     "image": "beef_tacos.jpg",
//     "dishSummary": "Tacos filled with seasoned ground beef, salsa, and toppings.",
//     "healthScore": 7,
//     "instructions": [
//         "In a skillet, cook ground beef until browned. Drain excess fat.",
//         "Add diced onions and bell peppers. Sauté until softened.",
//         "Season with chili powder, cumin, paprika, and salt.",
//         "Warm corn tortillas on a hot skillet or in the oven.",
//         "Assemble tacos with beef, salsa, shredded cheese, and toppings.",
//         "Squeeze lime juice over tacos before serving."
//     ],
//     "diets": ["gluten free"]
// },
// {
//     "name": "Spinach and Feta Stuffed Chicken",
//     "image": "stuffed_chicken.jpg",
//     "dishSummary": "Chicken breasts stuffed with spinach and feta cheese, baked to perfection.",
//     "healthScore": 8,
//     "instructions": [
//         "Preheat oven to 375°F (190°C).",
//         "Season chicken breasts with salt, pepper, and garlic powder.",
//         "In a bowl, mix thawed spinach and crumbled feta.",
//         "Slice a pocket in each chicken breast and stuff with spinach mixture.",
//         "Secure with toothpicks and place on a baking sheet.",
//         "Bake for 25-30 minutes or until chicken is cooked through.",
//         "Remove toothpicks before serving."
//     ],
//     "diets": ["gluten free"]
// },
// {
//     "name": "Avocado Toast",
//     "image": "avocado_toast.jpg",
//     "dishSummary": "Simple and nutritious toast topped with mashed avocado.",
//     "healthScore": 9,
//     "instructions": [
//         "Toast slices of whole grain bread until crispy.",
//         "In a bowl, mash ripe avocados with salt, pepper, and lemon juice.",
//         "Spread mashed avocado generously over toasted bread.",
//         "Optional: Top with red pepper flakes, cherry tomatoes, or a fried egg."
//     ],
//     "diets": ["vegetarian"]
// },
// {
//     "name": "Greek Salad",
//     "image": "greek_salad.jpg",
//     "dishSummary": "Classic Greek salad with tomatoes, cucumbers, olives, and feta.",
//     "healthScore": 8,
//     "instructions": [
//         "Chop tomatoes, cucumbers, red onion, and bell peppers.",
//         "Toss vegetables with Kalamata olives and crumbled feta cheese.",
//         "Prepare a dressing with olive oil, lemon juice, oregano, and salt.",
//         "Drizzle dressing over salad and toss to combine.",
//         "Serve with a sprinkle of dried oregano and crusty bread."
//     ],
//     "diets": ["lacto ovo vegetarian"]
// },
// {
//     "name": "Berry Smoothie Bowl",
//     "image": "smoothie_bowl.jpg",
//     "dishSummary": "Thick and colorful smoothie bowl topped with fresh berries.",
//     "healthScore": 9,
//     "instructions": [
//         "Blend frozen mixed berries, banana, and almond milk until smooth.",
//         "Pour smoothie into a bowl and level the surface.",
//         "Top with sliced fresh berries, granola, and a drizzle of honey.",
//         "Optional: Add chia seeds, coconut flakes, or nut butter."
//     ],
//     "diets": ["vegetarian"]
// },
// {
//     "name": "Sushi Rolls",
//     "image": "sushi_rolls.jpg",
//     "dishSummary": "Homemade sushi rolls filled with your favorite ingredients.",
//     "healthScore": 8,
//     "instructions": [
//         "Prepare sushi rice by washing and cooking with rice vinegar, sugar, and salt.",
//         "Lay a sheet of nori on a bamboo rolling mat with the shiny side down.",
//         "Spread a thin layer of rice over the nori, leaving a margin at the top.",
//         "Add your choice of fillings: fish, vegetables, avocado, etc.",
//         "Roll tightly using the bamboo mat, pressing gently as you go.",
//         "Slice the roll into bite-sized pieces with a sharp knife.",
//         "Serve with soy sauce, wasabi, and pickled ginger."
//     ],
//     "diets": ["pescatarian"]
// },
// {
//     "name": "Ratatouille",
//     "image": "ratatouille.jpg",
//     "dishSummary": "Traditional French dish featuring a medley of roasted vegetables.",
//     "healthScore": 8,
//     "instructions": [
//         "Preheat oven to 375°F (190°C).",
//         "Slice eggplant, zucchini, and bell peppers into thin rounds.",
//         "Arrange the sliced vegetables in a baking dish in an alternating pattern.",
//         "Drizzle with olive oil and season with salt, pepper, and thyme.",
//         "Bake for 40-45 minutes or until vegetables are tender.",
//         "Optional: Top with fresh chopped herbs before serving."
//     ],
//     "diets": ["vegetarian"]
// },
// {
//     "name": "Chocolate Banana Smoothie",
//     "image": "chocolate_smoothie.jpg",
//     "dishSummary": "Indulgent smoothie made with ripe bananas and cocoa powder.",
//     "healthScore": 7,
//     "instructions": [
//         "Blend ripe bananas, almond milk, cocoa powder, and a touch of honey.",
//         "Add a handful of ice cubes and blend until smooth.",
//         "Pour into a glass and enjoy as a breakfast or dessert option.",
//         "Optional: Top with whipped cream or a sprinkle of cocoa nibs."
//     ],
//     "diets": ["lacto ovo vegetarian"]
// },
// {
//     "name": "Cauliflower Fried Rice",
//     "image": "cauliflower_fried_rice.jpg",
//     "dishSummary": "Healthy twist on fried rice using cauliflower rice and lots of veggies.",
//     "healthScore": 9,
//     "instructions": [
//         "Pulse cauliflower florets in a food processor to make cauliflower rice.",
//         "In a pan, sauté diced carrots, peas, bell peppers, and green onions.",
//         "Push veggies to the side and scramble eggs in the empty space.",
//         "Add cauliflower rice and soy sauce, stir-fry until heated through.",
//         "Season with ginger, garlic, and a drizzle of sesame oil.",
//         "Serve as a light and flavorful alternative to traditional fried rice."
//     ],
//     "diets": ["paleolithic", "vegetarian"]
// },
// {
//     "name": "Caprese Salad",
//     "image": "caprese_salad.jpg",
//     "dishSummary": "Refreshing salad with tomatoes, mozzarella, and fresh basil.",
//     "healthScore": 8,
//     "instructions": [
//         "Slice ripe tomatoes and fresh mozzarella into rounds.",
//         "Arrange the slices on a plate, alternating between tomatoes and mozzarella.",
//         "Tuck fresh basil leaves between the slices.",
//         "Drizzle with balsamic reduction or a high-quality olive oil.",
//         "Season with salt and freshly ground black pepper.",
//         "Serve as an appetizer or side dish."
//     ],
//     "diets": ["vegetarian"]
// },
// {
//     "name": "Oatmeal Breakfast Bowl",
//     "image": "oatmeal_bowl.jpg",
//     "dishSummary": "Nutritious oatmeal bowl topped with fruits, nuts, and seeds.",
//     "healthScore": 9,
//     "instructions": [
//         "Cook rolled oats with water or milk until creamy and thick.",
//         "Transfer oatmeal to a bowl and top with sliced bananas and berries.",
//         "Sprinkle with chia seeds, chopped nuts, and a drizzle of honey.",
//         "Optional: Add a dollop of Greek yogurt for extra creaminess."
//     ],
//     "diets": ["lacto ovo vegetarian"]
// }],