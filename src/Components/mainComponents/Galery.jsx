

export default function Galery() {
  return (
    <div className="galery" id="galery" >
      <div className="my-3 center-g d-flex flex-column align-items-center">
        <div className="title-g">
          <h1>Nuestras fotos</h1>
        </div>
        <div className="line w-75"></div>
      </div>
      <div className="galery-images">
        <div className="row-x">
          <div className="image">
            <img
              src="https://www.purefitness.es/profesional/wp-content/uploads/maquinas-para-gimnasios-1024x683.jpg"
              alt=""
            />
          </div>
          <div className="image">
            <img
              src="https://media.istockphoto.com/id/1277242852/es/foto/sosteniendo-el-peso-y-sentado.jpg?b=1&s=612x612&w=0&k=20&c=X34Jljkj1zsOHl5fpV6ss93LN5vZ2ZjHoHKIZU_32OY="
              alt=""
            />
          </div>
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9uZG8lMjBkZSUyMGdpbW5hc2lvfGVufDB8fDB8fHww&w=1000&q=80"
              alt=""
            />
          </div>
        </div>

        <div className="row-x">
          <div className="image">
            <img
              src="https://img.freepik.com/foto-gratis/hombre-fuerte-entrenando-gimnasio_1303-23478.jpg"
              alt=""
            />
          </div>
          <div className="image">
            <img
              src="https://media.istockphoto.com/id/1322158059/es/foto/mancuerna-botella-de-agua-toalla-en-el-banco-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=6wc4q5s37IHzQh-2uAaaXROj2dSNWYpwFz6oHRQYKsQ="
              alt=""
            />
          </div>
          <div className="image">
            <img
              src="https://img.freepik.com/foto-gratis/mujer-porcion-hombre-gimnasio_23-2149627070.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
