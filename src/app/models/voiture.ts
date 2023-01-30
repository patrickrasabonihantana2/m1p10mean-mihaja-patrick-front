export interface Voiture {
  _id?;
  user_id?: string;
  matricule: string;
  marque: string;
  modele: string;
  etat: number;
  evolutions?: any;
}
