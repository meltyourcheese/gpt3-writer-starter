import { Configuration, OpenAIApi } from 'openai';
import React from 'react';
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});


const openai = new OpenAIApi(configuration);

const basePromptPrefix =
`
Improve the Writing and English for the Linkedin Post below, add questions for audience relevant to the post and add relevant hashtags at the end and also Paraphrase the post.
Post:
`
console.log(basePromptPrefix)
const ImprovePostAI = async (req, res) => {
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.8,
    max_tokens: 500,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();
  res.status(200).json({ output: basePromptOutput });
};

export default ImprovePostAI;