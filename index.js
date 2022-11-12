function newImage (src,left,bottom){
let greenCharacter = document.createElement('img')
greenCharacter.src = `${src}`
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = `${left}`
greenCharacter.style.bottom = `${bottom}`
document.body.append(greenCharacter)
}
//let pineTree = document.createElement('img')
//pineTree.src = 'assets/pine-tree.png'
//pineTree.style.position = 'fixed'
//pineTree.style.left = '450px'
//pineTree.style.bottom = '200px'
//document.body.append(pineTree)
newImage('assets/green-character.gif','100px','100px')
newImage( 'assets/pine-tree.png', '450px','200px')
newImage('assets/tree.png','200px','300px')
newImage( 'assets/pillar.png', '350px','100px')
newImage('assets/crate.png','150px','200px')
newImage( 'assets/well.png', '500px','425px')

function newItem (src,left,bottom){
    let sword = document.createElement('img')
    sword.src = `${src}`
    sword.position = 'fixed'
    sword.left =  `${left}`
    sword.bottom = `${bottom}`
    document.body.append(sword)
    sword.addEventListener('dblclick', function(){
        sword.remove()
    }) 
}

newItem('assets/sword.png' ,'500px','405px')
newItem('assets/sheild.png' ,'165px','185px')
newItem('assets/staff.png' ,'600px','100px')



