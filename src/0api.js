// ==UserScript==
// @name         BCAL
// @namespace    https://boxcrittersmods.ga/authors/zizzle/
// @supportURL   http://discord.gg/D2ZpRUW
// @version      0.0.0.1
// @description  This is a cool mod
// @author       TumbleGamer,Zizzle
// @match        https://boxcritters.com/play/
// @match        https://boxcritters.com/play/?*
// @match        https://boxcritters.com/play/#*
// @match        https://boxcritters.com/play/index.html
// @match        https://boxcritters.com/play/index.html?*
// @match        https://boxcritters.com/play/index.html#*
// @run-at       document-start
// ==/UserScript==

const BC = {};
BC.api = (() => {

	function updateRoom(r, i, l) {
		//update room
		switch (i) {
			case "background":
				world.rooms[r].media.background = l
				client.loadedData.rooms[r].media.background = l

				break;
			case "foreground":
				world.rooms[r].media.foreground = l
				client.loadedData.rooms[r].media.foreground = l

				break;

			default:
				console.log("Room Media Not Found")
				// (add navmesh, etc later)
				break;
		}
		if (world.rooms[r].baseroom != undefined || null) {
			world.joinRoom(world.rooms[r].baseroom)
			setTimeout(function () { world.handleJoinRoom({ roomId: world.rooms[r].roomId, playerCrumbs: [client.makeCrumb(world.player)] }) }, 1000)


		} else {
			world.joinRoom(world.rooms[r].roomId)
		}
	}

	function joinRoomById(id) {
		if (world.rooms[id].baseroom != undefined || null) {
			world.joinRoom(world.rooms[id].baseroom)
			setTimeout(function () { world.handleJoinRoom({ roomId: world.rooms[id].roomId, playerCrumbs: [client.makeCrumb(world.player)] }) }, 1000)
		} else {
			world.joinRoom(world.rooms[id].roomId)
		}
	}

	return {
		updateRoom,
		joinRoomById
	}

})();