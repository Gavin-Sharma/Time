FROM python:3.6

EXPOSE 8005

WORKDIR /analytic

COPY requirements.txt /analytic
RUN pip install -r requirements.txt

COPY analytics_service.py /analytic
CMD python analytics_service.py