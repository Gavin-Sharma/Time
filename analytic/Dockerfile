FROM python:3.6

EXPOSE 8001

WORKDIR /analytic

COPY requirements.txt /analytic
RUN pip install -r requirements.txt

COPY analaytic_service.py /analytic/
CMD python analaytic_service.py