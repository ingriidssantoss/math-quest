FROM node:20-alpine AS builder
WORKDIR /app

# Copia tudo (não só package.json)
COPY . .

# Instala dependências
RUN npm ci

# Builda o projeto
RUN npm run build

# Estágio de produção
FROM alpine:3.18
WORKDIR /app

# Instala apenas nodejs e http-server
RUN apk add --no-cache nodejs npm && \
    npm install -g http-server@14 --omit=optional --silent && \
    apk del npm && \
    rm -rf /var/cache/apk/* /tmp/*

# Copia somente o dist
COPY --from=builder /app/dist ./dist

# Configurações
ENV PORT=10000
EXPOSE 10000

# Comando de inicialização
CMD ["http-server", "dist", "-p", "10000", "-c-1"]
