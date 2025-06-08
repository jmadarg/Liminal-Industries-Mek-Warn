// priority: 0

ServerEvents.tags('block', event => {

	event.add('kubejs:unbreakable', '#kubejs:block_sculk')
	event.add('kubejs:unbreakable', /^.*antiblock.*/)

	event.add('kubejs:ravager_blacklist', '#kubejs:unbreakable')

	event.add('minecraft:wither_immune', '#kubejs:ravager_blacklist')
	event.add('minecraft:dragon_immune', '#kubejs:ravager_blacklist')
	event.add('supplementaries:frame_block_blacklist', '#kubejs:ravager_blacklist')
	event.add('ae2:blacklisted/spatial', '#kubejs:ravager_blacklist')
	event.add('forge:relocation_unsupported', '#kubejs:ravager_blacklist')
	event.add('create:non_movable', '#kubejs:ravager_blacklist')

})

