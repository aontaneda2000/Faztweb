# Aplicacion rest api trabaja con json
# Instalar flask <=> pip que es administrador de paquetes

# importar 'flask', 'jsonify' transf a objt del browser, 'request' se mira los datos que se estan enviando
from flask import Flask, jsonify, request

# app: aplicacion de servidor
app = Flask(__name__)

# importar productos
from products import products

# Ruta por defecto GET
@app.route('/ping')
# esta funcion se ejecuta cuando visita la ruta
def ping():
  # devuleve un json
  return jsonify({'message': 'pong'})

# Ruta y  Peticion GET
@app.route('/products')
def getProducts():
  return jsonify({'products': products, 'message': 'Products list'} )

# Peticion Get > acceder un producto de la lista de products <=> establecer el tipo de dato en ruta para pasar por parametro
@app.route('/products/<string:product_name>')
def getProduct(product_name):
  print(product_name)

  # Recorrer lista para obtener un producto en especifico
  productsFound = [product for product in products if product['name'] == product_name ]

  # Logica para obtener un producto
  if(len(productsFound) > 0):
    return jsonify({'products': productsFound[0]})
  return jsonify({'message': 'Product not found'})
  # return 'received'

# Peticion POST: almacena en la memoria del ordenador
@app.route('/products', methods=['POST'])
def addProduct():
  # imprimir q los datos estamos recibiendo con request
  # print(request.json)

  # recibir productos desde el cliente thunder
  new_products = {
    "name": request.json['name'],
    "price": request.json['price'],
    "quantity": request.json['quantity']
  }
  # agregar nuevo dato ala bdd
  products.append(new_products)
  # mensaje
  return jsonify({"message": "Products add succesfully", "products": products })

# # Ruta o path <> Peticion actualizar producto con htpp put
# @app.route('/products/<string:product_name>', methods=['PUT'])
# def editProduct(product_name):
#   # Buscar producto dentro de la lista
#   # recorrer producto
#   productFound = [product for product in products if product['name'] == product_name]
#   if (len(productFound) > 0):
#     productFound[0]['name'] = request.json('name')
#     productFound[0]['price'] = request.json('price')
#     productFound[0]['quantity'] = request.json('quantity')
#     return jsonify({
#       "message": "Product UPDATED", 
#       "products": productFound[0]
#       } )
#   return jsonify({"message": "not found"})

@app.route('/products/<string:product_name>', methods=['PUT'])
def editProduct(product_name):
    productsFound = [product for product in products if product['name'] == product_name]
    if (len(productsFound) > 0):
        productsFound[0]['name'] = request.json['name']
        productsFound[0]['price'] = request.json['price']
        productsFound[0]['quantity'] = request.json['quantity']
        return jsonify({
            'message': 'Product Updated',
            'product': productsFound[0]
        })
    return jsonify({'message': 'Product Not found'})

@app.route('/products/<string:product_name>', methods=['DELETE'])
def deleteProduct(product_name):
  # retorna de lista de productos
  productsFound = [product for product in products if product['name'] == product_name]

  # Si encuentra el producto 
  if len(productsFound) > 0:
    # Remove de la lista el elemento encontrado
    products.remove(productsFound[0])

    return jsonify({
      "message": "Product deleted",
       "Products": products
       
       })
      #  Si no encuentra el producto
  return jsonify({"message" : "Produt not found"})


# iniciar aplicacion
if __name__  == '__main__':
  # modo debug: reinicia app y puerto del server
  app.run(debug=True, port=4000)
  # correr servidor python app.py




# Conceptos de python
# Listas, funciones que reciban proiedades
# metodos de listas append, remove
