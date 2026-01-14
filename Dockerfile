# 1. Usamos una imagen de Node.js moderna
FROM node:20-slim

# 2. DIrectorio de trabajo
WORKDIR /app

# 3. Copiamos los archivos de configuración primero (para caché de capas)
COPY package*.json ./
COPY tsconfig.json ./

# 4. Instalamos las dependencias
RUN npm install

# 5. Copiamos el resto del código
COPY . .

# 6. TypeScript necesita una "Entrada" para correr.
CMD ["npx", "ts-node", "index.ts"]