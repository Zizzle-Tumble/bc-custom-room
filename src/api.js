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