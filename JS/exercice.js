let chaussures = [
    {
        marque: 'Nike',
        titre: 'Jordan Air',
        collector: true,
        taillesDispo: [28, 29, 30],
        prix: 300,
        elements: {
            lacets: 'rouge',
            corps: 'blanc',
            semelle: 'bleu',
        },
    },
    {
        marque: 'Vans',
        titre: 'Old Skool',
        collector: false,
        taillesDispo: [34, 36, 38],
        prix: 70,
        elements: {
            lacets: 'noir',
            corps: 'marron',
        },
    },
    {
        marque: 'Adidas',
        titre: 'Stan Smith',
        collector: false,
        taillesDispo: [40, 42, 44],
        prix: 100,
        elements: {
            lacets: 'vert',
            corps: 'blanc',
        },
    },
    {
        marque: 'Nike',
        titre: 'Air Force',
        collector: true,
        taillesDispo: [36, 37, 38],
        prix: 200,
        elements: {
            lacets: 'bleu',
            corps: 'marron',
        },
    },
    {
        marque: 'Nike',
        titre: 'Air Max',
        collector: true,
        taillesDispo: [36, 38, 40],
        prix: 900,
        elements: {
            lacets: 'jaune',
            corps: 'vert',
        },
    },
    {
        marque: 'Vans',
        titre: 'Era',
        collector: false,
        taillesDispo: [30, 32, 40],
        prix: 40,
        elements: {
            lacets: 'bleu',
            corps: 'noir',
        },
    },
    {
        marque: 'Vans',
        titre: 'Sk8',
        collector: false,
        taillesDispo: [28, 30, 26],
        prix: 40,
        elements: {
            lacets: 'bleu',
            corps: 'noir',
            languette: 'rouge',
        },
    },
    {
        marque: 'Vans',
        titre: 'Old Skool',
        collector: false,
        taillesDispo: [36, 28, 60],
        prix: 60,
        elements: {
            lacets: 'blanc',
            corps: 'noir',
            languette: 'noir',
        },
    },
    {
        marque: 'Nike',
        titre: 'Nike SB',
        collector: false,
        taillesDispo: [30, 31, 32],
        prix: 50,
        elements: {
            lacets: 'blanc',
            corps: 'noir',
        },
    },
    {
        marque: 'Adidas',
        titre: 'Old Skool',
        collector: false,
        taillesDispo: [29, 30, 32],
        prix: 70,
        elements: {
            lacets: 'rouge',
            corps: 'bleu',
        },
    },
];

// 1. Faire une boucle sur tout le tableau et de log les chaussures une par une

chaussures.forEach(function (chaussure) {
    console.log(`Marque: ${chaussure.marque}`);
    console.log(`Titre: ${chaussure.titre}`);
    console.log(`Collector: ${chaussure.collector ? 'Oui' : 'Non'}`);
    console.log(`Tailles disponibles: ${chaussure.taillesDispo.join(', ')}`);
    console.log(`Prix: ${chaussure.prix} euros`);

    const elements = chaussure.elements;
    console.log(`Eléments:`);
    for (const key in elements) {
        console.log(`  ${key}: ${elements[key]}`);
    }

    console.log('\n');
});

// 2. Log un tableau de toutes les Nikes

let nikes = [];

chaussures.forEach(function (chaussure) {
    if (chaussure.marque === 'Nike') {
        nikes.push(chaussure);
    }
});

console.log(nikes);


// 3. Log du prix des Vans "Old Skool"

chaussures.forEach(function (chaussure) {
    if (chaussure.marque === 'Vans' && chaussure.titre === 'Old Skool') {
        console.log(`Prix des Vans Old Skool : ${chaussure.prix} euros`);
    }
});

// 4. Log un tableau de toutes les chaussures collector

let chaussuresCollector = [];

chaussures.forEach(function (chaussure) {
    if (chaussure.collector === true) {
        chaussuresCollector.push(chaussure);
    }
});

console.log(chaussuresCollector);

// 5. Log couleur lacets de la vans Sk8

chaussures.forEach(function (chaussure) {
    if (chaussure.marque === 'Vans' && chaussure.titre === 'Sk8') {
        const couleurLacets = chaussure.elements.lacets;
        console.log(`Couleur des lacets de la Vans Sk8 : ${couleurLacets}`);
    }
});

// 6. Changer la couleur de la vans Sk8 en violet et log la chaussure

chaussures.forEach(function (chaussure) {
    if (chaussure.marque === 'Vans' && chaussure.titre === 'Sk8') {
        chaussure.elements.lacets = 'violet';
        console.log(chaussure);
    }
});

// 7. Plus compliqué : Log le montant total de Toutes les Nikes

let montantTotalNikes = 0;

chaussures.forEach(function (chaussure) {
    if (chaussure.marque === 'Nike') {
        montantTotalNikes += chaussure.prix;
    }
});

console.log(`Le montant total de toutes les chaussures Nike est de : ${montantTotalNikes} euros`);
