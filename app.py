from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', autor=None)

@app.route('/quienes')
def quienes():
    return render_template('quienes.html', autor=None)

@app.route('/proyecto')
def proyecto():
    return render_template('proyecto.html', autor="MERLY DANEXY CALDERÓN RINCÓN")

@app.route('/introduccion')
def introduccion():
    return render_template('introduccion.html', autor=None)

@app.route('/evidencias')
def evidencias():
    # Dos autores en evidencias
    autores = "KAROL MICHEL NIÑO VALLEJO y WENDY YILETZY ALVAREZ ORTIZ"
    return render_template('evidencias.html', autor=autores)

@app.route('/recomendaciones')
def recomendaciones():
    return render_template('recomendaciones.html', autor="KERLY VALENTINA SOSA QUIJANO")

@app.route('/conclusiones')
def conclusiones():
    return render_template('conclusiones.html', autor="KERLY VALENTINA SOSA QUIJANO")

if __name__ == '__main__':
    app.run(debug=True)