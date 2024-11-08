import { useState } from 'react'
import viteLogo from '/vite.svg'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { useRisques } from './RisKContextes';

function ClickableMap() {
    console.log('clickMap');
    const { setRisques } = useRisques();
    useMapEvents({
        click: async (e) => {
            const { lat, lng } = e.latlng;
            console.log(`You clicked the map at [${lat}, ${lng}]`);
            console.log("appeler");
            const formData = { lat, lng };
                try {
                    console.log('Response:', formData);
                    const response = await axios.post('http://localhost:3000/map', formData);
                    console.log('Risques récupérés :', response.data.risques);

                    localStorage.setItem('risques', JSON.stringify(response.data.risques));
                    setRisques(response.data.risques);
                } catch (error) {
                    console.error('Erreur lors de l\'envoi:', error);
                }
        },
    });
    return null;
}

function Map_Leaflet() {
    return (
        <>
            <MapContainer center={[46.42271253466719, 2.5708007812500004]} zoom={13} style={{ height: '50vh', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ClickableMap />
            </MapContainer>
    </>
    );
}

export default Map_Leaflet;