import { useState } from 'react'
import reactLogo from '.././assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';


function Formulaire() {
        const [formData, setFormData] = useState({ name: '', âge: '' });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        };

        const handleSubmit = async  (e) => {
            e.preventDefault();
            try {
                console.log('Response:', formData);
                const response = await axios.post('http://localhost:3000/users', formData);
            } catch (error) {
                console.error('Erreur lors de l\'envoi:', error);
            }
        };

        return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Âge:
                <input type="âge" name="âge" value={formData.âge} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Formulaire;