FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS=--max-old-space-size=512
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

RUN echo 'const fs=require("fs");const pp=["/.env","/app/.env",__dirname+"/.env"];for(const p of pp){try{fs.readFileSync(p,"utf8").split("\\n").forEach(l=>{const t=l.trim();if(!t||t.startsWith("#"))return;const i=t.indexOf("=");if(i>0){process.env[t.slice(0,i).trim()]=t.slice(i+1).trim()}});console.log("[env] loaded "+p);break}catch{}}' > /app/load-env.js

USER nextjs
EXPOSE 3000

CMD ["node", "-r", "./load-env.js", "server.js"]
