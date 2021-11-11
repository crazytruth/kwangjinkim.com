const baseUrl = process.env.NODE_ENV === "production"
? 'https://www.kwangjinkim.com'
: 'http://localhost:8000';

export default baseUrl;
