
export default function WhatIs() {
  return <div className="what-is" id="whatis" >
    <div className="center-wi d-flex flex-column align-items-center">
      <div className="title-wi">
        <h1>¿Que es Label GYM?</h1>
      </div>
      <div className="line w-75"></div>
    </div>
    <div className="info-wi justify-content-center d-flex mt-3 row">
      <div className="text-wi d-flex col-12 col-md-9">
        <h4 className="text-center">
          Somos un gimnasio que abrio hace 4 años.
          Nos localizamos en Buenos Aires, Argentina.
          Nuestro gym ofrece un entrenamiento excelente
          a un precio bastante economico y razonable. Tenemos
          unas reseñas bastantes positivas que aseguraran
          tu comodidad en nuestro gym.
        </h4>
      </div>
      <div className="img-wi col-7 col-md-3 " data-aos="fade-up">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkj3tdjRxM_sjZrH7B0JCJ6q8ZDEu84PiYKkb_P67wsG8OvnXy" alt="" />
      </div>
    </div>
  </div>
}