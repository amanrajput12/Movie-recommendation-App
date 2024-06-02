import { Client, Account, ID } from "appwrite";
//    664c653b00100cdbe986     new  project id
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('664c653b00100cdbe986');               // Your project ID

 const accountVal = new Account(client);

export { ID ,accountVal}
//  659cf80681794fe492ee prev project id


