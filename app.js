// Dati di esempio dei punti di interesse 
// In una applicazione reale, questi dati verrebbero caricati da un'API
const locations = [
    {
        id: 1,
        title: "Verduras y naranjas Bou",
        type: "2016, 2019 y 2020",
        description: "-",

        coordinates: [-0.04135, 39.98506],
        details: {
            address: "Calle San Blas, 16",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: "" },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/01_VeN_Bou_01.jpg",
            "./images/01_VeN_Bou_02.jpg",
            "./images/01_VeN_Bou_03.jpg",    
            "./images/01_VeN_Bou_04.jpg",                              
            "./images/01_VeN_Bou_05.jpg"
        ]
    },
    {
        id: 2,
        title: "Fernando",
        type: "2019",
        description: "Fernando gestiona su punto de “venta a la porta” \
        en el casco histórico de Castellón. Frutas y verduras proceden de \
        la huerta familiar situada en la partida Brunella, \
        una parcela heredada y cultivada por generaciones. \
        La producción se realiza a escala familiar, con la colaboración \
        de su hermano, siguiendo prácticas agrícolas tradicionales. \
        El corrillo que a menudo se forma en frente de “la porta” \
        se configura como un espacio relacional que refuerza los vínculos \
        sociales del barrio. Este caso constituye un ejemplo significativo\
         de la continuidad entre el espacio rural y el urbano, donde \
         la venta directa actúa no solo como actividad económica, \
         sino también como dispositivo social que refuerza los vínculos \
         entre productor, territorio y comunidad local. <br>\
         [Entrevista realizada en 2025]\
        ",
        coordinates: [-0.03724, 39.98685],
        details: {
            address: "Calle de Mealla, 13",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/02_Fernando_01.jpg",
            "./images/02_Fernando_02.jpg"
          ]
    },
    {
        id: 3,
        title: "María Teresa",
        type: "2019",
        description: "-",
        coordinates: [-0.03634, 39.99229],
        details: {
            address: "Calle San Roque, 70",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/03_María_Teresa_01.jpg"
                   ] // Nessuna immagine aggiuntiva per questo esempio
    },
    {
        id: 4,
        title: "Francisca",
        type: " 2018",
        description: "-",
        coordinates: [-0.04051, 39.98874],
        details: {
            address: "Calle de Villaroig, 60",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/04_Francisca_01.jpeg"
                   ]
    },
    {
        id: 5,
        title: "María",
        type: " 2019",
        description: "-",
        coordinates: [-0.03691, 39.99364],
        details: {
            address: "Calle San Roque, 157",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/05_María_01.jpg"
                   ]
    },
    {
        id: 6,
        title: "Desconocido",
        type: " 2019",
        description: "-",
        coordinates: [-0.04417, 39.97881],
        details: {
            address: "Avenida de Valencia, 15",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/06_Desconocido_Valencia_01.jpg"
                   ]
    },
    {
        id: 7,
        title: "José Juan Sidro Tirado",
        type: " 2019,  2021",
        description: "En la partida de Taxida, José Juan cultiva clementinas \
        de la variedad Arrufatina y naranjas Navelate, en Coscollosa solo \
        clementinas de la variedad Clemenules. Es socio de la Cooperativa \
        San Isidro de Castellón, pero comenta que \"defiende\" sus cítricos \
        vendiendo a comerciantes y a la porta. [Entrevista realizada en 2021] \
",
        coordinates: [-0.03476, 39.99037],
        details: {
            address: "Calle Alcalde Tárrega, 24 c",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/07_José_Juan_01.jpg",
            "./images/07_José_Juan_02.jpg",
            "./images/07_José_Juan_03.jpg"
                   ]
    },
    {
        id: 8,
        title: "Desconocido",
        type: "2019",
        description: "",
        coordinates: [-0.03664, 39.98933],
        details: {
            address: "Calle San Felix 20",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/08_Desconocido_S_Felix_01.jpg"
                   ]
    },
    {
        id: 9,
        title: "Desconocido",
        type: "2019",
        description: "",
        coordinates: [-0.034108, 39.986668],
        details: {
            address: "Calle del Gobernador Bermúdez de Castro, 85",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/09_Desconocida_Gobernador_01.jpg"
                   ]
    },
    {
        id: 10,
        title: "Desconocido",
        type: "2019",
        description: "",
        coordinates: [-0.04126, 39.98489],
        details: {
            address: "Calle San Blas, 10",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/10_Desconocido_San_Blas_01.jpg"
                   ]
    },
    {
        id: 11,
        title: "Desconocido",
        type: "2020",
        description: "",
        coordinates: [-0.039105, 39.983114],
        details: {
            address: "Calle Ximenez, 5",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/11_Desconocido_Ximenez_01.jpg"
                   ]
    },
    {
        id: 12,
        title: "Desconocido",
        type: "2019",
        description: "",
        coordinates: [-0.04206611076548801, 39.9963241829765],
        details: {
            address: "Calle del Angel, 9",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/12_Desconocido_Angel_01.jpeg"
                   ]
    },
    {
        id: 13,
        title: "Desconocido",
        type: "2017",
        description: "",
        coordinates: [-0.04087, 39.99123],
        details: {
            address: "Calle de Jovellanos, 17",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/13_Desconocido_Jovellanos_01.jpeg"
                   ]
    },
    {
        id: 14,
        title: "Desconocido",
        type: "2021",
        description: "",
        coordinates: [-0.03623, 39.99182],
        details: {
            address: "Calle San Roque, 42",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/14_Desconocido_San_Roque_42_01.jpg",
            "./images/14_Desconocido_San_Roque_42_02.jpg"
                   ]
    },
    {
        id: 15,
        title: "Amparo",
        type: "2016 y 2023",
        description: "",
        coordinates: [-0.03977, 39.98999],
        details: {
            address: "Calle de Ximen Pérez de Arenós, 6",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/15_Amparo_01.jpg",
            "./images/15_Amparo_02.jpg",    
            "./images/15_Amparo_03.jpg"
                   ]
    },
    {
        id: 16,
        title: "Desconocido",
        type: "2017",
        description: "",
        coordinates: [-0.0375, 39.99312],
        details: {
            address: "Calle Almansa, 44",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/16_Desconocido_Almansa_01.jpg"
                   ]
    },
    {
        id: 17,
        title: "Joaquín Breva Mut",
        type: "2024",
        description: "Joaquín, como su padre y su abuelo, se dedica a la agricultura. \
        Produce y vende cítricos, nísperos y uvas. Con el fin de evitar la venta a bajo precio \
        a intermediarios, optó por defender su producción de cítricos (40 hanegadas) \
        mediante la modalidad de “venta a la porta”. Reside en una zona céntrica de Castellón y, \
        dada la presencia de numerosos vendedores que practicaban esta misma modalidad, \
        decidió alquilar un garaje en la calle Dr. Ferrán en 2023 y, posteriormente, \
        trasladar su actividad en un pequeño establecimiento comercial en la cercana avenida de Lidón. \
        [Entrevista realizada en 2024]",
        coordinates: [-0.033053, 39.989488],
        details: {
            address: "Avenida Virgen de Lidón, 20",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/17_Joaquín_01.jpg"
                   ]
    },
    {
        id: 18,
        title: "María Dolores (Marilo)",
        type: "2025",
        description: "Mariló vende los cítricos que cultiva su marido Paco en la finca de la familia, \
        de 20 anegadas (1,6 hectáreas) en la partida de La Magdalena. Pero no quiere seguir y ha \
        puesto en venta la finca. \
        [Entrevista realizada en 2025]",
        coordinates: [-0.03979, 39.98905],
        details: {
            address: "Calle de les Germanies, 1",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/18_María_Dolores_01.jpg",
            "./images/18_María_Dolores_02.jpg"
                   ]
    },
    {
        id: 19,
        title: "Lucía",
        type: "2024",
        description: "",
        coordinates: [ -0.04245, 39.99075],
        details: {
            address: " Calle de Albocácer, 2",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/19_Lucia_01.png",
            "./images/19_Lucia_02.jpg"
                   ]
    },
    {
        id: 20,
        title: "Catalina",
        type: "2025",
        description: "En el bajo de su casa, Catalina vende los productos que su marido Vicente \
        cultiva en su huerta del Grao de Castellón. En invierno, sobre todo cítricos y en verano \
        verduras y otro tipo de fruta. Cuando ellos se van de vacaciones, como al momento de la \
        foto, es su hija Lledó, acompañada de sus tres hijas, la que sigue vendiendo lo que recogen \
        de la huerta para que no haya desperdicio. Lledó comenta que esta es una actividad que hacían \
        también sus abuelos: la abuela Consuelo era la que llevaba la venta a la misma puerta. Comenta \
        también que no se pueden quejar de como va la actividad, los vecinos del barrio son muy felices \
        por abastecerse de productos que vengan directamente de la cercana huerta.\
        [Entrevista realizada en 2025]",
        coordinates: [-0.04055, 39.98197],
        details: {
            address: "Calle Trinidad, 108",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/20_Catalina_01.jpg",
            "./images/20_Catalina_02.jpg"
                   ]
    },
    {
        id: 21,
        title: "Desconocido",
        type: "2018",
        description: "",
        coordinates: [-0.04055, 39.98197],
        details: {
            address: "Calle Ximén Pérez d'Arenós, 16",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/21_Desconocido_Ximen_Perez_01.jpg"
                   ]
    },
    {
        id: 22,
        title: "Carmen Peris Gomez",
        type: "2025",
        description: "Carmen nació en 1930, hija de labradores de muchas generaciones; desde muy \
        joven ha trabajado en la agricultura. Es propietaria de una finca de cítricos situada en \
        la partida de Canet, actualmente cultivada por uno de sus hijos. Carmen comercializa de \
        forma directa, “a la porta”, entre los vecinos de su barrio, el excedente de la producción, \
        una vez distribuida la cosecha entre los miembros de su numerosa familia.\
        [Entrevista realizada en 2025]",
        coordinates: [-0.035665, 39.991318],
        details: {
            address: "Calle Ebanista Hervás, 7",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/22_Carmen_Peris_Gomez_01.jpg",    
            "./images/22_Carmen_Peris_Gomez_02.jpg",    
            "./images/22_Carmen_Peris_Gomez_03.jpg",
            "./images/22_Carmen_Peris_Gomez_04.jpg"
                   ]
    },
    {
        id: 23,
        title: "Rafa",
        type: "2025",
        description: "Rafa empezó su actividad en la década de 1990 cultivando cítricos y pequeñas \
        cantidades de hortalizas en sus fincas situadas en las partidas de Borrassa, \
        Bovalar (en la subpartida Penyeta Roja) y La Plana. Con la ayuda de sus hijos, \
        en la actualidad cultiva y vende su producción “a la porta” en el almacén del Camí de la Plana, \
        los domingos en el Mercado de la Plaza María Agustina, y realiza reparto directo a clientes.\
        [Entrevista realizada en 2025]",
        coordinates: [-0.035759, 39.994463],
        details: {
            address: "Camí de La Plana, 8",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/23_Rafa_01.jpg",    
            "./images/23_Rafa_02.jpg"
                   ]
    },
    {
        id: 24,
        title: "Juan",
        type: "2025",
        description: "Juan cultiva cítricos en 12 hanegadas repartidas en 4 fincas que eran propiedad \
        de su mujer Rosa María, quien falleció en 2021. Antes era ella quien vendía “a la porta”, \
        mientras él se dedicaba solo al cultivo, actualmente este se dedica a las dos actividades. \
        Cultiva diferentes variedades de clementinas así que su producción cubre la temporada de noviembre a marzo.\
        [Entrevista realizada en 2025]",
        coordinates: [-0.035444, 39.989388],
        details: {
            address: "Calle Sanahuja, 29",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/24_Juan_01.jpg"
                   ]
    },
    {
        id: 25,
        title: "Rafa",
        type: "2025",
        description: "Cultiva cítricos en la zona de secano.\
        [Entrevista realizada en 2025]",
        coordinates: [-0.037570, 39.992060],
        details: {
            address: " Calle de Almansa, 11",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/25_Rafa_01.jpg",
            "./images/25_Rafa_02.jpg",
            "./images/25_Rafa_03.jpg"
                   ]
    },
    {
        id: 26,
        title: "Pepe",
        type: "2025",
        description: "",
        coordinates: [-0.036631, 39.989914],
        details: {
            address: "Calle San Felix, 50",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/26_Pepe_01.jpg"
                   ]
    },
    {
        id: 27,
        title: "Desconocido",
        type: "2020",
        description: "",
        coordinates: [-0.036995, 39.991825],
        details: {
            address: "Calle San Miguel, 29",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/27_Desconocido_San_Miguel_01.jpg"
                   ]
    },
    {
        id: 28,
        title: "Juan Antonio Camañ",
        type: "2023",
        description: "Juan Antonio Camañ continúa la actividad que durante 27 años desarrolló su madre Tónica, \
        vendiendo los productos cultivados por la familia en la partida de Brunella. \
        Sus padres y abuelos, tanto por parte materna como paterna, eran agricultores. \
        Por la mañana vende “a la porta” y por la tarde trabaja el campo, manteniendo viva una tradición \
        agrícola de proximidad profundamente conectada a la vida del barrio.\
        [Entrevista realizada en 2023]",
        coordinates: [-0.03302506464302525, 39.99131677385039],
        details: {
            address: "Calle Sanz de Bremond, 22 a",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            ""
                   ]
    },
    {
        id: 29,
        title: "Juan Tomás Pérez Segarra",
        type: "2025",
        description: "Juan Tomás abre solo por las tardes, ya que por las mañanas \
        cuida su parcela, donde cultiva únicamente clementinas. \
        [Entrevista realizada en 2025]",
        coordinates: [-0.03302506464302525, 39.99131677385039],
        details: {
            address: "Calle Marqués de la Ensenada, 25",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/29_Juan_Tomás_Pérez_Segarra_01.jpg"
                   ]
    },
    {
        id: 30,
        title: "Agustín Agost Pascual",
        type: "2018",
        description: "Agustín ha cultivado cítricos toda su vida en sus huertas de Ramell, \
        donde tenía 7 hanegadas: la mitad de clementinas y la otra mitad de Valencia Late.\
        Antes del boom de las clementinas, cultivaba naranjas de las variedades Blanca y Fina. \
        También poseía fincas en Almalafa y Coscollosa. \
        [Entrevista realizada en 2018]",
        coordinates: [-0.03496597922044713, 39.99055046211849],
        details: {
            address: "Calle Alcalde Tarrega, 41",
            category: "Venta a la porta",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/30_Agustín_01.jpg"
                   ]
    }
];

