
from flask import Flask, jsonify
from products import products

app = Flask(__name__)

# @app.route('/a')
# def app():
#   print('Server running')

# Peticion de tipo get a la ruta products
@app.route('/products')
def getProducts():
  return jsonify({"products":products, 'message': 'Products list'})

@app.route('/products/<string:product_name>')
def getProduct(product_name):
  productFound = [product for product in products if product['name'] == product_name]
  # print(product_name) 
  if len(productFound) > 0:
    return jsonify({"message": productFound[0]})
  return jsonify({"message": "Product not found"})


if __name__ == '__main__':
  app.run(debug=True, port=5002)