FROM node:20-alpine AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1 

COPY package.json package-lock.json ./
RUN npm ci 

COPY . .
RUN npm run build

 
FROM node:20-alpine AS runner
WORKDIR /app


RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

COPY --from=builder --chown=nextjs:nodejs --chmod=0555 /app/public ./public
COPY --from=builder --chown=nextjs:nodejs --chmod=0555 /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs --chmod=0555 /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
