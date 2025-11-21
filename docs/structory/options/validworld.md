---
sidebar_position: 1
title: ValidWorlds - 🔒 Premium
---



Let you whitelist worlds where the structure can be created (Even with Crate option)

---

Key: `validworlds`

## Field Explanation

| Parameter | Type            | Description                                                                       | Default   |
|-----------|-----------------|-----------------------------------------------------------------------------------|-----------|
| `worlds`  | List of Strings | Worlds where the structure is enabled                                             | null      |
| `notify`  | String          | Message sent to the player if he tries to build the structure in an invalid World | null      |


<details>
  <summary>Example</summary>

```YAML

options:
  validworlds:
    worlds:
      - "world1"
      - "world_the_nether"
    notify: "Invalid World Message"
```

</details>

