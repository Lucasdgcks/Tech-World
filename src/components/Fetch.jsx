import { useState, useEffect } from "react";
const Fetch = () => {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        fetch('https://projetotestespringboot.onrender.com/users')
            .then((response) => response.json())
            .then((usuarios) => {
                console.log(usuarios);
                setUsuarios(usuarios);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div>
            <h2>Users</h2>

            {usuarios.map((usuario) => (
                <div key={usuario.id}> {}
                    <h3>User {usuario.id}</h3>
                    <p>First name:{usuario.firstName}</p>
                    <p>Last name: {usuario.lastName}</p>
                    <p>Occupation: {usuario.occupation}</p>
                    <p>Age: {usuario.age}</p>
                </div>
            ))}
        </div>
    );
    
};
export default Fetch;