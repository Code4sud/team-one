import { useEffect, useState } from 'react'
import reactLogo from '.././assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';


// function RisksResponses() {
//     const [formData, setFormData] = useState({});
//     const fetchData = async () => {
//         console.log('Envoi de la requête...');
//     try {
//         const response = await axios.get('https://localhost:3000/map');
//         console.log('Risques récupérés :', response.data.risques);
//         setFormData(response.data.risques);
//     } catch (error) {
//         console.error('Erreur lors de l\'envoi:', error);
//     }
//     };
//     useEffect(() => {
//         console.log('Montage du composant...');
//         fetchData();
//     }, []);
//         return (

//         <div>
//             hello
//         </div>
//     );
// }

// export default RisksResponses;