execute as @e[type=marker,tag=light_destruction] at @s run setblock ~ ~ ~ minecraft:air

execute as @e[type=marker,tag=light_destruction] at @s unless block ~ ~-1 ~ minecraft:light run kill @s

execute as @e[type=marker,tag=light_destruction] at @s if block ~ ~-1 ~ minecraft:light run tp @s ~ ~-1 ~
