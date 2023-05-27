# Client-implementation project
Esta es la primera versión para el proyecto E-Commerce solicitado por cliente, la solución está dada por el cliente (Angular/Vainila) y el servidor (Express). Ambas partes son independientes, es decir no es una aplicación totalmente monolítica. 

## Front End

Para la parte del cliente se tendrá en su mayor parte un monolíto, salvo con el design studio, el cual estará hecho con Vainilla Javascrip e integrado con la aplicación principal mediante un microfrontend. Estos son algunos de los patrones de diseño que se implementarán según los requerimientos hechos por el cliente:

    - Repository (Infraestructura)
    - Strategy (Carrito)
    - Command (Design Studio)
    - Event Delegation (Design Studio)
    - Singleton (Servicios en general)
    - Observer (Funcionalidades reactivas)

### Arquitectura

**Arquitectura Limpia**



![](https://sixphere.com/wp-content/uploads/2021/09/4c56a51a-964d-4546-b8e0-0e658535e87c.png)

Para la implementación de esta arquitectura, teniendo en cuenta la modularización, rendimiento, escalabilidad, reusabilidad de la aplicación, se dispone de la siguiente estructura de carpetas para el proyecto:


src/

|---app/

|   |---shared/

|   |   |---components/

|   |   |---directives/

|   |   |---pipes/

|   |---core/

|   |   |---services/

|   |   |---interceptors/

|   |   |   |---tokent-interceptos.ts

|   |   |---guards/

|   |---modules/

|   |   |---authenticacion/

|   |   |   |---components/

|   |   |   |   |---login/

|   |   |   |   |   |---login.component.ts

|   |   |   |   |   |---login.component.spec.ts

|   |   |   |   |   |---login.component.html

|   |   |   |   |   |---login.component.css

|   |   |   |   |---register/

|   |   |   |   |---forgot-password/

|   |   |   |---services/

|   |   |   |---repository/

|   |   |   |---entities/

|   |   |   |---infrastructure/

|   |   |   |---auth.module.ts

|   |   |   |---auth-module.routing.ts

|   |   |---checkout/

|   |   |   |---components/

|   |   |   |---services/

|   |   |   |---repository/

|   |   |   |---entities/

|   |   |   |---infrastructure/

|   |   |   |---strategies/

|   |   |   |---checkout.module.ts

|   |   |   |---checkout-module.routing.ts

|   |   |---cart/

|   |   |   |---components/

|   |   |   |---services/

|   |   |   |---repository/

|   |   |   |---entities/

|   |   |   |---infrastructure/

|   |   |   |---strategies/

|   |   |   |---cart.module.ts

|   |   |   |---cart-module.routing.ts

|   |   |---product/

|   |   |   |---components/

|   |   |   |---services/

|   |   |   |---repository/

|   |   |   |---entities/

|   |   |   |---infrastructure/

|   |   |   |---strategies/

|   |   |   |---product.module.ts

|   |   |   |---product-module.routing.ts

|---assets/ # Not big Static files 

|---styles/ # Sass architechture based on partials and mixins

Para efectos de carga rápida se tiene una estructura modular aprovechando el lazy loading de angular.


## Lineamientos de desarrollo

- **Metodología GitFlow** : Se trabajará con esta metodología, por lo que se tendrá una rama de desarrollo, de la cual se desprenderán las ramas de los features, se debe solicitar PR y superar las pruebas unitarias requeridas por el líder técnico antes de pasar a integrarse a desarrollo. Este ambiente de desarrollo, se replicará al ambiente de producción cuando se tenga el pmv.
- **Creación de módulo nuevo** : Para esto se debe crear un nuevo módulo en la carpeta modules, debe garantizarse que este módulo se
    cargue de forma perezosa, y tenga su respectivo router y estructura de carpetas internas: components, services, repository, entities, infrastructure, strategies (en caso de que se requiera).
- **Metodología atómica** : Todo debe estár enfocado a su reutilización e independecia, de tal forma que se puedan construir atomos, celulas,   etc... por medio de la reutilización de los mismos.
- **Testing** : Las pruebas unitarias, son obligatorias para componentes transversales.
- **Token Interceptor** : Existe un interceptor global para firmar las peticiones con el JWT para la gestión de permisos dentro de la aplicación.
- **Guardianes** : Si un guardian va a ser reutilizado en varias partes de la aplicación, debe ir en la carpeta
core/guards, de lo contrario se debe crear una carpeta guards en el módulo específico en donde se requiera el mismo.
- **i18n** : La aplicación será internacionalizable, por lo que todo texto a renderizar, bien sea en el .html o por data binding, debe ser declarado en su respectivo archivo de idioma "es.json" O "en.json", etc...
- **Eventos** : Para el manejo de eventos, se debe garantizar que los eventListeners, o las subscripciones sean cerradas una vez cumplan su función o deje de utilizarse el componente/módulo para efectos de rendimiento. En caso de necesitarse manejar muchos eventos para diferentes acciones, es obligatorio la utilización del **patrón de delegación de eventos**.








