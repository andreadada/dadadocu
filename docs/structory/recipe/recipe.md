---
sidebar_position: 1
title: Introduction
---

# Introduction

> **Note:** This section is technically part of the [Crafting Option](../options/crafting.md), as it describes how crafting is triggered and validated.  
> However, since crafting is one of the core features of the plugin, and is based on how Recipes are defined, it has been given its own dedicated page for clarity and emphasis.


## What is a Recipe ?
A recipe is, as the name suggests, a Recipe, with a name and a list of groups.

It is composed by two important sections: [Ingredients](#ingredients-section) and [Results](#results-section)

--- 

## Recipe Configuration Fields

| Field         | Type                                | Description                                                                               | Default     |
|---------------|-------------------------------------|-------------------------------------------------------------------------------------------|-------------|
| `name`        | String                              | Unique identifier for the recipe                                                          | required    |
| `group`       | String / List of Strings            | One or more group keys to categorize the recipe, if it does not exists it will be created | `"DEFAULT"` |
| `ingredients` | [Ingredients](#ingredients-section) | List of ingredients required to craft the recipe                                          | empty       |
| `result`      | [Results](#results-section)         | List of results produced when the recipe is crafted                                       | empty       |


<details>
  <summary>Show YAML example</summary>

```yml
nether_star:
  name: nether_star
  ingredients:
    one:
      type: item
      material: WITHER_SKELETON_SKULL
    two:
      type: item
      material: WITHER_SKELETON_SKULL
    three:
      type: item
      material: WITHER_SKELETON_SKULL
  result:
    one:
      type: item
      offset: "0 0 0"
      item:
        material: NETHER_STAR
        model: 10101
```
</details>

--- 

## Ingredients Section

Each section inside the `ingredients` section will be registered as an Ingredient

<details>
  <summary>Show Ingredients YAML example</summary>

```yml
ingredients:
    one:
      type: item
      material: WITHER_SKELETON_SKULL
    two:
      type: item
      material: WITHER_SKELETON_SKULL
    three:
      type: item
      material: WITHER_SKELETON_SKULL
```

</details>

--- 

## Results Section

Each section inside the `results` section will be registered as a Result

<details>
  <summary>Show Results YAML example</summary>

```YAML
result:
    one:
      type: item
      offset: "0 0 0"
      item:
        material: NETHER_STAR
        model: 10101
```

</details>