import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return (
        <div            
            style={{ marginLeft: 100}}
            className='col-md-3'
            // key={product.id}
        >    
            
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${product.name}`}
                </div>
                <div className="card-body">
                    <img src={product.foto} alt='' className='w-50' />
                   <h3>U$D {product.price}  </h3>                                                           
                </div>
        
                <div className="card-footer"> 
                    <Link to={`/detail/${product.id}`}> 
                        <button className="btn btn-outline-primary btn-block">
                            Detalle
                        </button>
                    </Link >                                                     
                </div>
            </div>
                            
            
        </div> 
    )
}

export default Item