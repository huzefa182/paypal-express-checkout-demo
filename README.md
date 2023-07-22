## Instructions

1. [Create an application](https://developer.paypal.com/dashboard/applications/sandbox/create)
2. Rename `.env.example` to `.env` 
3. Update the value of below environment variables 
    `CLIENT_ID`       #YOUR_CLIENT_ID_GOES_HERE
    `APP_SECRET`      #YOUR_SECRET_GOES_HERE'
    `BASE_URL`        #Base URL of the application for ex. http://localhost:4786 or https://example.com' 
    `PAYPAL_API_URL`  #Paypal REST API URL Sandbox - https://api-m.sandbox.paypal.com or Live - https://api-m.paypal.com
4. Run `npm install`
5. Run `npm start`
6. Open http://localhost:4786
7. Click "PayPal" and log in with one of your [Sandbox test accounts](https://developer.paypal.com/dashboard/accounts)