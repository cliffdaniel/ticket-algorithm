# Proyecto: Validar Venta de Tickets - Taquilla de Los Vengadores

## Descripción

Vania trabaja en una taquilla donde cada cliente puede pagar con billetes de $25, $50 o $100. El costo de cada boleto es $25 y Vania empieza sin cambio.

La función `tickets(bills)` determina si podrá vender tickets correctamente y dar cambio.

## Archivos incluidos

- `tickets.js`: Función principal.
- `test.js`: Pruebas de ejemplo.
- `README.md`: Instrucciones.

## Cómo ejecutar

1. Instala Node.js si no lo tienes instalado.
2. Ejecuta en la terminal:

```bash
node test.js
```

## Ejemplos

```javascript
const { tickets } = require('./tickets');

// ✅ Vania puede vender a todos y dar cambio correctamente.
console.log(tickets([25, 25, 50]));         // => SI

// ❌ Vania no tendrá suficiente dinero para dar cambio a los 100 dólares.
console.log(tickets([25, 100]));             // => NO

// ❌ Vania no tendrá suficiente dinero para dar 75 dólares de cambio/vuelto (no puedes crear dos billetes de 25 a partir de un billete de 50).
console.log(tickets([25, 25, 50, 50, 100])); // => NO

// ✅ Vania puede vender a todos y dar cambio correctamente.
console.log(tickets([25, 25, 25, 100]));     // => SI

// ❌ No hay forma de dar cambio con billetes de 50 solamente.
console.log(tickets([50, 50, 50]));          // => NO
```