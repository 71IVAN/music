export function Carousel(){
    return(
        <>
        
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://firebasestorage.googleapis.com/v0/b/music-2b7e1.appspot.com/o/carrusel2.jpg?alt=media&token=c1bf7fea-d98a-4ebc-a8a6-f25893a00f5e" className="d-block w-100" alt="imagencity" height="600px" />
    </div>
    <div className="carousel-item">
      <img src="https://firebasestorage.googleapis.com/v0/b/music-2b7e1.appspot.com/o/carrusel1.jpg?alt=media&token=9bcbfce7-6bb3-4b2f-9950-3cdff8d6730e" className="d-block w-100" alt="imagencar" height="600px"/>
    </div>
    <div className="carousel-item">
      <img src="https://firebasestorage.googleapis.com/v0/b/music-2b7e1.appspot.com/o/carrusel3.jpg?alt=media&token=6faa36cc-6251-41b6-bcdf-f642c705dabd" className="d-block w-100" alt="imagenstore" height="600px"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </>
    )
}