// Configurazione della mappa
const mapConfig = {
    accessToken: 'pk.eyJ1IjoidmluY3BhdHJ1bm8iLCJhIjoiY21nejJpemY2MDJpMzk0cjNyOWY1cXduYSJ9.d_43r4VO_yjEJc4vHgcmgw',
    center: [-0.051301, 39.984624], // Centro di Castellón de la Plana (adattato per i dati forniti)
    zoom: 13,
    minZoom: 10,
    maxZoom: 18,
    style: 'mapbox://styles/vincpatruno/cjz2d38ip0f251ck40ow9t2wz'
    
};

// Variabili globali
let map;
let markers = [];
let currentLocation = null;
let currentPopup = null; // Aggiunto per tracciare il popup aperto
let supercluster = null; // Per la gestione del clustering
let currentHighlightedMarker = null; // elemento marker attualmente evidenziato
let highlightedLocationId = null; // ID della location attualmente evidenziata

// Evidenzia un marker corrispondente all'ID location senza aprire popup
function highlightMarker(locationId) {
    highlightedLocationId = locationId;
    
    // Rimuovi evidenziazione precedente
    try {
        if (currentHighlightedMarker && currentHighlightedMarker.markerElement) {
            const el = currentHighlightedMarker.markerElement;
            el.classList.remove('marker-highlight');
            // Ripristina dimensioni originali
            const size = currentHighlightedMarker.location ? currentHighlightedMarker.location.markerSize || 40 : 40;
            el.style.width = `${size}px`;
            el.style.height = `${size}px`;
        }
    } catch (e) { console.warn('Errore rimuovendo evidenziazione precedente', e); }

    // Trova il marker corrispondente
    const entry = markers.find(m => m.location && m.location.id === locationId);
    if (!entry || !entry.markerElement) {
        console.warn('Marker elemento non trovato per location ID:', locationId);
        return;
    }

    // Applica classe di evidenziazione e aumenta le dimensioni
    const el = entry.markerElement;
    const size = entry.location.markerSize || 40;
    const highlightedSize = Math.round(size * 1.3); // 30% più grande
    
    el.classList.add('marker-highlight');
    el.style.width = `${highlightedSize}px`;
    el.style.height = `${highlightedSize}px`;
    
    // Mantieni riferimento per poterla rimuovere in seguito
    currentHighlightedMarker = entry;
}


