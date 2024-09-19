import React, { useState, useEffect } from 'react';
import './Carte.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerClusterGroup from '@changey/react-leaflet-markercluster';

function Carte() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [category, setCategory] = useState('');
    const [department, setDepartment] = useState('');
    const [city, setCity] = useState('');
    const [accessibility, setAccessibility] = useState(false);
    const [sanitary, setSanitary] = useState(false);
    const [shower, setShower] = useState(false);
    const [types, setTypes] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/cartes');
            const result = await response.json();
            setData(result);
            const uniqueTypes = [...new Set(result.map(point => point.typeLieuxSportif))];
            setTypes(uniqueTypes);
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const newFilteredData = data.filter(point => {
            const matchesCategory = !category || point.typeLieuxSportif === category;
            const matchesDepartment = !department || point.departement.toLowerCase().includes(department.toLowerCase());
            const matchesCity = !city || point.ville.toLowerCase().includes(city.toLowerCase());
            const matchesAccessibility = !accessibility || point.accessibilteHandicap === accessibility;
            const matchesSanitary = !sanitary || point.sanitaire === sanitary;
            const matchesShower = !shower || point.douche === shower;

            return matchesCategory && matchesDepartment && matchesCity && matchesAccessibility && matchesSanitary && matchesShower;
        });

        setFilteredData(newFilteredData);
    }, [data, category, department, city, accessibility, sanitary, shower]);

    if (!data.length) return <div>Loading...</div>;

    return (
        <div class="app-container">
            <div className="content">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <div className="filtres input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Département</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="département"
                                    aria-label="département"
                                    aria-describedby="basic-addon1"
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="filtres input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupTypeComplexe">Types de complexe</label>
                                <select
                                    className="form-select"
                                    id="inputGroupTypeComplexe"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="">Tous les types</option>
                                    {types.map((type, index) => (
                                        <option key={index} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <div className="filtres input-group mb-3">
                                <span className="input-group-text" id="basic-addon2">Ville</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="ville"
                                    aria-label="ville"
                                    aria-describedby="basic-addon2"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-check form-switch mb-2">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault1"
                                    checked={accessibility}
                                    onChange={(e) => setAccessibility(e.target.checked)}
                                />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault1">Accessibilité Handicapé</label>
                            </div>
                            <div className="form-check form-switch mb-2">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault2"
                                    checked={sanitary}
                                    onChange={(e) => setSanitary(e.target.checked)}
                                />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault2">Disponibilité sanitaire</label>
                            </div>
                            <div className="form-check form-switch mb-2">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault3"
                                    checked={shower}
                                    onChange={(e) => setShower(e.target.checked)}
                                />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault3">Disponibilité douche</label>
                            </div>
                        </div>
                    </div>                        
                    <MapContainer
                        center={[44.833, -0.5667]} 
                        zoom={13}
                        scrollWheelZoom={false}
                        style={{ height: "500px", width: "100%" }}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <MarkerClusterGroup
                             iconCreateFunction={(cluster) => {
                                const childCount = cluster.getChildCount();
                                let size;

                                if (childCount < 10) {
                                    size = 30;
                                } else if (childCount < 100) {
                                    size = 40;
                                } else {
                                    size = 50;
                                }

                                return L.divIcon({
                                    html: `<div style="
                                        background-color: #4CAF50; 
                                        border-radius: 50%; 
                                        width: ${size}px; 
                                        height: ${size}px; 
                                        display: flex; 
                                        align-items: center; 
                                        justify-content: center; 
                                        color: white; 
                                        font-size: ${size / 3}px; 
                                        text-align: center; 
                                        line-height: ${size}px;">
                                        ${childCount}
                                    </div>`,
                                    className: 'leaflet-cluster',
                                    iconSize: [size, size]
                                });
                            }}
                        >
                            {filteredData.map(point => (
                                <Marker key={point.id} position={[point.longitude, point.latitude]}>
                                    <Popup>
                                        {point.nom || "Sans nom"}<br />
                                        Adresse: {point.adresse}<br />
                                        Ville: {point.ville}<br />
                                        Département: {point.departement}<br />
                                        Longitude: {point.longitude}<br />
                                        Latitude: {point.latitude}<br />
                                        Date Création: {point.dateCreation || "Non spécifiée"}
                                    </Popup>
                                </Marker>
                            ))}
                        </MarkerClusterGroup>
                    </MapContainer>
                </div>
            </div>
        </div>    
    );
}

export default Carte;
