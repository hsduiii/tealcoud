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

ENV REACT_APP_WEATHER_API_KEY='9b7ec3200065415fdb3761f9c7ed5e81'
ENV REACT_APP_WEATHER_API_URL='https://api.openweathermap.org/data/2.5'
ENV PORT=5000

EXPOSE 5000

CMD serve -s build