// Inizializzazione della mappa
function initMap() {
    mapboxgl.accessToken = mapConfig.accessToken;
    
    map = new mapboxgl.Map({
        container: 'map',
        style: mapConfig.style,
        center: mapConfig.center,
        zoom: mapConfig.zoom,
        minZoom: mapConfig.minZoom,
        maxZoom: mapConfig.maxZoom,


    });
    
    // Handler unificato per il resize della mappa
    const handleMapResize = (delay = 0) => {
        if (!map || !map.resize) return;
        if (delay) {
            setTimeout(() => { try { map.resize(); } catch (e) {} }, delay);
        } else {
            try { map.resize(); } catch (e) {} 
        }
    };

    // Resize dopo il caricamento della mappa e all'inizio
    map.on('load', () => handleMapResize());
    handleMapResize(100);
    handleMapResize(500);

    // Aggiungi i controlli di navigazione
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    
    // Aggiungi l'attribuzione obbligatoria in basso a destra
    map.addControl(new mapboxgl.AttributionControl({
        compact: false
    }), 'bottom-right');
    
    // Inizializza il clustering dei marker
    initializeClustering();
    
    // Popola la lista nella sidebar
    populateLocationList();
    
    // Aggiungi event listener ai pulsanti di controllo
    document.getElementById('zoomIn').addEventListener('click', () => {
        map.zoomTo(map.getZoom() + 1, { duration: 300 });
    });
    
    document.getElementById('zoomOut').addEventListener('click', () => {
        map.zoomTo(map.getZoom() - 1, { duration: 300 });
    });
    
    document.getElementById('resetView').addEventListener('click', () => {
        map.flyTo({
            center: mapConfig.center,
            zoom: mapConfig.zoom,
            duration: 1000
        });
    });

    // Esponi la mappa globalmente per eventuali utility e per trigger di resize
    window.map = map;

    // Ridimensiona la mappa poco dopo l'inizializzazione in caso il container fosse nascosto al momento del load
        handleMapResize(100);
        handleMapResize(500);    // Ridimensiona la mappa al cambiamento di dimensione finestra
    window.addEventListener('resize', () => handleMapResize());

    // Assicuriamoci che non ci sia una classe residua che nasconde la sidebar all'avvio
    document.body.classList.remove('sidebar-collapsed');

// Rimuovo le funzioni di debug che non sono più necessarie    // Helper: tenta ridimensionamenti ripetuti finché la canvas non abbia dimensioni > 0 o scada il numero di tentativi
    function ensureMapRendered(attempts, delayMs) {
        let tries = 0;
        const container = document.getElementById('map');
        const tick = () => {
            tries++;
            try {
                if (window.map && window.map.resize) window.map.resize();
            } catch (e) {}
            const canvas = container ? container.querySelector('canvas') : null;
            const cw = canvas ? canvas.width : 0;
            const ch = canvas ? canvas.height : 0;
            logMapSizes('ensureMapRendered try ' + tries);
            if ((cw > 0 && ch > 0) || tries >= attempts) {
                if (cw > 0 && ch > 0) console.info('map canvas ready', {cw, ch});
                else console.warn('map canvas still zero after attempts', {tries, cw, ch});
                return;
            }
            setTimeout(tick, delayMs);
        };
        tick();
    }

    // Mobile: toggle per mostrare/nascondere la sidebar
    const sidebarToggle = document.getElementById('sidebarToggle');
    const body = document.body;
    if (sidebarToggle) {
        // Aggiorna visibilità in base alla larghezza
        const mq = window.matchMedia('(max-width: 768px)');
        function updateToggleVisibility() {
            if (mq.matches) {
                sidebarToggle.style.display = 'inline-block';
            } else {
                sidebarToggle.style.display = 'none';
                // assicurati che la sidebar sia visibile su desktop
                body.classList.remove('sidebar-collapsed');
                // reset icon
                const ico = sidebarToggle.querySelector('i');
                if (ico) ico.className = 'fas fa-bars';
                // ridimensiona mappa
                if (map && map.resize) map.resize();
            }
        }
        updateToggleVisibility();
        mq.addListener(updateToggleVisibility);

        sidebarToggle.addEventListener('click', () => {
            const collapsed = body.classList.toggle('sidebar-collapsed');
            const ico = sidebarToggle.querySelector('i');
            if (ico) ico.className = collapsed ? 'fas fa-times' : 'fas fa-bars';
            // aspetta la transizione CSS e poi ridimensiona la mappa
            handleMapResize(250);
        });
    }
    
    // --- LOGICA TAB ---
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', handleTabSwitch);
    });
    
    // Seleziona il primo punto di default e attiva la tab "Lista"
    if (locations.length > 0) {
        selectLocation(locations[0].id);
        // Assicurati che la tab "Lista" sia attiva all'avvio (già fatto in HTML, ma per sicurezza)
        activateTab('list');
    } else {
        // Se non ci sono punti, attiva la tab "Lista"
        activateTab('list');
    }
    // --- FINE LOGICA TAB ---
}

