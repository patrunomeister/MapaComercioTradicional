// Dati di esempio dei punti di interesse 
// In una applicazione reale, questi dati verrebbero caricati da un'API
const locations = [
    {
        id: 1,
        title: "Wamba Fotografía",
        type: "Tiendas históricas",
        description: "<iframe width=\"120\" src=\"https://www.youtube.com/embed/bhHnQH2JHow?si=1tS5hqdPzvshAAhG\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe><a href='https://youtu.be/bhHnQH2J'>https://youtu.be/bhHnQH2J</a><br><br> El atelier de fotografía Wamba, a lo largo de los últimos 60 años, ha estado un testigo directo del devenir histórico de Castellón. Vicente Traver, Wamba, heredero de un magisterio impulsado por su padre, ha trasladado su atelier en Calle San Vicent 40. En su  actual tienda se pueden mirar imagines que para 60 años han inmortalizado la vida social de Castellón y cuentas y anécdotas  por la voz de Vicente<br>",
        coordinates: [-0.037432, 39.984495],
        details: {
            address: "",
            category: "",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "❤️",
        images: [
            "./images/01_Wamba_01_2019.jpg"
        ]
    },
    {
        id: 2,
        title: "Jeylo electricidad",
        type: "Tiendas históricas",
        description: "<br>https://youtu.be/iP-HwA469j0<br><br>Una tienda histórica llevada  desde el 1963 para Jesús Medrano y su mujer Lolita que a los 85 años sigue atendiendo sus clientes",
        coordinates: [-0.035932, 39.987768],
        details: {
            address: "",
            category: "",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "❤️",
        images: [
            "./images/02_JeyloElectricidad_1_2019.jpg",
            "./images/02_JeyloElectricidad_2_2019.jpg"
          ]
    },
    {
        id: 3,
        title: "Discos Medicinales",
        type: "Tiendas históricas",
        description: "José Luis Roig, gestor de Discos Medicinales, en marcha desde 1983 hasta el verano 2019.<br><br><img src=\"https://lh3.googleusercontent.com/umsh/AN6v0v671dOPYYvuUF1vqNn18177OgDsW4x5TRg_mML7oDFYOoP6f38o0SR17mPOsk56zRdqfOcXQvdaRF0sL5ha7bRvN0CFMLAEtVLa6TeuaVz7DxQJJtMv_cDJ3hfDxmz9qw0IeQqSM1unS-We4tM3Qd7541FJtrplyT2pQmVdhZ9yRxNOju4bEv5WLEnjM9wmoT90ekCJWN28Ne2sdlnLHHElMOmMjIG70fHISurjBf9k_ZbTGtK-Rb0p0UrXXVGh81cxsp0p4eLSGkKyzUB319q0VVWKqRdl8tAHTQWKs6KCiv4I5H8iDDwizbRJeQgzAPUSpOniX88Wa4GrQJBITaKqY-hV99Ep_1v4Em40EHnxpdTQecaDDRoPKbgJJayVmoV6mSs80yOGH2Ca9p1OzUnImBKhlNb5A6f8xrlD6Axs2t7tX4JZj4A5mOs1pLxK5L0BqKoripJhi3PLhrteU6-FCPmISrDYBCnwNB6QDCA5rcT27vQ5gJHpIE61UiYyjbZ7tAWXQA_wPQlWU_ISMMaGhpq7l9wJazOCNoleJ0FAYzayd8KzODFCwX0pLTzKhDHo_zvyZvVsMxSGRjJqMwNBrxrgvsYwSh6q2GdC037wbgmOEwoofHJJQSlztgVgZUh1c3szNvtfQd2abzM9M6iAUcE9-g5usM-nQz0jDbWBDMpPE2HG7XKH6MwRYhU7b6_wnyxlVoNsz8ahwed_O6tZohIUJg\" height=\"200\" width=\"auto\" /><br>",
        coordinates: [-0.038213, 39.985078],
        details: {
            address: "",
            category: "",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "❤️",
        images: [
            "./images/03_Discos_Medicinales_01_2019.jpg",
            "./images/03_Discos_Medicinales_02_2018.jpg",
            "./images/03_Discos_Medicinales_03_2018.jpg",
            "./images/03_Discos_Medicinales_04_2018.jpg",
            "./images/03_Discos_Medicinales_05_2018.jpg"
                   ] // Nessuna immagine aggiuntiva per questo esempio
    },
    {
        id: 3,
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
        images: [
            "./images/04_Don_Bergino_01.jpg",
            ""
                   ] // Nessuna immagine aggiuntiva per questo esempio
    }
];

// Configurazione della mappa
const mapConfig = {
    accessToken: 'pk.eyJ1IjoidmluY3BhdHJ1bm8iLCJhIjoiY21nejJpemY2MDJpMzk0cjNyOWY1cXduYSJ9.d_43r4VO_yjEJc4vHgcmgw',
    center: [-0.051301, 39.984624], // Centro di Castellón de la Plana (adattato per i dati forniti)
    zoom: 13,
    minZoom: 10,
    maxZoom: 18,
    style: 'mapbox://styles/mapbox/light-v11'
};

// Variabili globali
let map;
let markers = [];
let currentLocation = null;
let currentPopup = null; // Aggiunto per tracciare il popup aperto

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
    
    // Carica i marker sulla mappa
    addMarkers();
    
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

// Aggiungi marker sulla mappa
function addMarkers() {
    locations.forEach(location => {
        // Crea un elemento DOM per il marker
        const markerElement = document.createElement('div');
        markerElement.className = `marker type-${location.type === 'Punto di raccolta' ? 2 : 1}`;
        markerElement.innerHTML = location.icon;
        
        // Crea il marker
        const marker = new mapboxgl.Marker(markerElement)
            .setLngLat(location.coordinates)
            .addTo(map);
        
	        // Non assegniamo il popup al marker qui, lo gestiamo con openPopup
	        // per avere un controllo centralizzato e poterlo aprire dalla lista.
	        // Il popup verrà creato e aperto dinamicamente.
	        // marker.setPopup(popup);
        
        // Aggiungi event listener al marker
        markerElement.addEventListener('click', () => {
            // Chiama la nuova funzione per gestire l'apertura del popup e la selezione
            handleMarkerClick(location.id);
            openPopup(location); // Apri il popup anche al click sul marker
        });
        
        markers.push({ marker, location });
    });
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
        
        const iconClass = location.type === 'Punto di raccolta' ? 'type-2' : 'type-1';
        
        item.innerHTML = `
            <div class="location-icon ${iconClass}">
                ${location.icon}
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
                Visualizza dettagli
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
            <strong>📍 INDIRIZZO</strong>
            <span>${currentLocation.details.address}</span>
        </div>
        <div class="detail-field">
            <strong>🏷️ CATEGORIA</strong>
            <span>${currentLocation.details.category}</span>
        </div>
        <div class="detail-field">
            <strong>📊 STATO</strong>
            <span>${currentLocation.details.status}</span>
        </div>
        <div class="detail-field">
            <strong>📧 CONTATTO</strong>
            <span><a href="mailto:${currentLocation.details.contact}">${currentLocation.details.contact}</a></span>
        </div>
        <div class="detail-field">
            <strong>📝 NOTE</strong>
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
    
    let galleryHTML = '';
    currentLocation.images.forEach(imageURL => {
        galleryHTML += `<img src="${imageURL}" alt="Immagine di ${currentLocation.title}" onclick="window.open('${imageURL}', '_blank')">`;
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
