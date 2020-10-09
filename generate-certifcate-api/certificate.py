import logging
from flask import Flask, request, jsonify, render_template
import pandas as pd
from PIL import Image, ImageDraw, ImageFont

app = Flask(__name__)

@app.route("/generate_certificate", methods=['GET', 'POST'])
def generate_certificate():
    request_data = request.get_json()

    new_store = {
        'participants': request_data['participants'],
    }
    # new_store = {
    #     'participants': ['albert', 'john'],
    # }
    #data = pd.read_excel (r'gen.xlsx') 
    #name_list = data["Name"].tolist()
    name_list=new_store["participants"]
    app.logger.info(name_list) 
    for i in name_list:
        im = Image.open(r'image.jpg')
        d = ImageDraw.Draw(im)
        location = (275, 181)
        text_color = (0, 137, 209)
        font = ImageFont.truetype("Arial.ttf", 120)
        d.text(location, i, fill = text_color, font = font)

        d1 = ImageDraw.Draw(im)
        location1 = (300, 313)
        text_color1 = (0, 100, 188)
        font1 = ImageFont.truetype("Arial.ttf", 50)
        d1.text(location1, "Thank you", fill = text_color1, font = font1)
        im.save("certificate_" + i + ".pdf")

    return "generated"

#submit()
if __name__ == '__main__':
    app.run(debug = True)