// Gestione del cambio di tab
function handleTabSwitch(event) {
    const tabId = event.currentTarget.dataset.tab;
    
    // Determina quale sidebar contiene il pulsante cliccato
    const sidebar = event.currentTarget.closest('.sidebar-left') ? '.sidebar-left' : '.sidebar-right';
    
    // Rimuovi la classe 'active' solo dai pulsanti e contenuti della sidebar corrente
    document.querySelectorAll(`${sidebar} .tab-button`).forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll(`${sidebar} .tab-content`).forEach(content => content.classList.remove('active'));
    
    // Aggiungi la classe 'active' al pulsante e al contenuto selezionato
    event.currentTarget.classList.add('active');
    document.getElementById(`${tabId}Content`).classList.add('active');
}

// Funzione fallback: aggiungi marker direttamente senza clustering
function addMarkers() {
    console.log('Usando fallback addMarkers (senza clustering)');
    locations.forEach(location => {
        const markerElement = document.createElement('img');
        markerElement.src = location.markerImage;
        markerElement.alt = location.title || 'marker';
        markerElement.className = 'marker-img';
        const size = location.markerSize || 40;
        markerElement.style.width = `${size}px`;
        markerElement.style.height = `${size}px`;

        const marker = new mapboxgl.Marker(markerElement)
            .setLngLat(location.coordinates)
            .addTo(map);

        markerElement.addEventListener('click', () => {
            // Centra la mappa sul marker e applica uno zoom per evidenziare il punto
            map.easeTo({
                center: location.coordinates,
                zoom: 16,
                duration: 400
            });

            // Seleziona il punto e evidenzia il marker
            selectLocation(location.id);
            highlightMarker(location.id);
            activateTab('description');
        });

        markers.push({ marker, location, markerElement });
    });
}

