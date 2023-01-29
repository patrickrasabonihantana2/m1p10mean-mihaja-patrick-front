import { UtilisateurLogin } from "./utilisateur-login";

export interface Utilisateur {
  nom: string,
  prenom: string,
  role?: string,
  login?: UtilisateurLogin
}
