import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "arrayCards";
  dataCard :any[]=[
  {
    cardTitle: "Titulo 1",
    description: "Descripcion 1",
    image: "https://img1.wallspic.com/previews/5/9/5/5/3/135595/135595-ilustracion_de_planeta_morado_y_negro-x750.jpg",

  },
  {
    cardTitle: "Titulo 2",
    description: "Descripcion 2",
    image: "https://phantom-marca.unidadeditorial.es/80dd4987b2f6a583228ecd10ffc27d62/resize/1320/f/jpg/assets/multimedia/imagenes/2022/04/12/16497792180427.jpg",
  },
  {
    cardTitle: "Titulo 3",
    description: "Descripcion 3",
    image: "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc",
  },
  {
    cardTitle: "Titulo 4",
    description: "Descripcion 4",
    image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/15C01/production/_106598098_gettyi33758.jpg",
  },
  {
    cardTitle: "Titulo 5",
    description: "Descripcion 5",
    image: "https://oasishoteles.com/blog/wp-content/uploads/2021/02/playa-caracol.jpg",
  },
  {
    cardTitle: "Titulo 6",
    description: "Descripcion 6",
    image: "https://www.fundacionaquae.org/wp-content/uploads/2021/12/fresno-e1639053075597.jpg",
  },
]
}
