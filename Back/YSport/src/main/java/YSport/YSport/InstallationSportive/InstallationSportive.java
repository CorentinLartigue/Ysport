package YSport.YSport.InstallationSportive;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class InstallationSportive {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;
    private String nom;
    private String adresse;
    private int codePostal;
    private String departement;
    private String ville;
    private String dateCreation;
    private String typeLieuxSportif;
    private String lieuxSportif;
    private Boolean accessibilteHandicap;
    private float latitude;
    private float longitude;
    private String typeZone;
    private Boolean douche;
    private Boolean Sanitaire;

    public InstallationSportive(){

    }

    public InstallationSportive(Long id, String nom, String adresse, int codePostal, String departement, String ville, String dateCreation, String typeLieuxSportif, String lieuxSportif, Boolean accessibilteHandicap, float latitude, float longitude, String typeZone, Boolean douche, Boolean sanitaire) {
        this.id = id;
        this.nom = nom;
        this.adresse = adresse;
        this.codePostal = codePostal;
        this.departement = departement;
        this.ville = ville;
        this.dateCreation = dateCreation;
        this.typeLieuxSportif = typeLieuxSportif;
        this.lieuxSportif = lieuxSportif;
        this.accessibilteHandicap = accessibilteHandicap;
        this.latitude = latitude;
        this.longitude = longitude;
        this.typeZone = typeZone;
        this.douche = douche;
        Sanitaire = sanitaire;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public int getCodePostal() {
        return codePostal;
    }

    public void setCodePostal(int codePostal) {
        this.codePostal = codePostal;
    }

    public String getDepartement() {
        return departement;
    }

    public void setDepartement(String departement) {
        this.departement = departement;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public String getDateCreation() {
        return dateCreation;
    }

    public void setDateCreation(String dateCreation) {
        this.dateCreation = dateCreation;
    }

    public String getTypeLieuxSportif() {
        return typeLieuxSportif;
    }

    public void setTypeLieuxSportif(String typeLieuxSportif) {
        this.typeLieuxSportif = typeLieuxSportif;
    }

    public String getLieuxSportif() {
        return lieuxSportif;
    }

    public void setLieuxSportif(String lieuxSportif) {
        this.lieuxSportif = lieuxSportif;
    }

    public Boolean getAccessibilteHandicap() {
        return accessibilteHandicap;
    }

    public void setAccessibilteHandicap(Boolean accessibilteHandicap) {
        this.accessibilteHandicap = accessibilteHandicap;
    }

    public float getLatitude() {
        return latitude;
    }

    public void setLatitude(float latitude) {
        this.latitude = latitude;
    }

    public float getLongitude() {
        return longitude;
    }

    public void setLongitude(float longitude) {
        this.longitude = longitude;
    }

    public String getTypeZone() {
        return typeZone;
    }

    public void setTypeZone(String typeZone) {
        this.typeZone = typeZone;
    }

    public Boolean getDouche() {
        return douche;
    }

    public void setDouche(Boolean douche) {
        this.douche = douche;
    }

    public Boolean getSanitaire() {
        return Sanitaire;
    }

    public void setSanitaire(Boolean sanitaire) {
        Sanitaire = sanitaire;
    }
}
