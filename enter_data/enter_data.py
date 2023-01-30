from typing import List, Dict
from flask import Flask, render_template
import mysql.connector
import json

app = Flask(__name__)


def favorite_colors() -> List[Dict]:
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'mysql_db',
        'port': '3306',
        'database': 'knights'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM favorite_colors')
    results = [{name: color} for (name, color) in cursor]
    cursor.close()
    connection.close()

    return results


@app.route('/')
def index() -> str:
    return json.dumps({'favorite_colors': favorite_colors()})

@app.route('/hello')
def homepage():
    return render_template("index.html")


if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
