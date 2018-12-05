export default {
  MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-uploads-react"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://bzcp6k7sbi.execute-api.us-east-2.amazonaws.com/prod"
      
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_Jl6XEIUWY",
      APP_CLIENT_ID: "9800150o0l2hqgn0kka2djobc",
      IDENTITY_POOL_ID: "us-east-2:3b6b1f19-b857-46cf-8f7b-d15ba85afbee"
    }
  };