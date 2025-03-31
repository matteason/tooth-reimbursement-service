# Tooth Reimbursement Service

This service allows people in the UK who lose a tooth - in the sense of it falling out and then subsequently being _lost_ -
to submit a claim for reimbursement from the Tooth Fairy or the Tooth Fairy's authorised representatives. It's a digital version of [Form TF-230](https://bsky.app/profile/seamas.bsky.social/post/3lkih6dkek222).

You can use the service at [tf230.matteason.co.uk](https://tf230.matteason.co.uk/)

![A screenshot of the service homepage, linked above](https://github.com/user-attachments/assets/6e4935ee-8384-476f-b911-2be5e07a6b15)

## Translation/localisation

Currently the service is available in British English. If you'd like to help translate the service into other languages please see [this issue](https://github.com/matteason/tooth-reimbursement-service/issues/2).

## Setup

Make sure to install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run generate
```

## Acknowledgements

This service was developed by [Matt Eason](https://matteason.co.uk), based on the original TF-230 by [Séamas O'Reilly](https://bsky.app/profile/seamas.bsky.social) and [Michael Murray](https://bsky.app/profile/yarrumm.bsky.social).

The tooth selector uses Muha Ajjan's [Dental Input](https://gitlab.com/isword/dental-input) component for Vue.
The drawing canvas uses Toni Oktoro's [Vue Drawing Canvas](https://github.com/razztyfication/vue-drawing-canvas).
Built using [GOV.UK Vue](https://github.com/govuk-vue/govuk-vue), [Nuxt](https://nuxt.com/) and [Vue](https://vuejs.org/).
