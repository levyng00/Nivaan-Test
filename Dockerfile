FROM node:20

WORKDIR /app
COPY . .
RUN npm install

# COPY .env .env

RUN npm run build

# Expose the port your Next.js app listens on
EXPOSE 3000

# Start your Next.js app
CMD ["npm", "start"]