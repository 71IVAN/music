
export function Colaboraciones(){

  let duos=[{
         nombre:"J-cole",
         skil:"composición",
         foto:"https://firebasestorage.googleapis.com/v0/b/music-2b7e1.appspot.com/o/jcole.jpg?alt=media&token=a5b2785d-2551-4a22-a8ea-348b64a80af8",
         nacimiento:"28 de enero de 1985. Alemania - francfort",
         id:1
          },
          {
            nombre:"21 Savage",
            skil:"falsificador",
            foto:"https://firebasestorage.googleapis.com/v0/b/music-2b7e1.appspot.com/o/21savage.jpg?alt=media&token=3fa616b8-755d-4842-8b40-72fefa720622",
            nacimiento:"22 de octubre de 1992. Reino unido - Londres",
            id:2
        },
        {
          nombre:"Dolla $ign",
          skil:"Estilo libre",
          foto:"https://firebasestorage.googleapis.com/v0/b/music-2b7e1.appspot.com/o/dollasing.jpg?alt=media&token=9dc35ca0-de1e-46bc-8a1f-878057dc07fc",
          nacimiento:"13 de abril de 1982. EEUU - California",
          id:3
        },
        {
          nombre:"Young Thug",
          skil:"Conquistador",
          foto:"https://firebasestorage.googleapis.com/v0/b/music-2b7e1.appspot.com/o/young.jpg?alt=media&token=6c8768fd-2275-46bf-b4e7-4485f3a719df",
          nacimiento:"13 de abril de 1982. EEUU - Georgia",
          id:4
        }

]  
  
  return(
        <>
        <div className="banner2 animate__animated animate__fadeInUp ">
          <div className="row row-cols1- row-cols-md-2 g-3 ">
           {
            duos.map(function(duo){
              return(
                <div key={duo.id}>
                  <div className="col">
                    <div className="card h-300 w-100 shadow mx-auto g-1 ">
                       <h3 className="text-center fw-bold">{duo.nombre}</h3>
                       <h4 className="mt-3 text-center">{duo.nacimiento}</h4>
                       <h4 className="mt-1 text-center">{duo.skil}</h4>
                       <img src={duo.foto} alt="foto1" className="img_style" />
                       
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