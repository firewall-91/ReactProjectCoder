let obj = [
    {id: '1', name: 'Guitarra Fender Acustica', categoria: 'Cuerdas',stock: '10',price: '500',  foto:'https://cdn.shopify.com/s/files/1/0253/8618/8834/products/53d3d1e028a8_1280x.jpg'},
    {id: '2', name: 'Guitarra Fender Telecaster', categoria: 'Cuerdas',stock: '10',price: '350',  foto:'https://cdn.shopify.com/s/files/1/0266/8534/1738/products/0145212500-PLAYER-TELE-MN-3TS-1_700x700.png'},
    {id: '3', name: 'Bateria Pearl', categoria: 'Percusión',stock: '5',price: '1200',  foto:'https://expomusic.com.pe/wp-content/uploads/2022/01/Roadshow-WD-bronze.jpg'},
    {id: '4', name: 'Cuerdas Daddario XS', categoria: 'Accesorios',stock: '50',price: '30',  foto:'https://m.media-amazon.com/images/I/71MLTnibwCL._AC_SX522_.jpg'}
]
export const gFetch = (nro) => {
    return new Promise( (resolve, reject)=>{
        //acciones 
        const condition = true
        if (condition) {    
            setTimeout(()=>{
                resolve(obj )            
            }, 3000)
        } else {
            reject( 'Rechazado' )        
        }
    } )
}
