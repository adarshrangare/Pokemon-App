import React from "react";
import { createPortal } from "react-dom";
import "./PokemonInfo.css";
const PokemonInfo = ({ handleKnowMore,name,weight,height,stats,image,type }) => {

    console.log(stats);
  return createPortal(
    <>
      <div className="backdrop"></div>
      <div className={"expanded-overlay "+type}>
        <button className="close-button" onClick={handleKnowMore} >X</button>
        <div className="expanded-left">
          <img className="expanded-image" src={image} alt={name} />
          <h3 className="expanded-name">{name}</h3>
        </div>
        <div className={"expanded-right "+type}>
          <table className="expanded-table">
              <tr>
                    
                  <td>Weight: {weight}</td>
                  
                    
              </tr>
              <tr>
                  <td>Height: {height}</td>
                  
              </tr>
          </table>

          <table className="expanded-table">

          {  stats?.map((item,index)=>(<tr key={index}>
                  <td>Stat{index+1}</td>
                  <td>{item.stat.name}</td>
              </tr> )) }

          </table>

          <table className="expanded-table">
              
          {  stats?.map((item,index)=>(<tr key={index}>
                  <td>Bs{index+1}</td>
                  <td>{item.base_stat}</td>
              </tr> )) }

          </table>

        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default PokemonInfo;
