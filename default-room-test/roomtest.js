



var BC = {




Room : function(name,roomId){
if(new.target){
//create custom room
  
  world.rooms.push({baseroom:"shack",roomId:roomId ,  name: name, width: 855, height: 480, startX: 440, startY: 380, startZ: 0, layout: {playground: [[]], height:480, width:885}, media: {background:"https://i.imgur.com/meyqL7K.png" , foreground:"" , music:"https://www.dl.dropboxusercontent.com/s/j30mu8q6f6tvkch/29.%20Charlies%20Here.mp3?dl=1" , navMesh:"https://i.imgur.com/OD7eE16.png", treasure:"https://i.imgur.com/m3YCOSh.png" , }, spritesheet:{}, triggers: [{hex:'ff0000',world:{joinRoom:'port'}}],})
  client.loadedData.rooms.push ({baseroom:"shack",roomId: roomId,  name: name, width: 855, height: 480, startX: 440, startY: 380, startZ: 0, layout: {playground: [[]], height:480, width:885}, media: {background:"https://i.imgur.com/meyqL7K.png" , foreground:"" , music:"https://www.dl.dropboxusercontent.com/s/j30mu8q6f6tvkch/29.%20Charlies%20Here.mp3?dl=1" , navMesh:"https://i.imgur.com/OD7eE16.png", treasure:"https://i.imgur.com/m3YCOSh.png" , }, spritesheet:{}, triggers: [{hex:'ff0000',world:{joinRoom:'port'}}],})
  world.player.x = world.rooms[world.rooms.length - 1].startX
  world.player.y = world.rooms[world.rooms.length - 1].startY
  setTimeout(function(){world.handleJoinRoom({roomId:world.rooms[world.rooms.length - 1].roomId, playerCrumbs:[client.makeCrumb(world.player)]})},1000)
  world.joinRoom(world.rooms[world.rooms.length - 1].baseroom)
  this.numid = world.rooms.length - 1
  this.id = world.rooms[world.rooms.length - 1].roomId
  this.baseroom = world.rooms[world.rooms.length - 1].baseroom
  this.UpdateRoom = function(r,i,l){
    BC.API.UpdateRoom(r,i,l)
  }
  this.JoinRoomByIdNum = function(id){
    BC.API.JoinRoomByIdNum(id)
  }
  

  
 } else{
 //manage existing room
  }
 },
  API:{
    UpdateRoom:function(r,i,l){
  //update room
  if (i == "background"){
    world.rooms[r].media.background = l
    client.loadedData.rooms[r].media.background = l
    
  }else if (i == "foreground"){
    world.rooms[r].media.foreground = l
    client.loadedData.rooms[r].media.foreground = l
    
}else{
  console.log("Room Media Not Found")
  // (add navmesh, etc later)
    
}
    if (world.rooms[r].baseroom != undefined || null){
      world.joinRoom(world.rooms[r].baseroom)
      setTimeout(function(){world.handleJoinRoom({roomId:world.rooms[r].roomId, playerCrumbs:[client.makeCrumb(world.player)]})},1000)
      
    
    }else{
      world.joinRoom(world.rooms[r].roomId)
    }
  },
         JoinRoomByIdNum:function(id){
    if (world.rooms[id].baseroom != undefined || null){
      world.joinRoom(world.rooms[id].baseroom)
      setTimeout(function(){world.handleJoinRoom({roomId:world.rooms[id].roomId, playerCrumbs:[client.makeCrumb(world.player)]})},1000)
    }else{
      world.joinRoom(world.rooms[id].roomId)
  }
 }

    
  }
}





  
    
    
    
    