// Inizializza il clustering usando Supercluster
function initializeClustering() {
    // Verifica che Supercluster sia disponibile
    if (typeof Supercluster === 'undefined') {
        console.warn('Supercluster non disponibile, usando fallback senza clustering');
        addMarkers();
        return;
    }

    console.log('Supercluster disponibile, inizializzazione clustering...');

    // Prepara i dati per il clustering: punti con proprietà location
    const points = locations.map((loc, idx) => ({
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [loc.coordinates[0], loc.coordinates[1]] },
        properties: { idx, locationId: loc.id }
    }));

    // Inizializza Supercluster con raggio di 40px e zoom massimo di 16
    supercluster = new Supercluster({ radius: 40, maxZoom: 16 });
    supercluster.load(points);

    // Aggiorna i marker e i cluster sulla mappa
    map.on('move', updateClusterMarkers);
    map.on('zoom', updateClusterMarkers);
    
    // Aggiorna subito
    updateClusterMarkers();
}

// Funzione per aggiornare i marker e i cluster sulla mappa
function updateClusterMarkers() {
    if (!supercluster || !map) return;

    try {
        const zoom = map.getZoom();
        const bounds = map.getBounds();
        
        // Ottieni i cluster e i marker per il viewport corrente
        const clusters = supercluster.getClusters([
            bounds.getWest(), bounds.getSouth(),
            bounds.getEast(), bounds.getNorth()
        ], Math.floor(zoom));

        // Rimuovi i marker attuali
        markers.forEach(m => m.marker.remove());
        markers = [];

        // Aggiungi i nuovi marker/cluster
        clusters.forEach((feature, index) => {
            const { geometry, properties } = feature;
            const [lng, lat] = geometry.coordinates;

            // Ritardo progressivo in millisecondi (5ms per ogni marker)
            const delayMs = index * 5;

            setTimeout(() => {
                if (properties.cluster) {
                    // È un cluster: mostra un marker con il conteggio
                    const clusterElement = document.createElement('div');
                    clusterElement.className = 'cluster-marker';
                    clusterElement.innerHTML = `
                        <div class="cluster-count">${properties.point_count}</div>
                    `;
                    clusterElement.style.width = `${30 + (properties.point_count / locations.length) * 20}px`;
                    clusterElement.style.height = clusterElement.style.width;
                    // Aggiungi animazione di apparizione
                    clusterElement.style.animation = 'markerPop 0.4s ease-out';

                    const marker = new mapboxgl.Marker(clusterElement)
                        .setLngLat([lng, lat])
                        .addTo(map);

                    // Click sul cluster per zoommare
                    clusterElement.addEventListener('click', () => {
                        const expansionZoom = supercluster.getClusterExpansionZoom(properties.cluster_id);
                        map.easeTo({
                            center: [lng, lat],
                            zoom: expansionZoom,
                            duration: 400
                        });
                    });

                    markers.push({ marker, location: null, isCluster: true });
                } else {
                    // È un singolo marker: mostra l'immagine del marker
                    const locationIdx = properties.idx;
                    const location = locations[locationIdx];
                    if (!location) {
                        console.warn('Location non trovata per idx:', locationIdx);
                        return;
                    }

                    const markerElement = document.createElement('img');
                    markerElement.src = location.markerImage;
                    markerElement.alt = location.title || 'marker';
                    markerElement.className = 'marker-img';
                    const size = location.markerSize || 40;
                    markerElement.style.width = `${size}px`;
                    markerElement.style.height = `${size}px`;
                    // Aggiungi animazione di apparizione
                    markerElement.style.animation = 'markerPop 0.4s ease-out';

                    const marker = new mapboxgl.Marker(markerElement)
                        .setLngLat([lng, lat])
                        .addTo(map);

                    markerElement.addEventListener('click', () => {
                        // Centra la mappa sul marker e applica uno zoom per evidenziare il punto
                        map.easeTo({
                            center: [lng, lat],
                            zoom: 16,
                            duration: 400
                        });

                        // Seleziona il punto e evidenzia il marker
                        selectLocation(location.id);
                        highlightMarker(location.id);
                        activateTab('description');
                    });

                    markers.push({ marker, location, markerElement });
                }
            }, delayMs);
        });

        // Riapplica evidenziazione se è stata impostata
        if (highlightedLocationId) {
            setTimeout(() => {
                highlightMarker(highlightedLocationId);
            }, 100);
        }
    } catch (error) {
        console.error('Errore durante l\'aggiornamento dei cluster:', error);
    }
}

