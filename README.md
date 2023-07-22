# Paypal Express Checkout Demo

## Instructions

1. [Create an application](https://developer.paypal.com/dashboard/applications/sandbox/create)
2. Rename `.env.example` to `.env` 
3. Update the value of below environment variables 

```bash
#Base URL of the application for ex. http://localhost:4786 or https://example.com' 
BASE_URL = http://localhost:4786   

#Your Paypal App Client ID
CLIENT_ID = AY4AWvhs07S7fjZEC5J6hDFkg70z1YaJa-ikfTAdHC5JSc7owmqglS47bPONXApK1-bNIacVMrlFzdTk  

#Your Paypal App Secret
APP_SECRET = EAk5m34X5TGjnKMtjpvEgvomE_cfm1NlMDmbTCWQxB5vLk--HHhribXZPipMEgcDyZFTcxJEtomLP4Ia  

#Paypal REST API URL Sandbox - https://api-m.sandbox.paypal.com or Live - https://api-m.paypal.com
PAYPAL_API_URL = https://api-m.sandbox.paypal.com  
```

4. Run `npm install`
5. Run `npm start`
6. Open http://localhost:4786

## Sandbox Account Credentials

```
Seller Account - seller-user@mailinator.com / Test!234
Buyer Account - buyer-user@mailinator.com / Test!234
```

## Dummy Mobile No's.

```
+15555633412
+15553190046
+15557520443
+15559694601
```

## Dummy Addresses

```
4182 North Valley Lake Drive, Fayetteville AR 72703
910 Arlington Terrace, Fayetteville AR 72701
105 Gilmore Street, Glen Burnie MD 21061
1429 Harrison Avenue, Panama City FL 32401
208 Bonita Circle, Panama City Beach FL 32408
6729 North 54th Avenue, Glendale AZ 85301
1513 Cathy Street, Savannah GA 31415
618 Amberjack Drive, Panama City FL 32408
```

## Test Card Details

```
Card Type - Visa
Card Number - 4111 1111 1111 1111
Card Expiry - 10/24
Card CVV - 123
```