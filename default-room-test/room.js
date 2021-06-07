 newroom = {
    "roomId": "Personal_Room",
    "name": "Personal Room",
    "width": 855,
    "height": 480,
    "startX": 0,
    "startY": 0,
    "startZ": 0,
    "startR": 225,
    "media": {
        "foreground": "https://i.imgur.com/lROyCIC.png",
        "background": "https://i.imgur.com/I3lpn7Z.png",
        "navMesh": "https://boxcritters.com/.attachments/c30c3a2e81c77a55b26645efea1911ec/cf4ead46/navmesh.png",
        "treasure": "https://boxcritters.com/.attachments/4f099741d8aabae67836e8382fd5ab59/aaa594de/treasure.png"
        
        //music coming soon.
    },
    "spriteSheet": {
        "images": [
            {}
        ],
        "framerate": 0,
        "frames": [
            [
                
            ]
        ],
        "animations": {
        
        }
    },
    "triggers": [],
    "layout": {
        "version": 2,
        "height": 480,
        "width": 855,
        "playground": []
    }
}






client.loadedData.rooms.push(newroom)
world.rooms.push(newroom)
joinnewroom = function(){
world.joinRoom("shack")

world.handleJoinRoom({roomId:newroom.roomId,playerCrumbs:[client.makeCrumb(world.player)]})

}
joinnewroom()

plzcon = function(){
joinconf = confirm("Do you want to enter personal room "+newroom.name+"? [Note:Players Can still see what you say!]")
if (joinconf == true){
joinnewroom() 
playrhide()
   } else {
 world.joinRoom("port")
  }
}
setTimeout(plzcon,500)
            
      
             
reload = function(){
  setTimeout(playrhide,1)

  
 }
             
             

 
 playrhide = function(){
 var RoomLoop;
 for (RoomLoop = 0; RoomLoop < world.room.playerCrumbs.length; RoomLoop++){
     if (world.stage.room.players[world.room.playerCrumbs[RoomLoop].i].visible == true && world.stage.room.players[world.room.playerCrumbs[RoomLoop].i].playerId != world.player.playerId && world.room.roomId == newroom.roomId){

      world.stage.room.players[world.room.playerCrumbs[RoomLoop].i].visible = false
      world.stage.room.players[world.room.playerCrumbs[RoomLoop].i].nickname.visible = false
     }
 }
 if (world.room.roomId == newroom.roomId){
     reload()
 } 
} 
