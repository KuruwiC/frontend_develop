FROM nginx:1.17.3-alpine
ARG time_zone="Asia/Tokyo"
RUN   : "タイムゾーン合わせ" \
  && apk --update --no-cache add tzdata \
  && cp "/usr/share/zoneinfo/${time_zone}" /etc/localtime \
  && apk del tzdata
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf
