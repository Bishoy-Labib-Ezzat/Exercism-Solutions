/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) {
    return 'You forgot to set the timer.';
  }

  if (remainingTime === 0) {
    return 'Lasagna is done.';
  }

  return 'Not done, please wait.';
}

export function preparationTime(layers, averageTime = 2) {
  return layers.length * averageTime;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;

  for (const layer of layers) {
    if (layer === 'noodles') {
      noodles += 50;
    }

    if (layer === 'sauce') {
      sauce += 0.2;
    }
  }

  return {
    noodles,
    sauce,
  };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  const scaledRecipe = {};

  for (const ingredient in recipe) {
    scaledRecipe[ingredient] = recipe[ingredient] * (portions / 2);
  }

  return scaledRecipe;
}