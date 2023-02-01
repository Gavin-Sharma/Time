FROM python:3.6

EXPOSE 8001

WORKDIR /enter_data

COPY templates /enter_data/templates

COPY static /enter_data/static

COPY requirements.txt /enter_data
RUN pip install -r requirements.txt

COPY enter_data.py /enter_data
CMD python enter_data.py