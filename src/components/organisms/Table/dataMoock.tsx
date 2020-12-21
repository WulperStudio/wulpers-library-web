import React from "react";
import Link from "../../icons/Link";

export const headCells = [
  {key: "posttitle", label: "Posttitle", disablePadding: true},
  {key: "status", label: "Status"},
  {key: "publishedDate", label: "Published date"},
  {key: "responsable", label: "Responsable"},
  {key: "shares", label: "Shares"},
  {key: "reach", label: "Reach"},
  {key: "views", label: "Views"},
  {key: "leads", label: "Leads"},
  {key: "winned", label: "Winned"},
  {key: "id", label: "Spread"},
]

export const formatRows = [
  {key: "posttitle", align: "center", disablePadding: true},
  {key: "status", align: "center", chip: true},
  {key: "publishedDate", align: "center"},
  {key: "responsable", align: "center", image: "image"},
  {key: "shares", align: "center"},
  {key: "reach", align: "center"},
  {key: "views", align: "center"},
  {key: "leads", align: "center"},
  {key: "winned", align: "center"},
  {key: "id", align: "center", button: <Link />, onClick:function (id: any){ alert(id)} },
]

export const dataRows = [
  {
    id: 1,
    posttitle:"Flipp, la aplicacion mas increible de todos los tiempos llego a Brasil",
    status:"Drafts",
    publishedDate:"10/04/20",
    responsable:"Lourdes Sanchez",
    shares:"1500",
    reach:"15k",
    views:"150k",
    leads:"8k",
    winned:"2k",
    image: "https://material-ui.com/static/images/avatar/1.jpg",
  },
  {
    id: 2,
    posttitle:"Flipp, la aplicacion mas increible de todos los tiempos llego a Brasil",
    status:"Drafts",
    publishedDate:"10/04/20",
    responsable:"Lourdes Sanchez",
    shares:"1500",
    reach:"15k",
    views:"150k",
    leads:"8k",
    winned:"2k",
    image: "https://material-ui.com/static/images/avatar/2.jpg",
  },
]

