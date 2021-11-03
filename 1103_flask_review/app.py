from flask import Flask, render_template, request, url_for, redirect

app = Flask(__name__)

board = [['jjm', 'hello jjm']]

@app.route('/')
def home():
  return render_template('list.html', rows = board)

@app.route('/add', methods=["post"])
def add():
  name = request.form['name']
  context = request.form['context']
  board.append([name, context])
  return redirect(url_for('home'))

@app.route('/update/<int:uid>', methods=['GET', 'POST'])
def update(uid):
  if request.method == 'POST':
    list_index = uid - 1
    name = request.form['name']
    context = request.form['context']
    board[list_index] = [name, context]
    return redirect(url_for('home'))

  else:
    return render_template('update.html', index=uid, rows=board)

@app.route('/delete/<int:uid>')
def delete(uid):
  list_index = uid - 1
  del board[list_index]
  return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)