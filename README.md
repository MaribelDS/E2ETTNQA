Prueba técnica NTTData             
Versión utilizadas para la prueba  
Npm 8.15.0                         
Nodjs 12.22.9  
Cypress 10.8.0                   


####### Ejecución la prueba #######

Se requiere tomar en consideración lo siguiente:
1.- Crear una cookie de user y cambiar un numerp o letra que este dentro de los hexadecimal(0-9 a-f), para que en cada ejecución de pruebas sea diferente.

cy.setCookie('user', 'e4664419-361d-e4d9-fa26-3157cbe284f3')

2.- Desde la terminal de VS, ubicados en el proyecto ejecutar 
npx cypress open.

3.- El proyecto para que se ejecute de manera adecuada debe estar en la yltima versión de Cypress, caso contrario al ejecutar las pruebas sera necesario reemplazar nombres como: integración por E2E, spec.js por spec.cy.js.