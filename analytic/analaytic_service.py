from typing import List, Dict
from flask import Flask, render_template, request, redirect
import mysql.connector
import json
import pymongo

def store_data_in_mongodb(data):
    # Connect to MongoDB
    client = pymongo.MongoClient("mongodb://root:root@mongodb:27017/")
    db = client["project1"]
    collection = db["times"]
    
    # Insert data into the collection
    collection.insert_one(data)