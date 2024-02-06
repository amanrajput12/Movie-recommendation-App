import OpenAI from 'openai';
import { REACT_APP_OPENAI_Key } from './Constant';

const openai = new OpenAI({
    apiKey: REACT_APP_OPENAI_Key, // This is the default and can be omitted
    dangerouslyAllowBrowser:true
  }); 

  export default openai