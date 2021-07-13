newroom = {roomId: "Pizza",  name: "Pizza Place", width: 855, height: 480, startX: 440, startY: 380, startZ: 0, layout: {playground: [[]], height:480, width:885}, media: {background:"https://i.imgur.com/meyqL7K.png" , foreground:"" , music:"https://www.dl.dropboxusercontent.com/s/j30mu8q6f6tvkch/29.%20Charlies%20Here.mp3?dl=1" , navMesh:"https://i.imgur.com/OD7eE16.png", treasure:"https://i.imgur.com/m3YCOSh.png" , }, spritesheet:{}, triggers: [{hex:'ff0000',world:{joinRoom:'port'}}],}







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
