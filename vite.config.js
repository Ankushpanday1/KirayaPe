import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        landlord: resolve(__dirname, 'landlord.html'),
        flatfinder: resolve(__dirname, 'flat-finder.html'),
        rentrewards: resolve(__dirname, 'rent-rewards.html'),
        rentloan: resolve(__dirname, 'rent-loan.html'),
        creditscore: resolve(__dirname, 'credit-score.html'),
        about: resolve(__dirname, 'about.html'),
        blog: resolve(__dirname, 'blog.html'),
        careers: resolve(__dirname, 'careers.html'),
        faqs: resolve(__dirname, 'faqs.html'),
        contact: resolve(__dirname, 'contact.html'),
        terms: resolve(__dirname, 'terms.html'),
        legalpolicy: resolve(__dirname, 'legal-policy.html'),
        privacy: resolve(__dirname, 'privacy.html'),
      },
    },
  },
})
