export class IAnimal {
    id: number;
    name: string ;
    latinName: string ;
    yearOfBirth: number;
    shortDescription: string;
    longDescription: string;
    imageUrl: string;
    medicine: string;
    isFed: string;
    lastFed: string;
    constructor(id: number, name: string, latinName: string,  yearOfBirth: number,  shortDescription: string,  longDescription: string, imageUrl: string,  medicine: string,  isFed: string,  lastFed: string ){
        this.id = id;
        this.name = name;
        this.latinName = latinName;
        this.yearOfBirth = yearOfBirth;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.imageUrl = imageUrl;
        this.medicine = medicine;
        this.isFed = isFed;
        this.lastFed = lastFed;

    }
}