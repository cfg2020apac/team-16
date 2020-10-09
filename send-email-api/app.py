import os
from flask import Flask, request, jsonify, render_template
from flask_mail import Mail, Message

from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
mail = Mail(app)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = os.getenv('EMAILUSERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('EMAILPW')
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)


@app.route("/send_message", methods=['GET', 'POST'])
def index():
   request_data = request.get_json()

   new_store = {
      'email': request_data['email'],
      'subject': request_data['subject'],
      'message': request_data['message']
   }

   for email in new_store['emails']:
      msg = Message(new_store['subject'], sender=os.getenv('EMAILUSERNAME'), recipients=[new_store['email']])
      msg.body = new_store['message']
      mail.send(msg)
   return "Sent"


if __name__ == '__main__':
   app.run(debug=True)
