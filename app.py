#!/usr/bin/python
print('Content-type: text/html\r\n\r')

from flask_mail import Mail, Message
from flask import Flask, render_template, current_app
from flask import request, jsonify
import sys
import json


app = Flask(__name__)

mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": 'steffykaur@gmail.com',
    "MAIL_PASSWORD": 'MKA2019040926950'
}

app.config.update(mail_settings)
mail = Mail(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route("/sendEmail", methods=["GET"])
def sendEmail():
    with app.test_request_context():
        data = request.get(['randomName'])
        #return jsonify({'name: ' + data})
        #return json.dumps({'status':'OK','data' : data});
        print(data)
        if __name__ == '__main__':
            app.run(debug=True)
            #if request.method == "POST":
                
                #data['randomName'] = request.POST['randomName']
                
                