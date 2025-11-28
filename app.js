// Dati di esempio dei punti di interesse 
// In una applicazione reale, questi dati verrebbero caricati da un'API
const locations = [
    {
        id: 1,
        title: "Wamba Fotografía",
        type: "1936–2021",
        description: "<b>Gestor:</b>  Vicente Traver Ardiez (hasta 2021)<br> \
        <b>Fundador:</b> Vicente Traver Sanz<br> \
        <b>Tipo de comercio:</b> Estudio fotográfico<br><br> \
        <b>Descripción:</b><br> \
        Atelier emblemático de Castellón durante más de seis décadas. \
        Fundado por Vicente Traver Sanz y continuado por su hijo \
        Vicente Traver Ardiez, \"Wamba\" documentó la vida pública y cotidiana \
        de la ciudad: festividades, inauguraciones, manifestaciones, escenas \
        urbanas y detalles domésticos, capturando la evolución social y \
        arquitectónica de Castellón. En su presentación en redes sociales se \
        describe como: \"Local comercial dedicado al Arte Fotográfico, fundado \
        en Castellón en 1936 bajo el nombre Wamba\" \
        <br><br><b>Valor histórico y patrimonial:</b><br> \
        El archivo fotográfico Wamba constituye un testimonio visual único \
        del Castellón del siglo XX y principios del XXI. Sus imágenes \
        reflejan la vida pública y la intimidad de la ciudad, convirtiéndose \
        en una fuente esencial para preservar su memoria cultural y social. \
        La continuidad de la saga familiar permitió mantener vivo este legado \
        durante varias generaciones. \
        <br><br><b>Cierre:</b><br> \
        El estudio permaneció activo hasta el fallecimiento de Vicente Traver \
        Ardiez en 2021.",

        coordinates: [-0.037432, 39.984495],
        details: {
            address: "C/ San Vicente, 40 (anteriormente C/ Mayor, 11)",
            category: "Tiendas históricas",
            status: "",
            contact: "",
            notes: "[1] <a href=\"https://www.elperiodicomediterraneo.com/castello/2021/01/11/castello-llora-wamba-fotografo-deja-40624182.html\" target=_blank>  Castelló llora a \"Wamba\", un fotógrafo que deja un legado de valor histórico</a><br><br>[2] <a href=\"https://www.elperiodicomediterraneo.com/castello/2018/06/02/3a-generacion-wamba-jorge-deja-41318843.html\" target=_blank>La 3ª generación de los Wamba, Jorge, deja la historia fotográfica</a>" },
        icon: "❤️",
        markerImage: "./images/Históricas_puntatore.png",
        markerSize: 40,
        images: [
            "https://www.youtube.com/watch?v=JI21PpATuYM",
            "./images/01_Wamba_01_2019.jpg",
            "./images/01_Wamba_02_SD.jpg"
        ]
    },
    {
        id: 2,
        title: "Jeylo, tienda de electricidad",
        type: "1963–",
        description: "<b>Fundadores:</b> Lolita Badenes y Jesús Medrano<br> \
        <b>Gerente:</b> Lolita Badenes<br> \
        <b>Tipo de comercio:</b> Tienda de electricidad, venta y reparación de aparatos \
        <br><br><b>Descripción:</b><br> \
        Jeylo es un comercio emblemático del centro de Castellón, fundado por Jesús Medrano y su esposa \
        Lolita Badenes. Inaugurado en noviembre de 1963, cuando la televisión era todavía una novedad. \
        Fue uno de los primeros establecimientos de la ciudad en vender y reparar televisores, \
        hasta el punto de convertirse en un espacio de visionado comunitario: el día de la apertura, \
        los vecinos acudieron a ver en directo la noticia del asesinato de Kennedy.<br><br> \
        <b>Importancia histórica y cultural:</b><br> \
        Más que un comercio, Jeylo ha sido un punto de referencia social en el barrio. \
        Durante décadas los vecinos se reunían en la tienda para ver acontecimientos \
        colectivos, como la boda de Balduino y Fabiola, o para alquilar tocadiscos y \
        altavoces para fiestas locales. Lola y Jesús participaron activamente en la \
        vida cultural del entorno, contribuyendo al tejido social de la ciudad. \
        Hoy en día [19.11.2025], el establecimiento refleja la perseverancia y \
        el espíritu emprendedor de Lola, que a sus casi 90 años \
        continúa ejerciendo su profesión. \<br><br> \
        <b>Valor patrimonial:</b><br> \
        Jeylo representa la memoria viva del comercio tradicional en Castellón. \
        La tienda es un ejemplo de cercanía, confianza y servicio personalizado, \
        consolidándose como un espacio donde la comunidad se reúne, se escucha \
        y se comparte conocimiento práctico y cotidiano. \
        <br><br> \
        <b>Actividad actual:</b><br> \
        A sus casi 90 años, Lola continúa al frente del negocio, \
        levantando la persiana cada día y atendiendo personalmente a los clientes, \
        manteniendo vivo el legado familiar y su reputación como \
        'asesora en electricidad' del barrio centro. \
        ",
        coordinates: [-0.035932, 39.987768],
        details: {
            address: "C/ Caballeros, 36",
            category: "Tiendas históricas",
            status: "",
            contact: "",
            notes: "[1]<a href=\"https://www.castelloninformacion.com/lola-badenes-maria-dinu-monica-avila-y-jm-arquimbau-premiados-por-mujeres-en-igualdad/\" target=_blank>Lola Badenes, María Dinu, Mónica Ávila y JM Arquimbau, premiados por \"Mujeres en Igualdad\"</a>"
        },
        icon: "❤️",
        markerImage: "./images/Históricas_puntatore.png",
        markerSize: 40,
        images: [
            "https://youtu.be/AjjpeLTnn5E",
            "./images/02_JeyloElectricidad_1_2019.jpg",
            "./images/02_JeyloElectricidad_2_2019.jpg"
          ]
    },
    {
        id: 3,
        title: "Discos Medicinales, Música",
        type: "1983–2019",
        description: "<b>Fundador:</b> José Luis Roig<br> \
        <b>Tipo de comercio:</b> Tienda especializada en música (vinilos, CDs y material de coleccionismo)<br><br> \
        <b>Descripción:</b><br> \
        Fundada en 1983, Discos Medicinales se convirtió en un referente cultural y un verdadero santuario para \
        los melómanos de Castellón. Su catálogo, amplio y cuidadosamente seleccionado, situó la tienda entre \
        las más apreciadas por coleccionistas y aficionados a la música  en la ciudad.<br><br>\
        <b>Importancia histórica:</b> <br> \
        Durante más de tres décadas, la tienda fue un punto de encuentro para la comunidad musical local, \
        contribuyendo de forma decisiva a la memoria cultural y social de Castellón.<br>\
        Bajo la dirección de José Luis Roig, el establecimiento defendió un modelo de comercio basado en \
        la calidad, el conocimiento especializado y la atención personalizada, resistiendo a la competencia de \
        las grandes cadenas y al auge del consumo digital.<br><br>\
        <b>Cierre:</b><br> \
        La tienda cerró en el verano de 2019",
        coordinates: [-0.038213, 39.985078],
        details: {
            address: "C/Pascual Tirado, 1",
            category: "Tiendas históricas",
            status: "",
            contact: "",
            notes: "[1] <a href=\"https://castellonplaza.com/castellonplaza/discos-medicinales-cierra-su-emblematica-tienda-para-trasladarse-a-la-plaza-clave-en-septiembre\" target=_blank>Discos Medicinales cierra su emblemática tienda para trasladarse a la plaza Clavé en septiembre</a>"
        },
        icon: "❤️",
        markerImage: "./images/Históricas_puntatore.png",
        markerSize: 40,
        images: [
            "./images/03_Discos_Medicinales_01_2019.jpg",
            "./images/03_Discos_Medicinales_02_2018.jpg",
            "./images/03_Discos_Medicinales_03_2018.jpg",
            "./images/03_Discos_Medicinales_04_2018.jpg",
            "./images/03_Discos_Medicinales_05_2018.jpg"
                   ] // Nessuna immagine aggiuntiva per questo esempio
    },
    {
        id: 4,
        title: "Don Bergino",
        type: "Venta a la porta",
        description: "Frutas y hortalizas de su huerta",
        coordinates: [-0.037221, 39.987095],
        details: {
            address: "",
            category: "",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "🌿",
        markerImage: "./images/VALP_puntatore.png",
        markerSize: 40,
        images: [
            "./images/04_Don_Berjino_01.jpg",
            "./images/04_Don_Berjino_02.jpg"
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

// Inizializzazione della mappa
function initMap() {
    mapboxgl.accessToken = mapConfig.accessToken;
    
    map = new mapboxgl.Map({
        container: 'map',
        style: mapConfig.style,
        center: mapConfig.center,
        zoom: mapConfig.zoom,
        minZoom: mapConfig.minZoom,
        maxZoom: mapConfig.maxZoom
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
    
    // Rimuovi la classe 'active' da tutti i pulsanti e contenuti
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
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

            handleMarkerClick(location.id);
            openPopup(location);
        });

        markers.push({ marker, location });
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

                        handleMarkerClick(location.id);
                        openPopup(location);
                    });

                    markers.push({ marker, location });
                }
            }, delayMs);
        });
    } catch (error) {
        console.error('Errore durante l\'aggiornamento dei cluster:', error);
    }
}

