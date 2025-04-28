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