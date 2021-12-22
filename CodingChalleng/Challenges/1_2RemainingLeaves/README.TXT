Hoy es un día ventoso y muchas hojas de árboles cubren el jardín. Escriba un programa que calcule el número de hojas
que quedan en el jardín en función de su ubilicación y de una serie de ráfagas de viento.

Funcionamiento:
- El terreno está representado por una cuadrícula que tiene height casillas de alto y width casillas de ancho.
- La casilla superior izquierda está situada en (0, 0) donde el primer número entero representa la fila y el segundo la columna.
- Cada elemento de la cuadrícula representa el número de hojas en el suelo.
- La serie de ráfagas, winds, es una cadena compuesta por los caracteres -u (arriba), -d (abajo), -r (derecha), -l (izquierda).
- Cada ráfaga de viento mueve las hojas de la cuadrícula una casilla en la dirección del viento.
- Las hojas salen volando del jardin cuando el viento las empuja fuera de la cuadrícula.

Implementación:
Implemente remainingLeaves(width, height, leaves, windws)
- Toma como entradas los enteros -width y -height, la matriz de enteros 2D leaves y la cadena -wins con:
    * 0 < width < 20
    * 0 < height < 20
    * 0 <= leaves < 20
    * 0 <= número de caracteres en winds < 20
- y devuelve el número de hojas que quedan en el suelo como un número entero.

Nota importante: en -leaves, el primer entero representa las filas y el segundo las columnas.
