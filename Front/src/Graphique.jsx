import './Graphique.css'
import ClassementInfra from './assets/classement_infra_par_dept.webp';
import ClassementTypeInfra from './assets/classement_type_infra_N-A.webp';
import RepartitionGironde from './assets/repartition_type_de_zone_en_gironde.webp';
import RepartitionNouvelleAquitaine from './assets/repartition_type_de_zone_en_Nouvelle-Aquitaine.webp';
import Top10InfraGironde from './assets/top_10_infra_en_gironde.webp';
import Top10InfraNouvelleAquitaine from './assets/top_10_infra_en_Nouvelle-Aquitaine.webp';


function Graphique(){
    return ( 
    <>
       <div class="app-container">
            <div class="content">
                <img src={ClassementInfra} className="graphic-item" alt="Classement Infra"></img>
                <img src={ClassementTypeInfra} className="graphic-item"  alt="Classement Type Infra"></img>
                <img src={RepartitionGironde} className="graphic-item" alt="Repartition Gironde"></img>
                <img src={RepartitionNouvelleAquitaine} className="graphic-item" alt="Repartition Nouvelle Aquitaine"></img>
                <img src={Top10InfraGironde} className="graphic-item" alt="Top 10 Infra Gironde"></img>
                <img src={Top10InfraNouvelleAquitaine} className="graphic-item" alt="Top 10 Infra Nouvelle Aquitaine"></img>
            </div>
        </div>
    </>
    )
}

export default Graphique;