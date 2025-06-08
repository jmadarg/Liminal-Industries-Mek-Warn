fill ~-10 ~-10 ~-10 ~10 ~10 ~10 air replace minecraft:nether_portal
fill ~-10 ~-10 ~-10 ~10 ~10 ~10 air replace minecraft:obsidian
scoreboard players set @a[distance=..3] y 5
gamerule keepInventory true
gamerule doImmediateRespawn true
gamerule showDeathMessages false
kill @a[sort=nearest, limit=1, distance=..3]
gamerule keepInventory false
gamerule doImmediateRespawn false
gamerule showDeathMessages true

tellraw @a[distance=..3] {"text":"You tried to build a portal to ungenerated terrain.","color":"dark_purple"}
tellraw @a[distance=..3] {"text":"Build a portal from the overworld to the nether","color":"dark_purple"}
tellraw @a[distance=..3] {"text":"to ensure a successful connection.","color":"dark_purple"}