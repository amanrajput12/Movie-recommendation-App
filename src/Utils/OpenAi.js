import OpenAI from 'openai';
import { OPENAI_Key } from './Constant';

const openai = new OpenAI({
    apiKey: OPENAI_Key, // This is the default and can be omitted
    dangerouslyAllowBrowser:true
  }); 

  export default openai