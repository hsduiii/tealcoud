FROM node:15-alpine AS ts-build

WORKDIR /app

COPY . .

RUN npm install && \
npm run build

FROM node:15-alpine AS ts-run-prod

WORKDIR /app

COPY --from=ts-build ./app/build ./build

COPY package* ./

RUN npm install --production && \
npm install -g serve

ENV REACT_APP_WEATHER_API_KEY=$REACT_APP_WEATHER_API_KEY
ENV REACT_APP_WEATHER_API_URL=$REACT_APP_WEATHER_API_URL
ENV PORT=$PORT

EXPOSE $PORT

CMD serve -s build
