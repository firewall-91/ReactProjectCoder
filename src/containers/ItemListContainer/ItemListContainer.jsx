import {useState, useEffect} from 'react'
import {  useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'
import { gFetch } from '../../helpers/gFetch'

// acciones  api -> resultado (asincrónico)

const ItemListContainer = ( { saludo = 'saludo por defecto' } ) => { 
    const [ products, setProduct ] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    console.log(id)
    
    useEffect(()=>{
        if (id) {
            gFetch()
            .then(data => setProduct(data.filter(prod => prod.categoria === id)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))      
            
        } else {
            gFetch()
            .then(data => setProduct(data))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))            
        }


    }, [id])
    
   
    return (
        <div >
        
            {   loading ? 
                    <h2>Cargando productos</h2> 
                :
                   <ItemList products={products} />
            }            
        
        </div>
    )
}

export default ItemListContainer