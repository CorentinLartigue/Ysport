import './Graphique.css'
import ClassementInfra from './assets/classement_infra_par_dept.webp';
import RepartitionAccessHandicape from './assets/repartition_accees_handicapees.webp';
import AccessHandicapGironde from './assets/infra_avec_le_moins_daccees_handicapees_en_gironde.webp';
import AccessHandicapNouvelleAquitaine from './assets/infra_avec_le_moins_daccees_handicapees_en_N-A.webp';
import Top10InfraGironde from './assets/top_10_infra_en_gironde.webp';
import Top10InfraNouvelleAquitaine from './assets/top_10_infra_en_Nouvelle-Aquitaine.webp';


function Graphique(){
    return ( 
    <>
       <div class="app-container">
            <div class="content">
                <img src={ClassementInfra} className="graphic-item" alt="Classement Infra"></img>
                <img src={Top10InfraNouvelleAquitaine} className="graphic-item" alt="Top 10 Infra Nouvelle Aquitaine"></img>
                <img src={Top10InfraGironde} className="graphic-item" alt="Top 10 Infra Gironde"></img>
                <img src={RepartitionAccessHandicape} className="graphic-item"  alt="RepartitionAccessHandicape"></img>
                <img src={AccessHandicapNouvelleAquitaine} className="graphic-item" alt="AccessHandicapNouvelleAquitaine"></img>
                <img src={AccessHandicapGironde} className="graphic-item" alt="AccessHandicapGironde"></img>
            </div>
        </div>
    </>
    )
}

export default Graphique;