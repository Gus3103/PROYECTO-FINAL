
let Fotos=new Array()

let sel =document.getElementById("CV")

let IdSel
let map

let Inicio = true

Fotos[0]="https://tse1.mm.bing.net/th?id=OIP.DqQp2MTPz9G8kcWeHoAj8gHaIv&pid=Api&P=0"
Fotos[1]="https://tse4.mm.bing.net/th?id=OIP.n0wpI28VCI5EHn6awWSnoQHaJ4&pid=Api&P=0"
Fotos[2]="https://tse3.mm.bing.net/th?id=OIP.WbAYmg48lrjPhGkFqXVjYwHaHa&pid=Api&P=0"
Fotos[3]="https://tse3.mm.bing.net/th?id=OIP.LkRxRn3HaDxXZj4yC9gmpgHaK7&pid=Api&P=0"
Fotos[4]="https://tse4.mm.bing.net/th?id=OIP._skic9Yp_JkoI-xu2V1Q5gHaHa&pid=Api&P=0"
Fotos[5]="https://tse4.mm.bing.net/th?id=OIP.WRUU9LJjtppdK4IIGLOO6AHaJo&pid=Api&P=0"
Fotos[6]="https://tse3.mm.bing.net/th?id=OIP.K_qQdQDBdZWQlGMQuKn8oQHaHa&pid=Api&P=0"
Fotos[7]="https://tse3.mm.bing.net/th?id=OIP.t6HgejtZ7Z7QwvS1JZy5jgHaIM&pid=Api&P=0"
Fotos[8]="https://tse2.mm.bing.net/th?id=OIP.9vOyPQoodPuGqliRCjXYHQAAAA&pid=Api&P=0"
Fotos[9]="https://tse2.mm.bing.net/th?id=OIP.9Tm405KInf8vxt84DIfHEwHaEo&pid=Api&P=0"



window.addEventListener("load",buscarCV)

sel.addEventListener("change",Actualizar)


function Actualizar(){
   
    document.getElementById("Imagen").innerHTML='<img id= "IMAGEN" style="width: 300px;max-height: 400px" src="'+Fotos[sel.selectedIndex]+'" alt ="Foto del CV" >'
    document.getElementById("Nombre").innerHTML=Datos[sel.selectedIndex].name
    document.getElementById("Calle").innerHTML=Datos[sel.selectedIndex].address.street
    document.getElementById("Numero").innerHTML=Datos[sel.selectedIndex].address.suite
    document.getElementById("Ciudad").innerHTML=Datos[sel.selectedIndex].address.city
    document.getElementById("Codigo").innerHTML=Datos[sel.selectedIndex].address.zipcode
    document.getElementById("Telefono").innerHTML=Datos[sel.selectedIndex].phone
    document.getElementById("Email").innerHTML=Datos[sel.selectedIndex].email
    document.getElementById("Website").innerHTML=Datos[sel.selectedIndex].website
    document.getElementById("Compañia").innerHTML=Datos[sel.selectedIndex].company.name
    document.getElementById("Slogan").innerHTML=Datos[sel.selectedIndex].company.catchPhrase
    document.getElementById("NombreCV").value=Datos[sel.selectedIndex].name
}
    


let Datos
function buscarCV(){

let Peticion=fetch("https://jsonplaceholder.typicode.com/users")

    .then(Respuesta =>Respuesta.json())

    .then(json=>{
        console.log(json)
        Datos=json
        console.log(Datos[0].name)
        let i =0
        Datos.forEach(element => {
            document.getElementById("CV").innerHTML+='<option class="Opcion" value="'+i+'">'+ Datos[i].name+'</option>'
           
            i=i+1
        });
        Actualizar()
    })

 
    
}

