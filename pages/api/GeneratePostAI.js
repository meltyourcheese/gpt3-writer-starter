import { Configuration, OpenAIApi } from 'openai';
import React from 'react';
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix =
`
Write a 100-200 word Linkedin post for the given topic. Include a hookline and question for the audience, make paragraphs and add relevant hashtags at the end.

Topic:
`
console.log(basePromptPrefix)
const GeneratePostAI = async (req, res) => {
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.8,
    max_tokens: 250,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();
  res.status(200).json({ output: basePromptOutput });
};

export default GeneratePostAI;