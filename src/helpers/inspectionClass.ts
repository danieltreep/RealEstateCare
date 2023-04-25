// Hiervan worden nieuwe Inspection objecten gemaakt
class Inspection {
    id: number;
    dateAdded: Date;
    damageInspection: object;
    maintenance: object;
    technicalInstallationInspection: object;
    inventorizeModifications: object;
    photos: Array<number>;

    constructor(inspection) {
        this.id = inspection.id,
        this.dateAdded = inspection.dateAdded,
        this.damageInspection = inspection.damageInspection,
        this.maintenance = inspection.maintenance,
        this.technicalInstallationInspection = inspection.technicalInstallationInspection,
        this.inventorizeModifications = inspection.inventorizeModifications,
        this.photos = inspection.photos
    }
}

export default Inspection;