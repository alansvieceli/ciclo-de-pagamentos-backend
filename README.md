Ciclo de pagamentos - backend

npm init -y

npm i --save 

express            > Ele é projetado para construir aplicativos da Web e APIs. Servidor we
mongoose           > Persistencia de dados no MongoDB, mapeamento ODM (Mapeamento Objeto Documento)
body-parser        > midleware, interpretar requisição. Form ou json
lodash             > funç;oes utilitárias
mongoose-paginate  > paginação das consultas
express-query-int  > corrige o erro de paginação
node-restfull      > integrar expressa com mongoose

npm i --save-dev

nodemon


GET http://localhost:3003/api/ciclo-de-pagamentos/

POST http://localhost:3003/api/ciclo-de-pagamentos/

nome:fevereiro/19
mes:2
ano:2019
credito[0][nome]:Salario Empresa
credito[0][valor]:7000
credito[1][nome]:Extra
credito[1][valor]:2500
debito[0][nome]:Net
debito[0][valor]:80.56
debito[0][situacao]:PAGO
debito[1][nome]:Luz
debito[1][valor]:180.44
debito[1][situacao]:AGENDADO

PUT http://localhost:3003/api/ciclo-de-pagamentos/5d0ad4c2a4fd9043b06c2aef

nome:fevereiro/19
mes:2
ano:2019
credito[0][nome]:Salario Empresa
credito[0][valor]:7000
credito[1][nome]:Extra
credito[1][valor]:2500
debito[0][nome]:Net
debito[0][valor]:80.56
debito[0][situacao]:PAGO
debito[1][nome]:Luz
debito[1][valor]:180.44
debito[1][situacao]:AGENDADO

DELETE http://localhost:3003/api/ciclo-de-pagamentos/5d0ad4c2a4fd9043b06c2aef


-----------------------------
heroku
-----------------------------

npm install -g heroku-cli

heroku --version

https://github.com/cod3rcursos/deploy-heroku-backend