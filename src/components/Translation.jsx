/* import React from "react";
import { saveAs } from "file-saver";

export default function Translation({ doStuff, setInput, result }) {
  const [count, setCount] = React.useState(0);

  function handleSaveText() {
    if (result.length === 0) return;
    const blob = new Blob([result], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "mondocument.txt");
  }

  return (
    <div>
      <h1 className="title">Écrivez votre idée ici</h1>
      <h3 className="subtitle">Longueur max : 200 caractères</h3>
      <h3 className="subtitle">Temps de réponse moyen : 10 secondes</h3>
      <textarea
        className="text-area"
        maxLength={200}
        cols={55}
        rows={10}
        onChange={(e) => [setInput(e.target.value), setCount(e.target.value.length)]}
      ></textarea>
      <p>character count : {count}</p>
      <button className="action-btn" onClick={doStuff}>C'est parti</button>
      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
      <button className="back-btn" onClick={handleSaveText}>Save as .txt</button>
      <button className="back-btn" onClick={event =>  window.location.href=''}>Retour à la sélection de l'outil</button>
    </div>
  );
} */

/* import React, { useState } from "react";
import { saveAs } from "file-saver";

export default function Translation({ doStuff, setInput, result }) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function handleSaveText() {
    if (result.length === 0) return;
    const blob = new Blob([result], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "result.txt");
  }

  async function handleDoStuff() {
    setIsLoading(true);
    await doStuff();
    setIsLoading(false);
  }

  return (
    <div>
      <h1 className="title">Écrivez votre idée ici</h1>
      <h3 className="subtitle">Longueur max : 200 caractères</h3>
      <h3 className="subtitle">Temps de réponse moyen : 10 secondes</h3>
      <textarea
        className="text-area"
        maxLength={200}
        cols={55}
        rows={10}
        onChange={(e) => [setInput(e.target.value), setCount(e.target.value.length)]}
      ></textarea>
      <p>character count : {count}</p>
      <button className="action-btn" onClick={handleDoStuff}>
        {isLoading ? "Loading..." : "C'est parti"}
      </button>
      {isLoading && <div className="ui-loader"></div>}
      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
      <button className="back-btn" onClick={handleSaveText}>Save as .txt</button>
      <button className="back-btn" onClick={() => (window.location.href = "")}>
        Retour à la sélection de l'outil
      </button>
    </div>
  );
}
 */


import React, { useState } from "react";
import { saveAs } from "file-saver";

export default function Translation({ doStuff, setInput, result }) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadingText, setShowLoadingText] = useState(true);

  function handleSaveText() {
    if (result.length === 0) return;
    const blob = new Blob([result], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "result.txt");
  }

  async function handleDoStuff() {
    setIsLoading(true);
    setShowLoadingText(true);
    const intervalId = setInterval(() => {
      setShowLoadingText((prevShowLoadingText) => !prevShowLoadingText);
    }, 700);

    await doStuff();

    clearInterval(intervalId);
    setIsLoading(false);
  }

  return (
    <div>
      <h1 className="title">Écrivez votre idée ici</h1>
      <h3 className="subtitle">Longueur max : 200 caractères</h3>
      <h3 className="subtitle">Temps de réponse moyen : 10 secondes</h3>
      <textarea
        className="text-area"
        maxLength={200}
        cols={55}
        rows={10}
        onChange={(e) => [setInput(e.target.value), setCount(e.target.value.length)]}
      ></textarea>
      <p>character count : {count}</p>
      <button className="action-btn" onClick={handleDoStuff}>
        {isLoading ? (showLoadingText ? "Loading..." : "") : "C'est parti"}
      </button>
      {isLoading && <div className="ui-loader"></div>}
      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
      <button className="back-btn" onClick={handleSaveText}>Save as .txt</button>
      <button className="back-btn" onClick={() => (window.location.href = "")}>
        Retour à la sélection de l'outil
      </button>
    </div>
  );
}




