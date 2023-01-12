import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = 
`write a post for Linkedin focusing on the following topic. The post should be to the point, should be SEO friendly, should sound professional, should be personalized to the writer. 

topic:
`
const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}\n`,
    temperature: 0.7,
    max_tokens: 700,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();
// I build Prompt #2.
const secondPrompt = 
`
take the content below and refine it for a linkedin post by adding a question for the audience and make it more relevant and SEO friendly.


content: ${basePromptOutput.text}

refined content:
`

// I call the OpenAI API a second time with Prompt #2
const secondPromptCompletion = await openai.createCompletion({
  model: 'text-davinci-003',
  prompt: `${secondPrompt}`,
  // I set a higher temperature for this one. Up to you!
  temperature: 0.85,
  // I also increase max_tokens.
  max_tokens: 1250,
});

// Get the output
const secondPromptOutput = secondPromptCompletion.data.choices.pop();

// Send over the Prompt #2's output to our UI instead of Prompt #1's.
res.status(200).json({ output: secondPromptOutput });
};

export default generateAction;