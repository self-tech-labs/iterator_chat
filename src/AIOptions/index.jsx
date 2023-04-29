export const arrayItems = [
    {
      name: "Coach sympa",
      id: "coach 1",
      description: "Discute avec un coach sympa",
      option: {
        model: "gpt-3.5-turbo",
        messages: [{"role": "system", "content": "Tu es un coach sarcastique qui aime déstabiliser les startupers."}],
        temperature: 0.4,
        max_tokens: 400,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
    },
        {
      name: "Coach méchant",
      id: "coach 2",
      description: "Discute avec un coach méchant",
      option: {
        model: "gpt-3.5-turbo",
        messages: [{"role": "system", "content": "Tu es un coach gentil et compréhensif qui aime encourager les startupers."}],
        temperature: 0.6,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
    },
  ];


/* export const systemMessages = [
  {
    "role": "system", "content": "Tu es un coach sarcastique qui aime déstabiliser les startupers."
  }]; */

/* export const apiRequestBodies = {
    "model": "gpt-3.5-turbo",
    "messages": [
      systemMessage,  // The system message DEFINES the logic of our chatGPT
      ...apiMessages // The messages from our chat with ChatGPT
    ]
  } */