# JamstackAPI

##Back End

El sitio obtiene las fuentes de datos de noticas, consumiento la api de newsapi.org
El sitio actualmente busca las ultimas 5 noticias, al momento de la construccion.

En el siguiente ejemplo agregare mas funcionalidad, para que ciertos datos sean traidos tambien tras solicitud del usuario.

##CI/CD

El sitio usa Eleventy como SSG y el control de versiones a traves de GIT, cada vez que un nuevo cambio es generado en el codigo, el generado por el SSG, empujado a GIT, desencadena la construccion y el nuevo despliegue del sitio a la CDN a traves de Netlify.
