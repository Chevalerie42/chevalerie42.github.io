import React, { useState } from "react";
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';

function Generateur_2_Conf() 
{
  const [config, setConfig] = useState("");
  const [variable1, setVariable1] = useState("");
  const [variable2, setVariable2] = useState("");
  const [variable3, setVariable3] = useState("Choix A");
  const [variable4, setVariable4] = useState("");
  const [variable5, setVariable5] = useState("");
  const [variable6, setVariable6] = useState("");
  const [variable7, setVariable7] = useState("");
  const [variable7Erreur, setVariable7Erreur] = useState("");
  const [Config_Defaut, setConfig_Defaut] = useState("CONFIGURATION PAR DEFAUT");


  function Generation_2_la_conf(event) 
    {
      event.preventDefault();

    // Validation du formulaire
    if (variable7.trim() === "") {
      setVariable7Erreur("Champ Non Renseigné !");
      return;
    } else {
      setVariable7Erreur("");
    }
  
      const configText = `\
variable1 = ${variable1}
variable1 = ${variable2 ? 'variable 2' : ''}
variable3 = ${variable3}
variable4 = ${variable4}
variable5 = ${variable5}
${variable5 === 'true' ? `variable6 = ${variable6}` : ''}
variable7 = ${variable7}
`;
  
      setConfig(configText.replace(/#/g, '\#'));
    }
  
  function handleVariable1Change(event) 
  {
    setVariable1(event.target.value);
  }

  function handleVariable2Change(event) 
  {
    setVariable2(event.target.value);
  }

  function handleVariable3Change(event) 
  {
    setVariable3(event.target.value);
  }

  function handleVariable4Change(event) 
  {
    setVariable4(event.target.value);
  }

  function handleVariable5Change(event) {
    setVariable5(event.target.value);
    if (event.target.value === 'false') {
      setVariable6('');
    }
  }


  function handleVariable6Change(event) 
  {
    setVariable6(event.target.value);
  }

  function handleVariable7Change(event) 
  {
    setVariable7(event.target.value);
  }

  return (
    <Layout>
      <div class="container">

        <form onSubmit={Generation_2_la_conf}>

          <div className="text--center">
            <br />
            <h1>Generateur de configuration de BLABLA</h1>
            <br />
          </div>

          <div class="row">

            <div class="col">
              <label htmlFor="variable1">variable1 : </label>
              <input class="button button--outline button--primary" type="text" id="variable1" value={variable1} onChange={handleVariable1Change} />
            
            </div>
            <div class="col">
              <label htmlFor="variable2">variable2 : </label>
              <input
                type="checkbox"
                id="variable2"
                checked={variable2}
                onChange={(e) => setVariable2(e.target.checked ? "variable 2" : "")}
              />
            </div>
            <div class="col">
              <label htmlFor="variable3">variable3 : </label>
              <select class="button button--outline button--primary" id="variable3" value={variable3} onChange={handleVariable3Change}>
                <option value="Option1">Choix A</option>
                <option value="Option2">Choix B</option>
              </select>
            </div>
            <div class="col">
              <label htmlFor="variable4">variable4 : </label>
              <input class="button button--outline button--primary" type="text" id="variable4" value={variable4} onChange={handleVariable4Change} />
            </div>
          </div>
          <br />


          <div class="row">

            <div class="col">
              <label htmlFor="variable5">variable5 : </label>
              <input
                type="radio"
                id="variable5"
                name="variable5"
                value="false"
                checked={variable5 === 'false'}
                onChange={handleVariable5Change}
              />
              <label htmlFor="variable5">Ne pas Afficher variable6 ?</label>
              <input
                type="radio"
                id="variable5"
                name="variable5"
                value="true"
                checked={variable5 === 'true'}
                onChange={handleVariable5Change}
              />
              <label htmlFor="variable5">Afficher Variable6 : </label>
            </div>

            {variable5 === 'true' && (
              <div class="col">
                <label htmlFor="variable6">variable6 : </label>
                <input
                  className="button button--outline button--primary"
                  type="text"
                  id="variable6"
                  value={variable6}
                  onChange={handleVariable6Change}
                />
              </div>
            )}

            <div className="col">
              <label htmlFor="variable7">variable7: </label>
              <input 
                className={`button button--outline button--primary ${variable7Erreur ? 'error' : ''}`} 
                type="text" 
                id="variable7" 
                value={variable7} 
                onChange={handleVariable7Change} 
              />
              {variable7Erreur && 
                <p 
                  className="error-text">
                  <font color="red">
                    Merci de renseigner une valeur
                  </font>
                </p>
              }
              <div class="dropdown dropdown--hoverable" > &ensp;
                  <button class="button button--active button--secondary">?</button>
                    <ul class="dropdown__menu">
                      <li>
                        <a class="dropdown__link">BLABLIBLABLA</a>
                      </li>
                    </ul>
              </div>
            
            </div>


          </div>



          <div className="text--center">
            <br />
            <button class="button button--success" type="submit"><h2>Generation de la configuration !</h2></button>
            <br />
            <br />
            <button class="button button--warning" type="button" onClick={() => setConfig(Config_Defaut)}><h2>Conf par Defaut</h2></button>
          </div>

          <br />
      
        </form>

      {config && (
        <div>
          <br />
          <CodeBlock>{config}</CodeBlock>
          <br />
        </div>
      )}

    </div>
  </Layout>
  );
}

export default Generateur_2_Conf;
