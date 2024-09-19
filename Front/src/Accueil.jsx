import './Accueil.css'
import FirstCarte from './assets/FirstCarte.png';
import SecondCarte from './assets/SecondCarte.png';
import ThirdCarte from './assets/ThirdCarte.png';

function Accueil() {
    return (
        <> 
            <div className="app-container">
                <div className="content">
                    <p>
                        Le site est conçu pour simplifier la recherche de complexes sportifs dans la région Nouvelle-Aquitaine. Grâce à une carte interactive intuitive, les utilisateurs peuvent visualiser et localiser rapidement les installations sportives. En utilisant des filtres de recherche adaptés (couleur rouge sur l'image), ils peuvent affiner leurs résultats selon des critères spécifiques comme le type de complexe, la ville ou encore l'accès pour les personnes en situation de handicap. Que ce soit pour trouver un terrain de tennis, une salle de fitness ou une piscine, cette plateforme facilite l'accès aux infrastructures sportives, offrant ainsi une expérience fluide et personnalisée. 
                    </p>
                    <div id="carouselExampleIndicators" className="carousel-section carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={FirstCarte} className="d-block w-100" alt="FirstCarte" />
                            </div>
                            <div className="carousel-item">
                                <img src={SecondCarte} className="d-block w-100" alt="SecondCarte" />
                            </div>
                            <div className="carousel-item">
                                <img src={ThirdCarte} className="d-block w-100" alt="ThirdCarte" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div> 
            </div> 
        </>
    )
}
export default Accueil;
