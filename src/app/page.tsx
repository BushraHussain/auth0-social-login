"use client"
import auth0 from 'auth0-js';

export default function Home() {
    const webAuth = new auth0.WebAuth({
        domain: process.env.DOMAIN as string,
        clientID: process.env.CLIENT_ID as string
    });

    const handleSubmit = async () => {
        webAuth.popup.authorize({
            domain: 'dev-c056h3qtwxbiffvq.us.auth0.com',
            responseType: 'token',
            redirectUri: 'http://localhost:3000',
            connection: 'google-oauth2'
        }, function(err, authResult) {

          if(err){
            console.error("Error", err);
            
          }
          console.log("Result ", authResult);
          
        });

    
    };


  return (
    <div className='space-y-6 mt-10 ml-10'>
    <div>
      <button className='w-48 h-16 bg-blue-500 text-white font-medium' onClick={handleSubmit} >
        Continue with Google
      </button>
    </div>

    <div>
      <button className='w-48 h-16 bg-blue-500 text-white font-medium' >
        Get user info
      </button>
    </div>
</div>
  )
}