// Funzione helper per attivare una tab
function activateTab(tabId) {
    // Rimuovi la classe 'active' da tutti i pulsanti e contenuti
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Aggiungi la classe 'active' al pulsante e al contenuto selezionato
    document.querySelector(`.tab-button[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(`${tabId}Content`).classList.add('active');
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
    
    if (!currentLocation) return;
    
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
    updateDescriptionTab();
    
    // Aggiorna il contenuto della tab "Immagini"
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

    // 1. Seleziona il punto (aggiorna sidebar)
    selectLocation(locationId);

    // 2. Centra la mappa sul punto
    map.flyTo({
        center: location.coordinates,
        zoom: 15,
        duration: 1000
    });

    // 3. Apri il popup
    openPopup(location);
    // On mobile, switch to the description tab but keep the sidebar visible so the list/tabs remain accessible.
    try {
        if (window.innerWidth <= 768) {
            activateTab('description');
            // give map a moment to animate and then ensure correct sizing
            if (map && map.resize) setTimeout(() => map.resize(), 250);
        }
    } catch (e) {
        console.warn(e);
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
    const imageGallery = document.getElementById('imageGallery');
    
    if (!currentLocation || !currentLocation.images || currentLocation.images.length === 0) {
        imagesContent.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-camera"></i>
                <p>Nessuna immagine disponibile per questo punto.</p>
            </div>
        `;
        return;
    }
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
    // Salva la galleria corrente in una variabile globale per poterla navigare nel modal
    window._imageGallery = images;
    images.forEach((img, idx) => {
        galleryHTML += `<div class="media-item image-item"><img src="${img}" alt="Immagine di ${currentLocation.title}" onclick="openImageModal(${idx})"></div>`;
    });

    imagesContent.innerHTML = `
        <div class="image-gallery">
            ${galleryHTML}
        </div>
    `;
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
    const gallery = window._imageGallery || [];
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
            <button class="image-modal-close" id="imageModalClose">Chiudi</button>
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
