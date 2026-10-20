---
sidebar_position: 12
title: Developer API
---

# Developer API (26.2 Premium)

Structory exposes a public API for addons that need to inspect structures, subscribe to structure events or provide custom item integrations. Use the public facades rather than reaching into the internal managers.

## Structure access

```java
import me.mrbast.structory.api.StructoryAPI;

// Call after Structory has enabled.
var structures = StructoryAPI.structures();
var instances = StructoryAPI.instances();
var current = StructoryAPI.instance(instanceUuid); // Optional<StructureInstance>
```

`StructoryAPI.structure(String)` and `StructoryAPI.structure(NamespacedKey)` provide template lookups. `StructoryAPI.instance(UUID)` looks up a placed structure. Collection results are read-only snapshots.

## Events and addon lifecycle

The core facade provides:

- `StructoryAPI.subscribe(listener)` and `unsubscribe(listener)` for event handlers annotated with `@StructureEventHandler`.
- `StructoryAPI.registerAddon(addon)` and `unregisterAddon(id)` for managed addon lifecycles.
- `StructoryAPI.callEvent(event)` for dispatching structure events.
- `StructoryAPI.addons()` and `addonIds()` for registered addons.

Prefer managed addon registration when you need a clean shutdown. Don't register listeners before Structory has enabled.

## Premium item adapters

The Premium facade provides:

```java
import me.mrbast.structory.api.StructoryPremiumAPI;

var capabilities = StructoryPremiumAPI.dependencyCapabilities();
var loaders = StructoryPremiumAPI.dependencyLoaderIds();
var scheduler = StructoryPremiumAPI.schedulerSnapshot();
boolean folia = StructoryPremiumAPI.isFolia();
```

Implement `StructoryItemAdapter` to register a third-party item provider with `StructoryPremiumAPI.registerItemAdapter(adapter)`. Adapters need unique IDs; unregister with `unregisterItemAdapter(id)` when your addon is disabled.

`dependencyCapabilities()` reports which optional plugin integrations are **currently available**, not whether you should install them. `schedulerSnapshot()` is read-only diagnostic information.

## Scheduler safety

Do not mutate entities, chunks or inventories on arbitrary async threads. On Folia, entity and region ownership matters; use the appropriate scheduler rather than assuming Bukkit's global scheduler is always safe.

For implementation details and current API contracts, refer to the `StructoryAPI` and `StructoryPremiumAPI` source in the Premium repository.
