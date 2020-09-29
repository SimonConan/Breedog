/**
 * Return an object with all the available criteria
 */
exports.getCriteria = (req, res, next) => {
    const criteria = {
        "behavior": {
            "affectionate": "Affectueux",
            "calm": "Calme",
            "protective": "Protecteur",
            "independent": "Indépendent",
            "hunter": "Chasseur",
            "bark": "Aboie / Hurle"
        },
        "behaviorWithOthers": {
            "withChildren": "Cohabitation avec les enfants",
            "withAnimals": "Sociable avec les autres animaux",
            "withStrangers": "Aime les étrangers"
        },
        "education": {
            "clever": "Intelligent",
            "obedient": "Obéissant"
        },
        "livingConditions": {
            "apartment": "Adapté à la vie en appartement",
            "newMasters": "Bien pour les nouveaux maitres",
            "loveHot": "Aime le chaud",
            "loveCold": "Aime le froid"
        },
        "health": {
            "goodHealth": "Santée solide",
            "easeToGainWeight": "Facilité à prendre du poids"
        },
        "maintenance": {
            "easeOfMaintenance": "Facilité d'entretien",
            "costOfMaintenance": "Coût de l'entretien",
            "hairLoss": "Perte de poils",
            "droolLevel": "Niveau de bave",
            "easeOfGrooming": "Facilité à toiletter"
        },
        "physicalActivity": {
            "athletic": "Sportif",
            "energyLevel": "Niveau d'énergie",
            "enjoyToPlay": "Potentiel à jouer"
        }
    };
    res.status(200).json(criteria);
};