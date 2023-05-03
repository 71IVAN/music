import { Carousel } from '../Carousel/Carousel'

import './Shop.css'
export function Shop(){

  let productos=[{
        nombre:"Camisa",
        precio:850000 + "$",
        foto:"https://firebasestorage.googleapis.com/v0/b/music-2b7e1.appspot.com/o/ropa1.jpg?alt=media&token=250218f4-3588-4432-9e38-4f3c12972cb8",
        id:1

      },
      {
        nombre:"Camisa",
        precio:900000 + "$",
        foto:"https://firebasestorage.googleapis.com/v0/b/music-2b7e1.appspot.com/o/ropa2.jpg?alt=media&token=3bd38dde-a9a7-479a-9a35-310e8c9c4c12",
        id:2

        },
        {
          nombre:"Camiseta",
          precio:600000 + "$",
          foto:"https://firebasestorage.googleapis.com/v0/b/music-2b7e1.appspot.com/o/ropa1.jpg?alt=media&token=250218f4-3588-4432-9e38-4f3c12972cb8",
          id:3


        },
        {
          nombre:"Camisa",
          precio:500000 + "$",
          foto:"https://firebasestorage.googleapis.com/v0/b/music-2b7e1.appspot.com/o/ropa4.jpg?alt=media&token=9fe34da1-7d26-42b1-af19-4bd7568a1639",
          id:4


        },
        {
          nombre:"Camisa",
          precio:500000 + "$",
          foto:"https://firebasestorage.googleapis.com/v0/b/music-2b7e1.appspot.com/o/ropa1.jpg?alt=media&token=250218f4-3588-4432-9e38-4f3c12972cb8",
          id:5


        },
        {
          nombre:"Camisa",
          precio:700000 + "$",
          foto:"https://firebasestorage.googleapis.com/v0/b/music-2b7e1.appspot.com/o/nuevo4.jpg?alt=media&token=8d7be0ea-21c9-4a56-bf04-20d2aaf918ab",
          id:6

        },
       
        {
          nombre:"Camisa",
          precio:800000 + "$",
          foto:"https://firebasestorage.googleapis.com/v0/b/music-2b7e1.appspot.com/o/nuevo2.jpg?alt=media&token=ccb54d13-bb64-48f7-9069-43e258fbc468",
          id:8


        },
        {
          nombre:"Camisa",
          precio:700000 + "$",
          foto:"https://firebasestorage.googleapis.com/v0/b/music-2b7e1.appspot.com/o/ropa4.jpg?alt=media&token=9fe34da1-7d26-42b1-af19-4bd7568a1639",
          id:9


        },
        {
          nombre:"camisa",
          precio:900000 + "$",
          foto:"https://firebasestorage.googleapis.com/v0/b/music-2b7e1.appspot.com/o/nuevo1.jpg?alt=media&token=f3fdbc73-c201-451d-b3d5-270d7ac6be0a",
          id:10


        }

        ]
            return(
                <>
                <Carousel/>
                   
                  <div>
                    <h1 className='text-center  animate__animate__animated' >Tienda</h1>
                    <div className="row row-cols1- row-cols-md-3  g-1 mt-1 elemento">
                      {
                        productos.map(function(producto){
                          return(
                            <div key={producto.id}>
                              <div className="col">
                              <div className="card h-100 w-75 shadow mx-auto g-1">
                              <img src={producto.foto} alt="fotoShop" className="img-fluid w-100 bg-dark" />
                              <h3 className="text-center fw-bold">{producto.nombre}</h3>
                              <h4 className=" text-center">{producto.descripcion}</h4>
                              <h4 className="mt-1 text-center">{producto.precio}</h4>
                              <button type='submit' className='btn-sm'>Añadir</button>
                          
                            </div>

                              </div>

                            </div>
                          )
                        })
                      }

                    </div>
                  </div>
          
            
            </>
        )
    }