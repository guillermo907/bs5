import React from 'react';

const ProductBanner = () =>{
    return (
        <div className="container-fluid bg-secondary bg-gradient text-white justify-content-center text-center p-5 tema">
            <h1>Producto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>$48,999.00</p>
            <button className="btn btn-dark m-2">Comprar</button> <br/>    
            <img className="p-2 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7L_ckBEP8hzkChkkAlM-tb76uo7A0ryGzbg&usqp=CAU" /> <br/>
            <a>Mas información</a> <br/>
        </div>
    );
}

export default ProductBanner;