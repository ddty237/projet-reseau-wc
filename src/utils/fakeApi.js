export const register = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data.email === "test@email.com") {
                reject({
                    errors: {
                        email : "L'email est déjà choisie par un autre utilisateur"
                    }
                })
            } else {
                resolve({
                    message: "Vous êtes inscrit avec succès",
                    success: true
                })
            }
        }, 2000)
    })
}

const livres = [
    { index:1, name: 'Reseaux informatique', description: 'Un livre très utiles pour maitriser le reseau info...', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!', auteur:'Pr Djotio'},
    { index:2, name: 'Intelligence Artificielle', description: 'Un livre très utiles pour maitriser la data science...',detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!',auteur:'Dr Fippo' },
    { index:3, name: 'Conception info', description:'Un livre très utiles pour maitriser la conception...', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!', auteur:'Dr Chana' },
    { index: 4, name: 'Developpement', description: 'Un livre très utiles pour maitriser le developpement', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!', auteur: 'Dr Mbinkeu' },
];

export const ListBook = () => {
    return livres;
}

export const getBook = (index) => {
    return livres[index - 1];
}