const currentYear=new Date().getFullYear();
const newYear=new Date('January 1 ${currentYear+1} 00:00:00');
console.log (newYear);