// Funzione helper per attivare una tab
function activateTab(tabId) {
    // Per il tab 'list', attiva solo nella sidebar sinistra
    if (tabId === 'list') {
        document.querySelectorAll('.sidebar-left .tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.sidebar-left .tab-content').forEach(content => content.classList.remove('active'));
        
        const btn = document.querySelector(`.sidebar-left .tab-button[data-tab="list"]`);
        const content = document.getElementById(`${tabId}Content`);
        if (btn) btn.classList.add('active');
        if (content) content.classList.add('active');
    } else {
        // Per 'description' e 'images', attiva solo nella sidebar destra
        console.log('activateTab: tabId=', tabId);
        const rightSidebar = document.querySelector('.sidebar-right');
        console.log('sidebar-right trovata:', rightSidebar);
        
        if (rightSidebar) {
            const computed = window.getComputedStyle(rightSidebar);
            console.log('sidebar-right display:', computed.display, 'visibility:', computed.visibility, 'opacity:', computed.opacity);
        }
        
        const tabsContainer = document.querySelector('.sidebar-right .sidebar-tabs');
        console.log('sidebar-tabs trovato:', tabsContainer);
        if (tabsContainer) {
            const computed = window.getComputedStyle(tabsContainer);
            console.log('sidebar-tabs display:', computed.display, 'visibility:', computed.visibility);
        }
        
        const allButtons = document.querySelectorAll('.sidebar-right .tab-button');
        console.log('tab-button nella sidebar-right trovati:', allButtons.length, allButtons);
        
        document.querySelectorAll('.sidebar-right .tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.sidebar-right .tab-content').forEach(content => content.classList.remove('active'));
        
        const btn = document.querySelector(`.sidebar-right .tab-button[data-tab="${tabId}"]`);
        const content = document.getElementById(`${tabId}Content`);
        console.log('btn trovato:', btn, 'content trovato:', content);
        
        if (btn) {
            btn.classList.add('active');
            const computed = window.getComputedStyle(btn);
            console.log('tab-button dopo add active - display:', computed.display);
        }
        if (content) content.classList.add('active');
    }
}

// Popola la lista dei punti di interesse nella sidebar
function populateLocationList() {
    const locationList = document.getElementById('locationList');
    const locationCount = document.getElementById('locationCount');
    
    if (locations.length === 0) {
        locationList.innerHTML = '<div class="empty-state"><i class="fas fa-map-marker-alt"></i><p>Nessun punto di interesse trovato</p></div>';
        locationCount.textContent = '0 punti';
        return;
    }
    
    locationList.innerHTML = '';
    
    locations.forEach(location => {
        const item = document.createElement('div');
        item.className = 'location-item';
        item.id = `location-${location.id}`;
        
        item.innerHTML = `
            <div class="location-icon">
                <img src="${location.markerImage}" alt="${location.title}" class="location-marker-img">
            </div>
            <div class="location-info">
                <h3>${location.title}</h3>
                <p>${location.type}</p>
            </div>
        `;
        
        item.addEventListener('click', () => {
            // Al click sulla lista, apri il popup e centra la mappa
            handleListItemClick(location.id);
        });
        locationList.appendChild(item);
    });
    
    locationCount.textContent = `${locations.length} punti`;
}

// Seleziona un punto di interesse
/**
 * Funzione principale per selezionare un punto e aggiornare la sidebar.
 * @param {number} locationId - ID del punto selezionato.
 */
