import L from 'leaflet'

export class Mapa {
  constructor() {
    this.mapa = this.inicializarMapa()
    this.markers = new L.LayerGroup()
  }

  inicializarMapa() {
    // Inicializar y obtener la propiedad del mapa
    const map = L.map('mapa',{
      scrollWheelZoom:false,
      zoomOffset: -1
    }).setView([20.694448, -103.375751], 16)
    const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>'
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; ' + enlaceMapa + ' Contributors',
      maxZoom: 20,
    }).addTo(map)

    return map
  }

  obtenerDatos() {
    const pines = {
      resultados: [
        {
          latitude: '20.694448',
          longitude: '-103.375751',
          titulo: 'Icza',
          calle: 'Avenida Adolfo Lopez Mateos Norte 95 Italia Providencia, Guadalajara, Jalisco 44648',
        },
      ],
    }

    this.mostrarPines(pines.resultados)
  }

  mostrarPines(datos) {
    // limpio marker para mostrar otra busqueda
    this.markers.clearLayers()

    datos.forEach((dato) => {
      //destructurig para obtener las prop del obj
      const { latitude, longitude, titulo, calle } = dato

      // crear un globo de info
      const globo = L.popup().setContent(`
  <h3>${titulo} </h3>
  <p> Calle: ${calle}</p>
  `)
      // objeto de los markers
      const elpin = L.icon({
        iconUrl:
          'https://www.idmtest.com/style/img/ic-marker.svg',
        //shadowUrl: "leaf-shadow.png",

        iconSize: [50, 69], // size of the icon
        //shadowSize: [50, 64], // size of the shadow
        iconAnchor: [35, 45], // point of the icon which will correspond to marker's location
        //shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
      })

      //agregar el pin por obj
      // corchete porque es array
      const marker = new L.marker(
        [parseFloat(latitude), parseFloat(longitude)],
        { icon: elpin }
      ).bindPopup(globo)
      //agregamos cada pin al layer del constructor
      this.markers.addLayer(marker)
    })
    this.markers.addTo(this.mapa)
  }
}