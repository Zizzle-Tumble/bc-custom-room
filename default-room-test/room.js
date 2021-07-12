 newroom = {roomId: "Pizza",  name: "Pizza Place", width: 885, height: 480, startX: 440, startY: 380, startZ: 0, layout: {playground: [[]], height:480, width:885}, media: {background:"https://i.imgur.com/P28O2Fd.png" , foreground:"" , music:"https://www.dropbox.com/s/j30mu8q6f6tvkch/29.%20Charlies%20Here.mp3?dl=0" , navMesh:"https://boxcritters.com/.attachments/4be07fdcf6b1114ffe9139624981afdb/eb7fb8f1/navmesh.png", treasure:"https://boxcritters.com/.attachments/1df74481e9db65f34145f08cbaa7dd5f/2efaa41d/mapserver.png" , }, spritesheet:{}, triggers: [],}







client.loadedData.rooms.push(newroom)
world.rooms.push(newroom)
joinnewroom = function(){

world.player.x = 440
world.player.y = 210
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