function selectLocation(locationId) {
    currentLocation = locations.find(loc => loc.id === locationId);
    
    if (!currentLocation) {
        console.warn(`Location con ID ${locationId} non trovata`);
        return;
    }
    
    console.log('selectLocation chiamato per:', currentLocation.title);
    
    // Aggiorna la classe attiva nella lista
    document.querySelectorAll('.location-item').forEach(item => {
        item.classList.remove('active');
    });
    const selectedItem = document.getElementById(`location-${locationId}`);
    if (selectedItem) {
        selectedItem.classList.add('active');
        // Scrolla l'elemento selezionato in vista nella lista
        selectedItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    // Aggiorna il contenuto della tab "Descrizione"
    console.log('Aggiornando tab descrizione...');
    updateDescriptionTab();
    
    // Aggiorna il contenuto della tab "Immagini"
    console.log('Aggiornando tab immagini...');
    updateImagesTab();
}

/**
 * Gestisce il click sul marker: seleziona il punto e apre la tab descrizione.
 * @param {number} locationId - ID del punto.
 */
function handleMarkerClick(locationId) {
    selectLocation(locationId);
    activateTab('description');
}

/**
 * Gestisce il click sull'elemento della lista: seleziona il punto, apre il popup e centra la mappa.
 * @param {number} locationId - ID del punto.
 */
function handleListItemClick(locationId) {
    const location = locations.find(loc => loc.id === locationId);
    if (!location) return;

    console.log('handleListItemClick per:', location.title);
    
    // Debug: Check if tabs-left still exists
    const tabsLeft = document.querySelector('.sidebar-tabs.tabs-left');
    console.log('tabs-left esiste:', tabsLeft, 'visibile:', tabsLeft ? window.getComputedStyle(tabsLeft).display : 'N/A');

    // 1. Seleziona il punto (aggiorna sidebar)
    selectLocation(locationId);

    // 2. Centra la mappa sul punto
    map.flyTo({
        center: location.coordinates,
        zoom: 15,
        duration: 1000
    });

    // 3. Evidenzia il marker corrispondente invece di aprire il popup
    highlightMarker(locationId);
    
    // 4. Attiva il tab descrizione nella sidebar destra (sia desktop che mobile)
    activateTab('description');
    
    // give map a moment to animate and then ensure correct sizing
    if (map && map.resize) {
        setTimeout(() => map.resize(), 250);
    }
}

/**
 * Apre il popup sulla mappa per la location specificata.
 * @param {object} location - L'oggetto location da visualizzare.
 */
function openPopup(location) {
    // Chiudi il popup precedente se esiste
    if (currentPopup) {
        currentPopup.remove();
    }

    // Crea il contenuto del popup
    const popupContent = `
        <div class="popup-content">
            <h3>${location.title}</h3>
            <p>${location.type}</p>
            <button class="popup-button" onclick="selectLocation(${location.id}); activateTab('description');">
                Ver detalles
            </button>
        </div>
    `;

    // Crea il popup
    currentPopup = new mapboxgl.Popup({ offset: 25, closeButton: false })
        .setLngLat(location.coordinates)
        .setHTML(popupContent)
        .addTo(map);
}

// Aggiorna il contenuto della tab "Descrizione"
function updateDescriptionTab() {
    const detailTitle = document.getElementById('detailTitle');
    const detailType = document.getElementById('detailType');
    const detailBody = document.getElementById('detailBody');
    
    console.log('updateDescriptionTab: detailTitle=', detailTitle, 'detailType=', detailType, 'detailBody=', detailBody);
    
    if (!detailTitle || !detailType || !detailBody) {
        console.error('Elementi della sidebar destra non trovati!');
        return;
    }
    
    if (!currentLocation) {
        detailTitle.textContent = "Seleziona un Punto";
        detailType.textContent = "Nessun punto selezionato";
        detailBody.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-hand-point-left"></i>
                <p>Clicca su un punto sulla mappa o selezionalo dalla lista per visualizzarne i dettagli.</p>
            </div>
        `;
        return;
    }
    
    console.log('Aggiornamento descrizione per:', currentLocation.title);
    detailTitle.textContent = currentLocation.title;
    detailType.textContent = currentLocation.type;
    
    let detailHTML = `
        <p>${currentLocation.description}</p>
        <div class="detail-field">
            <strong>📍 DIRECCIÓN</strong>
            <span>${currentLocation.details.address}</span>
        </div>
        <div class="detail-field">
            <strong>🏷️ CATEGORÍA</strong>
            <span>${currentLocation.details.category}</span>
        </div>
        
        <!-- <div class="detail-field">
            <strong>📊 STATO</strong>
            <span>${currentLocation.details.status}</span>
        </div>
        <div class="detail-field">
            <strong>📧 CONTATTO</strong>
            <span><a href="mailto:${currentLocation.details.contact}">${currentLocation.details.contact}</a></span>
        </div> -->
        <div class="detail-field">
            <strong>📝 ENLACES</strong>
            <span>${currentLocation.details.notes}</span>
        </div>
    `;
    
    detailBody.innerHTML = detailHTML;
}

// Aggiorna il contenuto della tab "Immagini"
function updateImagesTab() {
    const imagesContent = document.getElementById('imagesContent');
    
    console.log('updateImagesTab: imagesContent=', imagesContent);
    
    if (!imagesContent) {
        console.error('Element #imagesContent non trovato');
        return;
    }
    
    if (!currentLocation || !currentLocation.images || currentLocation.images.length === 0) {
        console.log('Nessuna immagine disponibile');
        imagesContent.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-camera"></i>
                <p>Nessuna immagine disponibile per questo punto.</p>
            </div>
        `;
        return;
    }
    
    console.log('Aggiornamento immagini per:', currentLocation.title, '- numero immagini:', currentLocation.images.length);
    // Se tra le images c'è un link YouTube, embeddalo prima delle immagini
    const ytIdFromUrl = (url) => {
        if (!url) return null;
        const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i);
        return m ? m[1] : null;
    };

    const videos = [];
    const images = [];

    currentLocation.images.forEach(url => {
        const id = ytIdFromUrl(url);
        if (id) {
            videos.push(`https://www.youtube.com/embed/${id}`);
        } else {
            images.push(url);
        }
    });

    let galleryHTML = '';

    // Inserisci prima i video (se presenti). Aggiungo una piccola etichetta e faccio sì che i video
    // occupino tutta la larghezza della tab; le immagini saranno posizionate sotto.
    videos.forEach(src => {
        galleryHTML += `
            <div class="media-item video-item">
                <div class="media-label">Video</div>
                <div class="video-wrap">
                    <iframe src="${src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        `;
    });

    // Poi le immagini (aprono un modal interno al click)
    images.forEach((img) => {
        galleryHTML += `<div class="media-item image-item"><img src="${img}" alt="Immagine di ${currentLocation.title}"></div>`;
    });

    imagesContent.innerHTML = `
        <div class="image-gallery">
            ${galleryHTML}
        </div>
    `;

    // Ottimizzazione: usa event delegation per aprire il modal senza onclick inline
    const galleryNode = imagesContent.querySelector('.image-gallery');
    if (galleryNode && !galleryNode._hasClickListener) {
        // Attach a single click handler to the gallery (avoid duplicate listeners on re-render)
        galleryNode.addEventListener('click', (e) => {
            const img = e.target.closest('img');
            if (!img) return;
            // compute index by finding the clicked image among gallery images
            const imgs = Array.from(galleryNode.querySelectorAll('img'));
            const idx = imgs.indexOf(img);
            if (idx >= 0) openImageModal(idx);
        });
        galleryNode._hasClickListener = true;
    }
}

