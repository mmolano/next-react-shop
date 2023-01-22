# E-commerce next.js front application
## Getting Started


This project uses :
- [`Tailwind css`](https://tailwindcss.com/) for css management.
- Toastify for notifications : https://www.npmjs.com/package/react-toastify.
- Axios
- Stripe
- React.js

### Installing

**Step 1:** Download the folder

```
git clone https://github.com/mmolano/next-react-shop.git
```

**Step 2:** Create a .env file
<br />
*You can copy the ".env.example" and rename it to ".env" but be careful not to forget to replace the data*
```
cp .env.example .env
```

**Step 3:** install npm dependencies
```
npm i
```

**Warning** :

As this project uses Auth0, stripe and another project, you will have to manually setup the keys in the .env file.

This project uses the following strapi project for the backend : 

```
git clone https://github.com/mmolano/strapi-api.git
```

Launch the server : 

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Authors

Project done by : 

* **[Developer] Miguel Molano** (miguel.molanopro@gmail.com)