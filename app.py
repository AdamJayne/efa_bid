from flask import Flask, render_template

app = Flask(__name__, static_folder='./public')

# TODO: Import Controllers here

@app.route('/')
def home():
    # TODO: This is where the react app will be returned
    return render_template('soon.html')

if __name__ == "__main__":
    app.run()