// Inizializza la mappa quando il DOM è pronto
document.addEventListener('DOMContentLoaded', initMap);

// Esporta le funzioni per uso globale
window.selectLocation = selectLocation;
window.activateTab = activateTab; // Rendi la funzione di attivazione tab disponibile globalmente per i popup
// Rimuovi window.closeDetailCard in quanto non più necessaria
window.handleListItemClick = handleListItemClick; // Esporta per l'uso nell'HTML se necessario, anche se qui non lo è.
window.openPopup = openPopup; // Esporta per l'uso nell'HTML se necessario, anche se qui non lo è.
// Funzione per aprire un modal con l'immagine selezionata
function openImageModal(startIndex) {
    // Recupera la galleria corrente dal DOM (images nella tab filtrate, non i video)
    const galleryNode = document.querySelector('.image-gallery');
    const gallery = galleryNode ? Array.from(galleryNode.querySelectorAll('img')).map(i => i.src) : [];
    if (!gallery || gallery.length === 0) return;

    let overlay = document.getElementById('imageModalOverlay');
    const hasMultiple = gallery.length > 1;

    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'imageModalOverlay';
        overlay.className = 'image-modal-overlay';

        // Frecce prev/next (visibili solo se più immagini)
        overlay.innerHTML = `
            ${hasMultiple ? '<button class="image-modal-prev" aria-label="Precedente">◀</button>' : ''}
            <div class="image-modal-content"><img src="${gallery[startIndex]}" alt="Immagine" /></div>
            ${hasMultiple ? '<button class="image-modal-next" aria-label="Successivo">▶</button>' : ''}
            <div class="image-modal-counter" id="imageModalCounter">${startIndex + 1} / ${gallery.length}</div>
            <button class="image-modal-close" id="imageModalClose">Cerrar</button>
        `;

        document.body.appendChild(overlay);

        // Click fuori dall'immagine chiude il modal
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeImageModal();
        });

        // Bottone Chiudi
        overlay.querySelector('#imageModalClose').addEventListener('click', closeImageModal);

        // Prev/Next handlers
        if (hasMultiple) {
            overlay.querySelector('.image-modal-prev').addEventListener('click', () => {
                navigateImage(overlay, -1);
            });
            overlay.querySelector('.image-modal-next').addEventListener('click', () => {
                navigateImage(overlay, 1);
            });
        }

        // Key handler per ESC e frecce
        overlay._keyHandler = function (e) {
            if (e.key === 'Escape') closeImageModal();
            if (e.key === 'ArrowLeft') navigateImage(overlay, -1);
            if (e.key === 'ArrowRight') navigateImage(overlay, 1);
        };
        document.addEventListener('keydown', overlay._keyHandler);
    }

    // Imposta indice corrente e aggiorna immagine
    overlay._gallery = gallery;
    overlay._currentIndex = Math.max(0, Math.min(startIndex || 0, gallery.length - 1));

    const imgEl = overlay.querySelector('.image-modal-content img');
    const prevBtn = overlay.querySelector('.image-modal-prev');
    const nextBtn = overlay.querySelector('.image-modal-next');

    function refresh() {
        if (imgEl) imgEl.src = overlay._gallery[overlay._currentIndex];
        if (prevBtn) prevBtn.style.display = overlay._currentIndex > 0 ? 'block' : 'none';
        if (nextBtn) nextBtn.style.display = overlay._currentIndex < overlay._gallery.length - 1 ? 'block' : 'none';
        const counter = overlay.querySelector('#imageModalCounter');
        if (counter) counter.textContent = `${overlay._currentIndex + 1} / ${overlay._gallery.length}`;
    }

    // funzione di navigazione (usata dalle frecce e dai tasti)
    function navigateImage(ov, delta) {
        if (!ov || !ov._gallery) return;
        const newIndex = ov._currentIndex + delta;
        if (newIndex < 0 || newIndex >= ov._gallery.length) return;
        ov._currentIndex = newIndex;
        const img = ov.querySelector('.image-modal-content img');
        if (img) {
            img.src = ov._gallery[ov._currentIndex];
        }
        // aggiorna visibilità frecce
        if (prevBtn) prevBtn.style.display = ov._currentIndex > 0 ? 'block' : 'none';
        if (nextBtn) nextBtn.style.display = ov._currentIndex < ov._gallery.length - 1 ? 'block' : 'none';
        // aggiorna anche il contatore
        const counter = ov.querySelector('#imageModalCounter');
        if (counter) counter.textContent = `${ov._currentIndex + 1} / ${ov._gallery.length}`;
    }

    // memorizza la funzione per poterla richiamare dall'event listener creato sopra
    overlay._navigateImage = navigateImage;

    // mostra il modal
    overlay.classList.add('open');
    // refresh immediato per impostare correttamente le frecce
    refresh();
}

function closeImageModal() {
    const overlay = document.getElementById('imageModalOverlay');
    if (!overlay) return;
    // rimuovi key handler
    if (overlay._keyHandler) document.removeEventListener('keydown', overlay._keyHandler);
    overlay.classList.remove('open');
    // opzionale: rimuovi dal DOM dopo l'animazione
    setTimeout(() => {
        if (overlay && !overlay.classList.contains('open')) {
            overlay.remove();
        }
    }, 500);
}

// helper esterno chiamato dai button e dall'handler per navigare
function navigateImage(overlay, delta) {
    if (!overlay) return;
    if (typeof overlay._navigateImage === 'function') overlay._navigateImage(overlay, delta);
}

window.openImageModal = openImageModal;
