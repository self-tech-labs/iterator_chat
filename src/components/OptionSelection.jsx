import React from "react";

export default function OptionSelection({ arrayItems, selectOption }) {
  return (
    <>
      <h1 className="heading">Sélection de l'outil</h1>

      <div className="grid-main">
        {arrayItems.map((item) => {
          return (
            <div
              className="grid-child"
              onClick={() => selectOption(item.option)}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      <button className="back-btn" onClick={event =>  window.location.href='https://www.iterator.ch'}>Retour à la page d'accueil</button>
     {/*  <button className="back-btn" onClick={event =>  window.location.href='https://iterator-dashboard.netlify.app/'}>Back to dashboard</button> */}
      </div>
    </>
  );
}