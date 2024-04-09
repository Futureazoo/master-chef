// priority: 100

function addFermenting(results, ingredients, processingTime, prefix) {
    processingTime = processingTime || 400;

    let recipe = {
        type: "createdieselgenerators:basin_fermenting",
        ingredients: solveIngredients(ingredients),
        processingTime: processingTime,
        results: solveResults(results)
    };
    if (prefix) recipe.prefix = prefix
    return recipe;
}
function addDistillation(results, ingredients, processingTime, heatRequirement) {
    processingTime = processingTime || 400;
    let recipe = {
        type: "createdieselgenerators:distillation",
        ingredients: solveIngredients(ingredients),
        processingTime: processingTime,
        results: solveResults(results)
    };
    if (heatRequirement) recipe.heatRequirement = heatRequirement
    return recipe;
}