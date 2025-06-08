#tp @a[tag=!first] -1000 23 -1000

execute as @a[tag=!first] run function backrooms:starting_items
execute if entity @a[tag=!first] positioned -1000 23 -1000 run function backrooms:starting_room_new