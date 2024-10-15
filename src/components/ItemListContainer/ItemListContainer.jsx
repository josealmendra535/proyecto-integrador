const ItemListContainer = ( { saludo }) =>{

    const condicion = true
    const promesa = new Promise( (resolve, reject)=>{
        if(condicion){
            resolve("se resolvió la promesa")
        }else{
            reject("se rechazó la promesa")
        }
    })

    promesa.then( (respuesta)=> {
        console.log(respuesta)
    }).catch( (error) => {
        console.error(error)
    })

    return (
        <nav className="itemlistcontainer">
        <div>
            <h2>Bienvenidos a tu tienda favorita</h2>
        </div>
        </nav>
    )
}
export default ItemListContainer